---
title: \Leantime\Plugins\PgmPro\Services\Programs
footer: false
---

# Programs





* Full name: `\Leantime\Plugins\PgmPro\Services\Programs`



## Methods

### __construct



```php
public Programs::__construct(\Leantime\Domain\Projects\Repositories\Projects $projectRepository, \Leantime\Plugins\PgmPro\Repositories\Programs $programRepository, \Leantime\Domain\Projects\Services\Projects $projectService, \Leantime\Domain\Tickets\Services\Tickets $ticketService, \Leantime\Core\Language $language, \Leantime\Domain\Comments\Services\Comments $commentService, \Leantime\Domain\Reports\Services\Reports $reportService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectRepository` | **\Leantime\Domain\Projects\Repositories\Projects** |  |
| `programRepository` | **\Leantime\Plugins\PgmPro\Repositories\Programs** |  |
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** |  |
| `ticketService` | **\Leantime\Domain\Tickets\Services\Tickets** |  |
| `language` | **\Leantime\Core\Language** |  |
| `commentService` | **\Leantime\Domain\Comments\Services\Comments** |  |
| `reportService` | **\Leantime\Domain\Reports\Services\Reports** |  |


**Return Value:**





---
### getStatusLabels

getStatusLabels - Gets all status labels for the current set project

```php
public Programs::getStatusLabels(mixed $projectId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllProgramProjects



```php
public Programs::getAllProgramProjects(int $programId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `programId` | **int** |  |


**Return Value:**





---
### getUserPrograms



```php
public Programs::getUserPrograms(int $userId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
