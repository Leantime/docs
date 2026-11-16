# Shared hosting (cPanel)

You can run Leantime on most shared hosting plans that come with cPanel, like those from Hostinger, GoDaddy or Bluehost. You don't need a command line: everything below happens in cPanel and its File Manager.

Before you start, check with your host that the plan has:

- **PHP 8.2 or later**, with the extensions on [System requirements](installation/system-requirements.md)
- **MySQL 8.0+ or MariaDB 10.6+**
- **A domain or subdomain** you can point at a folder of your choice
- **Cron jobs**, for reminders and notification emails

## Step 1: Check PHP

1. In cPanel, open **Select PHP Version** (or **MultiPHP Manager**, depending on your host).
2. Choose **PHP 8.2** or later.
3. On the same page, check that the extensions on [System requirements](installation/system-requirements.md#which-php-extensions-does-leantime-need) are ticked.

## Step 2: Create the database

1. Open **MySQL Databases** (or **MySQL Database Wizard**).
2. **Create a database,** for example `leantime`.
3. **Create a user** with a strong password. Use the password generator.
4. **Add the user to the database** with **ALL PRIVILEGES**.

Write down the database name, the user name and the password. cPanel puts your account name in front of both names, for example `myaccount_leantime`: use the full names in step 5.

## Step 3: Upload Leantime

1. Download the `.zip` file of the [latest release](https://github.com/Leantime/leantime/releases/latest) to your computer, for example `Leantime-v3.15.3.zip`.
2. In cPanel, open **File Manager** and go to your home folder: the one that holds `public_html`, not `public_html` itself.
3. **Create a folder** called `leantime`, open it, and **Upload** the zip file.
4. **Extract** the zip in that folder, then delete the zip.

Leantime's folder has a `public` folder inside it. Only `public` should be reachable from the web: your settings and uploaded files stay outside it. That's why Leantime doesn't go into `public_html`.

## Step 4: Point a domain at Leantime

1. Open **Domains** (or **Subdomains** on older cPanel versions) and create a subdomain, for example `projects.example.com`.
2. Set its **document root** to `leantime/public`.

If your host won't let you choose the document root, ask their support to point the subdomain at `leantime/public` for you. A [subfolder install](installation/subfolder.md) is the other option, but it needs changes to the web server's settings that only your host can make. Don't move the whole `leantime` folder into `public_html` to get around this: your settings and uploaded files would be reachable from the web.

## Step 5: Add your settings

1. In **File Manager**, open `leantime/config`. Switch on **Show Hidden Files** in File Manager's **Settings**, so you can see files that start with a dot.
2. **Copy** `sample.env` to a new file called `.env`, and open `.env` with **Edit**.
3. **Fill in these lines:**

```
LEAN_APP_URL = 'https://projects.example.com'
LEAN_DB_HOST = 'localhost'
LEAN_DB_USER = 'myaccount_leantime'
LEAN_DB_PASSWORD = 'the password from step 2'
LEAN_DB_DATABASE = 'myaccount_leantime'
LEAN_SESSION_PASSWORD = 'a long random string'
```

4. **Optional:** set `LEAN_DEFAULT_TIMEZONE`, like `'Europe/Berlin'`, and `LEAN_LANGUAGE`.
5. **Save** the file.

All settings are explained on [Configuration](installation/configuration.md).

## Step 6: Run the installer

1. Open `https://projects.example.com/install` in your browser.
2. Fill in your company name and your admin account, and click **Install**.
3. Sign in, and Leantime walks you through your first project.

## Step 7: Set up the cron job

Leantime needs a cron job to send reminders and notification emails.

1. In cPanel, open **Cron Jobs**.
2. Choose **Once Per Five Minutes**.
3. Enter this command, with your cPanel user name in the path:

```
cd /home/YOUR_CPANEL_USER/leantime && php ./bin/leantime schedule:run >/dev/null 2>&1
```

If the cron job's `php` is older than 8.2, ask your host for the path to PHP 8.2 for cron jobs and use that instead of `php`. If your plan has no cron jobs, call `https://projects.example.com/cron/run` from an external scheduler instead (see [Cron jobs](installation/configuration.md#cron-jobs)).

## Step 8: Set up email

Leantime sends invitations and notifications by email, so set this up before you invite your team. Many shared hosts limit outgoing email; see [Email configuration](installation/email-configuration.md#shared-hosting-notes) for what works.

## What if something goes wrong?

- **A blank page, or "page not found" on everything but the start page:** the `public/.htaccess` file is missing, or Apache's rewrite module is off. Check that `.htaccess` is in `leantime/public` (with hidden files shown). Some hosts also need `RewriteBase /` in it (see [Common issues](installation/common-issues.md)).
- **Errors about PHP or extensions:** the website runs a different PHP version than you set, or an extension is missing. Check **Select PHP Version** again.
- **It can't connect to the database:** check the full names with your account prefix. If `localhost` doesn't work, try `127.0.0.1`.
- **Uploads or logins fail:** Leantime must be able to write to `storage/`, `bootstrap/cache/`, `userfiles/` and `public/userfiles/`. Folders set to `755` usually work on cPanel.
- **Anything else:** look in `leantime/storage/logs/` for the error, and see [Common issues](installation/common-issues.md). When you ask for help in the [community chat](https://discord.gg/4zMzJtAq9z), include the log lines.

## How do I update Leantime later?

See the [Upgrade guide](installation/upgrade-guide.md). Back up your database and the `leantime` folder first (see [Backup & Restore](installation/backup-restore.md), which has steps for cPanel).

## Related

- [System requirements](installation/system-requirements.md)
- [Package based installation](installation/package-installation.md): the same steps on your own server
- [Plugins](installation/using-plugins.md)
