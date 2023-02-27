---
title: \leantime\core\frontcontroller
footer: false
---

# frontcontroller





* Full name: `\leantime\core\frontcontroller`



## Methods

### __construct

__construct - Set the rootpath of the server

```php
private frontcontroller::__construct( $rootPath, \leantime\core\IncomingRequest $incomingRequest): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `rootPath` | **** |  |
| `incomingRequest` | **\leantime\core\IncomingRequest** |  |


**Return Value:**





---
### getInstance

getInstance - just one instance of the object is allowed (it makes no sense to have more)

```php
public static frontcontroller::getInstance( $rootPath = null, \leantime\core\IncomingRequest $incomingRequest = null): object
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `rootPath` | **** |  |
| `incomingRequest` | **\leantime\core\IncomingRequest** |  |


**Return Value:**

(instance)



---
### dispatch

run - executes the action depending on Request or firstAction

```php
public static frontcontroller::dispatch(mixed $action = &#039;&#039;, mixed $httpResponseCode = 200): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `action` | **mixed** |  |
| `httpResponseCode` | **mixed** |  |


**Return Value:**





---
### executeAction

executeAction - includes the class in includes/modules by the Request

```php
private static frontcontroller::executeAction(string $completeName, mixed $params = array()): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `completeName` | **string** | actionname.filename |
| `params` | **mixed** |  |


**Return Value:**





---
### getRequestMethod



```php
private static frontcontroller::getRequestMethod(): mixed
```



* This method is **static**.





**Return Value:**





---
### getRequestParams



```php
private static frontcontroller::getRequestParams(mixed $method): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **mixed** |  |


**Return Value:**





---
### includeAction

includeAction - possible to include action from everywhere

```php
public static frontcontroller::includeAction( $completeName, mixed $params = array()): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `completeName` | **** |  |
| `params` | **mixed** |  |


**Return Value:**





---
### getActionName

getActionName - split string to get actionName

```php
public static frontcontroller::getActionName( $completeName): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `completeName` | **** |  |


**Return Value:**





---
### getModuleName

getModuleName - split string to get modulename

```php
public static frontcontroller::getModuleName( $completeName): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `completeName` | **** |  |


**Return Value:**





---
### getCurrentRoute

getCurrentRoute - gets the current main action

```php
public static frontcontroller::getCurrentRoute(): string
```



* This method is **static**.





**Return Value:**





---
### redirect



```php
public static frontcontroller::redirect(mixed $url, mixed $http_response_code = 303): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | **mixed** |  |
| `http_response_code` | **mixed** |  |


**Return Value:**





---
### setResponseCode



```php
public static frontcontroller::setResponseCode(mixed $responseCode): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `responseCode` | **mixed** |  |


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
