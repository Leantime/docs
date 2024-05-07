---
title: \Leantime\Domain\Help\Composers\Helpermodal
footer: false
---

# Helpermodal





* Full name: `\Leantime\Domain\Help\Composers\Helpermodal`
* Parent class: [\Leantime\Core\Composer](../../../Core/Composer.md)



## Methods

### init



```php
public Helpermodal::init(\Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Domain\Help\Services\Helper $helperService): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `helperService` | **\Leantime\Domain\Help\Services\Helper** |  |


**Return Value:**





---
### with

Data to be passed to view before rendering

```php
public Helpermodal::with(): array
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
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
