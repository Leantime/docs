---
title: \Leantime\Domain\Api\Controllers\Jsonrpc
footer: false
---

# Jsonrpc

Controller Class - Base class For all controllers



* Full name: `\Leantime\Domain\Api\Controllers\Jsonrpc`
* Parent class: [\Leantime\Core\Controller](../../../Core/Controller.md)



## Methods

### init

init - initialize private variables or events to happen before route execution

```php
public Jsonrpc::init(): void
```









**Return Value:**





---
### post

Handles post requests

```php
public Jsonrpc::post(array $params): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | - value of $_POST |


**Return Value:**





---
### get

Handles get requests

```php
public Jsonrpc::get(array $params): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | - value of $_GET |


**Return Value:**





---
### patch

Handles patch requests

```php
public Jsonrpc::patch(): void
```









**Return Value:**





---
### delete

Handles delete requests

```php
public Jsonrpc::delete(): void
```









**Return Value:**





---
### executeApiRequest

executes api call

```php
private Jsonrpc::executeApiRequest(array $params): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | - request body |


**Return Value:**





---
### parseMethodString

Parses the method string

```php
private Jsonrpc::parseMethodString(string $methodstring): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `methodstring` | **string** | - leantime.rpc.service.method |


**Return Value:**





---
### getMethodParameters

Gets the Method Parameters

```php
private Jsonrpc::getMethodParameters(string $servicename, string $methodname): \ReflectionParameter[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `servicename` | **string** |  |
| `methodname` | **string** |  |


**Return Value:**





---
### prepareParameters

Checks request params

```php
private Jsonrpc::prepareParameters(array $params, \ReflectionParameter[] $methodParams): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** |  |
| `methodParams` | **\ReflectionParameter[]** |  |


**Return Value:**





---
### returnResponse

Echos the return response

```php
private Jsonrpc::returnResponse(array|null $returnValue, string $id = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `returnValue` | **array|null** |  |
| `id` | **string** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#response_object - 

---
### returnError

Return error response

```php
private Jsonrpc::returnError(string $errorMessage, int $errorcode, mixed $additional_info = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `errorMessage` | **string** |  |
| `errorcode` | **int** |  |
| `additional_info` | **mixed** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#error_object - 

---
### returnParseError

Returns a parse error

```php
private Jsonrpc::returnParseError(mixed|null $additional_info = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `additional_info` | **mixed|null** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#error_object - 

---
### returnInvalidRequest

Returns an invalid request error

```php
private Jsonrpc::returnInvalidRequest(mixed|null $additional_info = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `additional_info` | **mixed|null** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#error_object - 

---
### returnMethodNotFound

Returns a method not found error

```php
private Jsonrpc::returnMethodNotFound(mixed|null $additional_info = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `additional_info` | **mixed|null** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#error_object - 

---
### returnInvalidParams

Returns an invalid parameters error

```php
private Jsonrpc::returnInvalidParams(mixed|null $additional_info = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `additional_info` | **mixed|null** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#error_object - 

---
### returnServerError

Returns a server error

```php
private Jsonrpc::returnServerError(mixed|null $additional_info): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `additional_info` | **mixed|null** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#error_object - 

---


## Inherited methods

### __construct

constructor - initialize private variables

```php
public Controller::__construct(\Leantime\Core\IncomingRequest $incomingRequest, \Leantime\Core\template $tpl, \Leantime\Core\language $language): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `incomingRequest` | **\Leantime\Core\IncomingRequest** | The request to be initialized. |
| `tpl` | **\Leantime\Core\template** | The template to be initialized. |
| `language` | **\Leantime\Core\language** | The language to be initialized. |


**Return Value:**





---
### executeActions

Allows hooking into all controllers with events

```php
private Controller::executeActions(string $method, array|object $params): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |
| `params` | **array|object** |  |


**Return Value:**





---
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
