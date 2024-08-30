---
title: \Leantime\Core\Middleware\Auth
footer: false
---

# Auth




`\Leantime\Core\Middleware\Auth`




## Methods

### __construct



```php
public Auth::__construct(\Leantime\Core\Controller\Frontcontroller $frontController, \Leantime\Domain\Auth\Services\Auth $authService, \Leantime\Domain\Projects\Services\Projects $projectsService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `frontController` | **\Leantime\Core\Controller\Frontcontroller** |  |
| `authService` | **\Leantime\Domain\Auth\Services\Auth** |  |
| `projectsService` | **\Leantime\Domain\Projects\Services\Projects** |  |


**Return Value:**





---
### redirectWithOrigin

Redirect with origin

```php
public Auth::redirectWithOrigin(string $route, string $origin): \Symfony\Component\HttpFoundation\Response|\Symfony\Component\HttpFoundation\RedirectResponse
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `route` | **string** |  |
| `origin` | **string** |  |


**Return Value:**





---
### handle

Handle the request

```php
public Auth::handle(\Leantime\Core\Http\IncomingRequest $request, \Closure $next): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\Http\IncomingRequest** |  |
| `next` | **\Closure** |  |


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
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
