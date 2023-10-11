---
title: \Leantime\Core\ApiSession
footer: false
---

# ApiSession

ApiSession - Creates a Guzzle Client with a connection



* Full name: `\Leantime\Core\ApiSession`



## Methods

### checkCreds

Checks passed credentials to see if they are properly provided

```php
private static ApiSession::checkCreds(array $requiredCreds, array $creds, array $optionalCreds = []): bool
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `requiredCreds` | **array** |  |
| `creds` | **array** |  |
| `optionalCreds` | **array** | (optional) |


**Return Value:**




**See Also:**

* https://github.com/kamermans/guzzle-oauth2-subscriber#middleware-guzzle-6 - 

---
### oAuth2

Creates a Guzzle Client with an oAuth2 connection

```php
public static ApiSession::oAuth2(string $baseUri, \GuzzleHttp\HandlerStack $stack, array $requestDefaults = []): \GuzzleHttp\Client
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `baseUri` | **string** |  |
| `stack` | **\GuzzleHttp\HandlerStack** |  |
| `requestDefaults` | **array** |  |


**Return Value:**




**See Also:**

* https://github.com/kamermans/guzzle-oauth2-subscriber#client-credentials-example - 

---
### oAuth2Grants

Creates a handler for oAuth2 Client

```php
public static ApiSession::oAuth2Grants(string $baseUri, array $creds, bool $usesRefresh = false, \kamermans\OAuth2\GrantType\GrantTypeInterface|null $customGrantType = null): \GuzzleHttp\HandlerStack
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `baseUri` | **string** |  |
| `creds` | **array** | Just pass an empty array if you supply $customGrantType. |
| `usesRefresh` | **bool** | (optional) |
| `customGrantType` | **\kamermans\OAuth2\GrantType\GrantTypeInterface|null** | (optional) |


**Return Value:**




**See Also:**

* https://github.com/kamermans/guzzle-oauth2-subscriber - 

---
### oAuth1

Creates a Guzzle Client with an oAuth1 connection

```php
public static ApiSession::oAuth1(string $baseUri, array $creds, array $requestDefaults = []): \GuzzleHttp\Client
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `baseUri` | **string** |  |
| `creds` | **array** |  |
| `requestDefaults` | **array** | (optional) |


**Return Value:**




**See Also:**

* https://github.com/guzzle/oauth-subscriber#using-the-subscriber - 

---
### basicAuth

Creates a Guzzle Client with a basic authentication connection

```php
public static ApiSession::basicAuth(string $baseUri, array $creds, array $requestDefaults = []): \GuzzleHttp\Client
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `baseUri` | **string** |  |
| `creds` | **array** |  |
| `requestDefaults` | **array** | (optional) |


**Return Value:**




**See Also:**

* https://docs.guzzlephp.org/en/latest/request-options.html#auth - 

---
### digest

Creates a Guzzle Client with a digest connection

```php
public static ApiSession::digest(string $baseUri, array $creds, array $requestDefaults = []): \GuzzleHttp\Client
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `baseUri` | **string** |  |
| `creds` | **array** |  |
| `requestDefaults` | **array** | (optional) |


**Return Value:**




**See Also:**

* https://docs.guzzlephp.org/en/latest/request-options.html#auth - 

---
### ntlm

Creates a Guzzle Client with a ntlm connection

```php
public static ApiSession::ntlm(string $baseUri, array $creds, array $requestDefaults = []): \GuzzleHttp\Client
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `baseUri` | **string** |  |
| `creds` | **array** |  |
| `requestDefaults` | **array** | (optional) |


**Return Value:**




**See Also:**

* https://docs.guzzlephp.org/en/latest/request-options.html#auth - 

---
### bearerToken

Creates a Guzzle Client with a token/apikey connection

```php
public static ApiSession::bearerToken(string $baseUri, array $creds, array $requestDefaults = []): \GuzzleHttp\Client
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `baseUri` | **string** |  |
| `creds` | **array** |  |
| `requestDefaults` | **array** | (optional) |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
