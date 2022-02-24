# Installation

## General Steps

These are the steps required to install Leantime. They work for most configurations.

1. Download latest release package
2. Create an empty MySQL database
3. Upload entire directory to your server
4. Point your domain to the public/ directory
5. Rename config/configuration.sample.php to config/configuration.php
6. Fill in your database credentials (username, password, host, dbname) in config/configuration.php
7. Navigate to <yourdomain.com>/install
8. Follow instructions to install database and set up first user account

## Installation - Development

For development environments and to make changes to Leantime follow the steps below:

- Install composer and npm
- Clone repository to your local server
- Create MySQL database
- Run composer to load php dependencies

```
composer install
```

then

```
npm install
```

to load Javascript dependencies and finally run the grunt task to create the compiled js files

```
grunt Build-All
```

- Point your local domain to the public/ directory
- Rename config/configuration.sample.php to config/configuration.php
- Fill in your database credentials (username, password, host, dbname) in config/configuration.php
- Navigate to <localdomain>/install
- Follow instructions to install database and user account     

## Installation using Docker

### Docker Run

To run the docker image from DockerHub you will need an existing MySQL database. 

```
docker run -d -p 80:80 --network
-e LEAN_DB_HOST=mysql_leantime \
-e LEAN_DB_USER=admin \
-e LEAN_DB_PASSWORD=321.qwerty \
-e LEAN_DB_DATABASE=leantime \
--name leantime leantime/leantime:latest
```

You can set any of the config variables in config/configuration.php when running the docker command.

Once started you can go to `<yourdomain.com>/install` and run the installation script.

**Full set up with MySQL and network**

If you don't have a MySQL database set up and would like to create a container follow these instruction.

1. Create the network so Leantime can communicate with the MySql container.

```
docker network create leantime-net
```

2. Create the MySQL container.

```
docker run -d -p 3306:3306 --network leantime-net \
-e MYSQL_ROOT_PASSWORD=321.qwerty \
-e MYSQL_DATABASE=leantime \
-e MYSQL_USER=admin \
-e MYSQL_PASSWORD=321.qwerty \
--name mysql_leantime mysql:5.7 --character-set-server=utf8 --collation-server=utf8_unicode_ci
```

3. Create the Leantime container.

```
docker run -d -p 80:80 --network leantime-net \
-e LEAN_DB_HOST=mysql_leantime \
-e LEAN_DB_USER=admin \
-e LEAN_DB_PASSWORD=321.qwerty \
-e LEAN_DB_DATABASE=leantime \
--name leantime leantime/leantime:latest
```

4. Run the installation script at `<yourdomain.com>/install`

### Docker Compose

One command install with docker-compose.

```
git clone https://github.com/Leantime/docker-leantime.git
cd docker-leantime
docker-compose up -d
```

### Kubernetes Helm (3rd Party)

Minimal install on Kubernetes using 3rd party Helm chart. Note that by default data is not persistent, see [chart options](https://github.com/gissilabs/charts/tree/master/leantime) for more details.

```
helm repo add gissilabs https://gissilabs.github.io/charts/
helm repo update
helm install myleantime gissilabs/leantime
```

## Installation on Cloud Provider

Some hosting platforms, or Cloud Providers, provide a documentation (or even an easy process) to install Leantime.

  * alwaysdata: [install Leantime from Marketplace](https://www.alwaysdata.com/en/marketplace/leantime/)
  
## Subfolder installation

We recommend running Leantime as the main application under a domain or subdomain (eg leantime.yourcompany.com), however it is possible to run Leantime within a subfolder (eg. yourcompany.com/leantime).
To enable subfolder installations follow the steps below:

1. Uncomment line 4 in `public/.htaccess` and change the path to your subfolder
2. Set `public $appURL` in `config\configuration.php` to the URL you are planning to use including the subfolder (eg yourcompany.com/leantime)

Keep in mind that this exposes your \userfiles\ folder to the public. You should restrict access to that folder using .htaccess rules and make sure directory listings are off. 

## Common Problems

**I see a 404 error when going to domain/install**

There are two possible options why this would happen
1. The mod_rewrite module is not installed or not configued properly. 
2. Your vhost configuration does not point to the public/ folder

**I can't upload files**

This usually happens when PHP can't write to the local folder. Make sure userfiles/ and public/userfiles/ are writeable by the server user


