---
title: \Leantime\Domain\Sprints\Services\Sprints
footer: false
---

# Sprints




`leantime.rpc.Sprints.Sprints.`


## Available Methods
### `leantime.rpc.Sprints.Sprints.getSprint`



```json
{
    "method": "leantime.rpc.Sprints.Sprints.getSprint",
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
    "result": false|\Leantime\Domain\Sprints\Models\Sprints
}
```



---
### `leantime.rpc.Sprints.Sprints.getCurrentSprintId`

getCurrentSprintId returns the ID of the current sprint in the project provided

```json
{
    "method": "leantime.rpc.Sprints.Sprints.getCurrentSprintId",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
    }
}
```


The session value is the task-view sprint filter, which can also hold non-id selections
such as "all" or "backlog"; those yield false just like an unset filter.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |


**Returns:**
The selected sprint id, or false when no single sprint is selected
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|int
}
```



---
### `leantime.rpc.Sprints.Sprints.getUpcomingSprint`



```json
{
    "method": "leantime.rpc.Sprints.Sprints.getUpcomingSprint",
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
| `projectId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|\Leantime\Domain\Sprints\Models\Sprints
}
```



---
### `leantime.rpc.Sprints.Sprints.getAllSprints`

All sprints of a project.

```json
{
    "method": "leantime.rpc.Sprints.Sprints.getAllSprints",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int|string|null,
    }
}
```


A null project means the session project (never "every project"); a non-positive or
unresolvable project, or one the caller cannot view, yields an empty list.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|string|null** | The project id, or null for the session project. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,\Leantime\Domain\Sprints\Models\Sprints>
}
```



---
### `leantime.rpc.Sprints.Sprints.getAllFutureSprints`



```json
{
    "method": "leantime.rpc.Sprints.Sprints.getAllFutureSprints",
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
| `projectId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|array
}
```



---
### `leantime.rpc.Sprints.Sprints.addSprint`



```json
{
    "method": "leantime.rpc.Sprints.Sprints.addSprint",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int|false
}
```



---
### `leantime.rpc.Sprints.Sprints.editSprint`



```json
{
    "method": "leantime.rpc.Sprints.Sprints.editSprint",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \Leantime\Domain\Sprints\Models\Sprints|false
}
```



---
### `leantime.rpc.Sprints.Sprints.deleteSprint`

deleteSprint - deletes a sprint and clears the current-sprint session value.

```json
{
    "method": "leantime.rpc.Sprints.Sprints.deleteSprint",
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
| `id` | **int** | Sprint id to delete. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Sprints.Sprints.getSprintBurndown`

Burndown chart data for a sprint.

```json
{
    "method": "leantime.rpc.Sprints.Sprints.getSprintBurndown",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "sprint": \Leantime\Domain\Sprints\Models\Sprints,
    }
}
```


The sprint is reloaded by id and authorized against its REAL project (a caller-supplied
model is never trusted for its project or dates).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **\Leantime\Domain\Sprints\Models\Sprints** | The sprint (only its id is used). |


**Returns:**
The burndown rows, or false when the sprint does not exist.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|array
}
```



---
### `leantime.rpc.Sprints.Sprints.getCummulativeReport`



```json
{
    "method": "leantime.rpc.Sprints.Sprints.getCummulativeReport",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "project": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|array
}
```



---

