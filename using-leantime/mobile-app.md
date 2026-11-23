# Leantime on your phone

Leantime Mobile is the free app for iPhone and Android that connects to the Leantime workspace you already have. On Leantime Cloud you sign in with your workspace name. On a self-hosted server, the server needs the [Advanced Authentication](https://marketplace.leantime.io/product/advanced-auth/) plugin: without it, the app can't sign in.

The app is for your own day, not for setting up projects: see what's due, plan tomorrow, focus on one to-do, track time and keep notes. Project setup and administration stay in the browser.

![The app's Connect screen with the Cloud and Self-Hosted tabs, a box for the workspace name, Connect, and Try Demo Mode](../_images/using-leantime/mobile-connect.webp)

## How do I get the Leantime mobile app?

- **iPhone:** [Leantime Mobile on the App Store](https://apps.apple.com/app/leantime-mobile/id6773767264). In the EU, the app isn't in the App Store yet: join the [TestFlight beta](https://testflight.apple.com/join/nHF3AGwx) instead. Install Apple's free TestFlight app first, then open the link on your iPhone. TestFlight builds expire after 90 days and update as new versions come out.
- **Android:** [Leantime Mobile on Google Play](https://play.google.com/store/apps/details?id=io.leantime.mobile).

The app is for phones; tablet layouts come later. It's free. On Leantime Cloud it works with your plan at no extra cost, trials included. On a self-hosted server it needs the [Advanced Authentication](plugins/advanced-authentication.md) plugin, a paid plugin from the marketplace.

**Just looking?** Tap **Try Demo Mode** on the first screen. It opens a sample workspace, with no account or server needed.

## How do I connect the app to Leantime Cloud?

1. **Choose Cloud** on the Connect screen.
2. **Enter your workspace name:** only the part before `.leantime.io`. If your workspace is `acme.leantime.io`, enter `acme`.
3. **Sign in** with the email and password you use in the browser.
4. **Enter your code** if your account uses two-factor authentication. Codes change every 30 seconds, so use the current one.

Everything in the app works on Leantime Cloud, with no plugins or setup.

## How do I connect the app to my self-hosted Leantime?

Your Leantime administrator sets up the server first: it needs Leantime 3.9.5 or later, the [Advanced Authentication](https://marketplace.leantime.io/product/advanced-auth/) plugin and an HTTPS certificate from a public authority. The details for administrators are in [Set up the mobile app on a self-hosted server](installation/mobile-app-setup.md).

Then, in the app:

1. **Choose Self-Hosted** on the Connect screen.
2. **Enter the full address** you use in the browser, including `https://` and any port or folder, for example `https://leantime.example.com` or `https://example.com/leantime`.
3. **Sign in** with your Leantime email and password, or with your company login (see the next section).
4. **Enter your code** if your account uses two-factor authentication.

**Quick test:** open the same address in your phone's browser. If Leantime's login page loads and you can sign in there, your phone can reach the server. If the app still can't sign in, the server may be missing Advanced Authentication or dropping the app's sign-in token; see [What does the app's error message mean?](#what-does-the-apps-error-message-mean).

The **Notes** tab also needs the [Notes](https://marketplace.leantime.io/product/leantime-notes/) plugin on your server. Without it, the app tells you instead of showing an empty tab.

## Can I sign in with my company login (SSO)?

Yes, on a self-hosted server that offers one. The app's sign-in screen shows **Sign in with SSO**, or a button for your provider, such as Google, Microsoft or GitHub. Tap it, sign in on your company's page the way you always do, and you're sent back to the app.

If your account also uses Leantime's two-factor codes, the app asks for the code after the company login. SAML 2.0 logins don't work in the app yet.

No button for your company login? Ask your administrator: what the server needs is in [Set up the mobile app on a self-hosted server](installation/mobile-app-setup.md#how-does-my-team-sign-in).

## What can I do in the app?

![The Today tab: what's due today, quick wins, the schedule, and what's coming up tomorrow](../_images/using-leantime/mobile-today.webp)

- **Today:** what's due, what you worked on last, quick wins and your schedule for the day.
- **Tasks:** your to-dos from every project. Add, update and finish them, and log time.
- **Now:** a timer for one to-do. Count up while you work, or count down a set length (Pomodoro style). Pause, resume, then stop and log the time to the to-do, even if you only worked for five minutes. It also offers short moments to breathe.
- **Notes:** your notes, kept with your projects.
- **You:** your calendar, timesheet, inbox and settings, and **Progress**: a view of where you stand right now and a weekly reflection of what you closed and helped with. Progress is only in the app and is just for you.
- **Plan tomorrow:** pick a few to-dos for the next day. They move to tomorrow's date.

![Plan Tomorrow: a short list of suggested to-dos to move to tomorrow](../_images/using-leantime/mobile-plan-tomorrow.webp)

What you can change follows your [role](using-leantime/user-management.md) in the workspace:

| Role | In the app |
| --- | --- |
| Read Only | See your to-dos, calendar and notes |
| Commenter | Also comment and react |
| Editor and above | Everything: create and edit to-dos, track time, log work |

If the app says your role can't do something, ask your workspace administrator.

![The Now tab: a focus timer counting down on one to-do](../_images/using-leantime/mobile-now-timer.webp)

## Can I get notifications on my phone?

Yes. The app can tell you when someone assigns you a to-do, mentions you, or comments on your work.

1. **Open You → Settings → Notification settings.**
2. **Turn on Phone notifications.** If your phone asks whether Leantime may send notifications, allow it.
3. **Optional:** under **How they arrive**, choose whether they show as a banner or arrive quietly.

What you get follows your [notification settings](using-leantime/notifications.md), the same ones as in the browser: muted projects and kinds of changes you've switched off stay quiet on your phone too. @Mentions and changes to to-dos you're a collaborator on still reach you. Turning **Phone notifications** off only affects that phone.

Don't see **Phone notifications**? Update the app to the latest version.

On Leantime Cloud, that's all. On a self-hosted server, your administrator turns phone notifications on for the server first (see [Set up the mobile app on a self-hosted server](installation/mobile-app-setup.md#how-do-i-turn-on-phone-notifications)). If you've turned them on and nothing arrives, ask them.

## How do reminders work?

Turn them on under **You → Settings → Reminders**:

- **Morning cue:** a gentle start to the day, at the time you choose.
- **Plan tomorrow:** an evening nudge to pick tomorrow's to-dos.

The app also tells you when a focus timer ends. The first time, your phone asks whether Leantime may send notifications. If you said no, turn them on again in your phone's settings, under **Notifications → Leantime**.

## What does the app's error message mean?

Find the sentence the app showed you. The last column is for your Leantime administrator.

| The app says | What's usually going on | For your administrator |
| --- | --- | --- |
| Mobile access isn't available on this Leantime instance yet. | The server is Leantime, but mobile sign-in isn't turned on. | Install and enable Advanced Authentication. If it was on before, check it's still enabled and its license is current. |
| This Leantime instance is older than the app supports. | The server runs a version older than 3.9.5. | [Update Leantime](installation/upgrade-guide.md). |
| That URL responded, but it doesn't look like Leantime. | Something else answered: another site, a holding page, or a sign-in wall in front of Leantime. | If a sign-in wall is in front, let everything under `/advancedAuth/`, `/api/`, `/oidc/` and `/status` through to Leantime. If Leantime is in a folder, put the folder in front, for example `/leantime/api/`. |
| Something in front of your server is asking for a sign-in the app can't complete. | A gatekeeper such as Cloudflare Access, Authelia, basic auth or a bot check answers before Leantime. | Exempt the paths above, or give phones a direct route to Leantime. |
| Your phone doesn't trust this server's certificate. | The certificate is self-signed or from a private authority. | Use a certificate from a public authority such as Let's Encrypt. If it has to stay private, install your authority's certificate on each phone and trust it. On iPhone, that's under **Settings → General → About → Certificate Trust Settings**. |
| We couldn't reach that address. | The name didn't resolve, the connection was refused, or it timed out. | Check the address, port and firewall. If Leantime is only on the office network, the app works only there (or over the VPN). |
| You signed in, but the server is rejecting the app's requests. | Something between the phone and PHP drops the app's sign-in token. | Pass the `Authorization` header through to PHP. On Apache with PHP-FPM, add `SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1` or `CGIPassAuth On`. On nginx with PHP-FPM, add `fastcgi_param HTTP_AUTHORIZATION $http_authorization;` to the PHP `location` block if the header goes missing. When nginx is a reverse proxy in front of another server, add `proxy_set_header Authorization $http_authorization;`. Behind any other reverse proxy, make sure it forwards the `Authorization` header. Then sign out of the app and back in. |
| Too many sign-in attempts right now. | The server limits sign-ins per minute, and people behind one office address count together. | Wait a minute. If it happens often, raise the limit (`LEAN_RATELIMIT_AUTH`). |

### Problems without their own message

| What's going on | What to do |
| --- | --- |
| A full address in the Cloud box, or a workspace name in the Self-Hosted box | Cloud: type only the part before `.leantime.io`. Self-hosted: switch to **Self-Hosted** and type the whole address. |
| The address redirects (adds `www`, switches to `https`, adds a folder) | Use the address your browser ends up on. |
| You only sign in with a company login and never set a password | Use **Sign in with SSO** or your provider's button. If there's none, ask your administrator. |
| The two-factor code is right but fails | A clock is off: check that your phone sets its time automatically, and ask your administrator to sync the server time (NTP). |
| The app worked, then stopped after a server change | Advanced Authentication was turned off, its license lapsed, or a proxy setting changed. |

## How do I delete my account or my data?

- **Workspace owners:** **Settings → Delete Account** opens your workspace's deletion page in the browser (see [Delete your Leantime Cloud account](using-leantime/delete-cloud-account.md)).
- **Everyone else:** your account belongs to your workspace. Ask its owner to remove you. Signing out of the app clears everything it stored on your phone.
- **Usage data:** the app collects pseudonymous usage data (which screens and features are used, never your content). Turn it off under **Settings → Privacy & Security → Share Usage Data**, or email support@leantime.io to have it deleted.

## Still stuck?

On the TestFlight beta, you can send feedback from inside TestFlight: take a screenshot in the app and add a note. Or email mobile@leantime.io with:

- the exact sentence the app showed,
- your Leantime version, or that you're on Leantime Cloud,
- whether the same address loads in your phone's browser on the same network,
- whether anything sits in front of Leantime, like a reverse proxy, a VPN or a company sign-in page,
- a screenshot of the screen with the message.
