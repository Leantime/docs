// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';

const SITE = 'https://docs.leantime.io';

/**
 * Site-wide structured data: who publishes the docs and what product they describe.
 * Per-page data (TechArticle + BreadcrumbList) is added in src/routeData.ts.
 */
const siteSchema = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Organization',
			'@id': 'https://leantime.io/#organization',
			name: 'Leantime',
			url: 'https://leantime.io/',
			logo: `${SITE}/_images/leantime_logo.png`,
			sameAs: [
				'https://github.com/Leantime/leantime',
				'https://hub.docker.com/r/leantime/leantime',
				'https://discord.gg/4zMzJtAq9z',
			],
		},
		{
			'@type': 'WebSite',
			'@id': `${SITE}/#website`,
			name: 'Leantime Documentation',
			url: `${SITE}/`,
			publisher: { '@id': 'https://leantime.io/#organization' },
		},
		{
			'@type': 'SoftwareApplication',
			'@id': 'https://leantime.io/#software',
			name: 'Leantime',
			applicationCategory: 'BusinessApplication',
			applicationSubCategory: 'Project management',
			operatingSystem: 'Linux, Windows, macOS (Docker or PHP 8.2+)',
			url: 'https://leantime.io/',
			license: 'https://www.gnu.org/licenses/agpl-3.0.en.html',
			offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
			publisher: { '@id': 'https://leantime.io/#organization' },
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
location.replace('/'+(p?p+'/':'')+(id?'#'+id:''));return;}
var m=location.search.match(/[?&]id=([^&]+)/);
if(m){var a=decodeURIComponent(m[1]);history.replaceState(null,'',location.pathname+'#'+m[1]);
document.addEventListener('DOMContentLoaded',function(){var el=document.getElementById(a);if(el)el.scrollIntoView();});}
}catch(e){}})();`;

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
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Leantime/leantime' },
				{ icon: 'discord', label: 'Community chat', href: 'https://discord.gg/4zMzJtAq9z' },
			],
			head: [
				{ tag: 'script', content: legacyRedirect },
				{ tag: 'script', attrs: { type: 'application/ld+json' }, content: JSON.stringify(siteSchema) },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
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
					label: 'AI & Plugins',
					items: [
						{ label: "Leantime's MCP Server", slug: 'installation/leantime-mcp' },
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
						'Leantime is an open source project management system for non-project managers. These docs cover self-hosting (package, Docker), configuration, SSO (OIDC, LDAP, AdvancedAuth), plugins, the JSON-RPC API and the MCP server.',
				}),
			],
		}),
	],
});
