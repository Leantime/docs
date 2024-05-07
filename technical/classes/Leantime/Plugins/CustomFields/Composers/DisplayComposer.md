---
title: \Leantime\Plugins\CustomFields\Composers\DisplayComposer
footer: false
---

# DisplayComposer





* Full name: `\Leantime\Plugins\CustomFields\Composers\DisplayComposer`
* Parent class: [\Leantime\Core\Composer](../../../Core/Composer.md)



## Methods

### __construct



```php
public DisplayComposer::__construct(\Leantime\Domain\Projects\Services\Projects $projectsService, \Leantime\Plugins\CustomFields\Services\CustomFields $customFieldsService): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectsService` | **\Leantime\Domain\Projects\Services\Projects** |  |
| `customFieldsService` | **\Leantime\Plugins\CustomFields\Services\CustomFields** |  |


**Return Value:**





---
### with

Prepare data to be used in view.

```php
public DisplayComposer::with(): array
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
