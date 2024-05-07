---
title: \Stripe\HttpClient\StreamingClientInterface
footer: false
---

# StreamingClientInterface





* Full name: `\Stripe\HttpClient\StreamingClientInterface`
* Parent interface: [](../../../classes.md)



## Methods

### requestStream



```php
public StreamingClientInterface::requestStream(string $method, string $absUrl, array $headers, array $params, bool $hasFile, callable $readBodyChunkCallable): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** | The HTTP method being used |
| `absUrl` | **string** | The URL being requested, including domain and protocol |
| `headers` | **array** | Headers to be used in the request (full strings, not KV pairs) |
| `params` | **array** | KV pairs for parameters. Can be nested for arrays and hashes |
| `hasFile` | **bool** | Whether or not $params references a file (via an @ prefix or<br />CURLFile) |
| `readBodyChunkCallable` | **callable** | a function that will be called with chunks of bytes from the body if the request is successful |


**Return Value:**

an array whose first element is raw request body, second
element is HTTP status code and third array of HTTP headers



---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
