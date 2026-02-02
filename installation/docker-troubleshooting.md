# Docker Troubleshooting

This guide covers common issues when deploying Leantime with Docker and how to resolve them.

## Quick Diagnostics

Before diving into specific issues, run these checks:

```bash
# Check container status
docker ps -a | grep leantime

# View container logs
docker logs leantime

# Check application logs (inside container)
docker exec -it leantime cat /var/www/html/storage/logs/leantime-$(date +%Y-%m-%d).log

# Verify database connectivity
docker exec -it leantime php -r "new PDO('mysql:host=\$_ENV[\"LEAN_DB_HOST\"];dbname=\$_ENV[\"LEAN_DB_DATABASE\"]', \$_ENV['LEAN_DB_USER'], \$_ENV['LEAN_DB_PASSWORD']);"
```

---

## Common Issues

### 1. Endless Redirect Loop After Fresh Install

**Symptoms:**
- "Welcome to Leantime!" dialog keeps appearing
- - Browser shows repeated HTTP 302 redirects
  - - Unable to dismiss the welcome screen
   
    - **Causes:**
    - - Default project failed to initialize during installation
      - - Database connection issues during setup
        - - Browser cache holding stale session data
         
          - **Solutions:**
         
          - 1. **Clear browser cache and cookies** for the Leantime domain, then try again
           
            2. 2. **Check the logs for initialization errors:**
               3.    ```bash
                        docker exec -it leantime cat /var/www/html/storage/logs/leantime-$(date +%Y-%m-%d).log
                        ```
                        Look for errors like: `Cannot assign null to property...projectName`

                 3. **Verify database was properly initialized:**
                 4.    ```bash
                          docker exec -it leantime_db mysql -u leantime -p -e "USE leantime; SHOW TABLES;"
                          ```
                          You should see 50+ tables. If empty, the install didn't complete.

                   4. **Fresh start (if needed):**
                  ```bash
                     docker-compose down -v  # Warning: removes volumes
                     docker-compose up -d
                     ```

                  5. **Ensure `LEAN_APP_URL` is set correctly** in your environment:
                     ```env
                     LEAN_APP_URL='https://leantime.yourdomain.com'
                     ```

                  ---

                  ### 2. DB Update Loop (v3.6.x Upgrades)

                  **Symptoms:**
                  - `/install/update` page appears after upgrade
                  - Clicking "Update Database" causes endless redirect
                  - HTTP 303 responses in a loop

                  **Cause:**
                  This was a bug in version 3.6.1 specifically.

                  **Solution:**

                  1. **Upgrade to v3.6.2 or later** - This version contains the fix:
                     ```bash
                     docker pull leantime/leantime:3.6.2
                     docker-compose up -d
                     ```

                  2. **Alternative: Run migration from CLI:**
                     ```bash
                     docker exec -it leantime php ./bin/leantime db:migrate
                     ```

                  ---

                  ### 3. /install Page Stuck in Redirect Loop

                  **Symptoms:**
                  - Cannot access `/install` page
                  - Browser hits redirect limit
                  - Database errors about missing tables

                  **Causes:**
                  - Cached session data from previous install attempts
                  - Database not empty but incomplete
                  - `LEAN_APP_URL` misconfigured

                  **Solutions:**

                  1. **Clear cache and session files:**
                     ```bash
                     docker exec -it leantime rm -rf /var/www/html/storage/framework/cache/*
                     docker exec -it leantime rm -rf /var/www/html/storage/framework/sessions/*
                     ```

                  2. **Ensure database is empty** before fresh install:
                     ```bash
                     docker exec -it leantime_db mysql -u root -p -e "DROP DATABASE leantime; CREATE DATABASE leantime;"
                     ```

                  3. **Set `LEAN_APP_URL` properly** including protocol:
                     ```env
                     LEAN_APP_URL='https://leantime.example.com'  # Not just 'leantime.example.com'
                     ```

                  4. **If behind a reverse proxy**, also set:
                     ```env
                     LEAN_SESSION_SECURE=true
                     ```

                  ---

                  ### 4. PostgreSQL "Could Not Find Driver" Error

                  **Symptoms:**
                  - `PDOException: could not find driver`
                  - Occurs when `LEAN_DB_DRIVER=pgsql` is set

                  **Cause:**
                  The official Leantime Docker image does not include the PostgreSQL PDO driver.

                  **Solution:**

                  Create a custom Dockerfile:

                  ```dockerfile
                  FROM leantime/leantime:latest

                  USER root
                  RUN apk add --no-cache libpq libpq-dev && \
                      docker-php-ext-install pdo_pgsql && \
                      apk del libpq-dev
                  USER www-data
                  ```

                  Build and use:
               ```bash
               docker build -t leantime-pgsql .
               # Update your docker-compose.yml to use leantime-pgsql instead
               ```

               ---

               ### 5. Helm Chart MariaDB Image Not Found

               **Symptoms:**
               - Kubernetes deployment fails
               - - Error: `Failed to pull image 'docker.io/bitnami/mariadb:10.6.12-debian-11-r9'`
                
                 - **Cause:**
                 - The pinned MariaDB image tag in the Helm chart is outdated.
                
                 - **Solution:**
                
                 - Override the MariaDB image in your Helm values:
                
                 - ```yaml
                   # values.yaml
                   mariadb:
                     image:
                       tag: "10.6"  # Use a more general tag
                   ```

                   Or specify a known working tag:
                   ```bash
                   helm install leantime leantime/leantime \
                     --set mariadb.image.tag=10.6.16-debian-11-r0
                   ```

                   ---

                   ### 6. Permission Denied Errors

                   **Symptoms:**
                   - `Operation not permitted` errors
                   - - Cannot write to logs or userfiles
                     - - Upload failures
                      
                       - **Solutions:**
                      
                       - 1. **Check volume ownership:**
                         2.    ```bash
                                  docker exec -it leantime ls -la /var/www/html/userfiles/
                                  docker exec -it leantime ls -la /var/www/html/storage/logs/
                                  ```

                               2. **Fix permissions (inside container):**
                               3.    ```bash
                                        docker exec -it leantime chown -R www-data:www-data /var/www/html/userfiles/
                                        docker exec -it leantime chown -R www-data:www-data /var/www/html/storage/
                                        docker exec -it leantime chmod -R 775 /var/www/html/storage/
                                        ```

                                     3. **For persistent fixes**, ensure your `docker-compose.yml` mounts volumes correctly:
                                     4.    ```yaml
                                              volumes:
                                                - ./userfiles:/var/www/html/userfiles
                                                - ./storage:/var/www/html/storage
                                              ```

                                           ---

                                       ### 7. Container Won't Start (syslog Disabled)

                                 **Symptoms:**
                           - Container crashes immediately
                           - - Error related to `syslog()` function
                            
                             - **Cause:**
                             - Some minimal Docker environments disable syslog.
                            
                             - **Solution:**
                            
                             - Set the log driver in your environment:
                             - ```env
                               LEAN_LOG_CHANNEL=daily
                               ```

                               Or in `docker-compose.yml`:
                               ```yaml
                               environment:
                                 - LEAN_LOG_CHANNEL=daily
                               ```

                               ---

                               ## Backup and Restore

                               ### What to Back Up

                               1. **Database** - All project data, users, tasks
                               2. 2. **User files** - Uploaded attachments and images
                                  3. 3. **Configuration** - Your `.env` file or environment variables
                                    
                                     4. ### Backup Commands
                                    
                                     5. ```bash
                                        # Backup database
                                        docker exec leantime_db mysqldump -u leantime -p leantime > backup-$(date +%Y%m%d).sql

                                        # Backup user files
                                        docker cp leantime:/var/www/html/userfiles ./userfiles-backup
                                        docker cp leantime:/var/www/html/public/userfiles ./public-userfiles-backup
                                        ```

                                        ### Restore Commands

                                        ```bash
                                        # Restore database
                                        docker exec -i leantime_db mysql -u leantime -p leantime < backup-20260202.sql

                                        # Restore user files
                                        docker cp ./userfiles-backup/. leantime:/var/www/html/userfiles/
                                        docker cp ./public-userfiles-backup/. leantime:/var/www/html/public/userfiles/
                                        ```

                                        ### Before Upgrading

                                        **Always back up before updating:**

                                        ```bash
                                        # 1. Backup everything
                                        docker exec leantime_db mysqldump -u leantime -p leantime > pre-upgrade-backup.sql
                                        docker cp leantime:/var/www/html/userfiles ./userfiles-pre-upgrade

                                        # 2. Pull new image
                                        docker pull leantime/leantime:latest

                                        # 3. Restart with new image
                                        docker-compose up -d
                                        ```

                                        ---

                                        ## Reverse Proxy Configuration

                                        ### Nginx

                                        ```nginx
                                        server {
                                            listen 443 ssl;
                                            server_name leantime.example.com;

                                            ssl_certificate /etc/nginx/ssl/cert.pem;
                                            ssl_certificate_key /etc/nginx/ssl/key.pem;

                                            location / {
                                                proxy_pass http://localhost:8080;
                                                proxy_set_header Host $host;
                                                proxy_set_header X-Real-IP $remote_addr;
                                                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                                                proxy_set_header X-Forwarded-Proto $scheme;
                                            }
                                        }
                                        ```

                                        ### Traefik (docker-compose labels)

                                        ```yaml
                                        services:
                                          leantime:
                                            labels:
                                              - "traefik.enable=true"
                                              - "traefik.http.routers.leantime.rule=Host(`leantime.example.com`)"
                                              - "traefik.http.routers.leantime.tls=true"
                                              - "traefik.http.routers.leantime.tls.certresolver=letsencrypt"
                                        ```

                                        ### Environment Variables for Proxies

                                        When behind a reverse proxy, set these in your Leantime container:

                                        ```env
                                        LEAN_APP_URL='https://leantime.example.com'
                                        LEAN_SESSION_SECURE=true
                                        ```

                                        ---

                                        ## Health Checks

                                        Add health checks to your `docker-compose.yml`:

                                        ```yaml
                                        services:
                                          leantime:
                                            image: leantime/leantime:latest
                                            healthcheck:
                                              test: ["CMD", "curl", "-f", "http://localhost/api/jsonrpc"]
                                              interval: 30s
                                              timeout: 10s
                                              retries: 3
                                              start_period: 40s
                                        ```

                                        ---

                                        ## Getting Help

                                        If you're still stuck after trying these solutions:

                                        1. Check the full logs: `docker logs leantime --tail 100`
                                        2. 2. Search [GitHub Issues](https://github.com/leantime/leantime/issues)
                                           3. 3. Ask in the [Discord Community](https://discord.gg/4zMzJtAq9z) #self-hosted channel
                                             
                                              4. When asking for help, include:
                                              5. - Leantime version (`docker exec leantime cat version.php`)
                                                 - - Your `docker-compose.yml` (with passwords redacted)
                                                   - - Relevant log output
                                                     - - Steps to reproduce the issue
