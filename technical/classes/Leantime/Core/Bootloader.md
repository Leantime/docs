---
title: \Leantime\Core\Bootloader
footer: false
---

# Bootloader

Bootloader



* Full name: `\Leantime\Core\Bootloader`



## Methods

### setInstance

Set the Bootloader instance

```php
public static Bootloader::setInstance(\Leantime\Core\Bootloader|null $instance): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `instance` | **\Leantime\Core\Bootloader|null** |  |


**Return Value:**





---
### getInstance

Get the Bootloader instance

```php
public static Bootloader::getInstance(\Psr\Container\ContainerInterface|null $app = null): \Leantime\Core\Bootloader
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `app` | **\Psr\Container\ContainerInterface|null** |  |


**Return Value:**





---
### __construct

Constructor

```php
public Bootloader::__construct(\Psr\Container\ContainerInterface|null $app = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `app` | **\Psr\Container\ContainerInterface|null** |  |


**Return Value:**





---
### __invoke

Boot the Application.

```php
public Bootloader::__invoke(): void
```









**Return Value:**





---
### boot

Execute the Application lifecycle.

```php
public Bootloader::boot(): void
```









**Return Value:**





---
### getApplication

Get the Application instance and bind important services

```php
public Bootloader::getApplication(): \Leantime\Core\Application
```









**Return Value:**





---
### registerCoreBindings



```php
private Bootloader::registerCoreBindings(): void
```









**Return Value:**





---
### registerCoreAliases



```php
private Bootloader::registerCoreAliases(): void
```









**Return Value:**





---
### clearCache



```php
private Bootloader::clearCache(): void
```









**Return Value:**





---
### handleRequest

Handle the request

```php
private Bootloader::handleRequest(): void
```









**Return Value:**





---
### setErrorHandler



```php
private Bootloader::setErrorHandler(int $debug): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `debug` | **int** |  |


**Return Value:**





---
### bindRequest

Bind request

```php
private Bootloader::bindRequest(): void
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
> Automatically generated from source code comments on 2024-05-08 using [phpDocumentor](http://www.phpdoc.org/)
