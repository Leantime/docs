/**
 * The Leantime version the docs describe, shown next to "Docs" in the header.
 *
 * Read from the latest GitHub release when the site is built. If GitHub can't be reached
 * (offline, rate limit), the build uses FALLBACK_VERSION instead, so update it now and then.
 */
export const FALLBACK_VERSION = '3.14.0';

const RELEASES_API = 'https://api.github.com/repos/Leantime/leantime/releases/latest';

async function latestRelease(): Promise<string> {
	try {
		const headers: Record<string, string> = { Accept: 'application/vnd.github+json', 'User-Agent': 'leantime-docs-build' };
		if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
		const response = await fetch(RELEASES_API, { headers, signal: AbortSignal.timeout(5000) });
		if (response.ok) {
			const tag = String((await response.json()).tag_name ?? '').replace(/^v/, '');
			if (/^\d+\.\d+(\.\d+)?$/.test(tag)) return tag;
		}
	} catch {
		// Fall through to the fallback.
	}
	return FALLBACK_VERSION;
}

/** Full version, for example "3.14.0". */
export const LEANTIME_VERSION = await latestRelease();

/** Major and minor only, for example "3.14". */
export const SHORT_VERSION = LEANTIME_VERSION.split('.').slice(0, 2).join('.');

/** The release notes for that version. */
export const RELEASE_URL = `https://github.com/Leantime/leantime/releases/tag/v${LEANTIME_VERSION}`;
