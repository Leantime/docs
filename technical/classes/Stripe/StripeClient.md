---
title: \Stripe\StripeClient
footer: false
---

# StripeClient

Client used to send requests to Stripe's API.



* Full name: `\Stripe\StripeClient`
* Parent class: [\Stripe\BaseStripeClient](technical/BaseStripeClient.md)



## Methods

### __get



```php
public StripeClient::__get(mixed $name): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |


**Return Value:**





---


## Inherited methods

### __construct

Initializes a new instance of the {@link BaseStripeClient} class.

```php
public BaseStripeClient::__construct(array&lt;string,mixed&gt;|string $config = []): mixed
```

The constructor takes a single argument. The argument can be a string, in which case it
should be the API key. It can also be an array with various configuration settings.

Configuration settings include the following options:

- api_key (null|string): the Stripe API key, to be used in regular API requests.
- client_id (null|string): the Stripe client ID, to be used in OAuth requests.
- stripe_account (null|string): a Stripe account ID. If set, all requests sent by the client
  will automatically use the {@code Stripe-Account} header with that account ID.
- stripe_version (null|string): a Stripe API verion. If set, all requests sent by the client
  will include the {@code Stripe-Version} header with that API version.

The following configuration settings are also available, though setting these should rarely be necessary
(only useful if you want to send requests to a mock server like stripe-mock):

- api_base (string): the base URL for regular API requests. Defaults to
  {@link DEFAULT_API_BASE}.
- connect_base (string): the base URL for OAuth requests. Defaults to
  {@link DEFAULT_CONNECT_BASE}.
- files_base (string): the base URL for file creation requests. Defaults to
  {@link DEFAULT_FILES_BASE}.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **array<string,mixed>|string** | the API key as a string, or an array containing<br />the client configuration settings |


**Return Value:**





---
### getApiKey

Gets the API key used by the client to send requests.

```php
public BaseStripeClient::getApiKey(): null|string
```









**Return Value:**

the API key used by the client to send requests



---
### getClientId

Gets the client ID used by the client in OAuth requests.

```php
public BaseStripeClient::getClientId(): null|string
```









**Return Value:**

the client ID used by the client in OAuth requests



---
### getApiBase

Gets the base URL for Stripe's API.

```php
public BaseStripeClient::getApiBase(): string
```









**Return Value:**

the base URL for Stripe's API



---
### getConnectBase

Gets the base URL for Stripe's OAuth API.

```php
public BaseStripeClient::getConnectBase(): string
```









**Return Value:**

the base URL for Stripe's OAuth API



---
### getFilesBase

Gets the base URL for Stripe's Files API.

```php
public BaseStripeClient::getFilesBase(): string
```









**Return Value:**

the base URL for Stripe's Files API



---
### request

Sends a request to Stripe's API.

```php
public BaseStripeClient::request(string $method, string $path, array $params, array|\Stripe\Util\RequestOptions $opts): \Stripe\StripeObject
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** | the HTTP method |
| `path` | **string** | the path of the request |
| `params` | **array** | the parameters of the request |
| `opts` | **array|\Stripe\Util\RequestOptions** | the special modifiers of the request |


**Return Value:**

the object returned by Stripe's API



---
### requestStream

Sends a request to Stripe's API, passing chunks of the streamed response
into a user-provided $readBodyChunkCallable callback.

```php
public BaseStripeClient::requestStream(string $method, string $path, callable $readBodyChunkCallable, array $params, array|\Stripe\Util\RequestOptions $opts): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** | the HTTP method |
| `path` | **string** | the path of the request |
| `readBodyChunkCallable` | **callable** | a function that will be called |
| `params` | **array** | the parameters of the request |
| `opts` | **array|\Stripe\Util\RequestOptions** | the special modifiers of the request<br />with chunks of bytes from the body if the request is successful |


**Return Value:**





---
### requestCollection

Sends a request to Stripe's API.

```php
public BaseStripeClient::requestCollection(string $method, string $path, array $params, array|\Stripe\Util\RequestOptions $opts): \Stripe\Collection
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** | the HTTP method |
| `path` | **string** | the path of the request |
| `params` | **array** | the parameters of the request |
| `opts` | **array|\Stripe\Util\RequestOptions** | the special modifiers of the request |


**Return Value:**

of ApiResources



---
### requestSearchResult

Sends a request to Stripe's API.

```php
public BaseStripeClient::requestSearchResult(string $method, string $path, array $params, array|\Stripe\Util\RequestOptions $opts): \Stripe\SearchResult
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** | the HTTP method |
| `path` | **string** | the path of the request |
| `params` | **array** | the parameters of the request |
| `opts` | **array|\Stripe\Util\RequestOptions** | the special modifiers of the request |


**Return Value:**

of ApiResources



---
### apiKeyForRequest



```php
private BaseStripeClient::apiKeyForRequest(\Stripe\Util\RequestOptions $opts): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `opts` | **\Stripe\Util\RequestOptions** |  |


**Return Value:**





---
### getDefaultConfig

TODO: replace this with a private constant when we drop support for PHP < 5.

```php
private BaseStripeClient::getDefaultConfig(): array&lt;string,mixed&gt;
```









**Return Value:**





---
### validateConfig



```php
private BaseStripeClient::validateConfig(array&lt;string,mixed&gt; $config): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **array<string,mixed>** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
