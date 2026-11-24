---
title: \Leantime\Domain\Tickets\Services\Suggestions
footer: false
---

# Suggestions

Suggestions for what to work on, from your own open to-dos: "Tasks to consider" and "Quick wins".

`leantime.rpc.Tickets.Suggestions.`


## Available Methods
### `leantime.rpc.Tickets.Suggestions.getTasksToConsider`

Tasks to consider: undated to-dos that are important or recently added.

```json
{
    "method": "leantime.rpc.Tickets.Suggestions.getTasksToConsider",
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
| `limit` | **int** | How many to return (1-100), or 0 for all of them. |


**Returns:**
The to-dos (the same fields as getAllOpenUserTickets, plus `reason`: "recent" or "high_priority"), and how many there are in total.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{tasks: list<array<string,mixed>>, total: int}
}
```



---
### `leantime.rpc.Tickets.Suggestions.getQuickWins`

Quick wins: small to-dos (XS or smaller) due within the next 7 days, or already past due.

```json
{
    "method": "leantime.rpc.Tickets.Suggestions.getQuickWins",
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
| `limit` | **int** | How many to return (1-100), or 0 for all of them. |


**Returns:**
The to-dos (the same fields as getAllOpenUserTickets, plus `dueDay`: YYYY-MM-DD in your timezone), earliest due first, and how many there are in total.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{tasks: list<array<string,mixed>>, total: int}
}
```



---

