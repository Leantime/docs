# Upgrading Leantime

This guide covers how to safely upgrade Leantime across all deployment types, with version-specific notes for known issues.

## Before You Upgrade

**Always backup first.** See the [Backup & Restore Guide](/installation/backup-restore.md) for detailed instructions.

### Pre-Upgrade Checklist

1. **Check release notes** at [github.com/Leantime/leantime/releases](https://github.com/Leantime/leantime/releases) for breaking changes
2. **Backup your database and files:**
   ```bash
   mysqldump -u leantime -p leantime | gzip > pre_upgrade_$(date +%Y%m%d).sql.gz
   tar -czvf pre_upgrade_files.tar.gz config/.env userfiles/ app/Plugins/
   ```
3. **Note your current version** (found in Company Settings → Account or `composer.json`)
4. **Disable all plugins** via Settings → Plugins before major version upgrades
5. **Check PHP version** — Leantime 3.6+ requires PHP 8.1+, earlier 3.x versions require PHP 8.0+

## Upgrade Methods

### Docker

Docker upgrades are the simplest approach.

**Using docker-compose (recommended):**

```bash
cd /path/to/leantime

# Pull latest image
docker-compose pull

# Recreate containers
docker-compose up -d

# Run migrations (usually automatic, but run if prompted)
docker exec -it leantime php ./bin/leantime db:migrate
```

**Using docker run:**

```bash
# Pull latest image
docker pull leantime/leantime:latest

# Stop and remove old container
docker stop leantime
docker rm leantime

# Start new container with same volumes
docker run -d --name leantime \
  -v leantime_userfiles:/var/www/html/userfiles \
  -v leantime_plugins:/var/www/html/app/Plugins \
  --env-file .env \
  leantime/leantime:latest
```

After the container starts, Leantime will automatically run database migrations on first access.

### Package Installation (Apache/Nginx)

1. **Download the new release:**
   ```bash
   cd /tmp
   wget https://github.com/Leantime/leantime/releases/latest/download/Leantime-v3.x.x.zip
   unzip Leantime-v3.x.x.zip
   ```

2. **Stop the web server:**
   ```bash
   sudo systemctl stop apache2  # or nginx
   ```

3. **Replace application files:**
   ```bash
   # Backup current installation
   sudo mv /var/www/leantime /var/www/leantime.old
   
   # Move new version into place
   sudo mv /tmp/leantime /var/www/leantime
   
   # Restore your config and files
   sudo cp /var/www/leantime.old/config/.env /var/www/leantime/config/
   sudo cp -r /var/www/leantime.old/userfiles/* /var/www/leantime/userfiles/
   sudo cp -r /var/www/leantime.old/app/Plugins/* /var/www/leantime/app/Plugins/
   ```

4. **Fix permissions:**
   ```bash
   sudo chown -R www-data:www-data /var/www/leantime
   sudo chmod -R 755 /var/www/leantime
   sudo chmod -R 775 /var/www/leantime/userfiles
   sudo chmod -R 775 /var/www/leantime/storage
   ```

5. **Run migrations and clear cache:**
   ```bash
   cd /var/www/leantime
   php ./bin/leantime db:migrate
   php ./bin/leantime cache:clear
   ```

6. **Restart the web server:**
   ```bash
   sudo systemctl start apache2
   ```

### CLI Update Command

Leantime includes a built-in update command:

```bash
cd /var/www/leantime
sudo -u www-data php ./bin/leantime system:update
```

This downloads and applies the latest version automatically. Always run as the web server user to avoid permission issues.

### Shared Hosting (FTP/cPanel)

1. **Download the release** from [github.com/Leantime/leantime/releases](https://github.com/Leantime/leantime/releases)
2. **Extract locally** on your computer
3. **Backup via cPanel:**
   - Export database through phpMyAdmin
   - Download `config/.env`, `userfiles/`, and `app/Plugins/` via File Manager
4. **Upload new files** via FTP or File Manager, replacing all existing files
5. **Restore your config:** Upload your backed-up `.env` file to `config/`
6. **Visit your site** — Leantime will prompt you to run database updates

**Important:** If you've customized `.htaccess`, back it up and restore it after uploading.

## Version-Specific Notes

### Upgrading to 3.6.x

**Important:** Skip v3.6.0 and v3.6.1 — upgrade directly to **v3.6.2 or later**.

Known issues in 3.6.0/3.6.1:
- Database update redirect loops
- Missing JavaScript assets causing loading failures
- Error 500 when opening projects

All fixed in v3.6.2.

**Requirements:** PHP 8.1+ is required for Leantime 3.6 and later.

### Upgrading to 3.2.x

Version 3.2 introduced major changes to session management and plugin handling.

**Required steps:**

1. **Disable ALL plugins** before upgrading
2. **Clear the `app/Plugins/` folder** if you encounter errors
3. **Ensure the `storage/framework/sessions/` folder exists** and is writable:
   ```bash
   mkdir -p /var/www/leantime/storage/framework/sessions
   chown -R www-data:www-data /var/www/leantime/storage
   chmod -R 775 /var/www/leantime/storage
   ```
4. Re-install plugins from the marketplace after upgrade

**Common issues:**

- **Can't login after upgrade:** Session folder missing or has wrong permissions. Create `storage/framework/sessions/` and set permissions.
- **HTTP 500 errors:** Clear cache with `php ./bin/leantime cache:clear` or manually delete contents of `cache/` folder.
- **Plugin errors:** Remove all files from `app/Plugins/` and reinstall plugins fresh.

### Upgrading to 3.3.x

Version 3.3 rebuilt the cache system and continued Laravel/Symfony migration.

**Notes:**
- Check custom plugin event listeners against the latest documentation
- Clear cache after upgrade: `php ./bin/leantime cache:clear`
- Session configuration now uses environment files — check your `.env` settings

### Upgrading from 2.x to 3.x

Major version upgrades require extra care.

1. **Backup everything** — database, userfiles, plugins, config
2. **Disable all plugins** in 2.x before upgrading
3. **Do a full file replacement** — don't merge files
4. **Clear all caches:**
   ```bash
   rm -rf cache/*
   rm -rf cache/avatars/*
   rm -rf cache/views/*
   ```
5. **Run database migrations:**
   ```bash
   php ./bin/leantime db:migrate
   ```
6. **Check folder capitalization** — 3.x uses PSR-4 naming (Plugins, Custom, Core, Domain are capitalized)

**Note:** Configuration moved from `config/configuration.php` to `config/.env` in newer versions. If upgrading from a very old version, you'll need to migrate your settings to the `.env` format.

### Upgrading from very old versions (2.1.x or earlier)

For upgrades spanning multiple major versions:

1. Consider a **fresh install** with database migration rather than in-place upgrade
2. Export your database from the old version
3. Install the latest Leantime fresh
4. Import your database
5. Run `php ./bin/leantime db:migrate` — this will apply all intermediate migrations
6. Copy your `userfiles/` directory

## Post-Upgrade Verification

After any upgrade:

1. **Check version** in Settings → About
2. **Log in** and verify your credentials work
3. **Check projects and tasks** appear correctly
4. **Test file uploads** — try uploading and viewing an attachment
5. **Verify OIDC/LDAP** if configured
6. **Verify plugins** are working if you use any
7. **Check the logs** at `storage/logs/leantime-*.log` for errors

## Troubleshooting

### Database Update Redirect Loop

**Symptom:** Redirected to `/install/update`, clicking button just refreshes the page.

**Solutions:**
1. Upgrade to v3.6.2+ (this was fixed)
2. Run migration manually: `php ./bin/leantime db:migrate`

### Can't connect to database after upgrade

Your `.env` file may have been overwritten or the format changed.

1. Check that `config/.env` exists and contains your database credentials
2. Verify the format matches the current version's expectations
3. Test database connection: `mysql -u leantime -p leantime`

### Login doesn't work after upgrade

Usually a session issue:

```bash
# Create session directory
mkdir -p storage/framework/sessions

# Fix permissions
chown -R www-data:www-data storage
chmod -R 775 storage

# Clear cache
php ./bin/leantime cache:clear
```

### HTTP 500 Internal Server Error

Check the logs first:

```bash
# Docker
docker logs leantime

# Package install
tail -50 storage/logs/leantime-$(date +%Y-%m-%d).log
```

Common causes:
- PHP version mismatch (need 8.1+ for 3.6+)
- Missing PHP extensions
- Missing session folder
- Permission issues on `storage/` or `cache/`
- Plugin conflicts — try removing `app/Plugins/` contents

### Loading Screen Stuck

**Symptom:** Spinner shows forever, page never loads.

**Solutions:**
1. Upgrade to v3.6.2+ (fixes missing JS assets)
2. Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
3. Clear browser cache

### Styles look broken (no CSS)

Usually a cache issue:

```bash
php ./bin/leantime cache:clear
```

Or manually clear browser cache. If using a CDN, purge the CDN cache.

### Plugin conflicts after upgrade

```bash
# Remove all plugins
rm -rf app/Plugins/*

# Clear cache
php ./bin/leantime cache:clear
```

Then reinstall plugins one at a time from the marketplace.

### Database migration fails

If migration stops partway:

```bash
# Check current database version
php ./bin/leantime db:status

# Retry migration
php ./bin/leantime db:migrate
```

If still failing, check the specific error in logs and search [GitHub Issues](https://github.com/Leantime/leantime/issues).

## Rolling Back

If an upgrade fails and you need to restore:

1. **Stop web server:**
   ```bash
   sudo systemctl stop apache2
   ```

2. **Restore database:**
   ```bash
   gunzip < pre_upgrade_YYYYMMDD.sql.gz | mysql -u leantime -p leantime
   ```

3. **Restore files:**
   ```bash
   sudo rm -rf /var/www/leantime
   sudo mv /var/www/leantime.old /var/www/leantime
   # Or extract from your backup
   ```

4. **For Docker**, change image version in docker-compose.yml:
   ```yaml
   image: leantime/leantime:3.5.0  # previous version
   ```
   Then run `docker-compose up -d`

5. **Start web server:**
   ```bash
   sudo systemctl start apache2
   ```

## Getting Help

1. Check [Common Problems](/installation/common-issues.md)
2. Search [GitHub Issues](https://github.com/Leantime/leantime/issues)
3. Ask in [Discord](https://discord.gg/4zMzJtAq9z) #self-hosted
4. Post on the [Community Forum](https://community.leantime.io)
