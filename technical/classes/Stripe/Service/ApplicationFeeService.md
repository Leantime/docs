---
title: \Stripe\Service\ApplicationFeeService
footer: false
---

# ApplicationFeeService

Abstract base class for all services.



* Full name: `\Stripe\Service\ApplicationFeeService`
* Parent class: [\Stripe\Service\AbstractService](technical/AbstractService.md)



## Methods

### all

Returns a list of application fees you’ve previously collected. The application
fees are returned in sorted order, with the most recent fees appearing first.

```php
public ApplicationFeeService::all(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\ApplicationFee&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### allRefunds

You can see a list of the refunds belonging to a specific application fee. Note
that the 10 most recent refunds are always available by default on the
application fee object. If you need more than those 10, you can use this API
method and the <code>limit</code> and <code>starting_after</code> parameters to
page through additional refunds.

```php
public ApplicationFeeService::allRefunds(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\ApplicationFeeRefund&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### createRefund

Refunds an application fee that has previously been collected but not yet
refunded. Funds will be refunded to the Stripe account from which the fee was
originally collected.

```php
public ApplicationFeeService::createRefund(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\ApplicationFeeRefund
```

You can optionally refund only part of an application fee. You can do so
multiple times, until the entire fee has been refunded.

Once entirely refunded, an application fee can’t be refunded again. This method
will raise an error when called on an already-refunded application fee, or when
trying to refund more money than is left on an application fee.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### retrieve

Retrieves the details of an application fee that your account has collected. The
same information is returned when refunding the application fee.

```php
public ApplicationFeeService::retrieve(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\ApplicationFee
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### retrieveRefund

By default, you can see the 10 most recent refunds stored directly on the
application fee object, but you can also retrieve details about a specific
refund stored on the application fee.

```php
public ApplicationFeeService::retrieveRefund(string $parentId, string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\ApplicationFeeRefund
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### updateRefund

Updates the specified application fee refund by setting the values of the
parameters passed. Any parameters not provided will be left unchanged.

```php
public ApplicationFeeService::updateRefund(string $parentId, string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\ApplicationFeeRefund
```

This request only accepts metadata as an argument.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
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
