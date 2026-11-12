# What can Leantime do?

Leantime is a free, open source project management system you can host yourself. It covers to-dos, milestones, goals, docs, ideas, time tracking and reports. Plugins from the [Leantime Marketplace](https://marketplace.leantime.io/) add more, and [Leantime Cloud](https://leantime.io/pricing/) runs everything for you.

This page lists what's included where, then answers the "Can Leantime…?" questions people ask most, each with a link to the how-to.

## Which edition is right for me?

| | Open source | Open source + plugins | Leantime Cloud |
|---|---|---|---|
| **What it is** | Leantime on your own server, free under the AGPLv3 licence | The same, plus the plugins you choose | Leantime hosted by us |
| **You pay** | Nothing | Once per plugin licence, sized by number of users. Includes one year of updates. | A monthly or yearly subscription per user |
| **Who runs it** | You | You | Leantime |
| **Features** | All core features below | Core features plus the plugins you buy | Everything, including AI features |
| **Support** | Community ([Discord](https://discord.gg/4zMzJtAq9z), [GitHub](https://github.com/Leantime/leantime/issues)) | Community; [priority support plans](https://marketplace.leantime.io/) available | Included |

Not sure yet? Install the open source edition with [Docker](installation/docker.md) in about 10 minutes, or start a [Cloud trial](https://leantime.io/pricing/). You can move a self-hosted instance to Cloud later.

## Feature overview

"Core" means it's included in the free open source edition. "Plugin" means you add it from the marketplace on a self-hosted instance.

### Plan and do the work

| Feature | Open source | Cloud |
|---|---|---|
| To-dos with Kanban, table and list views, subtasks and collaborators | Core | Yes |
| Milestones on a timeline (Gantt), with dependencies between milestones | Core | Yes |
| Sprints and backlog | Core | Yes |
| Goals and goal tracking | Core | Yes |
| Ideas board, Retrospectives, and Blueprints (Lean Canvas, SWOT and more) | Core | Yes |
| Docs (project wiki) | Core | Yes |
| Reports (project status, burndown, cumulative flow) | Core | Yes |
| My Work dashboard and My Calendar | Core | Yes |
| [Recurring Tasks](https://marketplace.leantime.io/product/recurring-tasks/): repeat to-dos daily, weekly, monthly or yearly | Plugin | Yes |
| [Custom Fields](https://marketplace.leantime.io/product/leantime-customfields/): add your own fields to to-dos | Plugin | Yes |
| [Whiteboards](https://marketplace.leantime.io/product/leantime-whiteboards/): mind maps, sketches and wireframes | Plugin | Yes |
| [Notes](https://marketplace.leantime.io/product/leantime-notes/): private notes on your dashboard | Plugin | Yes |
| [Pomodoro Timer](https://marketplace.leantime.io/product/leantime-pomodoro/): focus sessions with breaks | Plugin | Yes |
| [Program Plans](https://marketplace.leantime.io/product/leantime-program-plans/): coordinate several projects as one program | Plugin | Yes |
| [Leantime Strategies](https://marketplace.leantime.io/product/leantime-strategies/): connect projects to long-term strategy | Plugin | Yes |

### Time and calendars

| Feature | Open source | Cloud |
|---|---|---|
| Timers, timesheets, billable work types, invoiced and paid flags, CSV export | Core | Yes |
| Calendar feed (iCal) to subscribe from Google, Outlook or Apple Calendar | Core | Yes |
| Show an external iCal calendar inside Leantime (read-only) | Core | Yes |
| [CalDAV Calendar Sync](https://marketplace.leantime.io/product/caldav-calendar-sync/): two-way sync with Nextcloud, ownCloud, Baikal, Radicale, Apple Calendar and Thunderbird | Plugin | <!-- TODO confirm --> To confirm |

### Sign-in and security

| Feature | Open source | Cloud |
|---|---|---|
| Six roles: Read Only, Commenter, Editor, Manager, Administrator, Owner | Core | Yes |
| Clients with access to their own projects | Core | Yes |
| Two-factor authentication (authenticator apps) | Core | Yes |
| Single sign-on with OpenID Connect (Keycloak, Authentik, Entra ID and others) | Core | <!-- TODO confirm --> To confirm |
| LDAP and Active Directory | Core | <!-- TODO confirm --> To confirm |
| [Advanced Authentication](https://marketplace.leantime.io/product/advanced-auth/): SAML and ready-made sign-in with Google, Microsoft, GitHub, Okta and more | Plugin | <!-- TODO confirm --> To confirm |

### Connect other tools

| Feature | Open source | Cloud |
|---|---|---|
| Project updates to Slack, Discord, Mattermost, Telegram and Zulip | Core | Yes |
| Personal webhook: your notifications as JSON to your own URL | Core | Yes |
| JSON-RPC API with API keys and personal access tokens | Core | Yes |
| CSV import of to-dos, projects, users, ideas, goals and milestones | Core | Yes |
| [MCP Server](https://marketplace.leantime.io/product/mcp-server/): let Claude, Cursor, VS Code and other AI assistants work in Leantime | Plugin | <!-- TODO confirm --> To confirm |

### AI

| Feature | Open source | Cloud |
|---|---|---|
| AI features (L.E.O.): to-do prioritisation, task breakdown, status updates and reports | No | Yes |

### Hosting and administration

| Feature | Open source | Cloud |
|---|---|---|
| MySQL, MariaDB or PostgreSQL | Core | Managed for you |
| Docker image for amd64 and ARM | Core | Managed for you |
| S3-compatible file storage and Redis | Core | Managed for you |
| 44 languages, light and dark mode, colour schemes, Atkinson Hyperlegible font | Core | Yes |
| Company logo and colours (white labelling) | Core | Yes |

## Can Leantime…?

### Hosting and setup

#### Is Leantime free?

Yes. The open source edition is free to download, use and host under the AGPLv3 licence, with no limits on users, projects or to-dos. Plugins and Leantime Cloud are paid.

#### Can Leantime run in Docker?

Yes. The official image `leantime/leantime` runs on amd64 and ARM. See [Install Leantime with Docker](installation/docker.md).

#### Does Leantime work with MariaDB?

Yes, MariaDB 10.6 or later. See [System requirements](installation/system-requirements.md).

#### Does Leantime work with PostgreSQL?

Yes, since Leantime 3.6. Set `LEAN_DB_DEFAULT_CONNECTION = 'pgsql'` before you install. See [System requirements](installation/system-requirements.md).

#### Can Leantime run on Windows or IIS?

Yes. Docker Desktop on Windows works. For IIS, Leantime ships URL Rewrite rules in `public/web.config`; point the site at the `public` folder.

#### Can Leantime run on a Synology NAS or Raspberry Pi?

Yes. See [Synology NAS](installation/synology.md) and [Other installation methods](installation/other-methods.md).

#### Can Leantime store files in S3?

Yes, in Amazon S3 or any S3-compatible storage such as DigitalOcean Spaces or MinIO. See [S3 file storage](installation/configuration.md?id=s3-file-storage).

#### Can I move from self-hosted Leantime to Leantime Cloud?

Yes. We can migrate your data for a small fee. Ask through the chat on [leantime.io](https://leantime.io/).

### Planning and to-dos

#### Can a to-do have more than one person assigned?

Yes. A to-do has one assignee, who owns it, and any number of collaborators, who are notified and see it in their work.

#### Does Leantime have subtasks?

Yes. Open a to-do and add subtasks; each has its own status, assignee and dates.

#### Can I set dependencies between to-dos?

Between milestones, yes: the timeline (Gantt) shows when one milestone depends on another. Dependencies between individual to-dos aren't available.

#### Can I move a to-do to another project?

Yes. Open the to-do's menu and choose **Move To-Do**. You need edit rights in both projects.

#### Does Leantime have Kanban swimlanes?

Yes. On the Kanban board, group to-dos by assignee, milestone, sprint, priority, due date and more to get swimlanes. See [Task management](using-leantime/task-management.md).

#### Does Leantime have a Gantt chart?

Yes. **Milestones** shows your milestones on a timeline, and you can show their to-dos too. See [Roadmap and milestones](using-leantime/roadmap-planning.md).

#### Can I create recurring to-dos?

Yes, with the [Recurring Tasks](https://marketplace.leantime.io/product/recurring-tasks/) plugin. It creates to-dos daily, weekly, monthly or yearly, for example for stand-ups or monthly reviews. See [Using plugins](installation/using-plugins.md?id=recurring-tasks).

#### Can I add custom fields to to-dos?

Yes, with the [Custom Fields](https://marketplace.leantime.io/product/leantime-customfields/) plugin: text, number, dropdown, checkbox and more. See [Using plugins](installation/using-plugins.md?id=custom-fields).

#### Does Leantime have a wiki?

Yes. Every project has **Docs** for project knowledge.

#### Does Leantime have whiteboards?

Yes, with the [Whiteboards](https://marketplace.leantime.io/product/leantime-whiteboards/) plugin. See [Using plugins](installation/using-plugins.md?id=whiteboards).

#### Can I manage several projects together?

Yes. **My Work** shows your to-dos across all projects. To plan several projects as one program, with shared milestones and risks, use the [Program Plans](https://marketplace.leantime.io/product/leantime-program-plans/) plugin. See [Using plugins](installation/using-plugins.md?id=program-management).

### Time and calendars

#### Does Leantime have time tracking?

Yes. Start a timer from any to-do or log hours in **Timesheets**. Mark time as billable, invoiced and paid, and export it to CSV. See [Timesheets](using-leantime/timesheets.md).

#### Can I see Leantime in Google Calendar, Outlook or Apple Calendar?

Yes. In **My Calendar**, open **Integrate Calendar**, create your iCal URL and subscribe to it in your calendar app. For two-way sync with Nextcloud, Apple Calendar or Thunderbird, use the [CalDAV Calendar Sync](https://marketplace.leantime.io/product/caldav-calendar-sync/) plugin.

### Sign-in and security

#### Does Leantime support single sign-on (SSO)?

Yes. OpenID Connect and LDAP / Active Directory are built in; see [Authentication](installation/authentication-configuration.md). The [Advanced Authentication](https://marketplace.leantime.io/product/advanced-auth/) plugin adds SAML and ready-made sign-in with Google, Microsoft, GitHub, Okta and more; see [Advanced Auth](installation/plugin-installation.md?id=advanced-auth-plugin).

#### Does Leantime have two-factor authentication?

Yes. Each user can turn it on in **My Profile** with an authenticator app.

#### Which roles does Leantime have?

Read Only, Commenter, Editor, Manager, Administrator and Owner. Clients can be limited to their own projects. See [User management](using-leantime/user-management.md).

#### Can an administrator reset a user's password?

Not directly. Users reset their own password with **Forgot password**, which sends an email, so [set up email](installation/email-configuration.md) first.

### Integrations and data

#### Does Leantime integrate with Slack, Discord or Mattermost?

Yes, and with Telegram and Zulip. Each project can post updates to a channel. See [Project integrations](using-leantime/integrations.md). Microsoft Teams isn't supported.

#### Does Leantime integrate with GitHub or GitLab?

Not for code or issues. You can let people sign in with their GitHub or GitLab account using the [Advanced Authentication](https://marketplace.leantime.io/product/advanced-auth/) plugin.

#### Does Leantime have webhooks?

Yes. Each user can send their notifications to their own HTTPS address under **My Profile → Webhooks**. Leantime sends a JSON POST request for each notification.

#### Does Leantime have an API?

Yes, a JSON-RPC API with API keys and personal access tokens. See [Connect to the API](api/usage.md).

#### Can I import from Jira, Trello or Asana?

Yes, through a CSV file. Export your data from the other tool as CSV, then in Leantime open **Integrations** (administrators only), choose CSV import, and match each column to a Leantime field. You can import to-dos, projects, users, ideas, goals and milestones.

#### Can I export my data?

Yes. To-do lists and timesheets export to CSV, Blueprint boards export to XML, and reports print to PDF from your browser. For a full copy of a self-hosted instance, [back up](installation/backup-restore.md) both the database and the uploaded files (`userfiles/` and `public/userfiles/`).

#### Does Leantime have an activity log?

Each to-do has a **History** tab, and docs show who changed what. There's no company-wide audit log.

### AI

#### Can I use Leantime with Claude, ChatGPT, Cursor or VS Code?

Yes, with the [MCP Server](https://marketplace.leantime.io/product/mcp-server/) plugin. Your AI assistant can then find, create and update to-dos, log time and more, with your permissions. See [MCP server](installation/leantime-mcp.md).

#### Does Leantime have built-in AI?

Yes, in Leantime Cloud: to-do prioritisation, task breakdown, status updates and status reports. These aren't part of the open source edition.

### Accessibility

#### Is Leantime accessible for people with ADHD, dyslexia or low vision?

Leantime is designed for neurodivergent people. It has light and dark mode, colour schemes, and the Atkinson Hyperlegible font for readers with low vision. Each user chooses these in **My Profile → Theme**.

#### Which languages does Leantime support?

44 languages. Each user picks theirs in **My Profile**.
