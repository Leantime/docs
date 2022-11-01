## Common Problems

**I see a 404 error when going to domain/install**

There are two possible options why this would happen
1. The mod_rewrite module is not installed or not configued properly. 
2. Your vhost configuration does not point to the public/ folder

**I can't upload files**

This usually happens when PHP can't write to the local folder. Make sure userfiles/ and public/userfiles/ are writeable by the server user

**Folder 'vendor' cannot be found**

This means that you downloaded the source code and didn't run the steps as required by the development install. Either use the release package or run the steps outlined in https://docs.leantime.io/#/installation/development

**Leantime looks 'weird' after installation**
If the styles are not applied and the system looks as if it came straight from the 90s the CSS stylesheets didn't load correctly. There are 2 possible reasons for that. 
1. You installed the source code and didn't execute the grunt tasks https://docs.leantime.io/#/installation/development
2. You installed Leantime in a subfolder but forgot one of the steps outlined in: https://docs.leantime.io/#/installation/advanced

**I see `PHP Parse error: syntax error, unexpected '|', expecting ';' or '{'`**
You are running Leantime using PHP7.X Leantime required PHP8 to run. 
