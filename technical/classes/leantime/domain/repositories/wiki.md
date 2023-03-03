---
title: \leantime\domain\repositories\wiki
footer: false
---

# wiki





* Full name: `\leantime\domain\repositories\wiki`



## Methods

### __construct

__construct - get database connection

```php
public wiki::__construct(): mixed
```









**Return Value:**





---
### getArticle



```php
public wiki::getArticle(mixed $id, mixed $projectId): mixed
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
### getAllWikiHeadlines



```php
public wiki::getAllWikiHeadlines(mixed $canvasId, mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `canvasId` | **mixed** |  |
| `userId` | **mixed** |  |


**Return Value:**





---
### createWiki



```php
public wiki::createWiki(mixed $wiki): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **mixed** |  |


**Return Value:**





---
### updateWiki



```php
public wiki::updateWiki(mixed $wiki, mixed $wikiId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **mixed** |  |
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
### delArticle



```php
public wiki::delArticle(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### delWiki



```php
public wiki::delWiki(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
