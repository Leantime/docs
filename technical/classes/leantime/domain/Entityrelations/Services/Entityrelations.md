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
public Entityrelations::saveRelationship(mixed $entityA, mixed $entityAType, mixed $relationship, mixed $entityB, mixed $entityBType, mixed $meta = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `entityA` | **mixed** |  |
| `entityAType` | **mixed** |  |
| `relationship` | **mixed** |  |
| `entityB` | **mixed** |  |
| `entityBType` | **mixed** |  |
| `meta` | **mixed** |  |


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
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
