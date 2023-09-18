---
title: \Leantime\Domain\Plugins\Repositories\Plugins
footer: false
---

# Plugins





* Full name: `\Leantime\Domain\Plugins\Repositories\Plugins`



## Methods

### __construct

__construct - get database connection

```php
public Plugins::__construct(\Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getAllPlugins



```php
public Plugins::getAllPlugins(mixed $enabledOnly = true): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `enabledOnly` | **mixed** |  |


**Return Value:**





---
### getPlugin



```php
public Plugins::getPlugin(int $id): \Leantime\Domain\Plugins\Models\Plugins|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### addPlugin



```php
public Plugins::addPlugin(\Leantime\Domain\Plugins\Models\Plugins $plugin): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `plugin` | **\Leantime\Domain\Plugins\Models\Plugins** |  |


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


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
