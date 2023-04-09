## Command Line
Leantime offers a simple CLI to run a few administrative tasks. 
To execute the CLI just run 
```
./bin/leantime COMMAND
```

The following commands are available

# Add Users
Allows you to add users
```
./bin/leantime user:add 
```

# DB Updates
Runs any pending db updates.
```
./bin/leantime db:update
```


# Cron Jobs
Executes the cron job queue

```
./bin/leantime cron:run
```

# Save Settings
Saves any setting to the settings table (key value pair)

```
./bin/leantime setting:save
```

# Test Email
Sends a test email
```
./bin/leantime email:test
```
