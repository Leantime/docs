/**
 * The Leantime repository's GitHub star count, shown on the "Star" button in the header.
 *
 * Read from GitHub when the site is built, so it's as fresh as the last deploy. If GitHub can't be
 * reached (offline, rate limit), the button shows "Star" without a count.
 */
export const REPO_URL = 'https://github.com/Leantime/leantime';

const REPO_API = 'https://api.github.com/repos/Leantime/leantime';

async function starCount(): Promise<number | null> {
	try {
		const headers: Record<string, string> = { Accept: 'application/vnd.github+json', 'User-Agent': 'leantime-docs-build' };
		if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
		const response = await fetch(REPO_API, { headers, signal: AbortSignal.timeout(5000) });
		if (response.ok) {
			const stars = Number((await response.json()).stargazers_count);
			if (Number.isFinite(stars) && stars > 0) return stars;
		}
	} catch {
		// Show the button without a count.
	}
	return null;
}

/** For example 12091, or null when GitHub couldn't be reached. */
export const STARS = await starCount();

/** Short form for the button, for example "12.1k". */
export const STARS_SHORT =
	STARS === null ? null : STARS >= 1000 ? `${(STARS / 1000).toFixed(1).replace(/\.0$/, '')}k` : String(STARS);
