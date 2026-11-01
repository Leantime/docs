# System Requirements

There are two main ways of installing Leantime, which are given below:

- **Package based installation** requires a Linux Distribution, preferably Ubuntu 20.04+.
- **Docker-based installation** requires a system with [**Docker**](https://www.docker.com/) installed and **docker-compose**.

Leantime can be installed on a variety of configurations. Here is a list of minimum requirements that have been tested and proven to work.

- **Runtime:** [PHP](https://www.php.net/) 8.0 and up
- **Webserver:** [Apache](https://www.apache.org/) with mod_rewrite or [Nginx](https://nginx.org/en/)
- **Database:** [MySQL](https://www.mysql.com/) 5.7+ along with necessary credentials (Username, Password, Host Information)

**PHP Extensions needed**

- Required: MySQL, mbstring
- Optional: Curl (for Integrations), gd, imagick, xml (for 2FA QR code generation), ldap

**Other considerations**

- The Leantime folder should be writeable by the server user (usually apache or www-data)
- Strict mode is currently not supported
