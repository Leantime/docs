## Subfolder installation

To run Leantime in a subfolder (for example `yourcompany.com/leantime`), see [Subfolder Installation](installation/subfolder.md).

## Getting Leantime onto a Raspberry Pi

The official [`leantime/leantime`](https://hub.docker.com/r/leantime/leantime) image runs on ARM (arm64 and 32-bit arm), so a Raspberry Pi uses the normal [Docker based installation](installation/docker.md). You don't need to build the image yourself.

- **Use a 64-bit OS** (Raspberry Pi OS 64-bit or Ubuntu Server for arm64) if you can. The official `mysql:8.4` and `mariadb` images are available for arm64 but not for 32-bit arm.
- **On a 32-bit OS**, install MariaDB 10.6 or later on the Pi itself (`sudo apt install mariadb-server`) and point Leantime at it. Create the database user for `'%'` (or the container's IP) rather than `'localhost'`, and remove `bind-address = 127.0.0.1` from the MariaDB config (usually `/etc/mysql/mariadb.conf.d/50-server.cnf`) so the container can connect, then restart MariaDB: `sudo systemctl restart mariadb`. Then set `LEAN_DB_HOST` to the Pi's IP address, or add `--add-host=host.docker.internal:host-gateway` and use `host.docker.internal`.

Thanks to @lamping7 for the original Raspberry Pi guide.

