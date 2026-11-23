---
title: "Configuration reference"
description: "Every setting for self-hosted Leantime in config/.env or Docker environment variables: database, app URL, S3, email, SSO, sessions, cron and debug mode."
head:
  - tag: title
    content: "Leantime configuration reference: .env variables"
---

Leantime can be configured via environment variables in your `.env` file or through your container orchestrator. This guide covers database, file storage, email, authentication, theming, and system settings.

## S3 File Storage

Leantime supports local file storage (default) or Amazon S3 / S3-compatible storage for uploads.

**Prerequisites:**
- An S3 bucket in your preferred region
- AWS credentials with write permissions to the bucket

Add these settings to your `.env` file:

```env
## S3 File Uploads
LEAN_USE_S3=true                              # Enable S3 storage
LEAN_S3_KEY=''                                # AWS Access Key ID
LEAN_S3_SECRET=''                             # AWS Secret Access Key
LEAN_S3_BUCKET=''                             # Bucket name
LEAN_S3_REGION=''                             # AWS region (e.g., us-east-1)
LEAN_S3_FOLDER_NAME=''                        # Optional subfolder within bucket
LEAN_S3_END_POINT=''                          # Custom endpoint for S3-compatible services
LEAN_S3_USE_PATH_STYLE_ENDPOINT=true          # Endpoint style:
                                              # false → https://[bucket].[endpoint]
                                              # true  → https://[endpoint]/[bucket]
```

**Notes:**
- `LEAN_S3_FOLDER_NAME` is optional but useful if sharing a bucket with other applications
- After switching to S3, files previously uploaded locally will remain on the server but won't be accessible through Leantime
- For S3-compatible services (MinIO, DigitalOcean Spaces, Backblaze B2), set `LEAN_S3_END_POINT` to your provider's endpoint

---

## Email Configuration

Leantime uses email for user invitations, password resets, notifications, and project updates. SMTP is recommended for reliable delivery.

**→ See the [Email Configuration Guide](/installation/email-configuration/)** for complete setup instructions including:
- Provider-specific configurations (Gmail, Microsoft 365, SendGrid, Mailgun, Amazon SES)
- Port and security settings
- Testing and troubleshooting
- Email queue configuration

### Quick Reference

```env
LEAN_EMAIL_RETURN='noreply@yourdomain.com'
LEAN_EMAIL_USE_SMTP=true
LEAN_EMAIL_SMTP_HOSTS='smtp.example.com'
LEAN_EMAIL_SMTP_AUTH=true
LEAN_EMAIL_SMTP_USERNAME='your-email'
LEAN_EMAIL_SMTP_PASSWORD='your-password'
LEAN_EMAIL_SMTP_SECURE='tls'
LEAN_EMAIL_SMTP_PORT='587'
```

**Test email configuration:**
```bash
php ./bin/leantime email:testemail --address="test@example.com"
```

---

## Authentication (OIDC & LDAP)

Leantime supports single sign-on via OpenID Connect and enterprise directory integration via LDAP/Active Directory.

**→ See the [Authentication Configuration Guide](/installation/authentication-configuration/)** for complete setup including:
- OIDC provider examples (Keycloak, Authentik, Google, GitHub, Azure AD)
- LDAP/Active Directory configuration
- Field mapping and group role assignment
- Troubleshooting common issues

### Quick Reference

**OIDC:**
```env
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL=https://your-provider.com/
LEAN_OIDC_CLIENT_ID=your-client-id
LEAN_OIDC_CLIENT_SECRET=your-client-secret
```

Callback URL: `https://your-domain.com/oidc/callback`

**LDAP:**
```env
LEAN_LDAP_USE_LDAP=true
LEAN_LDAP_LDAP_TYPE=OL          # OL = OpenLDAP, AD = Active Directory
LEAN_LDAP_HOST=ldap.example.com
LEAN_LDAP_PORT=389
LEAN_LDAP_DN=CN=users,DC=example,DC=com
```

---

## Project Integrations (Webhooks & Messaging)

Leantime supports real-time project notifications to team communication platforms including **Telegram**, **Discord**, **Slack**, **Mattermost**, and **Zulip**.

These are managed per-project inside the Leantime web UI under **Projects → [Select Project] → Settings → Integrations**.

**→ See the [Project Integrations User Manual](/using-leantime/integrations/)** for complete setup guides, webhook configuration, Telegram bot setup, and troubleshooting.

---

## Theme Configuration

Customize Leantime's appearance with custom colors and logos:

```env
LEAN_LOGO_PATH='/dist/images/logo.svg'        # Main logo (SVG recommended)
LEAN_PRINT_LOGO_URL='/dist/images/logo.jpg'   # Print logo (must be JPG or PNG)
LEAN_DEFAULT_THEME='default'                  # Theme name
LEAN_PRIMARY_COLOR='#1b75bb'                  # Primary brand color
LEAN_SECONDARY_COLOR='#81B1A8'                # Secondary accent color
```

**Note:** Each person chooses light or dark mode, the font and a color scheme under **My Profile → Theme**. Your primary and secondary colors appear there as **Company Colors** (see [How do I change how Leantime looks?](/using-leantime/account-settings/#how-do-i-change-how-leantime-looks)).

---

## Site Name, Language & Timezone

Configure basic site settings:

```env
LEAN_SITENAME='Leantime'                      # Displayed in browser title and emails
LEAN_LANGUAGE='en-US'                         # Default language
LEAN_DEFAULT_TIMEZONE='America/Los_Angeles'   # Default timezone for dates/times
```

**Available languages:** Check the `app/Language/` directory for supported locales.

---

## Cron Jobs

Leantime's scheduled jobs send notification emails and webhooks, take daily report snapshots, and check plugin licenses and updates. The official Docker image runs them for you. On your own server, add this line to the web server user's crontab (`sudo crontab -u www-data -e`):

```bash
* * * * * cd /var/www/leantime && php ./bin/leantime schedule:run >> /dev/null 2>&1
```

Set `LEAN_APP_URL` too, so links in emails work. What each job does, what happens without cron, and when Redis helps: see [Scheduled jobs, the queue and Redis](/installation/scheduled-jobs-and-redis/).

---

## Plesk Nginx Configuration

If running Leantime on Plesk with Nginx, add these rewrite rules to **Additional nginx directives** under **Apache & nginx Settings**:

```nginx
if ($ssl_protocol = "") {
    rewrite ^/(.*) https://$server_name/$1 permanent;
}

rewrite ^/resetPassword$ /index.php?resetPassword=true;
rewrite ^/resetPassword/([^/\.]+)/?$ /index.php?resetPassword=true&hash=$1;
rewrite ^/install$ /index.php?install=true;
rewrite ^/install/([^/\.]+)/?$ /index.php?install=true;
rewrite ^/update /index.php?update=true;
rewrite ^/update/([^/\.]+)/?$ /index.php?update=true;
rewrite ^/?$ /index.php?act=dashboard.show;
rewrite ^/([^/\.]+)/([^/\.]+)/?$ /index.php?act=$1.$2;
rewrite ^/([^/\.]+)/([^/\.]+)/([^/\.]+)/?$ /index.php?act=$1.$2&id=$3;
```

---

## Telemetry

Leantime can optionally share anonymous usage data to help improve the software. No personally identifiable information is collected.

**Data collected:**
- Instance UUID (anonymous identifier)
- Leantime version and configured language
- Aggregate counts: users, projects, clients, tickets, milestones, comments, boards, timesheets
- Last user login timestamp

**Not collected:** Company names, user names, email addresses, IP addresses, or any content.

**Opt out:**
```env
LEAN_ALLOW_TELEMETRY=false
```

This removes your instance ID and stops all telemetry submission.

---

## Session Configuration

Configure session handling for security and compatibility:

```env
LEAN_SESSION_PASSWORD='your-secret-key'       # Leantime's secret key: a long random value of your own
LEAN_SESSION_EXPIRATION=480                   # Minutes without activity before sign-out (480 = 8 hours)
LEAN_SESSION_SECURE=true                      # Require HTTPS for session cookies
```

**Important:** Set `LEAN_SESSION_SECURE=true` when running over HTTPS, `false` only for local development over HTTP. For what to check before people use your server, see [Secure your Leantime server](/installation/security-checklist/).

---

## Debug Mode

Enable detailed error logging for troubleshooting:

```env
LEAN_DEBUG=1
```

Logs are written to `storage/logs/leantime-YYYY-MM-DD.log`

**Warning:** Do not enable debug mode in production as it may expose sensitive information.

---

## All Environment Variables Reference

For a complete list of all available environment variables, see the [sample.env](https://github.com/Leantime/leantime/blob/master/config/sample.env) file in the Leantime repository.
