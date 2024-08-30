---
title: \Leantime\Domain\Modulemanager\Services\Modulemanager
footer: false
---

# Modulemanager





* Full name: `\Leantime\Domain\Modulemanager\Services\Modulemanager`



## Methods

### __construct

__construct - get and test Session or make session

```php
public Modulemanager::__construct(\Leantime\Domain\Plugins\Services\Plugins $plugins): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `plugins` | **\Leantime\Domain\Plugins\Services\Plugins** |  |


**Return Value:**





---
### isModuleEnabled



```php
public static Modulemanager::isModuleEnabled( $module): bool
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **** |  |


**Return Value:**





---
### isModuleAvailable

Checks if a module is available.

```php
public Modulemanager::isModuleAvailable(string $module): bool
```

In Progress: This method is a stub to hook into via filters.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** | The name of the module to check availability for. |


**Return Value:**

Returns true if the module is available, false otherwise.



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
