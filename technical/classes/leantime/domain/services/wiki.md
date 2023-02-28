---
title: \leantime\domain\services\wiki
footer: false
---

# wiki





* Full name: `\leantime\domain\services\wiki`



## Methods

### __construct



```php
public wiki::__construct(): mixed
```









**Return Value:**





---
### getArticle



```php
public wiki::getArticle(mixed $id, mixed $projectId = null): mixed
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
public wiki::getAllProjectWikis(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllWikiHeadlines



```php
public wiki::getAllWikiHeadlines(mixed $wikiId, mixed $userId): mixed
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
public wiki::getWiki(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### createWiki



```php
public wiki::createWiki(\leantime\domain\models\wiki $wiki): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **\leantime\domain\models\wiki** |  |


**Return Value:**





---
### updateWiki



```php
public wiki::updateWiki(\leantime\domain\models\wiki $wiki, mixed $wikiId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **\leantime\domain\models\wiki** |  |
| `wikiId` | **mixed** |  |


**Return Value:**





---
### createArticle



```php
public wiki::createArticle(\leantime\domain\models\wiki\article $article): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `article` | **\leantime\domain\models\wiki\article** |  |


**Return Value:**





---
### updateArticle



```php
public wiki::updateArticle(\leantime\domain\models\wiki\article $article): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `article` | **\leantime\domain\models\wiki\article** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
