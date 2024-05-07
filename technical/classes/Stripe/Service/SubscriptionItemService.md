---
title: \Stripe\Service\SubscriptionItemService
footer: false
---

# SubscriptionItemService

Abstract base class for all services.



* Full name: `\Stripe\Service\SubscriptionItemService`
* Parent class: [\Stripe\Service\AbstractService](technical/AbstractService.md)



## Methods

### all

Returns a list of your subscription items for a given subscription.

```php
public SubscriptionItemService::all(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\SubscriptionItem&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### allUsageRecordSummaries

For the specified subscription item, returns a list of summary objects. Each
object in the list provides usage information that’s been summarized from
multiple usage records and over a subscription billing period (e.g., 15 usage
records in the month of September).

```php
public SubscriptionItemService::allUsageRecordSummaries(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\UsageRecordSummary&gt;
```

The list is sorted in reverse-chronological order (newest first). The first list
item represents the most current usage period that hasn’t ended yet. Since new
usage records can still be added, the returned summary information for the
subscription item’s ID should be seen as unstable until the subscription billing
period ends.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### create

Adds a new item to an existing subscription. No existing items will be changed
or replaced.

```php
public SubscriptionItemService::create(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\SubscriptionItem
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### createUsageRecord

Creates a usage record for a specified subscription item and date, and fills it
with a quantity.

```php
public SubscriptionItemService::createUsageRecord(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\UsageRecord
```

Usage records provide <code>quantity</code> information that Stripe uses to
track how much a customer is using your service. With usage information and the
pricing model set up by the <a
href="https://stripe.com/docs/billing/subscriptions/metered-billing">metered
billing</a> plan, Stripe helps you send accurate invoices to your customers.

The default calculation for usage is to add up all the <code>quantity</code>
values of the usage records within a billing period. You can change this default
behavior with the billing plan’s <code>aggregate_usage</code> <a
href="/docs/api/plans/create#create_plan-aggregate_usage">parameter</a>. When
there is more than one usage record with the same timestamp, Stripe adds the
<code>quantity</code> values together. In most cases, this is the desired
resolution, however, you can change this behavior with the <code>action</code>
parameter.

The default pricing model for metered billing is <a
href="/docs/api/plans/object#plan_object-billing_scheme">per-unit pricing</a>.
For finer granularity, you can configure metered billing to have a <a
href="https://stripe.com/docs/billing/subscriptions/tiers">tiered pricing</a>
model.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### delete

Deletes an item from the subscription. Removing a subscription item from a
subscription will not cancel the subscription.

```php
public SubscriptionItemService::delete(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\SubscriptionItem
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

Retrieves the subscription item with the given ID.

```php
public SubscriptionItemService::retrieve(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\SubscriptionItem
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

Updates the plan or quantity of an item on a current subscription.

```php
public SubscriptionItemService::update(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\SubscriptionItem
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
