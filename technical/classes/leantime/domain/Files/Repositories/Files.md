---
title: \Leantime\Domain\Files\Repositories\Files
footer: false
---

# Files





* Full name: `\Leantime\Domain\Files\Repositories\Files`



## Methods

### __construct



```php
public Files::__construct(\Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getModules



```php
public Files::getModules(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addFile



```php
public Files::addFile(mixed $values, mixed $module): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |
| `module` | **mixed** |  |


**Return Value:**





---
### getFile



```php
public Files::getFile(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getFiles



```php
public Files::getFiles(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### getFolders



```php
public Files::getFolders(mixed $module): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **mixed** |  |


**Return Value:**





---
### getFilesByModule



```php
public Files::getFilesByModule(mixed $module = &#039;&#039;, mixed $moduleId = null, mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **mixed** |  |
| `moduleId` | **mixed** |  |
| `userId` | **mixed** |  |


**Return Value:**





---
### deleteFile



```php
public Files::deleteFile(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### upload



```php
public Files::upload(mixed $file, mixed $module, mixed $moduleId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **mixed** |  |
| `module` | **mixed** |  |
| `moduleId` | **mixed** |  |


**Return Value:**





---
### uploadCloud



```php
public Files::uploadCloud(mixed $name, mixed $url, mixed $module, mixed $moduleId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |
| `url` | **mixed** |  |
| `module` | **mixed** |  |
| `moduleId` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
