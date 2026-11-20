// Lists search and cross-linking gaps in the pages. Broken links and anchors are already
// caught by starlight-links-validator during the build; this checks what it doesn't:
//
//   - a page without a hand-written description (missing, or the first paragraph cut off with "…")
//   - a description outside 110-160 characters, or a search title over 65 characters
//   - a page no other page links to (only the menu reaches it)
//
// It prints warnings and doesn't stop the build; with --strict it exits with an error instead,
// for checking a content PR before it merges. Generated reference pages (api/classes,
// technical/classes) and drafts are skipped.
//
// Run on its own with: node scripts/check-seo.mjs [--strict]
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = 'src/content/docs';
const SKIP = [/^api\/classes\//i, /^technical\/classes\//i];
const strict = process.argv.includes('--strict');

function* files(dir) {
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) yield* files(path);
		else if (/\.mdx?$/.test(name)) yield path;
	}
}

// 'using-leantime/goals.md' -> '/using-leantime/goals/', 'ai/index.md' -> '/ai/'
const routeOf = (rel) => ('/' + rel.replace(/\.mdx?$/, '').replace(/(^|\/)index$/, '') + '/').replace(/\/+/g, '/').toLowerCase();
const front = (text, key) => text.match(new RegExp(`^${key}:\\s*"?(.*?)"?\\s*$`, 'm'))?.[1] ?? '';

const pages = new Map(); // route -> { rel, front, body }
for (const path of files(ROOT)) {
	const rel = relative(ROOT, path);
	if (SKIP.some((re) => re.test(rel))) continue;
	const text = readFileSync(path, 'utf8');
	const match = text.match(/^---\n([\s\S]*?)\n---\n/);
	if (match && /^draft:\s*true/m.test(match[1])) continue;
	pages.set(routeOf(rel), { rel, front: match ? match[1] : '', body: match ? text.slice(match[0].length) : text });
}

const warnings = [];
const inbound = new Map([...pages.keys()].map((route) => [route, 0]));

for (const [route, page] of pages) {
	const description = front(page.front, 'description');
	if (!description || description.endsWith('…')) {
		warnings.push(`${page.rel}: no hand-written description (add one in scripts/page-metadata.json or the front matter)`);
	} else if (description.length < 110 || description.length > 160) {
		warnings.push(`${page.rel}: description is ${description.length} characters (aim for 110-160)`);
	}
	const searchTitle = page.front.match(/^\s+content:\s*"(.*)"\s*$/m)?.[1] || front(page.front, 'title');
	if (searchTitle.length > 65) warnings.push(`${page.rel}: search title is ${searchTitle.length} characters (aim for 65 or fewer)`);

	const body = page.body.replace(/^\s{0,3}(```|~~~)[\s\S]*?^\s{0,3}\1/gm, '');
	const linked = new Set();
	for (const [, target] of body.matchAll(/\]\((\/[^)\s#]*)/g)) {
		const to = target.replace(/\/?$/, '/').toLowerCase();
		if (to !== route && inbound.has(to)) linked.add(to);
	}
	for (const to of linked) inbound.set(to, inbound.get(to) + 1);
}

for (const [route, count] of inbound) {
	if (count === 0 && route !== '/') warnings.push(`${pages.get(route).rel}: no other page links here (link it from the pages that mention it)`);
}

for (const warning of warnings.sort()) console.warn(`SEO: ${warning}`);
console.log(`check-seo: ${pages.size} pages checked, ${warnings.length} to look at`);
if (strict && warnings.length) process.exit(1);
