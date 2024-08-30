---
title: \Leantime\Domain\Files\Controllers\Get
footer: false
---

# Get

Controller Class - Base class For all controllers



* Full name: `\Leantime\Domain\Files\Controllers\Get`
* Parent class: [\Leantime\Core\Controller\Controller](../../../Core/Controller/Controller.md)



## Methods

### init



```php
public Get::init(\Leantime\Domain\Files\Repositories\Files $filesRepo, \Leantime\Domain\Files\Services\Files $filesService, \Leantime\Core\Configuration\Environment $config): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filesRepo` | **\Leantime\Domain\Files\Repositories\Files** |  |
| `filesService` | **\Leantime\Domain\Files\Services\Files** |  |
| `config` | **\Leantime\Core\Configuration\Environment** |  |


**Return Value:**





---
### get



```php
public Get::get(): \Symfony\Component\HttpFoundation\Response
```









**Return Value:**





---
### getFileLocally

Retrieves a file locally and returns it as a streamed response.

```php
private Get::getFileLocally(string $encName, string $ext, string $module, string $realName): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `encName` | **string** | The encoded name of the file. |
| `ext` | **string** | The extension of the file. |
| `module` | **string** | The module of the file. |
| `realName` | **string** | The real name of the file. |


**Return Value:**

The streamed response containing the file or a 404 response if the file was not found.



---
### getFileFromS3



```php
private Get::getFileFromS3(mixed $encName, mixed $ext, mixed $module, mixed $realName): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `encName` | **mixed** |  |
| `ext` | **mixed** |  |
| `module` | **mixed** |  |
| `realName` | **mixed** |  |


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
