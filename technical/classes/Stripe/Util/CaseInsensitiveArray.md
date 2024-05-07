---
title: \Stripe\Util\CaseInsensitiveArray
footer: false
---

# CaseInsensitiveArray

CaseInsensitiveArray is an array-like class that ignores case for keys.

It is used to store HTTP headers. Per RFC 2616, section 4.2:
Each header field consists of a name followed by a colon (":") and the field value. Field names
are case-insensitive.

In the context of stripe-php, this is useful because the API will return headers with different
case depending on whether HTTP/2 is used or not (with HTTP/2, headers are always in lowercase).

* Full name: `\Stripe\Util\CaseInsensitiveArray`
* This class implements: \ArrayAccess, \Countable, \IteratorAggregate



## Methods

### __construct



```php
public CaseInsensitiveArray::__construct(mixed $initial_array = []): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `initial_array` | **mixed** |  |


**Return Value:**





---
### count



```php
public CaseInsensitiveArray::count(): mixed
```









**Return Value:**





---
### getIterator



```php
public CaseInsensitiveArray::getIterator(): \ArrayIterator
```









**Return Value:**





---
### offsetSet



```php
public CaseInsensitiveArray::offsetSet(mixed $offset, mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `offset` | **mixed** |  |
| `value` | **mixed** |  |


**Return Value:**





---
### offsetExists



```php
public CaseInsensitiveArray::offsetExists(mixed $offset): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `offset` | **mixed** |  |


**Return Value:**





---
### offsetUnset



```php
public CaseInsensitiveArray::offsetUnset(mixed $offset): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `offset` | **mixed** |  |


**Return Value:**





---
### offsetGet



```php
public CaseInsensitiveArray::offsetGet(mixed $offset): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `offset` | **mixed** |  |


**Return Value:**





---
### maybeLowercase



```php
private static CaseInsensitiveArray::maybeLowercase(mixed $v): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `v` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
