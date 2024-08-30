---
title: \Leantime\Domain\Comments\Services\Comments
footer: false
---

# Comments




`leantime.rpc.Comments.Comments.`


## Available Methods
### `leantime.rpc.Comments.Comments.getComments`



```json
{
    "method": "leantime.rpc.Comments.Comments.getComments",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "module": ,
        "entityId": ,
        "commentOrder": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **** |  |
| `entityId` | **** |  |
| `commentOrder` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Comments.Comments.addComment`



```json
{
    "method": "leantime.rpc.Comments.Comments.addComment",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": ,
        "module": ,
        "entityId": ,
        "entity": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `module` | **** |  |
| `entityId` | **** |  |
| `entity` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Comments.Comments.editComment`



```json
{
    "method": "leantime.rpc.Comments.Comments.editComment",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": ,
        "id": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `id` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Comments.Comments.deleteComment`



```json
{
    "method": "leantime.rpc.Comments.Comments.deleteComment",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "commentId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `commentId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Comments.Comments.pollComments`



```json
{
    "method": "leantime.rpc.Comments.Comments.pollComments",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
        "moduleId": ?int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** | Project ID |
| `moduleId` | **?int** | Id of the entity to pull comments from |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

