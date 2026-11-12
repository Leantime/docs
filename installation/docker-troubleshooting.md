# Docker troubleshooting

Fixes for problems with the official `leantime/leantime` Docker image. For problems that happen with every kind of install (login, email, uploads), see [Common issues](installation/common-issues.md).

The commands below assume Docker Compose, run in the folder with your `docker-compose.yml`. With `docker run`, use `docker logs leantime` and `docker exec -it leantime sh` instead.

## How do I see what's wrong?

```bash
docker compose ps                      # are the containers running and healthy?
docker compose logs leantime           # web server and PHP output
docker compose logs leantime_db        # database output (container name mysql_leantime)
docker compose exec leantime sh        # a shell inside the container (there is no bash)
```

Inside the container, Leantime's own log is in `storage/logs/`:

```bash
docker compose exec leantime sh -c 'tail -n 50 storage/logs/leantime*.log'
```

For more detail, add `LEAN_DEBUG=1` to `.env`, run `docker compose up -d`, try again, then remove it.

To check that Leantime and its database answer, open `http://<your server>:8080/health`. It returns `{"status":"ok"}`, or an error when the database can't be reached.

## The container is unhealthy, or nginx keeps restarting

You see `(unhealthy)` in `docker compose ps`, or `nginx entered FATAL state, too many start retries too quickly` in the logs.

- **Port 8080, not 80.** Since Leantime 3.4 the container listens on port **8080**. Map it as `"8080:8080"` (or `"80:8080"`), point your reverse proxy at port 8080, and make any health check you added yourself call `http://localhost:8080/health`. The image's built-in health check already uses 8080.
- **File permissions on volumes.** Since 3.4 the image runs as user 1000 instead of root. Volumes created by an older image can still belong to root. Fix each one once, for example:

  ```bash
  docker run --rm -v leantime_userfiles:/v alpine sh -c 'chgrp -R 0 /v && chmod -R g=u /v'
  ```

  Repeat for the `public_userfiles`, `plugins` and `logs` volumes (`docker volume ls` shows their exact names).
- **Your NAS or platform forces another user ID** (Unraid, TrueNAS, rootless Podman). Run the container with group 0, for example `user: "1001:0"` in `docker-compose.yml`. The writable folders in the image belong to group 0.
- **An old image.** Run `docker compose pull` and `docker compose up -d`. A local `latest` tag doesn't update by itself.

## I get "502 Bad Gateway" behind a reverse proxy

- The proxy must forward to port **8080** of the Leantime container.
- If the proxy's error log says `upstream sent too big header`, raise its buffer sizes. For Nginx:

  ```nginx
  proxy_buffers 8 16k;
  proxy_buffer_size 32k;
  ```

  For the Kubernetes Nginx ingress, use the annotation `nginx.ingress.kubernetes.io/proxy-buffer-size: "32k"`.

## The page has no styles behind HTTPS

Set `LEAN_APP_URL` to the `https://` address people use. Otherwise Leantime links its stylesheets over `http://` and the browser blocks them. Also set `LEAN_SESSION_SECURE=true` once the site is on HTTPS, but not before: over plain `http://` it stops logins.

## The database won't accept the password, or the install fails with a database error

The MySQL container sets its root password, database and user **only the first time it starts**, when its volume is empty. If you changed `MYSQL_PASSWORD` or the other `MYSQL_*` values after that, the old ones still apply.

- Change the password back to what it was at the first start, or
- on a new install with no data to keep, delete the volumes and start again:

  ```bash
  docker compose down -v   # deletes ALL Leantime data in these volumes
  docker compose up -d
  ```

> **Danger:** `docker compose down -v` deletes your database and uploaded files. Only use it on an install without data you need.

Also check that `LEAN_DB_PASSWORD` is exactly the same as `MYSQL_PASSWORD`, and `LEAN_DB_HOST` is the database container's name (`mysql_leantime` in the official file).

## /install keeps redirecting, or "Welcome to Leantime!" won't go away

1. Pull the current image: `docker compose pull && docker compose up -d`. An outdated local `latest` image caused the welcome-dialog loop in several reports.
2. Set `LEAN_APP_URL` with the protocol, for example `LEAN_APP_URL='https://leantime.example.com'`.
3. Clear Leantime's cache and sessions, then reload:

   ```bash
   docker compose exec leantime sh -c 'rm -rf storage/framework/cache/* storage/framework/sessions/*'
   ```

4. Still looping on a new install? Start again with an empty database (see the section above).

## The update gets stuck on "Update Database"

Run the update from the terminal and read its output:

```bash
docker compose exec leantime php bin/leantime db:migrate
```

If it reports an error, add `LEAN_DEBUG=1`, run it again, and include the output when you ask for help. If the browser complains about an insecure form submission, your site runs on HTTPS but `LEAN_APP_URL` says `http://`.

## Uploads or plugins disappear after a restart

The data isn't in a volume. Keep these four volumes mounted, as in the official `docker-compose.yml`:

| Path in the container | Holds |
|---|---|
| `/var/www/html/userfiles` | Uploaded files |
| `/var/www/html/public/userfiles` | Logo and public images |
| `/var/www/html/app/Plugins` | Installed plugins |
| `/var/www/html/storage/logs` | Logs |

Don't mount all of `/var/www/html/storage`: that hides folders the image needs for sessions and caches, and logins start failing.

## Uploads fail for large files

The image accepts uploads up to 100 MB. If larger files fail or smaller ones fail with `413`, raise the limit on your reverse proxy (`client_max_body_size` on Nginx).

## Leantime is slow

- Give the host enough memory; on a NAS, check that it isn't swapping.
- Put the database volume on an SSD if you can. MySQL on slow disks makes every page slow.
- Use the current image: older ones allowed only 5 PHP workers, current ones allow 50.

## Using PostgreSQL

The image includes the PostgreSQL driver. Set `LEAN_DB_DEFAULT_CONNECTION=pgsql` and `LEAN_DB_PORT=5432` along with your database settings. See [System requirements](installation/system-requirements.md).

## Logs

Logging uses `LEAN_LOG_CHANNELS` (comma-separated: `single`, `syslog`, `sentry`, `stderr`). In containers, `stderr` sends Leantime's log to `docker compose logs`.

## Kubernetes (Helm chart)

The community [gissilabs Helm chart](https://github.com/gissilabs/charts) pins an old MariaDB image tag. If the pull fails with `Failed to pull image 'docker.io/bitnami/mariadb:...'`, override the tag in your values:

```yaml
mariadb:
  image:
    tag: "10.6"
```

See [Install on Kubernetes](installation/kubernetes.md).

## Still stuck?

Ask in the [community chat](https://discord.gg/4zMzJtAq9z) or [open an issue](https://github.com/Leantime/leantime/issues/new). Include `docker compose ps`, the last 50 lines of `docker compose logs leantime`, your image version, and your `docker-compose.yml` with passwords removed.
