---
title: \Stripe\Service\InvoiceService
footer: false
---

# InvoiceService

Abstract base class for all services.



* Full name: `\Stripe\Service\InvoiceService`
* Parent class: [\Stripe\Service\AbstractService](technical/AbstractService.md)



## Methods

### all

You can list all invoices, or list the invoices for a specific customer. The
invoices are returned sorted by creation date, with the most recently created
invoices appearing first.

```php
public InvoiceService::all(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\Invoice&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### allLines

When retrieving an invoice, you’ll get a <strong>lines</strong> property
containing the total count of line items and the first handful of those items.

```php
public InvoiceService::allLines(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\LineItem&gt;
```

There is also a URL where you can retrieve the full (paginated) list of line
items.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### create

This endpoint creates a draft invoice for a given customer. The draft invoice
created pulls in all pending invoice items on that customer, including
prorations. The invoice remains a draft until you <a
href="#finalize_invoice">finalize</a> the invoice, which allows you to <a
href="#pay_invoice">pay</a> or <a href="#send_invoice">send</a> the invoice to
your customers.

```php
public InvoiceService::create(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Invoice
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### delete

Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to
delete invoices that are no longer in a draft state will fail; once an invoice
has been finalized or if an invoice is for a subscription, it must be <a
href="#void_invoice">voided</a>.

```php
public InvoiceService::delete(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Invoice
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### finalizeInvoice

Stripe automatically finalizes drafts before sending and attempting payment on
invoices. However, if you’d like to finalize a draft invoice manually, you can
do so using this method.

```php
public InvoiceService::finalizeInvoice(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Invoice
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### markUncollectible

Marking an invoice as uncollectible is useful for keeping track of bad debts
that can be written off for accounting purposes.

```php
public InvoiceService::markUncollectible(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Invoice
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### pay

Stripe automatically creates and then attempts to collect payment on invoices
for customers on subscriptions according to your <a
href="https://dashboard.stripe.com/account/billing/automatic">subscriptions
settings</a>. However, if you’d like to attempt payment on an invoice out of the
normal collection schedule or for some other reason, you can do so.

```php
public InvoiceService::pay(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Invoice
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

Retrieves the invoice with the given ID.

```php
public InvoiceService::retrieve(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Invoice
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

Search for invoices you’ve previously created using Stripe’s <a
href="/docs/search#search-query-language">Search Query Language</a>. Don’t use
search in read-after-write flows where strict consistency is necessary. Under
normal operating conditions, data is searchable in less than a minute.

```php
public InvoiceService::search(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\SearchResult&lt;\Stripe\Invoice&gt;
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
### sendInvoice

Stripe will automatically send invoices to customers according to your <a
href="https://dashboard.stripe.com/account/billing/automatic">subscriptions
settings</a>. However, if you’d like to manually send an invoice to your
customer out of the normal schedule, you can do so. When sending invoices that
have already been paid, there will be no reference to the payment in the email.

```php
public InvoiceService::sendInvoice(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Invoice
```

Requests made in test-mode result in no emails being sent, despite sending an
<code>invoice.sent</code> event.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### upcoming

At any time, you can preview the upcoming invoice for a customer. This will show
you all the charges that are pending, including subscription renewal charges,
invoice item charges, etc. It will also show you any discounts that are
applicable to the invoice.

```php
public InvoiceService::upcoming(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Invoice
```

Note that when you are viewing an upcoming invoice, you are simply viewing a
preview – the invoice has not yet been created. As such, the upcoming invoice
will not show up in invoice listing calls, and you cannot use the API to pay or
edit the invoice. If you want to change the amount that your customer will be
billed, you can add, remove, or update pending invoice items, or update the
customer’s discount.

You can preview the effects of updating a subscription, including a preview of
what proration will take place. To ensure that the actual proration is
calculated exactly the same as the previewed proration, you should pass a
<code>proration_date</code> parameter when doing the actual subscription update.
The value passed in should be the same as the
<code>subscription_proration_date</code> returned on the upcoming invoice
resource. The recommended way to get only the prorations being previewed is to
consider only proration line items where <code>period[start]</code> is equal to
the <code>subscription_proration_date</code> on the upcoming invoice resource.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### upcomingLines

When retrieving an upcoming invoice, you’ll get a <strong>lines</strong>
property containing the total count of line items and the first handful of those
items. There is also a URL where you can retrieve the full (paginated) list of
line items.

```php
public InvoiceService::upcomingLines(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\Invoice&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### update

Draft invoices are fully editable. Once an invoice is <a
href="/docs/billing/invoices/workflow#finalized">finalized</a>, monetary values,
as well as <code>collection_method</code>, become uneditable.

```php
public InvoiceService::update(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Invoice
```

If you would like to stop the Stripe Billing engine from automatically
finalizing, reattempting payments on, sending reminders for, or <a
href="/docs/billing/invoices/reconciliation">automatically reconciling</a>
invoices, pass <code>auto_advance=false</code>.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### voidInvoice

Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is
similar to <a href="#delete_invoice">deletion</a>, however it only applies to
finalized invoices and maintains a papertrail where the invoice can still be
found.

```php
public InvoiceService::voidInvoice(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Invoice
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
