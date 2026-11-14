/**
 * Where a page applies, shown as a row of labels under its title:
 * - core feature or plugin (only on pages about using Leantime),
 * - where it runs: Leantime Cloud, self-hosted, or both,
 * - the Leantime version the page was last checked against, when known.
 *
 * Most pages get this from their folder (DEFAULTS). A page's front matter overrides it:
 *   edition: both | self-hosted | cloud
 *   plugin: { name: "Leantime Strategies", url: "https://marketplace.leantime.io/product/leantime-strategies/" }
 *   checked: "3.14"
 */
export type Edition = 'both' | 'self-hosted' | 'cloud';

export interface Availability {
	edition?: Edition;
	/** Show "Core feature" or "Plugin: …". Off for setup, developer and knowledge pages. */
	showFeature: boolean;
	plugin?: { name: string; url?: string };
	checked?: string;
}

export const EDITION_LABELS: Record<Edition, string> = {
	both: 'Cloud and self-hosted',
	'self-hosted': 'Self-hosted only',
	cloud: 'Leantime Cloud only',
};

export const MARKETPLACE_URL = 'https://marketplace.leantime.io/';

/** Folder defaults. Longest matching prefix wins. */
const DEFAULTS: Array<[string, Omit<Availability, 'plugin' | 'checked'>]> = [
	['installation/leantime-mcp', { edition: 'both', showFeature: true }],
	['installation/using-plugins', { edition: 'both', showFeature: false }],
	['installation/frequently-asked-questions', { showFeature: false }],
	['installation/development', { showFeature: false }],
	['installation/', { edition: 'self-hosted', showFeature: false }],
	['using-leantime/', { edition: 'both', showFeature: true }],
	['ai/', { edition: 'both', showFeature: true }],
	['getting-started/', { edition: 'both', showFeature: false }],
	['knowledge-base/', { showFeature: false }],
	['api', { edition: 'both', showFeature: false }],
	['development/', { showFeature: false }],
	['technical/', { showFeature: false }],
];

interface Frontmatter {
	edition?: Edition;
	plugin?: { name: string; url?: string };
	checked?: string;
}

/** The labels for a page: folder defaults, then its front matter. */
export function availabilityOf(id: string, data: Frontmatter): Availability {
	const match = DEFAULTS.filter(([prefix]) => id.startsWith(prefix)).sort((a, b) => b[0].length - a[0].length)[0];
	const base: Availability = match ? { ...match[1] } : { showFeature: false };
	if (data.edition) base.edition = data.edition;
	if (data.plugin) {
		base.plugin = data.plugin;
		base.showFeature = true;
	}
	if (data.checked) base.checked = data.checked;
	return base;
}
