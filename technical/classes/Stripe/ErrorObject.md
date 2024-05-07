---
title: \Stripe\ErrorObject
footer: false
---

# ErrorObject

Class ErrorObject.



* Full name: `\Stripe\ErrorObject`
* Parent class: [\Stripe\StripeObject](technical/StripeObject.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Stripe\ErrorObject::CODE_ACCOUNT_ALREADY_EXISTS`||&#039;account_already_exists&#039;|
|`\Stripe\ErrorObject::CODE_ACCOUNT_COUNTRY_INVALID_ADDRESS`||&#039;account_country_invalid_address&#039;|
|`\Stripe\ErrorObject::CODE_ACCOUNT_INVALID`||&#039;account_invalid&#039;|
|`\Stripe\ErrorObject::CODE_ACCOUNT_NUMBER_INVALID`||&#039;account_number_invalid&#039;|
|`\Stripe\ErrorObject::CODE_ALIPAY_UPGRADE_REQUIRED`||&#039;alipay_upgrade_required&#039;|
|`\Stripe\ErrorObject::CODE_AMOUNT_TOO_LARGE`||&#039;amount_too_large&#039;|
|`\Stripe\ErrorObject::CODE_AMOUNT_TOO_SMALL`||&#039;amount_too_small&#039;|
|`\Stripe\ErrorObject::CODE_API_KEY_EXPIRED`||&#039;api_key_expired&#039;|
|`\Stripe\ErrorObject::CODE_BALANCE_INSUFFICIENT`||&#039;balance_insufficient&#039;|
|`\Stripe\ErrorObject::CODE_BANK_ACCOUNT_EXISTS`||&#039;bank_account_exists&#039;|
|`\Stripe\ErrorObject::CODE_BANK_ACCOUNT_UNUSABLE`||&#039;bank_account_unusable&#039;|
|`\Stripe\ErrorObject::CODE_BANK_ACCOUNT_UNVERIFIED`||&#039;bank_account_unverified&#039;|
|`\Stripe\ErrorObject::CODE_BITCOIN_UPGRADE_REQUIRED`||&#039;bitcoin_upgrade_required&#039;|
|`\Stripe\ErrorObject::CODE_CARD_DECLINED`||&#039;card_declined&#039;|
|`\Stripe\ErrorObject::CODE_CHARGE_ALREADY_CAPTURED`||&#039;charge_already_captured&#039;|
|`\Stripe\ErrorObject::CODE_CHARGE_ALREADY_REFUNDED`||&#039;charge_already_refunded&#039;|
|`\Stripe\ErrorObject::CODE_CHARGE_DISPUTED`||&#039;charge_disputed&#039;|
|`\Stripe\ErrorObject::CODE_CHARGE_EXCEEDS_SOURCE_LIMIT`||&#039;charge_exceeds_source_limit&#039;|
|`\Stripe\ErrorObject::CODE_CHARGE_EXPIRED_FOR_CAPTURE`||&#039;charge_expired_for_capture&#039;|
|`\Stripe\ErrorObject::CODE_COUNTRY_UNSUPPORTED`||&#039;country_unsupported&#039;|
|`\Stripe\ErrorObject::CODE_COUPON_EXPIRED`||&#039;coupon_expired&#039;|
|`\Stripe\ErrorObject::CODE_CUSTOMER_MAX_SUBSCRIPTIONS`||&#039;customer_max_subscriptions&#039;|
|`\Stripe\ErrorObject::CODE_EMAIL_INVALID`||&#039;email_invalid&#039;|
|`\Stripe\ErrorObject::CODE_EXPIRED_CARD`||&#039;expired_card&#039;|
|`\Stripe\ErrorObject::CODE_IDEMPOTENCY_KEY_IN_USE`||&#039;idempotency_key_in_use&#039;|
|`\Stripe\ErrorObject::CODE_INCORRECT_ADDRESS`||&#039;incorrect_address&#039;|
|`\Stripe\ErrorObject::CODE_INCORRECT_CVC`||&#039;incorrect_cvc&#039;|
|`\Stripe\ErrorObject::CODE_INCORRECT_NUMBER`||&#039;incorrect_number&#039;|
|`\Stripe\ErrorObject::CODE_INCORRECT_ZIP`||&#039;incorrect_zip&#039;|
|`\Stripe\ErrorObject::CODE_INSTANT_PAYOUTS_UNSUPPORTED`||&#039;instant_payouts_unsupported&#039;|
|`\Stripe\ErrorObject::CODE_INVALID_CARD_TYPE`||&#039;invalid_card_type&#039;|
|`\Stripe\ErrorObject::CODE_INVALID_CHARGE_AMOUNT`||&#039;invalid_charge_amount&#039;|
|`\Stripe\ErrorObject::CODE_INVALID_CVC`||&#039;invalid_cvc&#039;|
|`\Stripe\ErrorObject::CODE_INVALID_EXPIRY_MONTH`||&#039;invalid_expiry_month&#039;|
|`\Stripe\ErrorObject::CODE_INVALID_EXPIRY_YEAR`||&#039;invalid_expiry_year&#039;|
|`\Stripe\ErrorObject::CODE_INVALID_NUMBER`||&#039;invalid_number&#039;|
|`\Stripe\ErrorObject::CODE_INVALID_SOURCE_USAGE`||&#039;invalid_source_usage&#039;|
|`\Stripe\ErrorObject::CODE_INVOICE_NO_CUSTOMER_LINE_ITEMS`||&#039;invoice_no_customer_line_items&#039;|
|`\Stripe\ErrorObject::CODE_INVOICE_NO_SUBSCRIPTION_LINE_ITEMS`||&#039;invoice_no_subscription_line_items&#039;|
|`\Stripe\ErrorObject::CODE_INVOICE_NOT_EDITABLE`||&#039;invoice_not_editable&#039;|
|`\Stripe\ErrorObject::CODE_INVOICE_PAYMENT_INTENT_REQUIRES_ACTION`||&#039;invoice_payment_intent_requires_action&#039;|
|`\Stripe\ErrorObject::CODE_INVOICE_UPCOMING_NONE`||&#039;invoice_upcoming_none&#039;|
|`\Stripe\ErrorObject::CODE_LIVEMODE_MISMATCH`||&#039;livemode_mismatch&#039;|
|`\Stripe\ErrorObject::CODE_LOCK_TIMEOUT`||&#039;lock_timeout&#039;|
|`\Stripe\ErrorObject::CODE_MISSING`||&#039;missing&#039;|
|`\Stripe\ErrorObject::CODE_NOT_ALLOWED_ON_STANDARD_ACCOUNT`||&#039;not_allowed_on_standard_account&#039;|
|`\Stripe\ErrorObject::CODE_ORDER_CREATION_FAILED`||&#039;order_creation_failed&#039;|
|`\Stripe\ErrorObject::CODE_ORDER_REQUIRED_SETTINGS`||&#039;order_required_settings&#039;|
|`\Stripe\ErrorObject::CODE_ORDER_STATUS_INVALID`||&#039;order_status_invalid&#039;|
|`\Stripe\ErrorObject::CODE_ORDER_UPSTREAM_TIMEOUT`||&#039;order_upstream_timeout&#039;|
|`\Stripe\ErrorObject::CODE_OUT_OF_INVENTORY`||&#039;out_of_inventory&#039;|
|`\Stripe\ErrorObject::CODE_PARAMETER_INVALID_EMPTY`||&#039;parameter_invalid_empty&#039;|
|`\Stripe\ErrorObject::CODE_PARAMETER_INVALID_INTEGER`||&#039;parameter_invalid_integer&#039;|
|`\Stripe\ErrorObject::CODE_PARAMETER_INVALID_STRING_BLANK`||&#039;parameter_invalid_string_blank&#039;|
|`\Stripe\ErrorObject::CODE_PARAMETER_INVALID_STRING_EMPTY`||&#039;parameter_invalid_string_empty&#039;|
|`\Stripe\ErrorObject::CODE_PARAMETER_MISSING`||&#039;parameter_missing&#039;|
|`\Stripe\ErrorObject::CODE_PARAMETER_UNKNOWN`||&#039;parameter_unknown&#039;|
|`\Stripe\ErrorObject::CODE_PARAMETERS_EXCLUSIVE`||&#039;parameters_exclusive&#039;|
|`\Stripe\ErrorObject::CODE_PAYMENT_INTENT_AUTHENTICATION_FAILURE`||&#039;payment_intent_authentication_failure&#039;|
|`\Stripe\ErrorObject::CODE_PAYMENT_INTENT_INCOMPATIBLE_PAYMENT_METHOD`||&#039;payment_intent_incompatible_payment_method&#039;|
|`\Stripe\ErrorObject::CODE_PAYMENT_INTENT_INVALID_PARAMETER`||&#039;payment_intent_invalid_parameter&#039;|
|`\Stripe\ErrorObject::CODE_PAYMENT_INTENT_PAYMENT_ATTEMPT_FAILED`||&#039;payment_intent_payment_attempt_failed&#039;|
|`\Stripe\ErrorObject::CODE_PAYMENT_INTENT_UNEXPECTED_STATE`||&#039;payment_intent_unexpected_state&#039;|
|`\Stripe\ErrorObject::CODE_PAYMENT_METHOD_UNACTIVATED`||&#039;payment_method_unactivated&#039;|
|`\Stripe\ErrorObject::CODE_PAYMENT_METHOD_UNEXPECTED_STATE`||&#039;payment_method_unexpected_state&#039;|
|`\Stripe\ErrorObject::CODE_PAYOUTS_NOT_ALLOWED`||&#039;payouts_not_allowed&#039;|
|`\Stripe\ErrorObject::CODE_PLATFORM_API_KEY_EXPIRED`||&#039;platform_api_key_expired&#039;|
|`\Stripe\ErrorObject::CODE_POSTAL_CODE_INVALID`||&#039;postal_code_invalid&#039;|
|`\Stripe\ErrorObject::CODE_PROCESSING_ERROR`||&#039;processing_error&#039;|
|`\Stripe\ErrorObject::CODE_PRODUCT_INACTIVE`||&#039;product_inactive&#039;|
|`\Stripe\ErrorObject::CODE_RATE_LIMIT`||&#039;rate_limit&#039;|
|`\Stripe\ErrorObject::CODE_RESOURCE_ALREADY_EXISTS`||&#039;resource_already_exists&#039;|
|`\Stripe\ErrorObject::CODE_RESOURCE_MISSING`||&#039;resource_missing&#039;|
|`\Stripe\ErrorObject::CODE_ROUTING_NUMBER_INVALID`||&#039;routing_number_invalid&#039;|
|`\Stripe\ErrorObject::CODE_SECRET_KEY_REQUIRED`||&#039;secret_key_required&#039;|
|`\Stripe\ErrorObject::CODE_SEPA_UNSUPPORTED_ACCOUNT`||&#039;sepa_unsupported_account&#039;|
|`\Stripe\ErrorObject::CODE_SETUP_ATTEMPT_FAILED`||&#039;setup_attempt_failed&#039;|
|`\Stripe\ErrorObject::CODE_SETUP_INTENT_AUTHENTICATION_FAILURE`||&#039;setup_intent_authentication_failure&#039;|
|`\Stripe\ErrorObject::CODE_SETUP_INTENT_UNEXPECTED_STATE`||&#039;setup_intent_unexpected_state&#039;|
|`\Stripe\ErrorObject::CODE_SHIPPING_CALCULATION_FAILED`||&#039;shipping_calculation_failed&#039;|
|`\Stripe\ErrorObject::CODE_SKU_INACTIVE`||&#039;sku_inactive&#039;|
|`\Stripe\ErrorObject::CODE_STATE_UNSUPPORTED`||&#039;state_unsupported&#039;|
|`\Stripe\ErrorObject::CODE_TAX_ID_INVALID`||&#039;tax_id_invalid&#039;|
|`\Stripe\ErrorObject::CODE_TAXES_CALCULATION_FAILED`||&#039;taxes_calculation_failed&#039;|
|`\Stripe\ErrorObject::CODE_TESTMODE_CHARGES_ONLY`||&#039;testmode_charges_only&#039;|
|`\Stripe\ErrorObject::CODE_TLS_VERSION_UNSUPPORTED`||&#039;tls_version_unsupported&#039;|
|`\Stripe\ErrorObject::CODE_TOKEN_ALREADY_USED`||&#039;token_already_used&#039;|
|`\Stripe\ErrorObject::CODE_TOKEN_IN_USE`||&#039;token_in_use&#039;|
|`\Stripe\ErrorObject::CODE_TRANSFERS_NOT_ALLOWED`||&#039;transfers_not_allowed&#039;|
|`\Stripe\ErrorObject::CODE_UPSTREAM_ORDER_CREATION_FAILED`||&#039;upstream_order_creation_failed&#039;|
|`\Stripe\ErrorObject::CODE_URL_INVALID`||&#039;url_invalid&#039;|

## Methods

### refreshFrom

Refreshes this object using the provided values.

```php
public ErrorObject::refreshFrom(array $values, null|array|string|\Stripe\Util\RequestOptions $opts, bool $partial = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `opts` | **null|array|string|\Stripe\Util\RequestOptions** |  |
| `partial` | **bool** | defaults to false |


**Return Value:**





---


## Inherited methods

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
