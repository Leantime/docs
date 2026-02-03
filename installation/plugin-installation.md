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

### Step 1: Access the Marketplace

1. Log in to Leantime as an administrator
2. Click the **gear icon** (Settings) in the sidebar
3. Select **Plugins** from the menu
4. Click **Marketplace** to browse available plugins

### Step 2: Purchase or Select a Plugin

1. Browse or search for the plugin you need
2. Click on the plugin to view details
3. For paid plugins, complete the purchase on [marketplace.leantime.io](https://marketplace.leantime.io/)
4. For free plugins, click **Install**

### Step 3: Enter License Key (Paid Plugins)

If you purchased a plugin or bundle:

1. Go to **Settings → Plugins**
2. Click **Enter License Key**
3. Paste your license key from your marketplace purchase confirmation
4. Click **Verify**
5. Your purchased plugins will appear and be available for installation

### Step 4: Install and Enable

1. Find the plugin in your available plugins list
2. Click **Install**
3. Once installed, toggle the **Enable** switch to activate the plugin
4. Some plugins may require additional configuration (see Plugin Configuration below)

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
    ├── composer.json      # Required: Plugin metadata
    ├── register.php       # Required: Event/feature registration
    ├── bootstrap.php      # Plugin initialization
    ├── Controllers/       # Plugin controllers
    ├── Views/             # Blade templates
    ├── Language/          # Translation files
    └── Services/          # Business logic
```

The `composer.json` must include:

```json
{
  "name": "vendor/pluginname",
  "description": "Plugin description",
  "version": "1.0.0",
  "type": "leantime-plugin",
  "autoload": {
    "psr-4": {
      "Leantime\\Plugins\\PluginName\\": "/"
    }
  }
}
```

### Step 4: Enable in Admin Panel

1. Go to **Settings → Plugins**
2. Your manually installed plugin should appear in the list
3. Toggle **Enable** to activate it

---

## Plugin Bundles

Leantime offers plugin bundles for different use cases:

| Bundle | Description |
|--------|-------------|
| **Starter** | Essential plugins for micro-teams and side projects |
| **Team** | Productivity toolkit for small teams |
| **Business** | Comprehensive solution for larger teams |

Bundles include a single license key that unlocks all included plugins. Enter the bundle license key in **Settings → Plugins → Enter License Key**.

---

## Updating Plugins

### Marketplace Plugins

1. Go to **Settings → Plugins**
2. Plugins with available updates show an **Update** button
3. Click **Update** to install the latest version
4. Re-enable if the plugin was disabled during update

### Manual Updates

1. Disable the plugin in **Settings → Plugins**
2. Back up the existing plugin folder
3. Replace with the new version files
4. Clear the cache: `php ./bin/leantime cache:clear`
5. Re-enable the plugin

---

## Uninstalling Plugins

### Disable First

1. Go to **Settings → Plugins**
2. Toggle the plugin to **Disabled**
3. This preserves plugin data in the database

### Complete Removal

To fully remove a plugin:

1. Disable the plugin
2. Delete the plugin folder from `app/Plugins/`
3. (Optional) Remove plugin tables from the database if you don't need the data

**Note:** Some plugins create database tables. Removing the folder doesn't delete this data, which allows reinstallation without data loss.

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

The callback URL for all providers is: `yourdomain.com/advancedAuth/callback?driver={provider}`

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

```ini
# Required
SAML2_METADATA=/path/to/metadata.xml
SAML2_ENTITY_ID=your-entity-id
SAML2_ACS=https://yourdomain.com/advancedAuth/callback?driver=saml2
SAML2_CERTIFICATE=/path/to/certificate.pem
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

- Ensure you're entering the key exactly as received (no extra spaces)
- Check your Leantime version is compatible with the plugin
- Verify your instance can reach `marketplace.leantime.io` (check firewall/proxy settings)
- Contact support if the issue persists

### Plugin Causes Errors After Enabling

1. Disable the plugin immediately via **Settings → Plugins**
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
   - Format: `https://yourdomain.com/advancedAuth/callback?driver={provider}`
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
