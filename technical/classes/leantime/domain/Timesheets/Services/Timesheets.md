---
title: \Leantime\Domain\Timesheets\Services\Timesheets
footer: false
---

# Timesheets





* Full name: `\Leantime\Domain\Timesheets\Services\Timesheets`



## Methods

### __construct



```php
public Timesheets::__construct(\Leantime\Domain\Timesheets\Repositories\Timesheets $timesheetsRepo, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `timesheetsRepo` | **\Leantime\Domain\Timesheets\Repositories\Timesheets** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### isClocked



```php
public Timesheets::isClocked(mixed $sessionId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sessionId` | **mixed** |  |


**Return Value:**





---
### punchIn



```php
public Timesheets::punchIn(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---
### punchOut



```php
public Timesheets::punchOut(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---
### logTime



```php
public Timesheets::logTime(mixed $ticketId, mixed $params): mixed
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
public Timesheets::getLoggedHoursForTicketByDate(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---
### getSumLoggedHoursForTicket



```php
public Timesheets::getSumLoggedHoursForTicket(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---
### getRemainingHours



```php
public Timesheets::getRemainingHours(mixed $ticket): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticket` | **mixed** |  |


**Return Value:**





---
### getUsersTicketHours



```php
public Timesheets::getUsersTicketHours(mixed $ticketId, mixed $userId): mixed
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
public Timesheets::getLoggableHourTypes(): mixed
```









**Return Value:**





---
### getAll



```php
public Timesheets::getAll(mixed $projectId = -1, mixed $kind = &#039;all&#039;, mixed $dateFrom = &#039;0000-01-01 00:00:00&#039;, mixed $dateTo = &#039;9999-12-24 00:00:00&#039;, mixed $userId = &#039;all&#039;, mixed $invEmpl = &#039;1&#039;, mixed $invComp = &#039;1&#039;, mixed $ticketFilter = &#039;-1&#039;, mixed $paid = &#039;1&#039;, mixed $clientId = &#039;-1&#039;): mixed
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
| `clientId` | **mixed** |  |


**Return Value:**





---
### export



```php
public Timesheets::export(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### updateInvoices



```php
public Timesheets::updateInvoices(mixed $invEmpl, mixed $invComp = &#039;&#039;, mixed $paid = &#039;&#039;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `invEmpl` | **mixed** |  |
| `invComp` | **mixed** |  |
| `paid` | **mixed** |  |


**Return Value:**





---
### getBookedHourTypes



```php
public Timesheets::getBookedHourTypes(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
