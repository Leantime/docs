---
title: \Leantime\Views\Composers\Footer
footer: false
---

# Footer




`\Leantime\Views\Composers\Footer`

* Parent class: [\Leantime\Core\Controller\Composer](../../Core/Controller/Composer.md)



## Methods

### init



```php
public Footer::init(\Leantime\Core\Configuration\AppSettings $settings): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settings` | **\Leantime\Core\Configuration\AppSettings** |  |


**Return Value:**





---
### with

Data to be passed to view before rendering

```php
public Footer::with(): array
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
