---
title: \leantime\domain\services\timesheets
footer: false
---

# timesheets





* Full name: `\leantime\domain\services\timesheets`



## Methods

### __construct



```php
public timesheets::__construct(): mixed
```









**Return Value:**





---
### isClocked



```php
public timesheets::isClocked(mixed $sessionId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sessionId` | **mixed** |  |


**Return Value:**





---
### punchIn



```php
public timesheets::punchIn(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---
### punchOut



```php
public timesheets::punchOut(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---
### logTime



```php
public timesheets::logTime(mixed $ticketId, mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |
| `params` | **mixed** |  |


**Return Value:**





---
### getLoggedHoursForTicketByDate



```php
public timesheets::getLoggedHoursForTicketByDate(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---
### getSumLoggedHoursForTicket



```php
public timesheets::getSumLoggedHoursForTicket(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---
### getRemainingHours



```php
public timesheets::getRemainingHours(mixed $ticket): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticket` | **mixed** |  |


**Return Value:**





---
### getUsersTicketHours



```php
public timesheets::getUsersTicketHours(mixed $ticketId, mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |
| `userId` | **mixed** |  |


**Return Value:**





---
### getLoggableHourTypes



```php
public timesheets::getLoggableHourTypes(): mixed
```









**Return Value:**





---
### getAll



```php
public timesheets::getAll(mixed $projectId = -1, mixed $kind = &#039;all&#039;, mixed $dateFrom = &#039;0000-01-01 00:00:00&#039;, mixed $dateTo = &#039;9999-12-24 00:00:00&#039;, mixed $userId = &#039;all&#039;, mixed $invEmpl = &#039;1&#039;, mixed $invComp = &#039;1&#039;, mixed $ticketFilter = &#039;-1&#039;, mixed $paid = &#039;1&#039;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |
| `kind` | **mixed** |  |
| `dateFrom` | **mixed** |  |
| `dateTo` | **mixed** |  |
| `userId` | **mixed** |  |
| `invEmpl` | **mixed** |  |
| `invComp` | **mixed** |  |
| `ticketFilter` | **mixed** |  |
| `paid` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
