---
title: \Leantime\Plugins\Llamadorian\Repositories\AiResponse
footer: false
---

# AiResponse





* Full name: `\Leantime\Plugins\Llamadorian\Repositories\AiResponse`
* Parent class: [\Leantime\Plugins\Llamadorian\Repositories\BaseRepository](technical/BaseRepository.md)



## Methods

### archiveProjectIntroduction

Archives the project introduction for a specific project and optionally a specific user.

```php
public AiResponse::archiveProjectIntroduction(int $projectId, int|null $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project to archive the introduction for. |
| `userId` | **int|null** | (Optional) The ID of the user to archive the introduction for. Defaults to null. |


**Return Value:**





---
### saveProjectIntroductionUnseenFlag

Updates the unseen flag for project introduction in the AI Response table.

```php
public AiResponse::saveProjectIntroductionUnseenFlag(array $keyArray): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `keyArray` | **array** | An array of keys representing the project introduction settings to update. |


**Return Value:**





---
### getCurrentPrioritizedList

Retrieves the current prioritized list of recommendations for a given user.

```php
public AiResponse::getCurrentPrioritizedList(int $userId): string|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |


**Return Value:**

The prioritized list of recommendations, or null if no recommendations found.



---
### getByType

Retrieves records from the database based on the given parameters.

```php
public AiResponse::getByType(string $type, int|null $userId = null, int|null $projectId = null, string|null $orderBy = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **string** | The type of response to retrieve. |
| `userId` | **int|null** | (Optional) The user ID to filter the results by. Defaults to null. |
| `projectId` | **int|null** | (Optional) The project ID to filter the results by. Defaults to null. |
| `orderBy` | **string|null** | (Optional) The field to order the results by. Defaults to null. |


**Return Value:**

The retrieved response records as an array.



---
### getGenerativeResponse



```php
public AiResponse::getGenerativeResponse(mixed $projectId, mixed $dueDate): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |
| `dueDate` | **mixed** |  |


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
### setupDB



```php
public BaseRepository::setupDB(array $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Return Value:**





---
### sqlPrep



```php
public BaseRepository::sqlPrep(): mixed
```









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
protected BaseRepository::executeQueryForListResult(array $params, string $query): mixed
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
private BaseRepository::prepareAndBindStatement(array $params, string $query): mixed
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
