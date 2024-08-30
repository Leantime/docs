---
title: \Leantime\Domain\Plugins\Models\InstalledPlugin
footer: false
---

# InstalledPlugin





* Full name: `\Leantime\Domain\Plugins\Models\InstalledPlugin`
* This class implements: \Leantime\Domain\Plugins\Contracts\PluginDisplayStrategy



## Methods

### getCardDesc



```php
public InstalledPlugin::getCardDesc(): string
```









**Return Value:**





---
### getMetadataLinks

Retrieves the metadata links for the plugin.

```php
public InstalledPlugin::getMetadataLinks(): array
```

The metadata links include author's email, author's name, plugin version, and homepage URL.
If the authors are not empty, the email of the first author is included as a link.
If the version is not empty, the plugin version is included as a link.
If the homepage is not empty, the homepage URL is included as a link.







**Return Value:**

An array of metadata links.



---
### getControlsView



```php
public InstalledPlugin::getControlsView(): string
```









**Return Value:**





---
### getPluginImageData



```php
public InstalledPlugin::getPluginImageData(): string
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
