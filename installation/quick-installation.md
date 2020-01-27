# Installation

## Quick Installation 
- Download latest release package
- Create an empty MySQL database
- Upload entire directory to your server
- Point your domain to the public/ directory
- Rename config/configuration.sample.php to config/configuration.php
- Fill in your database credentials (username, password, host, dbname) in config/configuration.php
- Navigate to <yourdomain.com>/install
- Follow instructions to install database and set up first user account

## Installation - Development

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
grunt default
```

- Point your local domain to the public/ directory
- Rename config/configuration.sample.php to config/configuration.php
- Fill in your database credentials (username, password, host, dbname) in config/configuration.php
- Navigate to <localdomain>/install
- Follow instructions to install database and user account     

## Installation using Docker

To run the docker image from DockerHub you will need an existing MySQL database. 

```
docker run -d -p 80:80 --network leantime-net \
-e DB_HOST=mysql_leantime \
-e MYSQL_USER=admin \
-e MYSQL_PASSWORD=321.qwerty \
-e MYSQL_DATABASE=leantime \
--name leantime leantime/leantime:latest
```
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
-e DB_HOST=mysql_leantime \
-e MYSQL_USER=admin \
-e MYSQL_PASSWORD=321.qwerty \
-e MYSQL_DATABASE=leantime \
--name leantime leantime/leantime:latest
```

4. Run the installation script at `<yourdomain.com>/install`