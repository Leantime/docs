---
title: \Leantime\Plugins\ApiRateLimiter\Middleware\ApiRateLimiter
footer: false
---

# ApiRateLimiter

Class ApiRateLimiter

This class is responsible for rate limiting API requests.

* Full name: `\Leantime\Plugins\ApiRateLimiter\Middleware\ApiRateLimiter`



## Methods

### handle

Handle the incoming request.

```php
public ApiRateLimiter::handle(\Leantime\Core\IncomingRequest $request, \Closure $next): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\IncomingRequest** | The incoming request object. |
| `next` | **\Closure** | The next middleware closure. |


**Return Value:**

The response object.



---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
