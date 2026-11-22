---
title: \Leantime\Domain\Timesheets\Services\Timesheets
footer: false
---

# Timesheets

Timesheets service.

Timesheets are GLOBAL-scoped (company-wide time logging): every gate resolves the user's
GLOBAL role via {@see \Leantime\Domain\Timesheets\Permissions\TimesheetsPermissions}. The standard verbs (view/create/edit/delete) are
editor+ and operate on the user's OWN time — ownership is enforced in-body by comparing the
entry's userId to the current user; acting on ANOTHER user's time, invoicing, and the
cross-user reports require timesheets.manage (manager+).

Two-tier denial: the base capability is checked with {@see \Leantime\Domain\Timesheets\Services\authorize()}, which throws
AuthorizationException when the role lacks create/edit/manage; the ownership check that follows
soft-denies (deleteTime() returns false, updateTime() returns early) rather than throwing, so a
manager-less user editing a peer's entry is a silent no-op, not a 403. Reads soft-deny (return
the neutral empty value) for the unauthorized/cross-user case.

NOTE: the ticket-hours reads (getLoggedHoursForTicketByDate / getSumLoggedHoursForTicket /
getRemainingHours / getUsersTicketHours) carry NO timesheets.* role gate — they render on the
ticket view (ShowTicket, reachable by readonly users). They are scoped instead by
{@see \Leantime\Domain\Timesheets\Services\authorizeTicketView()}: tickets.view on the ticket's REAL project, so a caller-supplied
ticket id cannot read hours across projects the caller is not a member of.

Project modules: when a project has the Timesheets module switched off, no time can be booked
on its tickets (log, add, edit, timer start/stop all go through
{@see \Leantime\Domain\Timesheets\Services\authorizeTicketForTimeEntry()}). Existing entries stay readable, deletable and
invoiceable: they are payroll and billing records.
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
    "result": false|array
}
```



---
### `leantime.rpc.Timesheets.Timesheets.punchIn`

Start the session user's timer on a ticket.

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


Besides the (global) timesheets.create capability, the ticket must exist and the caller must
be able to view its real project — time cannot be tracked on another project's tickets.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** | The ticket to clock in on. |


**Returns:**
The repository result (true on success).
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Timesheets.Timesheets.punchOut`

Stop the session user's timer on a ticket and book the elapsed time.

```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.punchOut",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
        "automatic": bool,
    }
}
```


The ticket's project is re-checked at stop time: if the caller can no longer access the
ticket (access revoked while the timer ran, or a timer started before the start-time check
existed), the timer is discarded and no time is booked.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** | The ticket the timer runs on. |
| `automatic` | **bool** | True when the timer is stopped by the system (the ticket was completed),<br />not by the user; reported on {@see \Leantime\Domain\Timesheets\Events\TimerStopped}. |


**Returns:**
Hours booked, or false when nothing was booked.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": float|false|int
}
```



---
### `leantime.rpc.Timesheets.Timesheets.stopActiveTimer`

Stop the active timer for the current user (no ticket ID required)

```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.stopActiveTimer",
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
    "result": float|false|int
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
### `leantime.rpc.Timesheets.Timesheets.deleteTime`

Delete a timesheet entry.

```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.deleteTime",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
    }
}
```


The caller must be the entry owner or have at least manager role.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The ID of the timesheet entry to delete |


**Returns:**
True if deleted, false if unauthorized or not found
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Timesheets.Timesheets.getTimesheet`

Retrieve a single timesheet entry by ID.

```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.getTimesheet",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The timesheet entry ID |


**Returns:**
The timesheet entry or false if not found
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Timesheets.Timesheets.addTime`

Add a new time entry directly from a prepared values array.

```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.addTime",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```


When called via API, the userId is forced to the authenticated user
unless the caller is a manager or above.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | The time entry values |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Timesheets.Timesheets.updateTime`

Update an existing time entry.

```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.updateTime",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```


When called via API, only the entry owner or a manager+ can update.
Non-managers cannot reassign entries to other users.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | The updated time entry values |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
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

Get remaining hours for a ticket (planned hours minus logged hours)

```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.getRemainingHours",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketOrId": int|\Leantime\Domain\Tickets\Models\Tickets,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketOrId` | **int|\Leantime\Domain\Tickets\Models\Tickets** | Ticket ID or Tickets object |


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
        "userId": ?int,
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
| `userId` | **?int** |  |
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
### `leantime.rpc.Timesheets.Timesheets.getUsersTickets`

Returns the tickets that belong to a user, used to populate the
add/edit/weekly timesheet ticket pickers.

```json
{
    "method": "leantime.rpc.Timesheets.Timesheets.getUsersTickets",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "limit": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user whose tickets to fetch |
| `limit` | **int** | Maximum number of tickets to return (-1 for no limit) |


**Returns:**
The user's tickets (empty array when none found)
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

