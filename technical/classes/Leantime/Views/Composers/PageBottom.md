---
title: \Leantime\Views\Composers\PageBottom
footer: false
---

# PageBottom





* Full name: `\Leantime\Views\Composers\PageBottom`
* Parent class: [\Leantime\Core\Composer](../../Core/Composer.md)



## Methods

### init



```php
public PageBottom::init(\Leantime\Core\AppSettings $settings, \Leantime\Core\Environment $environment): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settings` | **\Leantime\Core\AppSettings** |  |
| `environment` | **\Leantime\Core\Environment** |  |


**Return Value:**





---
### with

Data to be passed to view before rendering

```php
public PageBottom::with(): array
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
> Automatically generated from source code comments on 2024-05-08 using [phpDocumentor](http://www.phpdoc.org/)
