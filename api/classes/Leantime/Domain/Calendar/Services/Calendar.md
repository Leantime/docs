---
title: \Leantime\Domain\Calendar\Services\Calendar
footer: false
---

# Calendar




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

Patches calendar event

```json
{
    "method": "leantime.rpc.Calendar.Calendar.patch",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": mixed,
        "params": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `params` | **mixed** |  |


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
### `leantime.rpc.Calendar.Calendar.userIsAllowedToUpdate`

Checks if user is allowed to make changes to event

```json
{
    "method": "leantime.rpc.Calendar.Calendar.userIsAllowedToUpdate",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "eventId": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventId` | **mixed** |  |


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
### `leantime.rpc.Calendar.Calendar.editExternalCalendar`



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
### `leantime.rpc.Calendar.Calendar.getIcalByHash`

Retrieves iCal calendar by user hash and calendar hash.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.getIcalByHash",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userHash": string,
        "calHash": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userHash` | **string** | The hash of the user. |
| `calHash` | **string** | The hash of the calendar. |


**Returns:**
The iCal calendar generated from the calendar events.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \Spatie\IcalendarGenerator\Components\Calendar
}
```



---
### `leantime.rpc.Calendar.Calendar.mapEventData`

Generates an event array for fullcalendar.io frontend.

```json
{
    "method": "leantime.rpc.Calendar.Calendar.mapEventData",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "title": string,
        "description": string,
        "allDay": bool,
        "id": int,
        "projectId": int,
        "eventType": string,
        "dateContext": string,
        "backgroundColor": string,
        "borderColor": string,
        "dateFrom": int|null,
        "dateTo": int|null,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **string** |  |
| `description` | **string** |  |
| `allDay` | **bool** |  |
| `id` | **int** |  |
| `projectId` | **int** |  |
| `eventType` | **string** |  |
| `dateContext` | **string** |  |
| `backgroundColor` | **string** |  |
| `borderColor` | **string** |  |
| `dateFrom` | **int|null** |  |
| `dateTo` | **int|null** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

