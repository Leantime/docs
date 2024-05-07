---
title: \Stripe\HttpClient\ClientInterface
footer: false
---

# ClientInterface





* Full name: `\Stripe\HttpClient\ClientInterface`
* Parent interface: [](../../../classes.md)



## Methods

### request



```php
public ClientInterface::request(string $method, string $absUrl, array $headers, array $params, bool $hasFile): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** | The HTTP method being used |
| `absUrl` | **string** | The URL being requested, including domain and protocol |
| `headers` | **array** | Headers to be used in the request (full strings, not KV pairs) |
| `params` | **array** | KV pairs for parameters. Can be nested for arrays and hashes |
| `hasFile` | **bool** | Whether or not $params references a file (via an @ prefix or<br />CURLFile) |


**Return Value:**

an array whose first element is raw request body, second
element is HTTP status code and third array of HTTP headers



---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
