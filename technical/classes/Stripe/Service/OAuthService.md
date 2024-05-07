---
title: \Stripe\Service\OAuthService
footer: false
---

# OAuthService

Abstract base class for all services.



* Full name: `\Stripe\Service\OAuthService`
* Parent class: [\Stripe\Service\AbstractService](technical/AbstractService.md)



## Methods

### requestConnect

Sends a request to Stripe's Connect API.

```php
protected OAuthService::requestConnect(string $method, string $path, array $params, array|\Stripe\Util\RequestOptions $opts): \Stripe\StripeObject
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** | the HTTP method |
| `path` | **string** | the path of the request |
| `params` | **array** | the parameters of the request |
| `opts` | **array|\Stripe\Util\RequestOptions** | the special modifiers of the request |


**Return Value:**

the object returned by Stripe's Connect API



---
### authorizeUrl

Generates a URL to Stripe's OAuth form.

```php
public OAuthService::authorizeUrl(null|array $params = null, null|array $opts = null): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array** |  |


**Return Value:**

the URL to Stripe's OAuth form



---
### token

Use an authoriztion code to connect an account to your platform and
fetch the user's credentials.

```php
public OAuthService::token(null|array $params = null, null|array $opts = null): \Stripe\StripeObject
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array** |  |


**Return Value:**

object containing the response from the API



---
### deauthorize

Disconnects an account from your platform.

```php
public OAuthService::deauthorize(null|array $params = null, null|array $opts = null): \Stripe\StripeObject
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array** |  |


**Return Value:**

object containing the response from the API



---
### _getClientId



```php
private OAuthService::_getClientId(mixed $params = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### _getClientSecret



```php
private OAuthService::_getClientSecret(mixed $params = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### _parseOpts



```php
private OAuthService::_parseOpts(array|\Stripe\Util\RequestOptions $opts): \Stripe\Util\RequestOptions
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `opts` | **array|\Stripe\Util\RequestOptions** | the special modifiers of the request |


**Return Value:**





---
### _getBase



```php
private OAuthService::_getBase(\Stripe\Util\RequestOptions $opts): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `opts` | **\Stripe\Util\RequestOptions** |  |


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
