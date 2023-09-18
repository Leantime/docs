---
title: \Leantime\Domain\Entityrelations\Repositories\Entityrelations
footer: false
---

# Entityrelations





* Full name: `\Leantime\Domain\Entityrelations\Repositories\Entityrelations`



## Methods

### __construct

__construct - neu db connection

```php
public Entityrelations::__construct(\Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getSetting



```php
public Entityrelations::getSetting(mixed $type): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **mixed** |  |


**Return Value:**





---
### saveSetting



```php
public Entityrelations::saveSetting(mixed $type, mixed $value): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **mixed** |  |
| `value` | **mixed** |  |


**Return Value:**





---
### deleteSetting



```php
public Entityrelations::deleteSetting(mixed $type): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **mixed** |  |


**Return Value:**





---
### checkIfInstalled

checkIfInstalled checks if zp user table exists (and assumes that leantime is installed)

```php
public Entityrelations::checkIfInstalled(): bool
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
