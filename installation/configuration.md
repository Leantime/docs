# Configuration
The config file allows you to set the basic configuration for database, theme, email and file handling

## Theme Configuration
Leantime allows you to white label the entire system by changing the color scheme of your site and replacing the logo. 
Just set the value `mainColor` to your primary color and `logoPath`. 

These settings can also be changed within Leantime under Account->Company Settings.

## S3 Configuration
Leantime can store your files on the local file system or in AWS S3. To get started with S3 you will need a bucket in the region of your choice and an account with permissions to write objects to yout bucket. You should have an account key and secret as well as your region ready.

In your configuration.php edit the following lines:
```php
public $useS3 = true; //Set to true if you want to use S3 instead of local files
public $s3Key = ""; //S3 Key
public $s3Secret = ""; //S3 Secret
public $s3Bucket = ""; //Your S3 bucket
public $s3Region = ""; //S3 region
public $s3FolderName = ""; //Foldername within S3 (can be emtpy)
```
Set useS3 to true and fill in your key, secret, bucket name and region. The folder name is optional but helpful if you have additional objects in your S3 bucket.

*Warning:* There is currently no migration of old files to S3 (and vice versa). Files uploaded previously will remain on the local server but become unavailable through leantime. We are working on a fix for this. 

## SMTP Configuration
Leantime supports sending email via the standard `mail()` function or via smtp. To configure SMTP fill in the SMTP section with your host, username, password and the security protocol used.

```php
public $useSMTP = true; //Use SMTP? If set to false, the default php mail() function will be used
public $smtpHosts = ""; //SMTP host
public $smtpUsername =""; //SMTP username
public $smtpPassword = ""; //SMTP password
public $smtpSecure =""; //SMTP Security protocol (usually one of: TLS, SSL, STARTTLS)
public $smtpPort = ""; //Port (usually one of 25, 465, 587, 2526)
```

## Ldap Configuration
As of v2.1.9 Leantime supports a basic ldap integration. A few notes:
* When a user first logs in a new Leantime user is being created. The default role can be defined in the config file
* You can map roles from your ldap directory to roles in Leantime using the `$ldapLtGroupAssignments`
* To get started, set `$useLdap` to true.
* Instead of php arrays we decided to use json as the value format to allow you to configure ldap via environment variables. Please make sure your json is valid.

```php
    public $useLdap = false;
    public $ldapType = 'OL'; //Select the correct directory type. Currently Supported: OL - OpenLdap, AD - Active Directory
    public $ldapHost = ""; //FQDN
    public $ldapPort = 389; //Default Port
    public $baseDn = ""; //Base DN, example: DC=example,DC=com
    public $ldapDn = ""; //Location of users, example: CN=users,DC=example,DC=com
    public $ldapUserDomain = ""; //Domain after ldap, example @example.com
    public $bindUser = ""; //ldap user that can search directory. (Should be read only)
    public $bindPassword = "";
```
Setting the ldap keys allows you to match Leantime fields to the fields in your ldap directory. 
Json keys are Leantime fields while the values are the property names in your ldap directory.
```php
    //Default ldap keys in your directory.
    public $ldapKeys = '{ 
        "username":"uid",
        "groups":"memberof",
        "email":"mail",
        "firstname":"displayname",
        "lastname":""
        }';

```

The group assignment value allows you to match Leantime roles to roles in your directory. All you have to set is the appropriate role name in `ldapRole`.
```php
    //Default role assignments upon first login.
    public $ldapLtGroupAssignments = '{
          "10": {
            "ltRole":"client",
            "ldapRole":""
          },
          "20": {
            "ltRole":"developer",
            "ldapRole":""
          },
          "30": {
            "ltRole":"clientManager",
            "ldapRole":""
          },
          "40": {
            "ltRole":"manager",
            "ldapRole":""
          },
          "50": {
            "ltRole":"admin",
            "ldapRole":"administrators"
          }
        }';
```
Lastly, you can set the default role for users when they are first created. 
```php
    public $ldapDefaultRoleKey = 20; //Default Leantime Role on creation. (set to developer)
```

## Nginx configuration

Leantime works with Apache out of the box. To make it work with nginx please copy the contents of the nginx.conf file in the root of the directory into your nginx.conf file (and adjust your domain name as needed). The file can also be found in our [GitHub repository](https://github.com/Leantime/leantime/blob/master/nginx.conf)

## Plesk Nginx configuration

Using nginx under Plesk is quite easy but still not advised to edit the nginx.config of a domain, so instead of doing the above metod we'll fix the uri rewriting by adding the instructions in the "Additional nginx directives" under the "Apache & nginx Settings" page of the domain.

```if ($ssl_protocol = "") {
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

This and by desabling the 

## Language
To change the default language of your installation just update   
```php
public $language = 'en-US'; 
```
to a language string available. You can see all available languages in `resources\languages\languagelist.ini`

## Timezone
To change the default timezone of your installation, just update
```php
public $defaultTimezone = 'America/Los_Angeles';
```
to a valid timezone . You can look up all the timezones at https://www.php.net/manual/en/timezones.php

## ENV Vars
The entire configuration can also be passed in as env vars (at docker startup or server variables). The list of equvalent variables is:
```
LEAN_SITENAME
LEAN_LANGUAGE
LEAN_MAIN_COLOR
LEAN_LOGO_PATH
LEAN_APP_URL
LEAN_DEFAULT_TIMEZONE

/* Database */
LEAN_DB_HOST
LEAN_DB_USER
LEAN_DB_PASSWORD
LEAN_DB_DATABASE

/* Fileupload */
LEAN_USER_FILE_PATH

LEAN_USE_S3
LEAN_S3_END_POINT
LEAN_S3_KEY
LEAN_S3_SECRET
LEAN_S3_BUCKET
LEAN_S3_USE_PATH_STYLE_ENDPOINT
LEAN_S3_REGION
LEAN_S3_FOLDER_NAME

/* Sessions */
LEAN_SESSION_PASSWORD
LEAN_SESSION_EXPIRATION

/* Email */
LEAN_EMAIL_RETURN
LEAN_EMAIL_USE_SMTP
LEAN_EMAIL_SMTP_HOSTS
LEAN_EMAIL_SMTP_USERNAME
LEAN_EMAIL_SMTP_PASSWORD
LEAN_EMAIL_SMTP_AUTO_TLS
LEAN_EMAIL_SMTP_SECURE
LEAN_EMAIL_SMTP_PORT

/*ldap*/
LEAN_LDAP_USE_LDAP
LEAN_LDAP_LDAP_TYPE
LEAN_LDAP_HOST
LEAN_LDAP_PORT
LEAN_LDAP_BASE_DN
LEAN_LDAP_DN
LEAN_LDAP_USER_DOMAIN
LEAN_LDAP_KEYS
LEAN_LDAP_GROUP_ASSIGNMENT
LEAN_LDAP_DEFAULT_ROLE_KEY
```
## OpenID-Conenct (OIDC) Configuration
Warning! This is still experimental and may not be a 100% secure.

You can connect Leantime to a OIDC provider of your choice. The reference implementation is Authentik, but any compliant provider which implements x5c certificates should work.

For a basic Keycloak or Authentik connection, only the provider URL, client id and client secret are required.

To understand some of the more advanced options, take a look at the github example below.

The following environment variables can be used:

```
#Enable OIDC-Connect
LEAN_OIDC_ENABLE=true

#Provider URL:
#LEAN_OIDC_PROVIDER_URL = https://auth.example.org/application/o/<slug>/           #Authentik
#LEAN_OIDC_PROVIDER_URL = https://auth.example.org/realms/<realm>/                 #Keycloak

#Provider credentials
LEAN_OIDC_CLIEND_ID=
LEAN_OIDC_CLIEND_SECRET=

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

```


## Cron Jobs
To ensure users get the notifications at the time they need them Leantime has 2 options to run cron jobs. The shortest time Leantime will process the queue is 5 minutes. We recommend to run the job at least every 15 minutes.

**Note: To run the cron tab you MUST set `$appURL` in your config file. Otherwise links within the email will not work properly.**

Option 1: Using the command line

```
./bin/leantime cron:run
```

Option 2: Using endpoint

Call `<<yourdomain>>/cron/run`
