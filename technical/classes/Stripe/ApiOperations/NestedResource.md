---
title: \Stripe\ApiOperations\NestedResource
footer: false
---

# NestedResource

Trait for resources that have nested resources.

This trait should only be applied to classes that derive from StripeObject.

* Full name: `\Stripe\ApiOperations\NestedResource`




## Methods

### _nestedResourceOperation



```php
protected static NestedResource::_nestedResourceOperation(string $method, string $url, null|array $params = null, null|array|string $options = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |
| `url` | **string** |  |
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


**Return Value:**





---
### _nestedResourceUrl



```php
protected static NestedResource::_nestedResourceUrl(string $id, string $nestedPath, null|string $nestedId = null): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `nestedPath` | **string** |  |
| `nestedId` | **null|string** |  |


**Return Value:**





---
### _createNestedResource



```php
protected static NestedResource::_createNestedResource(string $id, string $nestedPath, null|array $params = null, null|array|string $options = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `nestedPath` | **string** |  |
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


**Return Value:**





---
### _retrieveNestedResource



```php
protected static NestedResource::_retrieveNestedResource(string $id, string $nestedPath, null|string $nestedId, null|array $params = null, null|array|string $options = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `nestedPath` | **string** |  |
| `nestedId` | **null|string** |  |
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


**Return Value:**





---
### _updateNestedResource



```php
protected static NestedResource::_updateNestedResource(string $id, string $nestedPath, null|string $nestedId, null|array $params = null, null|array|string $options = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `nestedPath` | **string** |  |
| `nestedId` | **null|string** |  |
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


**Return Value:**





---
### _deleteNestedResource



```php
protected static NestedResource::_deleteNestedResource(string $id, string $nestedPath, null|string $nestedId, null|array $params = null, null|array|string $options = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `nestedPath` | **string** |  |
| `nestedId` | **null|string** |  |
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


**Return Value:**





---
### _allNestedResources



```php
protected static NestedResource::_allNestedResources(string $id, string $nestedPath, null|array $params = null, null|array|string $options = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `nestedPath` | **string** |  |
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


**Return Value:**





---

---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)

