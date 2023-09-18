---
title: \Leantime\Core\Frontcontroller
footer: false
---

# Frontcontroller

Frontcontroller class



* Full name: `\Leantime\Core\Frontcontroller`



## Methods

### __construct

__construct - Set the rootpath of the server

```php
public Frontcontroller::__construct(\Leantime\Core\IncomingRequest $incomingRequest): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `incomingRequest` | **\Leantime\Core\IncomingRequest** |  |


**Return Value:**





---
### dispatch

run - executes the action depending on Request or firstAction

```php
public static Frontcontroller::dispatch(string $action = &#039;&#039;, int $httpResponseCode = 200): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `action` | **string** |  |
| `httpResponseCode` | **int** |  |


**Return Value:**





---
### executeAction

executeAction - includes the class in includes/modules by the Request

```php
private static Frontcontroller::executeAction(string $completeName, array $params = array()): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `completeName` | **string** | actionname.filename |
| `params` | **array** |  |


**Return Value:**





---
### includeAction

includeAction - possible to include action from everywhere

```php
public static Frontcontroller::includeAction(string $completeName, array $params = array()): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `completeName` | **string** |  |
| `params` | **array** |  |


**Return Value:**





---
### getActionName

getActionName - split string to get actionName

```php
public static Frontcontroller::getActionName(string $completeName = null): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `completeName` | **string** |  |


**Return Value:**





---
### getModuleName

getModuleName - split string to get modulename

```php
public static Frontcontroller::getModuleName(string $completeName = null): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `completeName` | **string** |  |


**Return Value:**





---
### getCurrentRoute

getCurrentRoute - gets the current main action

```php
public static Frontcontroller::getCurrentRoute(): string
```



* This method is **static**.





**Return Value:**





---
### redirect

redirect - redirects to a given url

```php
public static Frontcontroller::redirect(string $url, int $http_response_code = 303): never
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | **string** |  |
| `http_response_code` | **int** |  |


**Return Value:**





---
### setResponseCode

setResponseCode - sets the response code

```php
public static Frontcontroller::setResponseCode(int $responseCode): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `responseCode` | **int** |  |


**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int $function = null): void
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
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int $function = null): mixed
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
private static Eventhelpers::get_event_context(mixed $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **mixed** |  |


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
private static Eventhelpers::get_function_context(mixed $functionInt = null): string
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
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
