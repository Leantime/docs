---
title: \Stripe\Service\Identity\VerificationSessionService
footer: false
---

# VerificationSessionService

Abstract base class for all services.



* Full name: `\Stripe\Service\Identity\VerificationSessionService`
* Parent class: [\Stripe\Service\AbstractService](../AbstractService.md)



## Methods

### all

Returns a list of VerificationSessions.

```php
public VerificationSessionService::all(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Collection&lt;\Stripe\Identity\VerificationSession&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### cancel

A VerificationSession object can be canceled when it is in
<code>requires_input</code> <a
href="/docs/identity/how-sessions-work">status</a>.

```php
public VerificationSessionService::cancel(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Identity\VerificationSession
```

Once canceled, future submission attempts are disabled. This cannot be undone.
<a href="/docs/identity/verification-sessions#cancel">Learn more</a>.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### create

Creates a VerificationSession object.

```php
public VerificationSessionService::create(null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Identity\VerificationSession
```

After the VerificationSession is created, display a verification modal using the
session <code>client_secret</code> or send your users to the session’s
<code>url</code>.

If your API key is in test mode, verification checks won’t actually process,
though everything else will occur as if in live mode.

Related guide: <a href="/docs/identity/verify-identity-documents">Verify your
users’ identity documents</a>.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### redact

Redact a VerificationSession to remove all collected information from Stripe.

```php
public VerificationSessionService::redact(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Identity\VerificationSession
```

This will redact the VerificationSession and all objects related to it,
including VerificationReports, Events, request logs, etc.

A VerificationSession object can be redacted when it is in
<code>requires_input</code> or <code>verified</code> <a
href="/docs/identity/how-sessions-work">status</a>. Redacting a
VerificationSession in <code>requires_action</code> state will automatically
cancel it.

The redaction process may take up to four days. When the redaction process is in
progress, the VerificationSession’s <code>redaction.status</code> field will be
set to <code>processing</code>; when the process is finished, it will change to
<code>redacted</code> and an <code>identity.verification_session.redacted</code>
event will be emitted.

Redaction is irreversible. Redacted objects are still accessible in the Stripe
API, but all the fields that contain personal data will be replaced by the
string <code>[redacted]</code> or a similar placeholder. The
<code>metadata</code> field will also be erased. Redacted objects cannot be
updated or used for any purpose.

<a href="/docs/identity/verification-sessions#redact">Learn more</a>.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### retrieve

Retrieves the details of a VerificationSession that was previously created.

```php
public VerificationSessionService::retrieve(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Identity\VerificationSession
```

When the session status is <code>requires_input</code>, you can use this method
to retrieve a valid <code>client_secret</code> or <code>url</code> to allow
re-submission.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** |  |
| `params` | **null|array** |  |
| `opts` | **null|array|\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### update

Updates a VerificationSession object.

```php
public VerificationSessionService::update(string $id, null|array $params = null, null|array|\Stripe\Util\RequestOptions $opts = null): \Stripe\Identity\VerificationSession
```

When the session status is <code>requires_input</code>, you can use this method
to update the verification check and options.






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
