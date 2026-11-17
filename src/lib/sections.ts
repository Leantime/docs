/**
 * The docs' colour-coded sections. Each has a colour token in src/styles/custom.css
 * (--lt-section-<key>) and a name shown above every page title.
 */
export type SectionKey = 'install' | 'use' | 'ai' | 'learn' | 'dev';

export const SECTION_NAMES: Record<SectionKey, string> = {
	install: 'Self-hosting',
	use: 'Using Leantime',
	ai: 'AI with Leantime',
	learn: 'Knowledge base',
	dev: 'Developers',
};

/** Pages that sit in a folder of another section. Checked first, longest prefix wins. */
const BY_PREFIX: Array<[string, SectionKey]> = [
	['installation/leantime-mcp', 'ai'],
	['installation/development', 'dev'],
	['installation/using-plugins', 'use'],
	['installation/', 'install'],
	['ai/', 'ai'],
	['using-leantime/', 'use'],
	['getting-started/', 'use'],
	['plugins/', 'use'],
	['blueprints/', 'use'],
	['knowledge-base/', 'learn'],
	['api', 'dev'],
	['development/', 'dev'],
	['technical/', 'dev'],
];

/**
 * The section of a page: its `section` front matter, else its folder. A folder's overview
 * page has the folder name without the slash as its id (`ai`, `knowledge-base`).
 */
export function sectionOf(id: string, frontmatter?: SectionKey): SectionKey | undefined {
	if (frontmatter) return frontmatter;
	return BY_PREFIX.find(([prefix]) => id.startsWith(prefix) || (prefix.endsWith('/') && id === prefix.slice(0, -1)))?.[1];
}
