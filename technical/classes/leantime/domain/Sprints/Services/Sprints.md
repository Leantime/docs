---
title: \Leantime\Domain\Sprints\Services\Sprints
footer: false
---

# Sprints





* Full name: `\Leantime\Domain\Sprints\Services\Sprints`



## Methods

### __construct



```php
public Sprints::__construct(\Leantime\Core\Template $tpl, \Leantime\Core\Language $language, \Leantime\Domain\Projects\Repositories\Projects $projectRepository, \Leantime\Domain\Sprints\Repositories\Sprints $sprintRepository, \Leantime\Domain\Tickets\Repositories\Tickets $ticketRepository, \Leantime\Domain\Reports\Repositories\Reports $reportRepository): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `tpl` | **\Leantime\Core\Template** |  |
| `language` | **\Leantime\Core\Language** |  |
| `projectRepository` | **\Leantime\Domain\Projects\Repositories\Projects** |  |
| `sprintRepository` | **\Leantime\Domain\Sprints\Repositories\Sprints** |  |
| `ticketRepository` | **\Leantime\Domain\Tickets\Repositories\Tickets** |  |
| `reportRepository` | **\Leantime\Domain\Reports\Repositories\Reports** |  |


**Return Value:**





---
### getSprint



```php
public Sprints::getSprint(mixed $id): mixed
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
public Sprints::getCurrentSprintId( $projectId): int|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getUpcomingSprint



```php
public Sprints::getUpcomingSprint(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllSprints



```php
public Sprints::getAllSprints(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllFutureSprints



```php
public Sprints::getAllFutureSprints(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### addSprint



```php
public Sprints::addSprint(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### editSprint



```php
public Sprints::editSprint(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### getSprintBurndown



```php
public Sprints::getSprintBurndown(mixed $sprint): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **mixed** |  |


**Return Value:**





---
### getCummulativeReport



```php
public Sprints::getCummulativeReport(mixed $project): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
