---
title: \Leantime\Domain\Ideas\Repositories\Ideas
footer: false
---

# Ideas





* Full name: `\Leantime\Domain\Ideas\Repositories\Ideas`



## Methods

### __construct

__construct - get db connection

```php
public Ideas::__construct(\Leantime\Core\Db $db, \Leantime\Core\Language $language): \Leantime\Domain\Ideas\Repositories\unknown_type
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### getCanvasLabels



```php
public Ideas::getCanvasLabels(): mixed
```









**Return Value:**





---
### getAllCanvas



```php
public Ideas::getAllCanvas(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### deleteCanvas



```php
public Ideas::deleteCanvas(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addCanvas



```php
public Ideas::addCanvas(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### updateCanvas



```php
public Ideas::updateCanvas(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### editCanvasItem



```php
public Ideas::editCanvasItem(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### patchCanvasItem



```php
public Ideas::patchCanvasItem(mixed $id, mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `params` | **mixed** |  |


**Return Value:**





---
### updateIdeaSorting



```php
public Ideas::updateIdeaSorting(mixed $sortingArray): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sortingArray` | **mixed** |  |


**Return Value:**





---
### getCanvasItemsById



```php
public Ideas::getCanvasItemsById(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getSingleCanvasItem



```php
public Ideas::getSingleCanvasItem(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addCanvasItem



```php
public Ideas::addCanvasItem(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### delCanvasItem



```php
public Ideas::delCanvasItem(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### updateIdeaStatus



```php
public Ideas::updateIdeaStatus(mixed $ideaId, mixed $status): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ideaId` | **mixed** |  |
| `status` | **mixed** |  |


**Return Value:**





---
### getNumberOfIdeas



```php
public Ideas::getNumberOfIdeas(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getNumberOfBoards



```php
public Ideas::getNumberOfBoards(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### bulkUpdateIdeaStatus



```php
public Ideas::bulkUpdateIdeaStatus(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
