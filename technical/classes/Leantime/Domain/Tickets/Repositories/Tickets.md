---
title: \Leantime\Domain\Tickets\Repositories\Tickets
footer: false
---

# Tickets




`\Leantime\Domain\Tickets\Repositories\Tickets`




## Methods

### __construct

__construct - get db connection

```php
public Tickets::__construct(\Leantime\Core\Db\Db $db, \Leantime\Core\Language $language): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### getStateLabels



```php
public Tickets::getStateLabels( $projectId = null): array|array[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getStatusList



```php
public Tickets::getStatusList(): mixed
```









**Return Value:**





---
### getStatusListGroupedByType



```php
public Tickets::getStatusListGroupedByType( $projectId): string[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getStatusIdByName



```php
public Tickets::getStatusIdByName(mixed $statusLabel, mixed $projectId): int|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `statusLabel` | **mixed** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAll

getAll - get all Tickets, depending on userrole

```php
public Tickets::getAll(int $limit = 9999): false|array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `limit` | **int** |  |


**Return Value:**





---
### getUsersTickets



```php
public Tickets::getUsersTickets( $id,  $limit): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `limit` | **** |  |


**Return Value:**





---
### getAllBySearchCriteria

getAllBySearchCriteria - get Tickets by search criteria array

```php
public Tickets::getAllBySearchCriteria(array $searchCriteria, string $sort = &#039;standard&#039;, null $limit = null, mixed $includeCounts = true): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **array** |  |
| `sort` | **string** |  |
| `limit` | **null** |  |
| `includeCounts` | **mixed** |  |


**Return Value:**

| bool



---
### simpleTicketQuery



```php
public Tickets::simpleTicketQuery(?int $userId, ?int $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **?int** |  |
| `projectId` | **?int** |  |


**Return Value:**





---
### getScheduledTasks



```php
public Tickets::getScheduledTasks(\Carbon\CarbonImmutable $dateFrom, \Carbon\CarbonImmutable $dateTo, ?int $userId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateFrom` | **\Carbon\CarbonImmutable** |  |
| `dateTo` | **\Carbon\CarbonImmutable** |  |
| `userId` | **?int** |  |


**Return Value:**





---
### getAllByProjectId



```php
public Tickets::getAllByProjectId( $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getTags



```php
public Tickets::getTags( $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getTicket

getTicket - get a specific Ticket depending on the role

```php
public Tickets::getTicket( $id): \Leantime\Domain\Tickets\Models\Tickets|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getAllSubtasks



```php
public Tickets::getAllSubtasks( $id): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getAllPossibleParents



```php
public Tickets::getAllPossibleParents(\Leantime\Domain\Tickets\Models\Tickets $ticket,  $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticket` | **\Leantime\Domain\Tickets\Models\Tickets** |  |
| `projectId` | **** |  |


**Return Value:**





---
### getAllMilestones

Gets all tasks grouped around milestones for timeline views

```php
public Tickets::getAllMilestones(array $searchCriteria, string $sort = &#039;standard&#039;): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **array** |  |
| `sort` | **string** |  |


**Return Value:**





---
### getType

getType - get the Type from the type array

```php
public Tickets::getType(): array
```









**Return Value:**





---
### getPriority

getPriority - get the priority from the priority array

```php
public Tickets::getPriority( $priority): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `priority` | **** |  |


**Return Value:**





---
### getFirstTicket



```php
public Tickets::getFirstTicket( $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getNumberOfAllTickets



```php
public Tickets::getNumberOfAllTickets( $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getNumberOfMilestones



```php
public Tickets::getNumberOfMilestones( $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getNumberOfClosedTickets



```php
public Tickets::getNumberOfClosedTickets( $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getEffortOfClosedTickets



```php
public Tickets::getEffortOfClosedTickets( $projectId,  $averageStorySize): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |
| `averageStorySize` | **** |  |


**Return Value:**





---
### getEffortOfAllTickets



```php
public Tickets::getEffortOfAllTickets( $projectId,  $averageStorySize): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |
| `averageStorySize` | **** |  |


**Return Value:**





---
### getAverageTodoSize



```php
public Tickets::getAverageTodoSize( $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### addTicket

addTicket - add a Ticket with postback test

```php
public Tickets::addTicket(array $values): bool|int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


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
### updateTicket

updateTicket - Update Ticketinformation

```php
public Tickets::updateTicket(array $values,  $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `id` | **** |  |


**Return Value:**





---
### updateTicketStatus



```php
public Tickets::updateTicketStatus( $ticketId,  $status, int $ticketSorting = -1,  $handler = null): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **** |  |
| `status` | **** |  |
| `ticketSorting` | **int** |  |
| `handler` | **** |  |


**Return Value:**





---
### addTicketChange



```php
public Tickets::addTicketChange( $userId,  $ticketId,  $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `ticketId` | **** |  |
| `values` | **** |  |


**Return Value:**





---
### delticket

delTicket - delete a Ticket and all dependencies

```php
public Tickets::delticket( $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### delMilestone



```php
public Tickets::delMilestone( $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


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
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
