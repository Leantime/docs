  
## Subfolder installation

We recommend running Leantime as the main application under a domain or subdomain (eg leantime.yourcompany.com), however it is possible to run Leantime within a subfolder (eg. yourcompany.com/leantime).
To enable subfolder installations follow the steps below:

1. Uncomment line 4 in `public/.htaccess` and change the path to your subfolder
2. Set `public $appURL` in `config\configuration.php` to the URL you are planning to use including the subfolder (eg yourcompany.com/leantime)

Keep in mind that this exposes your \userfiles\ folder to the public. You should restrict access to that folder using .htaccess rules and make sure directory listings are off. 

## Getting Leantime onto a Raspberry Pi 
  
1. MySQL for ARM: We suggest you use `beercan1989/arm-mysql:5.7`. Otherwise you can also install mariadb on the host following [this guide](https://pimylifeup.com/raspberry-pi-mysql/)

2. The entrypoint (start.sh) for the image on docker hub does not compile for arm. You will need to clone the repo and build the image locally (following the steps above).
  
3. Now you need to fuss with getting access to the database from inside the container. When a user for the database is created, don't use @'localhost'. Use @'%' or replace % with the subdomain/IP of your docker container. If you failed to do this, you'll need to fix it using the GRANT command.
  
4. Make sure the mariadb is configured to setup the TCP port, by commenting out the bind-address in the configs. #bind-address=127.0.0.1, For me this was found in the file /etc/mysql/mariadb.conf.d/50-server.cnf, then restart mariadb sudo systemctl restart mariadb.service if you had to change this.
  
5. Finally, we have a slightly modified run command. I added the --add-host=docker:xxx.xxx.xxx.xxx option and removed the --network, making the -e DB_HOST=docker. Basically I kept a default bridged network with the host, but this allows the container to resolve the IP of your host. 
  
Thank you @lamping7 for providing this guide!

## Kubernetes Helm (3rd Party)

Minimal install on Kubernetes using 3rd party Helm chart. Note that by default data is not persistent, see [chart options](https://github.com/gissilabs/charts/tree/master/leantime) for more details.

```
helm repo add gissilabs https://gissilabs.github.io/charts/
helm repo update
helm install myleantime gissilabs/leantime
```
