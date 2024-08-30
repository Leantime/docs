---
title: \Leantime\Domain\CsvImport\Controllers\Upload
footer: false
---

# Upload

upload controller for csvImport plugin


`\Leantime\Domain\CsvImport\Controllers\Upload`

* Parent class: [\Leantime\Core\Controller\Controller](../../../Core/Controller/Controller.md)



## Methods

### init

constructor - initialize private variables

```php
public Upload::init(\Leantime\Domain\CsvImport\Services\CsvImport $providerService): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `providerService` | **\Leantime\Domain\CsvImport\Services\CsvImport** |  |


**Return Value:**





---
### get

get - display upload form

```php
public Upload::get(): \Symfony\Component\HttpFoundation\Response
```









**Return Value:**





---
### post

post - process uploaded file

```php
public Upload::post(array $params): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** |  |


**Return Value:**





---


## Inherited methods

### __construct

constructor - initialize private variables

```php
public Controller::__construct(\Leantime\Core\Http\IncomingRequest $incomingRequest, \Leantime\Core\Template $tpl, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `incomingRequest` | **\Leantime\Core\Http\IncomingRequest** | The request to be initialized. |
| `tpl` | **\Leantime\Core\Template** | The template to be initialized. |
| `language` | **\Leantime\Core\Language** | The language to be initialized. |


**Return Value:**





---
### executeActions

Allows hooking into all controllers with events

```php
private Controller::executeActions(string $method, object|array $params): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |
| `params` | **object|array** |  |


**Return Value:**





---
### getResponse

getResponse - returns the response

```php
public Controller::getResponse(): \Symfony\Component\HttpFoundation\Response
```









**Return Value:**

The response object.



---
### dispatch_event

dispatches an event with context

```php
public static DispatchesEvents::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
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
public static DispatchesEvents::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
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
protected static DispatchesEvents::get_event_context( $function): string
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
private static DispatchesEvents::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static DispatchesEvents::get_function_context(?int $functionInt = null): string
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
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
