---
title: \Leantime\Domain\Plugins\Repositories\Plugins
footer: false
---

# Plugins




`\Leantime\Domain\Plugins\Repositories\Plugins`




## Methods

### __construct

__construct - get database connection

```php
public Plugins::__construct(\Leantime\Core\Db\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |


**Return Value:**





---
### getAllPlugins



```php
public Plugins::getAllPlugins( $enabledOnly = true): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `enabledOnly` | **** |  |


**Return Value:**





---
### getPlugin



```php
public Plugins::getPlugin(int $id): \Leantime\Domain\Plugins\Models\InstalledPlugin|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### addPlugin



```php
public Plugins::addPlugin(\Leantime\Domain\Plugins\Models\InstalledPlugin $plugin): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `plugin` | **\Leantime\Domain\Plugins\Models\InstalledPlugin** |  |


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


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
