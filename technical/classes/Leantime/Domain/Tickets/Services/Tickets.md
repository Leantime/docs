---
title: \Leantime\Domain\Tickets\Services\Tickets
footer: false
---

# Tickets




`\Leantime\Domain\Tickets\Services\Tickets`




## Methods

### __construct

Constructor method for the class.

```php
public Tickets::__construct(\Leantime\Core\Template $tpl, \Leantime\Core\Language $language, \Leantime\Core\Configuration\Environment $config, \Leantime\Domain\Projects\Repositories\Projects $projectRepository, \Leantime\Domain\Tickets\Repositories\Tickets $ticketRepository, \Leantime\Domain\Timesheets\Repositories\Timesheets $timesheetsRepo, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Domain\Projects\Services\Projects $projectService, \Leantime\Domain\Timesheets\Services\Timesheets $timesheetService, \Leantime\Domain\Sprints\Services\Sprints $sprintService, \Leantime\Domain\Tickets\Repositories\TicketHistory $ticketHistoryRepo, \Leantime\Domain\Goalcanvas\Services\Goalcanvas $goalcanvasService, \Leantime\Core\Support\DateTimeHelper $dateTimeHelper): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `tpl` | **\Leantime\Core\Template** | The template core instance. |
| `language` | **\Leantime\Core\Language** | The language core instance. |
| `config` | **\Leantime\Core\Configuration\Environment** | The environment core instance. |
| `projectRepository` | **\Leantime\Domain\Projects\Repositories\Projects** | The project repository instance. |
| `ticketRepository` | **\Leantime\Domain\Tickets\Repositories\Tickets** | The ticket repository instance. |
| `timesheetsRepo` | **\Leantime\Domain\Timesheets\Repositories\Timesheets** | The timesheet repository instance. |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** | The setting repository instance. |
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** | The project service instance. |
| `timesheetService` | **\Leantime\Domain\Timesheets\Services\Timesheets** | The timesheet service instance. |
| `sprintService` | **\Leantime\Domain\Sprints\Services\Sprints** | The sprint service instance. |
| `ticketHistoryRepo` | **\Leantime\Domain\Tickets\Repositories\TicketHistory** | The ticket history repository instance. |
| `goalcanvasService` | **\Leantime\Domain\Goalcanvas\Services\Goalcanvas** | The goal canvas service instance. |
| `dateTimeHelper` | **\Leantime\Core\Support\DateTimeHelper** | The date time helper instance. |


**Return Value:**





---
### getStatusLabels

Gets all status labels for the current set project

```php
public Tickets::getStatusLabels(int $projectId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | project id to get status labels for |


**Return Value:**

returns an array of status labels



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
public Tickets::getAll( $searchCriteria = null): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **** |  |


**Return Value:**





---
### simpleTicketCounter



```php
public Tickets::simpleTicketCounter(?int $userId = null, ?int $project = null, string $status = &quot;&quot;): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **?int** |  |
| `project` | **?int** |  |
| `status` | **string** |  |


**Return Value:**





---
### getAllOpenUserTickets



```php
public Tickets::getAllOpenUserTickets(?int $userId = null, ?int $project = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **?int** |  |
| `project` | **?int** |  |


**Return Value:**





---
### getScheduledTasks



```php
public Tickets::getScheduledTasks(\Carbon\CarbonImmutable $dateFrom, \Carbon\CarbonImmutable $dateTo, ?int $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateFrom` | **\Carbon\CarbonImmutable** |  |
| `dateTo` | **\Carbon\CarbonImmutable** |  |
| `userId` | **?int** |  |


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
### getOpenUserTicketsByPriority



```php
public Tickets::getOpenUserTicketsByPriority( $userId,  $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectId` | **** |  |


**Return Value:**





---
### getOpenUserTicketsBySprint



```php
public Tickets::getOpenUserTicketsBySprint( $userId,  $projectId): array
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
### getMilestoneProgress

Calculate the progress of a milestone based on the tickets associated with it.

```php
public Tickets::getMilestoneProgress(int|string $milestoneId): float
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `milestoneId` | **int|string** | ID of the milestone. |


**Return Value:**

The progress of the milestone as a percentage.



---
### getBulkMilestoneProgress



```php
public Tickets::getBulkMilestoneProgress(array $milestones): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `milestones` | **array** |  |


**Return Value:**





---
### getRecentlyCompletedTicketsByUser



```php
public Tickets::getRecentlyCompletedTicketsByUser(int $userId, ?int $projectId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `projectId` | **?int** |  |


**Return Value:**





---
### goalsRelatedToWork



```php
public Tickets::goalsRelatedToWork(int $userId, mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `projectId` | **mixed** |  |


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
public Tickets::quickAddTicket( $params): array|bool
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

Adds a ticket to the system.

```php
public Tickets::addTicket(array $values): array|int|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | An array of ticket data.<br />- id (optional): The ID of the ticket.<br />- headline (optional): The headline of the ticket.<br />- type (optional): The type of the ticket. Default is &quot;task&quot;.<br />- description (optional): The description of the ticket.<br />- projectId (optional): The ID of the project the ticket belongs to. Default is the current project.<br />- editorId (optional): The ID of the editor of the ticket.<br />- userId: The ID of the user creating the ticket.<br />- date: The date when the ticket is created.<br />- dateToFinish (optional): The date to finish the ticket.<br />- timeToFinish (optional): The time to finish the ticket.<br />- status (optional): The status of the ticket. Default is 3.<br />- planHours (optional): The planned hours for the ticket.<br />- tags (optional): The tags associated with the ticket.<br />- sprint (optional): The sprint the ticket belongs to.<br />- storypoints (optional): The story points assigned to the ticket.<br />- hourRemaining (optional): The remaining hours for the ticket.<br />- priority (optional): The priority of the ticket.<br />- acceptanceCriteria (optional): The acceptance criteria of the ticket.<br />- editFrom (optional): The edit from date of the ticket.<br />- timeFrom (optional): The edit from time of the ticket.<br />- editTo (optional): The edit to date of the ticket.<br />- timeTo (optional): The edit to time of the ticket.<br />- dependingTicketId (optional): The ID of the depending ticket.<br />- milestoneid (optional): The ID of the milestone the ticket belongs to. |


**Return Value:**

If the ticket is successfully added, returns the ID of the ticket.
If the user does not have access to the project, returns an error message and type array.
If the headline is missing, returns an error message and type array.



---
### updateTicket

Updates a ticket with the given values.

```php
public Tickets::updateTicket(array $values): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | The array containing the ticket values to update.<br />Accepted keys are:<br />- &#039;id&#039; =&gt; The ticket ID.<br />- &#039;headline&#039; =&gt; The ticket headline. (optional)<br />- &#039;type&#039; =&gt; The ticket type. (optional)<br />- &#039;description&#039; =&gt; The ticket description. (optional)<br />- &#039;projectId&#039; =&gt; The project ID. Defaults to session(&quot;currentProject&quot;). (optional);<br />- &#039;editorId&#039; =&gt; The editor ID. (optional)<br />- &#039;date&#039; =&gt; The ticket date. Defaults to the current date and time. (optional)<br />- &#039;dateToFinish&#039; =&gt; The ticket deadline date. (optional)<br />- &#039;timeToFinish&#039; =&gt; The ticket deadline time. (optional)<br />- &#039;status&#039; =&gt; The ticket status. (optional)<br />- &#039;planHours&#039; =&gt; The planned hours for the ticket. (optional)<br />- &#039;tags&#039; =&gt; The tags for the ticket. (optional)<br />- &#039;sprint&#039; =&gt; The sprint for the ticket. (optional)<br />- &#039;storypoints&#039; =&gt; The story points for the ticket. (optional)<br />- &#039;hourRemaining&#039; =&gt; The remaining hours for the ticket. (optional)<br />- &#039;priority&#039; =&gt; The ticket priority. (optional)<br />- &#039;acceptanceCriteria&#039; =&gt; The ticket acceptance criteria. (optional)<br />- &#039;editFrom&#039; =&gt; The ticket edit &#039;from&#039; date-time. (optional)<br />- &#039;time* |


**Return Value:**





---
### patch



```php
public Tickets::patch( $id,  $params): bool
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
### delete



```php
public Tickets::delete( $id): bool|string[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### canDelete



```php
public Tickets::canDelete(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


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
### getLastTimelineViewUrl



```php
public Tickets::getLastTimelineViewUrl(): mixed
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
### getToDoWidgetAssignments

Retrieves the assignments for the ToDoWidget.

```php
public Tickets::getToDoWidgetAssignments(array $params): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | The parameters for filtering the assignments.<br />- projectFilter (optional): The project filter for the assignments.<br />- groupBy (optional): The grouping for the assignments (time, project, priority, or sprint). |


**Return Value:**

An array containing the assignments for the ToDoWidget.
- tickets: The open user tickets based on the groupBy parameter.
- onTheClock: Indicates whether the user is currently clocked in.
- efforts: The labels for the effort values.
- priorities: The labels for the priority values.
- ticketTypes: The available ticket types.
- statusLabels: The labels for the ticket status values.
- milestones: The milestones for each project.
- allAssignedprojects: The projects assigned to the user.
- projectFilter: The current project filter.
- groupBy: The current grouping for the assignments.



---
### prepareTicketDates

Prepare ticket dates for database.

```php
public Tickets::prepareTicketDates(array& $values): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | The values of the ticket fields. |


**Return Value:**

The values of the ticket fields after preparing the dates.



---
### findMilestone

Find milestones that contain a specific term in their headline.

```php
public Tickets::findMilestone(string $term, int $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `term` | **string** | The term to search for in the headline. |
| `projectId` | **int** | The ID of the project to search milestones in. |


**Return Value:**

The array of milestones that match the search term.



---
### findTicket

Finds tickets based on search term, project ID, and optional user ID.

```php
public Tickets::findTicket(string $term, int $projectId, int|null $userId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `term` | **string** | The search term to match against ticket headlines. |
| `projectId` | **int** | The ID of the project to search within. |
| `userId` | **int|null** | (Optional) The ID of the user to limit the search to. |


**Return Value:**

An array of tickets matching the search criteria.



---
### pollForNewAccountMilestones

Retrieve milestones for a specific project and user.

```php
public Tickets::pollForNewAccountMilestones(int|null $projectId = null, int|null $userId = null): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|null** | The ID of the project (optional) |
| `userId` | **int|null** | The ID of the user (optional) |


**Return Value:**

An array of milestones or false if an error occurred



---
### pollForUpdatedAccountMilestones

Polls for updated account milestones.

```php
public Tickets::pollForUpdatedAccountMilestones(int|null $projectId = null, int|null $userId = null): array|false
```

Retrieves all milestones based on the provided search criteria and prepares the dates for API response.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|null** | (optional) The ID of the project to filter milestones by. |
| `userId` | **int|null** | (optional) The ID of the user to filter milestones by. |


**Return Value:**

An array of milestones with prepared dates for API response, or false if an error occurs.



---
### pollForNewAccountTodos

Polls for new account todos.

```php
public Tickets::pollForNewAccountTodos(int|null $projectId = null, int|null $userId = null): array|false
```

Retrieves all account todos based on the provided search criteria. If no criteria are provided,
it will return all todos. Optionally, a project ID and a user ID can be specified to filter the todos.
It excludes todos of type "milestone".






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|null** | The ID of the project to filter the todos (optional). |
| `userId` | **int|null** | The ID of the user to filter the todos (optional). |


**Return Value:**

The retrieved todos as an array of associative arrays.
Returns false if an error occurs during retrieval.



---
### pollForUpdatedAccountTodos

Polls for updated account todos.

```php
public Tickets::pollForUpdatedAccountTodos(int|null $projectId = null, int|null $userId = null): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|null** | The ID of the project (optional) |
| `userId` | **int|null** | The ID of the user (optional) |


**Return Value:**

An array of updated account todos or false if there was an error



---
### prepareDatesForApiResponse



```php
private Tickets::prepareDatesForApiResponse(mixed $todo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `todo` | **mixed** |  |


**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static DispatchesEvents::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static DispatchesEvents::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
protected static DispatchesEvents::get_event_context( $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **** |  |


**Return Value:**





---
### set_class_context

Gets the class Context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static DispatchesEvents::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static DispatchesEvents::get_function_context(?int $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **?int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
