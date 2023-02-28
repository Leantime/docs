---
title: \leantime\core\IncomingRequest
footer: false
---

# IncomingRequest

Incoming Request information



* Full name: `\leantime\core\IncomingRequest`



## Methods

### __construct



```php
public IncomingRequest::__construct(): mixed
```









**Return Value:**





---
### getBaseURL

Gets the base fqdn including protocol
Note: HTTP_HOST will return port number as well

```php
public IncomingRequest::getBaseURL(): string
```









**Return Value:**





---
### getFullURL

Gets the full URL including request uri and protocol

```php
public IncomingRequest::getFullURL(): string
```









**Return Value:**





---
### getRequestURI

Gets the request URI (path behind domain name)
Will adjust for subfolder installations

```php
public IncomingRequest::getRequestURI(string $baseURL = &quot;&quot;): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `baseURL` | **string** | Base Url in case of subfolder installations |


**Return Value:**





---
### getRequestMethod



```php
public static IncomingRequest::getRequestMethod(): mixed
```



* This method is **static**.





**Return Value:**





---
### getRequestParams



```php
public static IncomingRequest::getRequestParams(mixed $method): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **mixed** |  |


**Return Value:**





---
### getAuthorizationHeader

Get hearder Authorization

```php
public IncomingRequest::getAuthorizationHeader(): mixed
```









**Return Value:**





---
### getAPIKey



```php
public IncomingRequest::getAPIKey(): mixed
```









**Return Value:**





---
### hasAPIKey



```php
public IncomingRequest::hasAPIKey(): mixed
```









**Return Value:**





---
### getBearerToken

get access token from header

```php
public IncomingRequest::getBearerToken(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
