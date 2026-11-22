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

## Server Migration

Moving Leantime to a new server requires backing up from the old server, installing on the new one, and restoring your data.

### Step 1: Backup Everything on Old Server

```bash
# Database
mysqldump --no-tablespaces -u leantime -p leantime | gzip > leantime_migration.sql.gz

# Files
tar -czvf leantime_files.tar.gz config/.env userfiles/ public/userfiles/ app/Plugins/
```

### Step 2: Install Leantime on New Server

Follow the standard [installation guide](/installation/installation-types/) but **stop before the web installer**. You'll restore your existing database instead of creating a new one.

### Step 3: Transfer Backup Files

```bash
# From old server or your local machine
scp leantime_migration.sql.gz user@newserver:/tmp/
scp leantime_files.tar.gz user@newserver:/tmp/
```

### Step 4: Restore on New Server

```bash
# Create database
mysql -u root -p -e "CREATE DATABASE leantime;"
mysql -u root -p -e "GRANT ALL ON leantime.* TO 'leantime'@'localhost' IDENTIFIED BY 'yourpassword';"

# Import data
gunzip < /tmp/leantime_migration.sql.gz | mysql -u leantime -p leantime

# Restore files
tar -xzvf /tmp/leantime_files.tar.gz -C /var/www/leantime/

# Fix permissions
chown -R www-data:www-data /var/www/leantime/userfiles /var/www/leantime/public/userfiles /var/www/leantime/app/Plugins
```

### Step 5: Update Configuration

Edit `config/.env` and update any server-specific settings:
- `LEAN_APP_URL` - your new domain
- Database credentials if changed
- File paths if different

### Step 6: Verify

```bash
php ./bin/leantime db:migrate
php ./bin/leantime cache:clearAll
```

Visit your new URL and verify:
- You can log in with existing credentials
- Projects and tasks appear correctly
- Uploaded files are accessible

## Pre-Upgrade Checklist

Always backup before upgrading Leantime. This protects you if an upgrade fails or introduces issues.

### Before You Upgrade

1. **Check the release notes** for breaking changes
2. **Create a full backup:**
   ```bash
   # Quick pre-upgrade backup
   mysqldump --no-tablespaces -u leantime -p leantime | gzip > pre_upgrade_$(date +%Y%m%d).sql.gz
   tar -czvf pre_upgrade_files_$(date +%Y%m%d).tar.gz config/.env userfiles/ public/userfiles/ app/Plugins/
   ```
3. **Note your current version.** Click the **?** (help) icon in the top right of Leantime. The version is at the bottom, under **System**.
4. **Test in staging first** if possible

### If Upgrade Fails

Rollback procedure:

```bash
# Stop web server
sudo systemctl stop apache2

# Restore previous Leantime version files
# (from your backup or re-download the previous release)

# Restore database
gunzip < pre_upgrade_YYYYMMDD.sql.gz | mysql -u leantime -p leantime

# Restore config and files
tar -xzvf pre_upgrade_files_YYYYMMDD.tar.gz -C /var/www/leantime/

# Clear cache and restart
php ./bin/leantime cache:clearAll
sudo systemctl start apache2
```

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
