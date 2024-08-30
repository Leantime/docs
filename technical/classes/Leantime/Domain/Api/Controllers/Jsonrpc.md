---
title: \Leantime\Domain\Api\Controllers\Jsonrpc
footer: false
---

# Jsonrpc

Controller Class - Base class For all controllers


`\Leantime\Domain\Api\Controllers\Jsonrpc`

* Parent class: [\Leantime\Core\Controller\Controller](../../../Core/Controller/Controller.md)



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
public Jsonrpc::post(array $params): \Symfony\Component\HttpFoundation\Response
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
public Jsonrpc::get(array $params): \Symfony\Component\HttpFoundation\Response
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
public Jsonrpc::patch(): \Symfony\Component\HttpFoundation\Response
```









**Return Value:**





---
### delete

Handles delete requests

```php
public Jsonrpc::delete(): \Symfony\Component\HttpFoundation\Response
```









**Return Value:**





---
### executeApiRequest

executes api call

```php
private Jsonrpc::executeApiRequest(array $params): \Symfony\Component\HttpFoundation\Response
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
private Jsonrpc::getMethodParameters(string $servicename, string $methodname): array
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
private Jsonrpc::prepareParameters(array $params, array $methodParams): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** |  |
| `methodParams` | **array** |  |


**Return Value:**





---
### returnResponse

Echos the return response

```php
private Jsonrpc::returnResponse(array|null $returnValue, string|null $id = null): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `returnValue` | **array|null** |  |
| `id` | **string|null** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#response_object - 

---
### returnError

Return error response

```php
private Jsonrpc::returnError(string $errorMessage, int $errorcode, mixed|null $additional_info = null, int|string|null $id): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `errorMessage` | **string** |  |
| `errorcode` | **int** |  |
| `additional_info` | **mixed|null** |  |
| `id` | **int|string|null** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#error_object - 

---
### returnParseError

Returns a parse error

```php
private Jsonrpc::returnParseError(mixed|null $additional_info = null, int|string|null $id): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `additional_info` | **mixed|null** |  |
| `id` | **int|string|null** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#error_object - 

---
### returnInvalidRequest

Returns an invalid request error

```php
private Jsonrpc::returnInvalidRequest(mixed|null $additional_info = null, int|string|null $id): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `additional_info` | **mixed|null** |  |
| `id` | **int|string|null** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#error_object - 

---
### returnMethodNotFound

Returns a method not found error

```php
private Jsonrpc::returnMethodNotFound(mixed|null $additional_info = null, int|string|null $id): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `additional_info` | **mixed|null** |  |
| `id` | **int|string|null** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#error_object - 

---
### returnInvalidParams

Returns an invalid parameters error

```php
private Jsonrpc::returnInvalidParams(mixed|null $additional_info = null, int|string|null $id): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `additional_info` | **mixed|null** |  |
| `id` | **int|string|null** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#error_object - 

---
### returnServerError

Returns a server error

```php
private Jsonrpc::returnServerError(mixed|null $additional_info, int|string|null $id): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `additional_info` | **mixed|null** |  |
| `id` | **int|string|null** |  |


**Return Value:**




**See Also:**

* https://jsonrpc.org/specification#error_object - 

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
