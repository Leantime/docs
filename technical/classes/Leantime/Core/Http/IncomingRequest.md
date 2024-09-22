---
title: \Leantime\Core\Http\IncomingRequest
footer: false
---

# IncomingRequest

Incoming Request information


`\Leantime\Core\Http\IncomingRequest`

* Parent class: [Request](../../../../classes.md)



## Methods

### __construct



```php
public IncomingRequest::__construct(array $query = [], array $request = [], array $attributes = [], array $cookies = [], array $files = [], array $server = [], string|resource|null $content = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | **array** | The GET parameters |
| `request` | **array** | The POST parameters |
| `attributes` | **array** | The request attributes (parameters parsed from the PATH_INFO, ...) |
| `cookies` | **array** | The COOKIE parameters |
| `files` | **array** | The FILES parameters |
| `server` | **array** | The SERVER parameters |
| `content` | **string|resource|null** | The raw body data |


**Return Value:**





---
### setRequestDest

Sets the request destination from the path

```php
protected IncomingRequest::setRequestDest(string|null $requestUri = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `requestUri` | **string|null** |  |


**Return Value:**





---
### getFullUrl

Gets the full URL including request uri and protocol

```php
public IncomingRequest::getFullUrl(): string
```









**Return Value:**





---
### getRequestUri

Gets the request URI (path behind domain name)
Will adjust for subfolder installations

```php
public IncomingRequest::getRequestUri(): string
```









**Return Value:**





---
### getRequestParams

Gets the request params

```php
public IncomingRequest::getRequestParams(string|null $method = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string|null** |  |


**Return Value:**





---
### setLaravelSession

Set the Laravel session instance.

```php
public IncomingRequest::setLaravelSession(\Illuminate\Contracts\Session\Session $session): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `session` | **\Illuminate\Contracts\Session\Session** | The Laravel session instance. |


**Return Value:**





---
### fullUrl

Get the full URL of the current request.

```php
public IncomingRequest::fullUrl(): string
```

Wrapper for Laravel







**Return Value:**

The full URL of the current request.



---
### isApiOrCronRequest



```php
public IncomingRequest::isApiOrCronRequest(): bool
```









**Return Value:**





---
### isHtmxRequest



```php
public IncomingRequest::isHtmxRequest(): bool
```









**Return Value:**





---
### isBoostedHtmxRequest



```php
public IncomingRequest::isBoostedHtmxRequest(): bool
```









**Return Value:**





---
### isUnboostedHtmxRequest



```php
public IncomingRequest::isUnboostedHtmxRequest(): bool
```









**Return Value:**





---
### expectsJson

Determine if the current request probably expects a JSON response.

```php
public IncomingRequest::expectsJson(): bool
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
