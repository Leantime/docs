---
title: \Leantime\Core\Bootstrap\Bootloader
footer: false
---

# Bootloader

Bootloader


`\Leantime\Core\Bootstrap\Bootloader`




## Methods

### getInstance

Get the Bootloader instance

```php
public static Bootloader::getInstance(\Psr\Container\ContainerInterface|null $app = null): \Leantime\Core\Bootstrap\Bootloader
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
private Bootloader::__construct(\Psr\Container\ContainerInterface|null $app = null): mixed
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
### handleRequest

Handle the request

```php
private Bootloader::handleRequest(): void
```









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
