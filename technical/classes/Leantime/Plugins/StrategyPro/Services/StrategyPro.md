---
title: \Leantime\Plugins\StrategyPro\Services\StrategyPro
footer: false
---

# StrategyPro





* Full name: `\Leantime\Plugins\StrategyPro\Services\StrategyPro`



## Methods

### install



```php
public StrategyPro::install(): mixed
```









**Return Value:**





---
### update



```php
public StrategyPro::update(): mixed
```









**Return Value:**





---
### __construct



```php
public StrategyPro::__construct(\Leantime\Domain\Projects\Repositories\Projects $projectRepository, \Leantime\Plugins\StrategyPro\Repositories\StrategyPro $strategyRepository, \Leantime\Domain\Projects\Services\Projects $projectService, \Leantime\Domain\Tickets\Services\Tickets $ticketService, \Leantime\Core\Language $language, \Leantime\Domain\Comments\Services\Comments $commentService, \Leantime\Domain\Reports\Services\Reports $reportService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectRepository` | **\Leantime\Domain\Projects\Repositories\Projects** |  |
| `strategyRepository` | **\Leantime\Plugins\StrategyPro\Repositories\StrategyPro** |  |
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
public StrategyPro::getStatusLabels(mixed $projectId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllStrategyProjects



```php
public StrategyPro::getAllStrategyProjects(int $programId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `programId` | **int** |  |


**Return Value:**





---
### getUserPrograms



```php
public StrategyPro::getUserPrograms(int $userId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
