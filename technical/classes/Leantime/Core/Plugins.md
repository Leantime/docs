---
title: \Leantime\Core\Plugins
footer: false
---

# Plugins

Plugins class


`\Leantime\Core\Plugins`




## Methods

### __construct

constructor

```php
public Plugins::__construct(\Leantime\Core\Configuration\Environment $config): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Configuration\Environment** |  |


**Return Value:**





---
### standardize_plugin_keys

Makes all plugin keys lowercase for easy comparisons

```php
private Plugins::standardize_plugin_keys(array $plugins): array
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
public Plugins::getEnabledPlugins(): array
```









**Return Value:**





---
### isPluginEnabled

Checks to see if a plugin is enabled

```php
public Plugins::isPluginEnabled(string $plugin_name): bool
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
