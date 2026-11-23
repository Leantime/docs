---
title: \Leantime\Domain\Reminders\Services\Reminders
footer: false
---

# Reminders

Reminders for the person who is signed in: their morning summary as data, their reminder
settings, and the reminders on one to-do. Every method acts for the session user only; none
takes another person's id. Methods about a to-do check that the person can see it.

`leantime.rpc.Reminders.Reminders.`


## Available Methods
### `leantime.rpc.Reminders.Reminders.getSummary`

What is coming up for you today: the same list the morning summary sends.

```json
{
    "method": "leantime.rpc.Reminders.Reminders.getSummary",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "limit": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `limit` | **int** | How many items to list: 5 by default (as the morning summary does, the<br />rest counted in moreCount); 0 for the whole list. The routine line,<br />counts and item fields are the same either way. |


**Returns:**
See {@see \Leantime\Domain\Reminders\Services\SummaryBuilder::build()}.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<string,mixed>
}
```



---
### `leantime.rpc.Reminders.Reminders.getSettings`

Your reminder settings, plus whether the workspace has reminders turned off.

```json
{
    "method": "leantime.rpc.Reminders.Reminders.getSettings",
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
    "result": array{summary: bool, summaryTime: string, taskPreset: string, timezone: string, workspaceEnabled: bool}
}
```



---
### `leantime.rpc.Reminders.Reminders.saveSettings`

Changes your reminder settings. Leave a value out to keep it.

```json
{
    "method": "leantime.rpc.Reminders.Reminders.saveSettings",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "summary": bool|null,
        "summaryTime": string|null,
        "taskPreset": string|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `summary` | **bool\|null** | Morning summary on or off. |
| `summaryTime` | **string\|null** | &#039;HH:MM&#039; in your timezone. |
| `taskPreset` | **string\|null** | Your default for to-dos: default, more, less or off. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{summary: bool, summaryTime: string, taskPreset: string, timezone: string, workspaceEnabled: bool}
}
```



---
### `leantime.rpc.Reminders.Reminders.getTaskReminders`

How often one to-do reminds you.

```json
{
    "method": "leantime.rpc.Reminders.Reminders.getTaskReminders",
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
    "result": array{preset: string, chosen: bool, inherited: string, defaultPreset: string, hasDueDate: bool, summary: bool, workspaceEnabled: bool, isYours: bool}
}
```



---
### `leantime.rpc.Reminders.Reminders.chooseTaskReminder`

Picks how often one to-do reminds you (default, more, less or off). Picking what the to-do
already follows removes the choice (on someone else's to-do, picking off stops the
reminders). With $forAllMyTodos the pick becomes your default for every to-do of yours, and
this to-do follows it (or keeps the pick when it would inherit something else, as a routine
does); it is refused on a to-do that isn't yours.

```json
{
    "method": "leantime.rpc.Reminders.Reminders.chooseTaskReminder",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
        "preset": string,
        "forAllMyTodos": bool,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |
| `preset` | **string** |  |
| `forAllMyTodos` | **bool** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{preset: string, chosen: bool, inherited: string, defaultPreset: string, hasDueDate: bool, summary: bool, workspaceEnabled: bool, isYours: bool}
}
```



---
### `leantime.rpc.Reminders.Reminders.setTaskPreset`

Chooses how often one to-do reminds you: default, more, less or off. "inherit" removes the
choice so your own default applies again.

```json
{
    "method": "leantime.rpc.Reminders.Reminders.setTaskPreset",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
        "preset": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |
| `preset` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---

