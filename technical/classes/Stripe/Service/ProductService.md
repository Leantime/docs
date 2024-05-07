---
title: \Stripe\Service\ProductService
footer: false
---

# ProductService

Abstract base class for all services.



* Full name: `\Stripe\Service\ProductService`
* Parent class: [\Stripe\Service\AbstractService](technical/AbstractService.md)



## Methods

### all

Returns a list of your products. The products are returned sorted by creation
date, with the most recently created products appearing first.

```php
public ProductService::all(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\Product&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### create

Creates a new product object.

```php
public ProductService::create(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Product
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### delete

Delete a product. Deleting a product is only possible if it has no prices
associated with it. Additionally, deleting a product with <code>type=good</code>
is only possible if it has no SKUs associated with it.

```php
public ProductService::delete(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Product
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### retrieve

Retrieves the details of an existing product. Supply the unique product ID from
either a product creation request or the product list, and Stripe will return
the corresponding product information.

```php
public ProductService::retrieve(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Product
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### search

Search for products you’ve previously created using Stripe’s <a
href="/docs/search#search-query-language">Search Query Language</a>. Don’t use
search in read-after-write flows where strict consistency is necessary. Under
normal operating conditions, data is searchable in less than a minute.

```php
public ProductService::search(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\SearchResult&lt;\Stripe\Product&gt;
```

Occasionally, propagation of new or updated data can be up to an hour behind
during outages. Search functionality is not available to merchants in India.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### update

Updates the specific product by setting the values of the parameters passed. Any
parameters not provided will be left unchanged.

```php
public ProductService::update(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Product
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---


## Inherited methods

### __construct

Initializes a new instance of the {@link AbstractService} class.

```php
public AbstractService::__construct(\Stripe\StripeClientInterface $client): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `client` | **\Stripe\StripeClientInterface** |  |


**Return Value:**





---
### getClient

Gets the client used by this service to send requests.

```php
public AbstractService::getClient(): \Stripe\StripeClientInterface
```









**Return Value:**





---
### getStreamingClient

Gets the client used by this service to send requests.

```php
public AbstractService::getStreamingClient(): \Stripe\StripeStreamingClientInterface
```









**Return Value:**





---
### formatParams

Translate null values to empty strings. For service methods,
we interpret null as a request to unset the field, which
corresponds to sending an empty string for the field to the
API.

```php
private static AbstractService::formatParams(null|array $params): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |


**Return Value:**





---
### request



```php
protected AbstractService::request(mixed $method, mixed $path, mixed $params, mixed $opts): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **mixed** |  |
| `path` | **mixed** |  |
| `params` | **mixed** |  |
| `opts` | **mixed** |  |


**Return Value:**





---
### requestStream



```php
protected AbstractService::requestStream(mixed $method, mixed $path, mixed $readBodyChunkCallable, mixed $params, mixed $opts): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **mixed** |  |
| `path` | **mixed** |  |
| `readBodyChunkCallable` | **mixed** |  |
| `params` | **mixed** |  |
| `opts` | **mixed** |  |


**Return Value:**





---
### requestCollection



```php
protected AbstractService::requestCollection(mixed $method, mixed $path, mixed $params, mixed $opts): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **mixed** |  |
| `path` | **mixed** |  |
| `params` | **mixed** |  |
| `opts` | **mixed** |  |


**Return Value:**





---
### requestSearchResult



```php
protected AbstractService::requestSearchResult(mixed $method, mixed $path, mixed $params, mixed $opts): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **mixed** |  |
| `path` | **mixed** |  |
| `params` | **mixed** |  |
| `opts` | **mixed** |  |


**Return Value:**





---
### buildPath



```php
protected AbstractService::buildPath(mixed $basePath, mixed $ids): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `basePath` | **mixed** |  |
| `ids` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
