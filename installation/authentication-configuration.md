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

# Create a Leantime account on a user's first OIDC login (default: false)
LEAN_OIDC_CREATE_USER=true
# Role for those accounts (default: 20, editor)
LEAN_OIDC_DEFAULT_ROLE=20
```

Without `LEAN_OIDC_CREATE_USER=true`, only people who already have a Leantime account (with the same email) can sign in. Everyone else gets a "user not found" error.

**Callback URL:** Configure your identity provider to allow:
```
https://your-leantime-domain.com/oidc/callback
```

**Key algorithms:** Configure your identity provider to sign tokens with **RS256** (RSA with SHA-256). Other algorithms, including elliptic-curve keys (ES256) and RS384/RS512, are rejected.

**PKCE:** Leantime sends PKCE (S256) since v3.13.2, so providers that require it work. On older versions, disable PKCE for the Leantime client in your identity provider.

**How users are matched:** Leantime matches the email address from the provider to the Leantime user's email. If a user's email changes at the provider, Leantime treats them as a new person. Change their email in Leantime to match before they next sign in.

**Verified emails:** If the provider reports `email_verified: false`, the login is refused. Set `LEAN_OIDC_REQUIRE_VERIFIED_EMAIL=false` only if your provider marks real users as unverified.

### Provider-Specific Configuration

#### Keycloak

```env
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL=https://keycloak.example.com/realms/your-realm/
LEAN_OIDC_CLIENT_ID=leantime
LEAN_OIDC_CLIENT_SECRET=your-client-secret
```

**Keycloak setup:**
1. Create a new OpenID Connect client in your realm
2. Turn on **Client authentication** (called Access Type "confidential" in Keycloak 18 and earlier)
3. Add the callback URL to Valid Redirect URIs
4. Copy the client secret from the Credentials tab

Keycloak users whose email isn't marked as verified are refused (see **Verified emails** above).

#### Authentik

```env
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL=https://auth.example.com/application/o/leantime/
LEAN_OIDC_CLIENT_ID=your-client-id
LEAN_OIDC_CLIENT_SECRET=your-client-secret
```

**Authentik setup:** In the OAuth2/OpenID provider, select an RSA certificate as the **Signing Key** and leave the **Encryption Key** empty. Without a signing key, Authentik signs with HS256, which Leantime rejects. With an encryption key, tokens are encrypted, and login fails with errors like "Undefined array key kid" or "JWT could not be decoded".

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

GitHub sign-in is plain OAuth 2.0, not OpenID Connect, so it needs the URL overrides below. Leantime never contacts `LEAN_OIDC_PROVIDER_URL` for GitHub, but it has to be set.

```env
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL=https://github.com/
LEAN_OIDC_AUTH_URL_OVERRIDE=https://github.com/login/oauth/authorize
LEAN_OIDC_TOKEN_URL_OVERRIDE=https://github.com/login/oauth/access_token
LEAN_OIDC_USERINFO_URL_OVERRIDE=https://api.github.com/user,https://api.github.com/user/emails
LEAN_OIDC_SCOPES=user:email
LEAN_OIDC_FIELD_EMAIL=0.email
LEAN_OIDC_FIELD_FIRSTNAME=name
LEAN_OIDC_CLIENT_ID=your-github-client-id
LEAN_OIDC_CLIENT_SECRET=your-github-client-secret
```

> **Warning:** `0.email` is the first address on the user's GitHub account. That isn't necessarily their primary or a verified address. Because users are matched by email, only use this when people's first GitHub email is their work address. The [AdvancedAuth plugin's GitHub provider](installation/plugin-installation.md#advanced-auth-plugin) uses the primary, verified email instead.

#### Azure AD / Entra ID

```env
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL=https://login.microsoftonline.com/your-tenant-id/v2.0/
LEAN_OIDC_CLIENT_ID=your-application-id
LEAN_OIDC_CLIENT_SECRET=your-client-secret
```

If sign-in fails because no email is available, your tenant isn't sending the optional `email` claim. Add `email` as an optional ID token claim in the app registration (**Token configuration → Add optional claim**), or set `LEAN_OIDC_FIELD_EMAIL=preferred_username` if users' sign-in names are their email addresses.

### All OIDC Environment Variables

```env
## Required
LEAN_OIDC_ENABLE=true                          # Enable OIDC authentication
LEAN_OIDC_PROVIDER_URL=                        # Provider's issuer / base URL (a trailing slash is optional)
LEAN_OIDC_CLIENT_ID=                           # Client ID from your provider
LEAN_OIDC_CLIENT_SECRET=                       # Client secret from your provider

## Accounts
LEAN_OIDC_CREATE_USER=false                    # Create accounts on first login
LEAN_OIDC_DEFAULT_ROLE=20                      # Role for created accounts (5 readonly ... 50 owner)
LEAN_OIDC_REQUIRE_VERIFIED_EMAIL=true          # Refuse logins whose email_verified claim is false

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
LEAN_OIDC_FIELD_EMAIL=                         # Path to the email field (default: email)
LEAN_OIDC_FIELD_FIRSTNAME=                     # Path to the first name field (default: given_name)
LEAN_OIDC_FIELD_LASTNAME=                      # Path to the last name field (default: family_name)
LEAN_OIDC_FIELD_PHONE=                         # Path to the phone field
LEAN_OIDC_FIELD_JOBTITLE=                      # Path to the job title field
LEAN_OIDC_FIELD_JOBLEVEL=                      # Path to the job level field
LEAN_OIDC_FIELD_DEPARTMENT=                    # Path to the department field

## Network (troubleshooting only)
LEAN_OIDC_SKIP_TLS_VERIFY=false                # Never enable in production
```

**Field mapping note:** Use dot notation for nested fields, e.g., `user.profile.email`. When the provider returns an ID token, fields are read from its claims and the userinfo URL isn't called.

### OIDC Troubleshooting

#### Redirect Loop or "Too Many Redirects"

**Symptoms:** The browser keeps bouncing between Leantime and the provider, or shows `ERR_TOO_MANY_REDIRECTS`.

**Solutions:**
1. Check that the **Leantime server** (not just your browser) can reach the provider's discovery document. In Docker, run this inside the Leantime container:
   ```bash
   curl https://your-provider.com/.well-known/openid-configuration
   ```
   If the provider is only reachable by an internal hostname, fix the container's networking or set the `*_URL_OVERRIDE` variables.
2. Check that `LEAN_APP_URL` matches your actual domain (including https).
3. If `LEAN_SESSION_SECURE=true` is set but users reach Leantime over plain HTTP, the browser never sends the session cookie back and every request starts a new login. Remove the setting (it's auto-detected) or serve Leantime over HTTPS.

#### "User not found"

The person has no Leantime account with that email and `LEAN_OIDC_CREATE_USER` isn't `true`. Create the user with the same email, or turn on account creation.

#### New Users Can't See Any Projects

Accounts created on first login aren't added to any projects or client. Add them to projects, or assign a client, in user management.

#### Logging Out of Leantime Doesn't Log Out of the Provider

Leantime ends only its own session. The next OIDC login signs the user straight back in while their provider session is active. To switch users, sign out at the provider too.

#### Owner Role Was Reset After Enabling OIDC

Older Leantime versions could reset an existing user's role on OIDC login. Current versions keep the existing role. To restore an owner, run this with the account's email (roles are stored as numbers: 50 is owner):
```sql
UPDATE zp_user SET role = '50' WHERE username = 'owner@example.com';
```

---

## LDAP Configuration

**Since: v2.1.9**

Leantime supports LDAP integration with OpenLDAP and Active Directory for centralized user authentication. The PHP `ldap` extension must be installed.

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

## Connection Settings (plain LDAP, port 389)
LEAN_LDAP_HOST='ldap.example.com' # LDAP server hostname (FQDN)
LEAN_LDAP_PORT=389

## Alternative: Use a URI instead of host/port. Required for LDAPS (TLS):
LEAN_LDAP_URI='ldaps://ldap.example.com:636'

## User Location
LEAN_LDAP_DN='CN=users,DC=example,DC=com'

## Domain (Active Directory only - appended to usernames typed without @domain)
LEAN_LDAP_LDAP_DOMAIN='example.com'
```

**LDAPS:** Setting `LEAN_LDAP_PORT=636` with `LEAN_LDAP_HOST` does **not** turn on TLS. Use `LEAN_LDAP_URI='ldaps://host:636'`. The Leantime server must also trust the directory's certificate (its CA must be in the system trust store, or set `TLS_CACERT` in `ldap.conf`).

**How users sign in:** With `AD`, users can type `username` or `username@domain`. With `OL`, Leantime binds as `{username attribute}={what they typed},{LEAN_LDAP_DN}`, and `LEAN_LDAP_LDAP_DOMAIN` is not used.

### Field Mapping

Configure how Leantime maps LDAP attributes to user fields. Write the JSON on **one line, in single quotes**. Multi-line or escaped JSON is a common reason for the "Ldap Keys failed to parse" error, and Leantime then silently uses the defaults.

```env
LEAN_LDAP_KEYS='{"username":"uid","groups":"memberof","email":"mail","firstname":"givenname","lastname":"sn","phone":"telephonenumber","jobTitle":"title","jobLevel":"level","department":"department"}'
```

- **Use lowercase attribute names** (`memberof`, `userprincipalname`, `givenname`). PHP returns LDAP attribute names in lowercase. In current versions, mixed-case names like `memberOf` or `userPrincipalName` fail for email and groups: login breaks, or nobody gets a group role.
- **Include all nine keys.** In current versions, a missing key breaks every login with a server error.
- **The Leantime setting wins.** If the `companysettings.ldap.ldapKeys` setting exists in the database, it is used instead of `LEAN_LDAP_KEYS`.

**Common attribute mappings:**

| Leantime Field | OpenLDAP | Active Directory |
|----------------|----------|------------------|
| username | `uid` or `cn` | `samaccountname` |
| email | `mail` | `mail` or `userprincipalname` |
| firstname | `givenname` | `givenname` |
| lastname | `sn` | `sn` |
| groups | `memberof` | `memberof` |
| phone | `telephonenumber` | `telephonenumber` |

### Group Role Assignment

Map LDAP groups to Leantime roles. Each `ldapRole` is matched as text inside the user's group DNs (`memberof` values), so use a distinctive part of the DN, for example `CN=Leantime-Admins`. In current versions the match is case-sensitive.

```env
LEAN_LDAP_GROUP_ASSIGNMENT='{"30":{"ltRole":"manager","ldapRole":"CN=Leantime-Managers"},"40":{"ltRole":"admin","ldapRole":"CN=Leantime-Admins"},"50":{"ltRole":"owner","ldapRole":"CN=Leantime-Owners"}}'
```

**Role keys:** `5` (readonly), `10` (commenter), `20` (editor), `30` (manager), `40` (admin), `50` (owner)

**Rules:**
- A user gets the **highest** role whose group matches.
- Only roles **above** `LEAN_LDAP_DEFAULT_ROLE_KEY` can be assigned. With the default of 20, mappings for 5 and 10 never apply.
- Group roles are applied **only when the account is created** on the user's first login. Later group changes don't update the role. Change it in user management.
- Give every role its own group. If two roles use the same `ldapRole`, the higher one always wins.

### Default Role

The role new users get when none of their groups matches. It is also the minimum: group mappings can only raise it.

```env
LEAN_LDAP_DEFAULT_ROLE_KEY=20    # Editor role
```

### Active Directory Example

```env
LEAN_LDAP_USE_LDAP=true
LEAN_LDAP_LDAP_TYPE='AD'
LEAN_LDAP_URI='ldaps://dc01.corp.example.com:636'
LEAN_LDAP_DN='OU=Users,DC=corp,DC=example,DC=com'
LEAN_LDAP_LDAP_DOMAIN='corp.example.com'

LEAN_LDAP_KEYS='{"username":"samaccountname","groups":"memberof","email":"userprincipalname","firstname":"givenname","lastname":"sn","phone":"telephonenumber","jobTitle":"title","jobLevel":"level","department":"department"}'

LEAN_LDAP_GROUP_ASSIGNMENT='{"30":{"ltRole":"manager","ldapRole":"CN=Leantime-Managers"},"40":{"ltRole":"admin","ldapRole":"CN=Leantime-Admins"}}'

LEAN_LDAP_DEFAULT_ROLE_KEY=20
```

### LDAP Troubleshooting

Turn on `LEAN_DEBUG=1` first: LDAP connection and bind errors are only written to the log in debug mode.

#### Users Get "Wrong Username or Password"

If the LDAP bind fails, Leantime quietly falls back to its own user database, so the user sees the normal login error. Check:
1. The PHP `ldap` extension is installed (the log says "Can't use ldap. Extension not installed" if not).
2. The server is reachable from the Leantime server: `telnet ldap.example.com 389` (or 636 for LDAPS).
3. `LEAN_LDAP_DN` and the `username` attribute match what users type.
4. For LDAPS, the certificate is trusted (see **LDAPS** above).

#### "Could Not Retrieve User by Email"

The bind worked, but the `email` attribute was empty. Use the lowercase attribute name (`mail` or `userprincipalname`), and check that users have that attribute set.

#### Everyone Gets the Default Role

- Write `groups` as lowercase `memberof`.
- Make each `ldapRole` match text in the group DN exactly, including case.
- Roles are only assigned when the account is created. Existing users keep their role.

#### "Ldap Keys Failed to Parse" or "Group Assignment Array Failed to Parse" in the Log

The JSON isn't valid, so Leantime uses its defaults. Write it on one line in single quotes, as in the examples above.

---

## General Login Troubleshooting

#### Correct Password, but the Login Page Just Reloads

The session cookie isn't being kept:
- If `LEAN_SESSION_SECURE=true` is set but you serve plain HTTP, the browser drops the cookie. Remove the setting (it's auto-detected) or use HTTPS.
- Leave `LEAN_APP_DIR` empty unless Leantime really runs in a subfolder. A wrong value sets the cookie for the wrong path.

#### There's No Password Field on the Login Page

Either `LEAN_DISABLE_LOGIN_FORM=true` is set, or the AdvancedAuth plugin's **Hide Login Form** setting is on. See the [AdvancedAuth plugin docs](installation/plugin-installation.md#advanced-auth-plugin) for how to turn it back on from the server.

---

## Getting Help

1. Enable debug logging: `LEAN_DEBUG=1`
2. Check logs at `storage/logs/leantime-YYYY-MM-DD.log`
3. Search [GitHub Issues](https://github.com/Leantime/leantime/issues)
4. Ask in [Discord](https://discord.gg/4zMzJtAq9z) #self-hosted channel
