# Plugin Installation & Configuration

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

Leantime stores the key with the plugin, so updates don't ask for it again. For what happens when you add users, update Leantime or a plugin fails, see [Plugin Licenses, Updates and Problems](installation/plugin-licenses.md).

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

`extra.leantime.requires` lists the Leantime versions the plugin supports. Leantime doesn't load a plugin on other versions. A plugin that leaves it out is treated as supporting Leantime 3.x. See [Plugin Development](development/plugin-development.md).

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

Leantime uses the license key the plugin was installed with, and puts the previous version back if the new one doesn't load. To install minor and patch updates without clicking, turn on **Update plugins automatically**. See [How do plugin updates work?](installation/plugin-licenses.md#how-do-plugin-updates-work)

### Manual Updates

For plugins you installed from a folder:

1. Disable the plugin in **My Apps**.
2. Back up the existing plugin folder.
3. Replace it with the new version's files.
4. Clear the cache: `php ./bin/leantime cache:clear`
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

> **Note:** **Remove** runs the plugin's uninstall step, and some plugins delete their data there. Custom Fields, for example, deletes all your fields and their values. If you might want the data back, disable the plugin instead of removing it.

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

The Advanced Auth plugin enables Single Sign-On (SSO) through various OAuth/SAML providers. After installing the plugin, add provider credentials to your environment file.

### General Setup

All providers require at least:

```ini
{PROVIDER}_CLIENT_ID=your-client-id
{PROVIDER}_CLIENT_SECRET=your-client-secret
```

Additionally, ensure `LEAN_APP_URL` is set correctly for OAuth callbacks:

```ini
LEAN_APP_URL=https://yourdomain.com
```

Register this callback (redirect) URL with each provider:

```
https://yourdomain.com/advancedAuth/callback/{provider}
```

`{provider}` is the provider's key in lowercase, for example `https://yourdomain.com/advancedAuth/callback/google`. Leantime builds this URL from `LEAN_APP_URL` and sends it to the provider, and most providers require an exact match.

Once provider configuration is added to the environment file, the UI will show a toggle to enable/disable the provider.

### Supported Providers

#### Authentik (Key: `AUTHENTIK`)
[Documentation](https://github.com/SocialiteProviders/Authentik)

```ini
AUTHENTIK_BASE_URL=https://your-authentik-instance.com
AUTHENTIK_CLIENT_ID=your-client-id
AUTHENTIK_CLIENT_SECRET=your-client-secret
```

#### Auth0 (Key: `AUTH0`)
[Documentation](https://github.com/SocialiteProviders/Auth0)

```ini
AUTH0_BASE_URL=https://your-tenant.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
```

#### Gitea (Key: `GITEA`)
[Documentation](https://github.com/SocialiteProviders/Gitea)

```ini
GITEA_INSTANCE_URI=https://your-gitea-instance.com
GITEA_CLIENT_ID=your-client-id
GITEA_CLIENT_SECRET=your-client-secret
```

#### GitHub (Key: `GITHUB`)
[Documentation](https://github.com/SocialiteProviders/GitHub)

```ini
GITHUB_CLIENT_ID=your-client-id
GITHUB_CLIENT_SECRET=your-client-secret
```

#### GitLab (Key: `GITLAB`)
[Documentation](https://github.com/SocialiteProviders/GitLab)

```ini
GITLAB_CLIENT_ID=your-client-id
GITLAB_CLIENT_SECRET=your-client-secret
```

#### Google (Key: `GOOGLE`)
[Documentation](https://github.com/SocialiteProviders/Google-Plus)

```ini
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
```

#### Keycloak (Key: `KEYCLOAK`)
[Documentation](https://github.com/SocialiteProviders/Keycloak)

```ini
KEYCLOAK_CLIENT_ID=your-client-id
KEYCLOAK_CLIENT_SECRET=your-client-secret
KEYCLOAK_BASE_URL=https://your-keycloak-instance.com
KEYCLOAK_REALM=your-realm
```

#### Laravel Passport (Key: `LARAVELPASSPORT`)
[Documentation](https://github.com/SocialiteProviders/Laravel-Passport)

```ini
LARAVELPASSPORT_CLIENT_ID=your-client-id
LARAVELPASSPORT_CLIENT_SECRET=your-client-secret
LARAVELPASSPORT_HOST=https://your-passport-server.com
```

#### Microsoft (Key: `MICROSOFT`)
[Documentation](https://github.com/SocialiteProviders/Microsoft)

```ini
MICROSOFT_CLIENT_ID=your-client-id
MICROSOFT_CLIENT_SECRET=your-client-secret
MICROSOFT_TENANT_ID=common
# Optional settings
MICROSOFT_PROXY=
MICROSOFT_TENANT_FIELDS=[]
MICROSOFT_INCLUDE_AVATAR=true
```

#### Microsoft Azure (Key: `AZURE`)
[Documentation](https://github.com/SocialiteProviders/Microsoft-Azure)

```ini
AZURE_CLIENT_ID=your-client-id
AZURE_CLIENT_SECRET=your-client-secret
AZURE_TENANT_ID=your-tenant-id
# Optional
AZURE_PROXY=
```

#### Okta (Key: `OKTA`)
[Documentation](https://github.com/SocialiteProviders/Okta)

```ini
OKTA_BASE_URL=https://your-org.okta.com
OKTA_CLIENT_ID=your-client-id
OKTA_CLIENT_SECRET=your-client-secret
```

#### PropelAuth (Key: `PROPELAUTH`)
[Documentation](https://github.com/SocialiteProviders/PropelAuth)

```ini
PROPELAUTH_CLIENT_ID=your-client-id
PROPELAUTH_CLIENT_SECRET=your-client-secret
PROPELAUTH_AUTH_URL=https://your-propelauth-url.com
```

#### EduID (Key: `EDUID`)
[Documentation](https://github.com/SocialiteProviders/EduID)

```ini
EDUID_CLIENT_ID=your-client-id
EDUID_CLIENT_SECRET=your-client-secret
EDUID_USE_TEST_IDP=false
```

#### App.net (Key: `APP.NET`)
[Documentation](https://github.com/SocialiteProviders/App.net)

```ini
APP.NET_KEY=your-key
APP.NET_SECRET=your-secret
```

#### SAML 2.0 (Key: `SAML2`)
[Documentation](https://github.com/SocialiteProviders/Saml2)

All file paths are relative to the Leantime root directory.

In your identity provider, register Leantime as a service provider:

- **Assertion Consumer Service (reply) URL:** `https://yourdomain.com/advancedAuth/callback/saml2`
- **Entity ID:** the value of `SAML2_SP_ENTITY_ID`, or `https://yourdomain.com/auth/saml2` if you don't set it

Then tell Leantime about your identity provider, using **either** its metadata **or** its details entered by hand. If `SAML2_ACS` is set, Leantime uses the details entered by hand and ignores `SAML2_METADATA`.

```ini
# Option A: your identity provider's metadata (URL, file path, or XML)
SAML2_METADATA=https://idp.example.com/metadata.xml
# Only needed if the metadata lists several identity providers: which one to use
SAML2_ENTITY_ID=https://idp.example.com/entity-id

# Option B: your identity provider's details entered by hand
# SAML2_ACS is your identity provider's single sign-on URL, not Leantime's
SAML2_ACS=https://idp.example.com/sso
SAML2_ENTITY_ID=https://idp.example.com/entity-id
SAML2_CERTIFICATE=/path/to/idp-signing-certificate.pem

# Both options: map your identity provider's attribute names to Leantime's
SAML2_ATTRIBUTE_MAP={"email": "email", "name": "displayName"}

# Optional validation settings
SAML2_VALIDATION_CLOCK_SKEW=120
SAML2_VALIDATION_REPEATED_ID_TTL=31536000

# Service Provider settings (optional)
SAML2_SP_CERTIFICATE=/path/to/sp-certificate.pem
SAML2_SP_PRIVATE_KEY=/path/to/sp-private-key.pem
SAML2_SP_PRIVATE_KEY_PASSPHRASE=
SAML2_SP_SIGN_ASSERTIONS=false
SAML2_SP_ENTITY_ID=your-sp-entity-id

# SP contact information (optional)
SAML2_SP_TECH_CONTACT_SURNAME=Admin
SAML2_SP_TECH_CONTACT_GIVENNAME=IT
SAML2_SP_TECH_CONTACT_EMAIL=admin@yourdomain.com
SAML2_SP_ORG_LANG=en
SAML2_SP_ORG_NAME=Your Organization
SAML2_SP_ORG_DISPLAY_NAME=Your Organization
SAML2_SP_ORG_URL=https://yourdomain.com
```

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
php ./bin/leantime cache:clear
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
- Count your active users. If you have more than your license allows, the marketplace refuses the install. See [What counts as a user?](installation/plugin-licenses.md#what-counts-as-a-user-for-a-plugin-license)
- Check the plugin's **Compatibility** tab supports your Leantime version.
- Make sure your server can reach `https://marketplace.leantime.io` (check firewall and proxy settings).
- Lost the key? The [Lost License](https://marketplace.leantime.io/lost-license/) page sends it again.
- Still stuck? [Contact the marketplace](https://marketplace.leantime.io/contact/).

### Plugin Was Disabled On Its Own

Leantime switches a plugin off when it keeps failing or when your active users go over its license. It stops loading a plugin that doesn't support your Leantime version. In each case, Owners and Administrators get a notification that says why. See [Plugin Licenses, Updates and Problems](installation/plugin-licenses.md).

### Plugin Causes Errors After Enabling

1. Disable the plugin in **Company → Leantime Apps → My Apps**, or from the server with `php ./bin/leantime plugin:disable "<plugin name>"`
2. If you can't access Settings, disable via database:

```sql
UPDATE zp_plugins SET enabled = 0 WHERE foldername = 'PluginName';
```

3. Clear cache: `php ./bin/leantime cache:clear`
4. Check `storage/logs/leantime-*.log` for error details
5. Verify PHP version compatibility (most plugins require PHP 8.0+)

### Database Schema Mismatch After Upgrade

If you upgraded from Leantime 2.x to 3.x and have plugin issues:

1. The `zp_plugins` table may have additional columns in 3.x
2. Run database migrations: navigate to `yourdomain.com/update`
3. Or manually add missing columns:

```sql
ALTER TABLE zp_plugins ADD COLUMN license TEXT;
ALTER TABLE zp_plugins ADD COLUMN format VARCHAR(45);
```

### Auth Plugin: OAuth Callback Errors

1. Verify `LEAN_APP_URL` matches your actual domain exactly (including https://)
2. Check the callback URL in your identity provider settings:
   - Format: `https://yourdomain.com/advancedAuth/callback/{provider}` (for example `.../advancedAuth/callback/google`)
   - For SAML, the reply URL is `https://yourdomain.com/advancedAuth/callback/saml2`
3. Ensure `LEAN_SESSION_SECURE=true` only if using HTTPS
4. For SAML: verify certificate paths are correct and files are readable by the web server

### Auth Plugin: Provider Not Showing in UI

1. Verify environment variables are set correctly (check for typos)
2. Restart your web server or PHP-FPM after changing `.env`
3. Clear cache: `php ./bin/leantime cache:clear`
4. Check that both `CLIENT_ID` and `CLIENT_SECRET` are set for the provider

---

## Getting Help

- **Community Forum:** [community.leantime.io](https://community.leantime.io)
- **Discord:** [Leantime Discord](https://discord.gg/4zMzJtAq9z)
- **Plugin Support:** Paid plugins include support via [marketplace.leantime.io](https://marketplace.leantime.io)
- **Bug Reports:** [GitHub Issues](https://github.com/Leantime/leantime/issues)
