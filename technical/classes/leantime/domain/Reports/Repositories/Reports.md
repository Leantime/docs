---
title: \Leantime\Domain\Reports\Repositories\Reports
footer: false
---

# Reports





* Full name: `\Leantime\Domain\Reports\Repositories\Reports`



## Methods

### __construct

__construct - get database connection

```php
public Reports::__construct(\Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### runTicketReport

getSprint - get single sprint

```php
public Reports::runTicketReport(mixed $projectId, mixed $sprintId): array
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
public Reports::checkLastReportEntries(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### addReport



```php
public Reports::addReport(mixed $report): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `report` | **mixed** |  |


**Return Value:**





---
### getSprintReport



```php
public Reports::getSprintReport(mixed $sprint): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **mixed** |  |


**Return Value:**





---
### getBacklogReport



```php
public Reports::getBacklogReport(mixed $project): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project` | **mixed** |  |


**Return Value:**





---
### getFullReport



```php
public Reports::getFullReport(mixed $project): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
