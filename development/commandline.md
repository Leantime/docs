## Command Line
Leantime offers a simple CLI to run a few administrative tasks. 
To execute the CLI just run 
```
php ./bin/leantime COMMAND
```

The following commands are available

# List all Commands
List all available commands
```
php ./bin/leantime list
```


# Add Users
Allows you to add users
```
php ./bin/leantime user:add 
```

# DB Updates
Runs any pending db updates. This can also be used to install the db.
```
php ./bin/leantime db:update
```


# Cron Jobs
Executes the cron job queue

```
php ./bin/leantime cron:run
```

# Save Settings
Saves any setting to the settings table (key value pair)

```
php ./bin/leantime setting:save
```

# Test Email
Sends a test email
```
php ./bin/leantime email:testemail --address="YOUREMAILADDRESS"
```

# Plugins
List all plugins
```
php ./bin/leantime plugin:list
```

Disable Plugin
```
php ./bin/leantime plugin:disable --plugin=PLUGINNAME
```
Enable Plugin
```
php ./bin/leantime plugin:enable --plugin=PLUGINNAME
```
