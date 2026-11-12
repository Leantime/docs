import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

const SITE = 'https://docs.leantime.io';

/** Turn a path segment like "using-leantime" into "Using Leantime" for breadcrumbs. */
function segmentLabel(segment: string): string {
	return segment
		.split('-')
		.map((word) => (word === 'api' ? 'API' : word.charAt(0).toUpperCase() + word.slice(1)))
		.join(' ');
}

/**
 * Adds per-page structured data: a TechArticle for the page and a BreadcrumbList built from its URL.
 * Site-wide Organization / WebSite / SoftwareApplication data lives in astro.config.mjs.
 */
export const onRequest = defineRouteMiddleware((context) => {
	const route = context.locals.starlightRoute;
	const { title, description } = route.entry.data;
	const url = new URL(context.url.pathname, SITE).href;
	const segments = context.url.pathname.split('/').filter(Boolean);

	if (segments.length === 0) {
		return;
	}

	const breadcrumbs = [{ name: 'Docs', item: `${SITE}/` }];
	let path = '';
	segments.forEach((segment, index) => {
		path += `/${segment}`;
		const isLast = index === segments.length - 1;
		breadcrumbs.push({ name: isLast ? title : segmentLabel(segment), item: `${SITE}${path}/` });
	});

	const article: Record<string, unknown> = {
		'@type': 'TechArticle',
		'@id': `${url}#article`,
		headline: title,
		url,
		inLanguage: 'en',
		isPartOf: { '@id': `${SITE}/#website` },
		about: { '@id': 'https://leantime.io/#software' },
		publisher: { '@id': 'https://leantime.io/#organization' },
	};
	if (description) {
		article.description = description;
	}
	if (route.lastUpdated) {
		article.dateModified = route.lastUpdated.toISOString();
	}

	const graph = {
		'@context': 'https://schema.org',
		'@graph': [
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
		],
	};

	route.head.push({
		tag: 'script',
		attrs: { type: 'application/ld+json' },
		content: JSON.stringify(graph),
	});
});
