---
title: \Stripe\Service\PaymentIntentService
footer: false
---

# PaymentIntentService

Abstract base class for all services.



* Full name: `\Stripe\Service\PaymentIntentService`
* Parent class: [\Stripe\Service\AbstractService](technical/AbstractService.md)



## Methods

### all

Returns a list of PaymentIntents.

```php
public PaymentIntentService::all(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\PaymentIntent&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### applyCustomerBalance

Manually reconcile the remaining amount for a customer_balance PaymentIntent.

```php
public PaymentIntentService::applyCustomerBalance(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\PaymentIntent
```

This can be used when the cash balance for <a
href="docs/payments/customer-balance/reconciliation#cash-manual-reconciliation">a
customer in manual reconciliation mode</a> received funds.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### cancel

A PaymentIntent object can be canceled when it is in one of these statuses:
<code>requires_payment_method</code>, <code>requires_capture</code>,
<code>requires_confirmation</code>, <code>requires_action</code>, or
<code>processing</code>.

```php
public PaymentIntentService::cancel(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\PaymentIntent
```

Once canceled, no additional charges will be made by the PaymentIntent and any
operations on the PaymentIntent will fail with an error. For PaymentIntents with
<code>status=’requires_capture’</code>, the remaining
<code>amount_capturable</code> will automatically be refunded.

You cannot cancel the PaymentIntent for a Checkout Session. <a
href="/docs/api/checkout/sessions/expire">Expire the Checkout Session</a>
instead






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### capture

Capture the funds of an existing uncaptured PaymentIntent when its status is
<code>requires_capture</code>.

```php
public PaymentIntentService::capture(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\PaymentIntent
```

Uncaptured PaymentIntents will be canceled a set number of days after they are
created (7 by default).

Learn more about <a href="/docs/payments/capture-later">separate authorization
and capture</a>.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### confirm

Confirm that your customer intends to pay with current or provided payment
method. Upon confirmation, the PaymentIntent will attempt to initiate a payment.

```php
public PaymentIntentService::confirm(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\PaymentIntent
```

If the selected payment method requires additional authentication steps, the
PaymentIntent will transition to the <code>requires_action</code> status and
suggest additional actions via <code>next_action</code>. If payment fails, the
PaymentIntent will transition to the <code>requires_payment_method</code>
status. If payment succeeds, the PaymentIntent will transition to the
<code>succeeded</code> status (or <code>requires_capture</code>, if
<code>capture_method</code> is set to <code>manual</code>).

If the <code>confirmation_method</code> is <code>automatic</code>, payment may
be attempted using our <a
href="/docs/stripe-js/reference#stripe-handle-card-payment">client SDKs</a> and
the PaymentIntent’s <a
href="#payment_intent_object-client_secret">client_secret</a>. After
<code>next_action</code>s are handled by the client, no additional confirmation
is required to complete the payment.

If the <code>confirmation_method</code> is <code>manual</code>, all payment
attempts must be initiated using a secret key. If any actions are required for
the payment, the PaymentIntent will return to the
<code>requires_confirmation</code> state after those actions are completed. Your
server needs to then explicitly re-confirm the PaymentIntent to initiate the
next payment attempt. Read the <a
href="/docs/payments/payment-intents/web-manual">expanded documentation</a> to
learn more about manual confirmation.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### create

Creates a PaymentIntent object.

```php
public PaymentIntentService::create(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\PaymentIntent
```

After the PaymentIntent is created, attach a payment method and <a
href="/docs/api/payment_intents/confirm">confirm</a> to continue the payment.
You can read more about the different payment flows available via the Payment
Intents API <a href="/docs/payments/payment-intents">here</a>.

When <code>confirm=true</code> is used during creation, it is equivalent to
creating and confirming the PaymentIntent in the same call. You may use any
parameters available in the <a href="/docs/api/payment_intents/confirm">confirm
API</a> when <code>confirm=true</code> is supplied.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### incrementAuthorization

Perform an incremental authorization on an eligible <a
href="/docs/api/payment_intents/object">PaymentIntent</a>. To be eligible, the
PaymentIntent’s status must be <code>requires_capture</code> and <a
href="/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported">incremental_authorization_supported</a>
must be <code>true</code>.

```php
public PaymentIntentService::incrementAuthorization(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\PaymentIntent
```

Incremental authorizations attempt to increase the authorized amount on your
customer’s card to the new, higher <code>amount</code> provided. As with the
initial authorization, incremental authorizations may be declined. A single
PaymentIntent can call this endpoint multiple times to further increase the
authorized amount.

If the incremental authorization succeeds, the PaymentIntent object is returned
with the updated <a
href="/docs/api/payment_intents/object#payment_intent_object-amount">amount</a>.
If the incremental authorization fails, a <a
href="/docs/error-codes#card-declined">card_declined</a> error is returned, and
no fields on the PaymentIntent or Charge are updated. The PaymentIntent object
remains capturable for the previously authorized amount.

Each PaymentIntent can have a maximum of 10 incremental authorization attempts,
including declines. Once captured, a PaymentIntent can no longer be incremented.

Learn more about <a
href="/docs/terminal/features/incremental-authorizations">incremental
authorizations</a>.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### retrieve

Retrieves the details of a PaymentIntent that has previously been created.

```php
public PaymentIntentService::retrieve(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\PaymentIntent
```

Client-side retrieval using a publishable key is allowed when the
<code>client_secret</code> is provided in the query string.

When retrieved with a publishable key, only a subset of properties will be
returned. Please refer to the <a href="#payment_intent_object">payment
intent</a> object reference for more details.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### search

Search for PaymentIntents you’ve previously created using Stripe’s <a
href="/docs/search#search-query-language">Search Query Language</a>. Don’t use
search in read-after-write flows where strict consistency is necessary. Under
normal operating conditions, data is searchable in less than a minute.

```php
public PaymentIntentService::search(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\SearchResult&lt;\Stripe\PaymentIntent&gt;
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

Updates properties on a PaymentIntent object without confirming.

```php
public PaymentIntentService::update(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\PaymentIntent
```

Depending on which properties you update, you may need to confirm the
PaymentIntent again. For example, updating the <code>payment_method</code> will
always require you to confirm the PaymentIntent again. If you prefer to update
and confirm at the same time, we recommend updating properties via the <a
href="/docs/api/payment_intents/confirm">confirm API</a> instead.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### verifyMicrodeposits

Verifies microdeposits on a PaymentIntent object.

```php
public PaymentIntentService::verifyMicrodeposits(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\PaymentIntent
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
