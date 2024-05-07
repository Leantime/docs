---
title: \Stripe\HttpClient\CurlClient
footer: false
---

# CurlClient





* Full name: `\Stripe\HttpClient\CurlClient`
* This class implements: \Stripe\HttpClient\ClientInterface, \Stripe\HttpClient\StreamingClientInterface



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Stripe\HttpClient\CurlClient::DEFAULT_TIMEOUT`||80|
|`\Stripe\HttpClient\CurlClient::DEFAULT_CONNECT_TIMEOUT`||30|

## Methods

### instance



```php
public static CurlClient::instance(): mixed
```



* This method is **static**.





**Return Value:**





---
### __construct

CurlClient constructor.

```php
public CurlClient::__construct(null|array|callable $defaultOptions = null, null|\Stripe\Util\RandomGenerator $randomGenerator = null): mixed
```

Pass in a callable to $defaultOptions that returns an array of CURLOPT_* values to start
off a request with, or an flat array with the same format used by curl_setopt_array() to
provide a static set of options. Note that many options are overridden later in the request
call, including timeouts, which can be set via setTimeout() and setConnectTimeout().

Note that request() will silently ignore a non-callable, non-array $defaultOptions, and will
throw an exception if $defaultOptions returns a non-array value.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `defaultOptions` | **null|array|callable** |  |
| `randomGenerator` | **null|\Stripe\Util\RandomGenerator** |  |


**Return Value:**





---
### __destruct



```php
public CurlClient::__destruct(): mixed
```









**Return Value:**





---
### initUserAgentInfo



```php
public CurlClient::initUserAgentInfo(): mixed
```









**Return Value:**





---
### getDefaultOptions



```php
public CurlClient::getDefaultOptions(): mixed
```









**Return Value:**





---
### getUserAgentInfo



```php
public CurlClient::getUserAgentInfo(): mixed
```









**Return Value:**





---
### getEnablePersistentConnections



```php
public CurlClient::getEnablePersistentConnections(): bool
```









**Return Value:**





---
### setEnablePersistentConnections



```php
public CurlClient::setEnablePersistentConnections(bool $enable): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `enable` | **bool** |  |


**Return Value:**





---
### getEnableHttp2



```php
public CurlClient::getEnableHttp2(): bool
```









**Return Value:**





---
### setEnableHttp2



```php
public CurlClient::setEnableHttp2(bool $enable): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `enable` | **bool** |  |


**Return Value:**





---
### getRequestStatusCallback



```php
public CurlClient::getRequestStatusCallback(): null|callable
```









**Return Value:**





---
### setRequestStatusCallback

Sets a callback that is called after each request. The callback will
receive the following parameters:
<ol>
  <li>string $rbody The response body</li>
  <li>integer $rcode The response status code</li>
  <li>\Stripe\Util\CaseInsensitiveArray $rheaders The response headers</li>
  <li>integer $errno The curl error number</li>
  <li>string|null $message The curl error message</li>
  <li>boolean $shouldRetry Whether the request will be retried</li>
  <li>integer $numRetries The number of the retry attempt</li>
</ol>.

```php
public CurlClient::setRequestStatusCallback(null|callable $requestStatusCallback): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `requestStatusCallback` | **null|callable** |  |


**Return Value:**





---
### setTimeout



```php
public CurlClient::setTimeout(mixed $seconds): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `seconds` | **mixed** |  |


**Return Value:**





---
### setConnectTimeout



```php
public CurlClient::setConnectTimeout(mixed $seconds): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `seconds` | **mixed** |  |


**Return Value:**





---
### getTimeout



```php
public CurlClient::getTimeout(): mixed
```









**Return Value:**





---
### getConnectTimeout



```php
public CurlClient::getConnectTimeout(): mixed
```









**Return Value:**





---
### constructRequest



```php
private CurlClient::constructRequest(mixed $method, mixed $absUrl, mixed $headers, mixed $params, mixed $hasFile): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **mixed** |  |
| `absUrl` | **mixed** |  |
| `headers` | **mixed** |  |
| `params` | **mixed** |  |
| `hasFile` | **mixed** |  |


**Return Value:**





---
### request



```php
public CurlClient::request(mixed $method, mixed $absUrl, mixed $headers, mixed $params, mixed $hasFile): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **mixed** | The HTTP method being used |
| `absUrl` | **mixed** | The URL being requested, including domain and protocol |
| `headers` | **mixed** | Headers to be used in the request (full strings, not KV pairs) |
| `params` | **mixed** | KV pairs for parameters. Can be nested for arrays and hashes |
| `hasFile` | **mixed** | Whether or not $params references a file (via an @ prefix or<br />CURLFile) |


**Return Value:**

an array whose first element is raw request body, second
element is HTTP status code and third array of HTTP headers



---
### requestStream



```php
public CurlClient::requestStream(mixed $method, mixed $absUrl, mixed $headers, mixed $params, mixed $hasFile, mixed $readBodyChunk): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **mixed** | The HTTP method being used |
| `absUrl` | **mixed** | The URL being requested, including domain and protocol |
| `headers` | **mixed** | Headers to be used in the request (full strings, not KV pairs) |
| `params` | **mixed** | KV pairs for parameters. Can be nested for arrays and hashes |
| `hasFile` | **mixed** | Whether or not $params references a file (via an @ prefix or<br />CURLFile) |
| `readBodyChunk` | **mixed** |  |


**Return Value:**

an array whose first element is raw request body, second
element is HTTP status code and third array of HTTP headers



---
### useHeadersToDetermineWriteCallback

Curl permits sending \CURLOPT_HEADERFUNCTION, which is called with lines
from the header and \CURLOPT_WRITEFUNCTION, which is called with bytes
from the body. You usually want to handle the body differently depending
on what was in the header.

```php
private CurlClient::useHeadersToDetermineWriteCallback(array $opts, callable $determineWriteCallback): array
```

This function makes it easier to specify different callbacks depending
on the contents of the heeder. After the header has been completely read
and the body begins to stream, it will call $determineWriteCallback with
the array of headers. $determineWriteCallback should, based on the
headers it receives, return a "writeCallback" that describes what to do
with the incoming HTTP response body.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `opts` | **array** |  |
| `determineWriteCallback` | **callable** |  |


**Return Value:**





---
### parseLineIntoHeaderArray



```php
private static CurlClient::parseLineIntoHeaderArray(mixed $line, mixed& $headers): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `line` | **mixed** |  |
| `headers` | **mixed** |  |


**Return Value:**





---
### executeStreamingRequestWithRetries

Like `executeRequestWithRetries` except:
  1. Does not buffer the body of a successful (status code < 300)
     response into memory -- instead, calls the caller-provided
     $readBodyChunk with each chunk of incoming data.

```php
public CurlClient::executeStreamingRequestWithRetries(array $opts, string $absUrl, callable $readBodyChunk): array
```

2. Does not retry if a network error occurs while streaming the
body of a successful response.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `opts` | **array** | cURL options |
| `absUrl` | **string** |  |
| `readBodyChunk` | **callable** |  |


**Return Value:**





---
### executeRequestWithRetries



```php
public CurlClient::executeRequestWithRetries(array $opts, string $absUrl): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `opts` | **array** | cURL options |
| `absUrl` | **string** |  |


**Return Value:**





---
### handleCurlError



```php
private CurlClient::handleCurlError(string $url, int $errno, string $message, int $numRetries): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | **string** |  |
| `errno` | **int** |  |
| `message` | **string** |  |
| `numRetries` | **int** |  |


**Return Value:**





---
### shouldRetry

Checks if an error is a problem that we should retry on. This includes both
socket errors that may represent an intermittent problem and some special
HTTP statuses.

```php
private CurlClient::shouldRetry(int $errno, int $rcode, array|\Stripe\Util\CaseInsensitiveArray $rheaders, int $numRetries): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `errno` | **int** |  |
| `rcode` | **int** |  |
| `rheaders` | **array|\Stripe\Util\CaseInsensitiveArray** |  |
| `numRetries` | **int** |  |


**Return Value:**





---
### sleepTime

Provides the number of seconds to wait before retrying a request.

```php
private CurlClient::sleepTime(int $numRetries, array|\Stripe\Util\CaseInsensitiveArray $rheaders): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `numRetries` | **int** |  |
| `rheaders` | **array|\Stripe\Util\CaseInsensitiveArray** |  |


**Return Value:**





---
### initCurlHandle

Initializes the curl handle. If already initialized, the handle is closed first.

```php
private CurlClient::initCurlHandle(): mixed
```









**Return Value:**





---
### closeCurlHandle

Closes the curl handle if initialized. Do nothing if already closed.

```php
private CurlClient::closeCurlHandle(): mixed
```









**Return Value:**





---
### resetCurlHandle

Resets the curl handle. If the handle is not already initialized, or if persistent
connections are disabled, the handle is reinitialized instead.

```php
private CurlClient::resetCurlHandle(): mixed
```









**Return Value:**





---
### canSafelyUseHttp2

Indicates whether it is safe to use HTTP/2 or not.

```php
private CurlClient::canSafelyUseHttp2(): bool
```









**Return Value:**





---
### hasHeader

Checks if a list of headers contains a specific header name.

```php
private CurlClient::hasHeader(string[] $headers, string $name): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `headers` | **string[]** |  |
| `name` | **string** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
