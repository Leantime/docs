---
title: \leantime\core\theme
footer: false
---

# theme





* Full name: `\leantime\core\theme`



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\leantime\core\theme::DEFAULT`||&#039;default&#039;|
|`\leantime\core\theme::DEFAULT_INI`||&#039;theme&#039;|
|`\leantime\core\theme::DEFAULT_CSS`||&#039;theme&#039;|
|`\leantime\core\theme::DEFAULT_JS`||&#039;theme&#039;|
|`\leantime\core\theme::CUSTOM_CSS`||&#039;custom&#039;|
|`\leantime\core\theme::CUSTOM_JS`||&#039;custom&#039;|

## Methods

### __construct

__construct - Constructor

```php
public theme::__construct(): mixed
```









**Return Value:**





---
### getActive

getActive - Return active theme id

```php
public theme::getActive(): string
```









**Return Value:**

Active theme identifier



---
### setActive

setActive - Set active theme

```php
public theme::setActive(string $id): void
```

Note: After setActive, the language settings need to be reloaded/reset, because languages are theme specific






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | Active theme identifier |


**Return Value:**





---
### getAll

getAll - Return an array of all themes

```php
public theme::getAll(): array
```









**Return Value:**

return an array of all themes



---
### getDir

getDir - Return the root directory of the currently active theme

```php
public theme::getDir(): string
```









**Return Value:**

Root directory of currently active theme



---
### getDefaultDir

getDir - Return the root directory of the default theme

```php
public theme::getDefaultDir(): string
```









**Return Value:**

Root directory of default theme



---
### getLayoutFilename

getLayoutDir - Return file path of a layout file in the current theme, reverting to the default theme if it does not exist

```php
public theme::getLayoutFilename(string $filename): string|false
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
public theme::getUrl(): string
```









**Return Value:**

Root URL currently active theme



---
### getDefaultUrl

getDefaultUrl() - Return an URL pointing to the root directory of the default theme

```php
public theme::getDefaultUrl(): string
```









**Return Value:**

Root URL default theme



---
### getStyleUrl

getStyleUrl - Return URL that allows loading the style file of the theme

```php
public theme::getStyleUrl(): string|false
```









**Return Value:**

URL to the css style file of the current theme or false, if it does not exist



---
### getCustomStyleUrl

getCustomStyleUrl - Return URL that allows loading the customized part of the style file of the theme

```php
public theme::getCustomStyleUrl(): string|false
```









**Return Value:**

URL to the customized part of the css style file of the current theme or false, if it does not exist



---
### getJsUrl

getJsUrl - Return URL that allows loading the JavaScript file of the theme

```php
public theme::getJsUrl(): string|false
```









**Return Value:**

URL to the JavaScript file of the current theme or false, if it does not exist



---
### getCustomJsUrl

getCustomJsUrl - Return URL that allows loading the customized part of the JavaScript file of the theme

```php
public theme::getCustomJsUrl(): string|false
```









**Return Value:**

URL to the customized part of the JavaScript file of the current theme or false, if it does not exist



---
### getAssetPath

getAssetPath - Get localized name of theme

```php
private theme::getAssetPath(string $fileName, string $assetType): string|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fileName` | **string** | filename of asset without extension |
| `assetType` | **string** | asset type either js or css |


**Return Value:**

returns file path to asset. false if file does not exist



---
### getName

getName - Get localized name of theme

```php
public theme::getName(): string
```









**Return Value:**

Localized name of theme



---
### getVersion

getVersion - Get version of theme

```php
public theme::getVersion(): string
```









**Return Value:**

Version of theme or empty string



---
### getLogoUrl

getLogoUrl - Get logo associated with the theme

```php
public theme::getLogoUrl(): string|false
```









**Return Value:**

Logo associated with the theme, false if logo cannot be found



---
### readIniData

readIniData - Read theme.ini configuration data

```php
private theme::readIniData(): void
```









**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
private static eventhelpers::get_event_context(mixed $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **mixed** |  |


**Return Value:**





---
### set_class_context

Gets the class context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static eventhelpers::get_function_context(mixed $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
