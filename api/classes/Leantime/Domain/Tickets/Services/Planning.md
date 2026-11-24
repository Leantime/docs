---
title: \Leantime\Domain\Tickets\Services\Planning
footer: false
---

# Planning

Plans a to-do for a day: the day someone chose to work on it, which they can move any time.

`leantime.rpc.Tickets.Planning.`


## Available Methods
### `leantime.rpc.Tickets.Planning.planTaskForDay`

Plans a to-do for a day, replacing an earlier date-only plan.

```json
{
    "method": "leantime.rpc.Tickets.Planning.planTaskForDay",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "taskId": int,
        "date": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `taskId` | **int** | The to-do. |
| `date` | **string** | The day, as YYYY-MM-DD in your own timezone. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{taskId: int, date: string}
}
```



---
### `leantime.rpc.Tickets.Planning.clearTaskPlan`

Clears a to-do's plan. A to-do with no plan is fine; one with a set time is left alone.

```json
{
    "method": "leantime.rpc.Tickets.Planning.clearTaskPlan",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "taskId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `taskId` | **int** | The to-do. |


**Returns:**
True once the to-do has no date-only plan.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Tickets.Planning.getTaskPlan`

The days a to-do is planned for, in your own timezone. Empty when it has no Work Start.

```json
{
    "method": "leantime.rpc.Tickets.Planning.getTaskPlan",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "taskId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `taskId` | **int** | The to-do. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{taskId: int, days: list<string>, timeBoxed: bool}
}
```



---

