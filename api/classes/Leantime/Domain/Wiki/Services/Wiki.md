---
title: \Leantime\Domain\Wiki\Services\Wiki
footer: false
---

# Wiki




`leantime.rpc.Wiki.Wiki.`


## Available Methods
### `leantime.rpc.Wiki.Wiki.getArticle`



```json
{
    "method": "leantime.rpc.Wiki.Wiki.getArticle",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": ,
        "projectId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `projectId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Wiki.Wiki.getAllProjectWikis`



```json
{
    "method": "leantime.rpc.Wiki.Wiki.getAllProjectWikis",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


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



```json
{
    "method": "leantime.rpc.Wiki.Wiki.getAllWikiHeadlines",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "wikiId": ,
        "userId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wikiId` | **** |  |
| `userId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Wiki.Wiki.getWiki`



```json
{
    "method": "leantime.rpc.Wiki.Wiki.getWiki",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


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
        "wikiId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `wiki` | **\Leantime\Domain\Wiki\Models\Wiki** |  |
| `wikiId` | **** |  |


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



```json
{
    "method": "leantime.rpc.Wiki.Wiki.updateArticle",
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
    "result": bool
}
```



---

