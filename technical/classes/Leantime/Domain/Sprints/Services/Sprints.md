---
title: \Leantime\Domain\Sprints\Services\Sprints
footer: false
---

# Sprints




`\Leantime\Domain\Sprints\Services\Sprints`




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
public Sprints::getSprint( $id): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


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
public Sprints::getUpcomingSprint( $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getAllSprints



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



```php
public Sprints::getAllFutureSprints( $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### addSprint



```php
public Sprints::addSprint( $params): false|object
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Return Value:**





---
### editSprint



```php
public Sprints::editSprint( $params): false|object
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Return Value:**





---
### getSprintBurndown



```php
public Sprints::getSprintBurndown( $sprint): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **** |  |


**Return Value:**





---
### getCummulativeReport



```php
public Sprints::getCummulativeReport( $project): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
