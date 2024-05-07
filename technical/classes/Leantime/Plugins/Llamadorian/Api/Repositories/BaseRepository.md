---
title: \Leantime\Plugins\Llamadorian\Api\Repositories\BaseRepository
footer: false
---

# BaseRepository

Base Repository for retrieving information for the AI API.



* Full name: `\Leantime\Plugins\Llamadorian\Api\Repositories\BaseRepository`



## Methods

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
