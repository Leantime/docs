---
title: \leantime\core\environment
footer: false
---

# environment





* Full name: `\leantime\core\environment`



## Methods

### getInstance



```php
public static environment::getInstance(): mixed
```



* This method is **static**.





**Return Value:**





---
### __construct



```php
private environment::__construct(): mixed
```









**Return Value:**





---
### environmentHelper



```php
private environment::environmentHelper(mixed $envVar, mixed $default, mixed $dataType = &quot;string&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `envVar` | **mixed** |  |
| `default` | **mixed** |  |
| `dataType` | **mixed** |  |


**Return Value:**





---
### tryGetFromEnvironment



```php
private environment::tryGetFromEnvironment(mixed $envVar, mixed $currentValue): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `envVar` | **mixed** |  |
| `currentValue` | **mixed** |  |


**Return Value:**





---
### tryGetFromYaml



```php
private environment::tryGetFromYaml(mixed $envVar, mixed $currentValue): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `envVar` | **mixed** |  |
| `currentValue` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
