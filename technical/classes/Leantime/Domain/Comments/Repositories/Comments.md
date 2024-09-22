---
title: \Leantime\Domain\Comments\Repositories\Comments
footer: false
---

# Comments




`\Leantime\Domain\Comments\Repositories\Comments`




## Methods

### __construct



```php
public Comments::__construct(\Leantime\Core\Db\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |


**Return Value:**





---
### getComments



```php
public Comments::getComments( $module,  $moduleId, int $parent, string $orderByState = &quot;0&quot;): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **** |  |
| `moduleId` | **** |  |
| `parent` | **int** |  |
| `orderByState` | **string** |  |


**Return Value:**





---
### countComments



```php
public Comments::countComments( $module = null,  $moduleId = null): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **** |  |
| `moduleId` | **** |  |


**Return Value:**





---
### getReplies



```php
public Comments::getReplies( $id): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getComment



```php
public Comments::getComment( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### addComment



```php
public Comments::addComment( $values,  $module): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `module` | **** |  |


**Return Value:**





---
### deleteComment



```php
public Comments::deleteComment( $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### editComment



```php
public Comments::editComment( $text,  $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **** |  |
| `id` | **** |  |


**Return Value:**





---
### getAllAccountComments



```php
public Comments::getAllAccountComments(?int $projectId, ?int $moduleId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `moduleId` | **?int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
