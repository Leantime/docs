---
title: \Leantime\Plugins\Notes\Repositories\Notes
footer: false
---

# Notes





* Full name: `\Leantime\Plugins\Notes\Repositories\Notes`



## Methods

### __construct

__construct - get db connection

```php
public Notes::__construct(\Leantime\Core\Db $db): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getSingleCanvas



```php
public Notes::getSingleCanvas( $canvasId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `canvasId` | **** |  |


**Return Value:**





---
### getAllCanvas



```php
public Notes::getAllCanvas(int $authorId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `authorId` | **int** |  |


**Return Value:**





---
### deleteCanvas



```php
public Notes::deleteCanvas( $id, mixed $authorId): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `authorId` | **mixed** |  |


**Return Value:**





---
### addCanvas



```php
public Notes::addCanvas( $values): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### updateCanvas



```php
public Notes::updateCanvas( $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### editCanvasItem



```php
public Notes::editCanvasItem( $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### patchCanvasItem



```php
public Notes::patchCanvasItem( $id,  $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `params` | **** |  |


**Return Value:**





---
### updateSorting



```php
public Notes::updateSorting( $sortingArray): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sortingArray` | **** |  |


**Return Value:**





---
### getCanvasItemsByNotebookId



```php
public Notes::getCanvasItemsByNotebookId( $id, mixed $sortBy = &quot;sortindex&quot;): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `sortBy` | **mixed** |  |


**Return Value:**





---
### getSingleCanvasItem



```php
public Notes::getSingleCanvasItem( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### addCanvasItem



```php
public Notes::addCanvasItem( $values): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### delCanvasItem



```php
public Notes::delCanvasItem( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
