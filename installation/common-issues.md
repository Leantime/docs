## Common Problems

First check the output of `/storage/logs/leantime-xx-xx-xx.log` 

###  Login just refreshes (no error message)

This is usually caused by 1 out of 2 commone issues:
A. The session folder was removed or does not have the appropriate permissions to write sessions. For this just make sure that the session directory is owned by the php user
B. `LEAN_SESSION_SECURE` is set to true but requests are served via http. `LEAN_SESSION_SECURE` forces PHP to only read cookies if they have been sent via https. If the requests comes in via http cookies will not be read. 
If you would like to serve Leantime via http then you must set `LEAN_SESSION_SECURE` to `false`

###  mkdir(): No such file or directory at ... after update

One of our previous versions removed session folders to reset cache. When running the system:update command as root this caused a permission mismatch. 
Easiest solution is to create the folder and update Leantime to the latest version. 

### I see a 404 error when going to domain/install

There are two possible options why this would happen
1. The mod_rewrite module is not installed or not configued properly. 
2. Your vhost configuration does not point to the public/ folder

### I can't upload files

This usually happens when PHP can't write to the local folder. Make sure userfiles/ and public/userfiles/ are writeable by the server user

###  Folder 'vendor' cannot be found

This means that you downloaded the source code and didn't run the steps as required by the development install. Either use the release package or run the steps outlined in https://docs.leantime.io/#/installation/development

### Leantime looks 'weird' after installation

If the styles are not applied and the system looks as if it came straight from the 90s the CSS stylesheets didn't load correctly. There are 2 possible reasons for that. 
1. You installed the source code and didn't execute the grunt tasks https://docs.leantime.io/#/installation/development
2. You installed Leantime in a subfolder but forgot one of the steps outlined in: https://docs.leantime.io/#/installation/advanced

### I see `PHP Parse error: syntax error, unexpected '|', expecting ';' or '{'`**

You are running Leantime using PHP7.X Leantime required PHP8 to run. 

### HX, PATCH, PUT, DELETE methods return 404

More than likely your apache/iis if configured to only allow post and get http methods. We use the entire spectrum of http request methods. Please add
```
<Limit GET POST PUT OPTIONS DELETE PATCH HEAD>
    Require all granted
</Limit>
<LimitExcept GET POST PUT OPTIONS DELETE PATCH HEAD>
    Require all denied
</LimitExcept>
```
to your .htaccess file to allow these methods 
