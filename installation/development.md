# Development Setup

How to run Leantime from source to work on its code. To run Leantime for your team, use [Docker](installation/docker.md) or a [package installation](installation/package-installation.md) instead.

## Development using Docker

You need `git`, `docker` (with `docker compose`), `make`, `composer` and `npm`.

1. Clone the repository and open its folder:

   ```bash
   git clone https://github.com/Leantime/leantime.git
   cd leantime
   ```

2. Install the dependencies, build the JavaScript and CSS, and start the containers:

   ```bash
   make run-dev
   ```

3. Open [http://localhost:5080](http://localhost:5080) (or `https://localhost:5443`) and follow the installer.

The containers mount your repository folder, so code changes show up without a rebuild. After changing JavaScript or CSS, run `npx mix` again.

### What the development environment includes

| Service | What it's for | How to reach it |
|---------|---------------|-----------------|
| `leantime-dev` | Leantime, with Xdebug | `http://localhost:5080` |
| `leantime-db` | MySQL 8.4. Database, user and password are all `leantime` | From your computer: run `docker compose --file .dev/docker-compose.yaml port leantime-db 3306` for the port |
| `maildev` | Catches emails so you can read them | Web interface: run `docker compose --file .dev/docker-compose.yaml port maildev 8081` for the port |
| `leantime-redis` | Redis, for testing the Redis cache and sessions | Inside Docker as `leantime-redis` |
| `s3ninja` | A local S3 server, for testing S3 file storage | Inside Docker as `s3ninja` |

The database settings are set in `.dev/docker-compose.yaml`. Leantime doesn't send email to MailDev until you point it there in `config/.env`:

```ini
LEAN_EMAIL_USE_SMTP = true
LEAN_EMAIL_SMTP_HOSTS = 'maildev'
LEAN_EMAIL_SMTP_PORT = 465
LEAN_EMAIL_SMTP_AUTH = false
LEAN_EMAIL_SMTP_AUTO_TLS = false
```

### Xdebug

Xdebug is on and connects to port 9003 on your computer, with the IDE key `PHPSTORM`. Change the key in `.dev/xdebug.ini` if your IDE uses another one. Your firewall must allow incoming connections on port 9003, because connections from Docker to your computer count as external.

### Tests

```bash
make unit-test          # unit tests
make acceptance-test    # browser tests
```

Both start their own containers, with Leantime on port 8002.

## Development on your own machine

You need PHP 8.2 or later with the extensions in [System Requirements](installation/system-requirements.md), MySQL 8.0+ or MariaDB 10.6+, a web server, `composer` and `npm`.

1. Clone the repository and create an empty database.
2. Install the dependencies and build the JavaScript and CSS:

   ```bash
   make build-dev
   ```

   This runs `npm install`, `composer install` and `npx mix`.

3. Point your web server's document root at the `public/` folder.
4. Copy `config/sample.env` to `config/.env` and fill in your database settings (`LEAN_DB_HOST`, `LEAN_DB_USER`, `LEAN_DB_PASSWORD`, `LEAN_DB_DATABASE`).
5. Open `http://<your local domain>/install` and follow the installer.
