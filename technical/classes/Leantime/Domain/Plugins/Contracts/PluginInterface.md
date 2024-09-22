---
title: \Leantime\Domain\Plugins\Contracts\PluginInterface
footer: false
---

# PluginInterface

Interface PluginInterface

This interface represents a plugin that can be installed, uninstalled, enabled, and disabled.

* Full name: `\Leantime\Domain\Plugins\Contracts\PluginInterface`
* Parent interface: [](../../../../../classes.md)



## Methods

### install

Installs the plugin.

```php
public PluginInterface::install(): bool
```









**Return Value:**

True if the installation is successful, false otherwise.



---
### uninstall

Uninstalls the plugin.

```php
public PluginInterface::uninstall(): bool
```

This method performs the necessary actions to uninstall the application and remove all associated files and data.







**Return Value:**

Returns true if the uninstallation is successful, false otherwise.



---
### enable

Enables the plugin.

```php
public PluginInterface::enable(): bool
```

This method performs the necessary actions to enable the specified functionality. It may update configuration settings, start background processes, or perform any other actions required
to enable the functionality.







**Return Value:**

Returns true if the enable operation is successful, false otherwise.



---
### disable

Disable the plugin.

```php
public PluginInterface::disable(): bool
```

This method disables the functionality and returns a boolean value indicating whether the functionality is successfully disabled or not.







**Return Value:**

True if the functionality is successfully disabled, false otherwise.



---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
