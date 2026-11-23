# Scheduled jobs, the queue and Redis

Leantime does some of its work in the background: it sends notification emails and webhooks, checks plugins, and takes daily report snapshots. Messages to Slack, Mattermost and other [project integrations](using-leantime/integrations.md) go out right away, without waiting for these jobs. On your own server, this page shows how to keep that work running, how to check it, and when Redis helps. On Leantime Cloud, all of this is done for you.

## What runs in the background?

| Job | How often | What it does |
| --- | --- | --- |
| `queue:emails` | Every minute | Sends notification emails, following each person's **Email frequency** |
| `queue:webhooks` | Every minute | Delivers personal webhooks (see [Notifications](using-leantime/notifications.md)) |
| `queue:httprequests` and `queue:default` | Every 5 minutes | Work that plugins put in the queue |
| `reports:dailyIngestion` | Once a day | Takes the daily snapshot of every project for reports and the sprint burndown |
| `reports:goalValueSnapshot` | Once a day | Records goal values for the trend in [Goals](using-leantime/goals.md) |
| `plugins:checkLicense` | Once a day | Checks marketplace plugin licenses |
| `plugins:checkUpdates` | Once a day | Looks for plugin updates, and installs them if automatic updates are on (see [Plugin licenses and updates](installation/plugin-licenses.md)) |
| `reports:telemetry` | Once a day | Sends the anonymous usage summary, unless you turned it off |

Plugins can add their own jobs. The CalDAV plugin, for example, adds `caldav-sync` every 15 minutes. To see the jobs on your server and when each runs next:

```sh
php bin/leantime schedule:list
```

The daily jobs run at midnight in your default time zone (`LEAN_DEFAULT_TIMEZONE`).

## How do I run the scheduled jobs?

**Docker:** the official image runs them already. There's nothing to set up.

**Your own server:** add a cron job that runs every minute, as the web server's user. Open that user's crontab with `sudo crontab -u www-data -e` and add:

```sh
* * * * * cd /var/www/leantime && php bin/leantime schedule:run >> /dev/null 2>&1
```

Change `/var/www/leantime` to your Leantime folder. If your host only allows a cron job every 5 minutes, that works too: the every-minute jobs then run every 5 minutes. Instead of cron, you can keep `php bin/leantime schedule:work` running as a service, for example with systemd or supervisor. It runs the jobs every minute by itself.

**Shared hosting:** use your host's cron jobs (see [Shared hosting (cPanel)](installation/shared-hosting.md)). If your plan has none, have an outside service, like an uptime monitor, open this address every minute:

```
https://projects.example.com/cron/run
```

It needs no sign-in and returns an empty page. Leantime runs the jobs after it answers.

## What happens without a cron job?

Then the jobs only run from people's browsers: while someone is signed in with Leantime open, their browser asks Leantime to run them every 5 minutes. That has three gaps:

- Nothing runs while nobody is signed in. Emails wait until someone opens Leantime.
- The every-minute jobs only run every 5 minutes.
- The daily jobs only run if one of those requests lands in the first minute after midnight. Most days, none does, so daily report snapshots, plugin license checks and plugin updates get skipped.

Once a cron job (or `schedule:work`) runs the jobs, you can turn the browser requests off:

```ini
LEAN_POOR_MANS_CRON = false
```

## Do I need a queue worker?

No. Leantime keeps its queue (notification emails and webhooks) in its own database, and the scheduled jobs send what's in it. You don't need `queue:work`, Supervisor workers for the queue, or Redis for the queue.

## How do I check that the jobs run?

- **List them:** `php bin/leantime schedule:list` shows every job and when it runs next. In Docker, run it inside the container: `docker compose exec leantime php bin/leantime schedule:list`.
- **Run one now:** `php bin/leantime schedule:test --name=queue:emails` (use a name from the list).
- **Look for errors** in `storage/logs/`. In Docker, `docker compose logs leantime` also shows the scheduler.
- **Emails don't arrive:** see [Email configuration](installation/email-configuration.md).

## When do I need Redis?

Most servers don't. Without Redis, Leantime keeps its cache and sign-ins in files on the server, which works well for one server.

Use Redis when you run more than one Leantime container or server behind a load balancer. With Redis, they share:

- **Sign-ins,** so people stay signed in whichever server answers.
- **The cache,** so a change made on one server shows on the others.
- **The sign-in limits,** so the limits count across all servers.

Each server also needs:

- the same database;
- the same uploaded files, for example by [storing files in S3](installation/configuration.md#s3-file-storage);
- the same `LEAN_APP_URL` and `LEAN_SESSION_PASSWORD`. Leantime uses both to name its cache, so with different values the servers don't share the cache or the sign-in limits, even on one Redis.

**Run the scheduled jobs on one server only.** Leantime doesn't coordinate them between servers, so two servers can send the same queued email. On your own servers, add the cron job to one of them, and set `LEAN_POOR_MANS_CRON = false` on all of them. The official Docker image always runs the jobs in every container, and in 3.15 there's no setting to turn that off, so with several containers people can get some notification emails twice.

Sign-ins kept in Redis also survive when you recreate Leantime's container.

## How do I turn on Redis?

Leantime needs the PHP Redis extension (`phpredis`). The official Docker image has it. On your own server, install it, for example with `sudo apt install php-redis` on Debian or Ubuntu, and restart PHP.

Then set:

```ini
LEAN_USE_REDIS = true
LEAN_REDIS_HOST = 'redis'               # your Redis server's name or address
LEAN_REDIS_PORT = 6379
LEAN_REDIS_SCHEME = 'tcp'               # 'tls' if your Redis requires TLS
LEAN_REDIS_PASSWORD = 'your-password'   # leave out if your Redis has no password
```

> **Warning:** Set `LEAN_REDIS_SCHEME`. Without it, Leantime connects with TLS, and a Redis without TLS never answers: every page loads until it times out. With it empty (`''`, as in the Docker `sample.env`), every page shows a server error.

Instead of the host, port and scheme, you can give one address: `LEAN_REDIS_URL = 'tcp://redis:6379'`.

**Docker Compose:** add a Redis service to `docker-compose.yml`, next to `leantime_db`:

```yaml
  redis:
    image: redis:7-alpine
    restart: unless-stopped
    volumes:
      - redis_data:/data
    networks:
      - leantime-net
```

Add `redis_data:` under `volumes:` at the end of the file. In `.env`, set `LEAN_USE_REDIS = true`, `LEAN_REDIS_HOST = 'redis'`, `LEAN_REDIS_PORT = 6379` and `LEAN_REDIS_SCHEME = 'tcp'`, and leave out `LEAN_REDIS_PASSWORD`: this Redis has no password, and Redis refuses a password it doesn't expect. Then run `docker compose up -d`.

Leantime keeps sign-ins in Redis database 1 and the cache in database 0, so clearing the cache doesn't sign anyone out. To use other databases, set `LEAN_REDIS_DB` for the cache and `LEAN_REDIS_SESSION_DB` for sign-ins.

## What if Redis stops?

Every page shows a server error until Redis is back. Then Leantime works again by itself. If Redis lost its data, everyone signs in again. The `redis_data` volume above keeps Redis's data when its container restarts.

## Related

- [Configuration](installation/configuration.md)
- [Using the Leantime CLI](development/commandline.md)
- [Email configuration](installation/email-configuration.md)
- [Run Leantime behind a reverse proxy](installation/reverse-proxy.md)
