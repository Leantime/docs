---
title: \Stripe\Event
footer: false
---

# Event

Events are our way of letting you know when something interesting happens in
your account. When an interesting event occurs, we create a new
<code>Event</code> object. For example, when a charge succeeds, we create a
<code>charge.succeeded</code> event; and when an invoice payment attempt fails,
we create an <code>invoice.payment_failed</code> event. Note that many API
requests may cause multiple events to be created. For example, if you create a
new subscription for a customer, you will receive both a
<code>customer.subscription.created</code> event and a
<code>charge.succeeded</code> event.

Events occur when the state of another API resource changes. The state of that
resource at the time of the change is embedded in the event's data field. For
example, a <code>charge.succeeded</code> event will contain a charge, and an
<code>invoice.payment_failed</code> event will contain an invoice.

As with other API resources, you can use endpoints to retrieve an <a
href="https://stripe.com/docs/api#retrieve_event">individual event</a> or a <a
href="https://stripe.com/docs/api#list_events">list of events</a> from the API.
We also have a separate <a
href="http://en.wikipedia.org/wiki/Webhook">webhooks</a> system for sending the
<code>Event</code> objects directly to an endpoint on your server. Webhooks are
managed in your <a href="https://dashboard.stripe.com/account/webhooks">account
settings</a>, and our <a href="https://stripe.com/docs/webhooks">Using
Webhooks</a> guide will help you get set up.

When using <a href="https://stripe.com/docs/connect">Connect</a>, you can also
receive notifications of events that occur in connected accounts. For these
events, there will be an additional <code>account</code> attribute in the
received <code>Event</code> object.

<strong>NOTE:</strong> Right now, access to events through the <a
href="https://stripe.com/docs/api#retrieve_event">Retrieve Event API</a> is
guaranteed only for 30 days.

This class includes constants for the possible string representations of
event types. See https://stripe.com/docs/api#event_types for more details.

* Full name: `\Stripe\Event`
* Parent class: [\Stripe\ApiResource](technical/ApiResource.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Stripe\Event::OBJECT_NAME`||&#039;event&#039;|
|`\Stripe\Event::ACCOUNT_APPLICATION_AUTHORIZED`||&#039;account.application.authorized&#039;|
|`\Stripe\Event::ACCOUNT_APPLICATION_DEAUTHORIZED`||&#039;account.application.deauthorized&#039;|
|`\Stripe\Event::ACCOUNT_EXTERNAL_ACCOUNT_CREATED`||&#039;account.external_account.created&#039;|
|`\Stripe\Event::ACCOUNT_EXTERNAL_ACCOUNT_DELETED`||&#039;account.external_account.deleted&#039;|
|`\Stripe\Event::ACCOUNT_EXTERNAL_ACCOUNT_UPDATED`||&#039;account.external_account.updated&#039;|
|`\Stripe\Event::ACCOUNT_UPDATED`||&#039;account.updated&#039;|
|`\Stripe\Event::APPLICATION_FEE_CREATED`||&#039;application_fee.created&#039;|
|`\Stripe\Event::APPLICATION_FEE_REFUND_UPDATED`||&#039;application_fee.refund.updated&#039;|
|`\Stripe\Event::APPLICATION_FEE_REFUNDED`||&#039;application_fee.refunded&#039;|
|`\Stripe\Event::BALANCE_AVAILABLE`||&#039;balance.available&#039;|
|`\Stripe\Event::BILLING_PORTAL_CONFIGURATION_CREATED`||&#039;billing_portal.configuration.created&#039;|
|`\Stripe\Event::BILLING_PORTAL_CONFIGURATION_UPDATED`||&#039;billing_portal.configuration.updated&#039;|
|`\Stripe\Event::CAPABILITY_UPDATED`||&#039;capability.updated&#039;|
|`\Stripe\Event::CASH_BALANCE_FUNDS_AVAILABLE`||&#039;cash_balance.funds_available&#039;|
|`\Stripe\Event::CHARGE_CAPTURED`||&#039;charge.captured&#039;|
|`\Stripe\Event::CHARGE_DISPUTE_CLOSED`||&#039;charge.dispute.closed&#039;|
|`\Stripe\Event::CHARGE_DISPUTE_CREATED`||&#039;charge.dispute.created&#039;|
|`\Stripe\Event::CHARGE_DISPUTE_FUNDS_REINSTATED`||&#039;charge.dispute.funds_reinstated&#039;|
|`\Stripe\Event::CHARGE_DISPUTE_FUNDS_WITHDRAWN`||&#039;charge.dispute.funds_withdrawn&#039;|
|`\Stripe\Event::CHARGE_DISPUTE_UPDATED`||&#039;charge.dispute.updated&#039;|
|`\Stripe\Event::CHARGE_EXPIRED`||&#039;charge.expired&#039;|
|`\Stripe\Event::CHARGE_FAILED`||&#039;charge.failed&#039;|
|`\Stripe\Event::CHARGE_PENDING`||&#039;charge.pending&#039;|
|`\Stripe\Event::CHARGE_REFUND_UPDATED`||&#039;charge.refund.updated&#039;|
|`\Stripe\Event::CHARGE_REFUNDED`||&#039;charge.refunded&#039;|
|`\Stripe\Event::CHARGE_SUCCEEDED`||&#039;charge.succeeded&#039;|
|`\Stripe\Event::CHARGE_UPDATED`||&#039;charge.updated&#039;|
|`\Stripe\Event::CHECKOUT_SESSION_ASYNC_PAYMENT_FAILED`||&#039;checkout.session.async_payment_failed&#039;|
|`\Stripe\Event::CHECKOUT_SESSION_ASYNC_PAYMENT_SUCCEEDED`||&#039;checkout.session.async_payment_succeeded&#039;|
|`\Stripe\Event::CHECKOUT_SESSION_COMPLETED`||&#039;checkout.session.completed&#039;|
|`\Stripe\Event::CHECKOUT_SESSION_EXPIRED`||&#039;checkout.session.expired&#039;|
|`\Stripe\Event::COUPON_CREATED`||&#039;coupon.created&#039;|
|`\Stripe\Event::COUPON_DELETED`||&#039;coupon.deleted&#039;|
|`\Stripe\Event::COUPON_UPDATED`||&#039;coupon.updated&#039;|
|`\Stripe\Event::CREDIT_NOTE_CREATED`||&#039;credit_note.created&#039;|
|`\Stripe\Event::CREDIT_NOTE_UPDATED`||&#039;credit_note.updated&#039;|
|`\Stripe\Event::CREDIT_NOTE_VOIDED`||&#039;credit_note.voided&#039;|
|`\Stripe\Event::CUSTOMER_CREATED`||&#039;customer.created&#039;|
|`\Stripe\Event::CUSTOMER_DELETED`||&#039;customer.deleted&#039;|
|`\Stripe\Event::CUSTOMER_DISCOUNT_CREATED`||&#039;customer.discount.created&#039;|
|`\Stripe\Event::CUSTOMER_DISCOUNT_DELETED`||&#039;customer.discount.deleted&#039;|
|`\Stripe\Event::CUSTOMER_DISCOUNT_UPDATED`||&#039;customer.discount.updated&#039;|
|`\Stripe\Event::CUSTOMER_SOURCE_CREATED`||&#039;customer.source.created&#039;|
|`\Stripe\Event::CUSTOMER_SOURCE_DELETED`||&#039;customer.source.deleted&#039;|
|`\Stripe\Event::CUSTOMER_SOURCE_EXPIRING`||&#039;customer.source.expiring&#039;|
|`\Stripe\Event::CUSTOMER_SOURCE_UPDATED`||&#039;customer.source.updated&#039;|
|`\Stripe\Event::CUSTOMER_SUBSCRIPTION_CREATED`||&#039;customer.subscription.created&#039;|
|`\Stripe\Event::CUSTOMER_SUBSCRIPTION_DELETED`||&#039;customer.subscription.deleted&#039;|
|`\Stripe\Event::CUSTOMER_SUBSCRIPTION_PENDING_UPDATE_APPLIED`||&#039;customer.subscription.pending_update_applied&#039;|
|`\Stripe\Event::CUSTOMER_SUBSCRIPTION_PENDING_UPDATE_EXPIRED`||&#039;customer.subscription.pending_update_expired&#039;|
|`\Stripe\Event::CUSTOMER_SUBSCRIPTION_TRIAL_WILL_END`||&#039;customer.subscription.trial_will_end&#039;|
|`\Stripe\Event::CUSTOMER_SUBSCRIPTION_UPDATED`||&#039;customer.subscription.updated&#039;|
|`\Stripe\Event::CUSTOMER_TAX_ID_CREATED`||&#039;customer.tax_id.created&#039;|
|`\Stripe\Event::CUSTOMER_TAX_ID_DELETED`||&#039;customer.tax_id.deleted&#039;|
|`\Stripe\Event::CUSTOMER_TAX_ID_UPDATED`||&#039;customer.tax_id.updated&#039;|
|`\Stripe\Event::CUSTOMER_UPDATED`||&#039;customer.updated&#039;|
|`\Stripe\Event::FILE_CREATED`||&#039;file.created&#039;|
|`\Stripe\Event::IDENTITY_VERIFICATION_SESSION_CANCELED`||&#039;identity.verification_session.canceled&#039;|
|`\Stripe\Event::IDENTITY_VERIFICATION_SESSION_CREATED`||&#039;identity.verification_session.created&#039;|
|`\Stripe\Event::IDENTITY_VERIFICATION_SESSION_PROCESSING`||&#039;identity.verification_session.processing&#039;|
|`\Stripe\Event::IDENTITY_VERIFICATION_SESSION_REDACTED`||&#039;identity.verification_session.redacted&#039;|
|`\Stripe\Event::IDENTITY_VERIFICATION_SESSION_REQUIRES_INPUT`||&#039;identity.verification_session.requires_input&#039;|
|`\Stripe\Event::IDENTITY_VERIFICATION_SESSION_VERIFIED`||&#039;identity.verification_session.verified&#039;|
|`\Stripe\Event::INVOICE_CREATED`||&#039;invoice.created&#039;|
|`\Stripe\Event::INVOICE_DELETED`||&#039;invoice.deleted&#039;|
|`\Stripe\Event::INVOICE_FINALIZATION_FAILED`||&#039;invoice.finalization_failed&#039;|
|`\Stripe\Event::INVOICE_FINALIZED`||&#039;invoice.finalized&#039;|
|`\Stripe\Event::INVOICE_MARKED_UNCOLLECTIBLE`||&#039;invoice.marked_uncollectible&#039;|
|`\Stripe\Event::INVOICE_PAID`||&#039;invoice.paid&#039;|
|`\Stripe\Event::INVOICE_PAYMENT_ACTION_REQUIRED`||&#039;invoice.payment_action_required&#039;|
|`\Stripe\Event::INVOICE_PAYMENT_FAILED`||&#039;invoice.payment_failed&#039;|
|`\Stripe\Event::INVOICE_PAYMENT_SUCCEEDED`||&#039;invoice.payment_succeeded&#039;|
|`\Stripe\Event::INVOICE_SENT`||&#039;invoice.sent&#039;|
|`\Stripe\Event::INVOICE_UPCOMING`||&#039;invoice.upcoming&#039;|
|`\Stripe\Event::INVOICE_UPDATED`||&#039;invoice.updated&#039;|
|`\Stripe\Event::INVOICE_VOIDED`||&#039;invoice.voided&#039;|
|`\Stripe\Event::INVOICEITEM_CREATED`||&#039;invoiceitem.created&#039;|
|`\Stripe\Event::INVOICEITEM_DELETED`||&#039;invoiceitem.deleted&#039;|
|`\Stripe\Event::INVOICEITEM_UPDATED`||&#039;invoiceitem.updated&#039;|
|`\Stripe\Event::ISSUER_FRAUD_RECORD_CREATED`||&#039;issuer_fraud_record.created&#039;|
|`\Stripe\Event::ISSUING_AUTHORIZATION_CREATED`||&#039;issuing_authorization.created&#039;|
|`\Stripe\Event::ISSUING_AUTHORIZATION_REQUEST`||&#039;issuing_authorization.request&#039;|
|`\Stripe\Event::ISSUING_AUTHORIZATION_UPDATED`||&#039;issuing_authorization.updated&#039;|
|`\Stripe\Event::ISSUING_CARD_CREATED`||&#039;issuing_card.created&#039;|
|`\Stripe\Event::ISSUING_CARD_UPDATED`||&#039;issuing_card.updated&#039;|
|`\Stripe\Event::ISSUING_CARDHOLDER_CREATED`||&#039;issuing_cardholder.created&#039;|
|`\Stripe\Event::ISSUING_CARDHOLDER_UPDATED`||&#039;issuing_cardholder.updated&#039;|
|`\Stripe\Event::ISSUING_DISPUTE_CLOSED`||&#039;issuing_dispute.closed&#039;|
|`\Stripe\Event::ISSUING_DISPUTE_CREATED`||&#039;issuing_dispute.created&#039;|
|`\Stripe\Event::ISSUING_DISPUTE_FUNDS_REINSTATED`||&#039;issuing_dispute.funds_reinstated&#039;|
|`\Stripe\Event::ISSUING_DISPUTE_SUBMITTED`||&#039;issuing_dispute.submitted&#039;|
|`\Stripe\Event::ISSUING_DISPUTE_UPDATED`||&#039;issuing_dispute.updated&#039;|
|`\Stripe\Event::ISSUING_TRANSACTION_CREATED`||&#039;issuing_transaction.created&#039;|
|`\Stripe\Event::ISSUING_TRANSACTION_UPDATED`||&#039;issuing_transaction.updated&#039;|
|`\Stripe\Event::MANDATE_UPDATED`||&#039;mandate.updated&#039;|
|`\Stripe\Event::ORDER_CREATED`||&#039;order.created&#039;|
|`\Stripe\Event::ORDER_PAYMENT_FAILED`||&#039;order.payment_failed&#039;|
|`\Stripe\Event::ORDER_PAYMENT_SUCCEEDED`||&#039;order.payment_succeeded&#039;|
|`\Stripe\Event::ORDER_UPDATED`||&#039;order.updated&#039;|
|`\Stripe\Event::ORDER_RETURN_CREATED`||&#039;order_return.created&#039;|
|`\Stripe\Event::PAYMENT_INTENT_AMOUNT_CAPTURABLE_UPDATED`||&#039;payment_intent.amount_capturable_updated&#039;|
|`\Stripe\Event::PAYMENT_INTENT_CANCELED`||&#039;payment_intent.canceled&#039;|
|`\Stripe\Event::PAYMENT_INTENT_CREATED`||&#039;payment_intent.created&#039;|
|`\Stripe\Event::PAYMENT_INTENT_PARTIALLY_FUNDED`||&#039;payment_intent.partially_funded&#039;|
|`\Stripe\Event::PAYMENT_INTENT_PAYMENT_FAILED`||&#039;payment_intent.payment_failed&#039;|
|`\Stripe\Event::PAYMENT_INTENT_PROCESSING`||&#039;payment_intent.processing&#039;|
|`\Stripe\Event::PAYMENT_INTENT_REQUIRES_ACTION`||&#039;payment_intent.requires_action&#039;|
|`\Stripe\Event::PAYMENT_INTENT_SUCCEEDED`||&#039;payment_intent.succeeded&#039;|
|`\Stripe\Event::PAYMENT_LINK_CREATED`||&#039;payment_link.created&#039;|
|`\Stripe\Event::PAYMENT_LINK_UPDATED`||&#039;payment_link.updated&#039;|
|`\Stripe\Event::PAYMENT_METHOD_ATTACHED`||&#039;payment_method.attached&#039;|
|`\Stripe\Event::PAYMENT_METHOD_AUTOMATICALLY_UPDATED`||&#039;payment_method.automatically_updated&#039;|
|`\Stripe\Event::PAYMENT_METHOD_CARD_AUTOMATICALLY_UPDATED`||&#039;payment_method.card_automatically_updated&#039;|
|`\Stripe\Event::PAYMENT_METHOD_DETACHED`||&#039;payment_method.detached&#039;|
|`\Stripe\Event::PAYMENT_METHOD_UPDATED`||&#039;payment_method.updated&#039;|
|`\Stripe\Event::PAYOUT_CANCELED`||&#039;payout.canceled&#039;|
|`\Stripe\Event::PAYOUT_CREATED`||&#039;payout.created&#039;|
|`\Stripe\Event::PAYOUT_FAILED`||&#039;payout.failed&#039;|
|`\Stripe\Event::PAYOUT_PAID`||&#039;payout.paid&#039;|
|`\Stripe\Event::PAYOUT_UPDATED`||&#039;payout.updated&#039;|
|`\Stripe\Event::PERSON_CREATED`||&#039;person.created&#039;|
|`\Stripe\Event::PERSON_DELETED`||&#039;person.deleted&#039;|
|`\Stripe\Event::PERSON_UPDATED`||&#039;person.updated&#039;|
|`\Stripe\Event::PING`||&#039;ping&#039;|
|`\Stripe\Event::PLAN_CREATED`||&#039;plan.created&#039;|
|`\Stripe\Event::PLAN_DELETED`||&#039;plan.deleted&#039;|
|`\Stripe\Event::PLAN_UPDATED`||&#039;plan.updated&#039;|
|`\Stripe\Event::PRICE_CREATED`||&#039;price.created&#039;|
|`\Stripe\Event::PRICE_DELETED`||&#039;price.deleted&#039;|
|`\Stripe\Event::PRICE_UPDATED`||&#039;price.updated&#039;|
|`\Stripe\Event::PRODUCT_CREATED`||&#039;product.created&#039;|
|`\Stripe\Event::PRODUCT_DELETED`||&#039;product.deleted&#039;|
|`\Stripe\Event::PRODUCT_UPDATED`||&#039;product.updated&#039;|
|`\Stripe\Event::PROMOTION_CODE_CREATED`||&#039;promotion_code.created&#039;|
|`\Stripe\Event::PROMOTION_CODE_DELETED`||&#039;promotion_code.deleted&#039;|
|`\Stripe\Event::PROMOTION_CODE_UPDATED`||&#039;promotion_code.updated&#039;|
|`\Stripe\Event::QUOTE_ACCEPTED`||&#039;quote.accepted&#039;|
|`\Stripe\Event::QUOTE_CANCELED`||&#039;quote.canceled&#039;|
|`\Stripe\Event::QUOTE_CREATED`||&#039;quote.created&#039;|
|`\Stripe\Event::QUOTE_FINALIZED`||&#039;quote.finalized&#039;|
|`\Stripe\Event::RADAR_EARLY_FRAUD_WARNING_CREATED`||&#039;radar.early_fraud_warning.created&#039;|
|`\Stripe\Event::RADAR_EARLY_FRAUD_WARNING_UPDATED`||&#039;radar.early_fraud_warning.updated&#039;|
|`\Stripe\Event::RECIPIENT_CREATED`||&#039;recipient.created&#039;|
|`\Stripe\Event::RECIPIENT_DELETED`||&#039;recipient.deleted&#039;|
|`\Stripe\Event::RECIPIENT_UPDATED`||&#039;recipient.updated&#039;|
|`\Stripe\Event::REPORTING_REPORT_RUN_FAILED`||&#039;reporting.report_run.failed&#039;|
|`\Stripe\Event::REPORTING_REPORT_RUN_SUCCEEDED`||&#039;reporting.report_run.succeeded&#039;|
|`\Stripe\Event::REPORTING_REPORT_TYPE_UPDATED`||&#039;reporting.report_type.updated&#039;|
|`\Stripe\Event::REVIEW_CLOSED`||&#039;review.closed&#039;|
|`\Stripe\Event::REVIEW_OPENED`||&#039;review.opened&#039;|
|`\Stripe\Event::SETUP_INTENT_CANCELED`||&#039;setup_intent.canceled&#039;|
|`\Stripe\Event::SETUP_INTENT_CREATED`||&#039;setup_intent.created&#039;|
|`\Stripe\Event::SETUP_INTENT_REQUIRES_ACTION`||&#039;setup_intent.requires_action&#039;|
|`\Stripe\Event::SETUP_INTENT_SETUP_FAILED`||&#039;setup_intent.setup_failed&#039;|
|`\Stripe\Event::SETUP_INTENT_SUCCEEDED`||&#039;setup_intent.succeeded&#039;|
|`\Stripe\Event::SIGMA_SCHEDULED_QUERY_RUN_CREATED`||&#039;sigma.scheduled_query_run.created&#039;|
|`\Stripe\Event::SKU_CREATED`||&#039;sku.created&#039;|
|`\Stripe\Event::SKU_DELETED`||&#039;sku.deleted&#039;|
|`\Stripe\Event::SKU_UPDATED`||&#039;sku.updated&#039;|
|`\Stripe\Event::SOURCE_CANCELED`||&#039;source.canceled&#039;|
|`\Stripe\Event::SOURCE_CHARGEABLE`||&#039;source.chargeable&#039;|
|`\Stripe\Event::SOURCE_FAILED`||&#039;source.failed&#039;|
|`\Stripe\Event::SOURCE_MANDATE_NOTIFICATION`||&#039;source.mandate_notification&#039;|
|`\Stripe\Event::SOURCE_REFUND_ATTRIBUTES_REQUIRED`||&#039;source.refund_attributes_required&#039;|
|`\Stripe\Event::SOURCE_TRANSACTION_CREATED`||&#039;source.transaction.created&#039;|
|`\Stripe\Event::SOURCE_TRANSACTION_UPDATED`||&#039;source.transaction.updated&#039;|
|`\Stripe\Event::SUBSCRIPTION_SCHEDULE_ABORTED`||&#039;subscription_schedule.aborted&#039;|
|`\Stripe\Event::SUBSCRIPTION_SCHEDULE_CANCELED`||&#039;subscription_schedule.canceled&#039;|
|`\Stripe\Event::SUBSCRIPTION_SCHEDULE_COMPLETED`||&#039;subscription_schedule.completed&#039;|
|`\Stripe\Event::SUBSCRIPTION_SCHEDULE_CREATED`||&#039;subscription_schedule.created&#039;|
|`\Stripe\Event::SUBSCRIPTION_SCHEDULE_EXPIRING`||&#039;subscription_schedule.expiring&#039;|
|`\Stripe\Event::SUBSCRIPTION_SCHEDULE_RELEASED`||&#039;subscription_schedule.released&#039;|
|`\Stripe\Event::SUBSCRIPTION_SCHEDULE_UPDATED`||&#039;subscription_schedule.updated&#039;|
|`\Stripe\Event::TAX_RATE_CREATED`||&#039;tax_rate.created&#039;|
|`\Stripe\Event::TAX_RATE_UPDATED`||&#039;tax_rate.updated&#039;|
|`\Stripe\Event::TERMINAL_READER_ACTION_FAILED`||&#039;terminal.reader.action_failed&#039;|
|`\Stripe\Event::TERMINAL_READER_ACTION_SUCCEEDED`||&#039;terminal.reader.action_succeeded&#039;|
|`\Stripe\Event::TEST_HELPERS_TEST_CLOCK_ADVANCING`||&#039;test_helpers.test_clock.advancing&#039;|
|`\Stripe\Event::TEST_HELPERS_TEST_CLOCK_CREATED`||&#039;test_helpers.test_clock.created&#039;|
|`\Stripe\Event::TEST_HELPERS_TEST_CLOCK_DELETED`||&#039;test_helpers.test_clock.deleted&#039;|
|`\Stripe\Event::TEST_HELPERS_TEST_CLOCK_INTERNAL_FAILURE`||&#039;test_helpers.test_clock.internal_failure&#039;|
|`\Stripe\Event::TEST_HELPERS_TEST_CLOCK_READY`||&#039;test_helpers.test_clock.ready&#039;|
|`\Stripe\Event::TOPUP_CANCELED`||&#039;topup.canceled&#039;|
|`\Stripe\Event::TOPUP_CREATED`||&#039;topup.created&#039;|
|`\Stripe\Event::TOPUP_FAILED`||&#039;topup.failed&#039;|
|`\Stripe\Event::TOPUP_REVERSED`||&#039;topup.reversed&#039;|
|`\Stripe\Event::TOPUP_SUCCEEDED`||&#039;topup.succeeded&#039;|
|`\Stripe\Event::TRANSFER_CREATED`||&#039;transfer.created&#039;|
|`\Stripe\Event::TRANSFER_FAILED`||&#039;transfer.failed&#039;|
|`\Stripe\Event::TRANSFER_PAID`||&#039;transfer.paid&#039;|
|`\Stripe\Event::TRANSFER_REVERSED`||&#039;transfer.reversed&#039;|
|`\Stripe\Event::TRANSFER_UPDATED`||&#039;transfer.updated&#039;|



## Inherited methods

### all



```php
public static All::all(null|array $params = null, null|array|string $opts = null): \Stripe\Collection
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**

of ApiResources



---
### retrieve



```php
public static Retrieve::retrieve(array|string $id, null|array|string $opts = null): static
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **array|string** | the ID of the API resource to retrieve,<br />or an options array containing an `id` key |
| `opts` | **null|array|string** |  |


**Return Value:**





---
### getSavedNestedResources



```php
public static ApiResource::getSavedNestedResources(): \Stripe\Util\Set
```



* This method is **static**.





**Return Value:**

A list of fields that can be their own type of
API resource (say a nested card under an account for example), and if
that resource is set, it should be transmitted to the API on a create or
update. Doing so is not the default behavior because API resources
should normally be persisted on their own RESTful endpoints.



---
### __set



```php
public StripeObject::__set(mixed $k, mixed $v): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `k` | **mixed** |  |
| `v` | **mixed** |  |


**Return Value:**





---
### refresh



```php
public ApiResource::refresh(): \Stripe\ApiResource
```









**Return Value:**

the refreshed resource



---
### baseUrl



```php
public static ApiResource::baseUrl(): string
```



* This method is **static**.





**Return Value:**

the base URL for the given class



---
### classUrl



```php
public static ApiResource::classUrl(): string
```



* This method is **static**.





**Return Value:**

the endpoint URL for the given class



---
### resourceUrl



```php
public static ApiResource::resourceUrl(null|string $id): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **null|string** | the ID of the resource |


**Return Value:**

the instance endpoint URL for the given class



---
### instanceUrl



```php
public ApiResource::instanceUrl(): string
```









**Return Value:**

the full API URL for this API resource



---
### _validateParams



```php
protected static Request::_validateParams(null|array|mixed $params = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array|mixed** | The list of parameters to validate |


**Return Value:**





---
### _request



```php
protected Request::_request(string $method, string $url, array $params = [], null|array|string $options = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** | HTTP method (&#039;get&#039;, &#039;post&#039;, etc.) |
| `url` | **string** | URL for the request |
| `params` | **array** | list of parameters for the request |
| `options` | **null|array|string** |  |


**Return Value:**

tuple containing (the JSON response, $options)



---
### _requestStream



```php
protected Request::_requestStream(string $method, string $url, callable $readBodyChunk, array $params = [], null|array|string $options = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** | HTTP method (&#039;get&#039;, &#039;post&#039;, etc.) |
| `url` | **string** | URL for the request |
| `readBodyChunk` | **callable** | function that will receive chunks of data from a successful request body |
| `params` | **array** | list of parameters for the request |
| `options` | **null|array|string** |  |


**Return Value:**





---
### _staticRequest



```php
protected static Request::_staticRequest(string $method, string $url, array $params, null|array|string $options): array
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** | HTTP method (&#039;get&#039;, &#039;post&#039;, etc.) |
| `url` | **string** | URL for the request |
| `params` | **array** | list of parameters for the request |
| `options` | **null|array|string** |  |


**Return Value:**

tuple containing (the JSON response, $options)



---
### _staticStreamingRequest



```php
protected static Request::_staticStreamingRequest(string $method, string $url, callable $readBodyChunk, array $params, null|array|string $options): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** | HTTP method (&#039;get&#039;, &#039;post&#039;, etc.) |
| `url` | **string** | URL for the request |
| `readBodyChunk` | **callable** | function that will receive chunks of data from a successful request body |
| `params` | **array** | list of parameters for the request |
| `options` | **null|array|string** |  |


**Return Value:**





---
### getPermanentAttributes



```php
public static StripeObject::getPermanentAttributes(): \Stripe\Util\Set
```



* This method is **static**.





**Return Value:**

Attributes that should not be sent to the API because
they're not updatable (e.g. ID).



---
### getAdditiveParams

Additive objects are subobjects in the API that don't have the same
semantics as most subobjects, which are fully replaced when they're set.

```php
public static StripeObject::getAdditiveParams(): \Stripe\Util\Set
```

This is best illustrated by example. The `source` parameter sent when
updating a subscription is *not* additive; if we set it:

    source[object]=card&source[number]=123

We expect the old `source` object to have been overwritten completely. If
the previous source had an `address_state` key associated with it and we
didn't send one this time, that value of `address_state` is gone.

By contrast, additive objects are those that will have new data added to
them while keeping any existing data in place. The only known case of its
use is for `metadata`, but it could in theory be more general. As an
example, say we have a `metadata` object that looks like this on the
server side:

    metadata = ["old" => "old_value"]

If we update the object with `metadata[new]=new_value`, the server side
object now has *both* fields:

    metadata = ["old" => "old_value", "new" => "new_value"]

This is okay in itself because usually users will want to treat it as
additive:

    $obj->metadata["new"] = "new_value";
    $obj->save();

However, in other cases, they may want to replace the entire existing
contents:

    $obj->metadata = ["new" => "new_value"];
    $obj->save();

This is where things get a little bit tricky because in order to clear
any old keys that may have existed, we actually have to send an explicit
empty string to the server. So the operation above would have to send
this form to get the intended behavior:

    metadata[old]=&metadata[new]=new_value

This method allows us to track which parameters are considered additive,
and lets us behave correctly where appropriate when serializing
parameters to be sent.

* This method is **static**.





**Return Value:**

Set of additive parameters



---
### __construct



```php
public StripeObject::__construct(mixed $id = null, mixed $opts = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `opts` | **mixed** |  |


**Return Value:**





---
### __isset



```php
public StripeObject::__isset(mixed $k): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `k` | **mixed** |  |


**Return Value:**





---
### __unset



```php
public StripeObject::__unset(mixed $k): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `k` | **mixed** |  |


**Return Value:**





---
### __get



```php
public StripeObject::__get(mixed $k): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `k` | **mixed** |  |


**Return Value:**





---
### __debugInfo



```php
public StripeObject::__debugInfo(): mixed
```









**Return Value:**





---
### offsetSet



```php
public StripeObject::offsetSet(mixed $k, mixed $v): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `k` | **mixed** |  |
| `v` | **mixed** |  |


**Return Value:**





---
### offsetExists



```php
public StripeObject::offsetExists(mixed $k): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `k` | **mixed** |  |


**Return Value:**





---
### offsetUnset



```php
public StripeObject::offsetUnset(mixed $k): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `k` | **mixed** |  |


**Return Value:**





---
### offsetGet



```php
public StripeObject::offsetGet(mixed $k): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `k` | **mixed** |  |


**Return Value:**





---
### count



```php
public StripeObject::count(): int
```









**Return Value:**





---
### keys



```php
public StripeObject::keys(): mixed
```









**Return Value:**





---
### values



```php
public StripeObject::values(): mixed
```









**Return Value:**





---
### constructFrom

This unfortunately needs to be public to be used in Util\Util.

```php
public static StripeObject::constructFrom(array $values, null|array|string|\Stripe\Util\RequestOptions $opts = null): static
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `opts` | **null|array|string|\Stripe\Util\RequestOptions** |  |


**Return Value:**

the object constructed from the given values



---
### refreshFrom

Refreshes this object using the provided values.

```php
public StripeObject::refreshFrom(array $values, null|array|string|\Stripe\Util\RequestOptions $opts, bool $partial = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `opts` | **null|array|string|\Stripe\Util\RequestOptions** |  |
| `partial` | **bool** | defaults to false |


**Return Value:**





---
### updateAttributes

Mass assigns attributes on the model.

```php
public StripeObject::updateAttributes(array $values, null|array|string|\Stripe\Util\RequestOptions $opts = null, bool $dirty = true): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `opts` | **null|array|string|\Stripe\Util\RequestOptions** |  |
| `dirty` | **bool** | defaults to true |


**Return Value:**





---
### serializeParameters



```php
public StripeObject::serializeParameters(bool $force = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `force` | **bool** | defaults to false |


**Return Value:**

a recursive mapping of attributes to values for this object,
including the proper value for deleted attributes



---
### serializeParamsValue



```php
public StripeObject::serializeParamsValue(mixed $value, mixed $original, mixed $unsaved, mixed $force, mixed $key = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | **mixed** |  |
| `original` | **mixed** |  |
| `unsaved` | **mixed** |  |
| `force` | **mixed** |  |
| `key` | **mixed** |  |


**Return Value:**





---
### jsonSerialize



```php
public StripeObject::jsonSerialize(): mixed
```









**Return Value:**





---
### toArray

Returns an associative array with the key and values composing the
Stripe object.

```php
public StripeObject::toArray(): array
```









**Return Value:**

the associative array



---
### toJSON

Returns a pretty JSON representation of the Stripe object.

```php
public StripeObject::toJSON(): string
```









**Return Value:**

the JSON representation of the Stripe object



---
### __toString



```php
public StripeObject::__toString(): mixed
```









**Return Value:**





---
### dirty

Sets all keys within the StripeObject as unsaved so that they will be
included with an update when `serializeParameters` is called. This
method is also recursive, so any StripeObjects contained as values or
which are values in a tenant array are also marked as dirty.

```php
public StripeObject::dirty(): mixed
```









**Return Value:**





---
### dirtyValue



```php
protected StripeObject::dirtyValue(mixed $value): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | **mixed** |  |


**Return Value:**





---
### deepCopy

Produces a deep copy of the given object including support for arrays
and StripeObjects.

```php
protected static StripeObject::deepCopy(mixed $obj): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | **mixed** |  |


**Return Value:**





---
### emptyValues

Returns a hash of empty values for all the values that are in the given
StripeObject.

```php
public static StripeObject::emptyValues(mixed $obj): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `obj` | **mixed** |  |


**Return Value:**





---
### getLastResponse



```php
public StripeObject::getLastResponse(): null|\Stripe\ApiResponse
```









**Return Value:**

The last response from the Stripe API



---
### setLastResponse

Sets the last response from the Stripe API.

```php
public StripeObject::setLastResponse(\Stripe\ApiResponse $resp): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `resp` | **\Stripe\ApiResponse** |  |


**Return Value:**





---
### isDeleted

Indicates whether or not the resource has been deleted on the server.

```php
public StripeObject::isDeleted(): bool
```

Note that some, but not all, resources can indicate whether they have
been deleted.







**Return Value:**

whether the resource is deleted



---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
