---
title: \leantime\core\language
footer: false
---

# language





* Full name: `\leantime\core\language`



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\leantime\core\language::DEFAULT_LANG_FOLDER`|string|&#039;../app/language/&#039;|
|`\leantime\core\language::CUSTOM_LANG_FOLDER`||&#039;../custom/language/&#039;|

## Methods

### __construct

__construct - Check standard language otherwise get language from browser

```php
private language::__construct(): array
```









**Return Value:**





---
### getInstance

getInstance - singleton, get same instance of language class

```php
public static language::getInstance(): object
```



* This method is **static**.





**Return Value:**





---
### setLanguage

setLanguage - set the language (format: de-DE, languageCode-CountryCode)

```php
public language::setLanguage( $lang): array
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
public language::getCurrentLanguage(): array
```









**Return Value:**





---
### isValidLanguage



```php
public language::isValidLanguage(mixed $langCode): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `langCode` | **mixed** |  |


**Return Value:**





---
### readIni

readIni - read File and return values

```php
public language::readIni(): array
```









**Return Value:**





---
### getLanguageList

getLanguageList - gets the list of possible languages

```php
public language::getLanguageList(): array|bool
```









**Return Value:**





---
### getBrowserLanguage

getBrowserLanguage - gets the language that is setted in the browser

```php
public language::getBrowserLanguage(): string
```









**Return Value:**





---
### __



```php
public language::__(string $index): string
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
public language::getFormattedDateString( $date): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **** | string |


**Return Value:**





---
### getFormattedTimeString

getFormattedTimeString - returns a language specific formatted time string

```php
public language::getFormattedTimeString( $date): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **** | string |


**Return Value:**





---
### get24HourTimestring



```php
public language::get24HourTimestring(mixed $date): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **mixed** |  |


**Return Value:**





---
### getISODateString

getISODateString - returns an ISO date string (hours, minutes seconds zeroed out) based on language specific format

```php
public language::getISODateString( $date): string|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **** | string |


**Return Value:**





---
### getISODateTimeString

getISODateString - returns an ISO date string (hours, minutes seconds zeroed out) based on language specific format

```php
public language::getISODateTimeString( $date, mixed $time): string|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **** | string |
| `time` | **mixed** |  |


**Return Value:**





---
### getISOTimeString

getISOTimeString - returns an ISO time string (hours, minutes seconds zeroed out) based on language specific format

```php
public language::getISOTimeString( $time): string|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `time` | **** | string |


**Return Value:**





---
### extractTime



```php
public language::extractTime(mixed $dateTime): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateTime` | **mixed** |  |


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
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
