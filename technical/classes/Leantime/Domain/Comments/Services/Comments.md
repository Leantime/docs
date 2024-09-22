---
title: \Leantime\Domain\Comments\Services\Comments
footer: false
---

# Comments




`\Leantime\Domain\Comments\Services\Comments`




## Methods

### __construct



```php
public Comments::__construct(\Leantime\Domain\Comments\Repositories\Comments $commentRepository, \Leantime\Domain\Projects\Services\Projects $projectService, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `commentRepository` | **\Leantime\Domain\Comments\Repositories\Comments** |  |
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### getComments



```php
public Comments::getComments( $module,  $entityId, int $commentOrder): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **** |  |
| `entityId` | **** |  |
| `commentOrder` | **int** |  |


**Return Value:**





---
### addComment



```php
public Comments::addComment( $values,  $module,  $entityId,  $entity): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `module` | **** |  |
| `entityId` | **** |  |
| `entity` | **** |  |


**Return Value:**





---
### editComment



```php
public Comments::editComment( $values,  $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `id` | **** |  |


**Return Value:**





---
### deleteComment



```php
public Comments::deleteComment( $commentId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `commentId` | **** |  |


**Return Value:**





---
### pollComments



```php
public Comments::pollComments(?int $projectId = null, ?int $moduleId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** | Project ID |
| `moduleId` | **?int** | Id of the entity to pull comments from |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
