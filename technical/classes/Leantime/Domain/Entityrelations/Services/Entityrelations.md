---
title: \Leantime\Domain\Entityrelations\Services\Entityrelations
footer: false
---

# Entityrelations





* Full name: `\Leantime\Domain\Entityrelations\Services\Entityrelations`



## Methods

### __construct



```php
public Entityrelations::__construct(\Leantime\Domain\Entityrelations\Repositories\Entityrelations $entityRelationshipsRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `entityRelationshipsRepo` | **\Leantime\Domain\Entityrelations\Repositories\Entityrelations** |  |


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
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
