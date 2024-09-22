---
title: \Leantime\Core\Middleware\RequestRateLimiter
footer: false
---

# RequestRateLimiter

Class ApiRateLimiter

This class is responsible for rate limiting requests, login requests and api requests
`\Leantime\Core\Middleware\RequestRateLimiter`




## Methods

### __construct

__construct
Constructor method for the class.

```php
public RequestRateLimiter::__construct(\Leantime\Core\Configuration\Environment $config, \Illuminate\Cache\RateLimiter $limiter): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Configuration\Environment** |  |
| `limiter` | **\Illuminate\Cache\RateLimiter** | The RateLimiter object to be initialized. |


**Return Value:**





---
### handle

Handle the incoming request.

```php
public RequestRateLimiter::handle(\Leantime\Core\Http\IncomingRequest $request, \Closure $next): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\Http\IncomingRequest** | The incoming request object. |
| `next` | **\Closure** | The next middleware closure. |


**Return Value:**

The response object.



---
### getHeaders

Get rate limiter headers for response.

```php
private RequestRateLimiter::getHeaders(string $key, string $limit): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |
| `limit` | **string** |  |


**Return Value:**





---


## Inherited methods

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
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
