---
title: "Install and configure plugins"
description: "Install Leantime plugins from the marketplace or by hand, add license keys, and set up AdvancedAuth single sign-on with GitHub, Google, Microsoft and more."
glance:
  minutes: 10
  level: "Beginner"
  needs:
    - "An administrator account in Leantime"
    - "A license key from the [Leantime Marketplace](https://marketplace.leantime.io/), for paid plugins"
    - "On Docker: the plugins folder kept in a volume, so plugins survive a restart"
  where:
    - "The [Leantime Marketplace](https://marketplace.leantime.io/), to get a license key"
    - "Leantime, under **Company → Leantime Apps**"
    - "Leantime's `config/.env` file, only for plugins that need settings (such as Advanced Authentication)"
  result: "The plugin installed and enabled in Leantime, ready to use."
---

Leantime supports plugins to extend core functionality without modifying the codebase. Plugins are available through the [Leantime Marketplace](https://marketplace.leantime.io/) and can also be installed manually for custom development.

## Prerequisites

Before installing plugins, ensure your Leantime installation is properly configured for plugin support.

### Docker Installations

**Critical:** You must mount the Plugins folder as a volume. Without this, plugins will disappear after container restarts.

In your `docker-compose.yml`, ensure you have:

```yaml
volumes:
  - plugins:/var/www/html/app/Plugins
```

Or if using `docker run`:

```bash
docker run -d \
  -v /path/to/plugins:/var/www/html/app/Plugins \
  # ... other options
  leantime/leantime:latest
```

The `www-data` user must have write access to the Plugins folder:

```bash
docker exec -it <container_name> chown -R www-data:www-data /var/www/html/app/Plugins
docker exec -it <container_name> chmod -R 755 /var/www/html/app/Plugins
```

### Package/Traditional Installations

Ensure the `app/Plugins/` directory exists and is writable by your web server user:

```bash
sudo mkdir -p /var/www/html/leantime/app/Plugins
sudo chown -R www-data:www-data /var/www/html/leantime/app/Plugins
sudo chmod -R 755 /var/www/html/leantime/app/Plugins
```

### Shared Hosting (cPanel)

Using File Manager:

1. Navigate to your Leantime installation directory
2. Verify the `app/Plugins/` folder exists
3. If missing, create it
4. Set permissions to 755 via File Manager or terminal

---

## Installing from the Marketplace

The easiest way to install plugins is through the built-in marketplace interface.

### Step 1: Open Leantime Apps

1. Sign in to Leantime as an Owner or Administrator.
2. Open **Company** in the top menu.
3. In the left menu, under **Administration**, click **Leantime Apps**. The **Explore Apps** tab lists the plugins on the marketplace.
4. Click **Learn More** on a plugin to see what it does and which Leantime versions it supports (the **Compatibility** tab).

### Step 2: Get a License Key

1. On the plugin's **Learn More** screen, click **Get a license**. The plugin's page on [marketplace.leantime.io](https://marketplace.leantime.io/) opens.
2. Choose the number of users and complete the purchase.
3. Your license key arrives by email with your order receipt. Lost it? The [Lost License](https://marketplace.leantime.io/lost-license/) page sends it again.

Each plugin has its own license key, also when you buy a bundle. You install each plugin separately with its own key.

### Step 3: Enter the Key and Install

1. Back in **Leantime Apps → Explore Apps**, click **Learn More** on the plugin you bought.
2. Choose a version that supports your Leantime version (see the **Compatibility** tab), paste the key into **License Key** and click **Install**.
3. Wait for "Plugin installed successfully!". If you see an error instead, see [License Key Not Recognized](#license-key-not-recognized).

### Step 4: Enable the Plugin

1. Open the **My Apps** tab. The plugin is listed under **Installed Plugins**.
2. Click **Enable**.
3. Some plugins need more setup, for example variables in your `config/.env` file. If the plugin has a settings screen, a **Settings** link appears next to it. See [Plugin Configuration](#plugin-configuration).

Leantime stores the key with the plugin, so updates don't ask for it again. For what happens when you add users, update Leantime or a plugin fails, see [Plugin Licenses, Updates and Problems](/installation/plugin-licenses/).

---

## Manual Plugin Installation

For custom plugins, development builds, or plugins not in the marketplace:

### Step 1: Obtain the Plugin Files

Download or create your plugin package. Plugin packages are typically ZIP files containing a folder with the plugin name.

### Step 2: Upload to the Plugins Directory

**Via SFTP/FTP:**

1. Connect to your server
2. Navigate to `app/Plugins/`
3. Upload the plugin folder (not the ZIP file—extract first)

**Via Command Line:**

```bash
cd /var/www/html/leantime/app/Plugins
unzip /path/to/PluginName.zip
chown -R www-data:www-data PluginName
chmod -R 755 PluginName
```

**Docker:**

```bash
# Copy plugin to container
docker cp /path/to/PluginName <container_name>:/var/www/html/app/Plugins/

# Fix permissions
docker exec -it <container_name> chown -R www-data:www-data /var/www/html/app/Plugins/PluginName
```

**cPanel File Manager:**

1. Upload the ZIP file to `app/Plugins/`
2. Right-click the ZIP file and select **Extract**
3. Delete the ZIP file after extraction
4. Verify the plugin folder structure is correct

### Step 3: Verify Plugin Structure

A properly structured plugin folder should look like:

```
app/Plugins/
└── PluginName/
    ├── composer.json      # Required: plugin name, version and supported Leantime versions
    ├── register.php       # Registers menus, events and settings
    ├── Controllers/       # Pages
    ├── Templates/         # Blade templates
    ├── Language/          # Translation files
    └── Services/          # Business logic
```

The `composer.json` needs at least:

```json
{
  "name": "vendor/pluginname",
  "description": "Plugin description",
  "version": "1.0.0",
  "type": "leantime-plugin",
  "extra": {
    "leantime": {
      "requires": ">=3.6 <4.0"
    }
  }
}
```

`extra.leantime.requires` lists the Leantime versions the plugin supports. Leantime doesn't load a plugin on other versions. A plugin that leaves it out is treated as supporting Leantime 3.x. See [Plugin Development](/development/plugin-development/).

### Step 4: Activate and Enable

1. Go to **Company → Leantime Apps → My Apps**.
2. Your plugin is listed under **Downloaded Plugins**. Click **Activate**.
3. It moves to **Installed Plugins**. Click **Enable**.

---

## Plugin Bundles

[Bundles](https://marketplace.leantime.io/product-category/plugins/bundles/) get you several plugins for one team size in one purchase. You still receive a separate license key for each plugin, and you [install each plugin](#step-3-enter-the-key-and-install) with its own key.

---

## Updating Plugins

### Marketplace Plugins

1. Go to **Company → Leantime Apps → My Apps**. Leantime checks for updates once a day; click **Check for updates** to check now.
2. A plugin with an update shows the new version, for example "v1.4.0 available". Click **Update**.

Leantime uses the license key the plugin was installed with, and puts the previous version back if the new one doesn't load. To install minor and patch updates without clicking, turn on **Update plugins automatically**. See [How do plugin updates work?](/installation/plugin-licenses/#how-do-plugin-updates-work)

### Manual Updates

For plugins you installed from a folder:

1. Disable the plugin in **My Apps**.
2. Back up the existing plugin folder.
3. Replace it with the new version's files.
4. Clear the cache: `php ./bin/leantime cache:clearAll`
5. Enable the plugin again.

---

## Uninstalling Plugins

### Disable First

1. Go to **Company → Leantime Apps → My Apps**.
2. Click **Disable** next to the plugin.

Disabling keeps the plugin's data. Click **Enable** to get it back.

### Complete Removal

1. Back up your database.
2. Disable the plugin, then click **Remove**.
3. (Optional) Delete the plugin's folder from `app/Plugins/`.

:::note
**Remove** runs the plugin's uninstall step, and some plugins delete their data there. Custom Fields, for example, deletes all your fields and their values. If you might want the data back, disable the plugin instead of removing it.
:::

---

## Plugin Configuration

Some plugins require additional configuration after installation, typically through environment variables in your `config/.env` file.

### General Configuration Pattern

Most plugins follow the pattern:

```ini
PLUGINNAME_SETTING=value
```

Check the plugin's documentation or marketplace page for specific configuration options.

---

## Advanced Auth Plugin

Setting up the Advanced Authentication plugin (sign-in providers, SAML, automatic accounts and the mobile app) is on its own page: [Advanced Authentication](/plugins/advanced-authentication/).

---

## Troubleshooting

### Plugin Not Appearing After Upload

**Check folder structure:**
```bash
ls -la app/Plugins/PluginName/
```

Ensure `composer.json` exists at the root of the plugin folder.

**Check permissions:**
```bash
# The web server user must own the files
sudo chown -R www-data:www-data app/Plugins/
sudo chmod -R 755 app/Plugins/
```

**Clear cache:**
```bash
php ./bin/leantime cache:clearAll
```

### Plugin Doesn't Load on Network Storage (Azure Files, SMB)

Marketplace plugins are a single `.phar` file, and PHP runs the plugin from inside it. On some network file shares, such as Azure Files mounted over SMB, PHP can't read `.phar` files reliably. The plugin then shows as installed and enabled but doesn't appear anywhere in Leantime.

1. **Clear PHP's cache.** Restart PHP-FPM or your web server. On Azure App Service, restart the app. This clears OPcache, which can hold on to a copy of the plugin that didn't load.
2. **Keep the plugin on the server's own disk.** Unzip the plugin download into `app/Plugins/<PluginName>/` on local storage rather than the network share, so the folder holds `<PluginName>.phar` and `<PluginName>.phar.pubkey`. See [Manual Plugin Installation](/installation/plugin-installation/#manual-plugin-installation).
3. **Clear Leantime's cache:**

```bash
php ./bin/leantime cache:clearAll
```

### Plugin Installation Fails (Docker)

**Volume not mounted:**

Check your `docker-compose.yml` includes the Plugins volume:

```yaml
volumes:
  - plugins:/var/www/html/app/Plugins
```

Restart with:
```bash
docker-compose down
docker-compose up -d
```

**Permission issues:**
```bash
docker exec -it <container_name> chown -R www-data:www-data /var/www/html/app/Plugins
```

### Plugin Disappears After Container Restart

This indicates the Plugins folder is not properly mounted as a volume. Without a volume mount, container data is ephemeral.

1. Stop the container
2. Update `docker-compose.yml` to mount the Plugins volume
3. Reinstall plugins after restarting

### License Key Not Recognized

- Enter the key exactly as received, with no spaces before or after it.
- Use the key for this plugin. A bundle gives you a separate key for each plugin, and each one only installs its own plugin.
- Count your active users. If you have more than your license allows, the marketplace refuses the install. See [What counts as a user?](/installation/plugin-licenses/#what-counts-as-a-user-for-a-plugin-license)
- Check the plugin's **Compatibility** tab supports your Leantime version.
- Make sure your server can reach `https://marketplace.leantime.io` (check firewall and proxy settings).
- Lost the key? The [Lost License](https://marketplace.leantime.io/lost-license/) page sends it again.
- Still stuck? [Contact the marketplace](https://marketplace.leantime.io/contact/).

### Plugin Was Disabled On Its Own

Leantime switches a plugin off when it keeps failing or when your active users go over its license. It stops loading a plugin that doesn't support your Leantime version. In each case, Owners and Administrators get a notification that says why. See [Plugin Licenses, Updates and Problems](/installation/plugin-licenses/).

### Plugin Causes Errors After Enabling

1. Disable the plugin in **Company → Leantime Apps → My Apps**, or from the server with `php ./bin/leantime plugin:disable "<plugin name>"` (see [Using the Leantime CLI](/development/commandline/))
2. If you can't access Settings, disable via database:

```sql
UPDATE zp_plugins SET enabled = 0 WHERE foldername = 'PluginName';
```

3. Clear cache: `php ./bin/leantime cache:clearAll`
4. Check `storage/logs/leantime-*.log` for error details
5. Verify PHP version compatibility (Leantime and its plugins need PHP 8.2 or later)

### Database Schema Mismatch After Upgrade

If you upgraded from Leantime 2.x to 3.x and have plugin issues:

1. The `zp_plugins` table may have additional columns in 3.x
2. Run database migrations: navigate to `yourdomain.com/update`
3. Or manually add missing columns:

```sql
ALTER TABLE zp_plugins ADD COLUMN license TEXT;
ALTER TABLE zp_plugins ADD COLUMN format VARCHAR(45);
```

### Sign-in provider or SAML problems

See [Troubleshooting](/plugins/advanced-authentication/#troubleshooting) on the Advanced Authentication page.

---

## Getting Help

- **Community Forum:** [community.leantime.io](https://community.leantime.io)
- **Discord:** [Leantime Discord](https://discord.gg/4zMzJtAq9z)
- **Plugin Support:** Paid plugins include support via [marketplace.leantime.io](https://marketplace.leantime.io)
- **Bug Reports:** [GitHub Issues](https://github.com/Leantime/leantime/issues)
