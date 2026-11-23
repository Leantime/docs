# Advanced Authentication

Advanced Authentication lets your team sign in to a self-hosted Leantime with the accounts they already have: Google, Microsoft, GitHub, Okta, SAML 2.0 and more. It's also what lets the Leantime mobile app sign in to your server.

## What does it add?

- **The Leantime Mobile app.** On a self-hosted server, the app for [iPhone](https://apps.apple.com/app/leantime-mobile/id6773767264) and [Android](https://play.google.com/store/apps/details?id=io.leantime.mobile) can't sign in without this plugin, with a password or with a sign-in provider. With it, your team signs in on their phones, two-factor authentication works there too, and you can turn on phone notifications (see [Set up the mobile app on a self-hosted server](installation/mobile-app-setup.md)).
- **Sign-in buttons for the accounts people already have:** Google, Microsoft, GitHub, GitLab, Gitea, Okta, Keycloak, Authentik, Auth0, PropelAuth and eduID.
- **SAML 2.0 single sign-on**, for identity providers that use SAML. In the browser only for now: SAML isn't available in the mobile app yet.

If you only need single sign-on in the browser through an OpenID Connect provider (Keycloak, Authentik, Entra ID and others) or LDAP, that's built into Leantime; see [Authentication](installation/authentication-configuration.md). You need this plugin for the mobile app, the ready-made sign-in buttons and SAML.

## Do I have it on Leantime Cloud?

No, and you don't need to install it there: Leantime Cloud has its own sign-in. Advanced Authentication is for self-hosted Leantime.

## How do I install it on my own server?

- **Leantime version:** any Leantime 3 release; the mobile app's provider buttons need Leantime 3.10.2 or later and Advanced Authentication 1.4.0 or later. To check your Leantime version, click the **?** (help) icon at the top right; the version is under **System**.
- **Get a license:** on the Leantime Marketplace it's called [Advanced Authentication](https://marketplace.leantime.io/product/advanced-auth/). The license is sized by the number of users in your Leantime (see [What counts as a user?](installation/plugin-licenses.md#what-counts-as-a-user-for-a-plugin-license)).
- **Install it** from **Company → Leantime Apps** with the license key (see [Installing from the Marketplace](installation/plugin-installation.md#installing-from-the-marketplace)), or upload it by hand (see [Manual plugin installation](installation/plugin-installation.md#manual-plugin-installation)).
- **Set up your sign-in providers** in `config/.env`, as described below. The plugin has no scheduled jobs.

## How do I keep it up to date?

Leantime checks the marketplace for plugin updates every day and tells administrators; turn on **Update plugins automatically** in **My Apps** to have minor updates installed for you (see [How do plugin updates work?](installation/plugin-licenses.md#how-do-plugin-updates-work)). With Leantime 3.16 or later, use Advanced Authentication 1.5.0 or later, so signing in with a provider also works when an AI assistant connects to Leantime. Before you update Leantime itself, check that your Advanced Authentication version supports the new release (see [What happens to plugins when I update Leantime?](installation/plugin-licenses.md#what-happens-to-plugins-when-i-update-leantime)).

## Who can use it?

Owners and Admins set it up under **Company Settings → Authentication Settings**. Everyone with a Leantime account can then sign in with an enabled provider, in the browser and in the mobile app (except SAML, which is browser-only for now).

## General Setup

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

Once provider configuration is added to the environment file, the UI will show a toggle that adds or removes the provider's button on the login page.

> **Note:** In AdvancedAuth 1.4.1 and earlier, switching a provider off only hides its button. Anyone who knows the sign-in URL can still use a configured provider. To fully disable a provider, remove its credentials from the environment file.

## Enabling a Provider

1. Add the provider's variables to `config/.env` (or your container's environment variables) and restart PHP-FPM or the container.
2. Sign in as an Owner or Admin and go to **Company Settings → Authentication Settings**.
3. The provider's tile now shows a toggle instead of **(Not configured)**. Switch it on and click **Save Settings**.
4. Open the login page in a private window. A button for the provider appears below the login form.

## How Users Are Matched

Leantime signs a user in by matching the email address the provider returns to the email of an existing Leantime user.

If no user has that email, the login is refused unless automatic account creation is turned on in the environment file:

```ini
# Create a Leantime account on a user's first provider login
AUTH_CREATE_USER=true
```

New accounts get the **Manager** role and use the provider's display name as their first name. You can change both afterwards in user management.

> **Note:** The **Automatically create user accounts** toggle in Authentication Settings does not control this in AdvancedAuth 1.4.1 and earlier. Set `AUTH_CREATE_USER=true` instead.

Leantime refuses a login when the provider reports the email as unverified. If your provider marks real users as unverified, you can turn this check off with `AUTH_REQUIRE_VERIFIED_EMAIL=false`.

If a user's email changes at the provider, Leantime no longer recognizes them: they get a new account (or are refused). Update their email in Leantime first.

Leantime's own two-factor authentication still applies after a provider login.

## Authentication Settings

These options are under **Company Settings → Authentication Settings**:

| Setting | What it does |
|---------|--------------|
| **Restrict to specific domain** | Only emails at the domain you enter (for example `example.com`) can sign in, with a provider or with a password. The domain must match exactly: subdomains don't count, and the check is case-sensitive, so enter it in lowercase. |
| **Hide Login Form** | Removes the email and password form from the login page. Only turn this on after you have confirmed a provider login works. |
| **Auto-redirect to provider** | When exactly one provider is enabled, the login page sends users straight to it. After a failed provider login, the redirect is skipped for the rest of that browser session so users don't get stuck in a loop. |

If you hide the login form and then can't sign in, turn it back on from the server:

```bash
php ./bin/leantime setting:save --key=auth.hideDefaultLogin --value=off
```

If `LEAN_APP_URL` isn't set, the website and the command line use separate setting caches, and the website can keep serving the old value for up to an hour. To apply the change immediately, delete the contents of `storage/framework/cache/` (with the default file cache).

## Mobile App Sign-In

With AdvancedAuth 1.4.0 or later on Leantime 3.10.2 or later, the Leantime mobile app shows a button for each enabled provider on its login screen. You don't need to configure anything else: the app uses the same callback URL as the browser. Leantime's two-factor authentication applies in the app too. SAML 2.0 isn't available in the mobile app yet. Everything else the server needs for the app is in [Set up the mobile app on a self-hosted server](installation/mobile-app-setup.md).

## Supported Providers

### Authentik (Key: `AUTHENTIK`)
[Documentation](https://github.com/SocialiteProviders/Authentik)

1. In the Authentik admin interface, go to **Applications → Applications** and click **Create with provider**. (In older versions, create an **OAuth2/OpenID Provider** under **Applications → Providers** first, then an application that uses it.)
2. Enter a name and slug for the application, then choose **OAuth2/OpenID Provider** as the provider type.
3. In the provider settings:
   - **Client type:** Confidential
   - **Redirect URIs:** `https://yourdomain.com/advancedAuth/callback/authentik` (matching mode **Strict**)
   - **Signing key:** select an RSA certificate, for example the built-in self-signed one
   - Keep the default scope mappings (`openid`, `email`, `profile`)
4. Copy the **Client ID** and **Client Secret** from the provider.
5. Under the application's **Policy / Group / User Bindings**, bind the groups or users who may sign in to Leantime. Without bindings, every Authentik user can.
6. Add the values to your environment file and [enable the provider](#enabling-a-provider):

```ini
LEAN_APP_URL=https://yourdomain.com
# The Authentik server's root URL, not the application's URL
AUTHENTIK_BASE_URL=https://auth.example.com
AUTHENTIK_CLIENT_ID=your-client-id
AUTHENTIK_CLIENT_SECRET=your-client-secret
```

> **Authentik 2025.10 and later:** The default `email` scope mapping reports every email as **unverified**, and Leantime refuses unverified emails. Either replace the default `email` mapping on the provider with a custom scope mapping that returns `email_verified` (see Authentik's [verify email address](https://docs.goauthentik.io/add-secure-apps/providers/oauth2/verify-email-address/) guide), or set `AUTH_REQUIRE_VERIFIED_EMAIL=false` if every Authentik address is trusted.

Leantime also requests the `goauthentik.io/api` scope. If Authentik rejects the request with a scope error, add the **authentik default OAuth Mapping: authentik API access** mapping to the provider.

### Auth0 (Key: `AUTH0`)
[Documentation](https://github.com/SocialiteProviders/Auth0)

```ini
AUTH0_BASE_URL=https://your-tenant.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
```

### Gitea (Key: `GITEA`)
[Documentation](https://github.com/SocialiteProviders/Gitea)

```ini
GITEA_INSTANCE_URI=https://your-gitea-instance.com
GITEA_CLIENT_ID=your-client-id
GITEA_CLIENT_SECRET=your-client-secret
```

### GitHub (Key: `GITHUB`)
[Documentation](https://github.com/SocialiteProviders/GitHub)

1. In GitHub, go to **Settings → Developer settings → OAuth Apps → New OAuth App**. For an organization, use **Organization settings → Developer settings → OAuth Apps**. Create an OAuth App, not a GitHub App.
2. Fill in:
   - **Homepage URL:** `https://yourdomain.com`
   - **Authorization callback URL:** `https://yourdomain.com/advancedAuth/callback/github`
3. Click **Register application**, copy the **Client ID**, then click **Generate a new client secret** and copy the secret.
4. Add them to your environment file and [enable the provider](#enabling-a-provider):

```ini
LEAN_APP_URL=https://yourdomain.com
GITHUB_CLIENT_ID=your-client-id
GITHUB_CLIENT_SECRET=your-client-secret
```

Leantime uses the **primary, verified** email of the GitHub account to [match the user](#how-users-are-matched). That email must be the user's Leantime email. If users' primary GitHub email is a personal address, **Restrict to specific domain** will block them.

### GitLab (Key: `GITLAB`)
[Documentation](https://github.com/SocialiteProviders/GitLab)

```ini
GITLAB_CLIENT_ID=your-client-id
GITLAB_CLIENT_SECRET=your-client-secret
```

This provider only works with GitLab.com. For a self-managed GitLab instance, use [OpenID Connect](installation/authentication-configuration.md#openid-connect-oidc) instead.

### Google (Key: `GOOGLE`)
[Documentation](https://github.com/SocialiteProviders/Google-Plus)

1. Open the [Google Cloud Console](https://console.cloud.google.com/) and select or create a project.
2. Go to **Google Auth Platform → Branding** (shown as **OAuth consent screen** in some accounts) and fill in the app name and support email.
3. Under **Audience**, choose who can sign in:
   - **Internal:** only users in your Google Workspace organization. This is the simplest way to keep other Google accounts out.
   - **External:** any Google account. Leantime only asks for the basic `openid`, `email` and `profile` scopes, so Google's test-user list does **not** limit who can sign in, even while the app's status is **Testing**. Don't rely on it for access control. Publishing doesn't normally need a Google review.
4. Go to **Clients → Create client** and choose **Web application**.
5. Under **Authorized redirect URIs**, add `https://yourdomain.com/advancedAuth/callback/google`. You don't need to add any JavaScript origins.
6. Click **Create** and copy the **Client ID** and **Client secret**. Copy the secret right away, because Google may not show it again.
7. Add them to your environment file and [enable the provider](#enabling-a-provider):

```ini
LEAN_APP_URL=https://yourdomain.com
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
```

Leantime matches the Google account's email to the user's Leantime email, and it refuses Google accounts whose email isn't verified. With an **External** audience, anyone with a Google account can reach the login step. If `AUTH_CREATE_USER=true`, also turn on **Restrict to specific domain** so only your organization's emails get accounts.

### Keycloak (Key: `KEYCLOAK`)
[Documentation](https://github.com/SocialiteProviders/Keycloak)

1. In the Keycloak admin console, select your realm and go to **Clients → Create client**.
2. Choose **OpenID Connect** as the client type, enter a **Client ID** (for example `leantime`), and click **Next**.
3. Turn on **Client authentication** and keep **Standard flow** checked. Click **Next**.
4. Under **Valid redirect URIs**, enter `https://yourdomain.com/advancedAuth/callback/keycloak`. Click **Save**.
5. Open the client's **Credentials** tab and copy the **Client secret**.
6. Open the client's **Client scopes** tab and check that `email` and `profile` are assigned as **Default**. Leantime only requests the `openid` scope, so the email reaches Leantime only through these default scopes.
7. Add the values to your environment file and [enable the provider](#enabling-a-provider):

```ini
LEAN_APP_URL=https://yourdomain.com
# The Keycloak server's root URL, without /realms/...
KEYCLOAK_BASE_URL=https://keycloak.example.com
# Defaults to "master" if not set
KEYCLOAK_REALM=your-realm
KEYCLOAK_CLIENT_ID=leantime
KEYCLOAK_CLIENT_SECRET=your-client-secret
```

Leantime builds the endpoints as `{KEYCLOAK_BASE_URL}/realms/{KEYCLOAK_REALM}/protocol/openid-connect/...`. Keycloak 16 and earlier serve these under `/auth`, so include it there: `KEYCLOAK_BASE_URL=https://keycloak.example.com/auth`.

Keycloak sends `email_verified` for each user, and Leantime refuses unverified emails. For users created by an administrator, switch on **Email verified** in the user's details, or set `AUTH_REQUIRE_VERIFIED_EMAIL=false`.

### Laravel Passport (Key: `LARAVELPASSPORT`)
[Documentation](https://github.com/SocialiteProviders/Laravel-Passport)

```ini
LARAVELPASSPORT_CLIENT_ID=your-client-id
LARAVELPASSPORT_CLIENT_SECRET=your-client-secret
LARAVELPASSPORT_HOST=https://your-passport-server.com
```

### Microsoft (Key: `MICROSOFT`)
[Documentation](https://github.com/SocialiteProviders/Microsoft)

Use this provider for Microsoft 365 / Entra ID work and school accounts, and for personal Microsoft accounts.

1. Open the [Microsoft Entra admin center](https://entra.microsoft.com/) (or **Microsoft Entra ID** in the Azure portal) and go to **App registrations → New registration**.
2. Enter a name and choose **Supported account types**. For most organizations, pick **Accounts in this organizational directory only (Single tenant)**.
3. Under **Redirect URI**, choose the **Web** platform and enter `https://yourdomain.com/advancedAuth/callback/microsoft`.
4. Click **Register**. On the **Overview** page, copy the **Application (client) ID** and the **Directory (tenant) ID**.
5. Go to **Certificates & secrets → Client secrets → New client secret**. Copy the secret's **Value** (not the Secret ID). Note the expiry date: when the secret expires, Microsoft sign-in stops working until you create a new one and update `MICROSOFT_CLIENT_SECRET`.
6. Under **API permissions**, keep the default **Microsoft Graph → User.Read** (delegated) permission. If your organization blocks user consent, click **Grant admin consent**.
7. Add the values to your environment file and [enable the provider](#enabling-a-provider):

```ini
LEAN_APP_URL=https://yourdomain.com
MICROSOFT_CLIENT_ID=your-application-client-id
MICROSOFT_CLIENT_SECRET=your-client-secret-value
MICROSOFT_TENANT_ID=your-directory-tenant-id
# Optional: send Microsoft requests through a proxy
MICROSOFT_PROXY=
```

`MICROSOFT_TENANT_ID` controls which accounts can sign in. It must match the **Supported account types** of the app registration, or Microsoft shows an `AADSTS` error.

| Value | Who can sign in |
|-------|-----------------|
| Your directory (tenant) ID | Only accounts in your organization (recommended) |
| `organizations` | Any work or school account, from any organization |
| `consumers` | Personal Microsoft accounts only |
| `common` (default if unset) | Any Microsoft account, work, school or personal |

> **Warning:** With `common` or `organizations` and `AUTH_CREATE_USER=true`, anyone with a matching Microsoft account can create a Leantime account. Use your tenant ID, or turn on **Restrict to specific domain**.

Leantime matches users by the account's **user principal name (UPN)**, not its `mail` attribute. They are usually the same. When they differ (for example `jane@contoso.onmicrosoft.com` vs `jane@contoso.com`), the user's Leantime email must be the UPN.

> **Note:** Leave `MICROSOFT_TENANT_FIELDS` unset. Setting it to `[]` in the environment file breaks sign-in for work and school accounts.

### Microsoft Azure (Key: `AZURE`)
[Documentation](https://github.com/SocialiteProviders/Microsoft-Azure)

An older provider for Entra ID work and school accounts. For new setups, use the Microsoft provider above instead. Configuration is the same except for the variable names and the callback URL, `https://yourdomain.com/advancedAuth/callback/azure`. It also matches users by UPN.

```ini
AZURE_CLIENT_ID=your-client-id
AZURE_CLIENT_SECRET=your-client-secret
AZURE_TENANT_ID=your-tenant-id
# Optional
AZURE_PROXY=
```

### Okta (Key: `OKTA`)
[Documentation](https://github.com/SocialiteProviders/Okta)

1. In the Okta Admin Console, go to **Applications → Applications → Create App Integration**.
2. Choose **OIDC - OpenID Connect** as the sign-in method and **Web Application** as the application type. Click **Next**.
3. Enter a name, keep **Authorization Code** as the grant type, and set **Sign-in redirect URIs** to `https://yourdomain.com/advancedAuth/callback/okta`.
4. Under **Assignments**, choose who may use the app (everyone, or selected groups). Click **Save**.
5. On the app's **General** tab, copy the **Client ID** and **Client secret**.
6. Add the values to your environment file and [enable the provider](#enabling-a-provider):

```ini
LEAN_APP_URL=https://yourdomain.com
# Your Okta org URL only: no trailing slash, no /oauth2/default
OKTA_BASE_URL=https://your-org.okta.com
OKTA_CLIENT_ID=your-client-id
OKTA_CLIENT_SECRET=your-client-secret
```

Leantime uses Okta's org authorization server (`{OKTA_BASE_URL}/oauth2/v1/...`), which every Okta org has. Custom authorization servers such as `default` aren't supported.

Users who aren't assigned to the app see an Okta error ("User is not assigned to the client application"). Assign them, or their group, under the app's **Assignments** tab.

### PropelAuth (Key: `PROPELAUTH`)
[Documentation](https://github.com/SocialiteProviders/PropelAuth)

```ini
PROPELAUTH_CLIENT_ID=your-client-id
PROPELAUTH_CLIENT_SECRET=your-client-secret
PROPELAUTH_AUTH_URL=https://your-propelauth-url.com
```

### EduID (Key: `EDUID`)
[Documentation](https://github.com/SocialiteProviders/EduID)

```ini
EDUID_CLIENT_ID=your-client-id
EDUID_CLIENT_SECRET=your-client-secret
EDUID_USE_TEST_IDP=false
```

### SAML 2.0 (Key: `SAML2`)
[Documentation](https://github.com/SocialiteProviders/Saml2)

Use absolute paths for any file paths below.

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

# Both options: map your identity provider's attribute names to Leantime's.
# Do not set this in AdvancedAuth 1.4.1 and earlier: any value breaks SAML sign-in.
# The defaults already read the standard email and name claims.
# SAML2_ATTRIBUTE_MAP={"email": "email", "name": "displayName"}

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

## Troubleshooting

### OAuth Callback Errors

1. Verify `LEAN_APP_URL` matches your actual domain exactly (including https://)
2. Check the callback URL in your identity provider settings:
   - Format: `https://yourdomain.com/advancedAuth/callback/{provider}` (for example `.../advancedAuth/callback/google`)
   - For SAML, the reply URL is `https://yourdomain.com/advancedAuth/callback/saml2`
3. Ensure `LEAN_SESSION_SECURE=true` only if using HTTPS
4. For SAML: verify certificate paths are correct and files are readable by the web server

A GitHub error that says *"The redirect_uri is not associated with this application"* (Microsoft shows this as error `AADSTS50011`) means the callback URL Leantime sent doesn't match the one registered with the provider. Compare them for http vs https, a subfolder, or a trailing slash. If `LEAN_APP_URL` is empty, Leantime builds the callback from the incoming request, which behind a reverse proxy can come out as `http://` or an internal hostname. Set `LEAN_APP_URL` to your public URL.

### Provider Not Showing in UI

1. Verify environment variables are set correctly (check for typos)
2. Restart your web server or PHP-FPM after changing `.env`
3. Clear cache: `php ./bin/leantime cache:clear`
4. Check that both `CLIENT_ID` and `CLIENT_SECRET` are set for the provider
5. If the tile shows a toggle but there's no button on the login page, switch the toggle on and click **Save Settings**

### Returned to the Login Page After Signing In

- **"Invalid user":** no Leantime user has the email the provider returned, and `AUTH_CREATE_USER` isn't `true`. Create the user with that email, or [turn on automatic account creation](#how-users-are-matched).
- **"Invalid domain":** **Restrict to specific domain** is on and the email is at a different domain.
- **Email not verified:** the provider reported the email as unverified. Verify it with the provider, or see `AUTH_REQUIRE_VERIFIED_EMAIL` under [How Users Are Matched](#how-users-are-matched).

## Related

- [Authentication: OIDC, LDAP and single sign-on](installation/authentication-configuration.md)
- [Set up Keycloak single sign-on](installation/keycloak-sso.md)
- [Set up the mobile app on a self-hosted server](installation/mobile-app-setup.md)
- [Leantime on your phone](using-leantime/mobile-app.md): signing in and using the app
- [Installing plugins](installation/plugin-installation.md)
- [All plugins](installation/using-plugins.md)
