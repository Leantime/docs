---
title: "Frequently asked questions"
description: "Short answers for people who run their own Leantime: requirements, Docker, SMTP, roles, LDAP and OIDC, updates, logs and resetting the admin password."
head:
  - tag: title
    content: "Self-hosted Leantime FAQ: install, email, SSO and upgrades"
---

This FAQ document addresses common questions and issues gathered from GitHub issues, discussions, and community feedback.

---

## Installation & Setup

### What are the system requirements for Leantime?

Leantime 3.2 and later require:
- PHP 8.2 or higher
- MySQL 8.0+, MariaDB 10.6+, or PostgreSQL (since Leantime 3.7)
- Web server (Apache, Nginx, or IIS)
- Minimum 512MB RAM (1GB recommended)

For Docker installations, you need Docker and Docker Compose installed. See [System Requirements](/installation/system-requirements/) for the PHP extensions and database settings.

### How do I install Leantime with Docker?

The recommended method is using Docker Compose:

```bash
git clone https://github.com/Leantime/docker-leantime.git
cd docker-leantime
docker-compose up -d
```

Then access Leantime at `http://localhost:8080` and complete the installation wizard.

### Why does my Docker container show "unhealthy" status?

Usually because something still expects the old port. Since Leantime 3.4 the container listens on port 8080, so port mappings, reverse proxies and any health check you added yourself must use 8080 (for example `http://localhost:8080/health`). Old volumes owned by root can also stop the container from starting. See [Docker troubleshooting](/installation/docker-troubleshooting/#the-container-is-unhealthy-or-nginx-keeps-restarting).

### What installation methods does Leantime officially support?

Leantime officially supports:
- Docker Compose installations
- Standard PHP installations

**Note:** Cloudron, Elestio, Turnkey, Coolify and other platforms that install Leantime from their own templates are not officially supported: support comes from each platform. See [One-click installs](/installation/one-click-installs/) for what to check after installing from one.

### How do I set the correct file permissions?

For Docker installations, run:

```bash
docker exec -it leantime chown -R www-data:www-data /var/www/html/userfiles \
  /var/www/html/public/userfiles \
  /var/www/html/storage/logs \
  /var/www/html/app/Plugins

docker exec -it leantime chmod -R 775 /var/www/html/userfiles \
  /var/www/html/public/userfiles \
  /var/www/html/storage/logs \
  /var/www/html/app/Plugins
```

---

## Email & SMTP Configuration

### Why aren't emails being sent from Leantime?

Email issues are the most common support request. Check these settings in your `.env` or `docker-compose.yml`:

```env
LEAN_EMAIL_RETURN='your-email@domain.com'
LEAN_EMAIL_USE_SMTP=true
LEAN_EMAIL_SMTP_HOSTS='smtp.yourprovider.com'
LEAN_EMAIL_SMTP_AUTH=true
LEAN_EMAIL_SMTP_USERNAME='your-username'
LEAN_EMAIL_SMTP_PASSWORD='your-password'
LEAN_EMAIL_SMTP_AUTO_TLS=true
LEAN_EMAIL_SMTP_SECURE='TLS'
LEAN_EMAIL_SMTP_PORT='587'
```

### What are the common SMTP configuration mistakes?

1. **Wrong port:** Use 587 for TLS, 465 for SSL, 25 for unencrypted
2. **Missing authentication:** Set `LEAN_EMAIL_SMTP_AUTH=true` if your server requires it
3. **Incorrect security protocol:** Match `LEAN_EMAIL_SMTP_SECURE` to your server's requirements (TLS, SSL, or STARTTLS)
4. **Firewall blocking:** Ensure the SMTP port is open in your firewall

### How do I configure Office 365 SMTP?

```env
LEAN_EMAIL_SMTP_HOSTS='smtp.office365.com'
LEAN_EMAIL_SMTP_PORT='587'
LEAN_EMAIL_SMTP_SECURE='STARTTLS'
LEAN_EMAIL_SMTP_AUTO_TLS=true
LEAN_EMAIL_SMTP_AUTH=true
```

### How do I configure Gmail SMTP?

```env
LEAN_EMAIL_SMTP_HOSTS='smtp.gmail.com'
LEAN_EMAIL_SMTP_PORT='587'
LEAN_EMAIL_SMTP_SECURE='TLS'
LEAN_EMAIL_SMTP_AUTH=true
LEAN_EMAIL_SMTP_USERNAME='your-email@gmail.com'
LEAN_EMAIL_SMTP_PASSWORD='your-app-password'
```

**Note:** Gmail requires an App Password if 2FA is enabled.

### How do I test if SMTP is working?

1. Enable debug mode by setting `LEAN_DEBUG=true`
2. Try sending a password reset email
3. Check the logs at `/var/www/html/storage/logs/error.log` (or the logs volume in Docker)

---

## User Management & Permissions

### What user roles are available in Leantime?

Leantime has six roles with decreasing permission levels:

| Role | Description |
|------|-------------|
| **Owner** | Full access to all features, users, and settings |
| **Admin** | Full access except cannot delete owners |
| **Company Manager** | Can manage projects and tasks, but cannot manage users or company settings |
| **Editor** | Can create, edit, and delete tasks, milestones, and project content |
| **Commenter** | Can view and comment on items, upload files, but cannot edit |
| **Read-Only** | Can only view project content |

### Can I set different permissions per project?

Yes. Users can have different roles on different projects. When adding a user to a project, you can set their project-specific role. The "Inherit" option uses their company-level role.

**Note:** Owner and Admin roles cannot be overridden by project-level permissions.

### How do I add a new user?

1. Click the company icon in the top-right corner
2. Select **User Management**
3. Click **Add User**
4. Enter their name, email, and select a role
5. Assign them to projects

The user will receive an email invitation to set their password.

### Why can't my user see certain projects?

Users only see projects they're assigned to. To give access:
1. Go to **User Management**
2. Click the user's name
3. Use the project assignment arrows to move projects to the "Assigned" column

### Why is the Commenter role unable to comment?

This is a known bug in some versions. Ensure you're running the latest version of Leantime. If the issue persists, check your project-level permissions for that user.

---

## Authentication (LDAP, OIDC, SSO)

### Does Leantime support Single Sign-On?

Yes, Leantime supports:
- **LDAP** (OpenLDAP and Active Directory)
- **OIDC** (OpenID Connect) - works with Keycloak, Authentik, etc.
- **Google SSO**

These features may require the Advanced Authentication plugin for some configurations.

### How do I configure LDAP?

Add these variables to your `.env` file:

```env
LEAN_LDAP_USE_LDAP=true
LEAN_LDAP_LDAP_TYPE='OL'  # 'OL' for OpenLDAP, 'AD' for Active Directory
LEAN_LDAP_HOST='ldap.example.com'
LEAN_LDAP_PORT=389
LEAN_LDAP_DN='ou=Users,dc=example,dc=com'
LEAN_LDAP_KEYS='{"username":"uid","groups":"memberOf","email":"mail","firstname":"givenName","lastname":"sn"}'
LEAN_LDAP_DEFAULT_ROLE_KEY=5  # Default role for new LDAP users
```

### Why isn't LDAP authentication working?

Common issues:
1. **Wrong LDAP type:** Use 'AD' for Active Directory, 'OL' for OpenLDAP
2. **Incorrect DN:** Verify your base DN matches your directory structure
3. **Missing key mappings:** Ensure `LEAN_LDAP_KEYS` maps to your directory's attribute names
4. **Port blocked:** Check that port 389 (or 636 for LDAPS) is accessible

### How do I configure OIDC?

```env
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL='https://your-provider.com'
LEAN_OIDC_CLIENT_ID='your-client-id'
LEAN_OIDC_CLIENT_SECRET='your-client-secret'
```

For a basic Keycloak or Authentik connection, only the provider URL, client ID, and client secret are required.

### Can I disable local login and only use SSO?

Not directly, but you can set `LEAN_OIDC_CREATE_USER=true` to auto-create users on first OIDC login, reducing the need for local accounts.

---

## Tasks, Milestones & Project Management

### What's the difference between a task and a subtask?

- **Tasks (To-Dos):** Primary work items that appear on the [Kanban](/knowledge-base/kanban/) board and can have time tracked
- **Subtasks:** Child items under a parent task; they have their own status but roll up to the parent

Subtasks appear with a subtask identifier on the Kanban board and their completion contributes to the parent task's progress.

### What's the difference between a milestone and a goal?

- **Milestones:** Groups of tasks bundled together with a date range, displayed on the Timeline/Gantt chart
- **Goals:** OKR-style objectives with measurable metrics (start value, current value, target value)

Goals track outcomes; [milestones](/using-leantime/roadmap-planning/) track delivery timelines.

### How do I view tasks on a Gantt chart?

Tasks must be assigned to a milestone to appear on the Timeline view:
1. Create a milestone with start and end dates
2. Assign tasks to that milestone
3. Navigate to **Timeline** to see the Gantt chart

### Can I log time against subtasks?

In [timesheets](/using-leantime/timesheets/), you select the parent task. Time logged rolls up to the parent task's total hours.

### How do I filter tasks by multiple criteria?

On the Kanban or Table view:
1. Click the filter icon
2. Select filters for: User, Milestone, Type, Priority
3. Use the search box for text-based filtering

### How do I move a task to a different project?

1. Open the task
2. Click the three dots (⋮) menu
3. Select **Move To-Do**
4. Choose the destination project

### Can I have multiple Kanban boards per project?

Not directly. Each project has one set of task statuses. However, you can use milestones to organize work into logical groupings and filter by milestone.

---

## Timesheets & Time Tracking

### How do I track time on a task?

Three methods:
1. **Start Work button:** Click the three dots on a task and select "Start Work" to begin a timer
2. **Manual entry:** Go to **My Timesheet** and add entries directly
3. **Timer bar:** Use the timer that appears at the top of the screen

### Why doesn't my timesheet show all projects?

Users only see timesheets for projects they're assigned to. Admins and Owners can view timesheets across all projects via **Company → Timesheets**.

### Can I export timesheet data?

Yes. Navigate to the timesheet view and use the export function to download CSV files.

### Why are closed projects still showing in timesheets?

This was a bug in some versions. Update to the latest version where this has been fixed.

---

## Calendar & Integrations

### How do I integrate Leantime with my calendar?

Each person can subscribe to their Leantime calendar from Google Calendar, Outlook or Apple Calendar with an iCal link. See [How do I see my Leantime calendar in Google, Outlook or Apple Calendar?](/using-leantime/calendars/#how-do-i-see-my-leantime-calendar-in-google-outlook-or-apple-calendar)

### What appears on the calendar?

- Tasks with due dates
- Tasks with scheduled work times (editFrom/editTo)
- Milestones with dates
- Calendar events created in Leantime

### Does Leantime support Google Calendar or Outlook sync?

Direct two-way sync requires the CalDAV plugin. The basic iCal export is one-way (Leantime → external calendar).

### Can I schedule tasks on my calendar?

Yes. Edit a task and set the "editFrom" and "editTo" dates. This schedules when you plan to work on the task, separate from the due date.

---

## Plugins & Customization

### Where are plugins installed?

Plugins are located in `/var/www/html/app/Plugins/` (or the corresponding Docker volume).

### How do I install a plugin?

1. Download the plugin ZIP file
2. Extract to the Plugins directory
3. Log out and back in
4. The plugin should appear in **Company Settings → Plugins**
5. Enable the plugin

For Docker, copy files to the plugins volume and restart the container.

### What plugins are available?

Core plugins include: Custom Fields, Notes, Pomodoro Timer, Recurring Tasks, Whiteboards, Strategy Pro, PgmPro (Programs & Portfolios), CalDAV, Copilot (AI), and more.

Visit the Leantime Marketplace for the full list.

### How do I customize the theme colors?

Set these in your `.env` file:

```env
LEAN_PRIMARY_COLOR='#1b75bb'
LEAN_SECONDARY_COLOR='#81B1A8'
LEAN_LOGO_PATH='/dist/images/logo.svg'
```

Each person can then choose them as **Company Colors** under **My Profile → Theme** (see [How do I change how Leantime looks?](/using-leantime/account-settings/#how-do-i-change-how-leantime-looks)).

---

## Updating & Upgrading

### How do I update Leantime?

Back up first, then:

- **Docker:** run `docker compose pull`, then `docker compose up -d`.
- **Release package:** run `php bin/leantime system:update` as the web server user, or replace the files by hand.

Then open Leantime and select **Update Now!** if it asks to update the database. For every step, see the [Upgrade guide](/installation/upgrade-guide/).

### Will updating delete my data?

No. Your projects, files and settings stay, as long as they're stored outside the files you replace (in Docker: in volumes). Always [back up](/installation/backup-restore/) before updating.

**Docker users:** Make sure your database container uses a volume, not storage inside the container.

### How do I know if there's a database update?

After the new files are in place, Leantime sends everyone to its **Update Database** page (`/install/update`) until someone selects **Update Now!** You can also run `php bin/leantime db:migrate`.

### Can I roll back to a previous version?

Yes, if you made a backup. Put the old files back and restore the database backup from before the upgrade. The old version can't use a database that the new version changed. See [How do I go back to the old version?](/installation/upgrade-guide/#how-do-i-go-back-to-the-old-version)

---

## Troubleshooting

### Where are the log files?

- **Standard installation:** `/var/www/html/storage/logs/error.log`
- **Docker:** Check the logs volume or run `docker logs leantime`

### How do I enable debug mode?

Set `LEAN_DEBUG=true` in your `.env` file. This provides more detailed error messages and logging.

**Warning:** Disable debug mode in production as it exposes sensitive information.

### Why do I get a blank page after changing settings?

This often indicates a PHP error:
1. Check your error logs
2. Verify syntax in your `.env` or configuration file
3. Ensure all required PHP extensions are installed

Common cause: Enabling SMTP without correct configuration.

### Why can't I access Leantime behind a reverse proxy?

Set `LEAN_APP_URL` to the exact address people open, and make sure the proxy passes the `X-Forwarded-Proto` and `X-Forwarded-Host` headers. If that address starts with `https://`, also set `LEAN_SESSION_SECURE = true`. Over plain `http://`, leave it off, or nobody can log in. Configurations for nginx, Apache, Caddy, Traefik and Cloudflare are in [Run Leantime behind a reverse proxy](/installation/reverse-proxy/).

### I'm locked out. How do I reset the admin password?

**If email works,** click **Forgot password** on the sign-in page. Leantime emails a link to set a new password.

**If email doesn't work,** you have two ways back in, both from the server. Run the commands in the Leantime folder (see [Using the Leantime CLI](/development/commandline/)); on Docker, put `docker compose exec leantime` in front of each `php` command.

**Option 1: create a new Owner account.** Sign in with it, and you're back in charge of the workspace:

```bash
php bin/leantime user:add --email=you@example.com --password='a-long-new-password' --role=owner
```

The roles are `readonly`, `commenter`, `editor`, `manager`, `admin` and `owner`. Administrators can't set another person's password, so this doesn't unlock the old account; use option 2 for that, or [set up email](/installation/email-configuration/) and use **Forgot password**.

**Option 2: set a new password in the database.**

1. **Make a password hash** with Leantime's own PHP:

   ```bash
   php -r 'echo password_hash("a-long-new-password", PASSWORD_DEFAULT), PHP_EOL;'
   ```

   It prints a line that starts with `$2y$`. Don't use a website to make the hash: it would see your new password.
2. **Open the database** (on Docker: `docker compose exec leantime_db sh -c 'exec mysql -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE"'`) and run this, with your hash and your sign-in email:

   ```sql
   UPDATE zp_user SET password = 'PASTE-THE-HASH-HERE' WHERE username = 'you@example.com';
   ```

   The `username` column holds the email address you sign in with.
3. **Sign in** with the new password.

---

## API & Integrations

### How do I access the Leantime API?

1. Create an API key in **Company Settings → API**
2. Use the JSON-RPC endpoint: `https://yourdomain.com/api/jsonrpc`
3. Include your API key in requests

### Can regular users create API keys?

By default, only admins can create API keys in [Company Settings](/using-leantime/company-settings/). There's a feature request to allow per-user API keys.

### Does Leantime have webhooks?

Not built-in, but you can use the API or extend functionality with plugins.

### Is there an MCP (Model Context Protocol) server?

Yes, the MCP Server Plugin allows AI assistants like Claude to interact with Leantime directly. It's available in the Leantime Marketplace and built into Leantime Cloud. Clients connect straight to `https://your-leantime-url/mcp` with a Personal Access Token — see [Leantime's MCP Server](/installation/leantime-mcp/).

---

## Getting Help

### Where can I get community support?

- **GitHub Discussions:** [github.com/Leantime/leantime/discussions](https://github.com/Leantime/leantime/discussions)
- **Discord:** Community chat (link on leantime.io)
- **Community Forum:** [community.leantime.io](https://community.leantime.io)

### How do I report a bug?

Create an issue on GitHub: [github.com/Leantime/leantime/issues](https://github.com/Leantime/leantime/issues)

Include:
- Leantime version
- Installation method (Docker, standard, etc.)
- Steps to reproduce
- Error messages or logs

### Does Leantime offer paid support?

Yes, Leantime offers managed hosting, installation services, and support plans. Visit [leantime.io](https://leantime.io) for details.

---

*This FAQ is based on community questions from GitHub Issues and Discussions. For the most current information, check the official documentation at [docs.leantime.io](https://docs.leantime.io).*
