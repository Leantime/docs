---
title: \leantime\domain\repositories\tickets
footer: false
---

# tickets





* Full name: `\leantime\domain\repositories\tickets`



## Methods

### __construct

__construct - get db connection

```php
public tickets::__construct(): \leantime\domain\repositories\unknown_type
```









**Return Value:**





---
### getStateLabels



```php
public tickets::getStateLabels(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getStatusList



```php
public tickets::getStatusList(): mixed
```









**Return Value:**





---
### getStatusListGroupedByType



```php
public tickets::getStatusListGroupedByType(mixed $projectId): mixed
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
public tickets::getAll(mixed $limit = 9999): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `limit` | **mixed** |  |


**Return Value:**





---
### getUsersTickets



```php
public tickets::getUsersTickets(mixed $id, mixed $limit): mixed
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
public tickets::getAllBySearchCriteria( $searchCriteria,  $sort = &#039;standard&#039;, mixed $limit = null): array
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
public tickets::getAllByProjectId(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getTags



```php
public tickets::getTags(mixed $projectId): mixed
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
public tickets::getTicket( $id): \leantime\domain\models\tickets|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getAllSubtasks



```php
public tickets::getAllSubtasks(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getAllMilestones



```php
public tickets::getAllMilestones(mixed $projectId, mixed $includeArchived = false, mixed $sortBy = &quot;headline&quot;, mixed $includeTasks = false): mixed
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
### getType

getType - get the Type from the type array

```php
public tickets::getType(): string
```









**Return Value:**





---
### getPriority

getPriority - get the priority from the priority array

```php
public tickets::getPriority( $priority): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `priority` | **** |  |


**Return Value:**





---
### getFirstTicket



```php
public tickets::getFirstTicket(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getNumberOfAllTickets



```php
public tickets::getNumberOfAllTickets(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getNumberOfMilestones



```php
public tickets::getNumberOfMilestones(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getNumberOfClosedTickets



```php
public tickets::getNumberOfClosedTickets(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getEffortOfClosedTickets



```php
public tickets::getEffortOfClosedTickets(mixed $projectId, mixed $averageStorySize): mixed
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
public tickets::getEffortOfAllTickets(mixed $projectId, mixed $averageStorySize): mixed
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
public tickets::getAverageTodoSize(mixed $projectId): mixed
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
public tickets::addTicket(array $values): bool|int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


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
### updateTicket

updateTicket - Update Ticketinformation

```php
public tickets::updateTicket(array $values,  $id): mixed
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
public tickets::updateTicketStatus(mixed $ticketId, mixed $status, mixed $ticketSorting = -1): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |
| `status` | **mixed** |  |
| `ticketSorting` | **mixed** |  |


**Return Value:**





---
### addTicketChange



```php
public tickets::addTicketChange(mixed $userId, mixed $ticketId, mixed $values): mixed
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
public tickets::delticket( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### delMilestone



```php
public tickets::delMilestone(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
