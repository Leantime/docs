## Common Problems

**I see a 404 error when going to domain/install**

There are two possible options why this would happen
1. The mod_rewrite module is not installed or not configued properly. 
2. Your vhost configuration does not point to the public/ folder

**I can't upload files**

This usually happens when PHP can't write to the local folder. Make sure userfiles/ and public/userfiles/ are writeable by the server user
