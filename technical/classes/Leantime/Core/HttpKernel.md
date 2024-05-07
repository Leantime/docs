---
title: \Leantime\Core\HttpKernel
footer: false
---

# HttpKernel





* Full name: `\Leantime\Core\HttpKernel`
* This class implements: \Illuminate\Contracts\Http\Kernel



## Methods

### bootstrap

Bootstrap the application if it has not been previously bootstrapped.

```php
public HttpKernel::bootstrap(): void
```









**Return Value:**





---
### handle

Handle the incoming request.

```php
public HttpKernel::handle(\Symfony\Component\HttpFoundation\Request $request): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Symfony\Component\HttpFoundation\Request** | The incoming request. |


**Return Value:**

The response.



---
### terminate

Terminate the request.

```php
public HttpKernel::terminate(mixed $request, mixed $response): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **mixed** | The request object. |
| `response` | **mixed** | The response object. |


**Return Value:**





---
### getApplication

Get the application instance.

```php
public HttpKernel::getApplication(): \Leantime\Core\Application
```









**Return Value:**





---
### getMiddleware

Get the application middleware

```php
public HttpKernel::getMiddleware(): array
```









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
protected static Eventhelpers::get_event_context( $function): string
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
private static Eventhelpers::get_function_context(?int $functionInt = null): string
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
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
