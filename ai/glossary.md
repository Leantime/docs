# Glossary: words for running Leantime

The words that come up when you install and run Leantime, in plain language. Knowing them helps you follow the guides, and using them gets you precise answers from people and AI assistants.

## Servers and hosting

**Self-hosted.** Leantime runs on a server you control (your own machine, a cloud server or a NAS), instead of on Leantime Cloud.

**Server.** The computer Leantime runs on. Often you reach it through a terminal over **SSH** (a secure remote command line).

**Terminal.** A window where you type commands. On a server, it's usually all you have.

**Domain** and **subdomain.** The name people type to reach Leantime, like `example.com`. A subdomain is a name in front of it, like `projects.example.com`.

**DNS.** The internet's address book: it points your domain name at your server's IP address.

**HTTPS** and **TLS certificate.** HTTPS encrypts the connection between browser and server. It needs a certificate for your domain, which tools like Let's Encrypt or Caddy get for free.

**Reverse proxy.** A web server (Nginx, Caddy, Traefik, or a NAS's built-in one) that receives visitors on port 443 with HTTPS and passes them on to Leantime. Say "Leantime runs behind a reverse proxy" when you ask for help.

**Port.** A numbered door on a server. Web traffic uses 80 (http) and 443 (https). The Leantime container listens on 8080.

**Document root.** The folder a web server shows to visitors. For Leantime it must be the `public/` folder.

## Docker

**Docker.** Software that runs applications in **containers**: sealed boxes that hold an app with everything it needs.

**Image.** The template a container starts from. Leantime's official image is `leantime/leantime`. A **tag** picks the version, like `leantime/leantime:3.14.0` or `:latest`.

**Container.** A running copy of an image. You can delete and recreate it without losing data, as long as the data is in volumes.

**Volume.** Storage that lives outside the container and survives updates. Leantime's database, uploads and plugins live in volumes.

**Docker Compose.** A file (`docker-compose.yml`) that describes several containers, such as Leantime and its database, and starts them together with `docker compose up -d`.

**Recreate (a container).** Delete the container and start a new one from the image, which applies new settings. A plain restart keeps the old settings.

**Logs.** The messages an app writes while it runs. `docker compose logs leantime` shows the container's; Leantime's own are in `storage/logs/`.

**Health check.** A test Docker runs regularly to see if the app answers. A container that fails it shows as **unhealthy**.

## Leantime configuration

**Environment variable.** A named setting passed to an application, like `LEAN_APP_URL`. All of Leantime's settings start with `LEAN_`.

**`.env` file.** A text file with one setting per line, `NAME = 'value'`. Leantime reads `config/.env`; Docker Compose reads the `.env` next to `docker-compose.yml`.

**`LEAN_APP_URL`.** The exact address people use to open Leantime, with `http://` or `https://`. Many login, email and redirect problems come from this being missing or wrong.

**Session** and **cookie.** After you log in, your browser keeps a small cookie that tells Leantime who you are. If the cookie isn't sent back (for example, a secure cookie over plain http), you're logged out on every click.

**Cron job** / **scheduler.** Background work that runs on a timer, such as sending emails. The Docker image runs it for you; on a package install you add a cron job.

**SMTP.** How Leantime sends email, through your mail provider's server. It needs a host, port, username, password and encryption (`tls` or `ssl`).

**Migration** / **database update.** Changes to the database's structure that come with a new Leantime version. Leantime asks you to run them after an update (**Update Database**), or you run `php bin/leantime db:migrate`.

**Plugin.** An add-on that gives Leantime more features. Marketplace plugins need a license key. See [Install and configure plugins](installation/plugin-installation.md).

## Sign-in and security

**Single sign-on (SSO).** Signing in to Leantime with an account you already have somewhere else, like your company's Keycloak, Microsoft or Google account.

**Identity provider (IdP).** The system that holds the accounts and checks passwords: Keycloak, Authentik, Okta, Microsoft Entra ID.

**OpenID Connect (OIDC).** The standard way for an app like Leantime to ask an identity provider who someone is. Built into Leantime.

**LDAP** / **Active Directory.** Older directory systems that store company accounts. Leantime can check passwords against them.

**SAML.** Another single sign-on standard, common in large companies. Leantime supports it with the [Advanced Authentication](https://marketplace.leantime.io/product/advanced-auth/) plugin.

**Client** (in an identity provider). The registration of an app, like Leantime, in the identity provider. It has a **client ID** (its name) and a **client secret** (its password).

**Issuer.** The identity provider's exact address for your accounts, for example `https://auth.example.com/realms/leantime`. Leantime's `LEAN_OIDC_PROVIDER_URL` must match it exactly.

**Redirect URI** / **callback URL.** Where the identity provider sends people back after they sign in. For Leantime it's your Leantime address plus `/oidc/callback`.

**Scopes** and **claims.** Scopes are what Leantime asks for (`openid profile email`). Claims are the answers in the token, like `email` and `given_name`.

**PKCE.** An extra check that makes sure only the app that started a login can finish it. Leantime uses it automatically.

**Two-factor authentication (2FA).** A second step at login, usually a code from an authenticator app.

**Personal access token.** A long secret that lets a script or AI assistant use Leantime as **you**, with your projects and permissions. Treat it like a password.

**API key.** A secret for a separate service account that an administrator creates. It acts as its own user with its own role, not as you.

**MCP (Model Context Protocol).** The standard AI assistants use to connect to tools. Leantime's [MCP server](installation/leantime-mcp.md) lets assistants work with your projects.
