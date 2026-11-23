---
title: "Secure your Leantime server"
description: "A security checklist for self-hosted Leantime: your own secret key, database passwords, HTTPS, sign-in limits, two-factor, updates and backups."
head:
  - tag: title
    content: "Leantime security checklist for self-hosted servers"
edition: self-hosted
checked: "3.15"
glance:
  minutes: 30
  level: "Some experience"
  needs:
    - "Leantime installed on your own server or in Docker"
    - "Access to its config/.env file or Docker settings"
---

When you host Leantime yourself, keeping it safe is up to you. Go through this checklist once Leantime is installed, and again when you move it to a new server. Every item is a setting in `config/.env` (or a Docker variable), a step on the server, or a choice in Leantime. On Leantime Cloud, all of this is done for you.

## The checklist

1. [Set your own `LEAN_SESSION_PASSWORD`](#why-do-i-need-my-own-lean_session_password)
2. [Replace the sample database passwords](#how-do-i-protect-the-database)
3. [Use HTTPS](#how-do-i-set-up-https)
4. [Make only the `public` folder reachable from the web](#which-folders-can-people-reach-from-the-web)
5. [Keep debug mode off](#why-should-debug-mode-stay-off)
6. [Decide how long sign-ins last](#how-long-do-sign-ins-last)
7. [Turn on two-factor authentication for Administrators and Owners](#how-do-i-protect-sign-ins)
8. [Check who has access, and which API keys exist](#how-do-i-keep-access-tidy)
9. [Install plugins only from sources you trust](#what-about-plugins)
10. [Update Leantime with every release](#how-do-i-stay-up-to-date)
11. [Back up, including your settings and secret key](#what-should-my-backups-include)

## Why do I need my own `LEAN_SESSION_PASSWORD`?

Despite its name, `LEAN_SESSION_PASSWORD` is Leantime's secret key. Leantime uses it to encrypt stored secrets, like the passwords of connected CalDAV calendars, and to build everyone's private calendar (iCal) links. The sample `.env` files and Leantime's built-in default all use the same public value, so anyone could know it.

1. Make a random value:

   ```sh
   openssl rand -base64 32
   ```

2. Put it in `config/.env` (in Docker, in your `.env` file or with `-e`):

   ```ini
   LEAN_SESSION_PASSWORD = 'the value you made'
   ```

   Leantime uses the first 32 characters, so the value needs at least 32.

Set it before you install, if you can. If you change it on a server that's already in use:

- Everyone's calendar (iCal) links change, so people have to copy their new link from the Calendar and update their calendar apps.
- Calendars connected through the CalDAV plugin have to be connected again, because their saved passwords can't be read anymore.

Keep the value safe, and include it in your backups (see [What should my backups include?](#what-should-my-backups-include)).

**Docker secrets.** The official Docker image can read secrets from files instead of the environment. Set `LEAN_SESSION_PASSWORD_FILE`, `LEAN_DB_PASSWORD_FILE`, `LEAN_EMAIL_SMTP_PASSWORD_FILE`, `LEAN_S3_SECRET_FILE` or `LEAN_REDIS_PASSWORD_FILE` to the path of a mounted secret, and the image reads the value from that file when it starts.

## How do I protect the database?

- **Replace the sample passwords.** The Docker `sample.env` sets `changeme123` for `MYSQL_ROOT_PASSWORD`, `MYSQL_PASSWORD` and `LEAN_DB_PASSWORD`. Those values are public. Replace them before the first start, as [Install Leantime with Docker](/installation/docker/) describes.
- **Give Leantime its own database user,** with full rights on Leantime's database and nothing else. Don't use the `root` user.
- **Keep the database off the internet.** Only Leantime needs to reach it. The official `docker-compose.yml` doesn't publish the database port, so keep it that way. On your own server, let MySQL listen only on `127.0.0.1` or a private network, or block port 3306 (5432 for PostgreSQL) in your firewall.

## How do I set up HTTPS?

Serve Leantime over HTTPS only, and set:

```ini
LEAN_APP_URL = 'https://projects.example.com'
LEAN_SESSION_SECURE = true
```

- `LEAN_APP_URL` is the address Leantime puts in links, like the ones in password-reset and invitation emails. Set it to the address people really use.
- `LEAN_SESSION_SECURE = true` sends the sign-in cookie over HTTPS only.
- **Behind a proxy or CDN on a public address,** like Cloudflare, add its address ranges to `LEAN_TRUSTED_PROXIES`. Otherwise Leantime sees every request as coming from the proxy. Then everyone shares one limit on sign-in attempts, and Leantime may not notice that the site is on HTTPS. Keep `PRIVATE_SUBNETS` at the start of the list, so a proxy on your own server or in Docker stays trusted. Without it, Leantime refuses every request that comes through that proxy:

  ```ini
  LEAN_TRUSTED_PROXIES = 'PRIVATE_SUBNETS,173.245.48.0/20,103.21.244.0/22'
  ```

The steps for Nginx, Caddy, Traefik and Cloudflare are in [Run Leantime behind a reverse proxy](/installation/reverse-proxy/).

## Which folders can people reach from the web?

Only the `public` folder. Your settings (`config/.env`), uploaded files (`userfiles`), database backups (`backupdb`) and logs (`storage`) sit next to it, outside the web root.

- **Your own server:** point the web server's document root at `leantime/public`, never at the `leantime` folder (see [Package based Installation](/installation/package-installation/) and [Shared hosting (cPanel)](/installation/shared-hosting/)).
- **Docker:** the image is set up this way already. Its web server and PHP run as the unprivileged `www-data` user, not as root.

While it runs, Leantime writes to `storage/`, `bootstrap/cache/`, `userfiles/` and `public/userfiles/`, and to `app/Plugins/` when you install or update plugins. Database backups and the [command line updater](/installation/upgrade-guide/) also write to the Leantime folder, so run them as the user that owns it. Make `config/.env` readable only by that user and the server's administrators, for example:

```sh
chmod 640 config/.env
```

Once Leantime is installed, its installer (`/install`) only sends visitors on to Leantime, so you don't need to block it.

## Why should debug mode stay off?

With `LEAN_DEBUG = 1`, Leantime shows and logs details meant for developers, like file paths and full error messages. Turn it on only while you track down a problem, then set it back:

```ini
LEAN_DEBUG = 0
```

## How long do sign-ins last?

`LEAN_SESSION_EXPIRATION` is the number of **minutes** without activity before someone is signed out. The default is 480 (8 hours).

The Docker `sample.env` sets `28800` and calls it seconds, but Leantime reads minutes, so 28800 keeps people signed in for 20 days. For 8 hours, set:

```ini
LEAN_SESSION_EXPIRATION = 480
```

## How do I protect sign-ins?

- **Turn on two-factor authentication** for every Administrator and Owner, and ask everyone else to do the same. Each person turns it on in their own account settings. Leantime can't make it mandatory, and has no backup codes (see [What about two-factor authentication?](/using-leantime/user-management/#what-about-two-factor-authentication)).
- **Keep the sign-in limits on.** By default, Leantime allows 20 sign-in attempts per minute from one address, 5 password-reset requests per 10 minutes, and 5 two-factor codes per 5 minutes. The settings are the `LEAN_RATELIMIT_*` lines in `config/sample.env`. Raise them only if a whole office shares one address and people get locked out.
- **With a sign-in provider (SSO),** keep the provider's checks on: `LEAN_OIDC_REQUIRE_VERIFIED_EMAIL` stays `true` and `LEAN_OIDC_SKIP_TLS_VERIFY` stays `false`, and the same goes for `LEAN_EMAIL_SMTP_SSLNOVERIFY` for your mail server. If everyone signs in through the provider, `LEAN_DISABLE_LOGIN_FORM = true` hides the password form. Keep a way back in if the provider fails, for example by setting it to `false` again. See [Authentication](/installation/authentication-configuration/).

Two protections are on by default; leave them that way. `LEAN_CSRF_ORIGIN_CHECK` refuses changes sent from other websites, and `LEAN_PERMISSIONS_ENFORCE` makes Leantime refuse actions a person's role doesn't allow.

## How do I keep access tidy?

- **Deactivate people who leave,** right away. They can't sign in anymore, and their work stays (see [How do I deactivate or delete someone?](/using-leantime/user-management/#how-do-i-deactivate-or-delete-someone)).
- **Keep few Administrators and Owners.** Check the roles in User Management now and then.
- **API keys:** give each tool its own key, with the lowest role and only the projects it needs, and delete keys nobody uses. The API Keys tab shows when each key was last used (see [How do I keep keys and tokens safe?](/api/usage/#how-do-i-keep-keys-and-tokens-safe)).

## What about plugins?

A plugin runs inside Leantime, with access to all of its data. Install plugins from the [Leantime marketplace](https://marketplace.leantime.io) or from developers you trust, and disable the ones you don't use. Leantime skips plugins that don't support your version, and turns off plugins that keep crashing (see [Plugin licenses and updates](/installation/plugin-licenses/#what-happens-when-a-plugin-crashes)).

## How do I stay up to date?

Security fixes ship in regular releases, and only the latest release line gets them. The advisory that describes a fix is published two releases later, so people have time to update first. Waiting for the advisory means waiting too long.

- **Get notified:** on [Leantime's GitHub page](https://github.com/Leantime/leantime), click **Watch** → **Custom** → **Releases**.
- **Update** as described in [Upgrade Leantime](/installation/upgrade-guide/), and keep PHP, your database and the server's operating system up to date too.
- **Published advisories** are listed on [Leantime's security page on GitHub](https://github.com/Leantime/leantime/security/advisories).

## What should my backups include?

- The database.
- The uploaded files (`userfiles` and `public/userfiles`).
- Your settings, with `LEAN_SESSION_PASSWORD`: `config/.env` on your own server. With Docker, that's the `.env` file next to `docker-compose.yml`, the `-e` values of your `docker run` command, or the secret files you mount.

Without the same `LEAN_SESSION_PASSWORD`, a restored server builds different calendar links and can't read encrypted secrets. Backups hold all your data, so keep them somewhere safe, away from the server. See [Backup and restore](/installation/backup-restore/).

## What does Leantime send to the internet?

Nothing that's needed to run it. If your server has to stay offline or private, turn these off:

```ini
LEAN_ALLOW_TELEMETRY = false     # the daily anonymous usage summary (see Configuration)
LEAN_NEWS_ENABLED = false        # Leantime news in the app
```

Plugins from the marketplace also check for updates and their licenses there.

## Found a security issue?

Report it privately, as described in [Report a security issue](/development/security/).

## Related

- [Configuration](/installation/configuration/)
- [Run Leantime behind a reverse proxy](/installation/reverse-proxy/)
- [Upgrade Leantime](/installation/upgrade-guide/)
- [Backup and restore](/installation/backup-restore/)
