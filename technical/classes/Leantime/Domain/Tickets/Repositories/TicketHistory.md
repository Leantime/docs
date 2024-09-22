---
title: \Leantime\Domain\Tickets\Repositories\TicketHistory
footer: false
---

# TicketHistory




`\Leantime\Domain\Tickets\Repositories\TicketHistory`




## Methods

### __construct

__construct - get database connection

```php
public TicketHistory::__construct(\Leantime\Core\Db\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |


**Return Value:**





---
### getRecentTicketHistory



```php
public TicketHistory::getRecentTicketHistory(\DateTime $startingFrom, int $ticketId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `startingFrom` | **\DateTime** |  |
| `ticketId` | **int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
