---
title: \Leantime\Domain\Wiki\Repositories\Wiki
footer: false
---

# Wiki





* Full name: `\Leantime\Domain\Wiki\Repositories\Wiki`
* Parent class: [\Leantime\Domain\Canvas\Repositories\Canvas](../../Canvas/Repositories/Canvas.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Domain\Wiki\Repositories\Wiki::CANVAS_NAME`||&#039;wiki&#039;|

## Methods

### getArticle



```php
public Wiki::getArticle( $id,  $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `projectId` | **** |  |


**Return Value:**





---
### getAllProjectWikis



```php
public Wiki::getAllProjectWikis( $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getWiki



```php
public Wiki::getWiki( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getAllWikiHeadlines



```php
public Wiki::getAllWikiHeadlines( $canvasId,  $userId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `canvasId` | **** |  |
| `userId` | **** |  |


**Return Value:**





---
### createWiki



```php
public Wiki::createWiki( $wiki): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **** |  |


**Return Value:**





---
### updateWiki



```php
public Wiki::updateWiki( $wiki,  $wikiId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **** |  |
| `wikiId` | **** |  |


**Return Value:**





---
### createArticle



```php
public Wiki::createArticle(\Leantime\Domain\Wiki\Models\Article $article): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `article` | **\Leantime\Domain\Wiki\Models\Article** |  |


**Return Value:**





---
### updateArticle



```php
public Wiki::updateArticle(\Leantime\Domain\Wiki\Models\Article $article): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `article` | **\Leantime\Domain\Wiki\Models\Article** |  |


**Return Value:**





---
### delArticle



```php
public Wiki::delArticle( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### delWiki



```php
public Wiki::delWiki( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getNumberOfBoards



```php
public Wiki::getNumberOfBoards( $projectId = null): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getNumberOfCanvasItems



```php
public Wiki::getNumberOfCanvasItems( $projectId = null): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---


## Inherited methods

### __construct

__construct - get db connection

```php
public Canvas::__construct(\Leantime\Core\Db\Db $db, \Leantime\Core\Language $language, \Leantime\Domain\Tickets\Repositories\Tickets $ticketRepo): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |
| `language` | **\Leantime\Core\Language** |  |
| `ticketRepo` | **\Leantime\Domain\Tickets\Repositories\Tickets** |  |


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
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
