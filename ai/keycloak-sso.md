# Set up Keycloak single sign-on (with an AI assistant)

Your team can sign in to Leantime with their Keycloak accounts, using the OpenID Connect (OIDC) support built into Leantime. No plugin is needed for the web app. This guide gives every step for doing it by hand, and the prompts to use if an AI assistant is helping you.

> **Note:** **How this guide was made.** An AI assistant (Claude Code) set this up from scratch on 12 November 2026, with Leantime 3.14.0 and Keycloak 26.8.2 in Docker, and a person checked the result. It hit two errors along the way. They're in [What can go wrong?](ai/keycloak-sso.md?id=what-can-go-wrong) with their fixes, because you might hit them too.

**At a glance**

- **Time:** about 30 minutes
- **Level:** Some experience. You can edit Leantime's settings and you have an administrator account in Keycloak.
- **You need:** Leantime 3.13.2 or later (older versions don't send PKCE; leave **Require PKCE** off on those), a Keycloak server, and access to Leantime's `.env` file (or its Docker environment).
- **At the end:** an **OIDC Login** button on Leantime's login page that signs people in with Keycloak. People who sign in for the first time get a Leantime account automatically, if you allow it.

## How does Keycloak sign-in work?

Three addresses matter. Write yours down before you start:

| What | Example | Where you'll use it |
|---|---|---|
| Leantime's address | `https://projects.example.com` | `LEAN_APP_URL` in Leantime |
| Your Keycloak realm's address (the **issuer**) | `https://auth.example.com/realms/leantime` | `LEAN_OIDC_PROVIDER_URL` in Leantime |
| Leantime's callback address | `https://projects.example.com/oidc/callback` | **Valid redirect URIs** in Keycloak |

When someone clicks the login button, Leantime sends them to Keycloak. They sign in there, and Keycloak sends them back to the callback address with a one-time code. Leantime swaps the code for a signed token that says who they are, and logs them in by their email address.

## Step 1: Create a realm in Keycloak

A realm is a separate set of users and apps. You can use an existing one; skip to step 2.

1. Open the Keycloak admin console (`https://auth.example.com/admin/`) and sign in.
2. Click **Manage realms**, then **Create realm**.
3. Enter a **Realm name**, for example `leantime`, and click **Create**.

Your issuer is now `https://auth.example.com/realms/leantime`.

## Step 2: Create the client for Leantime

1. In your realm, open **Clients** and click **Create client**.
2. **General settings:** leave **Client type** as **OpenID Connect**. Enter `leantime` as **Client ID** and `Leantime` as **Name**. Click **Next**.
3. **Capability config:**
   - Turn **Client authentication** on. Leantime keeps a client secret, so it's a confidential client.
   - Keep **Standard flow** checked. You don't need the other flows.
   - Turn **Require PKCE** on. Leantime 3.13.2 and later send PKCE, which protects the login code.
   - Click **Next**.
4. **Login settings:**
   - **Root URL:** `https://projects.example.com`
   - **Valid redirect URIs:** `https://projects.example.com/oidc/callback`
   - **Web origins:** `https://projects.example.com`
   - Click **Save**.
5. Open the **Credentials** tab and copy the **Client Secret**. Treat it like a password.

## Step 3: Make sure users have a verified email

Leantime finds the account by email address, so every user needs one. Because of that, Leantime also refuses addresses that Keycloak marks as unverified.

- For a user you create by hand: in **Users**, open the user and turn **Email verified** on.
- For self-registration: let Keycloak verify addresses by email (**Realm settings → Login → Verify email**).

## Step 4: Connect Leantime to Keycloak

Add these to Leantime's `.env` file, or to the environment of the Leantime container:

```ini
LEAN_APP_URL = 'https://projects.example.com'
LEAN_OIDC_ENABLE = true
LEAN_OIDC_PROVIDER_URL = 'https://auth.example.com/realms/leantime'
LEAN_OIDC_CLIENT_ID = 'leantime'
LEAN_OIDC_CLIENT_SECRET = '<client secret from step 2>'
LEAN_OIDC_CREATE_USER = true
LEAN_OIDC_DEFAULT_ROLE = 20
```

- `LEAN_OIDC_PROVIDER_URL` must be **exactly** the issuer: the realm address, with no `/.well-known/...` on the end. A trailing slash doesn't matter: Leantime removes it before comparing.
- `LEAN_OIDC_CREATE_USER = true` creates a Leantime account the first time someone signs in. With `false`, only people who already have a Leantime account with the same email can sign in.
- `LEAN_OIDC_DEFAULT_ROLE` is the role for new accounts: 5 Read Only, 10 Commenter, 20 Editor, 30 Manager, 40 Administrator.
- Leantime reads the email, first name and last name from Keycloak's standard `email`, `given_name` and `family_name` claims, so no mapping is needed.

Then apply the settings. In Docker, run `docker compose up -d`; a restart alone keeps the old settings. On a server, reload PHP-FPM or your web server.

## Step 5: Test it

1. Open Leantime's login page in a private browser window. Below the login form you'll see **OIDC Login**.
2. Click it, sign in with a Keycloak user, and you land on the Leantime dashboard.
3. As an administrator, open **Users** in Leantime: the new person is there with the default role. Change their role or add them to projects as usual.

## What can go wrong?

### "The received provider … does not match the local setting …"

`LEAN_OIDC_PROVIDER_URL` isn't exactly the issuer in Keycloak's token. Copy the `issuer` value from `https://auth.example.com/realms/leantime/.well-known/openid-configuration` and paste it as the setting.

This happened in our test because Leantime and Keycloak ran on the same computer. See [Testing on one machine](ai/keycloak-sso.md?id=testing-on-one-machine).

### "Your identity provider reports that the email address of your account is not verified."

The Keycloak user's **Email verified** is off. Turn it on (step 3), then sign in again. Only if you fully trust every address in your Keycloak can you skip the check with `LEAN_OIDC_REQUIRE_VERIFIED_EMAIL = false`.

### Keycloak says "Invalid parameter: redirect_uri"

The callback address in Keycloak's **Valid redirect URIs** doesn't match Leantime's. Check `LEAN_APP_URL`: Leantime builds the callback from it, so `http://` versus `https://` or a missing port makes them differ.

### The OIDC Login button doesn't appear

`LEAN_OIDC_ENABLE` isn't `true`, or the container wasn't recreated after you changed `.env`.

### Testing on one machine

When Leantime runs in Docker and Keycloak runs on the same computer, the browser reaches Keycloak at `http://localhost:8180`, but the Leantime container can't: inside the container, `localhost` is the container itself. In production, with public addresses, this doesn't happen. For a local test:

- Start Keycloak with `KC_HOSTNAME=http://localhost:8180` and `KC_HOSTNAME_BACKCHANNEL_DYNAMIC=true`.
- Put both containers on one Docker network.
- In Leantime, set the issuer as the provider, and tell Leantime where to fetch Keycloak's settings from inside Docker:

  ```ini
  LEAN_OIDC_PROVIDER_URL = 'http://localhost:8180/realms/leantime'
  LEAN_OIDC_AUTO_DISCOVER = 'http://keycloak:8080/realms/leantime'
  ```

## Does this work with the Leantime mobile app?

Yes, with the same Keycloak client; there's nothing extra to set up in Keycloak. Signing in to the mobile app through single sign-on also needs the [Advanced Authentication](https://marketplace.leantime.io/product/advanced-auth/) plugin enabled on your Leantime server.

## Using an AI assistant for this

An AI assistant that can run commands (Claude Code, Cursor, Codex or similar) can do most of this setup. A chat assistant (Claude, ChatGPT) can guide you step by step. Either way, give it the facts first, so it doesn't guess setting names.

**1. Give it this guide.** Give it the Markdown address `https://docs.leantime.io/ai/keycloak-sso.md`, or open that address and paste the text into the chat.

**2. Tell it your setup.** For example:

```text
I want my team to sign in to our self-hosted Leantime with Keycloak, using
Leantime's built-in OIDC support. Follow the guide I pasted.

- Leantime 3.14 runs in Docker Compose at https://projects.example.com
- Keycloak 26 runs at https://auth.example.com, realm "leantime"
- New users should get a Leantime account as Editor.

Walk me through it one step at a time and wait for me to confirm each step.
Use only setting names from the guide. Don't ask me for the client secret;
I'll put it into .env myself.
```

**3. When something fails, give it the exact error.** Copy the message from Leantime's login page or the last lines of `docker compose logs leantime`, and ask what it means according to the guide.

**What not to paste into an AI chat:** the client secret, your `.env` file with passwords, admin passwords, or tokens. Replace them with `<client secret>` and so on; the assistant doesn't need them to help.

## Related

- [Authentication: OIDC, LDAP and single sign-on](installation/authentication-configuration.md): every OIDC setting
- [Advanced Authentication plugin](installation/plugin-installation.md?id=advanced-auth-plugin): ready-made Keycloak, Google, Microsoft and GitHub sign-in, SAML, and mobile app sign-in
- [Working with AI assistants](ai/working-with-ai.md)
