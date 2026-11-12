# System Requirements

Leantime needs **PHP 8.2 or later** and a database (**MySQL 8.0+**, **MariaDB 10.6+** or **PostgreSQL**), or a machine that runs **Docker**. These requirements apply to Leantime 3.2 and later; PostgreSQL works from Leantime 3.6.

## What do I need to run Leantime with Docker?

- **Docker with Docker Compose.** The official image [`leantime/leantime`](https://hub.docker.com/r/leantime/leantime) already contains PHP, the web server and every PHP extension Leantime needs. It runs on amd64 and ARM (arm64 and 32-bit arm), so it works on Raspberry Pi, Apple Silicon and ARM cloud servers.
- **A database:** MySQL 8.0+, MariaDB 10.6+ or PostgreSQL. The example Docker Compose file starts MySQL 8.4 for you, and the image already includes the PostgreSQL driver.

See [Docker based installation](installation/docker.md).

## What do I need for a package installation?

| Component | Requirement |
|---|---|
| PHP | 8.2 or later. The official Docker image uses PHP 8.4. |
| Database | MySQL 8.0 or later (8.4 LTS recommended), MariaDB 10.6 or later, or PostgreSQL (Leantime 3.6 and later) |
| Web server | Apache 2.4 with `mod_rewrite`, or Nginx with PHP-FPM. IIS works with some changes. |
| Operating system | Any Linux distribution that provides PHP 8.2+. Ubuntu 24.04 LTS ships PHP 8.3 and Debian 12 ships PHP 8.2. Ubuntu 22.04 ships PHP 8.1, which is too old; install a newer PHP from a third-party repository. |

See [Package based installation](installation/package-installation.md).

## Which PHP extensions does Leantime need?

All of these must be enabled:

- BC Math (`bcmath`)
- Ctype
- cURL
- DOM
- Exif
- Fileinfo
- Filter
- GD
- Hash
- LDAP
- Multibyte String (`mbstring`)
- MySQL (`mysqli` and `pdo_mysql`)
- PostgreSQL (`pdo_pgsql`), only if you use PostgreSQL
- OPcache
- OpenSSL
- PCNTL
- PCRE
- PDO
- Phar
- POSIX
- Session
- SimpleXML
- Tokenizer
- Zip

Run `php -m` on the server to list the extensions that are enabled.

## How should the database be set up?

- Create an empty database and a user with full rights on it. The installer at `/install` creates the tables.
- On MySQL and MariaDB, use the `utf8mb4` character set with the `utf8mb4_unicode_ci` collation. Leantime uses these by default (`LEAN_DB_CHARSET`, `LEAN_DB_COLLATION`).
- You don't need to change the server's SQL mode. Leantime sets its own SQL mode for its connections.

### Using PostgreSQL

MySQL is the default. To use PostgreSQL, add these to your configuration before you run the installer:

```ini
LEAN_DB_DEFAULT_CONNECTION = 'pgsql'
LEAN_DB_PORT = '5432'
# Optional
LEAN_DB_SCHEMA = 'public'
LEAN_DB_SSLMODE = 'prefer'
```

MySQL and MariaDB get the most testing. If something doesn't work on PostgreSQL, please [open an issue](https://github.com/Leantime/leantime/issues).

## Which folders must be writable?

The web server user (usually `www-data` or `apache`) must be able to write to `storage/`, `userfiles/`, `public/userfiles/` and `app/Plugins/`. See [Common issues](installation/common-issues.md) if logins or uploads fail after installation.

## Can I run Leantime on an older PHP version?

No. Leantime 3.2 and later need PHP 8.2; only Leantime 3.0 and 3.1 ran on PHP 8.1. Older releases don't get security fixes, so upgrade PHP rather than stay on an old Leantime version. See the [upgrade guide](installation/upgrade-guide.md).
