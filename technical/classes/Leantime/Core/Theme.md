---
title: \Leantime\Core\Theme
footer: false
---

# Theme

theme - Engine for handling themes



* Full name: `\Leantime\Core\Theme`



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Core\Theme::DEFAULT`|string|&#039;default&#039;|
|`\Leantime\Core\Theme::DEFAULT_INI`|string|&#039;theme&#039;|
|`\Leantime\Core\Theme::DEFAULT_CSS`|string|&#039;theme&#039;|
|`\Leantime\Core\Theme::DEFAULT_JS`|string|&#039;theme&#039;|
|`\Leantime\Core\Theme::CUSTOM_CSS`|string|&#039;custom&#039;|
|`\Leantime\Core\Theme::CUSTOM_JS`|string|&#039;custom&#039;|

## Methods

### __construct

__construct - Constructor

```php
public Theme::__construct(\Leantime\Core\environment $config, \Leantime\Core\appSettings $settings, array $iniData = []): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\environment** |  |
| `settings` | **\Leantime\Core\appSettings** |  |
| `iniData` | **array** |  |


**Return Value:**





---
### getActive

getActive - Return active theme id

```php
public Theme::getActive(): string
```









**Return Value:**

Active theme identifier



---
### setActive

setActive - Set active theme

```php
public Theme::setActive(string $id): void
```

Note: After setActive, the language settings need to be reloaded/reset, because languages are theme specific






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | Active theme identifier. |


**Return Value:**





---
### getAll

getAll - Return an array of all themes

```php
public Theme::getAll(): array
```









**Return Value:**

return an array of all themes



---
### getDir

getDir - Return the root directory of the currently active theme

```php
public Theme::getDir(): string
```









**Return Value:**

Root directory of currently active theme



---
### getDefaultDir

getDir - Return the root directory of the default theme

```php
public Theme::getDefaultDir(): string
```









**Return Value:**

Root directory of default theme



---
### getLayoutFilename

getLayoutDir - Return file path of a layout file in the current theme, reverting to the default theme if it does not exist

```php
public Theme::getLayoutFilename(string $filename): string|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filename` | **string** | Filename of layout to look for |


**Return Value:**

Full filename of layout file or false, if it does not exist



---
### getUrl

getUrl() - Return an URL pointing to the root directory of the currently active theme

```php
public Theme::getUrl(): string
```









**Return Value:**

Root URL currently active theme



---
### getDefaultUrl

getDefaultUrl() - Return an URL pointing to the root directory of the default theme

```php
public Theme::getDefaultUrl(): string
```









**Return Value:**

Root URL default theme



---
### getStyleUrl

getStyleUrl - Return URL that allows loading the style file of the theme

```php
public Theme::getStyleUrl(): string|false
```









**Return Value:**

URL to the css style file of the current theme or false, if it does not exist



---
### getCustomStyleUrl

getCustomStyleUrl - Return URL that allows loading the customized part of the style file of the theme

```php
public Theme::getCustomStyleUrl(): string|false
```









**Return Value:**

URL to the customized part of the css style file of the current theme or false, if it does not exist



---
### getJsUrl

getJsUrl - Return URL that allows loading the JavaScript file of the theme

```php
public Theme::getJsUrl(): string|false
```









**Return Value:**

URL to the JavaScript file of the current theme or false, if it does not exist



---
### getCustomJsUrl

getCustomJsUrl - Return URL that allows loading the customized part of the JavaScript file of the theme

```php
public Theme::getCustomJsUrl(): string|false
```









**Return Value:**

URL to the customized part of the JavaScript file of the current theme or false, if it does not exist



---
### getAssetPath

getAssetPath - Get localized name of theme

```php
private Theme::getAssetPath(string $fileName, string $assetType): string|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fileName` | **string** | Filename of asset without extension. |
| `assetType` | **string** | Asset type either js or css. |


**Return Value:**

returns file path to asset. false if file does not exist



---
### getName

getName - Get localized name of theme

```php
public Theme::getName(): string
```









**Return Value:**

Localized name of theme



---
### getVersion

getVersion - Get version of theme

```php
public Theme::getVersion(): string
```









**Return Value:**

Version of theme or empty string



---
### getLogoUrl

getLogoUrl - Get logo associated with the theme

```php
public Theme::getLogoUrl(): string|false
```









**Return Value:**

Logo associated with the theme, false if logo cannot be found



---
### readIniData

readIniData - Read theme.ini configuration data

```php
private Theme::readIniData(): void
```









**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
private static Eventhelpers::get_event_context( $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **** |  |


**Return Value:**





---
### set_class_context

Gets the class Context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static Eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static Eventhelpers::get_function_context(null $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **null** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
