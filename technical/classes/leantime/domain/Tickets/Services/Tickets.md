---
title: \Leantime\Domain\Tickets\Services\Tickets
footer: false
---

# Tickets





* Full name: `\Leantime\Domain\Tickets\Services\Tickets`



## Methods

### __construct



```php
public Tickets::__construct(\Leantime\Core\Template $tpl, \Leantime\Core\Language $language, \Leantime\Core\Environment $config, \Leantime\Domain\Projects\Repositories\Projects $projectRepository, \Leantime\Domain\Tickets\Repositories\Tickets $ticketRepository, \Leantime\Domain\Timesheets\Repositories\Timesheets $timesheetsRepo, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Domain\Projects\Services\Projects $projectService, \Leantime\Domain\Timesheets\Services\Timesheets $timesheetService, \Leantime\Domain\Sprints\Services\Sprints $sprintService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `tpl` | **\Leantime\Core\Template** |  |
| `language` | **\Leantime\Core\Language** |  |
| `config` | **\Leantime\Core\Environment** |  |
| `projectRepository` | **\Leantime\Domain\Projects\Repositories\Projects** |  |
| `ticketRepository` | **\Leantime\Domain\Tickets\Repositories\Tickets** |  |
| `timesheetsRepo` | **\Leantime\Domain\Timesheets\Repositories\Timesheets** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** |  |
| `timesheetService` | **\Leantime\Domain\Timesheets\Services\Timesheets** |  |
| `sprintService` | **\Leantime\Domain\Sprints\Services\Sprints** |  |


**Return Value:**





---
### getStatusLabels

getStatusLabels - Gets all status labels for the current set project

```php
public Tickets::getStatusLabels(mixed $projectId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllStatusLabelsByUserId

getAllStatusLabelsByUserId - Gets all the status labels a specific user might encounter and groups them by project.

```php
public Tickets::getAllStatusLabelsByUserId(mixed $userId): array
```

Used to get all the status dropdowns for user home dashboards






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### saveStatusLabels

saveStatusLabels - Saves the description/label of a status

```php
public Tickets::saveStatusLabels(mixed $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### getKanbanColumns



```php
public Tickets::getKanbanColumns(): mixed
```









**Return Value:**





---
### getTypeIcons



```php
public Tickets::getTypeIcons(): mixed
```









**Return Value:**





---
### getEffortLabels



```php
public Tickets::getEffortLabels(): mixed
```









**Return Value:**





---
### getTicketTypes



```php
public Tickets::getTicketTypes(): mixed
```









**Return Value:**





---
### getPriorityLabels



```php
public Tickets::getPriorityLabels(): mixed
```









**Return Value:**





---
### prepareTicketSearchArray



```php
public Tickets::prepareTicketSearchArray(array $searchParams): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchParams` | **array** |  |


**Return Value:**





---
### countSetFilters



```php
public Tickets::countSetFilters(array $searchCriteria): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **array** |  |


**Return Value:**





---
### getSetFilters



```php
public Tickets::getSetFilters(array $searchCriteria, bool $includeGroup = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **array** |  |
| `includeGroup` | **bool** |  |


**Return Value:**





---
### getAll



```php
public Tickets::getAll(mixed $searchCriteria): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **mixed** |  |


**Return Value:**





---
### getAllGrouped



```php
public Tickets::getAllGrouped(mixed $searchCriteria): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **mixed** |  |


**Return Value:**





---
### getAllPossibleParents



```php
public Tickets::getAllPossibleParents(\Leantime\Domain\Tickets\Models\Tickets $ticket, mixed $projectId = &#039;currentProject&#039;): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticket` | **\Leantime\Domain\Tickets\Models\Tickets** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### getTicket



```php
public Tickets::getTicket(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getOpenUserTicketsThisWeekAndLater



```php
public Tickets::getOpenUserTicketsThisWeekAndLater(mixed $userId, mixed $projectId, mixed $includeDoneTickets = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |
| `includeDoneTickets` | **mixed** |  |


**Return Value:**





---
### getLastTickets



```php
public Tickets::getLastTickets(mixed $projectId, mixed $limit = 5): mixed
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
public Tickets::getOpenUserTicketsByProject(mixed $userId, mixed $projectId): mixed
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
public Tickets::getAllMilestones(mixed $searchCriteria, mixed $sortBy = &quot;duedate&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **mixed** |  |
| `sortBy` | **mixed** |  |


**Return Value:**





---
### getAllMilestonesOverview



```php
public Tickets::getAllMilestonesOverview(mixed $includeArchived = false, mixed $sortBy = &quot;duedate&quot;, mixed $includeTasks = false, mixed $clientId = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `includeArchived` | **mixed** |  |
| `sortBy` | **mixed** |  |
| `includeTasks` | **mixed** |  |
| `clientId` | **mixed** |  |


**Return Value:**





---
### getAllMilestonesByUserProjects



```php
public Tickets::getAllMilestonesByUserProjects(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### getAllSubtasks



```php
public Tickets::getAllSubtasks(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---
### quickAddTicket



```php
public Tickets::quickAddTicket(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### quickAddMilestone



```php
public Tickets::quickAddMilestone(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### addTicket



```php
public Tickets::addTicket(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### updateTicket



```php
public Tickets::updateTicket(mixed $id, mixed $values): mixed
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
public Tickets::patchTicket(mixed $id, mixed $params): mixed
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
public Tickets::moveTicket(int $id, int $projectId): bool
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
public Tickets::quickUpdateMilestone(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### upsertSubtask



```php
public Tickets::upsertSubtask(mixed $values, mixed $parentTicket): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |
| `parentTicket` | **mixed** |  |


**Return Value:**





---
### updateTicketSorting



```php
public Tickets::updateTicketSorting(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### updateTicketStatusAndSorting



```php
public Tickets::updateTicketStatusAndSorting(mixed $params, mixed $handler = null): mixed
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
public Tickets::deleteTicket(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### deleteMilestone



```php
public Tickets::deleteMilestone(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getLastTicketViewUrl



```php
public Tickets::getLastTicketViewUrl(): mixed
```









**Return Value:**





---
### getGroupByFieldOptions



```php
public Tickets::getGroupByFieldOptions(): mixed
```









**Return Value:**





---
### getSortByFieldOptions



```php
public Tickets::getSortByFieldOptions(): mixed
```









**Return Value:**





---
### getNewFieldOptions



```php
public Tickets::getNewFieldOptions(): mixed
```









**Return Value:**





---
### getTicketTemplateAssignments



```php
public Tickets::getTicketTemplateAssignments(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
