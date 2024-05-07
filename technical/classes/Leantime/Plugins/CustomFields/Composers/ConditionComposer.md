---
title: \Leantime\Plugins\CustomFields\Composers\ConditionComposer
footer: false
---

# ConditionComposer





* Full name: `\Leantime\Plugins\CustomFields\Composers\ConditionComposer`
* Parent class: [\Leantime\Core\Composer](../../../Core/Composer.md)



## Methods

### with

Prepare data to be used in view.

```php
public ConditionComposer::with(): array
```









**Return Value:**





---
### prepareCondition

Prepare field to be used in view.

```php
public ConditionComposer::prepareCondition(mixed $condition): \Leantime\Plugins\CustomFields\Models\CustomFieldCondition
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `condition` | **mixed** |  |


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
