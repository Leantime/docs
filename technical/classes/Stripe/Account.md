---
title: \Stripe\Account
footer: false
---

# Account

This is an object representing a Stripe account. You can retrieve it to see
properties on the account like its current e-mail address or if the account is
enabled yet to make live charges.

Some properties, marked below, are available only to platforms that want to <a
href="https://stripe.com/docs/connect/accounts">create and manage Express or
Custom accounts</a>.

* Full name: `\Stripe\Account`
* Parent class: [\Stripe\ApiResource](technical/ApiResource.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Stripe\Account::OBJECT_NAME`||&#039;account&#039;|
|`\Stripe\Account::BUSINESS_TYPE_COMPANY`||&#039;company&#039;|
|`\Stripe\Account::BUSINESS_TYPE_GOVERNMENT_ENTITY`||&#039;government_entity&#039;|
|`\Stripe\Account::BUSINESS_TYPE_INDIVIDUAL`||&#039;individual&#039;|
|`\Stripe\Account::BUSINESS_TYPE_NON_PROFIT`||&#039;non_profit&#039;|
|`\Stripe\Account::CAPABILITY_CARD_PAYMENTS`||&#039;card_payments&#039;|
|`\Stripe\Account::CAPABILITY_LEGACY_PAYMENTS`||&#039;legacy_payments&#039;|
|`\Stripe\Account::CAPABILITY_PLATFORM_PAYMENTS`||&#039;platform_payments&#039;|
|`\Stripe\Account::CAPABILITY_TRANSFERS`||&#039;transfers&#039;|
|`\Stripe\Account::CAPABILITY_STATUS_ACTIVE`||&#039;active&#039;|
|`\Stripe\Account::CAPABILITY_STATUS_INACTIVE`||&#039;inactive&#039;|
|`\Stripe\Account::CAPABILITY_STATUS_PENDING`||&#039;pending&#039;|
|`\Stripe\Account::TYPE_CUSTOM`||&#039;custom&#039;|
|`\Stripe\Account::TYPE_EXPRESS`||&#039;express&#039;|
|`\Stripe\Account::TYPE_STANDARD`||&#039;standard&#039;|
|`\Stripe\Account::PATH_CAPABILITIES`||&#039;/capabilities&#039;|
|`\Stripe\Account::PATH_EXTERNAL_ACCOUNTS`||&#039;/external_accounts&#039;|
|`\Stripe\Account::PATH_LOGIN_LINKS`||&#039;/login_links&#039;|
|`\Stripe\Account::PATH_PERSONS`||&#039;/persons&#039;|

## Methods

### getSavedNestedResources



```php
public static Account::getSavedNestedResources(): \Stripe\Util\Set
```



* This method is **static**.





**Return Value:**

A list of fields that can be their own type of
API resource (say a nested card under an account for example), and if
that resource is set, it should be transmitted to the API on a create or
update. Doing so is not the default behavior because API resources
should normally be persisted on their own RESTful endpoints.



---
### instanceUrl



```php
public Account::instanceUrl(): string
```









**Return Value:**

the full API URL for this API resource



---
### serializeParameters



```php
public Account::serializeParameters(mixed $force = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `force` | **mixed** |  |


**Return Value:**





---
### serializeAdditionalOwners



```php
private Account::serializeAdditionalOwners(mixed $legalEntity, mixed $additionalOwners): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `legalEntity` | **mixed** |  |
| `additionalOwners` | **mixed** |  |


**Return Value:**





---
### retrieve



```php
public static Account::retrieve(null|array|string $id = null, null|array|string $opts = null): \Stripe\Account
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **null|array|string** | the ID of the account to retrieve, or an<br />options array containing an `id` key |
| `opts` | **null|array|string** |  |


**Return Value:**





---
### deauthorize



```php
public Account::deauthorize(null|array $clientId = null, null|array|string $opts = null): \Stripe\StripeObject
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**

object containing the response from the API



---
### persons



```php
public Account::persons(null|array $params = null, null|array|string $opts = null): \Stripe\Collection&lt;\Stripe\Person&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**

the list of persons



---
### reject



```php
public Account::reject(null|array $params = null, null|array|string $opts = null): \Stripe\Account
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**

the rejected account



---
### allCapabilities



```php
public static Account::allCapabilities(string $id, null|array $params = null, null|array|string $opts = null): \Stripe\Collection&lt;\Stripe\Capability&gt;
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account on which to retrieve the capabilities |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**

the list of capabilities



---
### retrieveCapability



```php
public static Account::retrieveCapability(string $id, string $capabilityId, null|array $params = null, null|array|string $opts = null): \Stripe\Capability
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account to which the capability belongs |
| `capabilityId` | **string** | the ID of the capability to retrieve |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**





---
### updateCapability



```php
public static Account::updateCapability(string $id, string $capabilityId, null|array $params = null, null|array|string $opts = null): \Stripe\Capability
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account to which the capability belongs |
| `capabilityId` | **string** | the ID of the capability to update |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**





---
### allExternalAccounts



```php
public static Account::allExternalAccounts(string $id, null|array $params = null, null|array|string $opts = null): \Stripe\Collection&lt;\Stripe\BankAccount|\Stripe\Card&gt;
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account on which to retrieve the external accounts |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**

the list of external accounts (BankAccount or Card)



---
### createExternalAccount



```php
public static Account::createExternalAccount(string $id, null|array $params = null, null|array|string $opts = null): \Stripe\BankAccount|\Stripe\Card
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account on which to create the external account |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**





---
### deleteExternalAccount



```php
public static Account::deleteExternalAccount(string $id, string $externalAccountId, null|array $params = null, null|array|string $opts = null): \Stripe\BankAccount|\Stripe\Card
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account to which the external account belongs |
| `externalAccountId` | **string** | the ID of the external account to delete |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**





---
### retrieveExternalAccount



```php
public static Account::retrieveExternalAccount(string $id, string $externalAccountId, null|array $params = null, null|array|string $opts = null): \Stripe\BankAccount|\Stripe\Card
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account to which the external account belongs |
| `externalAccountId` | **string** | the ID of the external account to retrieve |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**





---
### updateExternalAccount



```php
public static Account::updateExternalAccount(string $id, string $externalAccountId, null|array $params = null, null|array|string $opts = null): \Stripe\BankAccount|\Stripe\Card
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account to which the external account belongs |
| `externalAccountId` | **string** | the ID of the external account to update |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**





---
### createLoginLink



```php
public static Account::createLoginLink(string $id, null|array $params = null, null|array|string $opts = null): \Stripe\LoginLink
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account on which to create the login link |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**





---
### allPersons



```php
public static Account::allPersons(string $id, null|array $params = null, null|array|string $opts = null): \Stripe\Collection&lt;\Stripe\Person&gt;
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account on which to retrieve the persons |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**

the list of persons



---
### createPerson



```php
public static Account::createPerson(string $id, null|array $params = null, null|array|string $opts = null): \Stripe\Person
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account on which to create the person |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**





---
### deletePerson



```php
public static Account::deletePerson(string $id, string $personId, null|array $params = null, null|array|string $opts = null): \Stripe\Person
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account to which the person belongs |
| `personId` | **string** | the ID of the person to delete |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**





---
### retrievePerson



```php
public static Account::retrievePerson(string $id, string $personId, null|array $params = null, null|array|string $opts = null): \Stripe\Person
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account to which the person belongs |
| `personId` | **string** | the ID of the person to retrieve |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**





---
### updatePerson



```php
public static Account::updatePerson(string $id, string $personId, null|array $params = null, null|array|string $opts = null): \Stripe\Person
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | the ID of the account to which the person belongs |
| `personId` | **string** | the ID of the person to update |
| `params` | **null|array** |  |
| `opts` | **null|array|string** |  |


**Return Value:**





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
### create



```php
public static Create::create(null|array $params = null, null|array|string $options = null): static
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


**Return Value:**

the created resource



---
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
### _nestedResourceOperation



```php
protected static NestedResource::_nestedResourceOperation(string $method, string $url, null|array $params = null, null|array|string $options = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |
| `url` | **string** |  |
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


**Return Value:**





---
### _nestedResourceUrl



```php
protected static NestedResource::_nestedResourceUrl(string $id, string $nestedPath, null|string $nestedId = null): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `nestedPath` | **string** |  |
| `nestedId` | **null|string** |  |


**Return Value:**





---
### _createNestedResource



```php
protected static NestedResource::_createNestedResource(string $id, string $nestedPath, null|array $params = null, null|array|string $options = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `nestedPath` | **string** |  |
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


**Return Value:**





---
### _retrieveNestedResource



```php
protected static NestedResource::_retrieveNestedResource(string $id, string $nestedPath, null|string $nestedId, null|array $params = null, null|array|string $options = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `nestedPath` | **string** |  |
| `nestedId` | **null|string** |  |
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


**Return Value:**





---
### _updateNestedResource



```php
protected static NestedResource::_updateNestedResource(string $id, string $nestedPath, null|string $nestedId, null|array $params = null, null|array|string $options = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `nestedPath` | **string** |  |
| `nestedId` | **null|string** |  |
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


**Return Value:**





---
### _deleteNestedResource



```php
protected static NestedResource::_deleteNestedResource(string $id, string $nestedPath, null|string $nestedId, null|array $params = null, null|array|string $options = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `nestedPath` | **string** |  |
| `nestedId` | **null|string** |  |
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


**Return Value:**





---
### _allNestedResources



```php
protected static NestedResource::_allNestedResources(string $id, string $nestedPath, null|array $params = null, null|array|string $options = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `nestedPath` | **string** |  |
| `params` | **null|array** |  |
| `options` | **null|array|string** |  |


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
