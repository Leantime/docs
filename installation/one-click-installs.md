# One-click installs

Some hosting platforms install Leantime for you from a template of their own: Coolify, Dokploy, Easypanel, Hostinger, Railway and others. This page lists what to check after such an install, so your Leantime is safe, keeps its data and stays up to date.

> **Warning:** Leantime doesn't maintain these templates and doesn't support them. Support comes from each platform. We can't guarantee that a template installs the latest Leantime version, or that every feature works on it. For Leantime that we run and support for you, see [Leantime Cloud](https://leantime.io/pricing/).

All the templates on this page use the official [`leantime/leantime`](https://hub.docker.com/r/leantime/leantime) Docker image, so the settings are the same as in [Install Leantime with Docker](installation/docker.md). Where the platform shows the template's settings (often called environment variables), you can change them.

## What should I check after a one-click install?

1. **The Leantime version.** Open the help menu (the question mark icon at the top right). The version is under **System**, for example **Leantime V3.15.3**. Compare it with the [latest release](https://github.com/Leantime/leantime/releases). If it's older, change the image tag in the platform, for example to `leantime/leantime:3.15.3`, and redeploy. Then open Leantime and click **Update Now!** if it asks (see [Upgrade Leantime](installation/upgrade-guide.md)). A template set to `latest` updates whenever the platform pulls the image again, so set a version number to update when you choose.
2. **The secret key, `LEAN_SESSION_PASSWORD`.** It has to be a long random value of your own. If the template doesn't set it, or sets the value from Leantime's sample file, set your own (make one with `openssl rand -base64 32`). Set it before your team starts: changing it later changes everyone's calendar (iCal) links.
3. **How long sign-ins last, `LEAN_SESSION_EXPIRATION`.** It's in minutes. 480 keeps people signed in for 8 hours without activity. Some templates set 28800, which is 20 days.
4. **The address, `LEAN_APP_URL`.** It has to be the `https://` address people open, so links in emails work. With HTTPS, also set `LEAN_SESSION_SECURE = true`.
5. **Volumes for your files.** Leantime keeps uploaded files in `/var/www/html/userfiles` and `/var/www/html/public/userfiles`, and plugins in `/var/www/html/app/Plugins`. Each needs a volume, or the files are gone when the platform redeploys the container. The database needs one too.
6. **Email.** Templates don't set up email, so Leantime can't send invitations, password resets or notifications. Add your mail server's settings (see [Email configuration](installation/email-configuration.md)).
7. **Backups.** Check what the platform backs up. You need the database, the file volumes, and your settings with the secret key (see [Backup and restore](installation/backup-restore.md)).

Leantime's scheduled jobs, like sending notification emails, run inside the official image, so there's nothing to set up for them.

## What do I change on Coolify?

Coolify has Leantime in its services list. Its template sets up Leantime with MySQL and Redis, volumes for files and plugins, and its own secret key. Change two things:

- **The version:** the template installs a fixed Leantime version, which can be older than the latest release. Change the image tag of the Leantime service.
- **`SESSION_EXPIRATION`:** set it to `480`. The template's default, 28800, keeps people signed in for 20 days.

## What do I change on Dokploy?

Dokploy's Leantime template sets up Leantime with MariaDB, volumes for uploaded files, and its own secret key. Change three things:

- **The version:** the template uses `latest`. Set a version number, like `leantime/leantime:3.15.3`, so updates only happen when you choose.
- **`LEAN_APP_URL`:** the template sets an `http://` address. Change it to `https://` once your domain has a certificate.
- **A volume for plugins:** add one for `/var/www/html/app/Plugins`, or plugins you install are gone after a redeploy.

## What do I change on Easypanel?

Easypanel's Leantime template sets up Leantime with MySQL, but not the secret key or any volumes for files. Change three things:

- **The image:** when you create the app, Easypanel asks for the image. Enter the latest version, like `leantime/leantime:3.15.3`.
- **`LEAN_SESSION_PASSWORD`:** add it to the environment, with your own long random value.
- **Volumes:** add mounts for `/var/www/html/userfiles`, `/var/www/html/public/userfiles` and `/var/www/html/app/Plugins`. Without them, uploaded files and plugins are gone after a redeploy.

## What about Hostinger, Railway and other platforms?

Hostinger offers Leantime on its VPS plans, and Railway has several Leantime templates made by its community. Their templates can change, so go through [What should I check after a one-click install?](#what-should-i-check-after-a-one-click-install) after you install, and ask the platform's support if a setting isn't there.

## Where do I get help?

For the template, the platform's own settings and its servers, ask the platform's support. For Leantime itself, see [Common issues](installation/common-issues.md) and [Docker troubleshooting](installation/docker-troubleshooting.md), or ask in the [community chat](https://discord.gg/4zMzJtAq9z). Say which platform you installed from.

## Related

- [Install Leantime with Docker](installation/docker.md)
- [Other ways to install Leantime](installation/other-methods.md)
- [Upgrade Leantime](installation/upgrade-guide.md)
- [Backup and restore](installation/backup-restore.md)
