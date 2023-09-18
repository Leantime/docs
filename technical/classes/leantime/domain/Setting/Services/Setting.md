---
title: \Leantime\Domain\Setting\Services\Setting
footer: false
---

# Setting





* Full name: `\Leantime\Domain\Setting\Services\Setting`



## Methods

### __construct



```php
public Setting::__construct(\Leantime\Core\Template $tpl, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `tpl` | **\Leantime\Core\Template** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |


**Return Value:**





---
### setLogo



```php
public Setting::setLogo(mixed $file): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **mixed** |  |


**Return Value:**





---
### resetLogo



```php
public Setting::resetLogo(): mixed
```









**Return Value:**





---
### saveSetting



```php
public Setting::saveSetting(mixed $key, mixed $value): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **mixed** |  |
| `value` | **mixed** |  |


**Return Value:**





---
### getSetting



```php
public Setting::getSetting(mixed $key): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **mixed** |  |


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


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
