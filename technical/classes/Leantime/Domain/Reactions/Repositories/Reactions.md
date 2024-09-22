---
title: \Leantime\Domain\Reactions\Repositories\Reactions
footer: false
---

# Reactions




`\Leantime\Domain\Reactions\Repositories\Reactions`




## Methods

### __construct



```php
public Reactions::__construct(\Leantime\Core\Db\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |


**Return Value:**





---
### addReaction

addReaction - adds a reaction to an entity

```php
public Reactions::addReaction(int $userId, string $module, int $moduleId, string $reaction): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `module` | **string** |  |
| `moduleId` | **int** |  |
| `reaction` | **string** |  |


**Return Value:**





---
### getGroupedEntityReactions

getGroupedEntityReactions - gets all reactions for a given entity grouped and counted by reactions

```php
public Reactions::getGroupedEntityReactions(string $module, int $moduleId): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** |  |
| `moduleId` | **int** |  |


**Return Value:**

returns the array on success or false on failure



---
### getUserReactions

getMyReactions - gets user reactions. Can be very broad or very targeted

```php
public Reactions::getUserReactions(int $userId, string $module = &#039;&#039;, int|null $moduleId = null, string $reaction = &#039;&#039;): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `module` | **string** |  |
| `moduleId` | **int|null** |  |
| `reaction` | **string** |  |


**Return Value:**





---
### removeReactionById

removeReactionById - removes a reaction by reaction id

```php
public Reactions::removeReactionById(int $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### removeUserReaction

removeUserReaction - removes a users reaction to an entity

```php
public Reactions::removeUserReaction(int $userId, string $module, int $moduleId, string $reaction): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `module` | **string** |  |
| `moduleId` | **int** |  |
| `reaction` | **string** |  |


**Return Value:**





---
### getReactionsByModule



```php
public Reactions::getReactionsByModule(string $module, ?int $moduleId = null): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** |  |
| `moduleId` | **?int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
