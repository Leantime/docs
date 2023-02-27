---
title: \leantime\core\template
footer: false
---

# template





* Full name: `\leantime\core\template`



## Methods

### __construct

__construct - get instance of frontcontroller

```php
public template::__construct(): mixed
```









**Return Value:**





---
### assign

assign - assign variables in the action for template

```php
public template::assign( $name,  $value): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **** |  |
| `value` | **** |  |


**Return Value:**





---
### setNotification

setError - assign errors to the template

```php
public template::setNotification( $msg,  $type): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `msg` | **** |  |
| `type` | **** |  |


**Return Value:**





---
### getTemplatePath

getTemplatePath - Find template in custom and src directories

```php
public template::getTemplatePath(string $module, string $name): string|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** | Module template resides in |
| `name` | **string** | Template filename name (including tpl.php extension) |


**Return Value:**

Full template path or false if file does not exist



---
### display

display - display template from folder template including main layout wrapper

```php
public template::display( $template, mixed $layout = &quot;app&quot;): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `template` | **** |  |
| `layout` | **mixed** |  |


**Return Value:**





---
### displayJson

displayJson - returns json data

```php
public template::displayJson( $jsonContent): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `jsonContent` | **** |  |


**Return Value:**





---
### displayPartial

display - display only the template from the template folder without a wrapper

```php
public template::displayPartial( $template): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `template` | **** |  |


**Return Value:**





---
### get

get - get assigned values

```php
public template::get( $name): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **** |  |


**Return Value:**





---
### getNotification

getNotification - pulls notification from the current session

```php
public template::getNotification(): array
```









**Return Value:**





---
### displaySubmodule

displaySubmodule - display a submodule for a given module

```php
public template::displaySubmodule( $alias): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `alias` | **** |  |


**Return Value:**





---
### displayNotification



```php
public template::displayNotification(): mixed
```









**Return Value:**





---
### displayInlineNotification



```php
public template::displayInlineNotification(): mixed
```









**Return Value:**





---
### redirect



```php
public template::redirect(mixed $url): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | **mixed** |  |


**Return Value:**





---
### getSubdomain



```php
public template::getSubdomain(): string
```









**Return Value:**





---
### __



```php
public template::__(mixed $index): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `index` | **mixed** |  |


**Return Value:**





---
### e



```php
public template::e(mixed $content): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | **mixed** |  |


**Return Value:**





---
### escape



```php
public template::escape(mixed $content): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | **mixed** |  |


**Return Value:**





---
### escapeMinimal



```php
public template::escapeMinimal(mixed $content): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | **mixed** |  |


**Return Value:**





---
### getFormattedDateString

getFormattedDateString - returns a language specific formatted date string. wraps language class method

```php
public template::getFormattedDateString( $date): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **** | string |


**Return Value:**





---
### getFormattedTimeString

getFormattedTimeString - returns a language specific formatted time string. wraps language class method

```php
public template::getFormattedTimeString( $date): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **** | string |


**Return Value:**





---
### get24HourTimestring



```php
public template::get24HourTimestring(mixed $dateTime): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateTime` | **mixed** |  |


**Return Value:**





---
### truncate



```php
public template::truncate(mixed $html, mixed $maxLength = 100, mixed $ending = &#039;(...)&#039;, mixed $exact = true, mixed $considerHtml = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `html` | **mixed** |  |
| `maxLength` | **mixed** |  |
| `ending` | **mixed** |  |
| `exact` | **mixed** |  |
| `considerHtml` | **mixed** |  |


**Return Value:**





---
### convertRelativePaths



```php
public template::convertRelativePaths(mixed $text): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **mixed** |  |


**Return Value:**





---
### getModulePicture



```php
public template::getModulePicture(): mixed
```









**Return Value:**





---
### displayLink



```php
public template::displayLink(mixed $module, mixed $name, mixed $params = null, mixed $attribute = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **mixed** |  |
| `name` | **mixed** |  |
| `params` | **mixed** |  |
| `attribute` | **mixed** |  |


**Return Value:**





---
### patchDownloadUrlToFilenameOrAwsUrl



```php
public template::patchDownloadUrlToFilenameOrAwsUrl(string $textHtml): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `textHtml` | **string** |  |


**Return Value:**





---
### dispatchTplEvent



```php
private template::dispatchTplEvent(string $hookName, mixed $payload = []): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hookName` | **string** |  |
| `payload` | **mixed** |  |


**Return Value:**





---
### dispatchTplFilter



```php
private template::dispatchTplFilter(string $hookName, mixed $payload = [], mixed $available_params = []): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hookName` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |


**Return Value:**





---
### dispatchTplHook



```php
private template::dispatchTplHook(string $type, string $hookName, mixed $payload = [], mixed $available_params = []): null|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **string** |  |
| `hookName` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |


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
