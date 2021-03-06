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
