---
title: \Leantime\Core\Support\Build
footer: false
---

# Build





* Full name: `\Leantime\Core\Support\Build`



## Methods

### __construct



```php
public Build::__construct(object $object): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `object` | **object** |  |


**Return Value:**





---
### set



```php
public Build::set(string $key, mixed $value): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** | The property name |
| `value` | **mixed** | The property value or a callable to set the nested property value |


**Return Value:**





---
### tap



```php
public Build::tap(string $key, callable $configurator): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |
| `configurator` | **callable** |  |


**Return Value:**





---
### __call



```php
public Build::__call(string $method, array $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |
| `params` | **array** |  |


**Return Value:**





---
### handleDotNotation



```php
private Build::handleDotNotation(mixed& $currentElement, array $keys): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `currentElement` | **mixed** |  |
| `keys` | **array** |  |


**Return Value:**





---
### setValue



```php
private Build::setValue(object|array& $property, string $key, mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `property` | **object|array** |  |
| `key` | **string** |  |
| `value` | **mixed** |  |


**Return Value:**





---
### get



```php
public Build::get(string $key = &#039;&#039;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |


**Return Value:**





---
### getAndTap



```php
public Build::getAndTap(string $key = &#039;&#039;, ?callable $callback = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |
| `callback` | **?callable** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
