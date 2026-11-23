# Other ways to install Leantime

Leantime runs anywhere Docker runs. This page covers Portainer, TrueNAS, Unraid and a Raspberry Pi, plus installs in a subfolder or on shared hosting. All of them use the official [`leantime/leantime`](https://hub.docker.com/r/leantime/leantime) image, or the release package for shared hosting.

For a Synology NAS, see [Synology NAS](installation/synology.md). For Kubernetes, see [Install Leantime on Kubernetes](installation/kubernetes.md). For platforms that install Leantime from their own template, like Coolify, see [One-click installs](installation/one-click-installs.md).

## Which Compose file do I use?

Portainer and TrueNAS both take a Docker Compose file that you paste in. Use this one, and replace each value in angle brackets:

```yaml
services:
  leantime_db:
    image: mysql:8.4
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: "<database root password>"
      MYSQL_DATABASE: "leantime"
      MYSQL_USER: "leantime"
      MYSQL_PASSWORD: "<database password>"
    command: --character-set-server=UTF8MB4 --collation-server=UTF8MB4_unicode_ci
    volumes:
      - db_data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "127.0.0.1", "--silent"]
      interval: 10s
      timeout: 10s
      retries: 10
      start_period: 300s

  leantime:
    image: leantime/leantime:3.16.0
    restart: unless-stopped
    ports:
      - "8080:8080"
    environment:
      LEAN_APP_URL: "http://<server address>:8080"
      LEAN_DB_HOST: "leantime_db"
      LEAN_DB_USER: "leantime"
      LEAN_DB_PASSWORD: "<database password>"
      LEAN_DB_DATABASE: "leantime"
      LEAN_SESSION_PASSWORD: "<long random value>"
      LEAN_SESSION_EXPIRATION: "480"
      LEAN_DEFAULT_TIMEZONE: "America/New_York"
    volumes:
      - userfiles:/var/www/html/userfiles
      - public_userfiles:/var/www/html/public/userfiles
      - plugins:/var/www/html/app/Plugins
      - logs:/var/www/html/storage/logs
    depends_on:
      leantime_db:
        condition: service_healthy

volumes:
  db_data:
  userfiles:
  public_userfiles:
  plugins:
  logs:
```

- **`<database password>`** appears twice. Use the same password in both places.
- **`<long random value>`** is Leantime's secret key. Make one with `openssl rand -base64 32`, or any password generator, at least 32 characters long.
- **`<server address>`** is the address you open Leantime at, like `192.168.1.20`. Once you put Leantime behind HTTPS, change `LEAN_APP_URL` to the `https://` address (see [Run Leantime behind a reverse proxy](installation/reverse-proxy.md)).
- **`3.16.0`** is the Leantime version. Check the [releases](https://github.com/Leantime/leantime/releases) for the newest one.
- **`America/New_York`** is the default time zone, as a [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
- **Port 8080 already in use?** Change the first number, for example `"8090:8080"`, and use that port in `LEAN_APP_URL`.

Once Leantime is running, open `http://<server address>:8080`. Enter your email address, name and company name and click **Install**, then set your password and click through the welcome steps.

## How do I install Leantime with Portainer?

1. In Portainer, open your environment and go to **Stacks** → **Add stack**.
2. Name the stack `leantime`, choose **Web editor**, and paste the [Compose file](#which-compose-file-do-i-use) with your values.
3. Click **Deploy the stack**. The first start takes a few minutes while the database sets itself up.
4. Open Leantime and run the installer.

**To update:** open the stack, click **Editor**, change the version in `leantime/leantime:3.16.0`, and click **Update the stack**. Your data stays in the stack's volumes. Then open Leantime and click **Update Now!** if it asks (see [Upgrade Leantime](installation/upgrade-guide.md)).

## How do I install Leantime on TrueNAS?

TrueNAS 24.10 and later run apps with Docker. Leantime isn't in the TrueNAS app catalog, so you install it as a custom app from the Compose file:

1. Go to **Apps** → **Discover Apps**.
2. Click the ⋮ menu next to **Custom App**, then **Install via YAML**.
3. Name the app `leantime`, and paste the [Compose file](#which-compose-file-do-i-use) with your values into **Custom Config**.
4. Click **Save**. When the app shows **Running**, open Leantime and run the installer.

The volumes in the Compose file live in TrueNAS's apps dataset. To keep the files on a dataset of your own instead, replace each volume with a path, like `/mnt/tank/leantime/userfiles:/var/www/html/userfiles`, and let user 1000 write to those folders (see [File permissions on volumes](installation/docker-troubleshooting.md)).

**To update:** edit the app, change the version in the Compose file, and save.

## How do I install Leantime on Unraid?

Unraid's **Apps** tab (Community Applications) has a Leantime template. A community member maintains it, not Leantime. It uses the official image, but needs a database you install separately.

1. **Install MariaDB** from the **Apps** tab, and create a database and a user for Leantime in it.
2. **Install Leantime:** search the **Apps** tab for `leantime` and open the template.
3. **Change these values** before you click **Apply**:

   | Setting | What to put there |
   | --- | --- |
   | `LEAN_DB_HOST`, `LEAN_DB_USER`, `LEAN_DB_PASSWORD`, `LEAN_DB_DATABASE` | Your MariaDB server's address, and the user, password and database you created |
   | `LEAN_APP_URL` | The address you open Leantime at, like `http://192.168.1.20:8080` |
   | `LEAN_SESSION_PASSWORD` | Your own long random value. The template's default is a public sample value. |
   | `LEAN_TRUSTED_PROXIES` | Clear it. The template's default trusts every visitor, so anyone could fake their address and get around the sign-in limits. Empty, Leantime trusts proxies on your own network. |
   | `LEAN_DEFAULT_TIMEZONE` | Your time zone |

4. Open Leantime and run the installer.

If uploads fail, the folders under `appdata` probably belong to root. Leantime's image runs as user 1000, so give it those folders, for example `chown -R 1000:0 /mnt/user/appdata/leantime` (see [Docker troubleshooting](installation/docker-troubleshooting.md)).

## Can I run Leantime on a Raspberry Pi?

Yes. The official image runs on ARM (arm64 and 32-bit arm), so a Raspberry Pi uses the normal [Docker based installation](installation/docker.md). You don't need to build the image yourself.

- **Use a 64-bit OS** (Raspberry Pi OS 64-bit or Ubuntu Server for arm64) if you can. The official `mysql:8.4` and `mariadb` images are available for arm64 but not for 32-bit arm.
- **On a 32-bit OS**, install MariaDB 10.6 or later on the Pi itself (`sudo apt install mariadb-server`) and point Leantime at it. Create the database user for `'%'` (or the container's IP) rather than `'localhost'`, and remove `bind-address = 127.0.0.1` from the MariaDB config (usually `/etc/mysql/mariadb.conf.d/50-server.cnf`) so the container can connect, then restart MariaDB: `sudo systemctl restart mariadb`. Then set `LEAN_DB_HOST` to the Pi's IP address, or add `--add-host=host.docker.internal:host-gateway` and use `host.docker.internal`.

Thanks to @lamping7 for the original Raspberry Pi guide.

## Can I run Leantime in a subfolder?

Yes, for example at `yourcompany.com/leantime`. See [Subfolder Installation](installation/subfolder.md).

## Can I install Leantime on shared hosting?

Yes, on a plan with cPanel, PHP 8.2 and cron jobs. See [Shared hosting (cPanel)](installation/shared-hosting.md).

## What should I do after installing?

- Put Leantime behind HTTPS before your team uses it (see [Run Leantime behind a reverse proxy](installation/reverse-proxy.md)).
- Set up [email](installation/email-configuration.md), so invitations and notifications go out.
- Plan your [backups](installation/backup-restore.md).
