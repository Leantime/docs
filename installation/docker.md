# Docker Installation

We host our offical docker image on Docker Hub https://hub.docker.com/r/leantime/leantime. Your device needs to have Docker Installed. Please check the [Offcicial Docker](https://docs.docker.com/get-docker/) page, if you don't have Docker installed
There are various other custom leantime images on docker hub which are not supported.

You have two options to install Leantime via docker depending on your use case:

1. Use our docker-compose file as a template to both MySql and Leantime set up
2. Use docker run to just launch the leantime image.

If you are starting from scratch and don't have a database server set up we suggest you use docker-compose. Otherwise, if you have a database server you would like to use go with docker run.

## Docker Compose

Docker compose allows you to define and run multi-container docker applications. The configurations stored in a `docker-compose.yml` file is used to install Leantime with MySQL, dedicated network and volumes for the db, userfiles and configs.

1. Clone the Leantime Docker repoository from [here](https://github.com/Leantime/docker-leantime):

```
git clone https://github.com/Leantime/docker-leantime.git
```

2. Navigate to the cloned directory and create a local environment file

```
cd docker-leantime
cp sample.env .env
```

3. Edit the `.env` file. Ensure the following changes are made to the file, in order to create and configure a new MySQL container:

```
# Database - MySQL container
MYSQL_ROOT_PASSWORD = <Add a root password>                  # Database password
MYSQL_DATABASE = <Add name of the db>                        # Database name
MYSQL_USER = <Add a db username>                             # Database username
MYSQL_PASSWORD = <Add a db user password. different from root password>                    # Database password
```

4. Additionally, in the `.env`, update the leantime configuration:

```
# Database - leantime container
LEAN_DB_HOST = 'mysql_leantime'                    # Database host
LEAN_DB_USER = <db username. same as MYSQL_USER>
LEAN_DB_PASSWORD = <db password. same as MYSQL_PASSWORD>
LEAN_DB_DATABASE = <db name. same as MYSQL_DATABASE>
LEAN_DB_PORT = '3306'                              # Database port
## Default Settings
LEAN_SITENAME = 'Leantime'                         # Name of your site, can be changed later
LEAN_SESSION_PASSWORD = <Add a strong session password>
```

On top of this changes, other variables can also be changed as per your need. After making the changes save and exit the file.

5. The `docker-compose.yml` file is already updated and no changes are required to be made. The configurations executed are given below:

   - Define leantime as a MySQL db and run it's own docker container.
   - Configure leantime container to connect to the database container.
   - Volumes are defined to ensure data persistence, even if containers are stopped or rebuilt.

6. Start the docker containers:

```
docker-compose up -d
```

This command builds and starts the Docker containers defined in the `docker-compose.yml` file. The `-d` flag runs the container in detached mode(in the background)

7. Navigate to `<yourdomain.com>/install` and follow the process to complete installation.


You can stop the running containers without removing them by:

```
docker-compose stop
```

Or you can stop and remove all containers by:

```
docker-compose down
```


### Docker Volumes
Volumes are used to store permanent data on the host of your docker container. That way you can update, tear down, restart your containers without having to worry about your uploaded data. You can learn more about docker volumes at https://docs.docker.com/storage/volumes/

Leantime creates 2 mounts for for userfiles. These are the files users upload to Leantime. If you are keen on changing the configuration file manually you could add a third volume to `config:/var/www/html/config/`

## Docker Run

The other quick way to to intall Leantime, is by using Docker run to spin up an Leantime instance. Follow the steps below:

1. **Create a Docker Network**:
To allow leantime to communicate with the MySQL container, you first need to create a Docker network:

```
docker network create leantime-net
```

2. **Create a MySQL Container**:
If you don't have a MySQL database, follow these steps to create a MySQL container:

```
docker run -d --restart unless-stopped -p 3306:3306 --network leantime-net \
-e MYSQL_ROOT_PASSWORD=<Add a root password> \
-e MYSQL_DATABASE=<Add name of the db> \
-e MYSQL_USER=<Add a db username> \
-e MYSQL_PASSWORD=<Add a db user password. different from root password> \
--name mysql_leantime mysql:8.0 --character-set-server=UTF8MB4 --collation-server=UTF8MB4_unicode_ci
```

The above command does a few things, explained below:
* `docker run -d`: creates and runs a container in detached mode(run in background)
* `--restart unless-stopped`: Sets the container to restart automatically if it crashes or if the Docker daemon restarts.
* `-p 3306: 3306`: maps the container's port to host machines port
* `--network leantime-net`: Connects the container to a Docker network, in this case `leantime-net` created in step 1.
* The following 4 lines sets the root password for MySQL, creates a new databasse, and creates and sets new username and their respective password.
* `--name mysql_leantime mysql:8.0 --character-set-server=UTF8MB4 --collation-server=UTF8MB4_unicode_ci`: names the container `mysql_leantime` and uses the MySQL 8.0 image and configures Character set and collation.

3. If you already had a MySQL container and did not execute ***Step 2***, the you must ensure the created network is connected to your MySQL container by running:
```
docker network connect leantime-net <your MySQL container name>
```

To verify if the connection was successful, run
```
docker network inspect leantime-net
```

and check "Containers" section. Then run 
```
docker inspect <your MySQL container name>
```
and check "Network" section and verify 'leantime-net' is included

4. **Create a Leantime container**: Now, you have to create a leantime container and configure it to connect to the MySQL container:

```
docker run -d --restart unless-stopped -p 80:80 --network leantime-net \
-e LEAN_DB_HOST=mysql_leantime \
-e LEAN_DB_USER=<db username. same as MYSQL_USER> \
-e LEAN_DB_PASSWORD=<db user password. same as MYSQL_PASSWORD> \
-e LEAN_DB_DATABASE=<db name. same as MYSQL_DATABASE> \
--name leantime leantime/leantime:latest
```
Similar to step 2, a new conatiner **leantime** is created and run in detached mode, mapped port 80, and connected to container `leantime-net` network. Please ensure the `LEAN_DB_USER`, `LEAN_DB_PASSWORD` and `LEAN_DB_DATABASE` are same as `MYSQL_USER`, `MYSQL_PASSWORD` and `MYSQL_DATABASE` from Step 2 (or the DB you are using).

5. Once both the containers are running, go to `<yourdomain.com>/install` and follow the process to complete installation.

You can stop a specific container by running 
```
docker stop leantime
```
or multiple containers using
```
docker stop leantime mysql_leantime
```

## Plugins

If you are planning on using and installing plugins from the marketplace please ensure to mount the Plugin folder as suggested in the docker-compose file. Otherwise plugin installation may fail or plugins will disapper after a restart of the container.

<!--

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

Once a container is running you cannot add a volume after the fact. However you can create a new container that includes the volumes (see above) and then copy the files from one container to another using `docker cp`

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

### I can't access the site from my public IP.

The scenario. You have a server with the IP 10.x.x.x and executed the docker commands above. Now your docker container will have it's own IP umder 172.x.x.x
If you want to access the site from outside of your local network using the IP 10.x.x.x you have to define that route in your host. There are many different ways to do that and covering this here would far exceed the goal of this documentation.
Docker recommends creating a network that is connected to your local network adapter: https://blog.oddbit.com/post/2018-03-12-using-docker-macvlan-networks/
You can find 4 other ways outlined here: http://blog.oddbit.com/post/2014-08-11-four-ways-to-connect-a-docker/ -->
