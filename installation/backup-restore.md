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

## Best Practices

- **3-2-1 Rule**: 3 copies, 2 media types, 1 offsite
- - **Test restores regularly**
  - - **Encrypt backups** with sensitive data
    - - **Monitor backup jobs** for failures
     
      - ## Offsite Backup
     
      - ```bash
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

        ## Getting Help

        1. Check [Common Problems](/installation/common-issues.md)
        2. 2. Search [GitHub Issues](https://github.com/Leantime/leantime/issues)
           3. 3. Ask in [Discord](https://discord.gg/4zMzJtAq9z) #self-hosted
