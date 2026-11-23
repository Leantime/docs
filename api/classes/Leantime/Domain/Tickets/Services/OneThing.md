---
title: \Leantime\Domain\Tickets\Services\OneThing
footer: false
---

# OneThing

"Your one thing": the one to-do a person picks as the thing that matters most on a given day.

`leantime.rpc.Tickets.OneThing.`


## Available Methods
### `leantime.rpc.Tickets.OneThing.getOneThing`

Your one thing for a day.

```json
{
    "method": "leantime.rpc.Tickets.OneThing.getOneThing",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "date": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **string** | The day, as YYYY-MM-DD in your own time zone. |


**Returns:**
Null when nothing is set, or the to-do no longer exists or you can no longer see it.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{date: string, taskId: int, task: array{id: int, headline: string, projectId: int, status: int}}|null
}
```



---
### `leantime.rpc.Tickets.OneThing.setOneThing`

Makes a to-do your one thing for a day, replacing any earlier choice for that day.

```json
{
    "method": "leantime.rpc.Tickets.OneThing.setOneThing",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "date": string,
        "taskId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **string** | The day, as YYYY-MM-DD in your own time zone. |
| `taskId` | **int** | The to-do. It must exist and you must be able to see it. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{date: string, taskId: int, task: array{id: int, headline: string, projectId: int, status: int}}
}
```



---
### `leantime.rpc.Tickets.OneThing.clearOneThing`

Clears your one thing for a day. Clearing a day with nothing set is fine.

```json
{
    "method": "leantime.rpc.Tickets.OneThing.clearOneThing",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "date": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **string** | The day, as YYYY-MM-DD in your own time zone. |


**Returns:**
True once the day has no one thing.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Tickets.OneThing.getOneThings`

Your one things for a range of days, oldest first. Days with nothing set, or whose to-do
no longer exists or is hidden from you, are left out.

```json
{
    "method": "leantime.rpc.Tickets.OneThing.getOneThings",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "from": string,
        "until": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | **string** | First day, YYYY-MM-DD. |
| `until` | **string** | Last day, YYYY-MM-DD, inclusive. At most 62 days after-and-including $from. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array{date: string, taskId: int, task: array{id: int, headline: string, projectId: int, status: int}}>
}
```



---

