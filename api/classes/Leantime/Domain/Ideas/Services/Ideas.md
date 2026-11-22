---
title: \Leantime\Domain\Ideas\Services\Ideas
footer: false
---

# Ideas

Ideas service - business logic for idea boards and idea items.

`leantime.rpc.Ideas.Ideas.`


## Available Methods
### `leantime.rpc.Ideas.Ideas.reorderIdeas`

Authorized JSON-RPC entry point: persist a new idea sort order.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.reorderIdeas",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "payload": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `payload` | **array** | List of { id, sortIndex } entries |


**Returns:**
True on success, false if unauthorized or the update failed
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Ideas.Ideas.bulkUpdateStatus`

Authorized JSON-RPC entry point: bulk status/sort update from the idea kanban.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.bulkUpdateStatus",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "payload": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `payload` | **array** | Map of statusKey =&gt; &quot;item[]=ID&amp;item[]=ID2...&quot; |


**Returns:**
True on success, false if unauthorized or the update failed
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Ideas.Ideas.patchIdeaItem`

Authorized JSON-RPC entry point: patch a single idea/canvas item.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.patchIdeaItem",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "params": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The canvas item id |
| `params` | **array** | Fields to update |


**Returns:**
True on success, false if unauthorized or the update failed
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Ideas.Ideas.pollForNewIdeas`

Polls for new ideas in a project / board, normalizing dates for the API.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.pollForNewIdeas",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int|null,
        "board": int|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|null** | Project to filter by, or null for all accessible projects. |
| `board` | **int|null** | Board to filter by, or null for all boards. |


**Returns:**
List of ideas with ISO8601 dates.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---
### `leantime.rpc.Ideas.Ideas.pollForUpdatedIdeas`

Polls for updated ideas, appending the modified timestamp to the id for change detection.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.pollForUpdatedIdeas",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int|null,
        "board": int|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|null** | Project to filter by, or null for all accessible projects. |
| `board` | **int|null** | Board to filter by, or null for all boards. |


**Returns:**
List of ideas with ISO8601 dates and composite ids.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---
### `leantime.rpc.Ideas.Ideas.getAllBoards`

Returns all idea boards for a project.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.getAllBoards",
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
| `projectId` | **int** | Project id. |


**Returns:**
List of boards.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---
### `leantime.rpc.Ideas.Ideas.getBoard`

Returns a single idea board by id.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.getBoard",
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
| `id` | **int** | Board id. |


**Returns:**
Single board rows (matching repository shape).
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---
### `leantime.rpc.Ideas.Ideas.getBoardTitle`

Returns the title of a single idea board, or an empty string if not found.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.getBoardTitle",
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
| `id` | **int** | Board id. |


**Returns:**
Board title.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---
### `leantime.rpc.Ideas.Ideas.getBoardItems`

Returns the canvas items for a board.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.getBoardItems",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "boardId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `boardId` | **int** | Board id. |


**Returns:**
Canvas items.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---
### `leantime.rpc.Ideas.Ideas.getBoardLabels`

Returns the configured idea status labels.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.getBoardLabels",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**
Label structure (array keyed by status).
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Ideas.Ideas.createBoard`

Creates a new idea board, queuing a creation notification to project users.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.createBoard",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "title": string,
        "projectId": int,
        "authorId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **string** | Board title. |
| `projectId` | **int** | Project the board belongs to. |
| `authorId` | **int** | Author user id. |


**Returns:**
The new board id.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Ideas.Ideas.createBoardFromDialog`

Creates a new idea board from the board dialog, queuing the dialog-specific
creation notification to project users.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.createBoardFromDialog",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "title": string,
        "projectId": int,
        "authorId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **string** | Board title. |
| `projectId` | **int** | Project the board belongs to. |
| `authorId` | **int** | Author user id. |


**Returns:**
The new board id.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Ideas.Ideas.updateBoard`

Updates an idea board title.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.updateBoard",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "title": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | Board id. |
| `title` | **string** | New title. |


**Returns:**
Result of the underlying update.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Ideas.Ideas.ensureBoardExists`

Ensures at least one board exists for a project, creating a default one if none do.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.ensureBoardExists",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
        "authorId": int,
        "allBoards": array<int,array<string,mixed>>,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | Project id. |
| `authorId` | **int** | Author user id for the default board. |
| `allBoards` | **array<int,array<string,mixed>>** | Already-loaded boards for the project. |


**Returns:**
Newly created board id, or 0 if none was created.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Ideas.Ideas.getIdeaItem`

Loads a single idea item for display, normalizing the box value and
returning an empty-item default when no id is supplied.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.getIdeaItem",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int|null,
        "type": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int|null** | Idea item id, or null when creating a new item. |
| `type` | **string** | Default box/type for a new item. |


**Returns:**
Idea item (normalized) or empty-item default.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<string,mixed>
}
```



---
### `leantime.rpc.Ideas.Ideas.getRawIdeaItem`

Returns a single raw idea item without the display normalization applied by
{@see self::getIdeaItem()}. A null id is coerced to 0 (no match), mirroring
the historical repository call.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.getRawIdeaItem",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int|null** | Idea item id. |


**Returns:**
The idea item array, or false when not found.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Ideas.Ideas.getCanvasTypes`

Returns the canvas type map (status keys to label keys).

```json
{
    "method": "leantime.rpc.Ideas.Ideas.getCanvasTypes",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**
Canvas types.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<string,string>
}
```



---
### `leantime.rpc.Ideas.Ideas.createIdeaItem`

Creates a new idea item and queues a creation notification to project users.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.createIdeaItem",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "input": array<string,mixed>,
        "projectId": int,
        "authorId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | **array<string,mixed>** | Idea item input (box, description, status, data, canvasId, ...). |
| `projectId` | **int** | Project id for the notification. |
| `authorId` | **int** | Author user id. |


**Returns:**
The new idea item id.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Ideas.Ideas.updateIdeaItem`

Updates an existing idea item, optionally quick-adding or attaching a milestone,
then queues an edit notification to project users.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.updateIdeaItem",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "input": array<string,mixed>,
        "projectId": int,
        "authorId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | **array<string,mixed>** | Idea item input including itemId and optional milestone fields. |
| `projectId` | **int** | Project id for the notification. |
| `authorId` | **int** | Author user id. |


**Returns:**
The idea item id that was updated.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Ideas.Ideas.removeMilestone`

Detaches a milestone from an idea item.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.removeMilestone",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ideaItemId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ideaItemId` | **int** | Idea item id. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Ideas.Ideas.getProjectMilestones`

Returns all milestones available to attach to an idea item, for the current project.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.getProjectMilestones",
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
| `projectId` | **int** | Project id. |


**Returns:**
Milestones.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,mixed>|false
}
```



---
### `leantime.rpc.Ideas.Ideas.addIdeaComment`

Adds a comment to an idea item and queues a notification to project users.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.addIdeaComment",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "text": string,
        "ideaItemId": int,
        "parentCommentId": int|string,
        "projectId": int,
        "authorId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** | Comment text. |
| `ideaItemId` | **int** | Idea item (module) id. |
| `parentCommentId` | **int|string** | Parent comment id (&#039;father&#039;). |
| `projectId` | **int** | Project id for the notification. |
| `authorId` | **int** | Author user id. |


**Returns:**
The new comment id, or false on failure.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|string
}
```



---
### `leantime.rpc.Ideas.Ideas.removeIdeaComment`

Deletes a comment.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.removeIdeaComment",
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
| `commentId` | **int** | Comment id. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Ideas.Ideas.getIdeaComments`

Returns the comments for a module/entity.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.getIdeaComments",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "module": string,
        "entityId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** | Comment module key. |
| `entityId` | **int** | Entity id. |


**Returns:**
Comments.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,mixed>|false
}
```



---
### `leantime.rpc.Ideas.Ideas.countIdeaComments`

Returns the number of comments for a module/entity.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.countIdeaComments",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "module": string,
        "entityId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** | Comment module key. |
| `entityId` | **int** | Entity id. |


**Returns:**
Comment count.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Ideas.Ideas.deleteCanvas`

Delete an idea board, fencing the operation against the board's project.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.deleteCanvas",
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
| `id` | **int** | Board (canvas) id. |


**Returns:**
True when deleted, false when the board does not resolve to a project.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Ideas.Ideas.deleteCanvasItem`

Delete an idea item, fencing the operation against the item's project.

```json
{
    "method": "leantime.rpc.Ideas.Ideas.deleteCanvasItem",
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
| `id` | **int** | Canvas item id. |


**Returns:**
True when deleted, false when the item does not resolve to a project.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---

