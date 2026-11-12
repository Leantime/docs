## Subfolder installation

It is also possible to run Leantime within a subfolder (eg. yourcompany.com/leantime). For subfolder installation follow the steps below:

**For Apache:** If you are using **_apache_**, in addition to the Apache package based installation from [**here**](installation/quick-installation.md), execute the following steps:

1. Modify the `public/.htaccess` file as below:

```
Options +FollowSymLinks
RewriteEngine On

RewriteBase /subfolder

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.php [L]
```

The RewriteBase directive tells Apache the base URL path for rewriting. Replace `/subfolder` with your actual folder path.

2. In the `config/.env` file, the `LEAN_APP_URL` variable need to be set to include your subfolder.

```
LEAN_APP_URL = 'https://yourcompany.com/subfolder'
```

**For Nginx:** Copy the `nginx-subfoler.example.conf` file, and place it in the Nginx configuration directory. Make the necessary changes and enable configuration as given [**here**](installation/quick-installation.md) in Nginx section.

Then similar to above, the `LEAN_APP_URL` in `config/.env` should be changed.

**_Security considerations:_** Please keep in mind, installing Leantime in a subfolder makes the `/userfiles` directory publicly accessible. Access to these files should be restricted by using .htaccess rules. Additionally, you could also put route redirects where needed.

## Getting Leantime onto a Raspberry Pi

The official [`leantime/leantime`](https://hub.docker.com/r/leantime/leantime) image runs on ARM (arm64 and 32-bit arm), so a Raspberry Pi uses the normal [Docker based installation](installation/docker.md). You don't need to build the image yourself.

- **Use a 64-bit OS** (Raspberry Pi OS 64-bit or Ubuntu Server for arm64) if you can. The official `mysql:8.4` and `mariadb` images are available for arm64 but not for 32-bit arm.
- **On a 32-bit OS**, install MariaDB 10.6 or later on the Pi itself (`sudo apt install mariadb-server`) and point Leantime at it. Create the database user for `'%'` (or the container's IP) rather than `'localhost'`, and remove `bind-address = 127.0.0.1` from the MariaDB config so the container can connect. Then set `LEAN_DB_HOST` to the Pi's IP address, or add `--add-host=host.docker.internal:host-gateway` and use `host.docker.internal`.

Thanks to @lamping7 for the original Raspberry Pi guide.

