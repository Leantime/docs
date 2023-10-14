---
title: \Leantime\Domain\Reactions\Services\Reactions
footer: false
---

# Reactions





* Full name: `\Leantime\Domain\Reactions\Services\Reactions`



## Methods

### __construct



```php
public Reactions::__construct(\Leantime\Domain\Reactions\Repositories\Reactions $reactionsRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `reactionsRepo` | **\Leantime\Domain\Reactions\Repositories\Reactions** |  |


**Return Value:**





---
### addReaction

addReaction - adds a reaction to an entity, checks if a user has already reacted the same way

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
### getReactionType

getReactionType - returns the category/type of a given reaction

```php
public Reactions::getReactionType(string $reaction): string|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
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
### removeReaction

addReaction - adds a reaction to an entity, checks if a user has already reacted the same way

```php
public Reactions::removeReaction(int $userId, string $module, int $moduleId, string $reaction): bool
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


---
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
