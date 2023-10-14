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
public Timesheets::isClocked( $sessionId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sessionId` | **** |  |


**Return Value:**





---
### punchIn



```php
public Timesheets::punchIn( $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **** |  |


**Return Value:**





---
### punchOut



```php
public Timesheets::punchOut( $ticketId): false|float|int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **** |  |


**Return Value:**





---
### logTime



```php
public Timesheets::logTime( $ticketId,  $params): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **** |  |
| `params` | **** |  |


**Return Value:**





---
### getLoggedHoursForTicketByDate



```php
public Timesheets::getLoggedHoursForTicketByDate( $ticketId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **** |  |


**Return Value:**





---
### getSumLoggedHoursForTicket



```php
public Timesheets::getSumLoggedHoursForTicket( $ticketId): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **** |  |


**Return Value:**





---
### getRemainingHours



```php
public Timesheets::getRemainingHours( $ticket): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticket` | **** |  |


**Return Value:**





---
### getUsersTicketHours



```php
public Timesheets::getUsersTicketHours( $ticketId,  $userId): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **** |  |
| `userId` | **** |  |


**Return Value:**





---
### getLoggableHourTypes



```php
public Timesheets::getLoggableHourTypes(): array|string[]
```









**Return Value:**





---
### getAll



```php
public Timesheets::getAll(int $projectId = -1, string $kind = &#039;all&#039;, string $dateFrom = &#039;0000-01-01 00:00:00&#039;, string $dateTo = &#039;9999-12-24 00:00:00&#039;, int|null $userId = null, string $invEmpl = &#039;1&#039;, string $invComp = &#039;1&#039;, string $ticketFilter = &#039;-1&#039;, string $paid = &#039;1&#039;, string $clientId = &#039;-1&#039;): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `kind` | **string** |  |
| `dateFrom` | **string** |  |
| `dateTo` | **string** |  |
| `userId` | **int|null** |  |
| `invEmpl` | **string** |  |
| `invComp` | **string** |  |
| `ticketFilter` | **string** |  |
| `paid` | **string** |  |
| `clientId` | **string** |  |


**Return Value:**





---
### export



```php
public Timesheets::export( $values): null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### updateInvoices



```php
public Timesheets::updateInvoices(array $invEmpl, array $invComp = [], array $paid = []): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `invEmpl` | **array** |  |
| `invComp` | **array** |  |
| `paid` | **array** |  |


**Return Value:**





---
### getBookedHourTypes



```php
public Timesheets::getBookedHourTypes(): array|string[]
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
