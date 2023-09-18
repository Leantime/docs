---
title: \Leantime\Domain\Tickets\Repositories\Tickets
footer: false
---

# Tickets





* Full name: `\Leantime\Domain\Tickets\Repositories\Tickets`



## Methods

### __construct

__construct - get db connection

```php
public Tickets::__construct(\Leantime\Core\Db $db, \Leantime\Core\Language $language): \Leantime\Domain\Tickets\Repositories\unknown_type
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### getStateLabels



```php
public Tickets::getStateLabels(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


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
public Tickets::getStatusListGroupedByType(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAll

getAll - get all Tickets, depending on userrole

```php
public Tickets::getAll(mixed $limit = 9999): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `limit` | **mixed** |  |


**Return Value:**





---
### getUsersTickets



```php
public Tickets::getUsersTickets(mixed $id, mixed $limit): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `limit` | **mixed** |  |


**Return Value:**





---
### getAllBySearchCriteria

getAllBySearchCriteria - get Tickets by a serach term and/or a filter

```php
public Tickets::getAllBySearchCriteria( $searchCriteria,  $sort = &#039;standard&#039;, mixed $limit = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **** | array |
| `sort` | **** |  |
| `limit` | **mixed** |  |


**Return Value:**

| bool



---
### getAllByProjectId



```php
public Tickets::getAllByProjectId(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getTags



```php
public Tickets::getTags(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


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
public Tickets::getAllSubtasks(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getAllPossibleParents



```php
public Tickets::getAllPossibleParents(\Leantime\Domain\Tickets\Models\Tickets $ticket, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticket` | **\Leantime\Domain\Tickets\Models\Tickets** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllMilestones

Gets all tasks grouped around milestones for timeline views

```php
public Tickets::getAllMilestones( $searchCriteria,  $sort = &#039;standard&#039;): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **** |  |
| `sort` | **** |  |


**Return Value:**





---
### getType

getType - get the Type from the type array

```php
public Tickets::getType(): string
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
public Tickets::getFirstTicket(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getNumberOfAllTickets



```php
public Tickets::getNumberOfAllTickets(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getNumberOfMilestones



```php
public Tickets::getNumberOfMilestones(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getNumberOfClosedTickets



```php
public Tickets::getNumberOfClosedTickets(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getEffortOfClosedTickets



```php
public Tickets::getEffortOfClosedTickets(mixed $projectId, mixed $averageStorySize): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |
| `averageStorySize` | **mixed** |  |


**Return Value:**





---
### getEffortOfAllTickets



```php
public Tickets::getEffortOfAllTickets(mixed $projectId, mixed $averageStorySize): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |
| `averageStorySize` | **mixed** |  |


**Return Value:**





---
### getAverageTodoSize



```php
public Tickets::getAverageTodoSize(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


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
public Tickets::patchTicket(mixed $id, mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `params` | **mixed** |  |


**Return Value:**





---
### updateTicket

updateTicket - Update Ticketinformation

```php
public Tickets::updateTicket(array $values,  $id): mixed
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
public Tickets::updateTicketStatus(mixed $ticketId, mixed $status, mixed $ticketSorting = -1, mixed $handler = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |
| `status` | **mixed** |  |
| `ticketSorting` | **mixed** |  |
| `handler` | **mixed** |  |


**Return Value:**





---
### addTicketChange



```php
public Tickets::addTicketChange(mixed $userId, mixed $ticketId, mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `ticketId` | **mixed** |  |
| `values` | **mixed** |  |


**Return Value:**





---
### delticket

delTicket - delete a Ticket and all dependencies

```php
public Tickets::delticket( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### delMilestone



```php
public Tickets::delMilestone(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
private static Eventhelpers::get_event_context(mixed $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **mixed** |  |


**Return Value:**





---
### set_class_context

Gets the class Context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static Eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static Eventhelpers::get_function_context(mixed $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
