---
title: \Stripe\TaxId
footer: false
---

# TaxId

You can add one or multiple tax IDs to a <a
href="https://stripe.com/docs/api/customers">customer</a>. A customer's tax IDs
are displayed on invoices and credit notes issued for the customer.

Related guide: <a href="https://stripe.com/docs/billing/taxes/tax-ids">Customer
Tax Identification Numbers</a>.

* Full name: `\Stripe\TaxId`
* Parent class: [\Stripe\ApiResource](technical/ApiResource.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Stripe\TaxId::OBJECT_NAME`||&#039;tax_id&#039;|
|`\Stripe\TaxId::TYPE_AE_TRN`||&#039;ae_trn&#039;|
|`\Stripe\TaxId::TYPE_AU_ABN`||&#039;au_abn&#039;|
|`\Stripe\TaxId::TYPE_AU_ARN`||&#039;au_arn&#039;|
|`\Stripe\TaxId::TYPE_BG_UIC`||&#039;bg_uic&#039;|
|`\Stripe\TaxId::TYPE_BR_CNPJ`||&#039;br_cnpj&#039;|
|`\Stripe\TaxId::TYPE_BR_CPF`||&#039;br_cpf&#039;|
|`\Stripe\TaxId::TYPE_CA_BN`||&#039;ca_bn&#039;|
|`\Stripe\TaxId::TYPE_CA_GST_HST`||&#039;ca_gst_hst&#039;|
|`\Stripe\TaxId::TYPE_CA_PST_BC`||&#039;ca_pst_bc&#039;|
|`\Stripe\TaxId::TYPE_CA_PST_MB`||&#039;ca_pst_mb&#039;|
|`\Stripe\TaxId::TYPE_CA_PST_SK`||&#039;ca_pst_sk&#039;|
|`\Stripe\TaxId::TYPE_CA_QST`||&#039;ca_qst&#039;|
|`\Stripe\TaxId::TYPE_CH_VAT`||&#039;ch_vat&#039;|
|`\Stripe\TaxId::TYPE_CL_TIN`||&#039;cl_tin&#039;|
|`\Stripe\TaxId::TYPE_ES_CIF`||&#039;es_cif&#039;|
|`\Stripe\TaxId::TYPE_EU_OSS_VAT`||&#039;eu_oss_vat&#039;|
|`\Stripe\TaxId::TYPE_EU_VAT`||&#039;eu_vat&#039;|
|`\Stripe\TaxId::TYPE_GB_VAT`||&#039;gb_vat&#039;|
|`\Stripe\TaxId::TYPE_GE_VAT`||&#039;ge_vat&#039;|
|`\Stripe\TaxId::TYPE_HK_BR`||&#039;hk_br&#039;|
|`\Stripe\TaxId::TYPE_HU_TIN`||&#039;hu_tin&#039;|
|`\Stripe\TaxId::TYPE_ID_NPWP`||&#039;id_npwp&#039;|
|`\Stripe\TaxId::TYPE_IL_VAT`||&#039;il_vat&#039;|
|`\Stripe\TaxId::TYPE_IN_GST`||&#039;in_gst&#039;|
|`\Stripe\TaxId::TYPE_IS_VAT`||&#039;is_vat&#039;|
|`\Stripe\TaxId::TYPE_JP_CN`||&#039;jp_cn&#039;|
|`\Stripe\TaxId::TYPE_JP_RN`||&#039;jp_rn&#039;|
|`\Stripe\TaxId::TYPE_KR_BRN`||&#039;kr_brn&#039;|
|`\Stripe\TaxId::TYPE_LI_UID`||&#039;li_uid&#039;|
|`\Stripe\TaxId::TYPE_MX_RFC`||&#039;mx_rfc&#039;|
|`\Stripe\TaxId::TYPE_MY_FRP`||&#039;my_frp&#039;|
|`\Stripe\TaxId::TYPE_MY_ITN`||&#039;my_itn&#039;|
|`\Stripe\TaxId::TYPE_MY_SST`||&#039;my_sst&#039;|
|`\Stripe\TaxId::TYPE_NO_VAT`||&#039;no_vat&#039;|
|`\Stripe\TaxId::TYPE_NZ_GST`||&#039;nz_gst&#039;|
|`\Stripe\TaxId::TYPE_RU_INN`||&#039;ru_inn&#039;|
|`\Stripe\TaxId::TYPE_RU_KPP`||&#039;ru_kpp&#039;|
|`\Stripe\TaxId::TYPE_SA_VAT`||&#039;sa_vat&#039;|
|`\Stripe\TaxId::TYPE_SG_GST`||&#039;sg_gst&#039;|
|`\Stripe\TaxId::TYPE_SG_UEN`||&#039;sg_uen&#039;|
|`\Stripe\TaxId::TYPE_SI_TIN`||&#039;si_tin&#039;|
|`\Stripe\TaxId::TYPE_TH_VAT`||&#039;th_vat&#039;|
|`\Stripe\TaxId::TYPE_TW_VAT`||&#039;tw_vat&#039;|
|`\Stripe\TaxId::TYPE_UA_VAT`||&#039;ua_vat&#039;|
|`\Stripe\TaxId::TYPE_UNKNOWN`||&#039;unknown&#039;|
|`\Stripe\TaxId::TYPE_US_EIN`||&#039;us_ein&#039;|
|`\Stripe\TaxId::TYPE_ZA_VAT`||&#039;za_vat&#039;|
|`\Stripe\TaxId::VERIFICATION_STATUS_PENDING`||&#039;pending&#039;|
|`\Stripe\TaxId::VERIFICATION_STATUS_UNAVAILABLE`||&#039;unavailable&#039;|
|`\Stripe\TaxId::VERIFICATION_STATUS_UNVERIFIED`||&#039;unverified&#039;|
|`\Stripe\TaxId::VERIFICATION_STATUS_VERIFIED`||&#039;verified&#039;|

## Methods

### instanceUrl



```php
public TaxId::instanceUrl(): string
```









**Return Value:**

the API URL for this tax id



---
### retrieve



```php
public static TaxId::retrieve(array|string $_id, null|array|string $_opts = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `_id` | **array|string** |  |
| `_opts` | **null|array|string** |  |


**Return Value:**





---


## Inherited methods

### delete



```php
public Delete::delete(null|array $params = null, null|array|string $opts = null): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**

the deleted resource



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
