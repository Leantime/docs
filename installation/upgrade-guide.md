# Upgrade Guide

This guide covers upgrading Leantime to newer versions, including backup procedures, upgrade methods, and troubleshooting.

## Before You Upgrade

### Pre-Upgrade Checklist

1. **Backup your database** - Critical, cannot be skipped
2. 2. **Backup your files** - Especially `config/configuration.php` and custom plugins
   3. 3. **Check PHP requirements** - Leantime 3.6+ requires PHP 8.1+
      4. 4. **Note your current version** - Check Settings > About
         5. 5. **Review release notes** - Check GitHub Releases for breaking changes
           
            6. ## Backup Procedures
           
            7. ### Database Backup
           
            8. **Docker:**
            9. ```bash
               docker exec leantime_db mysqldump -u leantime -p'password' leantime > backup_$(date +%Y%m%d).sql
               ```

               **Package install:**
               ```bash
               mysqldump -u leantime -p leantime > backup_$(date +%Y%m%d).sql
               ```

               ### File Backup

               ```bash
               cp config/configuration.php config/configuration.php.backup
               cp -r userfiles/ userfiles_backup/
               ```

               ## Upgrade Methods

               ### Docker Upgrade

               ```bash
               # Update docker-compose.yml with new version
               docker-compose down
               docker-compose pull
               docker-compose up -d
               docker exec -it leantime php ./bin/leantime db:migrate
               ```

               ### Package Installation

               ```bash
               wget https://github.com/Leantime/leantime/releases/download/v3.6.2/Leantime-v3.6.2.zip
               unzip Leantime-v3.6.2.zip
               # Copy files, preserving config
               php ./bin/leantime db:migrate
               php ./bin/leantime cache:clear
               ```

               ## Version-Specific Notes

               ### Upgrading to v3.6.x (from 3.5.x)

               **Important:** Skip v3.6.0 and v3.6.1 - upgrade directly to **v3.6.2 or later**.

               Known issues in 3.6.0/3.6.1:
               - Database update redirect loops
               - - Missing JavaScript assets causing loading failures
                 - - Error 500 when opening projects
                  
                   - All fixed in v3.6.2.
                  
                   - ## Troubleshooting
                  
                   - ### Database Update Redirect Loop
                  
                   - **Symptom:** Redirected to `/install/update`, clicking button just refreshes the page.
                  
                   - **Solutions:**
                   - 1. Upgrade to v3.6.2+
                     2. 2. Run migration manually: `php ./bin/leantime db:migrate`
                       
                        3. ### Error 500 After Upgrade
                       
                        4. **Check logs:**
                        5. ```bash
                           docker logs leantime
                           # or
                           cat storage/logs/leantime.log
                           ```

                           **Common causes:**
                           - PHP version mismatch (need 8.1+)
                           - - Missing PHP extensions
                             - - File permission issues
                               - - Cache needs clearing
                                
                                 - ### Loading Screen Stuck
                                
                                 - **Symptom:** Spinner shows forever, page never loads.
                                
                                 - **Solutions:**
                                 - 1. Upgrade to v3.6.2+ (fixes missing JS assets)
                                   2. 2. Hard refresh: Ctrl+Shift+R
                                      3. 3. Clear browser cache
                                        
                                         4. ## Rollback Procedure
                                        
                                         5. ```bash
                                            # Restore database
                                            mysql -u leantime -p leantime < backup_20250201.sql

                                            # Restore files (package install)
                                            rsync -av leantime_backup/ /var/www/leantime/

                                            # For Docker, change image version in docker-compose.yml
                                            ```

                                            ## Post-Upgrade Verification

                                            1. Check version: Settings > About
                                            2. 2. Test login functionality
                                               3. 3. Open existing projects
                                                  4. 4. Verify OIDC/LDAP if configured
                                                     5. 5. Check logs for errors
                                                       
                                                        6. ## Getting Help
                                                       
                                                        7. 1. Check [Common Problems](/installation/common-issues.md)
                                                           2. 2. Search [GitHub Issues](https://github.com/Leantime/leantime/issues)
                                                              3. 3. Ask in [Discord](https://discord.gg/4zMzJtAq9z) #self-hosted
