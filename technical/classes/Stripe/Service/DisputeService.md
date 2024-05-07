---
title: \Stripe\Service\DisputeService
footer: false
---

# DisputeService

Abstract base class for all services.



* Full name: `\Stripe\Service\DisputeService`
* Parent class: [\Stripe\Service\AbstractService](technical/AbstractService.md)



## Methods

### all

Returns a list of your disputes.

```php
public DisputeService::all(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\Dispute&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### close

Closing the dispute for a charge indicates that you do not have any evidence to
submit and are essentially dismissing the dispute, acknowledging it as lost.

```php
public DisputeService::close(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Dispute
```

The status of the dispute will change from <code>needs_response</code> to
<code>lost</code>. <em>Closing a dispute is irreversible</em>.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### retrieve

Retrieves the dispute with the given ID.

```php
public DisputeService::retrieve(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Dispute
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### update

When you get a dispute, contacting your customer is always the best first step.

```php
public DisputeService::update(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Dispute
```

If that doesn’t work, you can submit evidence to help us resolve the dispute in
your favor. You can do this in your <a
href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer,
you can use the API to submit evidence programmatically.

Depending on your dispute type, different evidence fields will give you a better
chance of winning your dispute. To figure out which evidence fields to provide,
see our <a href="/docs/disputes/categories">guide to dispute types</a>.






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
