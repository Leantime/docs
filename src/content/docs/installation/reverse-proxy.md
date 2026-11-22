---
title: "Run Leantime behind a reverse proxy"
description: "Put Leantime behind nginx, Apache, Caddy, Traefik or Cloudflare: tested configurations, the LEAN_APP_URL and proxy settings, and fixes for common errors."
head:
  - tag: title
    content: "Leantime behind a reverse proxy: nginx, Caddy, Traefik"
edition: self-hosted
glance:
  minutes: 20
  level: "Some experience"
  needs:
    - "Leantime running, in Docker or on your own web server"
    - "A domain pointing at your server, and a way to get a certificate"
  where:
    - "Your proxy's configuration"
    - "Leantime's `.env` file, or the Leantime container's environment"
  result: "Leantime on your own domain over HTTPS, with sign-in, uploads, the API and the mobile app working"
---

A reverse proxy is the web server people actually reach: it holds your domain's HTTPS certificate and passes each request on to Leantime. This page has what Leantime needs from the proxy, the settings that go with it, and ready-to-use configurations for nginx, Apache, Caddy, Traefik and Cloudflare. Each configuration was tested in front of Leantime 3.15.3 in Docker (with test certificates in place of Let's Encrypt ones): signing in, links and stylesheets on `https://`, the `Authorization` header and a large upload.

## What does Leantime need from the proxy?

- **Send requests to the right place.** The Docker container listens on port **8080**, not 80. A Leantime you installed yourself listens wherever your web server does.
- **Pass on who asked and how.** The `Host` header, and the [forwarded headers](/ai/glossary/#servers-and-hosting) `X-Forwarded-For`, `X-Forwarded-Proto` and `X-Forwarded-Host`: the visitor's address, `https`, and the domain they typed. Caddy and Traefik do this on their own; nginx and Apache need a few lines.
- **Allow uploads of up to 100 MB,** the limit inside the Leantime container. nginx allows only 1 MB unless you raise it.
- **Wait up to 300 seconds** for an answer, for long imports and reports.
- **Keep the `Authorization` header.** The API, the [mobile app](/installation/mobile-app-setup/) and [AI assistants](/installation/leantime-mcp/) sign in with it. Proxies pass it on unless you remove it.
- **Be the only way in.** If Leantime's own port stays open, people can reach Leantime over plain HTTP, around the proxy and its HTTPS. With the proxy on the same server, open the port only to the server itself: in the official Docker setup, set `LEAN_PORT = '127.0.0.1:8080'` in `.env`, or use `-p 127.0.0.1:8080:8080` with `docker run`. When the proxy runs in Docker next to Leantime, it doesn't need the port at all: remove the `ports` lines from the Leantime service.

## Which Leantime settings go with it?

Set these in `config/.env`, or in the `.env` file of your Docker setup:

```ini
LEAN_APP_URL = 'https://projects.example.com'
LEAN_SESSION_SECURE = true
```

| Setting | Why |
| --- | --- |
| `LEAN_APP_URL` | The exact address people use, with `https://`. Leantime uses it for links in emails, and for its own pages and stylesheets. |
| `LEAN_SESSION_SECURE` | Sends the login cookie over HTTPS only. Behind a proxy, Leantime doesn't turn this on by itself, so set it to `true` once the site is on HTTPS. Leave it out while you still use plain `http://`, or you can't log in. |
| `LEAN_TRUSTED_PROXIES` | Usually not needed. See below. |

Then apply them. **In Docker,** recreate the container with `docker compose up -d`, or remove and start it again if you use `docker run`: a plain restart keeps the old values (see [Docker](/installation/docker/#how-do-i-use-my-own-domain-with-https)). **If you installed Leantime yourself,** restart PHP-FPM or your web server.

### Which proxies does Leantime trust?

Leantime believes the forwarded headers only from proxies it trusts. Without `LEAN_TRUSTED_PROXIES`, that's any proxy on a private network: on the same server, in Docker, or on your LAN. That covers most setups. Set it only when a proxy with a public address is part of the chain, like Cloudflare (see [Cloudflare](#cloudflare)).

When you set `LEAN_TRUSTED_PROXIES`, it replaces the private networks, and Leantime refuses every request that doesn't come through a proxy on the list, with `{"error":"Not a trusted proxy"}`. To keep trusting the private networks, start the list with the word `PRIVATE_SUBNETS`, then add the other addresses:

```ini
LEAN_TRUSTED_PROXIES = 'PRIVATE_SUBNETS,173.245.48.0/20,103.21.244.0/22'
```

## nginx

For Leantime in Docker on the same server, published on port 8080. Get the certificate with [Certbot](https://certbot.eff.org/) or your host's tool, and change the paths to match.

```nginx
server {
    listen 80;
    server_name projects.example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name projects.example.com;

    ssl_certificate     /etc/letsencrypt/live/projects.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/projects.example.com/privkey.pem;

    client_max_body_size 100M;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_read_timeout 300s;
        proxy_buffer_size 32k;
        proxy_buffers 8 16k;
    }
}
```

When nginx runs in the same Docker Compose project, use `proxy_pass http://leantime:8080;`, with the name of the Leantime service.

## Apache

Switch on the modules once with `sudo a2enmod proxy proxy_http headers ssl`, then add a virtual host:

```apache
<VirtualHost *:80>
    ServerName projects.example.com
    Redirect permanent / https://projects.example.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName projects.example.com

    SSLEngine on
    SSLCertificateFile    /etc/letsencrypt/live/projects.example.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/projects.example.com/privkey.pem

    ProxyPreserveHost On
    ProxyPass        / http://127.0.0.1:8080/
    ProxyPassReverse / http://127.0.0.1:8080/
    RequestHeader set X-Forwarded-Proto "https"
    ProxyTimeout 300
</VirtualHost>
```

Apache adds `X-Forwarded-For` and `X-Forwarded-Host` by itself. Reload it with `sudo systemctl reload apache2`.

## Caddy

Caddy gets and renews the certificate by itself, and passes all the headers Leantime needs. The whole `Caddyfile`:

```text
projects.example.com {
	reverse_proxy 127.0.0.1:8080
}
```

In the same Docker Compose project, use `reverse_proxy leantime:8080`.

## Traefik

Traefik reads its routes from labels on the Leantime container. A Docker Compose example with a Let's Encrypt certificate:

```yaml
services:
  traefik:
    image: traefik:v3
    command:
      - --providers.docker=true
      - --providers.docker.exposedbydefault=false
      - --entrypoints.web.address=:80
      - --entrypoints.web.http.redirections.entrypoint.to=websecure
      - --entrypoints.websecure.address=:443
      - --entrypoints.websecure.transport.respondingTimeouts.readTimeout=600s
      - --certificatesresolvers.le.acme.tlschallenge=true
      - --certificatesresolvers.le.acme.email=you@example.com
      - --certificatesresolvers.le.acme.storage=/letsencrypt/acme.json
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - letsencrypt:/letsencrypt
    networks:
      - leantime-net

  leantime:
    # ...your existing Leantime service, plus:
    labels:
      - traefik.enable=true
      - traefik.http.routers.leantime.rule=Host(`projects.example.com`)
      - traefik.http.routers.leantime.entrypoints=websecure
      - traefik.http.routers.leantime.tls.certresolver=le
      - traefik.http.services.leantime.loadbalancer.server.port=8080

volumes:
  letsencrypt:
```

Before you start it:

- **Give Traefik and Leantime a network in common.** The example puts Traefik on `leantime-net`, the network in Leantime's official Compose file. If your Leantime service uses another network, use that name. If Leantime is on several networks, tell Traefik which one with the label `traefik.docker.network=<network>`, using the full name from `docker network ls`: Compose puts the project name in front, like `leantime_leantime-net`.
- **Remove the `ports` lines** from the Leantime service, so people can only reach it through Traefik.
- **Keep the longer read timeout** from the example. By default, Traefik stops reading a request after 60 seconds, which cuts off a large upload on a slow connection.
- **Use a current Traefik 3.** Older versions, like 3.3, can't talk to recent Docker versions and only log `Error response from daemon`.

Good to know:

- **Traefik answers `404 page not found` for about 30 seconds** after Leantime starts. It waits for the container's health check.
- **The Docker socket gives Traefik control of Docker,** and with it of the server, even with `:ro`. The [socket](/ai/glossary/#docker) is how Traefik finds the Leantime container. If that's more access than you want to give a web-facing service, put a socket proxy like [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) in between, or use nginx or Caddy instead.
- **Behind Cloudflare's proxy, the TLS challenge can't get a certificate,** because Cloudflare answers the TLS connection. Use a Cloudflare Origin Certificate (see [Cloudflare](#cloudflare)) or Let's Encrypt's DNS challenge instead.

## Cloudflare

Cloudflare sits in front of your own proxy, or of Leantime itself.

### Set up HTTPS

- **Set SSL/TLS to Full (strict)** and give your server a certificate, for example a free Cloudflare Origin Certificate. With **Flexible**, Cloudflare talks to your server over plain HTTP, and the redirect to HTTPS on your server sends the browser in a loop.
- **Set `LEAN_APP_URL` and `LEAN_SESSION_SECURE = true`** as described above.
- **Uploads:** Cloudflare's Free and Pro plans accept uploads of up to 100 MB, the same as Leantime.

### Only let Cloudflare reach your server

Otherwise anyone who finds your server's IP address can go around Cloudflare, and around Cloudflare Access with it. In your server's firewall, allow ports 80 and 443 only from [Cloudflare's IP ranges](https://www.cloudflare.com/ips/).

If the proxy runs in Docker, ports Docker publishes skip `ufw` rules. Use your hosting provider's firewall instead.

### Show people's real IP addresses

Cloudflare connects from its own public addresses. Without this step, Leantime sees Cloudflare's address for everyone. Leantime limits sign-in attempts per address, so people can end up sharing one limit.

The examples use two of Cloudflare's ranges. Use the full list from [cloudflare.com/ips](https://www.cloudflare.com/ips/) instead.

**nginx:** take the address from Cloudflare's header. Leantime needs no change.

```nginx
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 103.21.244.0/22;
# ...one line per range
real_ip_header CF-Connecting-IP;
```

**Caddy:** trust Cloudflare in the global options at the top of the `Caddyfile`:

```text
{
	servers {
		trusted_proxies static 173.245.48.0/20 103.21.244.0/22
	}
}
```

Then list the same ranges in Leantime (see [Which proxies does Leantime trust?](#which-proxies-does-leantime-trust)):

```ini
LEAN_TRUSTED_PROXIES = 'PRIVATE_SUBNETS,173.245.48.0/20,103.21.244.0/22'
```

**Traefik:** add `--entrypoints.websecure.forwardedHeaders.trustedIPs=173.245.48.0/20,103.21.244.0/22` to Traefik's command. Then list the same ranges in `LEAN_TRUSTED_PROXIES`, as for Caddy.

**Cloudflare straight to Leantime's own web server:** list the ranges in `LEAN_TRUSTED_PROXIES`, as for Caddy.

### Use Cloudflare Tunnel instead

Cloudflare Tunnel (`cloudflared`) connects to Leantime from your own network, which Leantime trusts already. Point the tunnel at `http://localhost:8080` (or `http://leantime:8080` in Docker), and set `LEAN_APP_URL` and `LEAN_SESSION_SECURE = true`.

With a tunnel, your server needs no open ports for Leantime: close 80, 443 and 8080 in the firewall.

### Let the mobile app and AI assistants through a sign-in wall

A sign-in wall, like Cloudflare Access, stops the mobile app and AI assistants. Let the paths they use through:

- **The mobile app:** the paths in [Set up the mobile app](/installation/mobile-app-setup/#how-does-my-team-sign-in).
- **AI assistants:** `/mcp`, `/oauth/` and `/.well-known/`, which Claude and ChatGPT use to sign in (see [MCP Server settings for administrators](/installation/leantime-mcp/#settings-for-administrators)).

## What if my web server runs PHP itself?

When you [installed Leantime yourself](/installation/package-installation/), nginx or Apache doesn't proxy to Leantime: it runs PHP directly. Set `LEAN_APP_URL` and `LEAN_SESSION_SECURE` the same way, and make sure the `Authorization` header reaches PHP, or the API, the mobile app and AI assistants can't sign in:

- **nginx with PHP-FPM:** add `fastcgi_param HTTP_AUTHORIZATION $http_authorization;` to the PHP `location` block if the header goes missing.
- **Apache with PHP-FPM:** add `SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1`, or `CGIPassAuth On`, to the virtual host.

For Leantime in a folder, like `https://example.com/leantime`, see [Subfolder installation](/installation/subfolder/).

## How do I check that it works?

1. **Open your `https://` address** and sign in. The page should have its usual styles, and the address should stay on `https://`.
2. **Open the browser's developer tools** and check the console for "mixed content" warnings. There should be none.
3. **Upload a larger file** to a to-do, for example 10 MB.
4. **Get an email from Leantime,** for example with **Forgot password** on the login page, and check that its link opens your public address.

## What if something goes wrong?

- **502 Bad Gateway:** the proxy can't reach Leantime. Check the port (**8080** for the container) and the address. If the proxy's log says `upstream sent too big header`, raise the buffer sizes as in the nginx example (see [Docker troubleshooting](/installation/docker-troubleshooting/#i-get-502-bad-gateway-behind-a-reverse-proxy)).
- **The page has no styles, or switches to `http://`:** set `LEAN_APP_URL` to your `https://` address, and make sure the proxy sends `X-Forwarded-Proto`.
- **The login page just reloads:** `LEAN_SESSION_SECURE` doesn't match how you open Leantime. See [The login page just reloads](/installation/common-issues/#the-login-page-just-reloads-or-im-logged-out-on-every-click).
- **`{"error":"Not a trusted proxy"}`:** `LEAN_TRUSTED_PROXIES` is set, and the proxy right in front of Leantime isn't on it. Add its address or network, or remove the setting.
- **`413 Request Entity Too Large`:** raise the proxy's upload limit, like `client_max_body_size 100M;` in nginx.
- **Traefik says `404 page not found`:** wait half a minute after Leantime starts, then check that the router's `Host` rule matches your domain exactly.
- **The mobile app or an AI assistant can't sign in, but the browser works:** the `Authorization` header goes missing, or a sign-in wall blocks the app. See [What does the app's error message mean?](/using-leantime/mobile-app/#what-does-the-apps-error-message-mean) for the app, and [MCP Server troubleshooting](/installation/leantime-mcp/#troubleshooting) for AI assistants.
- **Links in emails open the wrong address:** set `LEAN_APP_URL`.

## Related

- [Docker based installation](/installation/docker/)
- [Configuration](/installation/configuration/)
- [Common issues](/installation/common-issues/)
- [Set up the mobile app](/installation/mobile-app-setup/)
- [Subfolder installation](/installation/subfolder/)
