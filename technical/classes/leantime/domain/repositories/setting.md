---
title: \leantime\domain\repositories\setting
footer: false
---

# setting





* Full name: `\leantime\domain\repositories\setting`



## Methods

### __construct

__construct - neu db connection

```php
public setting::__construct(): mixed
```









**Return Value:**





---
### getSetting



```php
public setting::getSetting(mixed $type): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **mixed** |  |


**Return Value:**





---
### saveSetting



```php
public setting::saveSetting(mixed $type, mixed $value): mixed
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
public setting::deleteSetting(mixed $type): mixed
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
public setting::checkIfInstalled(): bool
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
