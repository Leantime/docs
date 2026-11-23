# Report a security issue in Leantime

Report a security issue privately through [GitHub's advisory form](https://github.com/Leantime/leantime/security/advisories/new), with steps that reproduce it on the latest release. A small team of maintainers reviews every report alongside their development work, so the first reply can take about a month. Critical issues are handled first; everything else is fixed in regular releases.

This page covers Leantime itself: the open source edition, and Leantime Cloud, meaning your workspace at `<name>.leantime.io` and the account and billing site at `accounts.leantime.io`. The leantime.io website is out of scope.

## How do I report a security issue in Leantime?

1. **Open [GitHub's private advisory form](https://github.com/Leantime/leantime/security/advisories/new)** for the Leantime repository. Only the maintainers can see what you send. Don't post security issues in public GitHub issues, Discord or the community forum.
2. **Test on the latest release.** Check [the releases page](https://github.com/Leantime/leantime/releases) for the current version. Issues that only affect older versions are fixed by updating.
3. **Describe the steps** to reproduce it, with a working proof of concept: the requests, the role of the account you used, and what you saw.
4. **Answer the four questions** in [How do I rate how serious it is?](#how-do-i-rate-how-serious-it-is) and give the level you think fits.

Reports without steps that work on the latest release are closed.

### Rules for testing

- **Test on your own installation,** or on your own Leantime Cloud workspace. Never on someone else's.
- **Don't read, change or delete data that isn't yours,** and don't take more than you need to show the issue.
- **Don't run denial-of-service attacks or high-volume automated scans,** and don't try phishing or other social engineering on the Leantime team or its customers.
- **Keep the issue private** until the advisory is published.

If you follow these rules, we won't take legal action against you for your report.

## What happens after I report a security issue?

1. **Received.** GitHub confirms your report. It's private between you and the maintainers.
2. **Triaged.** A maintainer tries to reproduce it on the latest release, checks it's in scope and not a duplicate, and rates it with the scale below. This first review can take about a month.
3. **Queued by severity.** Our rating decides the order. Critical issues are worked on first.
4. **Fixed and released.** The fix ships in a regular Leantime release.
5. **Published.** After the fix, we wait at least two more releases before publishing the advisory, so people who host Leantime themselves have time to update. A fix in 3.14.2, for example, is published once 3.14.4 is out.
6. **Credited.** The published advisory names you as the reporter, unless you'd rather not be named.

If a report isn't a security issue, or is a duplicate, we close it with a short reason.

## How long does it take?

| Step | What to expect |
| --- | --- |
| First reply | Up to about a month. Reports are reviewed by a small team alongside their other work. |
| Critical issues | Worked on first, and fixed in a release as soon as possible once confirmed. |
| High, Medium and Low issues | Fixed in regular releases, in order of severity. There's no fixed date, and lower levels can take several months. |
| Publication | At least two releases after the fix. |

Please don't send reminders in the first 30 days. They don't move a report up the queue; an accurate severity rating does. If you believe your report is Critical and you've had no reply after 30 days, add a comment to your advisory.

## How do I rate how serious it is?

Answer these four questions in your report. The answers decide the level, not the worst case you can imagine:

1. **Who can do it?** Anyone on the internet without an account, any signed-in user, a member of the same project, or only an Administrator or Owner.
2. **What can they reach?** The whole server or every workspace, other projects or other people's data, their own project, or only their own account.
3. **What can they do?** Run code on the server or take over accounts, read data they shouldn't see, change or delete it, show misleading content, or nothing beyond what their role already allows.
4. **Does the victim have to do something?** For example, click a link you send them, open an export in a spreadsheet, or paste something in. This makes an attack harder, so it can lower the level, but it doesn't cap it: a link that takes over an Administrator's account is still serious.

Then pick the level whose description fits what would really happen to a Leantime customer:

| Level | What it would mean for a Leantime customer | Typical example |
| --- | --- | --- |
| **Critical** | Someone could break into Leantime installations right away. | Anyone, without an account, can run code on the server or take over accounts. |
| **High** | A customer's private data reaches people outside their team. | A signed-in user can read or change data in a project their permissions don't give them access to, take over another account, or plant a script that runs for other people on a page everyone uses. |
| **Medium** | Someone can see or do a bit more than their role allows, inside their own team. | A project member gets past their permissions (not just past something the interface hides), or a crafted link changes a little of the victim's own data. |
| **Low** | An annoyance that needs unlikely conditions. | An attack that only works under rare conditions and exposes very little, like a single field that isn't private. |
| **Not a security issue** | Leantime is working as designed. | See the list below. |

We rate every report with this scale ourselves, and our rating is the one that decides the queue. A higher rating on the report doesn't get it looked at sooner; a clear and accurate one does.

## What isn't treated as a security issue?

We close these without a fix, with a short reason:

- **Behavior that works as designed,** like an Administrator or Owner doing what those roles are for, or a role doing what [User Management](using-leantime/user-management.md) says it can.
- **Attacks that give nothing beyond the attacker's own role,** like an Administrator injecting a script that only runs for them or for other Administrators. If it reaches an Owner, or anyone with more access than the attacker, it is a security issue.
- **Scripts or content that only you can trigger** in your own browser (self-XSS).
- **Scanner or AI tool output** without a working proof of concept.
- **Missing security headers, cookie flags or version numbers** without a way to exploit them.
- **Issues that only affect versions we no longer support,** or that are already fixed in the latest release.
- **Rate limits and brute force** on anything other than sign-in and password reset.
- **Duplicates** of an earlier report. The first report gets the credit.

## Which versions get security fixes?

Only the latest Leantime release line, currently 3.17.x. If you run an older version, [update](installation/upgrade-guide.md) to get security fixes.

## Do security issues get a CVE?

A CVE is a public ID for a security issue that tools and other projects can track. We request one through GitHub when we publish the advisory for a confirmed issue rated High or Critical.

## Do you pay bug bounties?

No. Leantime doesn't offer payments for reports. Every published advisory credits the reporter.

## How do I keep my own Leantime installation secure?

Go through [Secure your Leantime server](installation/security-checklist.md): your own secret key, database passwords, HTTPS, two-factor authentication, updates and backups.
