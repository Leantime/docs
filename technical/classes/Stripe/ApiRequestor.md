---
title: \Stripe\ApiRequestor
footer: false
---

# ApiRequestor

Class ApiRequestor.



* Full name: `\Stripe\ApiRequestor`



## Methods

### __construct

ApiRequestor constructor.

```php
public ApiRequestor::__construct(null|string $apiKey = null, null|string $apiBase = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `apiKey` | **null|string** |  |
| `apiBase` | **null|string** |  |


**Return Value:**





---
### _telemetryJson

Creates a telemetry json blob for use in 'X-Stripe-Client-Telemetry' headers.

```php
private static ApiRequestor::_telemetryJson(\Stripe\RequestTelemetry $requestTelemetry): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `requestTelemetry` | **\Stripe\RequestTelemetry** |  |


**Return Value:**





---
### _encodeObjects



```php
private static ApiRequestor::_encodeObjects(\Stripe\ApiResource|array|bool|mixed $d): \Stripe\ApiResource|array|mixed|string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `d` | **\Stripe\ApiResource|array|bool|mixed** |  |


**Return Value:**





---
### request



```php
public ApiRequestor::request(string $method, string $url, null|array $params = null, null|array $headers = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |
| `url` | **string** |  |
| `params` | **null|array** |  |
| `headers` | **null|array** |  |


**Return Value:**

tuple containing (ApiReponse, API key)



---
### requestStream



```php
public ApiRequestor::requestStream(string $method, string $url, callable $readBodyChunkCallable, null|array $params = null, null|array $headers = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |
| `url` | **string** |  |
| `readBodyChunkCallable` | **callable** |  |
| `params` | **null|array** |  |
| `headers` | **null|array** |  |


**Return Value:**





---
### handleErrorResponse



```php
public ApiRequestor::handleErrorResponse(string $rbody, int $rcode, array $rheaders, array $resp): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `rbody` | **string** | a JSON string |
| `rcode` | **int** |  |
| `rheaders` | **array** |  |
| `resp` | **array** |  |


**Return Value:**





---
### _specificAPIError



```php
private static ApiRequestor::_specificAPIError(string $rbody, int $rcode, array $rheaders, array $resp, array $errorData): \Stripe\Exception\ApiErrorException
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `rbody` | **string** |  |
| `rcode` | **int** |  |
| `rheaders` | **array** |  |
| `resp` | **array** |  |
| `errorData` | **array** |  |


**Return Value:**





---
### _specificOAuthError



```php
private static ApiRequestor::_specificOAuthError(bool|string $rbody, int $rcode, array $rheaders, array $resp, string $errorCode): \Stripe\Exception\OAuth\OAuthErrorException
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `rbody` | **bool|string** |  |
| `rcode` | **int** |  |
| `rheaders` | **array** |  |
| `resp` | **array** |  |
| `errorCode` | **string** |  |


**Return Value:**





---
### _formatAppInfo



```php
private static ApiRequestor::_formatAppInfo(null|array $appInfo): null|string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `appInfo` | **null|array** |  |


**Return Value:**





---
### _isDisabled



```php
private static ApiRequestor::_isDisabled(mixed $disableFunctionsOutput, string $functionName): bool
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `disableFunctionsOutput` | **mixed** |  |
| `functionName` | **string** | - Name of the function we are interesting in seeing whether or not it is disabled |


**Return Value:**





---
### _defaultHeaders



```php
private static ApiRequestor::_defaultHeaders(string $apiKey, null $clientInfo = null): array
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `apiKey` | **string** |  |
| `clientInfo` | **null** |  |


**Return Value:**





---
### _prepareRequest



```php
private ApiRequestor::_prepareRequest(mixed $method, mixed $url, mixed $params, mixed $headers): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **mixed** |  |
| `url` | **mixed** |  |
| `params` | **mixed** |  |
| `headers` | **mixed** |  |


**Return Value:**





---
### _requestRaw



```php
private ApiRequestor::_requestRaw(string $method, string $url, array $params, array $headers): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |
| `url` | **string** |  |
| `params` | **array** |  |
| `headers` | **array** |  |


**Return Value:**





---
### _requestRawStreaming



```php
private ApiRequestor::_requestRawStreaming(string $method, string $url, array $params, array $headers, mixed $readBodyChunkCallable): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |
| `url` | **string** |  |
| `params` | **array** |  |
| `headers` | **array** |  |
| `readBodyChunkCallable` | **mixed** |  |


**Return Value:**





---
### _processResourceParam



```php
private ApiRequestor::_processResourceParam(resource $resource): \CURLFile|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `resource` | **resource** |  |


**Return Value:**





---
### _interpretResponse



```php
private ApiRequestor::_interpretResponse(string $rbody, int $rcode, array $rheaders): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `rbody` | **string** |  |
| `rcode` | **int** |  |
| `rheaders` | **array** |  |


**Return Value:**





---
### setHttpClient



```php
public static ApiRequestor::setHttpClient(\Stripe\HttpClient\ClientInterface $client): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `client` | **\Stripe\HttpClient\ClientInterface** |  |


**Return Value:**





---
### setStreamingHttpClient



```php
public static ApiRequestor::setStreamingHttpClient(\Stripe\HttpClient\StreamingClientInterface $client): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `client` | **\Stripe\HttpClient\StreamingClientInterface** |  |


**Return Value:**





---
### resetTelemetry



```php
public static ApiRequestor::resetTelemetry(): mixed
```



* This method is **static**.





**Return Value:**





---
### httpClient



```php
private ApiRequestor::httpClient(): \Stripe\HttpClient\ClientInterface
```









**Return Value:**





---
### streamingHttpClient



```php
private ApiRequestor::streamingHttpClient(): \Stripe\HttpClient\StreamingClientInterface
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
