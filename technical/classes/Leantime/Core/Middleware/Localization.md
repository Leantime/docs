---
title: \Leantime\Core\Middleware\Localization
footer: false
---

# Localization





* Full name: `\Leantime\Core\Middleware\Localization`



## Methods

### __construct



```php
public Localization::__construct(\Leantime\Domain\Setting\Services\Setting $settings, \Leantime\Core\Configuration\Environment $config, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settings` | **\Leantime\Domain\Setting\Services\Setting** |  |
| `config` | **\Leantime\Core\Configuration\Environment** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### handle

Handle the incoming request.

```php
public Localization::handle(\Leantime\Core\Http\IncomingRequest $request, \Closure $next): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\Http\IncomingRequest** | The incoming request object. |
| `next` | **\Closure** | The closure to execute next. |


**Return Value:**

The response object.



---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
