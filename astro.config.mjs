// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';

const SITE = 'https://docs.leantime.io';

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

const crisp = `window.$crisp=[];window.CRISP_WEBSITE_ID="-K4sjRan9gm59MvONQG-";(function(){var d=document,s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`;

const gtag = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FKZP7LPS4X');`;

export default defineConfig({
	site: SITE,
	integrations: [
		starlight({
			title: 'Leantime Documentation',
			description:
				'Install, configure and use Leantime, the open source project management system for non-project managers. Self-hosting, Docker, SSO, plugins, API and MCP.',
			logo: { src: './src/assets/leantime-logo.webp', alt: 'Leantime', replacesTitle: true },
			favicon: '/favicon.ico',
			customCss: ['./src/styles/custom.css'],
			expressiveCode: {
				// docs use these fence labels for .env and server config snippets
				shiki: { langAlias: { env: 'ini', '.env': 'ini', dotenv: 'ini', 'leantime.conf': 'nginx', leantime: 'nginx' } },
			},
			editLink: { baseUrl: 'https://github.com/Leantime/docs/edit/master/' },
			lastUpdated: true,
			routeMiddleware: './src/routeData.ts',
			components: {
				Header: './src/components/Header.astro',
				PageTitle: './src/components/PageTitle.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Leantime/leantime' },
				{ icon: 'discord', label: 'Community chat', href: 'https://discord.gg/4zMzJtAq9z' },
			],
			head: [
				{ tag: 'script', content: legacyRedirect },
				{ tag: 'script', content: readingMode },
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
			sidebar: [
				{
					label: 'Installation & Updates',
					items: [
						{ label: 'System Requirements', slug: 'installation/system-requirements' },
						{
							label: 'Installation',
							items: [
								{ label: 'Overview', slug: 'installation/installation-types' },
								{ label: 'Package based', slug: 'installation/package-installation' },
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
								{ label: 'Plugins', slug: 'installation/plugin-installation' },
								{ label: 'Authentication', slug: 'installation/authentication-configuration' },
								{ label: 'Project Integrations', slug: 'using-leantime/integrations' },
							],
						},
						{ label: 'Backup & Restore', slug: 'installation/backup-restore' },
						{ label: 'Upgrade Guide', slug: 'installation/upgrade-guide' },
						{ label: 'Common Issues', slug: 'installation/common-issues' },
					],
				},
				{
					label: 'AI with Leantime',
					items: [
						// ai/ pages (overview, working with AI, glossary, walkthroughs) once #66 merges
						{ autogenerate: { directory: 'ai' } },
						{ label: 'MCP server: connect AI assistants', slug: 'installation/leantime-mcp' },
					],
				},
				{
					label: 'Plugins & FAQ',
					items: [
						{ label: 'Using Plugins', slug: 'installation/using-plugins' },
						{ label: 'FAQ', slug: 'installation/frequently-asked-questions' },
					],
				},
				{ label: 'Using Leantime', collapsed: true, items: [{ autogenerate: { directory: 'using-leantime' } }] },
				{ label: 'Getting Started', collapsed: true, items: [{ autogenerate: { directory: 'getting-started' } }] },
				{ label: 'Knowledge Base', collapsed: true, items: [{ autogenerate: { directory: 'knowledge-base' } }] },
				{
					label: 'Development',
					items: [
						{ label: 'Development / Local', slug: 'installation/development' },
						{ label: 'Connect to the API', slug: 'api/usage' },
						{ label: 'Using the Leantime CLI', slug: 'development/commandline' },
						{ label: 'Plugin Development', slug: 'development/plugin-development' },
					],
				},
				{
					label: 'References',
					items: [
						{ label: 'API Endpoints', slug: 'api' },
						{ label: 'API Classes', collapsed: true, items: [{ autogenerate: { directory: 'api/classes' } }] },
						{ label: 'Event Hooks / Filters', slug: 'technical/hooks' },
						{ label: 'Source Code', link: 'https://github.com/Leantime/leantime/tree/master/app' },
					],
				},
				{
					label: 'Links',
					items: [
						{ label: 'Leantime.io', link: 'https://leantime.io/' },
						{ label: 'Get Leantime', link: 'https://leantime.io/pricing/' },
						{ label: 'Installation Support', link: 'https://marketplace.leantime.io/' },
						{ label: 'Report a Bug', link: 'https://github.com/Leantime/leantime/issues/new' },
						{ label: 'Community Forum', link: 'https://community.leantime.io/' },
						{ label: 'Blog', link: 'https://leantime.io/blog/' },
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
						'- Plugins (for example AdvancedAuth, MCP Server, Strategy Pro, Custom Fields) come from the marketplace at marketplace.leantime.io; most are paid and need a license key.',
						'- Every page is also available as Markdown: add `.md` to the page path, e.g. https://docs.leantime.io/installation/docker.md',
						'- For bugs, use GitHub issues at https://github.com/Leantime/leantime/issues. Report security issues privately as described in the repository security policy.',
					].join('\n'),
					customSets: [
						{ label: 'Self-hosting', description: 'install, configure, upgrade, back up and troubleshoot self-hosted Leantime', paths: ['installation/**'] },
						{ label: 'Using Leantime', description: 'user guides and project management concepts', paths: ['using-leantime/**', 'getting-started/**', 'knowledge-base/**'] },
						{ label: 'Developers', description: 'JSON-RPC API, CLI, plugin development and event hooks', paths: ['api', 'api/usage', 'development/**', 'technical/**', 'installation/development', 'installation/leantime-mcp'] },
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
