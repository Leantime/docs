---
title: \Stripe\Util\RequestOptions
footer: false
---

# RequestOptions





* Full name: `\Stripe\Util\RequestOptions`



## Methods

### __construct



```php
public RequestOptions::__construct(null|string $key = null, array&lt;string,string&gt; $headers = [], null|string $base = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **null|string** |  |
| `headers` | **array<string,string>** |  |
| `base` | **null|string** |  |


**Return Value:**





---
### __debugInfo



```php
public RequestOptions::__debugInfo(): array&lt;string,string&gt;
```









**Return Value:**





---
### merge

Unpacks an options array and merges it into the existing RequestOptions
object.

```php
public RequestOptions::merge(null|array|\Stripe\Util\RequestOptions|string $options, bool $strict = false): \Stripe\Util\RequestOptions
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `options` | **null|array|\Stripe\Util\RequestOptions|string** | a key =&gt; value array |
| `strict` | **bool** | when true, forbid string form and arbitrary keys in array form |


**Return Value:**





---
### discardNonPersistentHeaders

Discards all headers that we don't want to persist across requests.

```php
public RequestOptions::discardNonPersistentHeaders(): mixed
```









**Return Value:**





---
### parse

Unpacks an options array into an RequestOptions object.

```php
public static RequestOptions::parse(null|array|\Stripe\Util\RequestOptions|string $options, bool $strict = false): \Stripe\Util\RequestOptions
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `options` | **null|array|\Stripe\Util\RequestOptions|string** | a key =&gt; value array |
| `strict` | **bool** | when true, forbid string form and arbitrary keys in array form |


**Return Value:**





---
### redactedApiKey



```php
private RequestOptions::redactedApiKey(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
