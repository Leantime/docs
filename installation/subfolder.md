# Subfolder Installation

We recommend running Leantime on its own domain or subdomain (for example `leantime.yourcompany.com`). You can also run it in a subfolder (for example `yourcompany.com/leantime`), with these changes to a [package installation](installation/package-installation.md).

## Apache

1. Add a `RewriteBase` line to `public/.htaccess`, with your subfolder's path:

   ```
   Options +FollowSymLinks
   RewriteEngine On

   RewriteBase /leantime

   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.php [L,QSA]
   ```

   Replace `/leantime` with your subfolder.

2. In `config/.env`, set `LEAN_APP_URL` to the full address, including the subfolder:

   ```ini
   LEAN_APP_URL = 'https://yourcompany.com/leantime'
   ```

Leantime updates replace `public/.htaccess`, so add the `RewriteBase` line again after each update.

## Nginx

1. Start from [`nginx-subfolder.example.conf`](https://github.com/Leantime/leantime/blob/master/nginx-subfolder.example.conf) in the Leantime repository. Change the paths and the subfolder name, then enable the site as in the [Nginx steps](installation/package-installation.md#nginx-installation-process).
2. Set `LEAN_APP_URL` in `config/.env` as above.

## Keep your files private

In a subfolder installation the whole Leantime folder sits inside your web server's document root, not just `public/`. Block web access to everything outside `public/`, especially `userfiles/` (uploaded files) and `config/` (your `.env` with passwords), and turn off directory listings.
