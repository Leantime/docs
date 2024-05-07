---
title: \Leantime\Plugins\CustomFields\Middleware\Install
footer: false
---

# Install





* Full name: `\Leantime\Plugins\CustomFields\Middleware\Install`



## Methods

### __construct



```php
public Install::__construct(\Leantime\Plugins\CustomFields\Services\CustomFields $customFieldsSrv, \Leantime\Core\Environment $config): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `customFieldsSrv` | **\Leantime\Plugins\CustomFields\Services\CustomFields** |  |
| `config` | **\Leantime\Core\Environment** |  |


**Return Value:**





---
### handle

Install the custom fields plugin DB if necessary.

```php
public Install::handle(\Leantime\Core\IncomingRequest $request, \Closure $next): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Leantime\Core\IncomingRequest** |  |
| `next` | **\Closure** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
