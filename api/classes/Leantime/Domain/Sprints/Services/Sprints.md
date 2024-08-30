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
    "result": array|false
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
    "result": int|bool
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
### `leantime.rpc.Sprints.Sprints.getAllSprints`



```json
{
    "method": "leantime.rpc.Sprints.Sprints.getAllSprints",
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
    "result": array
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
### `leantime.rpc.Sprints.Sprints.addSprint`



```json
{
    "method": "leantime.rpc.Sprints.Sprints.addSprint",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|object
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
        "params": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|object
}
```



---
### `leantime.rpc.Sprints.Sprints.getSprintBurndown`



```json
{
    "method": "leantime.rpc.Sprints.Sprints.getSprintBurndown",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "sprint": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sprint` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
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
        "project": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---

