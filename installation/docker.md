# Install Leantime with Docker

**At a glance**

- **Time:** about 10 minutes
- **Level:** Some experience. You have used a terminal before.
- **You need:** a computer or server with [Docker and Docker Compose](https://docs.docker.com/get-docker/) installed, and a terminal on it (on a server, usually over SSH).
- **At the end:** Leantime running at `http://localhost:8080` (or your server's address) with its own MySQL database, and your data kept safe in Docker volumes.

The official [`leantime/leantime`](https://hub.docker.com/r/leantime/leantime) image has everything Leantime needs: PHP, the web server and all the PHP extensions. You add a MySQL database, and Docker Compose can start that for you too.

## Which way should I install?

- **Docker Compose** (recommended): one file starts Leantime and a MySQL database together. Choose this if you are starting from scratch.
- **docker run**: start the containers one by one. Choose this if you already run a MySQL or MariaDB server you want to use.

Both are below. The update steps further down cover both too.

## Install Leantime

### With Docker Compose (recommended)


1. **Download the Compose files.** Run this on the machine that will host Leantime:

   ```sh
   git clone https://github.com/Leantime/docker-leantime.git
   cd docker-leantime
   ```

2. **Create your settings file** from the sample:

   ```sh
   cp sample.env .env
   ```

3. **Change the default passwords.** Open `.env` in a text editor (for example `nano .env`) and replace these values. The sample passwords are public, so never keep them.

   | Setting | What to put there |
   |---|---|
   | `MYSQL_ROOT_PASSWORD` | A new, strong password for the database's root user |
   | `MYSQL_PASSWORD` | A new, strong password for Leantime's database user |
   | `LEAN_DB_PASSWORD` | **The same** password as `MYSQL_PASSWORD` |
   | `LEAN_SESSION_PASSWORD` | A long random string. It protects login sessions. |

   To make a strong random value, run `openssl rand -base64 32` and copy the result.

4. **Start Leantime and the database:**

   ```sh
   docker compose up -d
   ```

   The first start downloads the images and prepares the database, which can take a few minutes. Run `docker compose ps` to check: when both containers say `healthy` or `running`, you are ready.

5. **Open the installer.** In your browser, go to `http://localhost:8080`, or `http://<your-server-address>:8080` on a server. Leantime opens its installer. Enter your email address, name and company name and click **Install**. Then set your password and click through the short welcome steps.

### With docker run


1. **Create a network** so Leantime can reach the database:

   ```sh
   docker network create leantime-net
   ```

2. **Start MySQL.** Skip this step if you use an existing database server. Replace each `<...>` with your own value:

   ```sh
   docker run -d --restart unless-stopped --network leantime-net \
     -v leantime_db:/var/lib/mysql \
     -e MYSQL_ROOT_PASSWORD='<root password>' \
     -e MYSQL_DATABASE=leantime \
     -e MYSQL_USER=lean \
     -e MYSQL_PASSWORD='<database password>' \
     --name mysql_leantime mysql:8.4 \
     --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
   ```

   Wait about a minute: MySQL prepares its data the first time it starts.

> **Using your own database server?** Create an empty database and a user for it, then use its address as `LEAN_DB_HOST` in the next step. If that database runs in another container, connect it to the network with `docker network connect leantime-net <container name>`.

3. **Start Leantime.** Use the same database name, user and password as in step 2:

   ```sh
   docker run -d --restart unless-stopped --network leantime-net -p 8080:8080 \
     -v leantime_userfiles:/var/www/html/userfiles \
     -v leantime_public_userfiles:/var/www/html/public/userfiles \
     -v leantime_plugins:/var/www/html/app/Plugins \
     -v leantime_logs:/var/www/html/storage/logs \
     -e LEAN_DB_HOST=mysql_leantime \
     -e LEAN_DB_DATABASE=leantime \
     -e LEAN_DB_USER=lean \
     -e LEAN_DB_PASSWORD='<database password>' \
     -e LEAN_SESSION_PASSWORD='<long random string>' \
     --name leantime leantime/leantime:latest
   ```

   Leantime listens on port **8080** inside the container. `-p 8080:8080` makes it reachable on port 8080 of your machine; use `-p 80:8080` to serve it on port 80 instead.

4. **Open the installer.** In your browser, go to `http://localhost:8080`, or `http://<your-server-address>:8080` on a server. Enter your email address, name and company name and click **Install**. Then set your password and click through the short welcome steps.

> **It worked if…** You see the Leantime dashboard, and you can log out and back in with your email address and new password.

## Where is my data stored?

In Docker volumes, so it survives restarts, updates and new containers:

| Volume | What it holds |
|---|---|
| `db_data` (Compose) or `leantime_db` | The MySQL database: projects, to-dos, users, everything you type |
| `userfiles` | Files people upload to to-dos, projects and docs |
| `public_userfiles` | Your logo and other public images |
| `plugins` | Plugins installed from the marketplace |
| `logs` | Leantime's error log |

Back up the database and the two file volumes. See [Backup and restore](installation/backup-restore.md).

> **Don't run `docker compose down -v`:** The `-v` flag deletes the volumes, and with them all your data. `docker compose down` on its own is safe.

## How do I use my own domain with HTTPS?

Put a reverse proxy (Nginx, Caddy, Traefik or your NAS's built-in one) in front of port 8080 to handle the certificate, then set these in `.env` (or with `-e` on `docker run`):

```ini
LEAN_APP_URL = 'https://projects.example.com'
LEAN_SESSION_SECURE = true
```

`LEAN_SESSION_SECURE = true` sends the login cookie over HTTPS only. Leave it `false` while you use plain `http://`, or you won't be able to log in.

A restart keeps the old settings, so recreate the container to apply them: with Compose, run `docker compose up -d` (it recreates the container when `.env` changes); with `docker run`, remove the container and start it again as in the update steps below.

## How do I update Leantime in Docker?

Back up first. Then:

### With Docker Compose

```sh
docker compose pull
docker compose up -d
```

Docker downloads the new image and recreates the Leantime container. Your volumes stay as they are.

### With docker run

```sh
docker pull leantime/leantime:latest
docker stop leantime
docker rm leantime
```

Then run the `docker run` command from step 3 again, with the same volumes and settings. Removing the container doesn't touch the volumes, so your files and plugins stay.


When you next open Leantime, it shows an **Update Database** page. Click **Update Now!** Or run the database update from the terminal:

```sh
docker exec leantime php bin/leantime db:migrate
```

With Compose, use `docker compose exec leantime php bin/leantime db:migrate`. For notes on specific versions, see the [Upgrade guide](installation/upgrade-guide.md).

## How do I install plugins in Docker?

Install them from **My Apps** in Leantime as usual. They are saved in the `plugins` volume, so keep that volume mounted; without it, plugins disappear when the container is recreated. See [Install and configure plugins](installation/plugin-installation.md).

## What if something goes wrong?

- [Docker troubleshooting](installation/docker-troubleshooting.md) covers containers that won't start, `unhealthy` status and redirect loops.
- [Common issues](installation/common-issues.md) covers login, upload and permission problems.

> **Ask an AI assistant:** Give your AI assistant this page's Markdown version (`https://docs.leantime.io/installation/docker.md`) and add the error message or the output of `docker compose logs leantime`. Remove passwords from anything you paste.
