# Notifications

Leantime tells you when something changes in your projects: a new comment, a to-do assigned to you, a status change. You see notifications under the bell at the top of the screen, and by email if you want them. You choose what you hear about, and how much, in your profile.

## Where do I see my notifications?

Click the bell at the top right. **Notifications** lists recent changes in your projects. **Mentions** lists the times someone wrote your name with @, like `@Ada`.

![Leantime's notifications panel under the bell, with the Notifications and Mentions tabs and a comment from a teammate](../_images/using-leantime/leantime-notifications-panel.webp)

Click a notification to open what it's about.

## How do I choose which notifications I get in Leantime?

1. **Click your profile picture** at the top right, then **My Profile**.
2. **Open the Notifications tab.**
3. **Choose your settings** (explained below).
4. **Click Save.**

![Notification settings: email and push switches, email frequency, what to be notified about, and per-project levels](../_images/using-leantime/leantime-notification-settings.webp)

| Setting | What it does |
|---|---|
| **Receive email notifications** | Sends your notifications by email as well |
| **Receive push notifications on your phone** | Sends them to the [Leantime mobile app](using-leantime/mobile-app.md#can-i-get-notifications-on-my-phone), on every phone you're signed in on. On a self-hosted server, an administrator [turns them on](installation/mobile-app-setup.md#how-do-i-turn-on-phone-notifications) first |
| **Email frequency** | The shortest wait between two update emails. Leantime collects what happens in between into one email, and doesn't send it if you've already read everything in Leantime |
| **Notify me about** | Switches for each kind of change: Tasks & Milestones, Comments, Goals, Ideas, Project Updates, and Boards & Whiteboards |
| **Per-Project Notifications** | How much you hear from each project (see below) |

@Mentions always reach you, whatever you switch off, and so do changes to to-dos you're a collaborator on.

From Leantime 3.17, you also get a morning summary of what's coming up, with these same email and phone switches. Its settings are at the bottom of this tab (see [Reminders and the morning summary](using-leantime/reminders.md)).

## How do I get fewer notifications from a busy project?

Change the project's level under **Per-Project Notifications**:

- **All Activity:** everything in the project that matches your **Notify me about** switches.
- **My Work Only:** only changes to things you're assigned to, created or are directly involved in.
- **Muted:** nothing from this project, except @mentions and to-dos you're a collaborator on.

## Can I get notifications in Slack, Teams or another tool?

- **For a whole project:** a Manager can connect the project to Slack, Mattermost, Zulip, Telegram or Discord on the **Integrations** tab of its settings. Leantime then posts the project's updates to a channel. See [Project Integrations](using-leantime/integrations.md).
- **For just you:** the **Webhooks** tab in **My Profile** sends your notifications to a web address of your own, as JSON. It follows your notification settings, even with email switched off.

## How do administrators set the defaults?

Administrators set these in **Company → Company Settings**:

- **Email frequency:** the shortest wait for everyone. People can choose a longer wait in their own settings, not a shorter one.
- **Default notification types for new users** and **Default notification level:** what people get until they change their own settings.
- **What phone notifications show,** under **Mobile push notifications:** **Everything**, **Names only** (no comment text) or **Nothing** ("New activity in Leantime" only), for teams whose to-do names or comments shouldn't show on a lock screen. On a self-hosted server, this needs Leantime 3.16.0 or later; see [Set up the mobile app](installation/mobile-app-setup.md#what-leaves-my-server).

## Why aren't Leantime notification emails arriving?

- **I don't get any emails.** Check that **Receive email notifications** is on and the project isn't **Muted**. If nobody gets emails, an administrator needs to check the [email settings](installation/email-configuration.md).
- **Emails arrive late.** **Email frequency** sets the shortest wait between emails, and the company setting can make it longer. Self-hosted Leantime also sends emails from its scheduled jobs, so they need a [cron job](installation/scheduled-jobs-and-redis.md#how-do-i-run-the-scheduled-jobs) or someone signed in.
