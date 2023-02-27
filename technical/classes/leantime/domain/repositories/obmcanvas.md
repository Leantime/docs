---
title: \leantime\domain\repositories\obmcanvas
footer: false
---

# obmcanvas





* Full name: `\leantime\domain\repositories\obmcanvas`
* Parent class: [\leantime\domain\repositories\canvas](./canvas.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\leantime\domain\repositories\obmcanvas::CANVAS_NAME`||&#039;obm&#039;|



## Inherited methods

### __construct

__construct - get db connection

```php
public canvas::__construct(): \leantime\domain\repositories\unknown_type
```









**Return Value:**





---
### getIcon

getIcon() - Retrieve canvas icon

```php
public canvas::getIcon(): string
```









**Return Value:**

Canvas icon



---
### getDisclaimer

getDisclaimer() - Retrieve disclaimer

```php
public canvas::getDisclaimer(): string
```









**Return Value:**

Canvas disclaimer



---
### getCanvasTypes

getCanvasTypes() - Retrieve translated canvaas items

```php
public canvas::getCanvasTypes(): array
```









**Return Value:**

Array of data



---
### getStatusLabels

getStatusLabels() - Retrieve translated status labels

```php
public canvas::getStatusLabels(): array
```









**Return Value:**

Array of data



---
### getRelatesLabels

getRelatesLabels() - Retrieve translated relates labels

```php
public canvas::getRelatesLabels(): array
```









**Return Value:**

Array of data



---
### getDataLabels

getDataLabels() - Retrieve translated data labels

```php
public canvas::getDataLabels(): array
```









**Return Value:**

Array of data



---
### getAllCanvas



```php
public canvas::getAllCanvas(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getSingleCanvas



```php
public canvas::getSingleCanvas(mixed $canvasId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `canvasId` | **mixed** |  |


**Return Value:**





---
### deleteCanvas



```php
public canvas::deleteCanvas(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addCanvas



```php
public canvas::addCanvas(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### updateCanvas



```php
public canvas::updateCanvas(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### editCanvasItem



```php
public canvas::editCanvasItem(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### patchCanvasItem



```php
public canvas::patchCanvasItem(mixed $id, mixed $params): mixed
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
public canvas::getCanvasItemsById(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getSingleCanvasItem



```php
public canvas::getSingleCanvasItem(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addCanvasItem



```php
public canvas::addCanvasItem(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### delCanvasItem



```php
public canvas::delCanvasItem(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getNumberOfCanvasItems



```php
public canvas::getNumberOfCanvasItems(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getNumberOfBoards



```php
public canvas::getNumberOfBoards(mixed $projectId = null): mixed
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
public canvas::existCanvas(int $projectId, string $canvasTitle): bool
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
public canvas::copyCanvas(int $projectId, int $canvasId, int $authorId, string $canvasTitle): int
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
public canvas::mergeCanvas(int $canvasId, string $mergeId): bool
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
public canvas::getCanvasProgressCount(int $projectId, array $boards): mixed
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
public canvas::getLastUpdatedCanvas(int $projectId, array $boards): mixed
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
public canvas::getTags(int $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
