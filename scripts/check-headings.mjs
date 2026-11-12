// Fails the build when a page's headings are out of order.
//
// Starlight renders the front matter `title` as the page's only H1, so a page body
// starts at H2 (##) and never skips a level (an H4 needs an H3 above it).
// Screen readers, search engines and AI assistants all read the outline from these.
//
// Run on its own with: node scripts/check-headings.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = 'src/content/docs';

function* pages(dir) {
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) yield* pages(path);
		else if (/\.mdx?$/.test(name)) yield path;
	}
}

const problems = [];
for (const path of pages(ROOT)) {
	const text = readFileSync(path, 'utf8');
	const body = text.replace(/^---\n[\s\S]*?\n---\n/, '');
	const offset = text.slice(0, text.length - body.length).split('\n').length - 1;
	let fence = null;
	let previous = 1; // the title
	body.split('\n').forEach((line, index) => {
		const marker = line.match(/^\s*(`{3,}|~{3,})/);
		if (marker) {
			if (!fence) fence = marker[1][0];
			else if (marker[1][0] === fence) fence = null;
			return;
		}
		const heading = !fence && line.match(/^ {0,3}(#{1,6})\s+\S/); // CommonMark allows up to 3 spaces of indent
		if (!heading) return;
		const level = heading[1].length;
		const where = `${relative('.', path)}:${index + offset + 1}`;
		if (level === 1) problems.push(`${where}  H1 in the page body; the title is the H1, start sections at ##`);
		else if (level > previous + 1) problems.push(`${where}  H${level} after H${previous}; don't skip heading levels`);
		previous = level;
	});
}

if (problems.length) {
	console.error(`Heading structure problems (${problems.length}):\n  ` + problems.join('\n  '));
	process.exit(1);
}
console.log('Headings: every page starts at H2 and skips no levels.');
