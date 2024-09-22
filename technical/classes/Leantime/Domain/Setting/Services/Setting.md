---
title: \Leantime\Domain\Setting\Services\Setting
footer: false
---

# Setting




`\Leantime\Domain\Setting\Services\Setting`




## Methods

### __construct



```php
public Setting::__construct(\Leantime\Domain\Setting\Repositories\Setting $settingsRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |


**Return Value:**





---
### setLogo



```php
public Setting::setLogo( $file): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **** |  |


**Return Value:**





---
### resetLogo



```php
public Setting::resetLogo(): void
```









**Return Value:**





---
### saveSetting



```php
public Setting::saveSetting( $key,  $value): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **** |  |
| `value` | **** |  |


**Return Value:**





---
### getSetting



```php
public Setting::getSetting( $key): false|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **** |  |


**Return Value:**





---
### getSettingsRepo



```php
public Setting::getSettingsRepo(): \Leantime\Domain\Setting\Repositories\Setting
```









**Return Value:**





---
### setSettingsRepo



```php
public Setting::setSettingsRepo(\Leantime\Domain\Setting\Repositories\Setting $settingsRepo): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |


**Return Value:**





---
### getCompanyId

Gets the company id (Sets if it's not set)

```php
public Setting::getCompanyId(): string
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
