---
title: \Leantime\Domain\Files\Repositories\Files
footer: false
---

# Files




`\Leantime\Domain\Files\Repositories\Files`




## Methods

### __construct



```php
public Files::__construct(\Leantime\Core\Db\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |


**Return Value:**





---
### getModules



```php
public Files::getModules( $id): string[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### addFile



```php
public Files::addFile( $values,  $module): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `module` | **** |  |


**Return Value:**





---
### getFile



```php
public Files::getFile( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getFiles



```php
public Files::getFiles(int $userId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |


**Return Value:**





---
### getFolders



```php
public Files::getFolders( $module): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **** |  |


**Return Value:**





---
### getFilesByModule



```php
public Files::getFilesByModule(string $module = &#039;&#039;, null $moduleId = null, int|null $userId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** |  |
| `moduleId` | **null** |  |
| `userId` | **int|null** |  |


**Return Value:**





---
### deleteFile



```php
public Files::deleteFile( $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### upload



```php
public Files::upload( $file,  $module,  $moduleId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **** |  |
| `module` | **** |  |
| `moduleId` | **** |  |


**Return Value:**





---
### uploadCloud



```php
public Files::uploadCloud( $name,  $url,  $module,  $moduleId): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **** |  |
| `url` | **** |  |
| `module` | **** |  |
| `moduleId` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
