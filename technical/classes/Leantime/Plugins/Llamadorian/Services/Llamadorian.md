---
title: \Leantime\Plugins\Llamadorian\Services\Llamadorian
footer: false
---

# Llamadorian

Service for retrieving information for the AI API.



* Full name: `\Leantime\Plugins\Llamadorian\Services\Llamadorian`



## Methods

### __construct

Constructor for the Llamadorian class.

```php
public Llamadorian::__construct(\Leantime\Plugins\Llamadorian\Api\Repositories\AiResponse $aiResponseRepository, \Leantime\Plugins\Llamadorian\Api\Repositories\Comment $commentRepository, \Leantime\Plugins\Llamadorian\Api\Repositories\Project $projectRepository, \Leantime\Plugins\Llamadorian\Api\Repositories\Ticket $ticketRepository, \Leantime\Plugins\Llamadorian\Api\Repositories\User $userRepository): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `aiResponseRepository` | **\Leantime\Plugins\Llamadorian\Api\Repositories\AiResponse** | The AiResponse repository instance. |
| `commentRepository` | **\Leantime\Plugins\Llamadorian\Api\Repositories\Comment** | The Comment repository instance. |
| `projectRepository` | **\Leantime\Plugins\Llamadorian\Api\Repositories\Project** | The Project repository instance. |
| `ticketRepository` | **\Leantime\Plugins\Llamadorian\Api\Repositories\Ticket** | The Ticket repository instance. |
| `userRepository` | **\Leantime\Plugins\Llamadorian\Api\Repositories\User** | The User repository instance. |


**Return Value:**





---
### insert

Inserts a new AI response into the repository.

```php
public Llamadorian::insert(string $type, string $content, int|null $userId = null, int|null $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **string** | The type of the AI response. |
| `content` | **string** | The content of the AI response. |
| `userId` | **int|null** | The ID of the user associated with the AI response. |
| `projectId` | **int|null** | The ID of the project associated with the AI response. |


**Return Value:**





---
### update

Updates an existing AI response in the repository.

```php
public Llamadorian::update(string $content, int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | **string** | The new content of the AI response. |
| `id` | **int** | The ID of the AI response to update. |


**Return Value:**





---
### getByType

Retrieves AI responses from the repository by type, user ID, project ID, and order.

```php
public Llamadorian::getByType(string $type, int|null $userId = null, int|null $projectId = null, string|null $orderBy = null): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **string** | The type of the AI response to filter for. |
| `userId` | **int|null** | The ID of the user associated with the AI response. |
| `projectId` | **int|null** | The ID of the project associated with the AI response. |
| `orderBy` | **string|null** | The string to append to the SQL ORDER BY clause. |


**Return Value:**

The retrieved AI response.



---
### getByJsonField

Retrieves AI responses from the repository by JSON field, field value, user ID, project ID, and type.

```php
public Llamadorian::getByJsonField(string $jsonField, mixed $fieldValue, int|null $userId = null, int|null $projectId = null, string|null $type = null): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `jsonField` | **string** | The JSON field to search for. |
| `fieldValue` | **mixed** | The value of the JSON field to search for. |
| `userId` | **int|null** | The ID of the user associated with the AI response. |
| `projectId` | **int|null** | The ID of the project associated with the AI response. |
| `type` | **string|null** | The type of the AI response to retrieve. |


**Return Value:**

The retrieved AI response.



---
### getCommentsByTicketIds

Retrieves comments from the repository by ticket ID.

```php
public Llamadorian::getCommentsByTicketIds(array $taskIds): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `taskIds` | **array** | The task ids to retrieve comments for. |


**Return Value:**

The retrieved comments.



---
### getProjectDetailByUserId

Retrieves a project from the repository by user ID and project ID.

```php
public Llamadorian::getProjectDetailByUserId(int $userId, int $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user ID to filter for. |
| `projectId` | **int** | The project ID to filter for. |


**Return Value:**

The retrieved project.



---
### getProjectDetail

Retrieves a project from the repository by project ID.

```php
public Llamadorian::getProjectDetail(int $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project Id to filter for. |


**Return Value:**

The retrieved project.



---
### getActiveTicketsByProjectIdAndDate

Retrieves a Ticket from the repository by project ID and ticket start date.

```php
public Llamadorian::getActiveTicketsByProjectIdAndDate(int $projectId, string $startDate): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project Id to filter for. |
| `startDate` | **string** | The start date to filter for. |


**Return Value:**

The retrieved tickets.



---
### getTicketsByIds

Retrieves tickets from the repository by task IDS.

```php
public Llamadorian::getTicketsByIds(array $taskIds): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `taskIds` | **array** | The task IDs to filter for. |


**Return Value:**

The retrieved tickets.



---
### getTicketById

Retrieves a ticket from the repository by task ID.

```php
public Llamadorian::getTicketById(int $taskId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `taskId` | **int** | The task ID to filter for. |


**Return Value:**

The retrieved ticket.



---
### getTicketsByUserIdWithLimit

Retrieves a number of tickets from the repository by user ID and passed limit.

```php
public Llamadorian::getTicketsByUserIdWithLimit(int $userId, int $limit): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user Id to filter for. |
| `limit` | **int** | The number to apply to the SQL LIMIT clause. |


**Return Value:**

The retrieved tickets.



---
### getTicketsWithReactionsByDate

Retrieves tickets from the repository by user ID and the date of the last user sentiment summary.

```php
public Llamadorian::getTicketsWithReactionsByDate(int $userId, string|null $dateOfLastUserSentimentSummary = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user ID to filter for. |
| `dateOfLastUserSentimentSummary` | **string|null** | The date of the last user sentiment summary to filter for. |


**Return Value:**

The retrieved tickets.



---
### getUsersByProjectId

Retrieves a user from the repository by project ID.

```php
public Llamadorian::getUsersByProjectId(int $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project Id to filter for. |


**Return Value:**

The retrieved users.



---
### getUserById



```php
public Llamadorian::getUserById(int $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
