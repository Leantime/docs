# Plugin Licenses, Updates and Problems

Answers for administrators running marketplace plugins on a self-hosted Leantime: where your license key is, what counts as a user, and what Leantime does when a plugin stops working. To install a plugin for the first time, follow [Plugin Installation](installation/plugin-installation.md).

This page is for the self-hosted open source edition.

## Where do I find my license key?

In the email with your order receipt from [marketplace.leantime.io](https://marketplace.leantime.io/). If you can't find it, enter the email address you bought with on the [Lost License](https://marketplace.leantime.io/lost-license/) page and the marketplace sends the key and receipt again.

## I bought a bundle. Is there one key for all the plugins?

No. A bundle gives you a separate license key for each plugin in it, and you install each plugin on its own with its own key. The install screen takes one plugin's key at a time.

## Where do I enter the license key?

On the install screen for that plugin, inside Leantime:

1. Sign in as an Owner or Administrator.
2. Open **Company** in the top menu, then **Leantime Apps** under **Administration** in the left menu.
3. On the **Explore Apps** tab, click **Learn More** on the plugin.
4. Choose the version, paste the key into **License Key** and click **Install**.
5. When you see "Plugin installed successfully!", open the **My Apps** tab and click **Enable** next to the plugin.

Leantime stores the key with the plugin. Updates reuse it, so you won't need to enter it again.

## What counts as a user for a plugin license?

Every user whose status is **Active**. Invited users, deactivated users and API keys don't count. You can see each user's status under **Company → Management → User Management**.

Licenses come in user tiers (for example, up to 10 users). The tier applies to the whole Leantime installation, not to how many people use the plugin.

## What happens when we have more users than the license allows?

Leantime switches the plugin off at its next daily license check, and every Owner and Administrator gets a notification: "The plugin '…' has been disabled due to license validation failure." Nothing is deleted. The plugin's data stays in the database and comes back when the plugin is on again.

To turn it back on, do one of these, then click **Enable** in **My Apps** (Leantime checks the license again when you enable it):

- **Deactivate users who no longer need access.** Deactivated users don't count.
- **Move to a bigger tier.** [Contact the marketplace](https://marketplace.leantime.io/contact/) to change your license.

The same count is checked when you install or update a plugin. If you're over the limit, the install screen shows the marketplace's error and nothing is installed.

## When does Leantime check licenses?

Once a day, together with the other scheduled jobs. These run from your server's cron job if you set one up (see [Configuration](installation/configuration.md)), and otherwise while people are signed in to Leantime.

If Leantime can't reach marketplace.leantime.io during a check (a firewall, a proxy or an outage), it skips that check and the plugin stays on. Installing and updating plugins does need an HTTPS connection to marketplace.leantime.io.

## What happens when a plugin crashes?

If one plugin causes 5 errors that break a page within 10 minutes, Leantime switches that plugin off so the rest of Leantime keeps working. Every Owner and Administrator gets a notification that names the plugin and the last error.

Only real failures count: a server error, or an error inside the plugin's own code. "Page not found", "no permission" and form validation messages don't.

The license stays active, so you don't need the key again. To get the plugin back:

1. Check `storage/logs/` for the full error.
2. Install the plugin's latest version if there is one (see [How do plugin updates work?](#how-do-plugin-updates-work)).
3. Click **Enable** in **My Apps**. If the plugin keeps failing, Leantime switches it off again, and you can [ask for help](#where-can-i-get-help-with-a-plugin).

Plugins you load with `LEAN_PLUGINS` in your configuration (system plugins) are never switched off this way. Your deployment controls those.

## How do I switch a plugin off when Leantime won't load?

From the server, in the Leantime folder:

```bash
# Shows each plugin's name and whether it's enabled
php bin/leantime plugin:list

# Use the name exactly as the list shows it
php bin/leantime plugin:disable "<plugin name>"
```

If the command line doesn't work either, switch it off in the database:

```sql
UPDATE zp_plugins SET enabled = 0 WHERE foldername = '<PluginFolder>';
```

## What happens to plugins when I update Leantime?

Each plugin says which Leantime versions it supports. If you update Leantime to a version a plugin doesn't support, Leantime stops loading that plugin instead of letting it break pages:

- **My Apps** shows the plugin as **Not compatible**, with the versions it supports.
- Owners and Administrators get one notification per plugin.
- The plugin stays switched on, and its data stays. It loads again as soon as you install a version that supports your Leantime version.

Before you update, the command line updater (`php bin/leantime system:update`) lists the enabled plugins that don't support the new version. Each plugin's **Learn More** screen has a **Compatibility** tab with the Leantime versions each plugin version supports.

## How do plugin updates work?

Leantime asks the marketplace for new plugin versions once a day. You can also click **Check for updates** in **My Apps**. Only versions that support your Leantime version are offered.

When there's an update, **My Apps** shows it next to the plugin (for example, "v1.4.0 available"), and Owners and Administrators get a notification. Click **Update** to install it. Leantime uses the license key the plugin was installed with.

Before updating, Leantime keeps a copy of the current version. If the new version doesn't load, Leantime puts the previous version back and tells you.

Your purchase includes updates for one year. After that, the plugin keeps working on the versions it supports, and you can renew on the marketplace to get newer versions.

## Can plugins update automatically?

Yes. Turn on **Update plugins automatically** in **My Apps**. It's off until you turn it on.

With it on, the daily check installs new minor and patch versions (for example, 1.4.0 to 1.4.1 or 1.5.0). New major versions (for example, 2.0.0) wait for you to click **Update**, because they can change how the plugin works. Each automatic update is reported to Owners and Administrators, and one that doesn't load is rolled back.

## What's the difference between Disable and Remove?

- **Disable** switches the plugin off and keeps its data. Click **Enable** to get everything back.
- **Remove** uninstalls the plugin, and some plugins delete their data when they're removed. Custom Fields, for example, deletes all your fields and their values. Back up your database before you remove a plugin you might want back.

Removing a plugin in Leantime doesn't delete its folder from `app/Plugins/`. Removing also forgets the license key, so to use a marketplace plugin again, [install it with its key](#where-do-i-enter-the-license-key) as before.

## Can I move a plugin license to another server?

Yes. Each license key can be activated up to three times, so you can install the plugin with the same key when you change servers. After the third activation, [contact us](https://marketplace.leantime.io/contact/) and we'll reactivate it.

When you move Leantime with its database and its `app/Plugins/` folder (see [Backup & Restore](installation/backup-restore.md)), your installed plugins and their keys move with it.

## Where can I get help with a plugin?

- **Plugin support:** paid plugins include email support through [marketplace.leantime.io](https://marketplace.leantime.io/contact/).
- **Community:** [Discord](https://discord.gg/4zMzJtAq9z) and [GitHub Discussions](https://github.com/Leantime/leantime/discussions).
- **Errors:** include the plugin's name and version, your Leantime version and the error from `storage/logs/`.
