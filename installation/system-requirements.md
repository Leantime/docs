# System Requirements

Leantime can be installed on a variety of configurations. Here is a list of minimum requirements that have been tested and proven to work.

- PHP 7.2 and up
- Apache with mod_rewrite
- MySQL 5.6 

**PHP Extensions needed**

- Required: MySQL, mbstring
- Optional: Curl (for Integrations), gd, imagick, xml (for 2FA QR code generation)

**Other considerations**

- The Leantime folder should be writeable by the server user (usually apache or www-data)
- We have done limited testing on 5.7. Strict mode is currently not supported
 
