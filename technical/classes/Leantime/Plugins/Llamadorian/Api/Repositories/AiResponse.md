---
title: \Leantime\Plugins\Llamadorian\Api\Repositories\AiResponse
footer: false
---

# AiResponse

Repository for retrieving AiResponse information for the AI API.



* Full name: `\Leantime\Plugins\Llamadorian\Api\Repositories\AiResponse`
* Parent class: [\Leantime\Plugins\Llamadorian\Api\Repositories\BaseRepository](technical/BaseRepository.md)



## Methods

### insert

Insert a new row into the zp_ai_responses table.

```php
public AiResponse::insert(string $type, string $content, int|null $userId = null, int|null $projectId = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **string** | The type of response. |
| `content` | **string** | The content of the response. |
| `userId` | **int|null** | The ID of the user (optional, default is null). |
| `projectId` | **int|null** | The ID of the project (optional, default is null). |


**Return Value:**





---
### update

Update the content of a row in the zp_ai_responses table.

```php
public AiResponse::update(string $content, int $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | **string** | The new content for the response. |
| `id` | **int** | The ID of the response. |


**Return Value:**





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
### getByJsonField

Retrieves records from the database based on a JSON field and its corresponding value, with optional filters.

```php
public AiResponse::getByJsonField(string $jsonField, mixed $fieldValue, ?int $userId = null, ?int $projectId = null, string|null $type = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `jsonField` | **string** |  |
| `fieldValue` | **mixed** |  |
| `userId` | **?int** |  |
| `projectId` | **?int** |  |
| `type` | **string|null** | (Optional) The type of response to filter the results by. Defaults to null. |


**Return Value:**

The retrieved response records as an array.



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
