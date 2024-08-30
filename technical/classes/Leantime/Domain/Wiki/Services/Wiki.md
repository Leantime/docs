---
title: \Leantime\Domain\Wiki\Services\Wiki
footer: false
---

# Wiki




`\Leantime\Domain\Wiki\Services\Wiki`




## Methods

### __construct



```php
public Wiki::__construct(\Leantime\Domain\Wiki\Repositories\Wiki $wikiRepository): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wikiRepository` | **\Leantime\Domain\Wiki\Repositories\Wiki** |  |


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


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
