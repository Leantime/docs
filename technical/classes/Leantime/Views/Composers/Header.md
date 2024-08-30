---
title: \Leantime\Views\Composers\Header
footer: false
---

# Header





* Full name: `\Leantime\Views\Composers\Header`
* Parent class: [\Leantime\Core\Controller\Composer](../../Core/Controller/Composer.md)



## Methods

### init



```php
public Header::init(\Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Core\Configuration\Environment $config, \Leantime\Core\Configuration\AppSettings $appSettings, \Leantime\Core\Theme $themeCore): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `config` | **\Leantime\Core\Configuration\Environment** |  |
| `appSettings` | **\Leantime\Core\Configuration\AppSettings** |  |
| `themeCore` | **\Leantime\Core\Theme** |  |


**Return Value:**





---
### with

Data to be passed to view before rendering

```php
public Header::with(): array
```









**Return Value:**





---


## Inherited methods

### compose

Compose the view before rendering.

```php
public Composer::compose(\Illuminate\View\View $view): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `view` | **\Illuminate\View\View** |  |


**Return Value:**





---
### merge

Data to be merged and passed to the view before rendering.

```php
protected Composer::merge(): array
```









**Return Value:**





---
### with

Data to be passed to view before rendering

```php
protected Composer::with(): array
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
