---
title: \Leantime\Domain\Comments\Services\Comments
footer: false
---

# Comments



`leantime.rpc.Comments.Comments.`


## Available Methods
### `leantime.rpc.Comments.Comments.getComments`

Get the comments of an entity.

```json
{
    "method": "leantime.rpc.Comments.Comments.getComments",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "module": string,
        "entityId": int,
        "commentOrder": int,
        "parent": int,
        "strict": bool,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** | ticket, project, article, idea, {type}canvasitem (or an alias). |
| `entityId` | **int** | The entity id. |
| `commentOrder` | **int** | Sort order flag passed to the repository. |
| `parent` | **int** | Parent comment id (0 = top level). |
| `strict` | **bool** | Reject modules other than ticket, project, article, idea and {type}canvasitem<br />(API/MCP callers); web callers also read client and plugin modules. |


**Returns:**
The comments.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|array
}
```



---
### `leantime.rpc.Comments.Comments.addComment`

Add a comment to an entity (API entry point).

```json
{
    "method": "leantime.rpc.Comments.Comments.addComment",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
        "module": string,
        "entityId": int,
        "entity": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | Comment values: text (required), father/parentId, status. |
| `module` | **string** | ticket, project, article, idea, {type}canvasitem (aliases such as &quot;tickets&quot; are accepted). |
| `entityId` | **int** | The id of the entity being commented on. |
| `entity` | **mixed** | Ignored; kept for backwards compatibility of the RPC signature. |


**Returns:**
True when the comment was stored; false when the comment text is empty or the write fails.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Comments.Comments.editComment`

Edit a comment. The caller must be the comment author or a manager+.

```json
{
    "method": "leantime.rpc.Comments.Comments.editComment",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": mixed,
        "id": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |
| `id` | **mixed** |  |


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

Delete a comment. The caller must be the comment author or a manager+.

```json
{
    "method": "leantime.rpc.Comments.Comments.deleteComment",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "commentId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `commentId` | **mixed** |  |


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

Comments across the projects the user can access, newest data for polling clients.

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
### `leantime.rpc.Comments.Comments.toggleCommentReaction`

Toggle a sentiment reaction on a comment for a given user.

```json
{
    "method": "leantime.rpc.Comments.Comments.toggleCommentReaction",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "commentId": int,
        "reaction": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | Ignored — reactions always act as the session user (kept for RPC<br />signature compatibility). See the in-body session pin. |
| `commentId` | **int** | The comment being reacted to |
| `reaction` | **string** | The reaction code (e.g. an emoji key) |


**Returns:**
True when the toggle was applied, false when the reaction
type is unknown and nothing was changed
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Comments.Comments.getCommentReactions`

Build the reaction view data for a comment.

```json
{
    "method": "leantime.rpc.Comments.Comments.getCommentReactions",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "commentId": int,
        "userId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `commentId` | **int** | The comment to load reactions for |
| `userId` | **int** | The current user id (0 when anonymous) |


**Returns:**
View data
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{reactions: array, userReactions: list<string>}
}
```



---

