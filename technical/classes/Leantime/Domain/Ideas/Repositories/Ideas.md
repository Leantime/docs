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
public Ideas::__construct(\Leantime\Core\Db $db, \Leantime\Core\Language $language): void
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
public Ideas::getCanvasLabels(): array|mixed
```









**Return Value:**





---
### getAllCanvas



```php
public Ideas::getAllCanvas( $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### deleteCanvas



```php
public Ideas::deleteCanvas( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### addCanvas



```php
public Ideas::addCanvas( $values): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### updateCanvas



```php
public Ideas::updateCanvas( $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### editCanvasItem



```php
public Ideas::editCanvasItem( $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### patchCanvasItem



```php
public Ideas::patchCanvasItem( $id,  $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `params` | **** |  |


**Return Value:**





---
### updateIdeaSorting



```php
public Ideas::updateIdeaSorting( $sortingArray): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sortingArray` | **** |  |


**Return Value:**





---
### getCanvasItemsById



```php
public Ideas::getCanvasItemsById( $id): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getSingleCanvasItem



```php
public Ideas::getSingleCanvasItem( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### addCanvasItem



```php
public Ideas::addCanvasItem( $values): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### delCanvasItem



```php
public Ideas::delCanvasItem( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### updateIdeaStatus



```php
public Ideas::updateIdeaStatus( $ideaId,  $status): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ideaId` | **** |  |
| `status` | **** |  |


**Return Value:**





---
### getNumberOfIdeas



```php
public Ideas::getNumberOfIdeas( $projectId = null): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getNumberOfBoards



```php
public Ideas::getNumberOfBoards( $projectId = null): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### bulkUpdateIdeaStatus



```php
public Ideas::bulkUpdateIdeaStatus( $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
