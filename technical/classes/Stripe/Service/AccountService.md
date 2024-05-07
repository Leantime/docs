---
title: \Stripe\Service\AccountService
footer: false
---

# AccountService

Abstract base class for all services.



* Full name: `\Stripe\Service\AccountService`
* Parent class: [\Stripe\Service\AbstractService](technical/AbstractService.md)



## Methods

### all

Returns a list of accounts connected to your platform via <a
href="/docs/connect">Connect</a>. If you’re not a platform, the list is empty.

```php
public AccountService::all(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\Account&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### allCapabilities

Returns a list of capabilities associated with the account. The capabilities are
returned sorted by creation date, with the most recent capability appearing
first.

```php
public AccountService::allCapabilities(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\Capability&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### allExternalAccounts

List external accounts for an account.

```php
public AccountService::allExternalAccounts(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\BankAccount|\Stripe\Card&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### allPersons

Returns a list of people associated with the account’s legal entity. The people
are returned sorted by creation date, with the most recent people appearing
first.

```php
public AccountService::allPersons(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\Person&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### create

With <a href="/docs/connect">Connect</a>, you can create Stripe accounts for
your users. To do this, you’ll first need to <a
href="https://dashboard.stripe.com/account/applications/settings">register your
platform</a>.

```php
public AccountService::create(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Account
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### createExternalAccount

Create an external account for a given account.

```php
public AccountService::createExternalAccount(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\BankAccount|\Stripe\Card
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### createLoginLink

Creates a single-use login link for an Express account to access their Stripe
dashboard.

```php
public AccountService::createLoginLink(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\LoginLink
```

<strong>You may only create login links for <a
href="/docs/connect/express-accounts">Express accounts</a> connected to your
platform</strong>.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### createPerson

Creates a new person.

```php
public AccountService::createPerson(string $parentId, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Person
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### delete

With <a href="/docs/connect">Connect</a>, you can delete accounts you manage.

```php
public AccountService::delete(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Account
```

Accounts created using test-mode keys can be deleted at any time. Standard
accounts created using live-mode keys cannot be deleted. Custom or Express
accounts created using live-mode keys can only be deleted once all balances are
zero.

If you want to delete your own account, use the <a
href="https://dashboard.stripe.com/account">account information tab in your
account settings</a> instead.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### deleteExternalAccount

Delete a specified external account for a given account.

```php
public AccountService::deleteExternalAccount(string $parentId, string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\BankAccount|\Stripe\Card
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### deletePerson

Deletes an existing person’s relationship to the account’s legal entity. Any
person with a relationship for an account can be deleted through the API, except
if the person is the <code>account_opener</code>. If your integration is using
the <code>executive</code> parameter, you cannot delete the only verified
<code>executive</code> on file.

```php
public AccountService::deletePerson(string $parentId, string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Person
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### reject

With <a href="/docs/connect">Connect</a>, you may flag accounts as suspicious.

```php
public AccountService::reject(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Account
```

Test-mode Custom and Express accounts can be rejected at any time. Accounts
created using live-mode keys may only be rejected once all balances are zero.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### retrieveCapability

Retrieves information about the specified Account Capability.

```php
public AccountService::retrieveCapability(string $parentId, string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Capability
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### retrieveExternalAccount

Retrieve a specified external account for a given account.

```php
public AccountService::retrieveExternalAccount(string $parentId, string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\BankAccount|\Stripe\Card
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### retrievePerson

Retrieves an existing person.

```php
public AccountService::retrievePerson(string $parentId, string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Person
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### update

Updates a <a href="/docs/connect/accounts">connected account</a> by setting the
values of the parameters passed. Any parameters not provided are left unchanged.

```php
public AccountService::update(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Account
```

Most parameters can be changed only for Custom accounts. (These are marked
<strong>Custom Only</strong> below.) Parameters marked <strong>Custom and
Express</strong> are not supported for Standard accounts.

To update your own account, use the <a
href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a
href="/docs/connect/updating-accounts">Connect</a> documentation to learn more
about updating accounts.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### updateCapability

Updates an existing Account Capability.

```php
public AccountService::updateCapability(string $parentId, string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Capability
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### updateExternalAccount

Updates the metadata, account holder name, account holder type of a bank account
belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and
optionally sets it as the default for its currency. Other bank account details
are not editable by design.

```php
public AccountService::updateExternalAccount(string $parentId, string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\BankAccount|\Stripe\Card
```

You can re-enable a disabled bank account by performing an update call without
providing any arguments or changes.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### updatePerson

Updates an existing person.

```php
public AccountService::updatePerson(string $parentId, string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Person
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **string** |  |
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### retrieve

Retrieves the details of an account.

```php
public AccountService::retrieve(null|string $id = null, null|array $params = null, null|array|\Stripe\Service\StripeUtilRequestOptions $opts = null): \Stripe\Account
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **null|string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Service\StripeUtilRequestOptions** |  |


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
