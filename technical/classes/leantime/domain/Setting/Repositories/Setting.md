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
public Setting::getSetting(mixed $type): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **mixed** |  |


**Return Value:**





---
### saveSetting



```php
public Setting::saveSetting(mixed $type, mixed $value): mixed
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
public Setting::deleteSetting(mixed $type): mixed
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
public Setting::checkIfInstalled(): bool
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
