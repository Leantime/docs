---
title: \Leantime\Core\Support\Cast
footer: false
---

# Cast





* Full name: `\Leantime\Core\Support\Cast`



## Methods

### __construct



```php
public Cast::__construct(object|array $object): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `object` | **object|array** |  |


**Return Value:**





---
### castTo



```php
public Cast::castTo(string $classDest, array $constructParams = [], array $mappings = []): object
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `classDest` | **string** |  |
| `constructParams` | **array** |  |
| `mappings` | **array** |  |


**Return Value:**





---
### castSimple



```php
public static Cast::castSimple(mixed $value, string $simpleType): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | **mixed** |  |
| `simpleType` | **string** |  |


**Return Value:**





---
### castEnum

Cast to backed enum

```php
public static Cast::castEnum(mixed $value, string $enumClass): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | **mixed** |  |
| `enumClass` | **string** |  |


**Return Value:**





---
### castDateTime

Casts a string value into a datetime object.

```php
public static Cast::castDateTime(string $value): \DateTime
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | **string** | The value to be casted into a datetime object. |


**Return Value:**

The datetime object.



---
### handleIterator



```php
protected Cast::handleIterator(array|object $iterator, array $mappings = []): array|object
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `iterator` | **array|object** |  |
| `mappings` | **array** |  |


**Return Value:**





---
### getMatchingMappings



```php
protected Cast::getMatchingMappings(array $mappings, string $propName): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `mappings` | **array** |  |
| `propName` | **string** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
