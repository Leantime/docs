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
public Plugins::getAllPlugins(): mixed
```









**Return Value:**





---
### isPluginEnabled



```php
public Plugins::isPluginEnabled(mixed $pluginFolder): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pluginFolder` | **mixed** |  |


**Return Value:**





---
### getEnabledPlugins



```php
public Plugins::getEnabledPlugins(): mixed
```









**Return Value:**





---
### discoverNewPlugins



```php
public Plugins::discoverNewPlugins(): mixed
```









**Return Value:**





---
### installPlugin



```php
public Plugins::installPlugin(mixed $pluginFolder): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pluginFolder` | **mixed** |  |


**Return Value:**





---
### enablePlugin



```php
public Plugins::enablePlugin(int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### disablePlugin



```php
public Plugins::disablePlugin(int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### removePlugin



```php
public Plugins::removePlugin(int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### getPluginClassName



```php
public Plugins::getPluginClassName(\Leantime\Domain\Plugins\Models\Plugins $plugin): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `plugin` | **\Leantime\Domain\Plugins\Models\Plugins** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
