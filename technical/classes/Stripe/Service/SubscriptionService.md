---
title: \Stripe\Service\SubscriptionService
footer: false
---

# SubscriptionService

Abstract base class for all services.



* Full name: `\Stripe\Service\SubscriptionService`
* Parent class: [\Stripe\Service\AbstractService](technical/AbstractService.md)



## Methods

### all

By default, returns a list of subscriptions that have not been canceled. In
order to list canceled subscriptions, specify <code>status=canceled</code>.

```php
public SubscriptionService::all(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\Subscription&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### cancel

Cancels a customer’s subscription immediately. The customer will not be charged
again for the subscription.

```php
public SubscriptionService::cancel(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Subscription
```

Note, however, that any pending invoice items that you’ve created will still be
charged for at the end of the period, unless manually <a
href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel
at the end of the period, any pending prorations will also be left in place and
collected at the end of the period. But if the subscription is set to cancel
immediately, pending prorations will be removed.

By default, upon subscription cancellation, Stripe will stop automatic
collection of all finalized invoices for the customer. This is intended to
prevent unexpected payment attempts after the customer has canceled a
subscription. However, you can resume automatic collection of the invoices
manually after subscription cancellation to have us proceed. Or, you could check
for unpaid invoices before allowing the customer to cancel the subscription at
all.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### create

Creates a new subscription on an existing customer. Each customer can have up to
500 active or scheduled subscriptions.

```php
public SubscriptionService::create(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Subscription
```

When you create a subscription with
<code>collection_method=charge_automatically</code>, the first invoice is
finalized as part of the request. The <code>payment_behavior</code> parameter
determines the exact behavior of the initial payment.

To start subscriptions where the first invoice always begins in a
<code>draft</code> status, use <a
href="/docs/billing/subscriptions/subscription-schedules#managing">subscription
schedules</a> instead. Schedules provide the flexibility to model more complex
billing configurations that change over time.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### deleteDiscount

Removes the currently applied discount on a subscription.

```php
public SubscriptionService::deleteDiscount(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Subscription
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

Retrieves the subscription with the given ID.

```php
public SubscriptionService::retrieve(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Subscription
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

Search for subscriptions you’ve previously created using Stripe’s <a
href="/docs/search#search-query-language">Search Query Language</a>. Don’t use
search in read-after-write flows where strict consistency is necessary. Under
normal operating conditions, data is searchable in less than a minute.

```php
public SubscriptionService::search(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\SearchResult&lt;\Stripe\Subscription&gt;
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

Updates an existing subscription on a customer to match the specified
parameters. When changing plans or quantities, we will optionally prorate the
price we charge next month to make up for any price changes. To preview how the
proration will be calculated, use the <a href="#upcoming_invoice">upcoming
invoice</a> endpoint.

```php
public SubscriptionService::update(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Subscription
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
