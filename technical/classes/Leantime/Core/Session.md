---
title: \Leantime\Core\Session
footer: false
---

# Session

Session Class - login procedure



* Full name: `\Leantime\Core\Session`



## Methods

### __construct

__construct - get and test Session or make session

```php
public Session::__construct(\Leantime\Core\Environment $config, \Leantime\Core\IncomingRequest $request): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Environment** |  |
| `request` | **\Leantime\Core\IncomingRequest** |  |


**Return Value:**





---
### getSID

getSID - get the sessionId

```php
public static Session::getSID(): string
```



* This method is **static**.





**Return Value:**





---
### makeSID

makeSID - Generate SID with md5(), remote Address, time() and the password

```php
private Session::makeSID(): void
```









**Return Value:**





---
### destroySession

destroySession - destroy the session

```php
public static Session::destroySession(): void
```



* This method is **static**.





**Return Value:**





---
### get_client_ip



```php
private static Session::get_client_ip(): mixed
```



* This method is **static**.





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
