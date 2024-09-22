---
title: \Leantime\Domain\Wiki\Services\Wiki
footer: false
---

# Wiki




`\Leantime\Domain\Wiki\Services\Wiki`




## Methods

### __construct



```php
public Wiki::__construct(\Leantime\Domain\Wiki\Repositories\Wiki $wikiRepository, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wikiRepository` | **\Leantime\Domain\Wiki\Repositories\Wiki** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### getArticle



```php
public Wiki::getArticle( $id,  $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `projectId` | **** |  |


**Return Value:**





---
### getAllProjectWikis

Gets all project wikis. Creates one if there aren't any

```php
public Wiki::getAllProjectWikis( $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getAllWikiHeadlines



```php
public Wiki::getAllWikiHeadlines( $wikiId,  $userId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wikiId` | **** |  |
| `userId` | **** |  |


**Return Value:**





---
### getWiki



```php
public Wiki::getWiki( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### createWiki



```php
public Wiki::createWiki(\Leantime\Domain\Wiki\Models\Wiki $wiki): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **\Leantime\Domain\Wiki\Models\Wiki** |  |


**Return Value:**





---
### updateWiki



```php
public Wiki::updateWiki(\Leantime\Domain\Wiki\Models\Wiki $wiki,  $wikiId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **\Leantime\Domain\Wiki\Models\Wiki** |  |
| `wikiId` | **** |  |


**Return Value:**





---
### createArticle



```php
public Wiki::createArticle(\Leantime\Domain\Wiki\Models\Article $article): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `article` | **\Leantime\Domain\Wiki\Models\Article** |  |


**Return Value:**





---
### updateArticle



```php
public Wiki::updateArticle(\Leantime\Domain\Wiki\Models\Article $article): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `article` | **\Leantime\Domain\Wiki\Models\Article** |  |


**Return Value:**





---
### setCurrentWiki



```php
public Wiki::setCurrentWiki(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### setCurrentArticle



```php
public Wiki::setCurrentArticle(mixed $id, mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `userId` | **mixed** |  |


**Return Value:**





---
### getDefaultArticleForWiki



```php
public Wiki::getDefaultArticleForWiki(mixed $wikiId, mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wikiId` | **mixed** |  |
| `userId` | **mixed** |  |


**Return Value:**





---
### clearWikiCache



```php
public Wiki::clearWikiCache(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
