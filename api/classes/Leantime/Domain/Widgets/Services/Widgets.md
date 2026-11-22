---
title: \Leantime\Domain\Widgets\Services\Widgets
footer: false
---

# Widgets



`leantime.rpc.Widgets.Widgets.`


## Available Methods
### `leantime.rpc.Widgets.Widgets.registerWidget`

Register a new widget.

```json
{
    "method": "leantime.rpc.Widgets.Widgets.registerWidget",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "widget": \Leantime\Domain\Widgets\Models\Widget,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `widget` | **\Leantime\Domain\Widgets\Models\Widget** | The widget to register. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
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
### `leantime.rpc.Widgets.Widgets.getNewWidgets`

Get new widgets for the user.

```json
{
    "method": "leantime.rpc.Widgets.Widgets.getNewWidgets",
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
An array of new widgets.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Widgets.Widgets.saveGridForUser`

Persists the dashboard grid for a user and, when visibility data marks the
widget as visible, records it in the user's widget history.

```json
{
    "method": "leantime.rpc.Widgets.Widgets.saveGridForUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "data": mixed,
        "userId": int,
        "visibilityData": array|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | **mixed** | The grid layout data to persist. |
| `userId` | **int** | The user whose grid is being saved. |
| `visibilityData` | **array\|null** | Optional [&#039;visible&#039; =&gt; bool, &#039;widgetId&#039; =&gt; string] payload. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Widgets.Widgets.getMyProjectsWidgetData`

Builds the data for the "My Projects" dashboard widget: the open projects
assigned to the user, each enriched with its progress and realtime report,
plus a deduplicated client map.

```json
{
    "method": "leantime.rpc.Widgets.Widgets.getMyProjectsWidgetData",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "clientFilter": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user whose assigned projects to load |
| `clientFilter` | **string** | Optional client id to filter projects by (&#039;&#039; = all clients) |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{projects: array<int,array<string,mixed>>, clients: array<int|string,string>}
}
```



---

