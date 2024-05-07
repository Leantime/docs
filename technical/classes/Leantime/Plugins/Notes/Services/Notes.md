---
title: \Leantime\Plugins\Notes\Services\Notes
footer: false
---

# Notes





* Full name: `\Leantime\Plugins\Notes\Services\Notes`



## Methods

### __construct

__construct - get database connection

```php
public Notes::__construct(\Leantime\Plugins\Notes\Repositories\Notes $notesRepo, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notesRepo` | **\Leantime\Plugins\Notes\Repositories\Notes** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### getAllCanvas



```php
public Notes::getAllCanvas(int $authorId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `authorId` | **int** |  |


**Return Value:**





---
### getSingleCanvas



```php
public Notes::getSingleCanvas(int $canvasId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `canvasId` | **int** |  |


**Return Value:**





---
### deleteCanvas



```php
public Notes::deleteCanvas(int $id, int $authorId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |
| `authorId` | **int** |  |


**Return Value:**





---
### addCanvas



```php
public Notes::addCanvas(\Leantime\Plugins\Notes\Models\Notebook $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **\Leantime\Plugins\Notes\Models\Notebook** |  |


**Return Value:**





---
### updateCanvas



```php
public Notes::updateCanvas(\Leantime\Plugins\Notes\Models\Notebook $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **\Leantime\Plugins\Notes\Models\Notebook** |  |


**Return Value:**





---
### editCanvasItem



```php
public Notes::editCanvasItem(\Leantime\Plugins\Notes\Models\Note $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **\Leantime\Plugins\Notes\Models\Note** |  |


**Return Value:**





---
### patchCanvasItem



```php
public Notes::patchCanvasItem(mixed $id, mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `params` | **mixed** |  |


**Return Value:**





---
### updateSorting



```php
public Notes::updateSorting(mixed $sortingArray): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sortingArray` | **mixed** |  |


**Return Value:**





---
### getCanvasItemsByNotebookId



```php
public Notes::getCanvasItemsByNotebookId(mixed $id, mixed $sortBy = &quot;sortIndex&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `sortBy` | **mixed** |  |


**Return Value:**





---
### getSingleCanvasItem



```php
public Notes::getSingleCanvasItem(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addCanvasItem



```php
public Notes::addCanvasItem(\Leantime\Plugins\Notes\Models\Note $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **\Leantime\Plugins\Notes\Models\Note** |  |


**Return Value:**





---
### delCanvasItem



```php
public Notes::delCanvasItem(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getCurrentNotebook



```php
public Notes::getCurrentNotebook(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
