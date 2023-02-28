---
title: \leantime\domain\services\sprints
footer: false
---

# sprints





* Full name: `\leantime\domain\services\sprints`



## Methods

### __construct



```php
public sprints::__construct(): mixed
```









**Return Value:**





---
### getSprint



```php
public sprints::getSprint(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getCurrentSprintId

getCurrentSprintId returns the ID of the current sprint in the project provided

```php
public sprints::getCurrentSprintId( $projectId): int|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getUpcomingSprint



```php
public sprints::getUpcomingSprint(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllSprints



```php
public sprints::getAllSprints(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllFutureSprints



```php
public sprints::getAllFutureSprints(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### addSprint



```php
public sprints::addSprint(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### editSprint



```php
public sprints::editSprint(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### getSprintBurndown



```php
public sprints::getSprintBurndown(mixed $sprint): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **mixed** |  |


**Return Value:**





---
### getCummulativeReport



```php
public sprints::getCummulativeReport(mixed $project): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
