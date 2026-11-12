#!/usr/bin/env python3
"""
One-time move of the docsify docs into Starlight's layout.

Run from the repository root on a clean checkout of master:

    python3 scripts/docsify-to-starlight.py

It is idempotent only in the sense that it refuses to run twice (it checks for
src/content/docs). To pick up docs merged after the migration branch was cut,
reset the branch to the scaffold commit, rebase it on master and run it again.

What it does:
  1. git mv every docs page into src/content/docs/ (README.md in a folder
     becomes index.md, "System Roles.md" becomes system-roles.md) and the
     images/icons into public/. technical/classes/ and its index technical/README.md (generated in Feb 2025) are
     left where they are and are not part of the site.
  2. Gives every page front matter: the first "# " heading becomes `title`
     (and is removed, because Starlight renders the title), the first
     paragraph becomes `description` (max ~155 chars).
  3. Rewrites links: `installation/x.md#a`, `/installation/x.md`,
     `?id=a` and `https://docs.leantime.io/#/x` become `/installation/x/#a`;
     `../_images/...` becomes `/_images/...`.
"""

import os
import re
import subprocess
import sys

DEST = 'src/content/docs'
SECTIONS = ['api', 'development', 'getting-started', 'installation', 'knowledge-base', 'technical', 'using-leantime']
EXCLUDE_PREFIXES = ['technical/classes/', 'technical/README.md']  # generated Feb 2025, not migrated
RENAMES = {'knowledge-base/System Roles.md': 'knowledge-base/system-roles.md'}
# Links that were already broken on the docsify site, pointed at the page they meant.
BROKEN_LINK_FIXES = {
    'installation/quick-start.md': 'installation/installation-types.md',
    'installation/quick-installation.md': 'installation/package-installation.md',
    'knowledge-base/idea-management.md': 'using-leantime/idea-management.md',
}
SOURCE_PAGES = set()
PUBLIC = ['_images', 'favicon.ico', 'apple-touch-icon.png']


def git(*args):
    subprocess.run(['git', *args], check=True)


def target_path(src):
    """Repo-relative source path -> path below src/content/docs."""
    if src in RENAMES:
        return RENAMES[src]
    d, f = os.path.split(src)
    if f.lower() == 'readme.md':
        return os.path.join(d, 'index.md')
    return src


def slug_for(src):
    """Repo-relative source .md path -> site URL path (with trailing slash)."""
    t = target_path(src)[:-3]
    if t.endswith('/index') or t == 'index':
        t = t[: -len('index')].rstrip('/')
    # Starlight lowercases slugs and turns spaces into hyphens
    t = '/'.join(re.sub(r'\s+', '-', seg.lower()) for seg in t.split('/'))
    return '/' + (t + '/' if t else '')


def collect():
    pages = []
    for section in SECTIONS:
        for root, _dirs, files in os.walk(section):
            for f in files:
                if not f.endswith('.md') or f.startswith('_'):
                    continue
                p = os.path.join(root, f)
                if any(p.startswith(x) for x in EXCLUDE_PREFIXES):
                    continue
                pages.append(p)
    return sorted(pages)


FENCE = re.compile(r'^\s*(```|~~~)')


def split_frontmatter(text):
    if text.startswith('---\n'):
        end = text.find('\n---\n', 4)
        if end != -1:
            fm = {}
            for line in text[4:end].splitlines():
                if ':' in line:
                    k, v = line.split(':', 1)
                    fm[k.strip()] = v.strip().strip('"\'')
            return fm, text[end + 5:]
    return {}, text


def strip_md(s):
    s = re.sub(r'!\[[^\]]*\]\([^)]*\)', '', s)
    s = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', s)
    s = re.sub(r'<[^>]+>', '', s)
    s = re.sub(r'[*_`]', '', s)
    s = s.replace('&reg;', '®').replace('&nbsp;', ' ')
    return re.sub(r'\s+', ' ', s).strip()


def first_paragraph(lines):
    para, in_fence, in_style = [], False, False
    for line in lines:
        if re.search(r'<style', line, re.I):
            in_style = True
        if in_style:
            if re.search(r'</style>', line, re.I):
                in_style = False
            continue
        if FENCE.match(line):
            in_fence = not in_fence
            if para:
                break
            continue
        if in_fence:
            continue
        st = line.strip()
        if not st:
            if para:
                break
            continue
        if st.startswith(('#', '>', '|', '-', '*', '<', '![', '[!', '1.')) or ' | ' in st:
            if para:
                break
            continue
        para.append(st)
    text = strip_md(' '.join(para))
    if len(text) > 155:
        text = text[:152].rsplit(' ', 1)[0].rstrip(',.;:') + '…'
    return text


def yaml_str(s):
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'


def resolve_md_link(url, page_src):
    """Return the new URL for a link to a .md page, or None if not a page link."""
    m = re.match(r'^([^#?]*\.md)(?:(?:#|\?id=)(.*))?$', url)
    if not m:
        return None
    path, anchor = m.group(1), m.group(2)
    path = path.replace('%20', ' ')
    if path.startswith('/'):
        path = path[1:]
    elif path.startswith('./') or path.startswith('../'):
        path = os.path.normpath(os.path.join(os.path.dirname(page_src), path))
    # docsify had relativePath: false, so bare paths are relative to the root.
    # Some pages still link siblings by bare name (e.g. "email-configuration.md");
    # fall back to the page's own folder when the root path doesn't exist.
    if path not in SOURCE_PAGES:
        sibling = os.path.normpath(os.path.join(os.path.dirname(page_src), path))
        if sibling in SOURCE_PAGES:
            path = sibling
    path = BROKEN_LINK_FIXES.get(path, path)
    return slug_for(path) + ('#' + anchor if anchor else '')


def rewrite_links(body, page_src):
    out, in_fence = [], False
    for line in body.splitlines(keepends=True):
        if FENCE.match(line):
            in_fence = not in_fence
        if in_fence:
            out.append(line)
            continue

        def repl(m):
            url = m.group(2)
            new = None
            hm = re.match(r'^https?://docs\.leantime\.io/#/([^?#)]*)(?:\?id=([^)]*))?$', url)
            if hm:
                p = hm.group(1).strip('/')
                new = '/' + (p + '/' if p else '') + ('#' + hm.group(2) if hm.group(2) else '')
            elif url.startswith('?id='):
                new = '#' + url[4:]
            elif re.search(r'_images/', url) and not url.startswith('http'):
                new = '/_images/' + url.split('_images/', 1)[1]
            elif not url.startswith(('http', 'mailto:', '#')):
                new = resolve_md_link(url, page_src)
            return m.group(1) + (new or url) + m.group(3)

        line = re.sub(r'(\]\()([^)\s]+)(\s*(?:"[^"]*")?\))', repl, line)
        line = re.sub(r'(src=["\'])(?:\.\./|\./|/)?_images/', r'\1/_images/', line)
        out.append(line)
    return ''.join(out)


def convert(page_src, dest):
    text = open(dest, encoding='utf-8').read()
    fm, body = split_frontmatter(text)
    lines = body.splitlines()

    title, in_fence = None, False
    for i, line in enumerate(lines):
        if FENCE.match(line):
            in_fence = not in_fence
        if not in_fence and re.match(r'^#\s+\S', line):
            title = strip_md(re.sub(r'#+\s*$', '', line[1:]))
            del lines[i]
            break
    if not title:
        title = fm.get('title') or os.path.splitext(os.path.basename(dest))[0].replace('-', ' ').title()

    description = first_paragraph(lines)
    if page_src.startswith('api/classes/'):
        parts = page_src.split('/')
        service = os.path.splitext(parts[-1])[0]
        domain = parts[4] if len(parts) > 5 else service
        title = f'{service} API ({domain})' if domain != service else f'{service} API'
        description = f'JSON-RPC methods of the Leantime {domain} {service} service: leantime.rpc.{domain}.{service}.*'
    body = rewrite_links('\n'.join(lines).lstrip('\n') + '\n', page_src)

    head = ['---', 'title: ' + yaml_str(title)]
    if description:
        head.append('description: ' + yaml_str(description))
    head.append('---')
    with open(dest, 'w', encoding='utf-8') as f:
        f.write('\n'.join(head) + '\n\n' + body)


def main():
    if os.path.exists(DEST):
        sys.exit(DEST + ' already exists; migration already ran.')
    pages = collect()
    SOURCE_PAGES.update(pages)
    moved = []
    for src in pages:
        dest = os.path.join(DEST, target_path(src))
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        git('mv', src, dest)
        moved.append((src, dest))
    os.makedirs('public', exist_ok=True)
    for p in PUBLIC:
        if os.path.exists(p):
            git('mv', p, os.path.join('public', p))
    for src, dest in moved:
        convert(src, dest)
    print(f'Moved and converted {len(moved)} pages.')


if __name__ == '__main__':
    main()
