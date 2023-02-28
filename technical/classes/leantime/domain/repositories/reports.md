---
title: \leantime\domain\repositories\reports
footer: false
---

# reports





* Full name: `\leantime\domain\repositories\reports`



## Methods

### __construct

__construct - get database connection

```php
public reports::__construct(): mixed
```









**Return Value:**





---
### runTicketReport

getSprint - get single sprint

```php
public reports::runTicketReport(mixed $projectId, mixed $sprintId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |
| `sprintId` | **mixed** |  |


**Return Value:**





---
### checkLastReportEntries



```php
public reports::checkLastReportEntries(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### addReport



```php
public reports::addReport(mixed $report): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `report` | **mixed** |  |


**Return Value:**





---
### getSprintReport



```php
public reports::getSprintReport(mixed $sprint): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **mixed** |  |


**Return Value:**





---
### getBacklogReport



```php
public reports::getBacklogReport(mixed $project): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project` | **mixed** |  |


**Return Value:**





---
### getFullReport



```php
public reports::getFullReport(mixed $project): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
