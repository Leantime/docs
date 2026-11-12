import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

const SITE = 'https://docs.leantime.io';

/**
 * A plain Markdown copy of every page at /path/to/page.md, for AI assistants, agents and
 * tools that read Markdown better than HTML. Pages link to it with <link rel="alternate">.
 * The MDX homepage is skipped because its body is components, not text.
 */
export const getStaticPaths: GetStaticPaths = async () => {
	const entries = await getCollection('docs', (entry) => entry.id !== 'index' && !entry.data.draft);
	return entries.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
};

/**
 * MDX pages use components (Steps, Tabs, Cards); keep their text and drop the markup.
 * A tab becomes a bold label line so the alternatives stay apart.
 */
function plainMarkdown(body: string): string {
	return body
		.replace(/^import .*$/gm, '')
		.replace(/^\s*<TabItem[^>]*label=["']([^"']+)["'][^>]*>\s*$/gm, '**$1:**')
		.replace(/^\s*<\/?(Steps|Tabs|TabItem|CardGrid)\b[^>]*>\s*$/gm, '')
		.replace(/^\s*<(Card|LinkCard)\b[^>]*title=["']([^"']+)["'][^>]*href=["']([^"']+)["'][^>]*\/>\s*$/gm, '- [$2]($3)')
		.replace(/\n{3,}/g, '\n\n')
		.trim() + '\n';
}

export const GET: APIRoute<{ entry: CollectionEntry<'docs'> }> = ({ props }) => {
	const { entry } = props;
	const url = `${SITE}/${entry.id}/`;
	// Root-relative links and images become absolute, so the file still works when copied elsewhere.
	const source = entry.body ?? '';
	const body = (entry.filePath?.endsWith('.mdx') ? plainMarkdown(source) : source).replace(/(\]\(|src=["'])\//g, `$1${SITE}/`);
	const header = [`# ${entry.data.title}`, ''];
	if (entry.data.description) header.push(`> ${entry.data.description}`, '');
	header.push(`Source: ${url}`, '');
	const { glance } = entry.data;
	if (glance) {
		header.push('## At a glance', '');
		if (glance.minutes) header.push(`- Time: about ${glance.minutes} minutes`);
		if (glance.level) header.push(`- Level: ${glance.level}`);
		if (glance.needs?.length) header.push(`- You need: ${glance.needs.join('; ')}`);
		if (glance.result) header.push(`- At the end: ${glance.result}`);
		header.push('');
	}
	return new Response(header.join('\n') + '\n' + body, {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
};
