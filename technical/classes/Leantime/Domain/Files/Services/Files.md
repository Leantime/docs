---
title: \Leantime\Domain\Files\Services\Files
footer: false
---

# Files




`\Leantime\Domain\Files\Services\Files`




## Methods

### __construct



```php
public Files::__construct(\Leantime\Domain\Files\Repositories\Files $fileRepository, \Leantime\Domain\Projects\Services\Projects $projectService, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fileRepository` | **\Leantime\Domain\Files\Repositories\Files** |  |
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### getFilesByModule



```php
public Files::getFilesByModule(string $module = &#039;&#039;,  $entityId = null,  $userId = null): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** |  |
| `entityId` | **** |  |
| `userId` | **** |  |


**Return Value:**





---
### uploadFile



```php
public Files::uploadFile( $file,  $module,  $entityId,  $entity): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **** |  |
| `module` | **** |  |
| `entityId` | **** |  |
| `entity` | **** |  |


**Return Value:**





---
### deleteFile



```php
public Files::deleteFile( $fileId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fileId` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
