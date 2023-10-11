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
public Plugins::getAllPlugins(): array|false
```









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


---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
