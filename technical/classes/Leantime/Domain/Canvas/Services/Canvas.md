---
title: \Leantime\Domain\Canvas\Services\Canvas
footer: false
---

# Canvas





* Full name: `\Leantime\Domain\Canvas\Services\Canvas`



## Methods

### import

import - Import canvas from XML file

```php
public Canvas::import(string $filename, string $canvasName, int $projectId, int $authorId): bool|int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filename` | **string** | File to import |
| `canvasName` | **string** |  |
| `projectId` | **int** | Project identifier |
| `authorId` | **int** |  |


**Return Value:**

False if import failed and the id of the newly created canvas otherwise



---
### getBoardProgress

getBoardProgress - gets the progress of canvas types. counts items in each box-type and calculates percent done if each box type has at least 1 item.

```php
public Canvas::getBoardProgress(string $projectId = &#039;&#039;, array $boards = array()): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **string** | projectId (optional) |
| `boards` | **array** | Array of project board types |


**Return Value:**

List of boards with a progress percentage



---
### getLastUpdatedCanvas

getLastUpdatedCanvas - gets the list of canvas boards ordered by last updated item

```php
public Canvas::getLastUpdatedCanvas(string $projectId = &#039;&#039;, array $boards = array()): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **string** | projectId (optional) |
| `boards` | **array** | Array of project board types |


**Return Value:**

List of boards with a progress percentage



---


---
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
