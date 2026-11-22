---
title: \Leantime\Domain\Tickets\Services\TicketHistory
footer: false
---

# TicketHistory

Change history of a ticket (the field changes recorded in zp_tickethistory), prepared for display.


`leantime.rpc.Tickets.TicketHistory.`


## Available Methods
### `leantime.rpc.Tickets.TicketHistory.getTicketHistory`

The change history of a ticket, newest first.

```json
{
    "method": "leantime.rpc.Tickets.TicketHistory.getTicketHistory",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
    }
}
```


Authorizes against the ticket's own project and fails closed: a missing ticket and a ticket
the current user cannot view both return false (no existence oracle).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** | The ticket id |


**Returns:**
The entries, or false when not found/not allowed
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,\Leantime\Domain\Tickets\Models\TicketHistoryEntry>|false
}
```



---

