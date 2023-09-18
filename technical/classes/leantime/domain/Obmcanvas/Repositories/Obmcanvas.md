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
public Canvas::__construct(\Leantime\Core\Db $db, \Leantime\Core\Language $language): \Leantime\Domain\Canvas\Repositories\unknown_type
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
public Canvas::getAllCanvas(mixed $projectId, mixed $type = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |
| `type` | **mixed** |  |


**Return Value:**





---
### getSingleCanvas



```php
public Canvas::getSingleCanvas(mixed $canvasId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `canvasId` | **mixed** |  |


**Return Value:**





---
### deleteCanvas



```php
public Canvas::deleteCanvas(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addCanvas



```php
public Canvas::addCanvas(mixed $values, mixed $type = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |
| `type` | **mixed** |  |


**Return Value:**





---
### updateCanvas



```php
public Canvas::updateCanvas(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### editCanvasItem



```php
public Canvas::editCanvasItem(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### patchCanvasItem



```php
public Canvas::patchCanvasItem(mixed $id, mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `params` | **mixed** |  |


**Return Value:**





---
### getCanvasItemsById



```php
public Canvas::getCanvasItemsById(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getCanvasItemsByKPI



```php
public Canvas::getCanvasItemsByKPI(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getAllAvailableParents



```php
public Canvas::getAllAvailableParents(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllAvailableKPIs



```php
public Canvas::getAllAvailableKPIs(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getSingleCanvasItem



```php
public Canvas::getSingleCanvasItem(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addCanvasItem



```php
public Canvas::addCanvasItem(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### delCanvasItem



```php
public Canvas::delCanvasItem(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getNumberOfCanvasItems



```php
public Canvas::getNumberOfCanvasItems(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getNumberOfBoards



```php
public Canvas::getNumberOfBoards(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


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
public Canvas::getCanvasProgressCount(int $projectId, array $boards): mixed
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
public Canvas::getLastUpdatedCanvas(int $projectId, array $boards): mixed
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
public Canvas::getTags(int $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
