---
title: \Leantime\Plugins\Llamadorian\Repositories\Reactions
footer: false
---

# Reactions





* Full name: `\Leantime\Plugins\Llamadorian\Repositories\Reactions`
* Parent class: [\Leantime\Plugins\Llamadorian\Repositories\BaseRepository](technical/BaseRepository.md)



## Methods

### getTaskReactions



```php
public Reactions::getTaskReactions(mixed $ticketIds): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketIds` | **mixed** |  |


**Return Value:**





---
### updateTaskReaction



```php
public Reactions::updateTaskReaction(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


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
