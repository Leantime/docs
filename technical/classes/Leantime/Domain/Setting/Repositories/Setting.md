---
title: \Leantime\Domain\Setting\Repositories\Setting
footer: false
---

# Setting





* Full name: `\Leantime\Domain\Setting\Repositories\Setting`



## Methods

### __construct

__construct - neu db connection

```php
public Setting::__construct(\Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getSetting



```php
public Setting::getSetting( $type): false|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **** |  |


**Return Value:**





---
### saveSetting



```php
public Setting::saveSetting( $type,  $value): bool
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
public Setting::deleteSetting( $type): void
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
public Setting::checkIfInstalled(): bool
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
