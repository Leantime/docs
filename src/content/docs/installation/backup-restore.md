---
title: "Backup and restore"
description: "Back up self-hosted Leantime: the MySQL or MariaDB database, uploaded files and config/.env, for Docker and server installs, with a script and restore steps."
head:
  - tag: title
    content: "Back up and restore Leantime (database and files)"
glance:
  minutes: 15
  level: "Some experience"
  needs:
    - "Your database name, user and password (they're in `config/.env`)"
    - "Somewhere safe to keep the backup, away from the Leantime server"
  where:
    - "A terminal on your server (on shared hosting: cPanel's **phpMyAdmin** and **File Manager**)"
  result: "A copy of your database and of `config/.env`, `userfiles/` and `app/Plugins/` that you can restore from."
---

Regular backups are essential to protect your Leantime data. This guide covers what to backup, how to create backups, and how to restore.

## What to Backup

| Component | Location | Contains |
|-----------|----------|----------|
| **Database** | MySQL/MariaDB/PostgreSQL | Projects, tasks, users, comments, timesheets |
| **User Files** | `userfiles/` | Uploaded attachments, documents, images |
| **Public Files** | `public/userfiles/` | Your company logo and other files Leantime shows publicly |
| **Configuration** | `config/.env` | Database credentials, SMTP, OIDC settings |
| **Plugins** | `app/Plugins/` | Marketplace and custom plugins |

## Database Backup

### MySQL/MariaDB

```bash
# Basic backup
mysqldump --no-tablespaces -u leantime -p leantime > leantime_backup_$(date +%Y%m%d).sql

# With compression
mysqldump --no-tablespaces -u leantime -p leantime | gzip > leantime_backup_$(date +%Y%m%d).sql.gz
```

`--no-tablespaces` lets a database user without the `PROCESS` privilege make the backup. Without it, MySQL 8 shows "Access denied; you need (at least one of) the PROCESS privilege(s)".

### Docker

Run this in the folder with your `docker-compose.yml`. It uses the database name, user and password from the `.env` file of the [official Docker setup](/installation/docker/), so you don't need to type them:

```bash
docker compose exec -T leantime_db sh -c 'exec mysqldump --no-tablespaces -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE"' > leantime_backup_$(date +%Y%m%d).sql
```

`leantime_db` is the database service's name in the official `docker-compose.yml`. If you named it differently, use your name.

### PostgreSQL

```bash
pg_dump -U leantime leantime > leantime_backup_$(date +%Y%m%d).sql
```

### Shared Hosting (cPanel)

If you don't have SSH access:

1. Log into **cPanel** → **phpMyAdmin**
2. Select your Leantime database
3. Click **Export** → **Quick** → **Go**
4. Save the `.sql` file to your computer

For larger databases, use **Custom** export with compression enabled.

## File Backup

### Package Installation

```bash
tar -czvf leantime_files_$(date +%Y%m%d).tar.gz \
    config/.env \
    userfiles/ \
    public/userfiles/ \
    app/Plugins/
```

### Docker

The official setup keeps files in Docker volumes. Copy them out of the `leantime` service:

```bash
docker compose cp leantime:/var/www/html/userfiles ./userfiles_backup
docker compose cp leantime:/var/www/html/public/userfiles ./public_userfiles_backup
docker compose cp leantime:/var/www/html/app/Plugins ./plugins_backup
cp .env ./env_backup
```

### Shared Hosting (cPanel)

1. Open **cPanel** → **File Manager**
2. Navigate to your Leantime directory
3. Select and compress these folders:
   - `userfiles/`
   - `public/userfiles/`
   - `config/` (contains `.env`)
   - `app/Plugins/` (if you use plugins)
4. Download the zip file

## Automated Backup Script

Save as `backup_leantime.sh`:

```bash
#!/bin/bash
BACKUP_DIR="/backups/leantime"
DATE=$(date +%Y%m%d)

mkdir -p "$BACKUP_DIR/$DATE"

# Database
mysqldump --no-tablespaces -u leantime -p'password' leantime | gzip > "$BACKUP_DIR/$DATE/db.sql.gz"

# Files
tar -czvf "$BACKUP_DIR/$DATE/files.tar.gz" config/.env userfiles/ public/userfiles/ app/Plugins/

# Cleanup old backups (30 days)
find "$BACKUP_DIR" -type d -mtime +30 -exec rm -rf {} +
```

Add to cron for daily backups:
```bash
0 2 * * * /path/to/backup_leantime.sh
```

## Restore Procedures

### Restore Database

```bash
# Stop web server
sudo systemctl stop apache2

# MySQL/MariaDB
mysql -u leantime -p leantime < backup.sql

# From compressed
gunzip < backup.sql.gz | mysql -u leantime -p leantime
```

### Restore Files

```bash
# Extract backup
tar -xzvf files.tar.gz -C /var/www/leantime/

# Fix permissions
chown -R www-data:www-data /var/www/leantime/userfiles
chown -R www-data:www-data /var/www/leantime/public/userfiles
chown -R www-data:www-data /var/www/leantime/app/Plugins
```

### Restore a Docker installation

This restores the Docker backup above: the database dump, the three copied folders and `env_backup`. Run each step in the folder with your `docker-compose.yml`.

1. **Put your settings back.** `env_backup` holds your database password, email, login and other settings:

   ```bash
   cp ./env_backup .env
   ```

   MySQL reads the database name, user and password from `.env` only when it creates a new, empty database volume. On a new server, restoring `.env` first keeps them the same as in your backup. If the new installation has already started with other database settings, keep its `MYSQL_*` and `LEAN_DB_*` lines and copy your other settings over from `env_backup`.

2. **Stop Leantime** if it's running, so nothing writes to the database while you restore. Leantime stays stopped until step 7:

   ```bash
   docker compose stop leantime
   ```

3. **Start the database** and wait until it's ready:

   ```bash
   docker compose up -d --wait leantime_db
   ```

4. **Import the database:**

   ```bash
   docker compose exec -T leantime_db sh -c 'exec mysql -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE"' < leantime_backup_YYYYMMDD.sql
   ```

5. **Copy the files back** and give them to the web server user. `docker compose create` makes the Leantime container and its volumes without starting it, if they don't exist yet. Files you copy in are owned by your own user, and Leantime can't change or delete them until the `chown` line runs:

   ```bash
   docker compose create leantime
   docker compose cp ./userfiles_backup/. leantime:/var/www/html/userfiles
   docker compose cp ./public_userfiles_backup/. leantime:/var/www/html/public/userfiles
   docker compose cp ./plugins_backup/. leantime:/var/www/html/app/Plugins
   docker compose run --rm --no-deps -u root --entrypoint chown leantime -R www-data:www-data /var/www/html/userfiles /var/www/html/public/userfiles /var/www/html/app/Plugins
   ```

6. **Update the database**, in case the backup came from an older Leantime version. This runs in a temporary container, so Leantime itself stays stopped:

   ```bash
   docker compose run --rm --no-deps --entrypoint php leantime bin/leantime db:migrate
   ```

7. **Start Leantime** with a fresh container, which also picks up the settings from step 1 and starts with an empty cache:

   ```bash
   docker compose up -d --force-recreate leantime
   ```

8. Open Leantime and log in with an existing account.

### Post-Restore

```bash
# Clear cache
php ./bin/leantime cache:clearAll

# Check migrations
php ./bin/leantime db:migrate

# Start web server
sudo systemctl start apache2
```

## Moving to a new server

To move Leantime to another server, follow [Move Leantime to a new server](/installation/move-server/). It uses the backup above and has the steps for Docker and package installations, and what to check afterwards. Two rules matter most:

- **Install the same Leantime version** on the new server (see [installation options](/installation/installation-types/)). Move first, upgrade afterwards.
- **Don't run the web installer** (`/install`) on the new server. It sets up a new, empty database. Restore your backup instead.

## Before you upgrade

Back up the database, `config/.env` and your files before every upgrade. [Upgrade Leantime](/installation/upgrade-guide/) lists what to check first, and how to go back to the old version if something goes wrong.

## Best Practices

- **3-2-1 Rule**: Keep 3 copies of your data, on 2 different media types, with 1 stored offsite
- **Test restores regularly**: A backup you can't restore is worthless
- **Encrypt backups** containing sensitive data
- **Monitor backup jobs** for failures
- **Document your process**: Note credentials and paths somewhere secure

## Offsite Backup

```bash
# Sync to remote server
rsync -avz /backups/ user@remote:/backups/leantime/

# Upload to S3
aws s3 sync /backups/ s3://bucket/leantime-backups/
```

## Troubleshooting

### Access denied during backup

If the message mentions the `PROCESS` privilege, add `--no-tablespaces` to the `mysqldump` command. Otherwise, give the user the privileges a backup needs:

```sql
GRANT SELECT, LOCK TABLES, SHOW VIEW, TRIGGER ON leantime.* TO 'leantime'@'localhost';
```

### Permission denied after restore

```bash
chown -R www-data:www-data /var/www/leantime
chmod -R 755 /var/www/leantime
chmod -R 775 /var/www/leantime/userfiles
```

### Database import fails with "too large"

For large databases, import in chunks or increase MySQL limits:

```bash
mysql -u leantime -p --max_allowed_packet=512M leantime < backup.sql
```

### Files missing after restore

Check that both file folders are restored:
- `userfiles/`: attachments and documents
- `public/userfiles/`: your logo and other public files

## Getting Help

1. Check [Common Problems](/installation/common-issues/)
2. Search [GitHub Issues](https://github.com/Leantime/leantime/issues)
3. Ask in [Discord](https://discord.gg/4zMzJtAq9z) #self-hosted
