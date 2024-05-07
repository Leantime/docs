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
|`\Leantime\Core\Theme::DEFAULT_CSS`|string|&#039;light&#039;|
|`\Leantime\Core\Theme::DEFAULT_JS`|string|&#039;theme&#039;|
|`\Leantime\Core\Theme::DEFAULT_LOGO`|string|&#039;/dist/images/logo.svg&#039;|
|`\Leantime\Core\Theme::CUSTOM_CSS`|string|&#039;custom&#039;|
|`\Leantime\Core\Theme::CUSTOM_JS`|string|&#039;custom&#039;|

## Methods

### __construct

__construct - Constructor

```php
public Theme::__construct(\Leantime\Core\environment $config, \Leantime\Core\appSettings $settings, \Leantime\Core\Language $language, array $iniData = []): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\environment** |  |
| `settings` | **\Leantime\Core\appSettings** |  |
| `language` | **\Leantime\Core\Language** |  |
| `iniData` | **array** |  |


**Return Value:**





---
### getAvailableColorSchemes



```php
public Theme::getAvailableColorSchemes(): array
```









**Return Value:**





---
### getAvailableFonts



```php
public Theme::getAvailableFonts(): mixed
```









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
### getColorMode

getColorMode - Return active color mode

```php
public Theme::getColorMode(): string
```









**Return Value:**

Active theme identifier



---
### getColorScheme

getColorScheme - Return the active color scheme
Color schemes can be chosen by the user and can be themedefault, company colors or other predefined schemes
The colors that change are accent1 and accent2

```php
public Theme::getColorScheme(): string
```









**Return Value:**

Active theme identifier



---
### getFont

getFont - Return active font

```php
public Theme::getFont(): string
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
### setColorMode

setColorModel - Set active theme

```php
public Theme::setColorMode(string $colorMode): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `colorMode` | **string** | color mode of theme (light, dark). |


**Return Value:**





---
### setFont

setFont - Set active font

```php
public Theme::setFont(string $font): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `font` | **string** | font name key (roboto, atkinson). |


**Return Value:**





---
### setColorScheme

setColorScheme - Set active theme

```php
public Theme::setColorScheme(string $colorScheme): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `colorScheme` | **string** | color scheme of theme (themeDefault, companyColors). |


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

Retrieves the name of the theme.

```php
public Theme::getName(): string
```

First, it checks if the INI data is empty. If it is, the method tries to read the INI data.
If an exception occurs during the reading process, it is logged in the error log and the method returns
the language translation of the active theme name using the "__" method of the $language object.

If the INI data contains a 'name' key, it returns the corresponding value.

If none of the above conditions are met, it returns the language translation of the active theme name
using the "__" method of the $language object.







**Return Value:**

The name of the theme.



---
### getVersion

Retrieves the version number from the initialization data or returns an empty string if not available.

```php
public Theme::getVersion(): string
```









**Return Value:**

The version number.



---
### getLogoUrl

Retrieves the URL of the company logo from the user's settings or the default logo path.

```php
public Theme::getLogoUrl(): string|false
```









**Return Value:**

The URL of the company logo, or false if the company doesn't have a logo.



---
### setAccentColors

Sets the accent colors for the specified color scheme.

```php
public Theme::setAccentColors(string $colorScheme): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `colorScheme` | **string** | The name of the color scheme. |


**Return Value:**





---
### setThemeDefaultColors

Sets the default theme colors in the user's settings.

```php
public Theme::setThemeDefaultColors(): mixed
```

This method sets the primary and secondary colors of the theme to the default values by assigning false to the corresponding session variables.







**Return Value:**





---
### setCompanyColors

Sets the company colors in the user's settings.

```php
public Theme::setCompanyColors(): void
```

If the primary color setting is not already set in the user's settings,
it retrieves the primary color setting from the company settings. If the
primary color setting is not found in the company settings, it sets the
primary and secondary colors to the values specified in the application's
config file.

If the secondary color setting is found in the company settings, it
sets the secondary color in the user's settings as well.







**Return Value:**





---
### setSchemeColors

Sets the primary and secondary colors for the user's color scheme.

```php
public Theme::setSchemeColors(string $colorscheme): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `colorscheme` | **string** | The color scheme to set. Should be a valid key in the available color schemes array. |


**Return Value:**





---
### getPrimaryColor

Retrieves the primary color from the user's settings or the default color scheme.

```php
public Theme::getPrimaryColor(): string
```









**Return Value:**

The primary color.



---
### getSecondaryColor

getSecondaryColor - Retrieves the secondary color for the current user's color scheme

```php
public Theme::getSecondaryColor(): string
```

This method returns the secondary color based on the following conditions:
- If the secondary color is set in the user's session and is not empty, and the user is logged in,
  it will return the value stored in the session.
- If the user is logged in, it will set the secondary color from the available color schemes based on the current color scheme in use.
- If none of the above conditions are met, it will return the secondary color from the available color schemes based on the current color scheme in use.







**Return Value:**

The secondary color for the current user's color scheme



---
### readIniData

readIniData - Read theme.ini configuration data

```php
private Theme::readIniData(): void
```









**Return Value:**





---
### clearCache



```php
public static Theme::clearCache(): void
```



* This method is **static**.





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
protected static Eventhelpers::get_event_context( $function): string
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
private static Eventhelpers::get_function_context(?int $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **?int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
