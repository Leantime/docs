---
title: \Leantime\Domain\Goalcanvas\Services\Goalcanvas
footer: false
---

# Goalcanvas




`leantime.rpc.Goalcanvas.Goalcanvas.`


## Available Methods
### `leantime.rpc.Goalcanvas.Goalcanvas.getCanvasItemsById`



```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getCanvasItemsById",
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
    "result": array
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.getChildGoalsForReporting`



```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getChildGoalsForReporting",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "parentId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int|mixed
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.getChildrenbyKPI`



```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getChildrenbyKPI",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "parentId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.getParentKPIs`



```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getParentKPIs",
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
### `leantime.rpc.Goalcanvas.Goalcanvas.createGoal`



```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.createGoal",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.pollGoals`



```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.pollGoals",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
        "board": ?int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `board` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.pollForUpdatedGoals`



```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.pollForUpdatedGoals",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
        "board": ?int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `board` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

