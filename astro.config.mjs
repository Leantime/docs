// @ts-check
import { existsSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';

const SITE = 'https://docs.leantime.io';

// "Use Leantime" is grouped by task, like the app's own menu. A page shows up once its file exists,
// so pages from content PRs appear as soon as they're merged and converted. Every page in
// using-leantime/ must be in one of these groups: the build stops and names any page that isn't.
// "page|Label" sets a shorter menu label in the app's words; otherwise the page title is used.
const DOCS_DIR = new URL('./src/content/docs/', import.meta.url);
const pageExists = (slug) =>
	['.md', '.mdx', '/index.md', '/index.mdx'].some((ext) => existsSync(new URL(slug + ext, DOCS_DIR)));
const USE_LEANTIME_GROUPS = [
	['Your day', ['my-work-dashboard', 'calendars', 'timesheets|Time tracking', 'notes', 'notifications', 'mobile-app|On your phone']],
	['Plan and track', ['managing-projects', 'task-management|To-Dos', 'custom-fields|Custom Fields', 'roadmap-planning|Milestones', 'goals']],
	['Above your projects', ['programs', 'strategies']],
	['Think', ['idea-management|Ideas', 'blueprints', 'whiteboards', 'research-boards', 'retrospectives']],
	['Write and share', ['docs', 'reports']],
	['Your team and company', ['managing-clients', 'user-management', 'company-settings', 'integrations|Integrations', 'import-csv']],
];
const placedPages = new Set(USE_LEANTIME_GROUPS.flatMap(([, pages]) => pages.map((entry) => entry.split('|')[0])));
const unplacedPages = readdirSync(new URL('using-leantime/', DOCS_DIR))
	.filter((file) => /\.mdx?$/.test(file))
	.map((file) => file.replace(/\.mdx?$/, ''))
	.filter((page) => !placedPages.has(page));
if (unplacedPages.length) {
	throw new Error(`Add ${unplacedPages.map((p) => `using-leantime/${p}`).join(', ')} to a group in USE_LEANTIME_GROUPS (astro.config.mjs).`);
}
// "Start here" in reading order: how to begin, what Leantime does, how to organize (with the
// examples by type of work nested under it), the first project and the FAQ.
// Pages appear once their file exists (some come from open content PRs).
const WORK_TYPES_LABEL = 'By type of work';
const WORK_TYPES = [
	'getting-started/client-work|Client work',
	'getting-started/product-and-game-development|Product and game development',
	'getting-started/nonprofits|Non-profits and NGOs',
	'getting-started/research|Research and academic work',
	'getting-started/your-own-work|Your own work',
];
const START_HERE = [
	'getting-started/get-started',
	'getting-started/features',
	'getting-started/organize-your-work',
	WORK_TYPES_LABEL,
	'getting-started/new-project',
	'installation/frequently-asked-questions|FAQ',
];
const menuEntries = (entries) =>
	entries
		.map((entry) => entry.split('|'))
		.filter(([slug]) => pageExists(slug))
		.map(([slug, menuLabel]) => (menuLabel ? { slug, label: menuLabel } : { slug }));
const workTypeItems = menuEntries(WORK_TYPES);
const startHereItems = START_HERE.flatMap((entry) => {
	if (entry !== WORK_TYPES_LABEL) return menuEntries([entry]);
	return workTypeItems.length ? [{ label: WORK_TYPES_LABEL, items: workTypeItems }] : [];
});

// Pages nested under a Use Leantime page in the menu, like the Blueprint templates under Blueprints.
const CHILD_PAGES = {
	blueprints: [
		'blueprints/project-value-canvas',
		'blueprints/project-brief',
		'blueprints/swot-analysis',
		'blueprints/lean-canvas',
		'blueprints/business-model-canvas',
		'blueprints/risk-analysis',
		'blueprints/environment-analysis',
		'blueprints/insights|Observe / Learn: Insights',
		'blueprints/logic-model|Logic Model',
	],
};
const useLeantimeEntry = ([page, menuLabel]) => {
	const entry = menuLabel ? { slug: `using-leantime/${page}`, label: menuLabel } : { slug: `using-leantime/${page}` };
	const children = menuEntries(CHILD_PAGES[page] ?? []);
	if (!children.length) return entry;
	return { label: menuLabel ?? page.charAt(0).toUpperCase() + page.slice(1), collapsed: true, items: [{ ...entry, label: 'Overview' }, ...children] };
};
const useLeantimeGroups = USE_LEANTIME_GROUPS.map(([label, pages]) => ({
	label,
	items: pages
		.map((entry) => entry.split('|'))
		.filter(([page]) => pageExists(`using-leantime/${page}`))
		.map(useLeantimeEntry),
})).filter((group) => group.items.length > 0);

// AI, plugins and project management concepts, in reading order. Pages appear once their file exists.
const AI_PAGES = [
	'ai|Overview',
	'ai/use-leantime-from-your-ai-assistant',
	'ai/everyday-workflows|Everyday workflows',
	'ai/leantime-cloud-ai|L.E.O. in Leantime Cloud',
	'installation/leantime-mcp|MCP server: connect your assistant',
	'ai/working-with-ai',
	'ai/glossary|Glossary',
];
const PLUGIN_PAGES = [
	'installation/using-plugins|Overview',
	'plugins/strategy-pro',
	'plugins/programs',
	'plugins/whiteboards',
	'plugins/custom-fields',
	'plugins/recurring-todos',
	'plugins/notes',
	'plugins/pomodoro',
	'plugins/daily-intentions',
	'plugins/advanced-authentication',
];
const CONCEPT_PAGES = [
	'knowledge-base|Overview',
	'knowledge-base/whatislean|Lean',
	'knowledge-base/agile|Agile',
	'knowledge-base/scrum',
	'knowledge-base/kanban',
	'knowledge-base/phasesofproject',
	'knowledge-base/idea-development',
	'knowledge-base/logic-model|Logic models',
];

/**
 * Site-wide structured data: who publishes the docs, the product they describe and its source code.
 * The Organization @id matches the one on leantime.io, so search engines join the two sites.
 * Per-page data (TechArticle / APIReference, BreadcrumbList, FAQPage) is added in src/routeData.ts.
 */
const siteSchema = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Organization',
			'@id': 'https://leantime.io/#organization',
			name: 'Leantime',
			url: 'https://leantime.io/',
			logo: 'https://leantime.io/wp-content/uploads/2023/03/leantime-gradient-logo-350-100-transparent.webp',
			sameAs: [
				'https://github.com/Leantime',
				'https://www.linkedin.com/company/leantime/',
				'https://x.com/intheleantime',
				'https://facebook.com/intheleantime',
				'https://hub.docker.com/r/leantime/leantime',
			],
		},
		{
			'@type': 'WebSite',
			'@id': `${SITE}/#website`,
			name: 'Leantime Documentation',
			url: `${SITE}/`,
			description: 'Documentation for Leantime, the open source project management system: self-hosting, configuration, SSO, plugins, the API and the MCP server.',
			inLanguage: 'en',
			about: { '@id': 'https://leantime.io/#software' },
			publisher: { '@id': 'https://leantime.io/#organization' },
		},
		{
			'@type': 'SoftwareApplication',
			'@id': 'https://leantime.io/#software',
			name: 'Leantime',
			description:
				'Open source project management system for non-project managers. Combines strategy, planning and execution, and is designed for people with ADHD, dyslexia and autism. Self-hosted or cloud.',
			applicationCategory: 'BusinessApplication',
			applicationSubCategory: 'Project management software',
			operatingSystem: 'Linux, Windows, macOS (Docker, or PHP 8.2+ with MySQL or MariaDB)',
			softwareRequirements: 'PHP 8.2 or later and MySQL 8.0+ or MariaDB 10.6+, or Docker',
			featureList: [
				'Task management with kanban boards, lists and Gantt timelines',
				'Milestones, sprints and roadmaps',
				'Goals and strategy boards (Lean Canvas, SWOT, idea boards)',
				'Timesheets and time tracking',
				'Docs and wiki',
				'Single sign-on with OpenID Connect and LDAP',
				'JSON-RPC API and MCP server for AI assistants',
				'Plugins and marketplace',
			],
			keywords: 'open source project management, self-hosted project management, kanban, agile, scrum, Jira alternative, Asana alternative, ClickUp alternative, neurodiversity-friendly',
			url: 'https://leantime.io/',
			downloadUrl: 'https://github.com/Leantime/leantime/releases',
			installUrl: `${SITE}/installation/installation-types/`,
			license: 'https://www.gnu.org/licenses/agpl-3.0.en.html',
			isAccessibleForFree: true,
			offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free and open source to self-host' },
			publisher: { '@id': 'https://leantime.io/#organization' },
			sameAs: ['https://github.com/Leantime/leantime', 'https://hub.docker.com/r/leantime/leantime'],
		},
		{
			'@type': 'SoftwareSourceCode',
			'@id': 'https://github.com/Leantime/leantime#code',
			name: 'Leantime',
			codeRepository: 'https://github.com/Leantime/leantime',
			programmingLanguage: ['PHP', 'JavaScript'],
			runtimePlatform: 'PHP 8.2+',
			license: 'https://www.gnu.org/licenses/agpl-3.0.en.html',
			targetProduct: { '@id': 'https://leantime.io/#software' },
			author: { '@id': 'https://leantime.io/#organization' },
		},
	],
};

/**
 * Old docsify links: /#/installation/x?id=y and /installation/x?id=y.
 * Hash fragments never reach the server, so this has to happen in the browser.
 */
const legacyRedirect = `(function(){try{
var h=location.hash;
if(h.indexOf('#/')===0){var p=h.slice(2),id='',q=p.indexOf('?id=');
if(q>-1){id=p.slice(q+4);p=p.slice(0,q);}
p=p.replace(/\\.md$/,'').replace(/(^|\\/)README$/i,'').replace(/^\\/+|\\/+$/g,'');
// Same slug rules as the migrated pages: decoded, lower case, spaces as hyphens.
try{p=decodeURIComponent(p);}catch(e){}
p=p.toLowerCase().replace(/\\s+/g,'-');
location.replace('/'+(p?p+'/':'')+(id?'#'+id:''));return;}
var m=location.search.match(/[?&]id=([^&]+)/);
if(m){var a=decodeURIComponent(m[1]);history.replaceState(null,'',location.pathname+'#'+m[1]);
document.addEventListener('DOMContentLoaded',function(){var el=document.getElementById(a);if(el)el.scrollIntoView();});}
}catch(e){}})();`;

/**
 * Easy-read text (src/components/ThemeSelect.astro): apply the saved choice before the page
 * paints, and load Atkinson Hyperlegible only for readers who chose it.
 */
const readingMode = `(function(){
window.ltLoadReadingFont=function(){if(document.getElementById('lt-reading-font'))return;
var l=document.createElement('link');l.id='lt-reading-font';l.rel='stylesheet';
l.href='https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap';
document.head.appendChild(l);};
try{if(localStorage.getItem('lt-reading')==='easy'){document.documentElement.dataset.reading='easy';window.ltLoadReadingFont();}}catch(e){}
})();`;

/**
 * "On this page" hidden (src/components/TableOfContents.astro): apply the saved choice before
 * the page paints, so the text column doesn't jump.
 */
const tocState = `try{if(localStorage.getItem('lt-toc')==='collapsed')document.documentElement.dataset.ltToc='collapsed';}catch(e){}`;

// A box that scrolls sideways needs to be a keyboard stop with a name, or keyboard users can't scroll
// it and screen readers announce several identical regions (WCAG 2.1.1, 4.1.2).
// Code: Expressive Code adds role="region" and tabindex="0" while a block scrolls, but no name, so
// name it then: "Code example 3, nginx". Tables: Starlight lets wide tables scroll, but leaves them
// out of the tab order, so do both while a table is wider than its column: "Table 2".
// The numbers keep the names unique on the page.
const scrollRegionLabels = `(function(){try{
var LANG={ini:'settings',bash:'terminal',sh:'terminal',shell:'terminal',yaml:'YAML',json:'JSON',nginx:'nginx',apache:'Apache',text:'text',php:'PHP',js:'JavaScript',sql:'SQL'};
function nth(sel,el){return Array.prototype.indexOf.call(document.querySelectorAll(sel),el)+1;}
function codeName(pre){var l=pre.getAttribute('data-language');return 'Code example '+nth('.expressive-code pre',pre)+(l&&LANG[l]?', '+LANG[l]:'');}
new MutationObserver(function(ms){ms.forEach(function(m){var el=m.target;if(!el.matches||!el.matches('.expressive-code pre'))return;
if(el.getAttribute('role')==='region')el.setAttribute('aria-label',codeName(el));else el.removeAttribute('aria-label');});})
.observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:['role']});
var T='.sl-markdown-content table';
function tables(){document.querySelectorAll(T).forEach(function(t){var wide=t.scrollWidth>t.clientWidth+1;
if(wide&&!t.hasAttribute('tabindex')){t.setAttribute('tabindex','0');t.setAttribute('role','region');t.setAttribute('aria-label','Table '+nth(T,t));}
else if(!wide&&t.getAttribute('role')==='region'){t.removeAttribute('tabindex');t.removeAttribute('role');t.removeAttribute('aria-label');}});}
var timer;function later(){clearTimeout(timer);timer=setTimeout(tables,150);}
document.addEventListener('DOMContentLoaded',tables);window.addEventListener('resize',later);
}catch(e){}})();`;

const crisp = `window.$crisp=[];window.CRISP_WEBSITE_ID="-K4sjRan9gm59MvONQG-";(function(){var d=document,s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`;

const gtag = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FKZP7LPS4X');`;

export default defineConfig({
	site: SITE,
	// Pages that moved after the first docsify-to-Starlight conversion. Old docsify hash links
	// (/#/ai/keycloak-sso) reach these paths through legacyRedirect first.
	redirects: {
		'/ai/keycloak-sso': '/installation/keycloak-sso/',
		// Old concept pages retired in docs#99; their topics live on these pages now.
		'/knowledge-base/system-roles': '/using-leantime/user-management/',
		'/knowledge-base/wheretostart': '/getting-started/get-started/',
		'/knowledge-base/product-validation': '/using-leantime/research-boards/',
		'/knowledge-base/team-happiness': '/using-leantime/retrospectives/',
	},
	integrations: [
		starlight({
			title: 'Leantime Documentation',
			description:
				'Install, configure and use Leantime, the open source project management system for non-project managers. Self-hosting, Docker, SSO, plugins, API and MCP.',
			// Dark mode uses the app's white logo; the gradient one is hard to read on dark.
			logo: { light: './src/assets/leantime-logo.webp', dark: './src/assets/leantime-logo-white.svg', alt: 'Leantime', replacesTitle: true },
			favicon: '/favicon.ico',
			customCss: ['./src/styles/custom.css'],
			expressiveCode: {
				// docs use these fence labels for .env and server config snippets
				shiki: { langAlias: { env: 'ini', '.env': 'ini', dotenv: 'ini', 'leantime.conf': 'nginx', leantime: 'nginx' } },
			},
			editLink: { baseUrl: 'https://github.com/Leantime/docs/edit/master/' },
			lastUpdated: true,
			// No Previous/Next links: the sidebar isn't a sequence, so they often pointed somewhere unrelated.
			pagination: false,
			routeMiddleware: './src/routeData.ts',
			components: {
				Header: './src/components/Header.astro',
				Footer: './src/components/Footer.astro',
				PageTitle: './src/components/PageTitle.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
				TableOfContents: './src/components/TableOfContents.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Leantime/leantime' },
				{ icon: 'discord', label: 'Community chat', href: 'https://discord.gg/4zMzJtAq9z' },
			],
			head: [
				{ tag: 'script', content: legacyRedirect },
				{ tag: 'script', content: readingMode },
				{ tag: 'script', content: tocState },
				{ tag: 'script', content: scrollRegionLabels },
				{ tag: 'script', attrs: { type: 'application/ld+json' }, content: JSON.stringify(siteSchema) },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: `${SITE}/og-image.png` } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:alt', content: 'Leantime Documentation' } },
				{ tag: 'link', attrs: { rel: 'alternate', type: 'text/plain', title: 'llms.txt', href: '/llms.txt' } },
				{ tag: 'script', attrs: { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-FKZP7LPS4X' } },
				{ tag: 'script', content: gtag },
				{ tag: 'script', content: crisp },
			],
			// The menu is sorted by who it's for: everyone (Start here, Use Leantime), people who run
			// their own Leantime (Self-host), Leantime Cloud customers, and developers (Build on).
			// The label row under each page title says whether a page is core or a plugin and where it
			// applies (src/lib/availability.ts).
			sidebar: [
				{
					label: 'Start here',
					items: startHereItems,
				},
				{
					label: 'Use Leantime',
					items: [
						...useLeantimeGroups,
						{ label: 'AI with Leantime', items: menuEntries(AI_PAGES) },
						{ label: 'Plugins', items: menuEntries(PLUGIN_PAGES) },
					],
				},
				{
					label: 'Project management concepts',
					collapsed: true,
					items: menuEntries(CONCEPT_PAGES),
				},
				{
					label: 'Self-host Leantime',
					items: [
						{ label: 'System Requirements', slug: 'installation/system-requirements' },
						{
							label: 'Installation',
							items: [
								{ label: 'Overview', slug: 'installation/installation-types' },
								{ label: 'Package based', slug: 'installation/package-installation' },
								{ label: 'Shared hosting (cPanel)', slug: 'installation/shared-hosting' },
								{ label: 'Docker', slug: 'installation/docker' },
								{ label: 'Docker Troubleshooting', slug: 'installation/docker-troubleshooting' },
								{ label: 'Synology NAS', slug: 'installation/synology' },
								{ label: 'Kubernetes', slug: 'installation/kubernetes' },
								{ label: 'Subfolder', slug: 'installation/subfolder' },
								{ label: 'Other', slug: 'installation/other-methods' },
							],
						},
						{
							label: 'Configuration',
							items: [
								{ label: 'Overview', slug: 'installation/configuration' },
								{ label: 'Email', slug: 'installation/email-configuration' },
								{ label: 'Installing plugins', slug: 'installation/plugin-installation' },
								{ label: 'Plugin licenses & updates', slug: 'installation/plugin-licenses' },
								{ label: 'Authentication', slug: 'installation/authentication-configuration' },
								{ label: 'Keycloak SSO', slug: 'installation/keycloak-sso' },
								...menuEntries(['installation/reverse-proxy|Reverse proxy']), // appears once docs#102 is converted
								{ label: 'Mobile app', slug: 'installation/mobile-app-setup' },
							],
						},
						{ label: 'Backup & Restore', slug: 'installation/backup-restore' },
						{ label: 'Move to a new server', slug: 'installation/move-server' },
						{ label: 'Upgrade Leantime', slug: 'installation/upgrade-guide' },
						{ label: 'Common Issues', slug: 'installation/common-issues' },
					],
				},
				{
					label: 'Leantime Cloud',
					items: [
						// Cloud pages (account, billing, what's included, support hours) once they're written.
						{ label: 'Try Leantime Cloud', link: 'https://leantime.io/pricing/' },
						{ label: 'Cloud help and support', link: 'https://support.leantime.io/' },
					],
				},
				{
					label: 'Build on Leantime',
					items: [
						{ label: 'Development / Local', slug: 'installation/development' },
						{ label: 'Use the API', slug: 'api/usage' },
						{ label: 'Using the Leantime CLI', slug: 'development/commandline' },
						{ label: 'Plugin Development', slug: 'development/plugin-development' },
						{ label: 'Contributing', slug: 'development/contributing' },
						{ label: 'Report a security issue', slug: 'development/security' },
						{
							label: 'References',
							collapsed: true,
							items: [
								{ label: 'API Endpoints', slug: 'api' },
								{ label: 'API Classes', collapsed: true, items: [{ autogenerate: { directory: 'api/classes' } }] },
								{ label: 'Event Hooks / Filters', slug: 'technical/hooks' },
								{ label: 'Source Code', link: 'https://github.com/Leantime/leantime/tree/master/app' },
							],
						},
					],
				},
			],
			plugins: [
				starlightLinksValidator({ errorOnRelativeLinks: false, errorOnLocalLinks: false }),
				starlightLlmsTxt({
					projectName: 'Leantime',
					description:
						'Leantime is an open source (AGPL-3.0) project management system for non-project managers, built with PHP (Laravel) and MySQL/MariaDB. It can be self-hosted with Docker or the release package, or used as Leantime Cloud. These docs cover installing and configuring self-hosted Leantime, single sign-on, plugins, the JSON-RPC API, the MCP server, and how to use Leantime.',
					details: [
						'Terms and facts that help when answering questions about Leantime:',
						'',
						'- "To-dos" are tasks. Milestones group to-dos on a timeline. "Blueprints" are strategy boards such as Lean Canvas and SWOT.',
						'- Self-hosted settings are environment variables prefixed `LEAN_`, set in `config/.env` or in the container environment.',
						'- Roles, from least to most access: Read Only, Commenter, Editor, Manager, Administrator, Owner.',
						'- Plugins (for example AdvancedAuth, MCP Server, Leantime Strategies, Custom Fields) come from the marketplace at marketplace.leantime.io when you self-host; most are paid and need a license key. Leantime Cloud includes them, except Advanced Authentication, which is self-hosted only. OpenID Connect and LDAP sign-in are also self-hosted only.',
						'- The AI features inside Leantime are only on Leantime Cloud. Connecting your own AI assistant through the MCP Server works on Cloud and self-hosted.',
						'- Every page is also available as Markdown: add `.md` to the page path, e.g. https://docs.leantime.io/installation/docker.md',
						'- For bugs, use GitHub issues at https://github.com/Leantime/leantime/issues. Report security issues privately as described at https://docs.leantime.io/development/security/.',
					].join('\n'),
					customSets: [
						{ label: 'Self-hosting', description: 'install, configure, upgrade, back up and troubleshoot self-hosted Leantime', paths: ['installation/**'] },
						{ label: 'Using Leantime', description: 'user guides, AI and MCP, plugins and project management concepts', paths: ['using-leantime/**', 'getting-started/**', 'knowledge-base/**', 'ai/**', 'plugins/**', 'blueprints/**', 'installation/leantime-mcp', 'installation/using-plugins'] },
						{ label: 'Developers', description: 'JSON-RPC API, CLI, plugin development and event hooks', paths: ['api', 'api/usage', 'development/**', 'technical/**', 'installation/development'] },
					],
					demote: ['api/classes/**', 'technical/hooks'],
					optionalLinks: [
						{ label: 'Leantime website', url: 'https://leantime.io/', description: 'product overview, pricing and Leantime Cloud' },
						{ label: 'Source code', url: 'https://github.com/Leantime/leantime', description: 'the open source repository' },
						{ label: 'Plugin marketplace', url: 'https://marketplace.leantime.io/', description: 'plugins and license keys' },
					],
				}),
			],
		}),
	],
});
