---
title: \Stripe\Exception\ApiErrorException
footer: false
---

# ApiErrorException

Implements properties and methods common to all (non-SPL) Stripe exceptions.



* Full name: `\Stripe\Exception\ApiErrorException`
* Parent class: [Exception](../../../classes.md)
* This class implements: \Stripe\Exception\ExceptionInterface



## Methods

### factory

Creates a new API error exception.

```php
public static ApiErrorException::factory(string $message, null|int $httpStatus = null, null|string $httpBody = null, null|array $jsonBody = null, null|array|\Stripe\Util\CaseInsensitiveArray $httpHeaders = null, null|string $stripeCode = null): static
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `message` | **string** | the exception message |
| `httpStatus` | **null|int** | the HTTP status code |
| `httpBody` | **null|string** | the HTTP body as a string |
| `jsonBody` | **null|array** | the JSON deserialized body |
| `httpHeaders` | **null|array|\Stripe\Util\CaseInsensitiveArray** | the HTTP headers array |
| `stripeCode` | **null|string** | the Stripe error code |


**Return Value:**





---
### getError

Gets the Stripe error object.

```php
public ApiErrorException::getError(): null|\Stripe\ErrorObject
```









**Return Value:**





---
### setError

Sets the Stripe error object.

```php
public ApiErrorException::setError(null|\Stripe\ErrorObject $error): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `error` | **null|\Stripe\ErrorObject** |  |


**Return Value:**





---
### getHttpBody

Gets the HTTP body as a string.

```php
public ApiErrorException::getHttpBody(): null|string
```









**Return Value:**





---
### setHttpBody

Sets the HTTP body as a string.

```php
public ApiErrorException::setHttpBody(null|string $httpBody): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `httpBody` | **null|string** |  |


**Return Value:**





---
### getHttpHeaders

Gets the HTTP headers array.

```php
public ApiErrorException::getHttpHeaders(): null|array|\Stripe\Util\CaseInsensitiveArray
```









**Return Value:**





---
### setHttpHeaders

Sets the HTTP headers array.

```php
public ApiErrorException::setHttpHeaders(null|array|\Stripe\Util\CaseInsensitiveArray $httpHeaders): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `httpHeaders` | **null|array|\Stripe\Util\CaseInsensitiveArray** |  |


**Return Value:**





---
### getHttpStatus

Gets the HTTP status code.

```php
public ApiErrorException::getHttpStatus(): null|int
```









**Return Value:**





---
### setHttpStatus

Sets the HTTP status code.

```php
public ApiErrorException::setHttpStatus(null|int $httpStatus): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `httpStatus` | **null|int** |  |


**Return Value:**





---
### getJsonBody

Gets the JSON deserialized body.

```php
public ApiErrorException::getJsonBody(): null|array&lt;string,mixed&gt;
```









**Return Value:**





---
### setJsonBody

Sets the JSON deserialized body.

```php
public ApiErrorException::setJsonBody(null|array&lt;string,mixed&gt; $jsonBody): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `jsonBody` | **null|array<string,mixed>** |  |


**Return Value:**





---
### getRequestId

Gets the Stripe request ID.

```php
public ApiErrorException::getRequestId(): null|string
```









**Return Value:**





---
### setRequestId

Sets the Stripe request ID.

```php
public ApiErrorException::setRequestId(null|string $requestId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `requestId` | **null|string** |  |


**Return Value:**





---
### getStripeCode

Gets the Stripe error code.

```php
public ApiErrorException::getStripeCode(): null|string
```

Cf. the `CODE_*` constants on {@see \Stripe\ErrorObject} for possible
values.







**Return Value:**





---
### setStripeCode

Sets the Stripe error code.

```php
public ApiErrorException::setStripeCode(null|string $stripeCode): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `stripeCode` | **null|string** |  |


**Return Value:**





---
### __toString

Returns the string representation of the exception.

```php
public ApiErrorException::__toString(): string
```









**Return Value:**





---
### constructErrorObject



```php
protected ApiErrorException::constructErrorObject(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
