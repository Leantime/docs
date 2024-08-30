---
title: \Leantime\Core\Middleware\StartSession
footer: false
---

# StartSession





* Full name: `\Leantime\Core\Middleware\StartSession`



## Methods

### __construct

Create a new session middleware.

```php
public StartSession::__construct(\Illuminate\Session\SessionManager $manager, callable|null $cacheFactoryResolver = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `manager` | **\Illuminate\Session\SessionManager** |  |
| `cacheFactoryResolver` | **callable|null** |  |


**Return Value:**





---
### handle

Handle an incoming request.

```php
public StartSession::handle(\Leantime\Core\Http\IncomingRequest $request, \Closure $next): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\Http\IncomingRequest** |  |
| `next` | **\Closure** |  |


**Return Value:**





---
### handleRequestWhileBlocking

Handle the given request within session state.

```php
protected StartSession::handleRequestWhileBlocking(\Leantime\Core\Http\IncomingRequest $request, \Illuminate\Contracts\Session\Session $session, \Closure $next): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\Http\IncomingRequest** |  |
| `session` | **\Illuminate\Contracts\Session\Session** |  |
| `next` | **\Closure** |  |


**Return Value:**





---
### handleStatefulRequest

Handle the given request within session state.

```php
protected StartSession::handleStatefulRequest(\Leantime\Core\Http\IncomingRequest $request, \Illuminate\Contracts\Session\Session $session, \Closure $next): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\Http\IncomingRequest** |  |
| `session` | **\Illuminate\Contracts\Session\Session** |  |
| `next` | **\Closure** |  |


**Return Value:**





---
### startSession

Start the session for the given request.

```php
protected StartSession::startSession(\Leantime\Core\Http\IncomingRequest $request, \Illuminate\Contracts\Session\Session $session): \Illuminate\Contracts\Session\Session
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\Http\IncomingRequest** |  |
| `session` | **\Illuminate\Contracts\Session\Session** |  |


**Return Value:**





---
### getSession

Get the session implementation from the manager.

```php
public StartSession::getSession(\Leantime\Core\Http\IncomingRequest $request): \Illuminate\Contracts\Session\Session
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\Http\IncomingRequest** |  |


**Return Value:**





---
### collectGarbage

Remove the garbage from the session if necessary.

```php
protected StartSession::collectGarbage(\Illuminate\Contracts\Session\Session $session): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `session` | **\Illuminate\Contracts\Session\Session** |  |


**Return Value:**





---
### configHitsLottery

Determine if the configuration odds hit the lottery.

```php
protected StartSession::configHitsLottery(array $config): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **array** |  |


**Return Value:**





---
### storeCurrentUrl

Store the current URL for the request if necessary.

```php
protected StartSession::storeCurrentUrl(\Leantime\Core\Http\IncomingRequest $request, \Illuminate\Contracts\Session\Session $session): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\Http\IncomingRequest** |  |
| `session` | **\Illuminate\Contracts\Session\Session** |  |


**Return Value:**





---
### addCookieToResponse

Add the session cookie to the application response.

```php
protected StartSession::addCookieToResponse(\Symfony\Component\HttpFoundation\Response $response, \Illuminate\Contracts\Session\Session $session): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `response` | **\Symfony\Component\HttpFoundation\Response** |  |
| `session` | **\Illuminate\Contracts\Session\Session** |  |


**Return Value:**





---
### saveSession

Save the session data to storage.

```php
protected StartSession::saveSession(\Leantime\Core\Http\IncomingRequest $request): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\Http\IncomingRequest** |  |


**Return Value:**





---
### getSessionLifetimeInSeconds

Get the session lifetime in seconds.

```php
protected StartSession::getSessionLifetimeInSeconds(): int
```









**Return Value:**





---
### getCookieExpirationDate

Get the cookie lifetime in seconds.

```php
protected StartSession::getCookieExpirationDate(): \DateTimeInterface|int
```









**Return Value:**





---
### sessionConfigured

Determine if a session driver has been configured.

```php
protected StartSession::sessionConfigured(): bool
```









**Return Value:**





---
### sessionIsPersistent

Determine if the configured session driver is persistent.

```php
protected StartSession::sessionIsPersistent(array|null $config = null): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **array|null** |  |


**Return Value:**





---
### cache

Resolve the given cache driver.

```php
protected StartSession::cache(string $driver): \Illuminate\Cache\Store
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `driver` | **string** |  |


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
