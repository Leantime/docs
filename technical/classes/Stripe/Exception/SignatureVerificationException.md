---
title: \Stripe\Exception\SignatureVerificationException
footer: false
---

# SignatureVerificationException

SignatureVerificationException is thrown when the signature verification for
a webhook fails.



* Full name: `\Stripe\Exception\SignatureVerificationException`
* Parent class: [Exception](../../../classes.md)
* This class implements: \Stripe\Exception\ExceptionInterface



## Methods

### factory

Creates a new SignatureVerificationException exception.

```php
public static SignatureVerificationException::factory(string $message, null|string $httpBody = null, null|string $sigHeader = null): \Stripe\Exception\SignatureVerificationException
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `message` | **string** | the exception message |
| `httpBody` | **null|string** | the HTTP body as a string |
| `sigHeader` | **null|string** | the `Stripe-Signature` HTTP header |


**Return Value:**





---
### getHttpBody

Gets the HTTP body as a string.

```php
public SignatureVerificationException::getHttpBody(): null|string
```









**Return Value:**





---
### setHttpBody

Sets the HTTP body as a string.

```php
public SignatureVerificationException::setHttpBody(null|string $httpBody): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `httpBody` | **null|string** |  |


**Return Value:**





---
### getSigHeader

Gets the `Stripe-Signature` HTTP header.

```php
public SignatureVerificationException::getSigHeader(): null|string
```









**Return Value:**





---
### setSigHeader

Sets the `Stripe-Signature` HTTP header.

```php
public SignatureVerificationException::setSigHeader(null|string $sigHeader): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sigHeader` | **null|string** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
