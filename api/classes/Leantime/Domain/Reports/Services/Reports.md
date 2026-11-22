---
title: \Leantime\Domain\Reports\Services\Reports
footer: false
---

# Reports

Reports service: per-project report aggregation (burndown, ticket-status history) plus the
system-level daily-ingestion and telemetry tasks.

Authorization model: the three by-projectId @api reads carry a dispatch
#[RequiresPermission(reports.view, projectIdParam: 'projectId')] gate, authorized against the
REQUESTED project (closes the cross-project RPC IDOR). The system/cron methods (ingestion,
telemetry) are NOT @api — they run from the scheduler with no session user and must never be
RPC-reachable.
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


Mirrors the legacy controller selection order exactly:
1. An explicitly requested sprint id (from the query string).
2. Otherwise the project's current sprint.
3. Otherwise the first available sprint.

The returned 'currentSprintId' preserves the original behaviour:
when a sprint id is explicitly requested it is echoed back as-is
(even if the sprint cannot be loaded); when falling back to the
current/first sprint the resolved sprint object's id is used.
When the project has no sprints at all, both values are false.






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


$projectId is typed int so the param is REQUIRED and non-null: a JSON-RPC caller cannot
pass null to make PermissionEnforcer::resolveProjectId() fall back to the session project
(its isset() check treats explicit null as absent), which would dodge the per-target gate.






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


The repository scopes by BOTH projectId and sprint, so a foreign sprint id yields no rows.

$projectId is typed int for the same reason as getFullReport() — it keeps the dispatch gate
bound to the requested project (no null → session fallback). $sprintId stays mixed because
the empty string is the meaningful "backlog" selector.

The repository dates its rows "yesterday" because the daily snapshot stores them under the
day that just ended. A realtime report describes the project as it is now, so its date is
the current UTC datetime; formatting it for the user then shows the user's today (#4055).






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

