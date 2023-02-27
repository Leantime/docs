---
title: \leantime\domain\repositories\sprints
footer: false
---

# sprints





* Full name: `\leantime\domain\repositories\sprints`



## Methods

### __construct

__construct - get database connection

```php
public sprints::__construct(): mixed
```









**Return Value:**





---
### getSprint

getSprint - get single sprint

```php
public sprints::getSprint(mixed $id): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getAllSprints

getAllSprints - get all sprints for a project

```php
public sprints::getAllSprints(mixed $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllFutureSprints

getAllSprints - get all sprints for a project

```php
public sprints::getAllFutureSprints(mixed $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getCurrentSprint

getCurrentSprintId - get current sprint for a project

```php
public sprints::getCurrentSprint(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getUpcomingSprint

getUpcomingSprint - gets the next upcoming sprint

```php
public sprints::getUpcomingSprint(mixed $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### addSprint



```php
public sprints::addSprint(mixed $sprint): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **mixed** |  |


**Return Value:**





---
### editSprint



```php
public sprints::editSprint(mixed $sprint): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **mixed** |  |


**Return Value:**





---
### delSprint



```php
public sprints::delSprint(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
