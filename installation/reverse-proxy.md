# Run Leantime behind a reverse proxy

A reverse proxy is the web server people actually reach: it holds your domain's HTTPS certificate and passes each request on to Leantime. This page has what Leantime needs from the proxy, the settings that go with it, and ready-to-use configurations for nginx, Apache, Caddy, Traefik and Cloudflare. Each configuration was tested in front of Leantime 3.15.3 in Docker (with test certificates in place of Let's Encrypt ones): signing in, links and stylesheets on `https://`, the `Authorization` header and a large upload.

## What does Leantime need from the proxy?

- **Send requests to the right place.** The Docker container listens on port **8080**, not 80. A Leantime you installed yourself listens wherever your web server does.
- **Pass on who asked and how.** The `Host` header, and `X-Forwarded-For`, `X-Forwarded-Proto` and `X-Forwarded-Host`. Caddy and Traefik do this on their own; nginx and Apache need a few lines.
- **Allow uploads of up to 100 MB,** the limit inside the Leantime container. nginx allows only 1 MB unless you raise it.
- **Wait up to 300 seconds** for an answer, for long imports and reports.
- **Keep the `Authorization` header.** The API, the [mobile app](installation/mobile-app-setup.md) and [AI assistants](installation/leantime-mcp.md) sign in with it. Proxies pass it on unless you remove it.

## Which Leantime settings go with it?

Set these in `config/.env`, or as environment variables of the container, then restart Leantime:

```ini
LEAN_APP_URL = 'https://projects.example.com'
LEAN_SESSION_SECURE = true
```

| Setting | Why |
| --- | --- |
| `LEAN_APP_URL` | The exact address people use, with `https://`. Leantime uses it for links in emails, and for its own pages and stylesheets. |
| `LEAN_SESSION_SECURE` | Sends the login cookie over HTTPS only. Behind a proxy, Leantime doesn't turn this on by itself, so set it to `true` once the site is on HTTPS. Leave it out while you still use plain `http://`, or you can't log in. |
| `LEAN_TRUSTED_PROXIES` | Usually not needed. See below. |

**Which proxies does Leantime trust?** Leantime believes the `X-Forwarded-*` headers only from proxies it trusts. Without `LEAN_TRUSTED_PROXIES`, that's any proxy on a private network: on the same server, in Docker, or on your LAN. That covers most setups. Set it only when a proxy connects from a public address, like Cloudflare in front of your own web server (see [Cloudflare](#cloudflare)).

When you set `LEAN_TRUSTED_PROXIES`, it replaces the private networks, and Leantime refuses every request that doesn't come through a proxy on the list, with `{"error":"Not a trusted proxy"}`. So list the proxy right in front of Leantime too, for example the Docker network (`172.16.0.0/12`) or `127.0.0.1`.

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

```caddyfile
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
      - --certificatesresolvers.le.acme.tlschallenge=true
      - --certificatesresolvers.le.acme.email=you@example.com
      - --certificatesresolvers.le.acme.storage=/letsencrypt/acme.json
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - letsencrypt:/letsencrypt

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

- **Traefik and Leantime need a network in common.** In one Compose file they share one. Otherwise add Leantime to Traefik's network, and tell Traefik which one with `--providers.docker.network=<network>`.
- **Remove `ports: 8080:8080`** from the Leantime service if people should only reach it through Traefik.
- **Use a current Traefik 3.** Older versions, like 3.3, can't talk to recent Docker versions and only log `Error response from daemon`.
- **Traefik waits for the container's health check.** For about 30 seconds after Leantime starts, Traefik answers `404 page not found`.

## Cloudflare

- **Set SSL/TLS to Full (strict)** and give your server a certificate, for example a free Cloudflare Origin Certificate. With **Flexible**, Cloudflare talks to your server over plain HTTP, and the redirect to HTTPS on your server sends the browser in a loop.
- **Set `LEAN_APP_URL` and `LEAN_SESSION_SECURE = true`** as described above.
- **Let Leantime see people's real IP addresses.** Cloudflare connects from its own public addresses, so without this, Leantime sees Cloudflare's address for everyone. Leantime limits sign-in attempts per address, so people can end up sharing one limit. If nginx is in front of Leantime, have it take the address from Cloudflare's header:

  ```nginx
  # one line per range from https://www.cloudflare.com/ips/
  set_real_ip_from 173.245.48.0/20;
  set_real_ip_from 103.21.244.0/22;
  # ...
  real_ip_header CF-Connecting-IP;
  ```

  If Cloudflare connects straight to Leantime's own web server, list Cloudflare's ranges in `LEAN_TRUSTED_PROXIES` instead.
- **Cloudflare Tunnel** (`cloudflared`) connects to Leantime from your own network, which Leantime trusts already. Point the tunnel at `http://localhost:8080` (or `http://leantime:8080` in Docker), and set `LEAN_APP_URL` and `LEAN_SESSION_SECURE = true`.
- **Uploads:** Cloudflare's Free and Pro plans accept uploads of up to 100 MB, the same as Leantime.
- **A sign-in wall, like Cloudflare Access,** stops the mobile app and AI assistants. Let them through as described in [Set up the mobile app](installation/mobile-app-setup.md).

## What if my web server runs PHP itself?

When you [installed Leantime yourself](installation/package-installation.md), nginx or Apache doesn't proxy to Leantime: it runs PHP directly. Set `LEAN_APP_URL` and `LEAN_SESSION_SECURE` the same way, and make sure the `Authorization` header reaches PHP, or the API, the mobile app and AI assistants can't sign in:

- **nginx with PHP-FPM:** add `fastcgi_param HTTP_AUTHORIZATION $http_authorization;` to the PHP `location` block if the header goes missing.
- **Apache with PHP-FPM:** add `SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1`, or `CGIPassAuth On`, to the virtual host.

For Leantime in a folder, like `https://example.com/leantime`, see [Subfolder installation](installation/subfolder.md).

## How do I check that it works?

1. **Open your `https://` address** and sign in. The page should have its usual styles, and the address should stay on `https://`.
2. **Open the browser's developer tools** and check the console for "mixed content" warnings. There should be none.
3. **Upload a larger file** to a to-do, for example 10 MB.
4. **Get an email from Leantime,** for example with **Forgot password** on the login page, and check that its link opens your public address.

## What if something goes wrong?

- **502 Bad Gateway:** the proxy can't reach Leantime. Check the port (**8080** for the container) and the address. If the proxy's log says `upstream sent too big header`, raise the buffer sizes as in the nginx example (see [Docker troubleshooting](installation/docker-troubleshooting.md#i-get-502-bad-gateway-behind-a-reverse-proxy)).
- **The page has no styles, or switches to `http://`:** set `LEAN_APP_URL` to your `https://` address, and make sure the proxy sends `X-Forwarded-Proto`.
- **The login page just reloads:** `LEAN_SESSION_SECURE` doesn't match how you open Leantime. See [The login page just reloads](installation/common-issues.md#the-login-page-just-reloads-or-im-logged-out-on-every-click).
- **`{"error":"Not a trusted proxy"}`:** `LEAN_TRUSTED_PROXIES` is set, and the proxy right in front of Leantime isn't on it. Add its address or network, or remove the setting.
- **`413 Request Entity Too Large`:** raise the proxy's upload limit, like `client_max_body_size 100M;` in nginx.
- **Traefik says `404 page not found`:** wait half a minute after Leantime starts, then check that the router's `Host` rule matches your domain exactly.
- **The mobile app or an AI assistant can't sign in, but the browser works:** the `Authorization` header goes missing, or a sign-in wall blocks the app. See [What does the app's error message mean?](using-leantime/mobile-app.md#what-does-the-apps-error-message-mean)
- **Links in emails open the wrong address:** set `LEAN_APP_URL`.

## Related

- [Docker based installation](installation/docker.md)
- [Configuration](installation/configuration.md)
- [Common issues](installation/common-issues.md)
- [Set up the mobile app](installation/mobile-app-setup.md)
- [Subfolder installation](installation/subfolder.md)
