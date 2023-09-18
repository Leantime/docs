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
public Goalcanvas::getChildGoalsForReporting(mixed $parentId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **mixed** |  |


**Return Value:**





---
### getChildrenbyKPI



```php
public Goalcanvas::getChildrenbyKPI(mixed $parentId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **mixed** |  |


**Return Value:**





---
### getParentKPIs



```php
public Goalcanvas::getParentKPIs(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
