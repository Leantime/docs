# System Requirements

Leantime can be installed on a variety of configurations. Here is a list of minimum requirements that have been tested and proven to work.

- PHP 8.0 and up
- Apache with mod_rewrite, Nginx, IIS (possible with adjustments)
- MySQL 5.7+ 

**PHP Extensions needed**

- Required: MySQL, mbstring
- Optional: Curl (for Integrations), gd, imagick, xml (for 2FA QR code generation), ldap

**Other considerations**

- The Leantime folder should be writeable by the server user (usually apache or www-data)
- Strict mode is currently not supported
 
