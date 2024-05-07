---
title: \Leantime\Domain\Entityrelations\Services\Entityrelations
footer: false
---

# Entityrelations





* Full name: `\Leantime\Domain\Entityrelations\Services\Entityrelations`



## Methods

### __construct

Class constructor.

```php
public Entityrelations::__construct(\Leantime\Domain\Entityrelations\Repositories\Entityrelations $entityRelationshipsRepo, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `entityRelationshipsRepo` | **\Leantime\Domain\Entityrelations\Repositories\Entityrelations** | The entity relationships repository. |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** | The settings repository. |


**Return Value:**





---
### saveRelationship



```php
public Entityrelations::saveRelationship( $entityA,  $entityAType,  $relationship,  $entityB,  $entityBType, string $meta = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `entityA` | **** |  |
| `entityAType` | **** |  |
| `relationship` | **** |  |
| `entityB` | **** |  |
| `entityBType` | **** |  |
| `meta` | **string** |  |


**Return Value:**





---
### getRelationshipByEntity



```php
public Entityrelations::getRelationshipByEntity(string $entitySide, int $entity, string $entityType, string $relationship): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `entitySide` | **string** |  |
| `entity` | **int** |  |
| `entityType` | **string** |  |
| `relationship` | **string** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
