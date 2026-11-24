// Gives every docs screenshot its real width and height, so the browser reserves the space before
// the image loads and the text doesn't jump (layout shift). Starlight's CSS (max-width: 100%;
// height: auto) scales them down, and the two attributes only set the aspect ratio.
//
// The first screenshot on a page is usually in view when the page opens, so it loads right away with
// high priority; every screenshot after it loads lazily, as the reader scrolls towards it.
//
// Images stay in public/_images, so their addresses (and names) don't change. This runs on the built
// HTML (after `astro build`), because the default Markdown processor doesn't run rehype plugins.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const IMG = /<img\b[^>]*\bsrc="(\/_images\/[^"?#]+)[^"]*"[^>]*>/g;
const sizes = new Map();

function sizeOf(publicDir, src) {
	if (!sizes.has(src)) {
		const file = join(publicDir, decodeURI(src));
		sizes.set(
			src,
			existsSync(file)
				? sharp(file)
						.metadata()
						.then(({ width, height }) => (width && height ? { width, height } : null))
						.catch(() => null)
				: Promise.resolve(null),
		);
	}
	return sizes.get(src);
}

async function htmlFiles(dir) {
	const out = [];
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) out.push(...(await htmlFiles(path)));
		else if (entry.name.endsWith('.html')) out.push(path);
	}
	return out;
}

async function sizePage(html, publicDir) {
	const tags = [...html.matchAll(IMG)];
	if (!tags.length) return null;
	let first = true;
	let out = '';
	let last = 0;
	for (const m of tags) {
		let tag = m[0];
		const extra = [];
		if (!/\swidth=/.test(tag) || !/\sheight=/.test(tag)) {
			const size = await sizeOf(publicDir, m[1]);
			if (size) extra.push(`width="${size.width}"`, `height="${size.height}"`);
		}
		if (!/\sdecoding=/.test(tag)) extra.push('decoding="async"');
		// Small inline icons (the integration logos next to headings) don't count as the page's first screenshot.
		const isIcon = /class="[^"]*heading-icon/.test(tag);
		if (first && !isIcon) {
			if (!/\sfetchpriority=/.test(tag)) extra.push('fetchpriority="high"');
			first = false;
		} else if (!/\sloading=/.test(tag)) {
			extra.push('loading="lazy"');
		}
		if (extra.length) tag = tag.replace(/^<img\b/, `<img ${extra.join(' ')}`);
		out += html.slice(last, m.index) + tag;
		last = m.index + m[0].length;
	}
	return out + html.slice(last);
}

/** Astro integration: sizes and lazy-loads the screenshots in the built pages. */
export default function imageSize() {
	let publicDir;
	return {
		name: 'leantime-image-size',
		hooks: {
			'astro:config:done': ({ config }) => {
				publicDir = fileURLToPath(config.publicDir);
			},
			'astro:build:done': async ({ dir, logger }) => {
				let pages = 0;
				for (const file of await htmlFiles(fileURLToPath(dir))) {
					const html = await readFile(file, 'utf8');
					const sized = await sizePage(html, publicDir);
					if (sized && sized !== html) {
						await writeFile(file, sized);
						pages++;
					}
				}
				const missing = [...sizes].length;
				logger.info(`Sized and lazy-loaded the screenshots on ${pages} pages (${missing} images).`);
			},
		},
	};
}
