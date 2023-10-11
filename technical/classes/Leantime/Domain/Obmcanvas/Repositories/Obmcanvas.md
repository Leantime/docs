---
title: \Leantime\Domain\Obmcanvas\Repositories\Obmcanvas
footer: false
---

# Obmcanvas





* Full name: `\Leantime\Domain\Obmcanvas\Repositories\Obmcanvas`
* Parent class: [\Leantime\Domain\Canvas\Repositories\Canvas](../../Canvas/Repositories/Canvas.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Domain\Obmcanvas\Repositories\Obmcanvas::CANVAS_NAME`||&#039;obm&#039;|



## Inherited methods

### __construct

__construct - get db connection

```php
public Canvas::__construct(\Leantime\Core\Db $db, \Leantime\Core\Language $language): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### getIcon

getIcon() - Retrieve canvas icon

```php
public Canvas::getIcon(): string
```









**Return Value:**

Canvas icon



---
### getDisclaimer

getDisclaimer() - Retrieve disclaimer

```php
public Canvas::getDisclaimer(): string
```









**Return Value:**

Canvas disclaimer



---
### getCanvasTypes

getCanvasTypes() - Retrieve translated canvaas items

```php
public Canvas::getCanvasTypes(): array
```









**Return Value:**

Array of data



---
### getStatusLabels

getStatusLabels() - Retrieve translated status labels

```php
public Canvas::getStatusLabels(): array
```









**Return Value:**

Array of data



---
### getRelatesLabels

getRelatesLabels() - Retrieve translated relates labels

```php
public Canvas::getRelatesLabels(): array
```









**Return Value:**

Array of data



---
### getDataLabels

getDataLabels() - Retrieve translated data labels

```php
public Canvas::getDataLabels(): array
```









**Return Value:**

Array of data



---
### getAllCanvas



```php
public Canvas::getAllCanvas( $projectId,  $type = null): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |
| `type` | **** |  |


**Return Value:**





---
### getSingleCanvas



```php
public Canvas::getSingleCanvas( $canvasId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `canvasId` | **** |  |


**Return Value:**





---
### deleteCanvas



```php
public Canvas::deleteCanvas( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### addCanvas



```php
public Canvas::addCanvas( $values,  $type = null): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `type` | **** |  |


**Return Value:**





---
### updateCanvas



```php
public Canvas::updateCanvas( $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### editCanvasItem



```php
public Canvas::editCanvasItem( $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### patchCanvasItem



```php
public Canvas::patchCanvasItem( $id,  $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `params` | **** |  |


**Return Value:**





---
### getCanvasItemsById



```php
public Canvas::getCanvasItemsById( $id): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getCanvasItemsByKPI



```php
public Canvas::getCanvasItemsByKPI( $id): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getAllAvailableParents



```php
public Canvas::getAllAvailableParents( $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getAllAvailableKPIs



```php
public Canvas::getAllAvailableKPIs( $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getSingleCanvasItem



```php
public Canvas::getSingleCanvasItem( $id): false|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### addCanvasItem



```php
public Canvas::addCanvasItem( $values): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### delCanvasItem



```php
public Canvas::delCanvasItem( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getNumberOfCanvasItems



```php
public Canvas::getNumberOfCanvasItems( $projectId = null): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getNumberOfBoards



```php
public Canvas::getNumberOfBoards( $projectId = null): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### existCanvas

existCanvas - return if a canvas exists with a given title in the specified project

```php
public Canvas::existCanvas(int $projectId, string $canvasTitle): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | Project identifier |
| `canvasTitle` | **string** | Canvas title |


**Return Value:**

True if canvas exists



---
### copyCanvas



```php
public Canvas::copyCanvas(int $projectId, int $canvasId, int $authorId, string $canvasTitle): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `canvasId` | **int** |  |
| `authorId` | **int** |  |
| `canvasTitle` | **string** |  |


**Return Value:**





---
### mergeCanvas



```php
public Canvas::mergeCanvas(int $canvasId, string $mergeId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `canvasId` | **int** |  |
| `mergeId` | **string** |  |


**Return Value:**





---
### getCanvasProgressCount



```php
public Canvas::getCanvasProgressCount(int $projectId, array $boards): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `boards` | **array** |  |


**Return Value:**





---
### getLastUpdatedCanvas



```php
public Canvas::getLastUpdatedCanvas(int $projectId, array $boards): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `boards` | **array** |  |


**Return Value:**





---
### getTags



```php
public Canvas::getTags(int $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
