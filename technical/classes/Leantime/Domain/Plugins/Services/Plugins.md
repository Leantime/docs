---
title: \Leantime\Domain\Plugins\Services\Plugins
footer: false
---

# Plugins





* Full name: `\Leantime\Domain\Plugins\Services\Plugins`



## Methods

### __construct



```php
public Plugins::__construct(\Leantime\Domain\Plugins\Repositories\Plugins $pluginRepository, \Leantime\Core\Environment $config): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pluginRepository` | **\Leantime\Domain\Plugins\Repositories\Plugins** |  |
| `config` | **\Leantime\Core\Environment** |  |


**Return Value:**





---
### getAllPlugins



```php
public Plugins::getAllPlugins(bool $enabledOnly = false): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `enabledOnly` | **bool** |  |


**Return Value:**





---
### isPluginEnabled



```php
public Plugins::isPluginEnabled( $pluginFolder): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pluginFolder` | **** |  |


**Return Value:**





---
### getEnabledPlugins



```php
public Plugins::getEnabledPlugins(): array|false|mixed
```









**Return Value:**





---
### discoverNewPlugins



```php
public Plugins::discoverNewPlugins(): array
```









**Return Value:**





---
### installPlugin



```php
public Plugins::installPlugin( $pluginFolder): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pluginFolder` | **** |  |


**Return Value:**





---
### enablePlugin



```php
public Plugins::enablePlugin(int $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### disablePlugin



```php
public Plugins::disablePlugin(int $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### removePlugin



```php
public Plugins::removePlugin(int $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### getPluginClassName



```php
public Plugins::getPluginClassName(\Leantime\Domain\Plugins\Models\Plugins $plugin): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `plugin` | **\Leantime\Domain\Plugins\Models\Plugins** |  |


**Return Value:**





---
### getMarketplacePlugins



```php
public Plugins::getMarketplacePlugins(int $page, string $query = &#039;&#039;): \Illuminate\Support\Collection
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | **int** |  |
| `query` | **string** |  |


**Return Value:**





---
### getMarketplacePlugin



```php
public Plugins::getMarketplacePlugin(string $identifier): \Illuminate\Support\Collection
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `identifier` | **string** |  |


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
private static Eventhelpers::get_event_context( $function): string
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
private static Eventhelpers::get_function_context(null $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **null** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
