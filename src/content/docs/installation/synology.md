---
title: "Synology NAS Installation"
description: "Leantime runs well on a Synology NAS using Container Manager (DSM 7.2+) and the official Docker image. This guide uses bind mounts, so all data lives…"
---

Leantime runs well on a Synology NAS using Container Manager (DSM 7.2+) and the official [Docker image](https://hub.docker.com/r/leantime/leantime). This guide uses bind mounts, so all data lives in one shared folder you can back up with Hyper Backup.

Two things trip up most Synology installs:

1. **Slow first start.** On its very first start MySQL builds its data directory. On HDD arrays (SHR, SHR-2, RAID 5/6) this can take several minutes, even with an SSD cache (we measured about 3 minutes on a 4-disk SHR with NVMe cache). Without a grace period in the healthcheck, MySQL is marked unhealthy and Leantime never starts. The compose file below handles this.
2. **Folder permissions.** The Leantime image runs as uid `1000`, while DSM users start at uid `1026`. Bind-mounted folders must be writable by the container's user or uploads, logos and plugin installs fail.

Your RAID level, BTRFS and whether you have an SSD cache don't matter much. Leantime's database is small and fits in memory once it's running. Plan for about 650 MB of RAM for the two containers.

## 1. Folder layout

Create one folder for everything inside the `docker` shared folder:

```
/volume1/docker/leantime/
├── docker-compose.yml
├── .env
├── backups/              ← nightly database dumps
└── data/
    ├── mysql/            ← MySQL data files
    ├── userfiles/        ← uploaded files
    ├── public_userfiles/ ← logos, avatars
    ├── plugins/          ← installed plugins
    └── logs/             ← Leantime logs
```

## 2. docker-compose.yml

This is the [official compose file](https://github.com/Leantime/docker-leantime) adjusted for Synology: bind mounts instead of named volumes, and a healthcheck that tolerates a slow first start.

```yaml
services:
  leantime_db:
    image: mysql:8.4
    container_name: mysql_leantime
    restart: unless-stopped
    env_file: ./.env
    command: --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
    volumes:
      - ./data/mysql:/var/lib/mysql
    networks:
      - leantime-net
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "127.0.0.1", "--silent"]
      interval: 10s
      timeout: 10s
      retries: 10
      start_period: 300s   # grace period for the slow first start

  leantime:
    image: leantime/leantime:latest
    container_name: leantime
    restart: unless-stopped
    env_file: ./.env
    security_opt:
      - no-new-privileges:true
    ports:
      - "${LEAN_PORT:-8080}:8080"
    networks:
      - leantime-net
    volumes:
      - ./data/userfiles:/var/www/html/userfiles
      - ./data/public_userfiles:/var/www/html/public/userfiles
      - ./data/plugins:/var/www/html/app/Plugins
      - ./data/logs:/var/www/html/storage/logs
    depends_on:
      leantime_db:
        condition: service_healthy

networks:
  leantime-net:
```

Failed checks during `start_period` don't count, and the database is marked healthy as soon as it answers, so a fast start isn't slowed down. The ping goes over TCP (`127.0.0.1`) so that MySQL's temporary first-run setup server doesn't count as ready.

## 3. .env

Start from the repository's [sample.env](https://github.com/Leantime/docker-leantime/blob/master/sample.env) and change at least these:

| Setting | Value |
| --- | --- |
| `MYSQL_ROOT_PASSWORD`, `MYSQL_PASSWORD`, `LEAN_DB_PASSWORD` | Strong passwords. `MYSQL_PASSWORD` and `LEAN_DB_PASSWORD` must match. |
| `LEAN_DB_HOST` | `mysql_leantime` (the database container name) |
| `LEAN_SESSION_PASSWORD` | A long random string, e.g. from `openssl rand -base64 32` |
| `LEAN_APP_URL` | The URL you open Leantime at, e.g. `http://192.168.1.50:8080` or your reverse proxy URL |
| `LEAN_PORT` | `8080`, or any free port if 8080 is taken on the NAS |
| `LEAN_SESSION_SECURE` | `false` over plain http, `true` behind https |
| `LEAN_DEFAULT_TIMEZONE` | Your timezone, e.g. `America/Chicago` |

## 4. Install with Container Manager

1. **Turn on SSH** (needed for step 3): Control Panel → Terminal & SNMP → Enable SSH service.
2. **Add the files.** In File Station, create `docker/leantime` and upload `docker-compose.yml` and `.env`.
3. **Create the data folders and set ownership** over SSH:

    ```bash
    cd /volume1/docker/leantime
    sudo mkdir -p data/mysql data/userfiles data/public_userfiles data/plugins data/logs backups
    sudo chattr +C data/mysql   # optional, BTRFS: no copy-on-write for the database files
    sudo chown -R 1000:1000 data/userfiles data/public_userfiles data/plugins data/logs
    sudo chmod -R 775 data/userfiles data/public_userfiles data/plugins data/logs
    sudo chmod 600 .env
    ```

    Leave `data/mysql` alone, MySQL takes ownership of it on first start. The `chmod` also removes DSM's ACL from those folders, which would otherwise block uid 1000. `chattr +C` only works on an empty folder and doesn't affect snapshots.

    **Alternative to the chown:** run Leantime as your own DSM user by adding `user: "1026:0"` to the `leantime` service (replace `1026` with your uid from `id youruser`). The group must be `0`. The folders then stay owned by your DSM user.

4. **Create the project.** Container Manager → Project → Create. Name `leantime`, path `/docker/leantime`, choose "Use existing docker-compose.yml". Skip the Web Station step and click Done.
5. **Wait for the first start.** `mysql_leantime` shows "starting" for a few minutes, then "healthy", and then `leantime` starts. Only the first start is slow.
6. **Run the installer.** Open `http://<nas-ip>:8080/install` and create the admin account.
7. **Optional: https.** Control Panel → Login Portal → Advanced → Reverse Proxy, pointing to `localhost:8080`. Then set `LEAN_APP_URL` to the https URL and `LEAN_SESSION_SECURE=true`, and restart the project.

To update, take a database dump first (see below), then over SSH:

```bash
cd /volume1/docker/leantime && sudo docker-compose pull && sudo docker-compose up -d
```

## 5. Backups

Back up a nightly SQL dump plus the `data/` file folders. Don't rely on copying the raw `data/mysql` files: Hyper Backup copies them one by one while MySQL is writing, and the result may not restore.

1. **Nightly dump.** Control Panel → Task Scheduler → Create → Scheduled Task → User-defined script. User `root`, daily (e.g. 02:00):

    ```bash
    /usr/local/bin/docker exec mysql_leantime sh -c \
      'exec mysqldump --single-transaction --routines -uroot -p"$MYSQL_ROOT_PASSWORD" "$MYSQL_DATABASE"' \
      | gzip > /volume1/docker/leantime/backups/leantime-$(date +%F).sql.gz
    find /volume1/docker/leantime/backups -name '*.sql.gz' -mtime +14 -delete
    ```

    `--single-transaction` takes a consistent dump while Leantime keeps running. The password comes from the container's environment, so it never appears in the task.

2. **Hyper Backup.** Back up `docker/leantime` and exclude `data/mysql`. This covers the compose file, `.env`, the dumps and all uploaded files.
3. **Snapshots (optional).** Snapshot Replication on the `docker` shared folder gives quick rollbacks before an update. Treat the SQL dump as the copy to trust.

**Restore:** start the project with an empty `data/mysql`, let MySQL initialize, then:

```bash
gunzip -c leantime-YYYY-MM-DD.sql.gz | sudo docker exec -i mysql_leantime \
  sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD" "$MYSQL_DATABASE"'
```

See also [Backup & Restore](/installation/backup-restore/).

## Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| `dependency failed to start: container mysql_leantime is unhealthy` | First start is slower than the healthcheck allows | Use the healthcheck above. If it still times out, raise `start_period`. |
| MySQL log: `data directory has files in it` | DSM indexing created `@eaDir` (or a `.DS_Store`) in `data/mysql` before the first start | Stop the project, empty `data/mysql`, start again. Don't index the `docker` folder. |
| Uploads, logo or plugin installs fail with "permission denied" | Bind folders still belong to your DSM user or carry a DSM ACL | Repeat the `chown`/`chmod` from step 3. `ls -la data` should show `1000 1000` and no `+` after the permissions. |
| Leantime log full of `Table 'leantime.zp_user' doesn't exist` | Normal until `/install` has run | Open `/install` and finish setup. |
| Port already in use | Another package uses 8080 | Set `LEAN_PORT` to a free port in `.env`. |
| Logged out right after logging in | `LEAN_SESSION_SECURE=true` over plain http, or `LEAN_APP_URL` doesn't match the URL you use | Match both to how you actually reach Leantime. |
| Leantime feels slow | Low-power CPUs (Celeron, older ARM) shared with other containers | Leantime and MySQL need about 650 MB of RAM. Stop heavy containers or add RAM if the NAS is swapping. |

Container Manager → Container → `mysql_leantime` → Log, and `data/logs/` for Leantime's own log, are the first places to look. More in [Docker Troubleshooting](/installation/docker-troubleshooting/).
