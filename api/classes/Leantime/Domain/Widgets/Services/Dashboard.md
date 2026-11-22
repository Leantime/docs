---
title: \Leantime\Domain\Widgets\Services\Dashboard
footer: false
---

# Dashboard

Class Dashboard

Aggregates and orchestrates the business logic behind the dashboard widgets
(the Welcome widget and the "My To-Dos" widget). The HxControllers in this
domain delegate all data access, grouping, ordering and orchestration to this
service so they can stay thin.
`leantime.rpc.Widgets.Dashboard.`


## Available Methods
### `leantime.rpc.Widgets.Dashboard.sendAnonymousTelemetry`

Fires the anonymous telemetry collection and waits for it to complete.

```json
{
    "method": "leantime.rpc.Widgets.Dashboard.sendAnonymousTelemetry",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```


Failures are logged and swallowed so the dashboard render path is never
blocked or broken by telemetry issues.







**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Widgets.Dashboard.getWelcomeWidgetData`

Aggregates all data the Welcome widget needs into a single array.

```json
{
    "method": "leantime.rpc.Widgets.Dashboard.getWelcomeWidgetData",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
    }
}
```


Moves the count()/is_array guards and the today start/end computation out
of the controller and into the service.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user the dashboard is rendered for. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{currentUser: mixed, showSettingsIndicator: bool, totalTickets: int, closedTicketsCount: int, ticketsInGoals: int, totalTodayCount: int, doneTodayCount: int, allProjects: array<int,mixed>, projectCount: int}
}
```



---
### `leantime.rpc.Widgets.Dashboard.getToDoWidgetData`

Builds the template variables for the "My To-Dos" widget, including the
hierarchical task assignments, the user's stored sorting preferences and
the pagination "has more" computation.

```json
{
    "method": "leantime.rpc.Widgets.Dashboard.getToDoWidgetData",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "params": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user the widget is rendered for. |
| `params` | **array** | The request parameters (limit, offset, filters...). |


**Returns:**
Template variables including hasMoreTickets, sorting and limit.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<string,mixed>
}
```



---
### `leantime.rpc.Widgets.Dashboard.getToDoWidgetLoadMoreData`

Builds the template variables for a "load more" (infinite scroll) request
of the "My To-Dos" widget.

```json
{
    "method": "leantime.rpc.Widgets.Dashboard.getToDoWidgetLoadMoreData",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "params": array,
        "pageSize": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user the widget is rendered for. |
| `params` | **array** | The request parameters; limit is incremented by the page size. |
| `pageSize` | **int** | The number of tasks loaded per page. |


**Returns:**
Template variables including hasMoreTickets, nextOffset, isLoadMore and limit.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<string,mixed>
}
```



---
### `leantime.rpc.Widgets.Dashboard.hasMoreTickets`

Computes whether more tickets are available to load by checking whether a
full page was returned.

```json
{
    "method": "leantime.rpc.Widgets.Dashboard.hasMoreTickets",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketGroups": array,
        "limit": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketGroups` | **array** | The grouped tickets returned by the tickets service. |
| `limit` | **int** | The current page limit. |


**Returns:**
True when at least a full page worth of tickets was loaded.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Widgets.Dashboard.getUserSorting`

Reads the user's stored personal task sorting preferences.

```json
{
    "method": "leantime.rpc.Widgets.Dashboard.getUserSorting",
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
| `userId` | **int** | The user whose sorting to read. |


**Returns:**
The decoded sorting array, or an empty array when none is stored.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Widgets.Dashboard.saveTodoSorting`

Persists the user's personal task sorting preferences and applies any group
changes (time/project/priority moves) and dependency (parent) updates.

```json
{
    "method": "leantime.rpc.Widgets.Dashboard.saveTodoSorting",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "rawItems": mixed,
        "groupChanges": array,
        "groupBy": string,
    }
}
```


Owns the json_decode / normalize / +10 ordering, persistence of the sorting
setting, the dependency updates and the group-change application. Returns the
success/error counts of the group changes so the caller can map them to
notifications.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user whose sorting to persist. |
| `rawItems` | **mixed** | The raw, JSON-encoded sort items from the request (array expected). |
| `groupChanges` | **array** | The raw, JSON-encoded group-change items from the request. |
| `groupBy` | **string** | The grouping type the changes apply to (time, project, priority). |


**Returns:**
Result of the operation.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{sorted: bool, successCount: int, errorCount: int}
}
```



---
### `leantime.rpc.Widgets.Dashboard.toggleTaskCollapse`

Toggles the collapse state of a task for a user and returns the new state.

```json
{
    "method": "leantime.rpc.Widgets.Dashboard.toggleTaskCollapse",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "taskId": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user whose collapse state to toggle. |
| `taskId` | **string** | The task whose collapse state to toggle. |


**Returns:**
The new collapse state ('open' or 'closed').
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---
### `leantime.rpc.Widgets.Dashboard.addTodo`

Quick-adds a to-do, defaulting its due date based on the group context
(this week / overdue / later) when no explicit date was provided.

```json
{
    "method": "leantime.rpc.Widgets.Dashboard.addTodo",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | The quick-add parameters (must contain &#039;quickadd&#039;). |


**Returns:**
The result of the underlying quick-add call.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool|int
}
```



---
### `leantime.rpc.Widgets.Dashboard.addSubtask`

Creates a subtask under the given parent ticket.

```json
{
    "method": "leantime.rpc.Widgets.Dashboard.addSubtask",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
        "parentTicketId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | The subtask form values. |
| `parentTicketId` | **int** | The id of the parent ticket. |


**Returns:**
True on success, false otherwise.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Widgets.Dashboard.resolveQuickAddDueDate`

Resolves the due date for a quick-added to-do based on the group context.

```json
{
    "method": "leantime.rpc.Widgets.Dashboard.resolveQuickAddDueDate",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": array,
    }
}
```


If a non-empty date was already supplied it is returned unchanged. Otherwise
"thisWeek" maps to next Friday, "overdue" maps to today, and "later" leaves
the date empty.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | The quick-add parameters. |


**Returns:**
The resolved due date (Y-m-d) or an empty string.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---

