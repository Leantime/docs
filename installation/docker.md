## Installation

We host our offical docker image on Docker Hub https://hub.docker.com/r/leantime/leantime
There are various other custom leantime images on docker hub which are not supported. 

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
--name leantime leantime/leantime:latest \
--mount source=public_userfiles,target=/var/www/html/public/userfiles \
--mount source=userfiles,target=/var/www/html/userfiles \
```

You should store this command somewhere (without passwords) so that you can use it when you update Leantime to the latest version. 
Once started you can go to `<yourdomain.com>/install` and run the installation script.


### Docker Compose

Docker compose allows you to store your configuration in a yml file and install Leantime with MySQL, a dedicated network and volumes for the db, userfiles and configs.

1. Download or copy the `docker-compose.yml` file from our docker repository https://github.com/Leantime/docker-leantime/blob/master/docker-compose.yml
This file might seem intimidating at first but there are only a few updates you need to make to get Leantime up and running. There are 3 things happening in this file.
First we define the leantime database to be a MySQL db. This will run in it's own docker container. Second we set up the Leantime container and set the configuration file to connect with your newly created database container. Lastly we define a few volumes so that your data will remain in place if you have to tear down or move the instance. 

2. Update the db credentials in lines 11-14 to something secure. Make sure your mysql database password is different from the root password. 

```
MYSQL_ROOT_PASSWORD: '<<A very secure root password>>'
MYSQL_DATABASE: '<< A db name you will remember (or not, most likely you won't have to access this>>'
MYSQL_USER: '<< A db username >>'
MYSQL_PASSWORD: '<<The very secure password for your databse (should be different from the root password above>>'
```

3. Next update the leantime configuration starting in line 22. The minimal configuration should be
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
 
 You can add as many environment variables as you like (or need). To get the full list jump to the "docker environment variables" section above.
 
(Optional) 4. Rename & map volumes. Docker volumes are static connections between your host directory and the directory in your docker container. 
For example. In line 31 we define 2 volumes:
`volumes:
      - public_userfiles:/var/www/html/public/userfiles
      - userfiles:/var/www/html/userfiles
`
In this case the paths to Leantime's userfiles are mapped to local folders called `public_userfiles` & `userfiles`
You can rename the local folders to something else. DO NOT change the paths in your docker container. 
You need to change the names in each container definition as well as on the bottom of the file.

#### Starting the containers
Docker compose makes it incredibly easy to launch everything. All your have to do is run 
```
docker-compose up -d
``` 
in the folder with your compose file


### Docker Volumes
Volumes are used to store permanent data on the host of your docker container. That way you can update, tear down, restart your containers without having to worry about your uploaded data. You can learn more about docker volumes at https://docs.docker.com/storage/volumes/

Leantime creates 2 mounts for for userfiles. These are the files users upload to Leantime. 
If you are keen on changing the configuration file manually you could add a third volume to 
`config:/var/www/html/config/`


## Updates

### Using docker run 
Every time we release a new version we create a new image on docker hub. Your host will not know about the update until you update your local docker image.
To check which version your have installed you can run

`docker images` 

Look for Leantime. If the version says `latest` you will have to check the date of that image and compare when Leantime was last updated on https://hub.docker.com/r/leantime/leantime/tags

You can pull the latest version from docker hub using

`docker pull leantime:leantime`

Now that you have the latest image you need to update your container. This step requires you to stop and remove your current container and start a new one.

> But wait, won't I lose all my configuration changes and files?

Yes, this is why we created volumes above to keep your uploaded files. Configuration file values are passed in using the docker run or docker compose file. 

Next let's find the old Leantime container using:

`docker ps -a --filter "ancestor=leantime:latest"` (If you installed Leantime with a specific version tag you should search for that version)

You should see a list of all docker containers with that version. You can now stop all containers using:

`docker stop $(docker ps -aq  --filter "ancestor=leantime:latest")`

Alternatively you can use the container id from the previous output and stop a container via

`docker stop <<containerID>>`

Now remove the old containers:

`docker rm $(docker ps -aq --filter "ancestor=leantime:latest")` 

or 

`docker rm <<containerID>>`

You can now follow the instructions above to set up an updated Leantime container using Docker run.


### Using docker-compose

Once again, docker compose makes things a lot easier. Here all you have to do is run the following commands in the folder of your compose file:

```
docker-compose pull
docker-compose up -d
```

Done. Docker will handle the download, stopping and recreation of your containers. 

## Common Problems

### I forgot to add my docker volume, how can I add it later?

Once a container is running you cannot add a volume after the fact. However you can create a new container that includes the the volumes (see above) and then copy the files from one container to another using `docker cp`

First create your new container using either docker compose or docker run. Instructions are above.

You should now have 2 Leantime containers. You need to find your container IDs to copy from and to containers:

`docker ps -a --filter "ancestor=leantime:latest"`

This will output a list of your containers. Write down the container id of your old container

Now copy the files from your old container to your local directory:

```
docker cp CONTAINERID:/var/www/html/public/userfiles /someLocalPath/public/userfiles
docker cp CONTAINERID:/var/www/html/userfiles /someLocalPath/userfiles
```

Now find the volumes docker created on your host. Usually these are stored in your docker application folders:
```
/var/lib/docker/volumes/public_userfiles/_data
/var/lib/docker/volumes/userfiles/_data
```

Move the files into the data folders and your new containers should now include your old files. At this point you can stop and remove the old container as this won't be needed anymore.

## I can't access the site from my public IP. 

The scenario. You have a server with the IP 10.x.x.x and executed the docker commands above. Now your docker container will have it's own IP umder 172.x.x.x 
If you want to access the site from outside of your local network using the IP 10.x.x.x you have to define that route in your host. There are many different ways to do that and covering this here would far exceed the goal of this documentation. You can find 4 ways outlined here: http://blog.oddbit.com/post/2014-08-11-four-ways-to-connect-a-docker/
