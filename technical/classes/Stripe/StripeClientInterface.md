---
title: \Stripe\StripeClientInterface
footer: false
---

# StripeClientInterface

Interface for a Stripe client.



* Full name: `\Stripe\StripeClientInterface`
* Parent interface: [](../../classes.md)



## Methods

### request

Sends a request to Stripe's API.

```php
public StripeClientInterface::request(string $method, string $path, array $params, array|\Stripe\Util\RequestOptions $opts): \Stripe\StripeObject
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


## Inherited methods

### getApiKey

Gets the API key used by the client to send requests.

```php
public BaseStripeClientInterface::getApiKey(): null|string
```









**Return Value:**

the API key used by the client to send requests



---
### getClientId

Gets the client ID used by the client in OAuth requests.

```php
public BaseStripeClientInterface::getClientId(): null|string
```









**Return Value:**

the client ID used by the client in OAuth requests



---
### getApiBase

Gets the base URL for Stripe's API.

```php
public BaseStripeClientInterface::getApiBase(): string
```









**Return Value:**

the base URL for Stripe's API



---
### getConnectBase

Gets the base URL for Stripe's OAuth API.

```php
public BaseStripeClientInterface::getConnectBase(): string
```









**Return Value:**

the base URL for Stripe's OAuth API



---
### getFilesBase

Gets the base URL for Stripe's Files API.

```php
public BaseStripeClientInterface::getFilesBase(): string
```









**Return Value:**

the base URL for Stripe's Files API



---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
