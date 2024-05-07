---
title: \Stripe\Util\Util
footer: false
---

# Util





* Full name: `\Stripe\Util\Util`



## Methods

### isList

Whether the provided array (or other) is a list rather than a dictionary.

```php
public static Util::isList(array|mixed $array): bool
```

A list is defined as an array for which all the keys are consecutive
integers starting at 0. Empty arrays are considered to be lists.

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `array` | **array|mixed** |  |


**Return Value:**

true if the given object is a list



---
### convertToStripeObject

Converts a response from the Stripe API to the corresponding PHP object.

```php
public static Util::convertToStripeObject(array $resp, array $opts): array|\Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `resp` | **array** | the response from the Stripe API |
| `opts` | **array** |  |


**Return Value:**





---
### utf8



```php
public static Util::utf8(mixed|string $value): mixed|string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | **mixed|string** | a string to UTF8-encode |


**Return Value:**

the UTF8-encoded string, or the object passed in if
it wasn't a string



---
### secureCompare

Compares two strings for equality. The time taken is independent of the
number of characters that match.

```php
public static Util::secureCompare(string $a, string $b): bool
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `a` | **string** | one of the strings to compare |
| `b` | **string** | the other string to compare |


**Return Value:**

true if the strings are equal, false otherwise



---
### objectsToIds

Recursively goes through an array of parameters. If a parameter is an instance of
ApiResource, then it is replaced by the resource's ID.

```php
public static Util::objectsToIds(mixed $h): mixed
```

Also clears out null values.

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `h` | **mixed** |  |


**Return Value:**





---
### encodeParameters



```php
public static Util::encodeParameters(array $params): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** |  |


**Return Value:**





---
### flattenParams



```php
public static Util::flattenParams(array $params, null|string $parentKey = null): array
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** |  |
| `parentKey` | **null|string** |  |


**Return Value:**





---
### flattenParamsList



```php
public static Util::flattenParamsList(array $value, string $calculatedKey): array
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | **array** |  |
| `calculatedKey` | **string** |  |


**Return Value:**





---
### urlEncode



```php
public static Util::urlEncode(string $key): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** | a string to URL-encode |


**Return Value:**

the URL-encoded string



---
### normalizeId



```php
public static Util::normalizeId(mixed $id): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### currentTimeMillis

Returns UNIX timestamp in milliseconds.

```php
public static Util::currentTimeMillis(): int
```



* This method is **static**.





**Return Value:**

current time in millis



---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
