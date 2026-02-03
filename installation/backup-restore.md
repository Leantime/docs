# Backup & Restore Guide

Regular backups are essential to protect your Leantime data. This guide covers what to backup, how to create backups, and how to restore.

## What to Backup

| Component | Location | Contains |
|-----------|----------|----------|
| **Database** | MySQL/MariaDB/PostgreSQL | Projects, tasks, users, comments, timesheets |
| **User Files** | `userfiles/` | Uploaded attachments, documents, images |
| **Configuration** | `config/.env` | Database credentials, SMTP, OIDC settings |
| **Custom Plugins** | `app/Plugins/` | Third-party or custom plugins |

## Database Backup

### MySQL/MariaDB

```bash
# Basic backup
mysqldump -u leantime -p leantime > leantime_backup_$(date +%Y%m%d).sql

# With compression
mysqldump -u leantime -p leantime | gzip > leantime_backup_$(date +%Y%m%d).sql.gz
```

### Docker

```bash
docker exec leantime_db mysqldump -u leantime -p'password' leantime > backup.sql

# Or with docker-compose
docker-compose exec db mysqldump -u leantime -p'password' leantime > backup.sql
```

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
    app/Plugins/
```

### Docker

```bash
docker cp leantime:/var/www/html/userfiles ./userfiles_backup
docker cp leantime:/var/www/html/app/Plugins ./plugins_backup
```

### Shared Hosting (cPanel)

1. Open **cPanel** → **File Manager**
2. Navigate to your Leantime directory
3. Select and compress these folders:
   - `userfiles/`
   - `config/` (contains `.env`)
   - `app/Plugins/` (if you have custom plugins)
4. Download the zip file

## Automated Backup Script

Save as `backup_leantime.sh`:

```bash
#!/bin/bash
BACKUP_DIR="/backups/leantime"
DATE=$(date +%Y%m%d)

mkdir -p "$BACKUP_DIR/$DATE"

# Database
mysqldump -u leantime -p'password' leantime | gzip > "$BACKUP_DIR/$DATE/db.sql.gz"

# Files
tar -czvf "$BACKUP_DIR/$DATE/files.tar.gz" config/.env userfiles/ app/Plugins/

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

# Docker
docker exec -i leantime_db mysql -u leantime -p'password' leantime < backup.sql
```

### Restore Files

```bash
# Extract backup
tar -xzvf files.tar.gz -C /var/www/leantime/

# Fix permissions
chown -R www-data:www-data /var/www/leantime/userfiles
chown -R www-data:www-data /var/www/leantime/app/Plugins
```

### Post-Restore

```bash
# Clear cache
php ./bin/leantime cache:clear

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
mysqldump -u leantime -p leantime | gzip > leantime_migration.sql.gz

# Files
tar -czvf leantime_files.tar.gz config/.env userfiles/ app/Plugins/
```

### Step 2: Install Leantime on New Server

Follow the standard [installation guide](/installation/quick-start.md) but **stop before the web installer**. You'll restore your existing database instead of creating a new one.

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
chown -R www-data:www-data /var/www/leantime/userfiles
```

### Step 5: Update Configuration

Edit `config/.env` and update any server-specific settings:
- `LEAN_APP_URL` - your new domain
- Database credentials if changed
- File paths if different

### Step 6: Verify

```bash
php ./bin/leantime db:migrate
php ./bin/leantime cache:clear
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
   mysqldump -u leantime -p leantime | gzip > pre_upgrade_$(date +%Y%m%d).sql.gz
   tar -czvf pre_upgrade_files_$(date +%Y%m%d).tar.gz config/.env userfiles/ app/Plugins/
   ```
3. **Note your current version** (found in Company Settings or `composer.json`)
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
php ./bin/leantime cache:clear
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

```sql
GRANT SELECT, LOCK TABLES ON leantime.* TO 'leantime'@'localhost';
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

Check that both `userfiles/` locations are restored:
- `userfiles/` (root directory)
- `public/userfiles/` (some versions)

## Getting Help

1. Check [Common Problems](/installation/common-issues.md)
2. Search [GitHub Issues](https://github.com/Leantime/leantime/issues)
3. Ask in [Discord](https://discord.gg/4zMzJtAq9z) #self-hosted
