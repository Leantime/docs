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
public Entityrelations::__construct(\Leantime\Core\Db\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |


**Return Value:**





---
### getSetting



```php
public Entityrelations::getSetting( $type): false|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **** |  |


**Return Value:**





---
### saveSetting



```php
public Entityrelations::saveSetting( $type,  $value): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **** |  |
| `value` | **** |  |


**Return Value:**





---
### deleteSetting



```php
public Entityrelations::deleteSetting( $type): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **** |  |


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
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
