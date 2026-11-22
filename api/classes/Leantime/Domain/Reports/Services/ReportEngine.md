---
title: \Leantime\Domain\Reports\Services\ReportEngine
footer: false
---

# ReportEngine

Shared, period-aware reporting engine feeding the project, plan and strategy report screens.

`leantime.rpc.Reports.ReportEngine.`


## Available Methods
### `leantime.rpc.Reports.ReportEngine.buildReport`

Builds the full report view model for a set of projects in one pass: needs-attention,
milestone buckets, slippage, goals, status updates, effort, prior-period deltas and
summary stats. This is the single entry point the report screens consume.

**Limit:** This method can't be called through the API in Leantime 3.15: the `period` parameter can't be sent as JSON, so the call returns error -32602 (Invalid params).

```json
{
    "method": "leantime.rpc.Reports.ReportEngine.buildReport",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectIds": int[],
        "period": \Leantime\Domain\Reports\Models\ReportPeriod,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectIds` | **int[]** |  |
| `period` | **\Leantime\Domain\Reports\Models\ReportPeriod** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<string,mixed>
}
```



---
### `leantime.rpc.Reports.ReportEngine.getMilestoneReportForProjects`

Buckets the projects' milestones for the period.

**Limit:** This method can't be called through the API in Leantime 3.15: the `period` parameter can't be sent as JSON, so the call returns error -32602 (Invalid params).

```json
{
    "method": "leantime.rpc.Reports.ReportEngine.getMilestoneReportForProjects",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectIds": int[],
        "period": \Leantime\Domain\Reports\Models\ReportPeriod,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectIds` | **int[]** |  |
| `period` | **\Leantime\Domain\Reports\Models\ReportPeriod** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<string,mixed>
}
```



---
### `leantime.rpc.Reports.ReportEngine.getGoalReportForProjects`

Goals of the given projects with metric progress and roll-up values resolved. Projects with
the Goals module switched off are left out.

```json
{
    "method": "leantime.rpc.Reports.ReportEngine.getGoalReportForProjects",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectIds": int[],
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectIds` | **int[]** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{goals: array<int,object>, byProject: array<int,array<int,object>>, counts: array<string,int>}
}
```



---
### `leantime.rpc.Reports.ReportEngine.getStatusUpdatesForProjects`

Status updates posted within the period, grouped by project, newest first.

**Limit:** This method can't be called through the API in Leantime 3.15: the `period` parameter can't be sent as JSON, so the call returns error -32602 (Invalid params).

```json
{
    "method": "leantime.rpc.Reports.ReportEngine.getStatusUpdatesForProjects",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectIds": int[],
        "period": \Leantime\Domain\Reports\Models\ReportPeriod,
        "limitPerProject": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectIds` | **int[]** |  |
| `period` | **\Leantime\Domain\Reports\Models\ReportPeriod** |  |
| `limitPerProject` | **int** | 0 = no limit |


**Returns:**
projectId => updates
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<int,object>>
}
```



---
### `leantime.rpc.Reports.ReportEngine.getProjectSummaries`

Summary header data per project: name, one-line description, progress, latest status
update (the status pill), staleness and timeline.

```json
{
    "method": "leantime.rpc.Reports.ReportEngine.getProjectSummaries",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectIds": int[],
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectIds` | **int[]** |  |


**Returns:**
Keyed by project id
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,object>
}
```



---
### `leantime.rpc.Reports.ReportEngine.getEffortForProjects`

Hours logged in the period, totaled and broken down by project and milestone.

**Limit:** This method can't be called through the API in Leantime 3.15: the `period` parameter can't be sent as JSON, so the call returns error -32602 (Invalid params).

```json
{
    "method": "leantime.rpc.Reports.ReportEngine.getEffortForProjects",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectIds": int[],
        "period": \Leantime\Domain\Reports\Models\ReportPeriod,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectIds` | **int[]** |  |
| `period` | **\Leantime\Domain\Reports\Models\ReportPeriod** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{total: float, byProject: array<int,float>, byMilestone: array<int,float>}
}
```



---

