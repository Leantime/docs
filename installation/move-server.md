# Move Leantime to a new server

Moving Leantime means copying three things to the new server: the **database**, the **uploaded files and plugins**, and your **settings**. Then you start the same Leantime version there and point your domain at it.

**At a glance**

- **Time:** 30 to 60 minutes, plus copying time for large file folders
- **Level:** Some experience
- **You need:** terminal access to both servers, and a time when nobody uses Leantime (changes made during the move are lost)
- **At the end:** Leantime running on the new server with all projects, to-dos, files, users and plugins

## Before you start

- **Use the same Leantime version on both servers.** Move first, upgrade afterwards. In Docker, set `LEAN_VERSION` in `.env` to the version you run now (for example `LEAN_VERSION=3.14.0`).
- **Keep the old server** untouched until you've checked the new one.
- **Tell your team** when Leantime will be unavailable.

## Move a Docker installation

These commands assume the official `docker-compose.yml`, where the database service is called `leantime_db`. Run them in the folder that holds `docker-compose.yml`.

### On the old server

1. **Stop Leantime**, but keep the database running:

   ```bash
   docker compose stop leantime
   ```

2. **Export the database:**

   ```bash
   docker compose exec -T leantime_db sh -c 'exec mysqldump --no-tablespaces --single-transaction -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE"' > leantime.sql
   ```

   The file ends with `-- Dump completed on …` when it's complete.

3. **Archive the file volumes.** Find their names with `docker volume ls`; they start with your folder name, like `docker-leantime_userfiles`. For each of `userfiles`, `public_userfiles` and `plugins`:

   ```bash
   docker run --rm -v docker-leantime_userfiles:/data -v "$PWD":/backup alpine \
     tar czf /backup/userfiles.tar.gz -C /data .
   ```

4. **Copy everything to the new server:** `leantime.sql`, the three `.tar.gz` files, `.env` and `docker-compose.yml`. For example:

   ```bash
   scp leantime.sql *.tar.gz .env docker-compose.yml you@new-server:~/docker-leantime/
   ```

### On the new server

1. **Create the containers and volumes** without starting Leantime, and start the database:

   ```bash
   cd ~/docker-leantime
   docker compose up -d leantime_db
   docker compose create leantime
   ```

   Wait until `docker compose ps` shows the database as `healthy`.

2. **Import the database:**

   ```bash
   docker compose exec -T leantime_db sh -c 'exec mysql -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE"' < leantime.sql
   ```

3. **Restore the file volumes**, one per archive (check the names with `docker volume ls`):

   ```bash
   docker run --rm -v docker-leantime_userfiles:/data -v "$PWD":/backup alpine \
     tar xzf /backup/userfiles.tar.gz -C /data
   ```

4. **Start Leantime:**

   ```bash
   docker compose up -d
   ```

5. **Point your domain at the new server** (DNS), and set up your reverse proxy and HTTPS there. If Leantime's address changes, update `LEAN_APP_URL` in `.env` and run `docker compose up -d` again.

## Move a package installation

### On the old server

1. **Export the database:**

   ```bash
   mysqldump --no-tablespaces --single-transaction -u <db user> -p <db name> > leantime.sql
   ```

2. **Copy these from the Leantime folder:**
   - `config/.env`: your settings
   - `userfiles/`: uploaded files
   - `public/userfiles/`: logo and public images
   - `app/Plugins/`: installed plugins

### On the new server

1. **Install the same Leantime version** from its release package, as in [Install from the release package](installation/package-installation.md), but **don't run the installer**.
2. **Create an empty database and user**, then import:

   ```bash
   mysql -u <db user> -p <db name> < leantime.sql
   ```

3. **Put the copied folders and `config/.env` back** in the same places. Update the database settings in `.env` if they changed.
4. **Make the folders writable** by the web server user (often `www-data`): `storage/`, `userfiles/`, `public/userfiles/` and `app/Plugins/`.
5. **Point your domain at the new server**, and update `LEAN_APP_URL` if the address changes.

> **Tip:** Moving from a package install to Docker works the same way: import `leantime.sql` into the Docker database, and copy the file folders into the `userfiles`, `public_userfiles` and `plugins` volumes.

## How do I check that everything moved?

- Log in with your usual account.
- Open a to-do with an attachment and open the file.
- Check that your logo shows in the header.
- Open **My Apps** and check your plugins are installed and enabled.
- Check that emails still arrive, for example with a password reset or a comment notification.

When all of that works, you can shut down the old server. Keep `leantime.sql` and the archives as a backup.

## Something's wrong after the move

- **You can't log in:** check `LEAN_APP_URL` and `LEAN_SESSION_SECURE` against the new address. See [Common issues](installation/common-issues.md).
- **Attachments or the logo are missing:** a file volume or folder wasn't restored, or isn't writable.
- **"Update Database" appears:** the new server runs a newer Leantime version than the old one. Back up, then click **Update Now!** to continue with that version.

## Can I move to Leantime Cloud instead?

Yes. We can migrate a self-hosted instance to [Leantime Cloud](https://leantime.io/pricing/) for a small fee. Ask through the chat on [leantime.io](https://leantime.io/).

## Related

- [Backup and restore](installation/backup-restore.md)
- [Upgrade guide](installation/upgrade-guide.md)
- [Import from Jira, Trello, Asana or a spreadsheet](using-leantime/import-csv.md)
