---
title: \Leantime\Domain\Widgets\Services\Widgets
footer: false
---

# Widgets




`leantime.rpc.Widgets.Widgets.`


## Available Methods
### `leantime.rpc.Widgets.Widgets.getAll`

Retrieves all available widgets.

```json
{
    "method": "leantime.rpc.Widgets.Widgets.getAll",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**
The array of available widgets.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Widgets.Widgets.getActiveWidgets`

Retrieves the active widgets for a specific user.

```json
{
    "method": "leantime.rpc.Widgets.Widgets.getActiveWidgets",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |


**Returns:**
The array of active widgets.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Widgets.Widgets.resetDashboard`

Resets the dashboard grid for a specific user.

```json
{
    "method": "leantime.rpc.Widgets.Widgets.resetDashboard",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user for whom the dashboard grid needs to be reset. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---

