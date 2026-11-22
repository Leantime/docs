---
title: "Using the Leantime CLI"
description: "Run Leantime admin tasks with php bin/leantime: add users, update the database, schedule jobs with cron, manage plugins and clear the cache, on Docker too."
head:
  - tag: title
    content: "Leantime CLI: bin/leantime commands for self-hosting"
---

Leantime has a command-line tool, `bin/leantime`, for running a self-hosted server: add users, update the database, run scheduled jobs, manage plugins and clear the cache. This page lists the commands you need and how to use them.

## How do I run a command?

Open a terminal on the server, go to your Leantime folder, and run the command with PHP, as the same user as your web server:

```bash
cd /var/www/leantime
sudo -u www-data php bin/leantime <command>
```

**Run it as the web server user** (`www-data`, `nginx` or `apache`, depending on your system). Commands write cache and log files, and files created by `root` can't be changed by the web server afterwards, which shows up as errors in the browser (see [Common issues](/installation/common-issues/)).

**On Docker,** run it inside the Leantime container. The official image already runs commands as `www-data` in the Leantime folder:

```bash
docker compose exec leantime php bin/leantime <command>
```

Use the name of the Leantime service in your `docker-compose.yml` if it isn't `leantime`.

To see every command, run `php bin/leantime list`. To see a command's options, run `php bin/leantime help <command>`.

## Which commands will I use most?

| Command | What it does |
| --- | --- |
| `user:add --email= --password= --role=` | Adds a user, for example a new Owner when you're locked out |
| `db:migrate` | Installs or updates the database |
| `schedule:run` | Runs Leantime's scheduled jobs (from cron, every minute) |
| `email:testemail --address=` | Sends a test email |
| `setting:save --key= --value=` | Saves a setting |
| `plugin:list`, `plugin:enable`, `plugin:disable` | Lists, switches on and switches off plugins |
| `cache:clearAll` | Clears all of Leantime's caches |

## How do I add a user from the command line?

```bash
php bin/leantime user:add --email=you@example.com --password='a-long-new-password' --role=owner
```

- **`--email`, `--password` and `--role` are required.** The roles are `readonly`, `commenter`, `editor`, `manager`, `admin` and `owner` (see [Roles](/using-leantime/user-management/#roles)).
- **Optional:** `--first-name=`, `--last-name=` and `--phone=`. `--client-id=` puts the user under a client; without it, the user goes to your first client.
- The user can sign in right away. Leantime doesn't send an invitation email.

There's no command to reset a password. If you're locked out, add a new Owner with `user:add`, or see [I'm locked out. How do I reset the admin password?](/installation/frequently-asked-questions/#im-locked-out-how-do-i-reset-the-admin-password)

To get an API token for an existing user, for a script or an integration, run `php bin/leantime auth:create-bearer-token --email=you@example.com`. The token is shown once. Add `--name=` to label it.

## How do I install or update the database?

```bash
php bin/leantime db:migrate
```

On a new server, this installs the database. It asks for the first user's email, password, name and company name, or takes them as `--email=`, `--password=`, `--first-name=`, `--last-name=` and `--company-name=`. On an existing server, it runs the database updates of a new Leantime version. `db:install` and `db:update` do the same.

Until the database is up to date, Leantime's scheduled jobs don't run.

## How do I update Leantime from the command line?

For an installation from the release download (not Docker):

```bash
sudo -u www-data php bin/leantime system:update
sudo -u www-data php bin/leantime db:migrate
```

`system:update` downloads the latest release from GitHub and copies it over your installation:

1. It lists any enabled plugins that don't support the new version, and asks whether to continue.
2. It backs up the database with `db:backup`, unless you add `--skipDbBackup`.
3. It switches off your plugins, copies in the new files, clears the caches and signs everyone out.
4. It switches your plugins back on, except the ones that don't support the new version.

It doesn't update the database itself, so run `db:migrate` afterwards. Make your own backup first (see below), and read the [Upgrade guide](/installation/upgrade-guide/). On Docker, update by pulling the new image instead.

## Can I back up the database with the CLI?

`php bin/leantime db:backup` saves the database to a `.sql` file in the folder set in `LEAN_DB_BACKUP_PATH`. It needs MySQL's `mysqldump` on the server. With the MariaDB version of `mysqldump`, which the official Docker image has, the file comes out empty. Check that the file isn't empty, or back up with `mysqldump` directly as described in [Backup and restore](/installation/backup-restore/). Uploaded files aren't part of it either way.

## How do I run Leantime's scheduled jobs?

Leantime sends notification emails, delivers webhooks, checks plugin licenses and updates, and sends [telemetry](/using-leantime/company-settings/#telemetry) through scheduled jobs. Run them from cron every minute, as the web server user:

```bash
* * * * * cd /var/www/leantime && php bin/leantime schedule:run >> /dev/null 2>&1
```

Add the line with `sudo crontab -u www-data -e`. Instead of cron, you can keep `php bin/leantime schedule:work` running as a service: it runs the jobs every minute by itself. The official Docker image already does this, so on Docker there's nothing to set up.

- **See the jobs and when they run next:** `php bin/leantime schedule:list`
- **Run one job now:** `php bin/leantime schedule:test --name=plugins:checkUpdates` (use a name from the list)

Without cron, the jobs only run while someone has Leantime open in their browser, so emails can be late. See [Cron jobs](/installation/configuration/#cron-jobs).

## How do I save a setting?

```bash
php bin/leantime setting:save --key=<key> --value=<value>
```

For example, other pages in these docs use it to show the login form again after hiding it (`--key=auth.hideDefaultLogin --value=off`). Clear the cache afterwards with `php bin/leantime cache:clearAll`, so the website sees the new value right away.

## How do I test email?

```bash
php bin/leantime email:testemail --address=you@example.com
```

Leantime sends the test right away and prints the conversation with your mail server. Read that output: the command doesn't report an error even when sending fails. See [Email configuration](/installation/email-configuration/).

## How do I manage plugins from the command line?

```bash
php bin/leantime plugin:list
php bin/leantime plugin:disable "<plugin name>"
php bin/leantime plugin:enable "<plugin name>"
```

- **Use the name exactly as `plugin:list` shows it,** in quotes, with the same capitals. It isn't always the folder name.
- **`plugin:enable`** doesn't switch on a plugin that doesn't support your Leantime version, or a marketplace plugin without a valid license.
- **`plugin:install "<plugin name>"`** registers a plugin you've already copied into `app/Plugins/`. It doesn't download anything; get marketplace plugins from **Company → Leantime Apps** (see [Installing plugins](/installation/plugin-installation/)).
- **`plugin:remove "<plugin name>"`** uninstalls a plugin, and some plugins delete their data when they're removed. To stop using one for now, disable it instead.
- **`plugin:verify <Folder>`** checks that the plugin in `app/Plugins/<Folder>` loads without errors. This one takes the folder name. Add `--json` for output a script can read.

These commands ask before they change anything. Add `-n` to skip the question, for example in a script.

`plugin:disable` is the way back in when a plugin stops Leantime from loading (see [How do I switch a plugin off when Leantime won't load?](/installation/plugin-licenses/#how-do-i-switch-a-plugin-off-when-leantime-wont-load)).

## How do I clear the cache?

```bash
cd /var/www/leantime
php bin/leantime cache:clearAll
```

`cache:clearAll` clears everything: saved settings, translations, compiled pages and the plugin lists. Run it from the Leantime folder, or part of it does nothing. After you change a language file, `php bin/leantime language:clear` clears only the translations.

`cache:clear` clears much less: it doesn't clear translations or the plugin lists. Use `cache:clearAll`.

## Which commands should I leave alone?

`bin/leantime` is built on Laravel, so `list` shows Laravel's own commands too. Some of them don't fit how Leantime works:

- **`migrate` and the other `migrate:` commands:** Leantime's database is updated with `db:migrate`, not these.
- **`config:cache` and `optimize`:** Leantime reads its configuration on every request, and these can freeze it or fail.
- **`down` and `up`:** they don't put Leantime into maintenance mode.
- **`files:cleanup`:** deletes uploaded files that nothing in the database points to. Run it with `--dry-run` first and read the list.

## What if something goes wrong?

- **"There are no commands defined in the "cron" namespace":** the command is `schedule:run`. Older docs said `cron:run`.
- **"The "--plugin" option does not exist":** put the plugin name after the command, in quotes: `plugin:disable "<plugin name>"`.
- **"Role is Invalid":** add `--role=` with one of the role names above.
- **The website shows errors after you ran a command:** the command probably ran as `root` and left files the web server can't write. Give the files back to the web server user, for example `sudo chown -R www-data:www-data storage bootstrap/cache`.
- **A setting you saved doesn't show in the browser:** run `php bin/leantime cache:clearAll`. If `LEAN_APP_URL` isn't set in your `.env` file, set it, so the command line and the website use the same cache.

## Related

- [Configuration](/installation/configuration/)
- [Upgrade guide](/installation/upgrade-guide/)
- [Backup and restore](/installation/backup-restore/)
- [Installing plugins](/installation/plugin-installation/)
- [Connect to the API](/api/usage/)
