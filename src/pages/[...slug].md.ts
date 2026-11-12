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

export const GET: APIRoute<{ entry: CollectionEntry<'docs'> }> = ({ props }) => {
	const { entry } = props;
	const url = `${SITE}/${entry.id}/`;
	// Root-relative links and images become absolute, so the file still works when copied elsewhere.
	const body = (entry.body ?? '').replace(/(\]\(|src=["'])\//g, `$1${SITE}/`);
	const header = [`# ${entry.data.title}`, ''];
	if (entry.data.description) header.push(`> ${entry.data.description}`, '');
	header.push(`Source: ${url}`, '');
	return new Response(header.join('\n') + '\n' + body, {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
};
