---
title: \Leantime\Core\Middleware\TrustProxies
footer: false
---

# TrustProxies

Class TrustProxies

The TrustProxies class is responsible for handling incoming requests and checking if they are from trusted proxies.
`\Leantime\Core\Middleware\TrustProxies`




## Methods

### __construct

Constructor for the class.

```php
public TrustProxies::__construct(\Leantime\Core\Configuration\Environment $config): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Configuration\Environment** | An instance of the Environment class. |


**Return Value:**





---
### handle

Handle the incoming request and pass it to the next middleware.

```php
public TrustProxies::handle(\Leantime\Core\Http\IncomingRequest $request, \Closure $next): \Symfony\Component\HttpFoundation\Response
```

If the request is not from a trusted proxy, it returns a response with an error message.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\Http\IncomingRequest** | The incoming request. |
| `next` | **\Closure** | The next middleware closure. |


**Return Value:**

The response returned by the next middleware.



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
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
