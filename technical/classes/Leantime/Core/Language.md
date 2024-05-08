---
title: \Leantime\Core\Language
footer: false
---

# Language

Either takes the translation from ini_array or the default



* Full name: `\Leantime\Core\Language`



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Core\Language::DEFAULT_LANG_FOLDER`|string|APP_ROOT . &#039;/app/Language/&#039;|
|`\Leantime\Core\Language::CUSTOM_LANG_FOLDER`|string|APP_ROOT . &#039;/custom/Language/&#039;|

## Methods

### __construct

Constructor method for initializing an instance of the class.

```php
public Language::__construct(\Leantime\Core\Environment $config, \Leantime\Core\ApiRequest $apiRequest): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Environment** | The configuration environment. |
| `apiRequest` | **\Leantime\Core\ApiRequest** | The API request object. |


**Return Value:**





---
### setLanguage

Set the language for the application.

```php
public Language::setLanguage(string $lang): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `lang` | **string** | The language code to be set. |


**Return Value:**

True if the language is valid and successfully set, False otherwise.



---
### getCurrentLanguage

Get the currently selected language.

```php
public Language::getCurrentLanguage(): string
```









**Return Value:**

The currently selected language.



---
### isValidLanguage

Check if a given language code is valid.

```php
public Language::isValidLanguage(string $langCode): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `langCode` | **string** | The language code to check. |


**Return Value:**

True if the language code is valid, false otherwise.



---
### readIni

Read and load the language resources from the ini files.

```php
public Language::readIni(): array
```









**Return Value:**

The array of language resources loaded from the ini files.



---
### includeOverrides

Include language overrides from an ini file.

```php
protected Language::includeOverrides(array $language, string $filepath, bool $foreignLanguage = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `language` | **array** | The original language array. |
| `filepath` | **string** | The path to the ini file. |
| `foreignLanguage` | **bool** | Whether the language is foreign or not. Defaults to false. |


**Return Value:**

The modified language array.



---
### getLanguageList

Get the list of languages.

```php
public Language::getLanguageList(): bool|array
```

Retrieves the list of languages from a cache or from INI files if the cache is not available.
The list of languages is stored in an associative array where the keys represent the language codes
and the values represent the language names.







**Return Value:**

The list of languages as an associative array, or false if the list is empty or cannot be retrieved.



---
### __

Get a translated string or a default value if the index is not found.

```php
public Language::__(string $index, string $default = &#039;&#039;): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `index` | **string** | The index of the translated string. |
| `default` | **string** | The default value to return if the index is not found. Defaults to an empty string. |


**Return Value:**

The translated string or the default value if the index is not found.



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
> Automatically generated from source code comments on 2024-05-08 using [phpDocumentor](http://www.phpdoc.org/)
