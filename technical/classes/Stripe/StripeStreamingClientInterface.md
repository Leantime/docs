---
title: \Stripe\StripeStreamingClientInterface
footer: false
---

# StripeStreamingClientInterface

Interface for a Stripe client.



* Full name: `\Stripe\StripeStreamingClientInterface`
* Parent interface: [](../../classes.md)



## Methods

### requestStream



```php
public StripeStreamingClientInterface::requestStream(mixed $method, mixed $path, mixed $readBodyChunkCallable, mixed $params, mixed $opts): mixed
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
