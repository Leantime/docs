---
title: \Leantime\Plugins\CustomFields\Middleware\GetLanguageAssets
footer: false
---

# GetLanguageAssets





* Full name: `\Leantime\Plugins\CustomFields\Middleware\GetLanguageAssets`



## Methods

### __construct



```php
public GetLanguageAssets::__construct(\Leantime\Core\Language $language, \Leantime\Core\Environment $config): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `language` | **\Leantime\Core\Language** |  |
| `config` | **\Leantime\Core\Environment** |  |


**Return Value:**





---
### handle

Install the custom fields plugin DB if necessary.

```php
public GetLanguageAssets::handle(\Leantime\Core\IncomingRequest $request, \Closure $next): \Symfony\Component\HttpFoundation\Response
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
