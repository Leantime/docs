---
title: \Leantime\Domain\Wiki\Services\Wiki
footer: false
---

# Wiki





* Full name: `\Leantime\Domain\Wiki\Services\Wiki`



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
public Wiki::getArticle(mixed $id, mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllProjectWikis



```php
public Wiki::getAllProjectWikis(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllWikiHeadlines



```php
public Wiki::getAllWikiHeadlines(mixed $wikiId, mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wikiId` | **mixed** |  |
| `userId` | **mixed** |  |


**Return Value:**





---
### getWiki



```php
public Wiki::getWiki(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### createWiki



```php
public Wiki::createWiki(\Leantime\Domain\Wiki\Models\Wiki $wiki): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **\Leantime\Domain\Wiki\Models\Wiki** |  |


**Return Value:**





---
### updateWiki



```php
public Wiki::updateWiki(\Leantime\Domain\Wiki\Models\Wiki $wiki, mixed $wikiId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **\Leantime\Domain\Wiki\Models\Wiki** |  |
| `wikiId` | **mixed** |  |


**Return Value:**





---
### createArticle



```php
public Wiki::createArticle(\Leantime\Domain\Wiki\Models\Article $article): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `article` | **\Leantime\Domain\Wiki\Models\Article** |  |


**Return Value:**





---
### updateArticle



```php
public Wiki::updateArticle(\Leantime\Domain\Wiki\Models\Article $article): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `article` | **\Leantime\Domain\Wiki\Models\Article** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
