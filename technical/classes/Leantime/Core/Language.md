---
title: \Leantime\Core\Language
footer: false
---

# Language

Language class - Internationilsation with ini-Files



* Full name: `\Leantime\Core\Language`



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Core\Language::DEFAULT_LANG_FOLDER`|string|APP_ROOT . &#039;/app/Language/&#039;|
|`\Leantime\Core\Language::CUSTOM_LANG_FOLDER`|string|APP_ROOT . &#039;/custom/Language/&#039;|

## Methods

### __construct

__construct - Check standard language otherwise get language from browser

```php
public Language::__construct(\Leantime\Core\Environment $config, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Environment** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |


**Return Value:**





---
### setLanguage

setLanguage - set the language (format: de-DE, languageCode-CountryCode)

```php
public Language::setLanguage( $lang): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `lang` | **** |  |


**Return Value:**





---
### getCurrentLanguage

getLanguage - set the language (format: de-DE, languageCode-CountryCode)

```php
public Language::getCurrentLanguage(): string
```









**Return Value:**





---
### isValidLanguage

isValidLanguage - check if language is valid

```php
public Language::isValidLanguage( $langCode): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `langCode` | **** |  |


**Return Value:**





---
### readIni

readIni - read File and return values

```php
public Language::readIni(): array
```









**Return Value:**





---
### includeOverrides

includeOverrides - include overrides from ini file

```php
protected Language::includeOverrides(array $language, string $filepath, bool $foreignLanguage = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `language` | **array** |  |
| `filepath` | **string** |  |
| `foreignLanguage` | **bool** |  |


**Return Value:**





---
### getLanguageList

getLanguageList - gets the list of possible languages

```php
public Language::getLanguageList(): array|bool
```









**Return Value:**





---
### getBrowserLanguage

getBrowserLanguage - gets the language that is setted in the browser

```php
public Language::getBrowserLanguage(): string
```









**Return Value:**





---
### __

__ - returns a language specific string

```php
public Language::__(string $index): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `index` | **string** |  |


**Return Value:**





---
### getFormattedDateString

getFormattedDateString - returns a language specific formatted date string

```php
public Language::getFormattedDateString(string $date): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **string** |  |


**Return Value:**





---
### getFormattedTimeString

getFormattedTimeString - returns a language specific formatted time string

```php
public Language::getFormattedTimeString(string $date): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **string** |  |


**Return Value:**





---
### get24HourTimestring

getFormattedDateTimeString - returns a language specific formatted date time string

```php
public Language::get24HourTimestring(string $date): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **string** |  |


**Return Value:**





---
### getISODateString

getISODateString - returns an ISO date string (hours, minutes seconds zeroed out) based on language specific format

```php
public Language::getISODateString(string $date): string|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **string** |  |


**Return Value:**





---
### getISODateTimeString

getISODateString - returns an ISO date string (hours, minutes seconds zeroed out) based on language specific format

```php
public Language::getISODateTimeString(string $date,  $time): string|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **string** |  |
| `time` | **** |  |


**Return Value:**





---
### getISOTimeString

getISOTimeString - returns an ISO time string (hours, minutes seconds zeroed out) based on language specific format

```php
public Language::getISOTimeString(string $time): string|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `time` | **string** |  |


**Return Value:**





---
### extractTime

extractTime - returns an ISO time string (hours, minutes seconds zeroed out) based on language specific format

```php
public Language::extractTime(string $dateTime): string|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateTime` | **string** |  |


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
