---
title: \leantime\domain\controllers\jsonrpc
footer: false
---

# jsonrpc





* Full name: `\leantime\domain\controllers\jsonrpc`
* Parent class: [\leantime\core\controller](../../core/controller.md)



## Methods

### init

init - initialize private variables or events to happen before route execution

```php
public jsonrpc::init(): void
```









**Return Value:**





---
### post

Handles post requests

```php
public jsonrpc::post(array $params): void
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
public jsonrpc::get(array $params): void
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
public jsonrpc::patch(): void
```









**Return Value:**





---
### delete

Handles delete requests

```php
public jsonrpc::delete(): void
```









**Return Value:**





---
### executeApiRequest

executes api call

```php
private jsonrpc::executeApiRequest(array $params): void
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
private jsonrpc::parseMethodString(string $methodstring): array
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
private jsonrpc::getMethodParameters(string $servicename, string $methodname): \ReflectionParameter[]
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
private jsonrpc::prepareParameters(array $params, \ReflectionParameter[] $methodParams): array
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
private jsonrpc::returnResponse(array|null $returnValue, string $id = null): void
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
private jsonrpc::returnError(string $errorMessage, int $errorcode, mixed $additional_info = null): void
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
private jsonrpc::returnParseError(mixed|null $additional_info = null): void
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
private jsonrpc::returnInvalidRequest(mixed|null $additional_info = null): void
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
private jsonrpc::returnMethodNotFound(mixed|null $additional_info = null): void
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
private jsonrpc::returnInvalidParams(mixed|null $additional_info = null): void
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
private jsonrpc::returnServerError(mixed|null $additional_info): void
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
public controller::__construct( $method,  $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **** | the method to be initialized |
| `params` | **** | parameters or body of the request |


**Return Value:**





---
### executeActions

Allows hooking into all controllers with events

```php
private controller::executeActions(string $method, array|object $params): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |
| `params` | **array|object** |  |


**Return Value:**





---
### init

Extended Controller version of __construct()

```php
protected controller::init(): void
```









**Return Value:**





---
### run

Default function for all request types unless otherwise specified

```php
protected controller::run(): void
```









**Return Value:**





---
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
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
