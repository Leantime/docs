---
title: \Leantime\Domain\Files\Services\Files
footer: false
---

# Files





* Full name: `\Leantime\Domain\Files\Services\Files`



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
public Files::getFilesByModule(mixed $module = &#039;&#039;, mixed $entityId = null, mixed $userId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **mixed** |  |
| `entityId` | **mixed** |  |
| `userId` | **mixed** |  |


**Return Value:**





---
### uploadFile



```php
public Files::uploadFile(mixed $file, mixed $module, mixed $entityId, mixed $entity): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **mixed** |  |
| `module` | **mixed** |  |
| `entityId` | **mixed** |  |
| `entity` | **mixed** |  |


**Return Value:**





---
### deleteFile



```php
public Files::deleteFile(mixed $fileId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fileId` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
