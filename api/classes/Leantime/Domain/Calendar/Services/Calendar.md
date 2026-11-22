---
title: \Leantime\Domain\Calendar\Services\Calendar
footer: false
---

# Calendar

Calendar service: personal events, external-calendar subscriptions, and the public iCal feed.

`leantime.rpc.Calendar.Calendar.`


## Available Methods
### `leantime.rpc.Calendar.Calendar.deleteGCal`

Deletes a Google Calendar.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.deleteGCal",
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
| `id` | **int** | The ID of the Google Calendar to delete. |


**Returns:**
Returns true if the Google Calendar was successfully deleted, false otherwise.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Calendar.Calendar.patch`

Patches calendar event.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.patch",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "params": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | Id of the event to update (only events; tickets are updated via the ticket API). |
| `params` | **array** | Key/value array of columns to update (limited to PATCHABLE_EVENT_COLUMNS). |


**Returns:**
true on success, false on failure
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Calendar.Calendar.addEvent`

Adds a new event to the user's calendar

```json
{
    "method": "leantime.rpc.Calendar.Calendar.addEvent",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Returns:**
returns the id on success, false on failure
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int|false
}
```



---
### `leantime.rpc.Calendar.Calendar.getEvent`

Returns a single event, fail-closed to its owner. The repository fetches by bare id, so
without this check any user could read any event by id over RPC; calendar.manage (admin+)
is the cross-user override. Soft-denies (returns false) for a foreign event.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.getEvent",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "eventId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Calendar.Calendar.editEvent`

edits an event on the user's calendar
Important: Time needs to come in as user formatted time value.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.editEvent",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Returns:**
returns true on success, false on failure
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Calendar.Calendar.delEvent`

deletes an event on the user's calendar

```json
{
    "method": "leantime.rpc.Calendar.Calendar.delEvent",
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
| `id` | **int** |  |


**Returns:**
returns the id on success, false on failure
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int|false
}
```



---
### `leantime.rpc.Calendar.Calendar.getExternalCalendar`

Returns one external-calendar subscription, scoped to the SESSION user. The $userId argument
is retained for signature/RPC compatibility but IGNORED for authorization — otherwise an RPC
caller could read another user's subscription by passing a foreign id.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.getExternalCalendar",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "userId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |
| `userId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Calendar.Calendar.getCachedExternalCalendarContent`

Returns the raw iCal content for an external calendar, using a
session-based cache with a 30 minute time to live.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.getCachedExternalCalendarContent",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "calId": int,
        "userId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `calId` | **int** | The external calendar id. |
| `userId` | **int** | Retained for signature compatibility; the underlying read is pinned to<br />the session user via getExternalCalendar(). |


**Returns:**
The iCal content, or an empty calendar when unavailable.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---
### `leantime.rpc.Calendar.Calendar.editExternalCalendar`

Edits an external-calendar subscription. The repository scopes the update to the session
user (WHERE userId = session), so a foreign id is a no-op.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.editExternalCalendar",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
        "id": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `id` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Calendar.Calendar.getMyExternalCalendars`

Retrieves all external calendars for a given user.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.getMyExternalCalendars",
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
| `userId` | **int** | Retained for signature/RPC compatibility but IGNORED — the list is<br />always scoped to the SESSION user, closing the cross-user param spoof. |


**Returns:**
The external calendars or false if none found
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Calendar.Calendar.addExternalCalendarUrl`

Adds a new external calendar URL.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.addExternalCalendarUrl",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | The calendar values (url, name, colorClass) |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Calendar.Calendar.getMyCalendar`

Session-scoped calendar feed (personal events + ticket due/edit events) for the
authenticated user. Mobile's calendar tab calls this; the optional from/until window lets
it fetch just the visible month.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.getMyCalendar",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "from": null|string|\Carbon\CarbonImmutable,
        "until": null|string|\Carbon\CarbonImmutable,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | **null|string|\Carbon\CarbonImmutable** | Optional ISO start of the window |
| `until` | **null|string|\Carbon\CarbonImmutable** | Optional ISO end of the window |


**Returns:**
FullCalendar-shaped event arrays
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---
### `leantime.rpc.Calendar.Calendar.getICalUrl`

The authenticated user's personal iCal subscription URL (hash-authenticated feed). Already
session-scoped — it takes no userId. Mobile surfaces this so the user can subscribe their
device calendar.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.getICalUrl",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**
The full iCal feed URL
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---
### `leantime.rpc.Calendar.Calendar.getExternalCalendarEvents`

External-calendar events (from the user's subscribed iCal feeds) for the authenticated user.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.getExternalCalendarEvents",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "from": null|string|\Carbon\CarbonImmutable,
        "until": null|string|\Carbon\CarbonImmutable,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | **null|string|\Carbon\CarbonImmutable** | Optional ISO start of the window |
| `until` | **null|string|\Carbon\CarbonImmutable** | Optional ISO end of the window |


**Returns:**
Array of external calendar events
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---

