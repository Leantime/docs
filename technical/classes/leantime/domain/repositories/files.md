---
title: \leantime\domain\repositories\files
footer: false
---

# files





* Full name: `\leantime\domain\repositories\files`



## Methods

### __construct



```php
public files::__construct(): mixed
```









**Return Value:**





---
### getModules



```php
public files::getModules(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addFile



```php
public files::addFile(mixed $values, mixed $module): mixed
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
public files::getFile(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getFiles



```php
public files::getFiles(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### getFolders



```php
public files::getFolders(mixed $module): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **mixed** |  |


**Return Value:**





---
### getFilesByModule



```php
public files::getFilesByModule(mixed $module = &#039;&#039;, mixed $moduleId = null, mixed $userId): mixed
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
public files::deleteFile(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### upload



```php
public files::upload(mixed $file, mixed $module, mixed $moduleId): mixed
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
public files::uploadCloud(mixed $name, mixed $url, mixed $module, mixed $moduleId): mixed
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
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
