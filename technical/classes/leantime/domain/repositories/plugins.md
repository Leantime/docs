---
title: \leantime\domain\repositories\plugins
footer: false
---

# plugins





* Full name: `\leantime\domain\repositories\plugins`



## Methods

### __construct

__construct - get database connection

```php
public plugins::__construct(): mixed
```









**Return Value:**





---
### getAllPlugins



```php
public plugins::getAllPlugins(mixed $enabledOnly = true): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `enabledOnly` | **mixed** |  |


**Return Value:**





---
### addPlugin



```php
public plugins::addPlugin(\leantime\domain\models\plugins $plugin): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `plugin` | **\leantime\domain\models\plugins** |  |


**Return Value:**





---
### enablePlugin



```php
public plugins::enablePlugin(int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### disablePlugin



```php
public plugins::disablePlugin(int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### removePlugin



```php
public plugins::removePlugin(int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
