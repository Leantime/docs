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
public Tickets::getStatusLabels(null $projectId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **null** |  |


**Return Value:**





---
### getAllStatusLabelsByUserId

getAllStatusLabelsByUserId - Gets all the status labels a specific user might encounter and groups them by project.

```php
public Tickets::getAllStatusLabelsByUserId( $userId): array
```

Used to get all the status dropdowns for user home dashboards






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |


**Return Value:**





---
### saveStatusLabels

saveStatusLabels - Saves the description/label of a status

```php
public Tickets::saveStatusLabels( $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Return Value:**





---
### getKanbanColumns



```php
public Tickets::getKanbanColumns(): array
```









**Return Value:**





---
### getTypeIcons



```php
public Tickets::getTypeIcons(): array|string[]
```









**Return Value:**





---
### getEffortLabels



```php
public Tickets::getEffortLabels(): array|string[]
```









**Return Value:**





---
### getTicketTypes



```php
public Tickets::getTicketTypes(): array|string[]
```









**Return Value:**





---
### getPriorityLabels



```php
public Tickets::getPriorityLabels(): array|string[]
```









**Return Value:**





---
### prepareTicketSearchArray



```php
public Tickets::prepareTicketSearchArray(array $searchParams): array
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
public Tickets::getAll( $searchCriteria): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **** |  |


**Return Value:**





---
### getAllGrouped



```php
public Tickets::getAllGrouped( $searchCriteria): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **** |  |


**Return Value:**





---
### getAllPossibleParents



```php
public Tickets::getAllPossibleParents(\Leantime\Domain\Tickets\Models\Tickets $ticket, string $projectId = &#039;currentProject&#039;): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticket` | **\Leantime\Domain\Tickets\Models\Tickets** |  |
| `projectId` | **string** |  |


**Return Value:**





---
### getTicket



```php
public Tickets::getTicket( $id): bool|\Leantime\Domain\Tickets\Models\Tickets
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getOpenUserTicketsThisWeekAndLater



```php
public Tickets::getOpenUserTicketsThisWeekAndLater( $userId,  $projectId, false $includeDoneTickets = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectId` | **** |  |
| `includeDoneTickets` | **false** |  |


**Return Value:**





---
### getLastTickets



```php
public Tickets::getLastTickets( $projectId, int $limit = 5): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |
| `limit` | **int** |  |


**Return Value:**





---
### getOpenUserTicketsByProject



```php
public Tickets::getOpenUserTicketsByProject( $userId,  $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectId` | **** |  |


**Return Value:**





---
### getAllMilestones



```php
public Tickets::getAllMilestones( $searchCriteria, string $sortBy = &quot;duedate&quot;): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **** |  |
| `sortBy` | **string** |  |


**Return Value:**





---
### getAllMilestonesOverview



```php
public Tickets::getAllMilestonesOverview(bool $includeArchived = false, string $sortBy = &quot;duedate&quot;, bool $includeTasks = false, int $clientId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `includeArchived` | **bool** |  |
| `sortBy` | **string** |  |
| `includeTasks` | **bool** |  |
| `clientId` | **int** |  |


**Return Value:**





---
### getAllMilestonesByUserProjects



```php
public Tickets::getAllMilestonesByUserProjects( $userId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |


**Return Value:**





---
### getAllSubtasks



```php
public Tickets::getAllSubtasks(int $ticketId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


**Return Value:**





---
### quickAddTicket



```php
public Tickets::quickAddTicket( $params): bool|string[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Return Value:**





---
### quickAddMilestone



```php
public Tickets::quickAddMilestone( $params): array|bool|int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Return Value:**





---
### addTicket



```php
public Tickets::addTicket( $values): bool|string[]|void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### updateTicket



```php
public Tickets::updateTicket( $id,  $values): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `values` | **** |  |


**Return Value:**





---
### patchTicket



```php
public Tickets::patchTicket( $id,  $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `params` | **** |  |


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
public Tickets::quickUpdateMilestone( $params): bool|string[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Return Value:**





---
### upsertSubtask



```php
public Tickets::upsertSubtask( $values,  $parentTicket): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `parentTicket` | **** |  |


**Return Value:**





---
### updateTicketSorting



```php
public Tickets::updateTicketSorting( $params): false|void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Return Value:**





---
### updateTicketStatusAndSorting



```php
public Tickets::updateTicketStatusAndSorting( $params,  $handler = null): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |
| `handler` | **** |  |


**Return Value:**





---
### deleteTicket



```php
public Tickets::deleteTicket( $id): bool|string[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### deleteMilestone



```php
public Tickets::deleteMilestone( $id): bool|string[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getLastTicketViewUrl



```php
public Tickets::getLastTicketViewUrl(): mixed|string
```









**Return Value:**





---
### getGroupByFieldOptions



```php
public Tickets::getGroupByFieldOptions(): array
```









**Return Value:**





---
### getSortByFieldOptions



```php
public Tickets::getSortByFieldOptions(): array[]
```









**Return Value:**





---
### getNewFieldOptions



```php
public Tickets::getNewFieldOptions(): array|array[]
```









**Return Value:**





---
### getTicketTemplateAssignments



```php
public Tickets::getTicketTemplateAssignments( $params): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
