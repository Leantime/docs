---
title: \leantime\core\plugins
footer: false
---

# plugins





* Full name: `\leantime\core\plugins`



## Methods

### __construct

constructor

```php
public plugins::__construct(): mixed
```









**Return Value:**





---
### standardize_plugin_keys

Makes all plugin keys lowercase for easy comparisons

```php
private plugins::standardize_plugin_keys(array $plugins): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `plugins` | **array** |  |


**Return Value:**





---
### getEnabledPlugins

Gets all plugin enabled/disabled settings

```php
public plugins::getEnabledPlugins(): array
```









**Return Value:**





---
### isPluginEnabled

Checks to see if a plugin is enabled

```php
public plugins::isPluginEnabled(string $plugin_name): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `plugin_name` | **string** |  |


**Return Value:**





---


## Inherited methods

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
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
