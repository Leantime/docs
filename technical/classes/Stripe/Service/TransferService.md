---
title: \Stripe\Service\TransferService
footer: false
---

# TransferService

Abstract base class for all services.



* Full name: `\Stripe\Service\TransferService`
* Parent class: [\Stripe\Service\AbstractService](technical/AbstractService.md)



## Methods

### all

Returns a list of existing transfers sent to connected accounts. The transfers
are returned in sorted order, with the most recently created transfers appearing
first.

```php
public TransferService::all(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\Transfer&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### allReversals

You can see a list of the reversals belonging to a specific transfer. Note that
the 10 most recent reversals are always available by default on the transfer
object. If you need more than those 10, you can use this API method and the
<code>limit</code> and <code>starting_after</code> parameters to page through
additional reversals.

```php
public TransferService::allReversals(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\TransferReversal&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### cancel



```php
public TransferService::cancel(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Transfer
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### create

To send funds from your Stripe account to a connected account, you create a new
transfer object. Your <a href="#balance">Stripe balance</a> must be able to
cover the transfer amount, or you’ll receive an “Insufficient Funds” error.

```php
public TransferService::create(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Transfer
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### createReversal

When you create a new reversal, you must specify a transfer to create it on.

```php
public TransferService::createReversal(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\TransferReversal
```

When reversing transfers, you can optionally reverse part of the transfer. You
can do so as many times as you wish until the entire transfer has been reversed.

Once entirely reversed, a transfer can’t be reversed again. This method will
return an error when called on an already-reversed transfer, or when trying to
reverse more money than is left on a transfer.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### retrieve

Retrieves the details of an existing transfer. Supply the unique transfer ID
from either a transfer creation request or the transfer list, and Stripe will
return the corresponding transfer information.

```php
public TransferService::retrieve(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Transfer
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### retrieveReversal

By default, you can see the 10 most recent reversals stored directly on the
transfer object, but you can also retrieve details about a specific reversal
stored on the transfer.

```php
public TransferService::retrieveReversal(string $parentId, string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\TransferReversal
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
### update

Updates the specified transfer by setting the values of the parameters passed.

```php
public TransferService::update(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Transfer
```

Any parameters not provided will be left unchanged.

This request accepts only metadata as an argument.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### updateReversal

Updates the specified reversal by setting the values of the parameters passed.

```php
public TransferService::updateReversal(string $parentId, string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\TransferReversal
```

Any parameters not provided will be left unchanged.

This request only accepts metadata and description as arguments.






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
