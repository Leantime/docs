---
title: \Leantime\Core\CliRequest
footer: false
---

# CliRequest

Incoming Request information



* Full name: `\Leantime\Core\CliRequest`
* Parent class: [\Leantime\Core\IncomingRequest](technical/IncomingRequest.md)





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


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
