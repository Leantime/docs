## Development using Docker
  
For development, we use a dockerized development environment. You will need to have
``docker``, ``docker compose``, ``make``, ``composer`` and ``npm`` installed. to run the application for development, in the root of this repository, run a primer with

```make clean build```

afterwards, run 

```make run-dev```

this will start the development server on port 8080.

The dev environment  provides a mysql server, mail server, s3 server, and should be good to go for your needs out of the box. The configuration of the development environment is found in ``.dev/.env``, and is already seeded with the appropriate values. **You should probably not be modifying this unless you plan to work on a feature for a specific integration**. the applications you get are as follows

* [http://localhost:8080](http://localhost:8080) : leantime
* [http://localhost:8081](http://localhost:8081) : maildev - to check emails sent
* [http://localhost:8082](http://localhost:8082) : phpmyadmin(authentication ``leantime:leantime``) to check the DB schema and data
* [http://localhost:8083](http://localhost:8083) : s3ninja - to check s3 uploads. You need to enable this in the ``.dev/.env`` file by enabling s3

Additionally, XDebug is enabled, but you will have to modify your 
IDE key in the ``.dev/xdebug.ini`` file(or alternatively, on your IDE). You also need to have port 9003 temporarily open on your firewall so you can utilize it effectively. This is because connections from docker to the host will count as external inbound connection


## Development on host

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
npx mix
```

- Point your local domain to the public/ directory
- Rename config/configuration.sample.php to config/configuration.php
- Fill in your database credentials (username, password, host, dbname) in config/configuration.php
- Navigate to <localdomain>/install
- Follow instructions to install database and user account     

