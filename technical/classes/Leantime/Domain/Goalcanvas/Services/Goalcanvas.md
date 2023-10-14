---
title: \Leantime\Domain\Goalcanvas\Services\Goalcanvas
footer: false
---

# Goalcanvas





* Full name: `\Leantime\Domain\Goalcanvas\Services\Goalcanvas`



## Methods

### __construct



```php
public Goalcanvas::__construct(\Leantime\Domain\Goalcanvas\Repositories\Goalcanvas $goalRepository): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `goalRepository` | **\Leantime\Domain\Goalcanvas\Repositories\Goalcanvas** |  |


**Return Value:**





---
### getCanvasItemsById



```php
public Goalcanvas::getCanvasItemsById(int $id): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### getChildGoalsForReporting



```php
public Goalcanvas::getChildGoalsForReporting( $parentId): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **** |  |


**Return Value:**





---
### getChildrenbyKPI



```php
public Goalcanvas::getChildrenbyKPI( $parentId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **** |  |


**Return Value:**





---
### getParentKPIs



```php
public Goalcanvas::getParentKPIs( $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
