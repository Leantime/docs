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
	let paragraphLine = false; // the line before was paragraph text, so a === or --- under it makes a heading
	body.split('\n').forEach((line, index) => {
		// CommonMark fences: up to 3 spaces of indent; a closing fence uses the same character, is at
		// least as long as the opening one and has nothing after it.
		const marker = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
		if (marker) {
			const [, run, rest] = marker;
			if (!fence) fence = { char: run[0], length: run.length };
			else if (run[0] === fence.char && run.length >= fence.length && rest.trim() === '') fence = null;
			paragraphLine = false;
			return;
		}
		if (fence) return;
		// Setext headings: a line of = (H1) or - (H2) directly under paragraph text.
		const setext = paragraphLine && line.match(/^ {0,3}(=+|-+)\s*$/);
		const atx = line.match(/^ {0,3}(#{1,6})\s+\S/); // CommonMark allows up to 3 spaces of indent
		paragraphLine = !setext && !atx && line.trim() !== '' && !/^ {0,3}([-*+]\s|\d+[.)]\s|>|\||<|#{1,6}(\s|$))/.test(line);
		if (!setext && !atx) return;
		const level = setext ? (setext[1][0] === '=' ? 1 : 2) : atx[1].length;
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
