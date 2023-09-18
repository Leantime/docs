---
title: \Leantime\Domain\Sprints\Repositories\Sprints
footer: false
---

# Sprints





* Full name: `\Leantime\Domain\Sprints\Repositories\Sprints`



## Methods

### __construct

__construct - get database connection

```php
public Sprints::__construct(\Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getSprint

getSprint - get single sprint

```php
public Sprints::getSprint(mixed $id): array
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
public Sprints::getAllSprints(mixed $projectId): array
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
public Sprints::getAllFutureSprints(mixed $projectId): array
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
public Sprints::getCurrentSprint(mixed $projectId): mixed
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
public Sprints::getUpcomingSprint(mixed $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### addSprint



```php
public Sprints::addSprint(mixed $sprint): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **mixed** |  |


**Return Value:**





---
### editSprint



```php
public Sprints::editSprint(mixed $sprint): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **mixed** |  |


**Return Value:**





---
### delSprint



```php
public Sprints::delSprint(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
