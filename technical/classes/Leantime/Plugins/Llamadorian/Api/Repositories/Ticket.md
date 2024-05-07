---
title: \Leantime\Plugins\Llamadorian\Api\Repositories\Ticket
footer: false
---

# Ticket

Repository for retrieving Ticket information for the AI API.



* Full name: `\Leantime\Plugins\Llamadorian\Api\Repositories\Ticket`
* Parent class: [\Leantime\Plugins\Llamadorian\Api\Repositories\BaseRepository](technical/BaseRepository.md)



## Methods

### __construct



```php
public Ticket::__construct(\Leantime\Domain\Tickets\Services\Tickets $ticketService, \Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketService` | **\Leantime\Domain\Tickets\Services\Tickets** |  |
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getActiveTicketsByProjectIdAndDate



```php
public Ticket::getActiveTicketsByProjectIdAndDate(int $projectId, string $startDate): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `startDate` | **string** |  |


**Return Value:**





---
### getTicketsByIds



```php
public Ticket::getTicketsByIds(array $taskIds): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `taskIds` | **array** |  |


**Return Value:**





---
### getTicketById



```php
public Ticket::getTicketById(int $taskId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `taskId` | **int** |  |


**Return Value:**





---
### getTicketsByUserIdWithLimit



```php
public Ticket::getTicketsByUserIdWithLimit(int $userId, int $limit): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `limit` | **int** |  |


**Return Value:**





---
### getTicketsWithReactionsByDate



```php
public Ticket::getTicketsWithReactionsByDate(int $userId, ?string $dateOfLastUserSentimentSummary = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `dateOfLastUserSentimentSummary` | **?string** |  |


**Return Value:**





---


## Inherited methods

### __construct



```php
public BaseRepository::__construct(\Leantime\Core\Db $db, \Leantime\Core\Environment $config): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |
| `config` | **\Leantime\Core\Environment** |  |


**Return Value:**





---
### executeQueryForSingleResult



```php
protected BaseRepository::executeQueryForSingleResult(array $params, string $query): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** |  |
| `query` | **string** |  |


**Return Value:**





---
### executeQueryForListResult



```php
protected BaseRepository::executeQueryForListResult(array $params, string $query): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** |  |
| `query` | **string** |  |


**Return Value:**





---
### executeQuery



```php
protected BaseRepository::executeQuery(array $params, string $query, bool $shouldReturnId = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** |  |
| `query` | **string** |  |
| `shouldReturnId` | **bool** |  |


**Return Value:**





---
### prepareAndBindStatement



```php
private BaseRepository::prepareAndBindStatement(array $params, string $query): \PDOStatement
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** |  |
| `query` | **string** |  |


**Return Value:**





---
### prepareStatement



```php
protected BaseRepository::prepareStatement(string $query): \PDOStatement
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | **string** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
