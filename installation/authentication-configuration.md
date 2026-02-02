# Authentication Configuration Guide

Leantime supports multiple authentication methods including OIDC and LDAP.

## OIDC Quick Start

```bash
LEAN_OIDC_ENABLE=true
LEAN_OIDC_PROVIDER_URL=https://your-provider.com/
LEAN_OIDC_CLIENT_ID=your-client-id
LEAN_OIDC_CLIENT_SECRET=your-client-secret
```

**Callback URL:** `https://your-domain.com/oidc/callback`

## Provider Setup

### Keycloak
```bash
LEAN_OIDC_PROVIDER_URL=https://keycloak.domain.com/realms/realm/
```

### Authentik
```bash
LEAN_OIDC_PROVIDER_URL=https://auth.domain.com/application/o/leantime/
```
**Note:** Do NOT add SSL certificate in provider settings.

### Google
```bash
LEAN_OIDC_PROVIDER_URL=https://accounts.google.com/
LEAN_OIDC_JWKS_URL_OVERRIDE=https://www.googleapis.com/oauth2/v1/certs
```

## LDAP Configuration

```bash
LEAN_LDAP_USE_LDAP=true
LEAN_LDAP_LDAP_TYPE=OL  # or AD for Active Directory
LEAN_LDAP_HOST=ldap.domain.com
LEAN_LDAP_PORT=389
LEAN_LDAP_DN=ou=users,dc=domain,dc=com
```

## Troubleshooting

### Infinite Redirect Loop
- Verify `.well-known/openid-configuration` is accessible
- - Ensure `LEAN_OIDC_PROVIDER_URL` has trailing slash
  - - Check `LEAN_SESSION_SECURE` matches HTTPS setup
   
    - ### Owner Role Overwritten (OIDC)
    - Enable OIDC during initial setup. Fix: `UPDATE zp_user SET role='owner' WHERE username='admin';`
   
    - ## Getting Help
    - - [GitHub Issues](https://github.com/Leantime/leantime/issues)
      - - [Discord](https://discord.gg/4zMzJtAq9z)
