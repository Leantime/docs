# Subfolder Installation

We recommend running Leantime on its own domain or subdomain (for example `leantime.yourcompany.com`). You can also run it in a subfolder of an existing website (for example `yourcompany.com/leantime`).

Install Leantime as in the [package installation](installation/package-installation.md), with one change: put it in a folder **outside** your website's document root. If your website's document root is `/var/www/html`, use `/var/www/leantime`, not `/var/www/html/leantime`. Then only Leantime's `public/` folder can be reached from the web, and `config/` (your `.env` with passwords) and `userfiles/` (uploaded files) stay private.

The examples below use `/var/www/leantime` and the subfolder `/leantime`. Replace both with yours.

## Apache

You need Apache 2.4 with `mod_rewrite` (`sudo a2enmod rewrite`).

1. In your existing website's virtual host, map `/leantime` to Leantime's `public/` folder:

   ```apache
   Alias /leantime /var/www/leantime/public

   <Directory /var/www/leantime/public>
       Options +FollowSymLinks
       AllowOverride All
       Require all granted
   </Directory>
   ```

   `AllowOverride All` lets Leantime's own `public/.htaccess` send requests to `index.php`. You don't need to change that file, so Leantime updates don't undo your setup.

2. In `config/.env`, set `LEAN_APP_URL` to the full address, including the subfolder:

   ```ini
   LEAN_APP_URL = 'https://yourcompany.com/leantime'
   ```

3. Check the configuration and reload Apache:

   ```bash
   sudo apachectl configtest
   sudo systemctl reload apache2
   ```

## Nginx

1. Add these three blocks inside the `server` block of your existing website. Use the PHP-FPM socket of your PHP version, as in the [Nginx steps](installation/package-installation.md#nginx-installation-process):

   ```nginx
   # Leantime in /leantime
   location = /leantime {
       return 301 /leantime/;
   }

   location ^~ /leantime/ {
       alias /var/www/leantime/public/;
       index index.php;
       try_files $uri $uri/ @leantime;

       location ~ /\.ht {
           deny all;
       }

       location ~ \.php$ {
           include fastcgi_params;
           fastcgi_param SCRIPT_FILENAME $request_filename;
           fastcgi_pass unix:/var/run/php/php8.3-fpm.sock; # match your PHP version (8.2 or later)
       }
   }

   location @leantime {
       rewrite ^/leantime/(.*)$ /leantime/index.php last;
   }
   ```

   - The trailing slashes in `/leantime/` and `public/` keep your website's own pages that start with the same letters, like `/leantime.php` or `/leantime-news`, out of Leantime. The first block sends `/leantime` to `/leantime/`.
   - `^~` stops your website's own regex blocks, such as `location ~ \.php$`, from handling Leantime's files. That also skips your site's own `.ht` rule, so the block repeats it to keep `.htaccess` private.
   - `SCRIPT_FILENAME $request_filename` gives PHP-FPM the real path of `index.php` under `alias`. With `$fastcgi_script_name`, PHP-FPM gets `/leantime/index.php` and can't find the file.

2. Set `LEAN_APP_URL` in `config/.env` as in the Apache steps.

3. Check the configuration and reload Nginx:

   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

## Leantime is already inside the document root

If Leantime's folder has to stay inside your website's document root, its other folders can be reached from the web too. Block web access to everything outside `public/`, especially `config/` and `userfiles/`, and turn off directory listings. Moving the folder out of the document root is safer.
