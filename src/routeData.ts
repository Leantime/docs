import { getCollection } from 'astro:content';
import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

const SITE = 'https://docs.leantime.io';
const OG_IMAGE = `${SITE}/og-image.png`;

/** Section names for breadcrumbs and articleSection, keyed by the first URL segment. */
const SECTIONS: Record<string, string> = {
	installation: 'Installation & Configuration',
	'using-leantime': 'Using Leantime',
	'getting-started': 'Getting Started',
	'knowledge-base': 'Knowledge Base',
	development: 'Development',
	api: 'API',
	technical: 'References',
};

/** Pages for administrators and developers; everything under these is marked proficiencyLevel Expert. */
const EXPERT = ['api/', 'development/', 'technical/', 'installation/development'];
const BEGINNER = ['using-leantime/', 'getting-started/', 'knowledge-base/'];

let pageIds: Promise<Set<string>> | undefined;
/** Ids of every built page, so breadcrumbs only link to URLs that exist. */
function existingPages(): Promise<Set<string>> {
	pageIds ??= getCollection('docs').then((entries) => new Set(entries.map((entry) => entry.id)));
	return pageIds;
}

/** Plain text from a Markdown fragment, for FAQ answers. */
function plainText(markdown: string): string {
	return markdown
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/[*_`>#|]/g, '')
		.replace(/^\s*[-+]\s+/gm, '')
		.replace(/\s+/g, ' ')
		.trim();
}

/**
 * Question headings ("### How do I ...?") and the text under them, for FAQPage data.
 * Only used when a page has at least three, so a stray question heading doesn't turn a guide into an FAQ.
 */
function faqEntries(body: string): Array<{ question: string; answer: string }> {
	const lines = body.split('\n');
	const entries: Array<{ question: string; answer: string }> = [];
	let inFence = false;
	let current: { question: string; level: number; text: string[] } | undefined;
	const close = () => {
		if (current) {
			const answer = plainText(current.text.join('\n'));
			if (answer) entries.push({ question: current.question, answer: answer.length > 1200 ? answer.slice(0, 1197) + '...' : answer });
		}
		current = undefined;
	};
	for (const line of lines) {
		if (/^\s*```/.test(line)) inFence = !inFence;
		const heading = inFence ? null : line.match(/^(#{2,4})\s+(.+?)\s*#*\s*$/);
		if (heading) {
			const level = heading[1].length;
			if (current && level > current.level) {
				current.text.push(line);
				continue;
			}
			close();
			const text = plainText(heading[2]);
			if (text.endsWith('?')) current = { question: text, level, text: [] };
			continue;
		}
		current?.text.push(line);
	}
	close();
	return entries.length >= 3 ? entries : [];
}

/**
 * Per-page structured data and the Markdown alternate link.
 * Site-wide Organization / WebSite / SoftwareApplication / SoftwareSourceCode data lives in astro.config.mjs.
 */
export const onRequest = defineRouteMiddleware(async (context) => {
	const route = context.locals.starlightRoute;
	const { entry } = route;
	const { title, description } = entry.data;
	const id = entry.id;

	if (id === 'index') {
		return;
	}

	const url = `${SITE}/${id}/`;
	const section = SECTIONS[id.split('/')[0]];
	const pages = await existingPages();

	// Breadcrumbs: Docs > [section] > [parent pages that exist] > this page.
	const breadcrumbs = [{ name: 'Docs', item: `${SITE}/` }];
	const segments = id.split('/');
	let path = '';
	segments.slice(0, -1).forEach((segment) => {
		path = path ? `${path}/${segment}` : segment;
		if (pages.has(path)) {
			breadcrumbs.push({ name: path === segments[0] && section ? section : segment, item: `${SITE}/${path}/` });
		}
	});
	breadcrumbs.push({ name: title, item: url });

	const isApiReference = id === 'api' || id.startsWith('api/classes/');
	const article: Record<string, unknown> = {
		'@type': isApiReference ? 'APIReference' : 'TechArticle',
		'@id': `${url}#article`,
		headline: title,
		url,
		mainEntityOfPage: url,
		inLanguage: 'en',
		image: OG_IMAGE,
		isPartOf: { '@id': `${SITE}/#website` },
		about: { '@id': 'https://leantime.io/#software' },
		author: { '@id': 'https://leantime.io/#organization' },
		publisher: { '@id': 'https://leantime.io/#organization' },
		wordCount: entry.body ? entry.body.split(/\s+/).filter(Boolean).length : undefined,
	};
	if (description) article.description = description;
	if (section) article.articleSection = section;
	if (route.lastUpdated) article.dateModified = route.lastUpdated.toISOString();
	const { glance } = entry.data;
	if (glance?.level === 'Beginner') article.proficiencyLevel = 'Beginner';
	else if (glance?.level === 'Advanced') article.proficiencyLevel = 'Expert';
	else if (EXPERT.some((prefix) => id.startsWith(prefix))) article.proficiencyLevel = 'Expert';
	else if (BEGINNER.some((prefix) => id.startsWith(prefix))) article.proficiencyLevel = 'Beginner';
	if (glance?.level) article.educationalLevel = glance.level;
	if (glance?.minutes) article.timeRequired = `PT${glance.maxMinutes ?? glance.minutes}M`;
	if (isApiReference) {
		article.programmingModel = 'JSON-RPC 2.0';
		article.targetPlatform = 'Leantime';
	}

	const graph: Array<Record<string, unknown>> = [
		article,
		{
			'@type': 'BreadcrumbList',
			itemListElement: breadcrumbs.map((crumb, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: crumb.name,
				item: crumb.item,
			})),
		},
	];

	const faq = entry.body ? faqEntries(entry.body) : [];
	if (faq.length) {
		graph.push({
			'@type': 'FAQPage',
			'@id': `${url}#faq`,
			url,
			isPartOf: { '@id': `${SITE}/#website` },
			mainEntity: faq.map(({ question, answer }) => ({
				'@type': 'Question',
				name: question,
				acceptedAnswer: { '@type': 'Answer', text: answer },
			})),
		});
	}

	route.head.push(
		{
			tag: 'script',
			attrs: { type: 'application/ld+json' },
			content: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
		},
		// Plain Markdown copy of this page for AI assistants and tools (src/pages/[...slug].md.ts).
		{ tag: 'link', attrs: { rel: 'alternate', type: 'text/markdown', href: `/${id}.md` } },
	);
});
