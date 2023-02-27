---
title: \leantime\domain\services\tickets
footer: false
---

# tickets





* Full name: `\leantime\domain\services\tickets`



## Methods

### __construct



```php
public tickets::__construct(): mixed
```









**Return Value:**





---
### getStatusLabels



```php
public tickets::getStatusLabels(): mixed
```









**Return Value:**





---
### getAllStatusLabelsByUserId



```php
public tickets::getAllStatusLabelsByUserId(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### saveStatusLabels



```php
public tickets::saveStatusLabels(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### getKanbanColumns



```php
public tickets::getKanbanColumns(): mixed
```









**Return Value:**





---
### getTypeIcons



```php
public tickets::getTypeIcons(): mixed
```









**Return Value:**





---
### getEffortLabels



```php
public tickets::getEffortLabels(): mixed
```









**Return Value:**





---
### getTicketTypes



```php
public tickets::getTicketTypes(): mixed
```









**Return Value:**





---
### getPriorityLabels



```php
public tickets::getPriorityLabels(): mixed
```









**Return Value:**





---
### prepareTicketSearchArray



```php
public tickets::prepareTicketSearchArray(array $searchParams): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchParams` | **array** |  |


**Return Value:**





---
### countSetFilters



```php
public tickets::countSetFilters(array $searchCriteria): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **array** |  |


**Return Value:**





---
### getAll



```php
public tickets::getAll(mixed $searchCriteria): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **mixed** |  |


**Return Value:**





---
### getTicket



```php
public tickets::getTicket(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getOpenUserTicketsThisWeekAndLater



```php
public tickets::getOpenUserTicketsThisWeekAndLater(mixed $userId, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### getLastTickets



```php
public tickets::getLastTickets(mixed $projectId, mixed $limit = 5): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |
| `limit` | **mixed** |  |


**Return Value:**





---
### getOpenUserTicketsByProject



```php
public tickets::getOpenUserTicketsByProject(mixed $userId, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllMilestones



```php
public tickets::getAllMilestones(mixed $projectId, mixed $includeArchived = false, mixed $sortBy = &quot;duedate&quot;, mixed $includeTasks = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |
| `includeArchived` | **mixed** |  |
| `sortBy` | **mixed** |  |
| `includeTasks` | **mixed** |  |


**Return Value:**





---
### getAllMilestonesByUserProjects



```php
public tickets::getAllMilestonesByUserProjects(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### getAllSubtasks



```php
public tickets::getAllSubtasks(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---
### quickAddTicket



```php
public tickets::quickAddTicket(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### quickAddMilestone



```php
public tickets::quickAddMilestone(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### addTicket



```php
public tickets::addTicket(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### updateTicket



```php
public tickets::updateTicket(mixed $id, mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `values` | **mixed** |  |


**Return Value:**





---
### patchTicket



```php
public tickets::patchTicket(mixed $id, mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `params` | **mixed** |  |


**Return Value:**





---
### moveTicket

moveTicket - Moves a ticket from one project to another. Milestone children will be moved as well

```php
public tickets::moveTicket(int $id, int $projectId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |
| `projectId` | **int** |  |


**Return Value:**





---
### quickUpdateMilestone



```php
public tickets::quickUpdateMilestone(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### upsertSubtask



```php
public tickets::upsertSubtask(mixed $values, mixed $parentTicket): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |
| `parentTicket` | **mixed** |  |


**Return Value:**





---
### updateTicketStatusAndSorting



```php
public tickets::updateTicketStatusAndSorting(mixed $params, mixed $handler = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |
| `handler` | **mixed** |  |


**Return Value:**





---
### deleteTicket



```php
public tickets::deleteTicket(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### deleteMilestone



```php
public tickets::deleteMilestone(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getLastTicketViewUrl



```php
public tickets::getLastTicketViewUrl(): mixed
```









**Return Value:**





---
### getGroupByFieldOptions



```php
public tickets::getGroupByFieldOptions(): mixed
```









**Return Value:**





---
### getNewFieldOptions



```php
public tickets::getNewFieldOptions(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
