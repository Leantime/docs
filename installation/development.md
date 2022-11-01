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
