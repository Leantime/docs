---
title: \Leantime\Core\ApiRequest
footer: false
---

# ApiRequest

Incoming Request information



* Full name: `\Leantime\Core\ApiRequest`
* Parent class: [\Leantime\Core\IncomingRequest](technical/IncomingRequest.md)



## Methods

### getAuthorizationHeader

Get header Authorization

```php
public ApiRequest::getAuthorizationHeader(): string
```









**Return Value:**





---
### getAPIKey

get api key from header

```php
public ApiRequest::getAPIKey(): string
```









**Return Value:**





---
### getBearerToken

get access token from header

```php
public ApiRequest::getBearerToken(): ?string
```









**Return Value:**





---


## Inherited methods

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
protected IncomingRequest::setRequestDest(string $requestUri = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `requestUri` | **string** |  |


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
public IncomingRequest::getRequestParams(string $method = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
