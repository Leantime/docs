---
title: \Stripe\Dispute
footer: false
---

# Dispute

A dispute occurs when a customer questions your charge with their card issuer.

When this happens, you're given the opportunity to respond to the dispute with
evidence that shows that the charge is legitimate. You can find more information
about the dispute process in our <a href="/docs/disputes">Disputes and Fraud</a>
documentation.

Related guide: <a href="https://stripe.com/docs/disputes">Disputes and
Fraud</a>.

* Full name: `\Stripe\Dispute`
* Parent class: [\Stripe\ApiResource](technical/ApiResource.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Stripe\Dispute::OBJECT_NAME`||&#039;dispute&#039;|
|`\Stripe\Dispute::REASON_BANK_CANNOT_PROCESS`||&#039;bank_cannot_process&#039;|
|`\Stripe\Dispute::REASON_CHECK_RETURNED`||&#039;check_returned&#039;|
|`\Stripe\Dispute::REASON_CREDIT_NOT_PROCESSED`||&#039;credit_not_processed&#039;|
|`\Stripe\Dispute::REASON_CUSTOMER_INITIATED`||&#039;customer_initiated&#039;|
|`\Stripe\Dispute::REASON_DEBIT_NOT_AUTHORIZED`||&#039;debit_not_authorized&#039;|
|`\Stripe\Dispute::REASON_DUPLICATE`||&#039;duplicate&#039;|
|`\Stripe\Dispute::REASON_FRAUDULENT`||&#039;fraudulent&#039;|
|`\Stripe\Dispute::REASON_GENERAL`||&#039;general&#039;|
|`\Stripe\Dispute::REASON_INCORRECT_ACCOUNT_DETAILS`||&#039;incorrect_account_details&#039;|
|`\Stripe\Dispute::REASON_INSUFFICIENT_FUNDS`||&#039;insufficient_funds&#039;|
|`\Stripe\Dispute::REASON_PRODUCT_NOT_RECEIVED`||&#039;product_not_received&#039;|
|`\Stripe\Dispute::REASON_PRODUCT_UNACCEPTABLE`||&#039;product_unacceptable&#039;|
|`\Stripe\Dispute::REASON_SUBSCRIPTION_CANCELED`||&#039;subscription_canceled&#039;|
|`\Stripe\Dispute::REASON_UNRECOGNIZED`||&#039;unrecognized&#039;|
|`\Stripe\Dispute::STATUS_CHARGE_REFUNDED`||&#039;charge_refunded&#039;|
|`\Stripe\Dispute::STATUS_LOST`||&#039;lost&#039;|
|`\Stripe\Dispute::STATUS_NEEDS_RESPONSE`||&#039;needs_response&#039;|
|`\Stripe\Dispute::STATUS_UNDER_REVIEW`||&#039;under_review&#039;|
|`\Stripe\Dispute::STATUS_WARNING_CLOSED`||&#039;warning_closed&#039;|
|`\Stripe\Dispute::STATUS_WARNING_NEEDS_RESPONSE`||&#039;warning_needs_response&#039;|
|`\Stripe\Dispute::STATUS_WARNING_UNDER_REVIEW`||&#039;warning_under_review&#039;|
|`\Stripe\Dispute::STATUS_WON`||&#039;won&#039;|

## Methods

### close



```php
public Dispute::close(null|array|string $opts = null): \Stripe\Dispute
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `opts` | **null|array|string** |  |


**Return Value:**

the closed dispute



---


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
### update



```php
public static Update::update(string $id, null|array $params = null, null|array|string $opts = null): static
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the resource to update |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**

the updated resource



---
### save



```php
public Update::save(null|array|string $opts = null): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `opts` | **null|array|string** |  |


**Return Value:**

the saved resource



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
