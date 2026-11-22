---
title: \Leantime\Domain\Dashboard\Services\Dashboard
footer: false
---

# Dashboard

Dashboard service - business logic backing the project dashboard view.

`leantime.rpc.Dashboard.Dashboard.`


## Available Methods
### `leantime.rpc.Dashboard.Dashboard.getProjectCommentsWithReplies`

Gets the top-level comments for a project with their replies attached.

```json
{
    "method": "leantime.rpc.Dashboard.Dashboard.getProjectCommentsWithReplies",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project to load comments for |


**Returns:**
Top-level comments, each with a 'replies' array
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---
### `leantime.rpc.Dashboard.Dashboard.countProjectComments`

Counts all comments attached to a project.

```json
{
    "method": "leantime.rpc.Dashboard.Dashboard.countProjectComments",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project to count comments for |


**Returns:**
The number of comments
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Dashboard.Dashboard.deleteProjectComment`

Deletes a project comment.

```json
{
    "method": "leantime.rpc.Dashboard.Dashboard.deleteProjectComment",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "commentId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `commentId` | **int** | The comment to delete |


**Returns:**
True if the comment was deleted
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Dashboard.Dashboard.addProjectComment`

Adds a comment to a project.

```json
{
    "method": "leantime.rpc.Dashboard.Dashboard.addProjectComment",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array<string,mixed>,
        "projectId": int,
        "project": array<string,mixed>,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array<string,mixed>** | The submitted comment values |
| `projectId` | **int** | The project the comment belongs to |
| `project` | **array<string,mixed>** | The loaded project entity |


**Returns:**
True if the comment was created
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Dashboard.Dashboard.userHasFavoritedProject`

Determines whether a user has favorited a project.

```json
{
    "method": "leantime.rpc.Dashboard.Dashboard.userHasFavoritedProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user to check |
| `projectId` | **int** | The project to check |


**Returns:**
True if the user has a favorite reaction on the project
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---

