# Email & SMTP Configuration

Leantime uses email for user invitations, password resets, notifications, and project updates. This guide covers how to configure email correctly and troubleshoot common issues.

## Email Methods

Leantime supports two methods for sending email:

| Method | Pros | Cons |
|--------|------|------|
| **SMTP** (Recommended) | Better deliverability, more reliable, detailed error logging | Requires SMTP credentials |
| **PHP mail()** | Simpler setup, no credentials needed | Often blocked by hosts, poor deliverability |

## Quick Start: Common Provider Configurations

### Gmail / Google Workspace

```env
LEAN_EMAIL_RETURN='your-email@gmail.com'
LEAN_EMAIL_USE_SMTP=true
LEAN_EMAIL_SMTP_HOSTS='smtp.gmail.com'
LEAN_EMAIL_SMTP_AUTH=true
LEAN_EMAIL_SMTP_USERNAME='your-email@gmail.com'
LEAN_EMAIL_SMTP_PASSWORD='your-app-password'
LEAN_EMAIL_SMTP_AUTO_TLS=true
LEAN_EMAIL_SMTP_SECURE='tls'
LEAN_EMAIL_SMTP_PORT='587'
```

> **Important:** Gmail requires an [App Password](https://support.google.com/accounts/answer/185833) if 2-Step Verification is enabled. Your regular password will not work.

### Microsoft 365 / Outlook

```env
LEAN_EMAIL_RETURN='your-email@yourdomain.com'
LEAN_EMAIL_USE_SMTP=true
LEAN_EMAIL_SMTP_HOSTS='smtp.office365.com'
LEAN_EMAIL_SMTP_AUTH=true
LEAN_EMAIL_SMTP_USERNAME='your-email@yourdomain.com'
LEAN_EMAIL_SMTP_PASSWORD='your-password'
LEAN_EMAIL_SMTP_AUTO_TLS=true
LEAN_EMAIL_SMTP_SECURE='tls'
LEAN_EMAIL_SMTP_PORT='587'
```

### SendGrid

```env
LEAN_EMAIL_RETURN='noreply@yourdomain.com'
LEAN_EMAIL_USE_SMTP=true
LEAN_EMAIL_SMTP_HOSTS='smtp.sendgrid.net'
LEAN_EMAIL_SMTP_AUTH=true
LEAN_EMAIL_SMTP_USERNAME='apikey'
LEAN_EMAIL_SMTP_PASSWORD='your-sendgrid-api-key'
LEAN_EMAIL_SMTP_AUTO_TLS=true
LEAN_EMAIL_SMTP_SECURE='tls'
LEAN_EMAIL_SMTP_PORT='587'
```

### Mailgun

```env
LEAN_EMAIL_RETURN='noreply@yourdomain.com'
LEAN_EMAIL_USE_SMTP=true
LEAN_EMAIL_SMTP_HOSTS='smtp.mailgun.org'
LEAN_EMAIL_SMTP_AUTH=true
LEAN_EMAIL_SMTP_USERNAME='postmaster@yourdomain.com'
LEAN_EMAIL_SMTP_PASSWORD='your-mailgun-password'
LEAN_EMAIL_SMTP_AUTO_TLS=true
LEAN_EMAIL_SMTP_SECURE='tls'
LEAN_EMAIL_SMTP_PORT='587'
```

### Amazon SES

```env
LEAN_EMAIL_RETURN='noreply@yourdomain.com'
LEAN_EMAIL_USE_SMTP=true
LEAN_EMAIL_SMTP_HOSTS='email-smtp.us-east-1.amazonaws.com'
LEAN_EMAIL_SMTP_AUTH=true
LEAN_EMAIL_SMTP_USERNAME='your-ses-smtp-username'
LEAN_EMAIL_SMTP_PASSWORD='your-ses-smtp-password'
LEAN_EMAIL_SMTP_AUTO_TLS=true
LEAN_EMAIL_SMTP_SECURE='tls'
LEAN_EMAIL_SMTP_PORT='587'
```

> **Note:** Replace `us-east-1` with your SES region.

## Port & Security Settings

This is the most common source of configuration issues. Use the following combinations:

| Port | Security Setting | Protocol | When to Use |
|------|-----------------|----------|-------------|
| **587** | `LEAN_EMAIL_SMTP_SECURE='tls'` | STARTTLS | Most modern providers (recommended) |
| **465** | `LEAN_EMAIL_SMTP_SECURE='ssl'` | Implicit SSL | Older providers, legacy systems |
| **25** | `LEAN_EMAIL_SMTP_SECURE=''` | None | Unencrypted (not recommended, often blocked) |
| **2525** | `LEAN_EMAIL_SMTP_SECURE='tls'` | STARTTLS | Alternative when 587 is blocked |

**Common mistake:** Using port 465 with `tls`, or port 587 with `ssl`. These are not interchangeable—each port expects a specific security protocol.

## All Email Environment Variables

```env
## Required Settings
LEAN_EMAIL_RETURN='noreply@yourdomain.com'    # From address for all outgoing emails
LEAN_EMAIL_USE_SMTP=true                       # true = use SMTP, false = use PHP mail()

## SMTP Server Settings
LEAN_EMAIL_SMTP_HOSTS='smtp.example.com'       # Your SMTP server hostname
LEAN_EMAIL_SMTP_PORT='587'                     # Port number (see table above)
LEAN_EMAIL_SMTP_SECURE='tls'                   # Security: 'tls', 'ssl', or '' (none)

## Authentication
LEAN_EMAIL_SMTP_AUTH=true                      # Enable authentication (most servers require this)
LEAN_EMAIL_SMTP_USERNAME='your-username'       # Usually your full email address
LEAN_EMAIL_SMTP_PASSWORD='your-password'       # Password or app-specific password

## Optional Settings
LEAN_EMAIL_SMTP_AUTO_TLS=true                  # Auto-upgrade to TLS if available
LEAN_EMAIL_SMTP_SSLNOVERIFY=false              # Set to true only for self-signed certificates
```

> **Security note:** Set `LEAN_EMAIL_SMTP_SSLNOVERIFY=true` only if you're using self-signed certificates in a development environment. For production, always use valid SSL certificates.

## Testing Your Configuration

### Method 1: CLI Test Email

Use the built-in test command to verify your email configuration:

```bash
# For Docker installations
docker exec -it leantime php ./bin/leantime email:testemail --address="test@example.com"

# For package installations
cd /var/www/html  # or your Leantime directory
php ./bin/leantime email:testemail --address="test@example.com"
```

### Method 2: Invite a Test User

1. Go to **Settings > Users**
2. Click **Invite User**
3. Enter an email address you can access
4. Check if the invitation email arrives

## Troubleshooting

### Enable Debug Mode

Add this to your `.env` file to see detailed email logs:

```env
LEAN_DEBUG=1
```

### Finding Log Files

- **Docker:** Run `docker logs leantime` or check inside container at `/var/www/html/storage/logs/`
- **Package install:** Check `/var/www/html/storage/logs/leantime-YYYY-MM-DD.log`

Watch logs in real-time while testing:

```bash
# Docker
docker exec -it leantime tail -f /var/www/html/storage/logs/leantime-$(date +%Y-%m-%d).log

# Package install
tail -f /var/www/html/storage/logs/leantime-$(date +%Y-%m-%d).log
```

### Common Issues and Solutions

#### "SMTP connect() failed"

**Possible causes:**
- Wrong port/security combination
- Firewall blocking outbound connections
- Incorrect hostname

**Solutions:**
1. Verify you're using the correct port and security combination (see table above)
2. Try switching from port 465/SSL to port 587/TLS (or vice versa)
3. Test if the port is reachable: `telnet smtp.example.com 587`

#### Emails Sent But Not Received

**Check:**
1. Recipient's spam/junk folder
2. Your domain's SPF and DKIM records
3. Whether the SMTP provider requires domain verification

#### "Connection timed out"

**Possible causes:**
- Firewall blocking the SMTP port
- Incorrect hostname
- VPS provider blocking SMTP (common with budget hosting)

**Solutions:**
1. Contact your hosting provider about SMTP restrictions
2. Use an external SMTP service (SendGrid, Mailgun, etc.)
3. Try port 2525 as an alternative

#### Configuration Changes Not Taking Effect

**For Docker installations:**

```bash
docker-compose down
docker-compose up -d
```

**For package installations:**

```bash
# Clear any cached configuration
php ./bin/leantime cache:clear

# Restart PHP-FPM (adjust version as needed)
sudo systemctl restart php8.2-fpm
```

#### Verify Environment Variables Are Loaded

```bash
# Docker
docker exec -it leantime printenv | grep LEAN_EMAIL

# Package install (from Leantime directory)
php -r "echo getenv('LEAN_EMAIL_USE_SMTP');"
```

## Shared Hosting Notes

Many shared hosting providers restrict or block SMTP connections. Options include:

1. **Use the host's built-in SMTP** — Check your hosting control panel (cPanel, Plesk) for email routing settings
2. **Use an external SMTP service** — SendGrid, Mailgun, and Postmark offer free tiers that work around hosting restrictions
3. **Fall back to PHP mail()** — Set `LEAN_EMAIL_USE_SMTP=false` (less reliable but may work)

## Email Queue Configuration

By default, Leantime sends emails synchronously (immediately when triggered). For better performance with many users, you can enable the queue system:

```env
LEAN_QUEUE_CONNECTION=database
```

When using `database` queue, you must run the queue worker. Add this to your crontab:

```bash
* * * * * cd /var/www/html && php ./bin/leantime queue:work --stop-when-empty
```

See [Cron Jobs](installation/configuration.md#cron-jobs) for more details.

## Need Help?

If you're still having issues after trying the troubleshooting steps above:

1. Check the [Common Problems](installation/common-issues.md) page
2. Search the [GitHub Issues](https://github.com/leantime/leantime/issues)
3. Ask in the [Discord Community](https://discord.gg/4zMzJtAq9z) #self-hosted channel

When asking for help, please include:
- Your email configuration (with passwords redacted)
- The error message from the logs
- Your hosting environment (Docker, shared hosting, VPS, etc.)
