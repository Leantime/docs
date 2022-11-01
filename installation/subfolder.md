## Subfolder installation

We recommend running Leantime as the main application under a domain or subdomain (eg leantime.yourcompany.com), however it is possible to run Leantime within a subfolder (eg. yourcompany.com/leantime).
To enable subfolder installations follow the steps below:

1. Uncomment line 4 in `public/.htaccess` and change the path to your subfolder
2. Set `public $appURL` in `config\configuration.php` to the URL you are planning to use including the subfolder (eg yourcompany.com/leantime)

Keep in mind that this exposes your \userfiles\ folder to the public. You should restrict access to that folder using .htaccess rules and make sure directory listings are off. 
