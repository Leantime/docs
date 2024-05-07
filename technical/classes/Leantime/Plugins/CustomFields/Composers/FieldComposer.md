---
title: \Leantime\Plugins\CustomFields\Composers\FieldComposer
footer: false
---

# FieldComposer





* Full name: `\Leantime\Plugins\CustomFields\Composers\FieldComposer`
* Parent class: [\Leantime\Core\Composer](../../../Core/Composer.md)



## Methods

### with

Prepare data to be used in view.

```php
public FieldComposer::with(): array
```









**Return Value:**





---
### prepareField

Prepare field to be used in view.

```php
public FieldComposer::prepareField(mixed $field): \Leantime\Plugins\CustomFields\Models\CustomField
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |


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
