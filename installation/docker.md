## Docker Installtion

You have two options to install Leantime via docker. Depending on your specific use case you can user use our docker-compose file as a template to both MySql and Leantime set up or you can use docker run to just launch the leantime image. 

If you are starting from scratch and don't have a database server set up we suggest you use docker-compose. Otherwise, if you have a database server you would like to use go with docker run.

### Docker environment variables and the config file

Using docker allows you to start a Leantime instance without having to update the configuration file manually. 
In fact we strongly advice against making any changes to the files in your docker instance as these will be overwritten with an update. 

All variables from the config file can be passed in via docker environment variables. For the most part we follow the format of 
`-e LEAN_VARIABLENAME=value`

The camelcase notation in the php file gets replaced with _
The full mapping of environment variables to config variables can be found here: https://github.com/Leantime/leantime/blob/master/config/configuration.sample.php#L124


### Docker Run

As mentioned above. This uses case requires that you have an empty MySQL database set up already. Change the configutation below to use your database credentials. 

```
docker run -d -p 80:80 --network
-e LEAN_DB_HOST=mysql_leantime \
-e LEAN_DB_USER=admin \
-e LEAN_DB_PASSWORD=321.qwerty \
-e LEAN_DB_DATABASE=leantime \
--name leantime leantime/leantime:latest
```

Once started you can go to `<yourdomain.com>/install` and run the installation script.


### Using docker compose

Docker compose allows you to store your configuration in a yml file and install Leantime with MySQL, a dedicated network and volumes for the db, userfiles and configs.

1. Download or copy the `docker-compose.yml` file from our docker repository https://github.com/Leantime/docker-leantime/blob/master/docker-compose.yml
This file might seem intimidating at first but there are only a few updates you need to make to get Leantime up and running. There are 3 things happening in this file.
First we define the leantime database to be a MySQL db. This will run in it's own docker container. Second we set up the Leantime container and set the configuration file to connect with your newly created database container. Lastly we define a few volumes so that your data will remain in place if you have to tear down or move the instance. 

2. Update database
Update the credentials in lines 11-14 to something secure. Make sure your mysql database password is different from the root password. 

```
MYSQL_ROOT_PASSWORD: '<<A very secure root password>>'
MYSQL_DATABASE: '<< A db name you will remember (or not, most likely you won't have to access this>>'
MYSQL_USER: '<< A db username >>'
MYSQL_PASSWORD: '<<The very secure password for your databse (should be different from the root password above>>'
```

3. Set your Leantime configuration
Next update the leantime configuration starting in line 22. The minimal configuration should be
```
 LEAN_SITENAME: 'Leantime'                                         # Name of your site
 LEAN_DB_HOST: 'mysql_leantime'                                    # Don't change this unless you changed the container name for your database
 LEAN_DB_USER: '<< Your db username from above>>'
 LEAN_DB_PASSWORD: '<< Your db password from above>>'
 LEAN_DB_DATABASE: '<< Your db name from above>>'
 LEAN_DEFAULT_TIMEZONE: 'Europe/Stockholm'                         # Set default server timezone
 LEAN_SESSION_PASSWORD: '<< Set a very secure session password >>'         # Salting sessions. Replace with a strong password
 LEAN_SESSION_EXPIRATION: 28800         
 ```
 
 You can add as many environment variables as you like (or need). To get the full list jump to the "docker environment variables" section above
 
(Optional) 4. Rename & map volumes
Docker volumes are static connections between your host directory and the directory in your docker container. 
For example. In line 31 we define 2 volumes:
`volumes:
      - public_userfiles:/var/www/html/public/userfiles
      - userfiles:/var/www/html/userfiles
`
In this case the paths to Leantime's userfiles are mapped to local folders called `public_userfiles` & `userfiles`
You can rename the local folders to something else. DO NOT change the paths in your docker container. 

*** Starting the containers ***
Docker compose makes it incredibly easy to launch everything. All your have to do is run 
`docker-compose up -d` in the folder with your compose file




### Kubernetes Helm (3rd Party)

Minimal install on Kubernetes using 3rd party Helm chart. Note that by default data is not persistent, see [chart options](https://github.com/gissilabs/charts/tree/master/leantime) for more details.

```
helm repo add gissilabs https://gissilabs.github.io/charts/
helm repo update
helm install myleantime gissilabs/leantime
```
