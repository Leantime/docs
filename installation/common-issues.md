# Common issues

Fixes for the problems people most often hit when they install, update or run Leantime themselves. Find your symptom or error message below. If you run Leantime in Docker, also see [Docker troubleshooting](installation/docker-troubleshooting.md).

## Where do I find the error?

Leantime writes errors to the `storage/logs/` folder inside the Leantime folder, in `leantime.log` or a dated file such as `leantime-2026-11-12.log`. In Docker, run `docker compose logs leantime` or open a shell with `docker compose exec leantime sh` (the image has no bash).

By default only errors are logged. For more detail, set `LEAN_DEBUG = 1` in `config/.env`, try again, then set it back to `0`. Debug mode shows internal details, so don't leave it on.

> **Tip:** Stuck? Paste the error line into your AI assistant together with this page's Markdown copy (add `.md` to the page address). Remove passwords and secrets first.

## The login page just reloads, or I'm logged out on every click

You enter the right email and password, and the login page comes back without an error. The address may show `?redirect=%2Fdashboard%2Fhome`. Check these, in order:

1. **`LEAN_SESSION_SECURE` doesn't match how you open Leantime.** With `true`, the browser only sends the login cookie over `https://`. Use `false` if people reach Leantime over plain `http://`, and `true` once it's on HTTPS.
2. **`LEAN_APP_URL` is missing or wrong.** Set it to the exact address in the browser's address bar, with `http://` or `https://`, for example `LEAN_APP_URL = 'https://projects.example.com'`.
3. **The session folder isn't writable.** The web server's PHP user (often `www-data`) must be able to write to `storage/` and everything in it, including `storage/framework/sessions`.
4. **A proxy or CDN on a public address sits in front.** Leantime trusts proxies on private networks (Docker, your LAN) automatically. For Cloudflare or another public proxy, list its addresses in `LEAN_TRUSTED_PROXIES`.

After a change, clear your browser's cookies for the site and try again.

> **Note:** Upgrading from Leantime 3.1 or earlier and logged out on every click? Those versions tied a login to the visitor's IP address, which broke behind some proxies and with IPv6. Current versions don't, so updating fixes it.

## The login works but stops after an update

If a plugin isn't compatible with the new version, Leantime shows it as **Not compatible** in **My Apps** and turns it off, so it can't block logins. On versions before 3.12, disable plugins before a major upgrade. If you're already locked out, move the plugin folders out of `app/Plugins/`, log in, then reinstall the plugins from **My Apps**.

## /install shows 404, 403, a blank page or loops

**404 or 403:** the web server isn't pointing at Leantime's `public/` folder, or URL rewriting is off.

- Point the site's document root at `public/`, not the Leantime folder itself.
- **Apache:** enable `mod_rewrite` and allow `.htaccess` files (`AllowOverride All`). On some shared hosts (for example IONOS) you also need `RewriteBase /` on the line after `RewriteEngine On` in `public/.htaccess`.
- **Nginx:** add `try_files $uri $uri/ /index.php?$args;` to `location /`. See [Install from the release package](installation/package-installation.md).
- **IIS:** install the IIS URL Rewrite module. Leantime ships the rules in `public/web.config`. Set `index.php` as the default document and give the IIS user write access to `storage/`, `bootstrap/cache/`, `userfiles/`, `public/userfiles/` and `app/Plugins/`.

**It keeps redirecting to /install:** set `LEAN_APP_URL` with the protocol and, if you use one, the port. Then empty `storage/framework/cache/` and `storage/framework/sessions/` and start with an empty database.

> **Note:** A log line like `Table 'leantime.zp_user' doesn't exist` before you've run the installer is expected. It means Leantime hasn't been installed yet.

## 500 Internal Server Error right after installing

- **The database settings are wrong.** Put the port in `LEAN_DB_PORT`, not in `LEAN_DB_HOST`. If `localhost` fails, try `127.0.0.1`: MySQL treats them as different hosts with different permissions.
- **PHP is too old, or an extension is missing.** Leantime needs PHP 8.2 or later and the extensions on the [System requirements](installation/system-requirements.md) page. Check what the web server actually runs, not just the command line: shared hosts often run a different PHP version for websites.
  - `Call to undefined method ReflectionFunction::isAnonymous()` means PHP older than 8.2 is running.
  - `A facade root has not been set` means Leantime failed very early, usually because of a missing extension.
- **`LEAN_SESSION_SECURE = true` over http.** See [the login section](installation/common-issues.md?id=the-login-page-just-reloads-or-im-logged-out-on-every-click).

## Folder 'vendor' cannot be found

You downloaded the source code instead of the release package. Use the `Latest-*.zip` file from [GitHub releases](https://github.com/Leantime/leantime/releases), or build the source as described in [Local development setup](installation/development.md).

## Leantime looks unstyled after installing

If the pages show plain text without colours or layout, the stylesheets didn't load.

- **You installed from source:** the stylesheets have to be built first. See [Local development setup](installation/development.md), or use the release package instead.
- **You run Leantime in a subfolder or behind HTTPS:** set `LEAN_APP_URL` to the full address. A `https://` site with `LEAN_APP_URL` on `http://` (or empty) makes the browser block the stylesheets as mixed content. See [Run Leantime in a subfolder](installation/subfolder.md).

## Emails aren't sent

1. **Use lowercase values.** `LEAN_EMAIL_SMTP_SECURE` must be `tls` (with port 587) or `ssl` (with port 465). Uppercase `SSL` makes Leantime connect without encryption and wait until it times out, which can show as `Gateway Timeout` or `SMTP connect() failed`. If one port doesn't work, try the other.
2. **Set `LEAN_APP_URL`.** Without it, Leantime doesn't send password reset and invitation emails, and the log says `the application URL is unknown`.
3. **Set the sender.** `LEAN_EMAIL_RETURN` is the From address and must be one your mail provider lets you send from. `LEAN_EMAIL_FROM_NAME` sets the name people see.
4. **Send a test email** from the Leantime folder:

   ```bash
   php bin/leantime email:testemail --address="you@example.com"
   ```

   With `LEAN_DEBUG = 1`, the conversation with the mail server is written to the log.

See [Email and SMTP configuration](installation/email-configuration.md) for provider examples.

## I can't upload files

- The PHP user must be able to write to `userfiles/` and `public/userfiles/`.
- Large files: raise `upload_max_filesize` and `post_max_size` in PHP and, on Nginx, `client_max_body_size`. If a reverse proxy sits in front, raise its limit too.

## Saving or editing returns 404 (PUT, PATCH or DELETE)

Your Apache or IIS configuration only allows GET and POST. Leantime uses all HTTP methods. On Apache, add this to `.htaccess` or the site configuration:

```apache
<Limit GET POST PUT OPTIONS DELETE PATCH HEAD>
    Require all granted
</Limit>
<LimitExcept GET POST PUT OPTIONS DELETE PATCH HEAD>
    Require all denied
</LimitExcept>
```

## "Cross-site request blocked."

Leantime refused a form submission because it seemed to come from another site. This happens when the address in the browser doesn't match `LEAN_APP_URL`, for example `http://` versus `https://`, a different port, or a proxy that changes the host name. Fix `LEAN_APP_URL` (and the proxy's `Host` header).

## mkdir(): No such file or directory after an update

An old version removed cache folders, and running the update as root left the new ones owned by root. Create the missing folder, make `storage/` writable by the PHP user, and update to the latest version.

## PHP Parse error: syntax error, unexpected '|'

The server runs PHP 7. Leantime needs PHP 8.2 or later. See [System requirements](installation/system-requirements.md).

## Still stuck?

- Search [GitHub issues](https://github.com/Leantime/leantime/issues?q=is%3Aissue) for your error message.
- Ask in the [community chat](https://discord.gg/4zMzJtAq9z). Include your Leantime version, how you installed it, and the log lines.
- Need someone to fix it for you? See the [support and installation services](https://marketplace.leantime.io/) on the marketplace.
