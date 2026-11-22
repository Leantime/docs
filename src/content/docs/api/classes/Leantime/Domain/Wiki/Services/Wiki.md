---
title: "Wiki API"
description: "Reference for the Leantime Wiki JSON-RPC service: every leantime.rpc.Wiki method with its parameters and return values."
---

`leantime.rpc.Wiki.Wiki.`


## Available Methods
### `leantime.rpc.Wiki.Wiki.getArticle`

Get an article by ID and project.

```json
{
    "method": "leantime.rpc.Wiki.Wiki.getArticle",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int|null,
        "projectId": int|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int\|null** | Article id (null loads the featured article) |
| `projectId` | **int\|null** | Project id (defaults to the session project) |


**Returns:**
The article, or false when it does not exist or is not visible
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \Leantime\Domain\Wiki\Models\Article|false
}
```



---
### `leantime.rpc.Wiki.Wiki.getAllProjectWikis`

Gets all project wikis. Creates one if there aren't any

```json
{
    "method": "leantime.rpc.Wiki.Wiki.getAllProjectWikis",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Wiki.Wiki.getAllWikiHeadlines`

List the article headlines in a wiki.

```json
{
    "method": "leantime.rpc.Wiki.Wiki.getAllWikiHeadlines",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "wikiId": mixed,
        "userId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wikiId` | **mixed** |  |
| `userId` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|array
}
```



---
### `leantime.rpc.Wiki.Wiki.getWiki`

Get a single wiki (notebook) by id.

```json
{
    "method": "leantime.rpc.Wiki.Wiki.getWiki",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Wiki.Wiki.createWiki`



```json
{
    "method": "leantime.rpc.Wiki.Wiki.createWiki",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "wiki": \Leantime\Domain\Wiki\Models\Wiki,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **\Leantime\Domain\Wiki\Models\Wiki** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|string
}
```



---
### `leantime.rpc.Wiki.Wiki.updateWiki`



```json
{
    "method": "leantime.rpc.Wiki.Wiki.updateWiki",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "wiki": \Leantime\Domain\Wiki\Models\Wiki,
        "wikiId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **\Leantime\Domain\Wiki\Models\Wiki** |  |
| `wikiId` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Wiki.Wiki.createArticle`

Create a new article and record an audit event.

```json
{
    "method": "leantime.rpc.Wiki.Wiki.createArticle",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "article": \Leantime\Domain\Wiki\Models\Article,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `article` | **\Leantime\Domain\Wiki\Models\Article** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|string
}
```



---
### `leantime.rpc.Wiki.Wiki.updateArticle`

Update an article and record audit events for changed fields.

```json
{
    "method": "leantime.rpc.Wiki.Wiki.updateArticle",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "article": \Leantime\Domain\Wiki\Models\Article,
        "existingArticle": \Leantime\Domain\Wiki\Models\Article|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `article` | **\Leantime\Domain\Wiki\Models\Article** | The article with its new values (id required) |
| `existingArticle` | **\Leantime\Domain\Wiki\Models\Article\|null** | The article before the change, for the audit trail |


**Returns:**
True when the article was saved
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Wiki.Wiki.deleteArticle`

Delete an article, fencing the operation against the article's project.

```json
{
    "method": "leantime.rpc.Wiki.Wiki.deleteArticle",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | Article id |


**Returns:**
True when the article was deleted
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Wiki.Wiki.deleteWiki`

Delete a wiki (notebook), fencing the operation against the wiki's project.

```json
{
    "method": "leantime.rpc.Wiki.Wiki.deleteWiki",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Wiki.Wiki.getArticleActivity`

Get combined activity feed for an article (audit events + comments).

```json
{
    "method": "leantime.rpc.Wiki.Wiki.getArticleActivity",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "articleId": int,
        "limit": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `articleId` | **int** | Article id |
| `limit` | **int** | Maximum number of entries |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---

