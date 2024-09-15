---
title: \Leantime\Domain\Reports\Services\Reports
footer: false
---

# Reports




`leantime.rpc.Reports.Reports.`


## Available Methods
### `leantime.rpc.Reports.Reports.dailyIngestion`



```json
{
    "method": "leantime.rpc.Reports.Reports.dailyIngestion",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Reports.Reports.getFullReport`



```json
{
    "method": "leantime.rpc.Reports.Reports.getFullReport",
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
### `leantime.rpc.Reports.Reports.getRealtimeReport`



```json
{
    "method": "leantime.rpc.Reports.Reports.getRealtimeReport",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ,
        "sprintId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |
| `sprintId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Reports.Reports.getAnonymousTelemetry`



```json
{
    "method": "leantime.rpc.Reports.Reports.getAnonymousTelemetry",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ideaRepository": \Leantime\Domain\Ideas\Repositories\Ideas,
        "userRepository": \Leantime\Domain\Users\Repositories\Users,
        "clientRepository": \Leantime\Domain\Clients\Repositories\Clients,
        "commentsRepository": \Leantime\Domain\Comments\Repositories\Comments,
        "timesheetRepo": \Leantime\Domain\Timesheets\Repositories\Timesheets,
        "eaCanvasRepo": \Leantime\Domain\Eacanvas\Repositories\Eacanvas,
        "insightsCanvasRepo": \Leantime\Domain\Insightscanvas\Repositories\Insightscanvas,
        "leanCanvasRepo": \Leantime\Domain\Leancanvas\Repositories\Leancanvas,
        "obmCanvasRepo": \Leantime\Domain\Obmcanvas\Repositories\Obmcanvas,
        "retrosCanvasRepo": \Leantime\Domain\Retroscanvas\Repositories\Retroscanvas,
        "goalCanvasRepo": \Leantime\Domain\Goalcanvas\Repositories\Goalcanvas,
        "valueCanvasRepo": \Leantime\Domain\Valuecanvas\Repositories\Valuecanvas,
        "minEmpathyCanvasRepo": \Leantime\Domain\Minempathycanvas\Repositories\Minempathycanvas,
        "risksCanvasRepo": \Leantime\Domain\Riskscanvas\Repositories\Riskscanvas,
        "sbCanvasRepo": \Leantime\Domain\Sbcanvas\Repositories\Sbcanvas,
        "swotCanvasRepo": \Leantime\Domain\Swotcanvas\Repositories\Swotcanvas,
        "wikiRepo": \Leantime\Domain\Wiki\Repositories\Wiki,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ideaRepository` | **\Leantime\Domain\Ideas\Repositories\Ideas** |  |
| `userRepository` | **\Leantime\Domain\Users\Repositories\Users** |  |
| `clientRepository` | **\Leantime\Domain\Clients\Repositories\Clients** |  |
| `commentsRepository` | **\Leantime\Domain\Comments\Repositories\Comments** |  |
| `timesheetRepo` | **\Leantime\Domain\Timesheets\Repositories\Timesheets** |  |
| `eaCanvasRepo` | **\Leantime\Domain\Eacanvas\Repositories\Eacanvas** |  |
| `insightsCanvasRepo` | **\Leantime\Domain\Insightscanvas\Repositories\Insightscanvas** |  |
| `leanCanvasRepo` | **\Leantime\Domain\Leancanvas\Repositories\Leancanvas** |  |
| `obmCanvasRepo` | **\Leantime\Domain\Obmcanvas\Repositories\Obmcanvas** |  |
| `retrosCanvasRepo` | **\Leantime\Domain\Retroscanvas\Repositories\Retroscanvas** |  |
| `goalCanvasRepo` | **\Leantime\Domain\Goalcanvas\Repositories\Goalcanvas** |  |
| `valueCanvasRepo` | **\Leantime\Domain\Valuecanvas\Repositories\Valuecanvas** |  |
| `minEmpathyCanvasRepo` | **\Leantime\Domain\Minempathycanvas\Repositories\Minempathycanvas** |  |
| `risksCanvasRepo` | **\Leantime\Domain\Riskscanvas\Repositories\Riskscanvas** |  |
| `sbCanvasRepo` | **\Leantime\Domain\Sbcanvas\Repositories\Sbcanvas** |  |
| `swotCanvasRepo` | **\Leantime\Domain\Swotcanvas\Repositories\Swotcanvas** |  |
| `wikiRepo` | **\Leantime\Domain\Wiki\Repositories\Wiki** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Reports.Reports.sendAnonymousTelemetry`



```json
{
    "method": "leantime.rpc.Reports.Reports.sendAnonymousTelemetry",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|\GuzzleHttp\Promise\PromiseInterface
}
```



---
### `leantime.rpc.Reports.Reports.optOutTelemetry`



```json
{
    "method": "leantime.rpc.Reports.Reports.optOutTelemetry",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|void
}
```



---
### `leantime.rpc.Reports.Reports.getProjectStatusReport`



```json
{
    "method": "leantime.rpc.Reports.Reports.getProjectStatusReport",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

