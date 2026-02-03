# Authentication Configuration

Leantime supports multiple authentication methods to integrate with your organization's identity infrastructure. This guide covers OpenID Connect (OIDC) and LDAP configuration.

## Authentication Methods Overview

| Method | Best For | Requirements |
|--------|----------|--------------|
| **Built-in** | Small teams, simple setup | None (default) |
| **OIDC** | SSO with modern identity providers | OIDC-compliant provider |
| **LDAP** | Enterprise Active Directory / OpenLDAP | LDAP server access |

---

## OpenID Connect (OIDC)

OIDC enables single sign-on (SSO) with identity providers like Keycloak, Authentik, Google Workspace, Azure AD, and others.

### Quick Start

Add these to your `.env` file or environment variables:

```env
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL=https://your-provider.com/
LEAN_OIDC_CLIENT_ID=your-client-id
LEAN_OIDC_CLIENT_SECRET=your-client-secret
```

**Callback URL:** Configure your identity provider to allow:
```
https://your-leantime-domain.com/oidc/callback
```

### Provider-Specific Configuration

#### Keycloak

```env
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL=https://keycloak.example.com/realms/your-realm/
LEAN_OIDC_CLIENT_ID=leantime
LEAN_OIDC_CLIENT_SECRET=your-client-secret
```

**Keycloak setup:**
1. Create a new client in your realm
2. Set Access Type to "confidential"
3. Add the callback URL to Valid Redirect URIs
4. Copy the client secret from the Credentials tab

#### Authentik

```env
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL=https://auth.example.com/application/o/leantime/
LEAN_OIDC_CLIENT_ID=your-client-id
LEAN_OIDC_CLIENT_SECRET=your-client-secret
```

**Important:** Do NOT add an SSL certificate in the Authentik provider settings—let Authentik handle certificate discovery automatically.

#### Google / Google Workspace

```env
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL=https://accounts.google.com/
LEAN_OIDC_CLIENT_ID=your-client-id.apps.googleusercontent.com
LEAN_OIDC_CLIENT_SECRET=your-client-secret
LEAN_OIDC_JWKS_URL_OVERRIDE=https://www.googleapis.com/oauth2/v1/certs
```

**Google Cloud Console setup:**
1. Go to APIs & Services → Credentials
2. Create OAuth 2.0 Client ID
3. Set application type to "Web application"
4. Add the callback URL to Authorized redirect URIs

#### GitHub

```env
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL=https://token.actions.githubusercontent.com/
LEAN_OIDC_AUTH_URL_OVERRIDE=https://github.com/login/oauth/authorize
LEAN_OIDC_TOKEN_URL_OVERRIDE=https://github.com/login/oauth/access_token
LEAN_OIDC_USERINFO_URL_OVERRIDE=https://api.github.com/user,https://api.github.com/user/emails
LEAN_OIDC_SCOPES=user:email
LEAN_OIDC_FIELD_EMAIL=0.email
LEAN_OIDC_CLIENT_ID=your-github-client-id
LEAN_OIDC_CLIENT_SECRET=your-github-client-secret
```

#### Azure AD / Entra ID

```env
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL=https://login.microsoftonline.com/your-tenant-id/v2.0/
LEAN_OIDC_CLIENT_ID=your-application-id
LEAN_OIDC_CLIENT_SECRET=your-client-secret
```

### All OIDC Environment Variables

```env
## Required
LEAN_OIDC_ENABLE=true                          # Enable OIDC authentication
LEAN_OIDC_PROVIDER_URL=                        # Provider's base URL (must have trailing slash)
LEAN_OIDC_CLIENT_ID=                           # Client ID from your provider
LEAN_OIDC_CLIENT_SECRET=                       # Client secret from your provider

## URL Overrides (optional - auto-discovered from .well-known if not set)
LEAN_OIDC_AUTH_URL_OVERRIDE=                   # Authorization endpoint
LEAN_OIDC_TOKEN_URL_OVERRIDE=                  # Token endpoint
LEAN_OIDC_USERINFO_URL_OVERRIDE=               # Userinfo endpoint (comma-separated for multiple)
LEAN_OIDC_JWKS_URL_OVERRIDE=                   # JWKS endpoint for key validation

## Certificate Overrides (optional - for custom RSA validation)
LEAN_OIDC_CERTIFICATE_STRING=                  # Public key as string
LEAN_OIDC_CERTIFICATE_FILE=                    # Path to public key file

## Scope and Field Mapping (optional)
LEAN_OIDC_SCOPES=                              # Custom scopes (default: openid profile email)
LEAN_OIDC_FIELD_EMAIL=                         # JSON path to email field
LEAN_OIDC_FIELD_FIRSTNAME=                     # JSON path to first name field
LEAN_OIDC_FIELD_LASTNAME=                      # JSON path to last name field
```

**Field mapping note:** Use dot notation for nested fields, e.g., `user.profile.email`

### OIDC Troubleshooting

#### Infinite Redirect Loop

**Symptoms:** Browser keeps redirecting between Leantime and provider without logging in.

**Solutions:**
1. Verify the `.well-known/openid-configuration` endpoint is accessible:
   ```bash
   curl https://your-provider.com/.well-known/openid-configuration
   ```
2. Ensure `LEAN_OIDC_PROVIDER_URL` has a trailing slash
3. Check that `LEAN_APP_URL` matches your actual domain (including https)
4. Verify `LEAN_SESSION_SECURE` matches your HTTPS setup

#### Owner Role Gets Overwritten

**Cause:** When OIDC is enabled after initial setup, existing user roles may be overwritten.

**Prevention:** Enable OIDC during initial Leantime installation.

**Fix:** Run this SQL query to restore owner role:
```sql
UPDATE zp_user SET role='owner' WHERE username='admin';
```

---

## LDAP Configuration

**Since: v2.1.9**

Leantime supports LDAP integration with OpenLDAP and Active Directory for centralized user authentication.

### Quick Start

```env
LEAN_LDAP_USE_LDAP=true
LEAN_LDAP_LDAP_TYPE=OL
LEAN_LDAP_HOST=ldap.example.com
LEAN_LDAP_PORT=389
LEAN_LDAP_DN=CN=users,DC=example,DC=com
```

### Basic Configuration

```env
## Enable LDAP
LEAN_LDAP_USE_LDAP=true

## Directory Type
LEAN_LDAP_LDAP_TYPE='OL'          # OL = OpenLDAP, AD = Active Directory

## Connection Settings
LEAN_LDAP_HOST='ldap.example.com' # LDAP server hostname (FQDN)
LEAN_LDAP_PORT=389                # Port: 389 (standard), 636 (LDAPS)

## Alternative: Use URI instead of host/port
LEAN_LDAP_URI='ldap://ldap.example.com:389'

## User Location
LEAN_LDAP_DN='CN=users,DC=example,DC=com'

## Domain (optional - appended to usernames during login)
LEAN_LDAP_LDAP_DOMAIN='example.com'
```

### Field Mapping

Configure how Leantime maps LDAP attributes to user fields:

```env
LEAN_LDAP_KEYS='{
  "username": "cn",
  "groups": "memberOf",
  "email": "mail",
  "firstname": "givenName",
  "lastname": "sn",
  "phonenumber": "telephoneNumber"
}'
```

**Common attribute mappings:**

| Leantime Field | OpenLDAP | Active Directory |
|----------------|----------|------------------|
| username | `cn` or `uid` | `sAMAccountName` |
| email | `mail` | `mail` or `userPrincipalName` |
| firstname | `givenName` | `givenName` |
| lastname | `sn` | `sn` |
| groups | `memberOf` | `memberOf` |

### Group Role Assignment

Map LDAP groups to Leantime roles:

```env
LEAN_LDAP_GROUP_ASSIGNMENT='{
  "5": {
    "ltRole": "readonly",
    "ldapRole": "readonly"
  },
  "10": {
    "ltRole": "commenter",
    "ldapRole": "commenter"
  },
  "20": {
    "ltRole": "editor",
    "ldapRole": "editor"
  },
  "30": {
    "ltRole": "manager",
    "ldapRole": "manager"
  },
  "40": {
    "ltRole": "admin",
    "ldapRole": "administrators"
  },
  "50": {
    "ltRole": "owner",
    "ldapRole": "administrators"
  }
}'
```

**Role levels:** `5` (readonly), `10` (commenter), `20` (editor), `30` (manager), `40` (admin), `50` (owner)

### Default Role

Set the default role for new users:

```env
LEAN_LDAP_DEFAULT_ROLE_KEY=20    # Editor role
```

### Active Directory Example

```env
LEAN_LDAP_USE_LDAP=true
LEAN_LDAP_LDAP_TYPE='AD'
LEAN_LDAP_HOST='dc01.corp.example.com'
LEAN_LDAP_PORT=389
LEAN_LDAP_DN='OU=Users,DC=corp,DC=example,DC=com'
LEAN_LDAP_LDAP_DOMAIN='corp.example.com'

LEAN_LDAP_KEYS='{
  "username": "sAMAccountName",
  "groups": "memberOf",
  "email": "userPrincipalName",
  "firstname": "givenName",
  "lastname": "sn",
  "phonenumber": "telephoneNumber"
}'

LEAN_LDAP_GROUP_ASSIGNMENT='{
  "20": {"ltRole": "editor", "ldapRole": "Leantime-Users"},
  "30": {"ltRole": "manager", "ldapRole": "Leantime-Managers"},
  "40": {"ltRole": "admin", "ldapRole": "Leantime-Admins"}
}'

LEAN_LDAP_DEFAULT_ROLE_KEY=20
```

### LDAP Troubleshooting

#### "Unable to bind to LDAP server"

Test connectivity:
```bash
telnet ldap.example.com 389
```

#### Users Can't Log In

1. Verify the DN path is correct
2. Check the username attribute matches what users enter
3. Enable debug mode: `LEAN_DEBUG=1`

---

## Getting Help

1. Enable debug logging: `LEAN_DEBUG=1`
2. Check logs at `storage/logs/leantime-YYYY-MM-DD.log`
3. Search [GitHub Issues](https://github.com/Leantime/leantime/issues)
4. Ask in [Discord](https://discord.gg/4zMzJtAq9z) #self-hosted channel
