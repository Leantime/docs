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
public Reports::runTicketReport( $projectId,  $sprintId): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |
| `sprintId` | **** |  |


**Return Value:**





---
### checkLastReportEntries



```php
public Reports::checkLastReportEntries( $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### addReport



```php
public Reports::addReport( $report): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `report` | **** |  |


**Return Value:**





---
### getSprintReport



```php
public Reports::getSprintReport( $sprint): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **** |  |


**Return Value:**





---
### getBacklogReport



```php
public Reports::getBacklogReport( $project): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project` | **** |  |


**Return Value:**





---
### getFullReport



```php
public Reports::getFullReport( $project): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
