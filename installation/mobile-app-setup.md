# Set up the mobile app on a self-hosted server

The [Leantime mobile app](using-leantime/mobile-app.md) works with a self-hosted Leantime once your server is ready for it. This page is for the administrator: what the server needs so your team can sign in from their phones, and how to turn on phone notifications.

On Leantime Cloud there's nothing to set up: the app and its notifications work out of the box.

## What does the server need?

| You need | For | Why |
| --- | --- | --- |
| **Leantime 3.9.5 or later** | Signing in | Older versions can't answer the app. |
| **Leantime 3.10.2 or later** | Signing in with a company login (SSO) | |
| **Leantime 3.15.4 or later** (pending release) | Phone notifications | Earlier versions push every change in a project to everyone on it. |
| **The [Advanced Authentication](https://marketplace.leantime.io/product/advanced-auth/) plugin, enabled, with a valid license** | Everything in the app | It signs the app in with its own token, so the app never stores anyone's password, and access can be revoked without changing it. The relay for phone notifications checks the same license. See [installing a plugin](installation/plugin-installation.md). |
| **HTTPS with a certificate from a public authority,** such as Let's Encrypt, at an address phones can reach | Signing in | Phones don't accept self-signed certificates. |
| **Outgoing HTTPS to `accounts.leantime.io`** | Phone notifications | Your server sends notifications through Leantime's relay (see below). |

To check your version, click the **?** (help) icon at the top right of Leantime; the version is at the bottom, under **System**.

## How does my team sign in?

Once Advanced Authentication is enabled, people choose **Self-Hosted** in the app, enter the address they use in the browser, and sign in. The steps for them are on [Leantime on your phone](using-leantime/mobile-app.md#how-do-i-connect-the-app-to-my-self-hosted-leantime).

They can sign in with their Leantime email and password, or with a company login:

- **Sign in with SSO** shows when your server uses Leantime's built-in OpenID Connect login (see [Authentication](installation/authentication-configuration.md)), for example with Keycloak, Okta, Microsoft Entra ID or Authentik.
- **A button per provider** shows for each provider you've set up in Advanced Authentication 1.4.0 or later, such as Google, Microsoft or GitHub.

There's nothing extra to register with your login provider: the app uses the same callback address as the browser. Leantime's two-factor codes work in the app too, after the company login; this needs Leantime 3.13.0 and app version 1.1.0 or later. SAML 2.0 logins don't work in the app yet.

**Leantime in a folder?** If Leantime runs in a folder, like `https://example.com/leantime`, **Sign in with SSO** needs Leantime 3.15.1 or later, and `LEAN_APP_URL` must include the folder (see [Subfolder installation](installation/subfolder.md)). On older versions the button opens the address without the folder and fails. Advanced Authentication's provider buttons include the folder, so use those instead.

**Something in front of Leantime?** A reverse proxy, a sign-in wall like Cloudflare Access, or a firewall must let the app through to Leantime: everything under `/advancedAuth/`, `/api/`, `/oidc/` and `/status`, with the `Authorization` header passed on to PHP. When the app can't sign in, it says why; each message and its fix is in [What does the app's error message mean?](using-leantime/mobile-app.md#what-does-the-apps-error-message-mean)

## How do I turn on phone notifications?

The app can tell people on their phones when someone assigns them a to-do, mentions them, or comments on their work. On a self-hosted server it's off until you turn it on.

> **Pending release of Leantime 3.15.4.** The switch below is already in 3.15.3, but 3.15.3 sends every change in a project to everyone on it, not only what involves them. Wait for 3.15.4 before turning it on.

1. **Sign in as an administrator.**
2. **Open Company → Company Settings.** The **Mobile push notifications** section is on the **Details** tab.
3. **Turn on Send push notifications through Leantime's relay.**
4. **Under What the relay receives,** choose **Full message** or **Content-free** (see the next section).
5. **Click Save.**

If the section is grayed out, Advanced Authentication isn't enabled. Enable it first; the section links to the plugin in the marketplace. (Pending release: until then, the section isn't grayed out, and without Advanced Authentication you can turn the switch on but nothing is sent.)

Then each person turns notifications on for their phone, in the app: **You → Settings → Notification settings → Phone notifications**. It needs the latest version of the app. What they get follows their [notification settings](using-leantime/notifications.md): projects they've muted and kinds of changes they've switched off stay quiet on the phone too, except @mentions and changes to to-dos they're a collaborator on.

## What leaves my server?

Your server can't send to phones directly, because a phone's notification address belongs to the Leantime app. So your server sends each notification to Leantime's relay at `accounts.leantime.io`, which passes it to Google's Firebase Cloud Messaging. Firebase delivers it to Android phones, and hands it to Apple to deliver to iPhones. The relay stores nothing: no users, no devices, no content.

You choose how much each notification carries:

- **Full message** (the default): the phone shows who did what and on which to-do, for example the to-do's name and "Ben assigned this to you".
- **Content-free:** the phone shows "New activity in Leantime. Open the app to see it." To-do names, comment text and people's names stay on your server. Tapping the notification opens the right place in the app, which loads the details from your server.

If your team works with health, legal or other sensitive information, choose **Content-free**. A full message passes through Leantime and Google, and through Apple for iPhones, and can show on the phone's lock screen.

## How do I turn phone notifications off?

Turn off **Send push notifications through Leantime's relay** in Company Settings and click **Save**. Phones stop getting notifications from your server right away. People still get their notifications in Leantime and by email.

## What if phone notifications don't arrive?

- **Check the switch** in Company Settings. If the section is grayed out, enable Advanced Authentication first.
- **Check the Advanced Authentication license.** If the switch is on and nothing arrives, the relay may be refusing the license. Your server's log says so.
- **Check that your server can reach `accounts.leantime.io`** over HTTPS, through any firewall or proxy.
- **Check the person's settings.** **Phone notifications** must be on in the app, and **Receive push notifications on your phone** in their [notification settings](using-leantime/notifications.md) in the browser. The app offers to turn the second one on if it's off.
- **Turn Phone notifications off and on again** in the app. That sends the phone's address to your server again.
- **Check the phone's own settings:** notifications for Leantime must be allowed, under **Settings → Notifications → Leantime**.

## Related

- [Leantime on your phone](using-leantime/mobile-app.md)
- [Notifications](using-leantime/notifications.md)
- [Advanced Authentication plugin](installation/plugin-installation.md#advanced-auth-plugin)
- [Authentication](installation/authentication-configuration.md)
