# Configuration

Leantime can be configured to setup database, customize theme, email and file handling:

## S3 Configuration

Leantime has flexible file storage option. You can choose between local file storage or Amazon S3. Here's how to set up S3 storage:

Before setup, make sure you have the following:

- A S3 bucket in your preferred region
- An AWS account with write permissions
- An AWS access and secret key

Navigate to the `config/.env` file and update the following settings:

```php
# S3 File Uploads
LEAN_USE_S3=true                # Set to true for using S3
LEAN_S3_KEY=''                  # S3 Key, hardcoded in s3ninja
LEAN_S3_SECRET=''               # S3 Secret, hardcoded in s3ninja
LEAN_S3_BUCKET=''               # S3 bucket name
LEAN_S3_USE_PATH_STYLE_ENDPOINT=true            # Sets the endpoint style: false => https://[bucket].[endpoint] ; true => https://[endpoint]/[bucket]
LEAN_S3_REGION=''               # S3 region
LEAN_S3_FOLDER_NAME=''          # Foldername within S3 (can be emtpy)
LEAN_S3_END_POINT=''            # S3 EndPoint S3 Compatible
```

The `LEAN_S3_FOLDER_NAME` is optional but can be helpful if you store other objects in the same S3 bucket. After switching to S3, files previously uploaded to the local server will remain there but will no longer be accessible through Leantime.

## SMTP Configuration

For outbound emails generally two methods can be used: the standard PHP `mail()` function and SMTP. While the `mail()` function is simpler, SMTP often provides better deliverability and security. The following guide shows process of configuring SMTP.

Navigate to the `config/.env` file and update the SMTP configuration section:

```php
## Email
LEAN_EMAIL_RETURN=''              # Valid return email address
LEAN_EMAIL_USE_SMTP=true          # true -> SMTP, false -> php mail()
LEAN_EMAIL_SMTP_HOSTS=''          # SMTP host
LEAN_EMAIL_SMTP_AUTH=false        # true -> SMTP authentication required; email and password needed. false -> authentication not required
LEAN_EMAIL_SMTP_USERNAME=''       # SMTP username
LEAN_EMAIL_SMTP_PASSWORD=''       # SMTP password
LEAN_EMAIL_SMTP_AUTO_TLS=true     # SMTP Enable TLS encryption automatically if a server supports it
LEAN_EMAIL_SMTP_SECURE=''         # SMTP Security protocol (usually one of: TLS, SSL, STARTTLS)
LEAN_EMAIL_SMTP_SSLNOVERIFY=true  # SMTP Allow insecure SSL: Don't verify certificate, accept self-signed, etc.
LEAN_EMAIL_SMTP_PORT=''           # Port (usually one of 25, 465, 587, 2526)
```

Common issues that users encounter such as if port is closed, check firewall settings to ensure the given port is open. Also, depending on the host, some may require you to use their own SMTP servers.

## LDAP Configuration

**Since: v2.1.9**

_LDAP is not supported in Leantime with versions earlier than v2.1.9._

Leantime supports basic LDAP integration via configuration of the environament variables. Follow the porcess below to setup LDAP:

Navigate to the `config/.env` file and update the following settings:

```php
## Ldap
LEAN_LDAP_USE_LDAP=false          # Set to true for using LDAP
LEAN_LDAP_LDAP_DOMAIN=''          # domain name that will be appended to usernames during login, so users can login without domain definition
LEAN_LDAP_LDAP_TYPE='OL'          # Specifies LDAP directory type. Currently Supported: OL - OpenLdap, AD - Active Directory
LEAN_LDAP_HOST=''                 # FQDN
LEAN_LDAP_PORT=389                # Default Port; 389 is standard port unencrypted LDAP connection
LEAN_LDAP_URI=''                  # ldap URI as alternative to hostname and port. If set, it overrides the LEAN_LDAP_HOST and LEAN_LDAP_PORT settings. Format -> ldap://hostname:port
LEAN_LDAP_DN=''                   # Location of users, example: CN=users,DC=example,DC=com
```

Configure the LDAP Keys to map to the fields in your LDAP directory

```php
LEAN_LDAP_KEYS="{
       \"username\":\"cn\",
       \"groups\":\"memberOf\",
       \"email\":\"mail\",
       \"firstname\":\"givenName\",
       \"lastname\":\"sn\",
       \"phonenumber\":\"telephoneNumber\"
     }"
```

Then configure LDAP Group Assignments to match leantime roles to roles in the directory:

```php
LEAN_LDAP_GROUP_ASSIGNMENT="{
  \"5\": {
    \"ltRole\":\"readonly\",
    \"ldapRole\":\"readonly\"
  },
  \"10\": {
    \"ltRole\":\"commenter\",
    \"ldapRole\":\"commenter\"
  },
  \"20\": {
    \"ltRole\":\"editor\",
    \"ldapRole\":\"editor\"
  },
  \"30\": {
    \"ltRole\":\"manager\",
    \"ldapRole\":\"manager\"
  },
  \"40\": {
    \"ltRole\":\"admin\",
    \"ldapRole\":\"administrators\"
  },
  \"50\": {
    \"ltRole\":\"owner\",
    \"ldapRole\":\"administrators\"
  }
}"
```

Here each of these levels is associated with two attributes:

- `ltRole`: The role in your application.
- `ldapRole`: The role in the LDAP directory.

Set the roles as per your setup. This allows you to manage user roles accross the system, and ensures the right permission is given to the users.

Lastly, you can set the default role for users when they are first created by updating:

```php
LEAN_LDAP_DEFAULT_ROLE_KEY=20;                   # Default Leantime Role on creation. (set to editor)
```

## Plesk Nginx configuration

Using nginx under Plesk is quite easy but still not advised to edit the nginx.config of a domain, so instead of doing the above metod we'll fix the uri rewriting by adding the instructions in the "Additional nginx directives" under the "Apache & nginx Settings" page of the domain.

```php

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

## Theme Configuration

Leantime allows you to customize the color scheme and logo by setting the corresponding values in your environment file. Open the `config/.env` file and update the following fields:

```php
LEAN_LOGO_PATH='/dist/images/logo.svg'           # Default logo path, can be changed later
LEAN_PRINT_LOGO_URL='/dist/images/logo.jpg'      # Default logo URL use for printing (must be jpg or png format)
LEAN_DEFAULT_THEME='default'                     # Default theme
LEAN_PRIMARY_COLOR='#1b75bb'                     # Primary Theme color
LEAN_SECONDARY_COLOR='#81B1A8'                   # Secondary Theme Color
```

These settings can also be changed within Leantime under Account->Theme.

## Sitename, Language and Timezone

Configure sitename, your default language and timezone by updating the default settings section in `config/.env`:

```php
LEAN_SITENAME='Leantime'                         # Name of your site, can be changed later
LEAN_LANGUAGE='en-US'                            # Default language
LEAN_DEFAULT_TIMEZONE='America/Los_Angeles'      # Set default timezone
```

## OpenID-Conenct (OIDC) Configuration

You can connect Leantime to a OIDC provider of your choice. The reference implementation is Authentik, but any compliant provider which implements x5c certificates should work.

For a basic Keycloak or Authentik connection, only the provider URL, client id and client secret are required.

The callback url is: `<<yourdomain>>/oidc/callback`

To understand some of the more advanced options, take a look at the github example below.

The following environment variables can be used:

```
#Enable OIDC-Connect
LEAN_OIDC_ENABLE=true

#Provider URL:
#LEAN_OIDC_PROVIDER_URL = https://auth.example.org/application/o/<slug>/           #Authentik
#LEAN_OIDC_PROVIDER_URL = https://auth.example.org/realms/<realm>/                 #Keycloak

#Provider credentials
LEAN_OIDC_CLIENT_ID=
LEAN_OIDC_CLIENT_SECRET=

# optional - these will be read from the well-known configuration if possible
# adjusting these values should allow connecting to most OAuth2 providers
#LEAN_OIDC_PROVIDER_URL=
#LEAN_OIDC_AUTH_URL_OVERRIDE=
#LEAN_OIDC_TOKEN_URL_OVERRIDE

# this enables the userinfo endpoint to login using only OAuth2 - if you require multiple sources, you can add them comma seperated.
#LEAN_OIDC_USERINFO_URL_OVERRIDE

# optional - override the public key for RSA validation
#LEAN_OIDC_CERTIFICATE_STRING =
#LEAN_OIDC_CERTIFICATE_FILE =

# optional - override the requested scopes
#LEAN_OIDC_SCOPES =

# optional - override the keys used for login and name - these can be nested with dots, if neccesarry (e.g.: user.info.email)
#LEAN_OIDC_FIELD_EMAIL =
#LEAN_OIDC_FIELD_FIRSTNAME =
#LEAN_OIDC_FIELD_LASTNAME =

# this is an example configuration for a github login
#LEAN_OIDC_PROVIDER_URL = https://token.actions.githubusercontent.com/
#LEAN_OIDC_AUTH_URL_OVERRIDE = https://github.com/login/oauth/authorize
#LEAN_OIDC_TOKEN_URL_OVERRIDE = https://github.com/login/oauth/access_token
#LEAN_OIDC_USERINFO_URL_OVERRIDE = https://api.github.com/user,https://api.github.com/user/emails
#LEAN_OIDC_SCOPES = user:email
#LEAN_OIDC_FIELD_EMAIL = 0.email

# this is an example configuration for a Google Cloud login (Also for Workspace)
#LEAN_OIDC_ENABLE = true
#LEAN_OIDC_PROVIDER_URL = https://accounts.google.com/
#LEAN_OIDC_CLIENT_ID =
#LEAN_OIDC_CLIENT_SECRET =
#LEAN_OIDC_JWKS_URL_OVERRIDE = https://www.googleapis.com/oauth2/v1/certs
```

## Cron Jobs

To ensure users receive timely notifications, Leantime offers two options for running cron jobs. The system processes the queue at intervals as short as every 5 minutes, but we recommend running the job at least once every 15 minutes for optimal performance.

**Note: To run the cron tab you MUST set `$appURL` in your config file. Otherwise links within the email will not work properly.**

#### Option 1: Using the command line

Run the following command from your Leantime installation directory to manually trigger the cron job:

```
./bin/leantime cron:run
```

#### Option 2: Using the Cron Endpoint

You can also trigger the cron job by calling the following endpoint in your browser or from a scheduling tool:

Call `<<yourdomain>>/cron/run`
