# Configuration
The config file allows you to set the basic configuration for database, theme, email and file handling

## Theme Configuration
Leantime allows you to white label the entire system by changing the color scheme of your site and replacing the logo. 
Just set the value `mainColor` to your primary color and `logoPath`. 

These settings can also be changed within Leantime under Account->Company Settings.

## S3 Configuration
Leantime can store your files on the local file system or in AWS S3. To get started with S3 you will need a bucket in the region of your choice and an account with permissions to write objects to yout bucket. You should have an account key and secret as well as your region ready.

In your configuration.php edit the following lines:
```
public $useS3 = true; //Set to true if you want to use S3 instead of local files
public $s3Key = ""; //S3 Key
public $s3Secret = ""; //S3 Secret
public $s3Bucket = ""; //Your S3 bucket
public $s3Region = ""; //S3 region
public $s3FolderName = ""; //Foldername within S3 (can be emtpy)
Set useS3 to true and fill in your key, secret, bucket name and region. The foldern ame is optional but helpful if you have additional objects in your S3 bucket.
```

*Warning:* There is currently no migration of old files to S3 (and vice versa). Files uploaded previously will remain on the local server but become unavailable through leantime. We are working on a fix for this. 

## SMTP Configuration
Leantime supports sending email via the standard `mail()` function or via smtp. To configure SMTP fill in the SMTP section with your host, username, password and the security protocol used.

```
public $useSMTP = true; //Use SMTP? If set to false, the default php mail() function will be used
public $smtpHosts = ""; //SMTP host
public $smtpUsername =""; //SMTP username
public $smtpPassword = ""; //SMTP password
public $smtpSecure =""; //SMTP Security protocol (usually one of: TLS, SSL, STARTTLS)
public $smtpPort = ""; //Port (usually one of 25, 465, 587, 2526)
```

## Nginx configuration

Leantime works with Apache out of the box. To make it work with nginx please copy the contents of the nginx.conf file in the root of the directory into your nginx.conf file (and adjust your domain name as needed). The file can also be found in our [GitHub repository](https://github.com/Leantime/leantime/blob/master/nginx.conf)


## Language
While there is a setting in the config file to change the language, this is currently not supported.
We are working on internaitonalizing the entire system. Progress is tracked on [this issue](https://github.com/Leantime/leantime/issues/59)  
