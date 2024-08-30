---
title: \Leantime\Domain\Timesheets\Services\Timesheets
footer: false
---

# Timesheets




`leantime.rpc.Timesheets.Timesheets.`


## Available Methods
### `leantime.rpc.Timesheets.Timesheets.isClocked`

isClocked - Checks to see whether a user is clocked in

```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.isClocked",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "sessionId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sessionId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Timesheets.Timesheets.punchIn`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.punchIn",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Timesheets.Timesheets.punchOut`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.punchOut",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|float|int
}
```



---
### `leantime.rpc.Timesheets.Timesheets.logTime`

logTime, will always add hours or increment existing values

```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.logTime",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
        "params": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |
| `params` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Timesheets.Timesheets.upsertTime`

Upserts a time entry for a ticket. Will update hours based on the values provided, not touching descriptions

```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.upsertTime",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
        "params": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** | The ID of the ticket. |
| `params` | **array** | An associative array of parameters for the time entry.<br />- userId: The ID of the user creating the time entry. Defaults to the ID of the logged-in user.<br />- kind: The type of timesheet entry. Required.<br />- date: The date of the time entry. Required.<br />- hours: The number of hours for the time entry. Required. |


**Returns:**
Returns true if the time entry was successfully upserted.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Timesheets.Timesheets.getLoggedHoursForTicketByDate`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.getLoggedHoursForTicketByDate",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Timesheets.Timesheets.getSumLoggedHoursForTicket`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.getSumLoggedHoursForTicket",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int|mixed
}
```



---
### `leantime.rpc.Timesheets.Timesheets.getRemainingHours`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.getRemainingHours",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticket": \Leantime\Domain\Tickets\Models\Tickets,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticket` | **\Leantime\Domain\Tickets\Models\Tickets** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int|mixed
}
```



---
### `leantime.rpc.Timesheets.Timesheets.getUsersTicketHours`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.getUsersTicketHours",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
        "userId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |
| `userId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int|mixed
}
```



---
### `leantime.rpc.Timesheets.Timesheets.getLoggableHourTypes`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.getLoggableHourTypes",
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
    "result": array|string[]
}
```



---
### `leantime.rpc.Timesheets.Timesheets.getAll`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.getAll",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "dateFrom": \Carbon\CarbonInterface,
        "dateTo": \Carbon\CarbonInterface,
        "projectId": int,
        "kind": string,
        "userId": int|null,
        "invEmpl": string,
        "invComp": string,
        "ticketFilter": string,
        "paid": string,
        "clientId": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateFrom` | **\Carbon\CarbonInterface** |  |
| `dateTo` | **\Carbon\CarbonInterface** |  |
| `projectId` | **int** |  |
| `kind` | **string** |  |
| `userId` | **int|null** |  |
| `invEmpl` | **string** |  |
| `invComp` | **string** |  |
| `ticketFilter` | **string** |  |
| `paid` | **string** |  |
| `clientId` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Timesheets.Timesheets.getWeeklyTimesheets`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.getWeeklyTimesheets",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
        "fromDate": \Carbon\CarbonInterface,
        "userId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `fromDate` | **\Carbon\CarbonInterface** |  |
| `userId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Timesheets.Timesheets.updateInvoices`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.updateInvoices",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "invEmpl": array,
        "invComp": array,
        "paid": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `invEmpl` | **array** |  |
| `invComp` | **array** |  |
| `paid` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Timesheets.Timesheets.getBookedHourTypes`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.getBookedHourTypes",
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
    "result": array|string[]
}
```



---
### `leantime.rpc.Timesheets.Timesheets.pollForNewTimesheets`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.pollForNewTimesheets",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Timesheets.Timesheets.pollForUpdatedTimesheets`



```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.pollForUpdatedTimesheets",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

