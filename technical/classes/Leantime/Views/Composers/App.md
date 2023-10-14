---
title: \Leantime\Views\Composers\App
footer: false
---

# App





* Full name: `\Leantime\Views\Composers\App`
* Parent class: [\Leantime\Core\Composer](../../Core/Composer.md)



## Methods

### init



```php
public App::init(\Leantime\Domain\Menu\Repositories\Menu $menuRepo, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Core\Theme $themeCore, \Leantime\Core\Environment $config): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `menuRepo` | **\Leantime\Domain\Menu\Repositories\Menu** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `themeCore` | **\Leantime\Core\Theme** |  |
| `config` | **\Leantime\Core\Environment** |  |


**Return Value:**





---
### with

Data to be passed to view before rendering

```php
public App::with(): array
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
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
