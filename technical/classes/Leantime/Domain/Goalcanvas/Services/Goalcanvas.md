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
### getGoalsByMilestone



```php
public Goalcanvas::getGoalsByMilestone(mixed $milestoneId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `milestoneId` | **mixed** |  |


**Return Value:**





---
### updateGoalboard



```php
public Goalcanvas::updateGoalboard(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### createGoalboard



```php
public Goalcanvas::createGoalboard(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### getSingleCanvas



```php
public Goalcanvas::getSingleCanvas(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
