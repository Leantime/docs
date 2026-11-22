---
title: \Leantime\Domain\Reports\Services\Reports
footer: false
---

# Reports

Reports service: per-project report aggregation (burndown, ticket-status history) plus the
system-level daily-ingestion and telemetry tasks.

`leantime.rpc.Reports.Reports.`


## Available Methods
### `leantime.rpc.Reports.Reports.getSprintBurndownForReport`

Resolves which sprint burndown to display on the reports page.

```json
{
    "method": "leantime.rpc.Reports.Reports.getSprintBurndownForReport",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
        "requestedSprintId": int|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | Project to resolve the burndown for. |
| `requestedSprintId` | **int|null** | Sprint id explicitly requested by the user, or null. |


**Returns:**
Burndown chart data and the resolved sprint id.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{chart: false|array, currentSprintId: int|false}
}
```



---
### `leantime.rpc.Reports.Reports.getFullReport`

Returns a project's stored report history, authorized against the requested project.

```json
{
    "method": "leantime.rpc.Reports.Reports.getFullReport",
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
### `leantime.rpc.Reports.Reports.getRealtimeReport`

Computes a project's current ticket report, authorized against the requested project.

```json
{
    "method": "leantime.rpc.Reports.Reports.getRealtimeReport",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
        "sprintId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `sprintId` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---

