# Plugin Config

## Advanced Auth Plugin

After installing the plugin auth provider credentils need to be added to the environment file. The formatting is normalized across providers and follows a simple syntax: PROVIDERNAME_CONFIG.
Under the hood we are integrating with Laravel Socialite and their configuration settings.


## All Provider

All providers require at least:

```
{PROVIDER}_CLIENT_ID
{PROVIDER}_CLIENT_SECRET
```

Additionally you should make sure that `LEAN_APP_URL` is set especially in cases where callback redirects are set to strict checks.

The redirect url is already set for you and is `yourdomain.com//advancedAuth/callback?driver={provider}`

Once the provider config is available in the environment file the UI will show a toggle to turn it on/off

### Authentik (Key: `AUTHENTIK`)
[Docs][(https://github.com/SocialiteProviders/Auth0)](https://github.com/SocialiteProviders/Authentik)

Config Options
```
AUTHENTIK_BASE_URL
AUTHENTIK_CLIENT_ID
AUTHENTIK_CLIENT_SECRET
```

### Auth0 (Key: `AUTH0`)
[Docs](https://github.com/SocialiteProviders/Auth0)

Config Options
```
AUTH0_BASE_URL
AUTH0_CLIENT_ID
AUTH0_CLIENT_SECRET
```

### Gitea (Key: `GITEA`)
[Docs](https://github.com/SocialiteProviders/Gitea)

Config Options
```
GITEA_INSTANCE_URI
GITEA_CLIENT_ID
GITEA_CLIENT_SECRET
```

### Github (Key: `GITHUB`)
[Docs](https://github.com/SocialiteProviders/GitHub)

Config Options
```
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET
```

### Gitlab (Key: `GITLAB`)
[Docs](https://github.com/SocialiteProviders/GitLab)

Config Options
```
GITLAB_CLIENT_ID
GITLAB_CLIENT_SECRET
```

### Google (Key: `GOOGLE`)
[Docs](https://github.com/SocialiteProviders/Google-Plus)

Config Options
```
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
```

### Keycloak (Key: `KEYCLOAK`)
[Docs](https://github.com/SocialiteProviders/Keycloak)

Config Options
```
KEYCLOAK_CLIENT_ID
KEYCLOAK_CLIENT_SECRET
KEYCLOAK_BASE_URL
KEYCLOAK_REALM
```

### Laravel Passport (Key: `LARAVELPASSPORT`)
[Docs](https://github.com/SocialiteProviders/Laravel-Passport)

Config Options
```
LARAVELPASSPORT_CLIENT_ID
LARAVELPASSPORT_CLIENT_SECRET
LARAVELPASSPORT_HOST
```

### Microsoft (Key: `MICROSOFT`)
[Docs](https://github.com/SocialiteProviders/Microsoft)

Config Options
```
MICROSOFT_CLIENT_ID
MICROSOFT_CLIENT_SECRET
MICROSOFT_PROXY //optional
MICROSOFT_TENANT_ID //default: common
MICROSOFT_TENANT_FIELDS // deefault: []
MICROSOFT_INCLUDE_AVATAR // default: true
```

### Microsoft Azure (Key: `AZURE`)
[Docs](https://github.com/SocialiteProviders/Microsoft-Azure)

Config Options
```
AZURE_CLIENT_ID
AZURE_CLIENT_SECRET
AZURE_TENANT_ID
AZURE_PROXY //optional
```

### okta (Key: `OKTA`)
[Docs](https://github.com/SocialiteProviders/Okta)

Config Options
```
OKTA_BASE_URL
OKTA_CLIENT_ID
OKTA_CLIENT_SECRET
```

### PropelAuth (Key: `PROPELAUTH`)
[Docs](https://github.com/SocialiteProviders/PropelAuth)

Config Options
```
PROPELAUTH_CLIENT_ID
PROPELAUTH_CLIENT_SECRET
PROPELAUTH_AUTH_URL
```

### EduID (Key: `EDUID`)
[Docs](https://github.com/SocialiteProviders/EduID)

Config Options
```
EDUID_CLIENT_ID
EDUID_CLIENT_SECRET
EDUID_USE_TEST_IDP //default: false
```

### AppNet (Key: `APP.NET`)
[Docs](https://github.com/SocialiteProviders/App.net)

Config Options
```
APP.NET_KEY
APP.NET_SECRET
```

### SAML 2.0 (Key: `SAML2`)
[Docs](https://github.com/SocialiteProviders/Saml2)

Config Options (all file paths are relative to the root of leantime
```
SAML2_METADATA
SAML2_ENTITY_ID
SAML2_ACS
SAML2_CERTIFICATE
SAML2_ATTRIBUTE_MAP
SAML2_VALIDATION_CLOCK_SKEW //default: 120
SAML2_VALIDATION_REPEATED_ID_TTL //default: 365 * 24 * 60 * 60
SAML2_SP_CERTIFICATE
SAML2_SP_PRIVATE_KEY
SAML2_SP_PRIVATE_KEY_PASSPHRASE
SAML2_SP_SIGN_ASSERTIONS
SAML2_SP_ENTITY_ID
SAML2_SP_TECH_CONTACT_SURNAME
SAML2_SP_TECH_CONTACT_GTIVENNAME
SAML2_SP_TECH_CONTACT_EMAIL
SAML2_SP_ORG_LANG
SAML2_SP_ORG_NAME
SAML2_SP_ORG_DISPLAY_NAME
SAML2_SP_ORG_URL
```
