# Package based Installation

<!-- These are the steps required to install Leantime. They work for most configurations. -->

To get started with Leantime, make sure you meet the [**system requirements and dependencies**](installation/system-requirements.md), and then follow the installation steps below either using **Apache** or **Nginx**:

1. Download the latest [**release package**](https://github.com/Leantime/leantime/releases)

2. Create a empty MySQL database

3. Create a leantime directory and set appropriate permissions

```bash
cd /var/www/html/
sudo mkdir leantime
sudo chown -R www-data:www-data leantime
sudo chmod -R 755 leantime
```

4. Upload the unzipped release package in the newly created `leantime` directory

## Apache Installation Process

5. Configure Apache to point to `public\` of leantime

```bash
cd /etc/apache2/sites-available/
sudo nano leantime.conf
```

6. Add the following code in `leantime.conf` and save it:

```leantime.conf
<VirtualHost *:80>
        ServerName leantime
        DocumentRoot /var/www/html/leantime/public

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

7. Enable the new site configuration, rewrite module and restart apache:
<!-- sudo a2dissite 000-default.conf -->

```bash
sudo a2ensite leantime.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

8. Navigate to the `config/` directory in your leantime installation. Rename `.env.sample` to `.env`

9. Fill in your database credentials (username, password, host, dbname) in `.env`

```.env
LEAN_APP_URL =<your base url>           # Base URL

LEAN_DB_HOST=<your host name>
LEAN_DB_USER=<your db_user name>
LEAN_DB_PASSWORD=<your db_user password>
LEAN_DB_DATABASE=<your db name. From step 1>
LEAN_DB_PORT='3306'                     # Database default port
```

10. Navigate to `<yourdomain.com>/install`

11. Follow instructions to install database and set up User Account

## Nginx Installation Process

5. Configure Nginx to point to `public\` of leantime

```bash
cd /etc/nginx/sites-available/
sudo nano leantime
```

6. Add the following code in `leantime` file and save it:

```leantime
server {
    listen 80;
    server_name leantime;
    root /var/www/html/leantime/public;
    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

7. Enable the new site configuration, rewrite module and restart apache:

```bash
sudo ln -s /etc/nginx/sites-available/leantime /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

8. Navigate to the `config/` directory in your leantime installation. Rename `.env.sample` to `.env`

9. Fill in your database credentials (username, password, host, dbname) in `.env`

```.env
LEAN_APP_URL =<your base url>           # Base URL

LEAN_DB_HOST=<your host name>
LEAN_DB_USER=<your db_user name>
LEAN_DB_PASSWORD=<your db_user password>
LEAN_DB_DATABASE=<your db name. From step 1>
LEAN_DB_PORT='3306'                     # Database default port
```

10. Navigate to `<yourdomain.com>/install`

11. Follow instructions to install database and set up User Account
