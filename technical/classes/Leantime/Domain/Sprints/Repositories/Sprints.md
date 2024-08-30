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
public Sprints::__construct(\Leantime\Core\Db\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |


**Return Value:**





---
### getSprint

getSprint - get single sprint

```php
public Sprints::getSprint(int $id): \Leantime\Domain\Sprints\Models\Sprints|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### getAllSprints

getAllSprints - get all sprints for a project

```php
public Sprints::getAllSprints( $projectId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getAllFutureSprints

getAllSprints - get all sprints for a project

```php
public Sprints::getAllFutureSprints( $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getCurrentSprint

getCurrentSprintId - get current sprint for a project

```php
public Sprints::getCurrentSprint( $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getUpcomingSprint

getUpcomingSprint - gets the next upcoming sprint

```php
public Sprints::getUpcomingSprint( $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### addSprint



```php
public Sprints::addSprint( $sprint): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **** |  |


**Return Value:**





---
### editSprint



```php
public Sprints::editSprint( $sprint): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **** |  |


**Return Value:**





---
### delSprint



```php
public Sprints::delSprint( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
