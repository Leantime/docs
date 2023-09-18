---
title: \Leantime\Domain\Comments\Services\Comments
footer: false
---

# Comments





* Full name: `\Leantime\Domain\Comments\Services\Comments`



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
public Comments::getComments(mixed $module, mixed $entityId, mixed $commentOrder): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **mixed** |  |
| `entityId` | **mixed** |  |
| `commentOrder` | **mixed** |  |


**Return Value:**





---
### addComment



```php
public Comments::addComment(mixed $values, mixed $module, mixed $entityId, mixed $entity): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |
| `module` | **mixed** |  |
| `entityId` | **mixed** |  |
| `entity` | **mixed** |  |


**Return Value:**





---
### deleteComment



```php
public Comments::deleteComment(mixed $commentId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `commentId` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
