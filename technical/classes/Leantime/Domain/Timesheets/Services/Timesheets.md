---
title: \Leantime\Domain\Timesheets\Services\Timesheets
footer: false
---

# Timesheets




`\Leantime\Domain\Timesheets\Services\Timesheets`




## Methods

### __construct



```php
public Timesheets::__construct(\Leantime\Domain\Timesheets\Repositories\Timesheets $timesheetsRepo, \Leantime\Domain\Users\Repositories\Users $userRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `timesheetsRepo` | **\Leantime\Domain\Timesheets\Repositories\Timesheets** |  |
| `userRepo` | **\Leantime\Domain\Users\Repositories\Users** |  |


**Return Value:**





---
### isClocked

isClocked - Checks to see whether a user is clocked in

```php
public Timesheets::isClocked(int $sessionId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sessionId` | **int** |  |


**Return Value:**





---
### punchIn



```php
public Timesheets::punchIn(int $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


**Return Value:**





---
### punchOut



```php
public Timesheets::punchOut(int $ticketId): false|float|int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


**Return Value:**





---
### logTime

logTime, will always add hours or increment existing values

```php
public Timesheets::logTime(int $ticketId, array $params): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |
| `params` | **array** |  |


**Return Value:**





---
### upsertTime

Upserts a time entry for a ticket. Will update hours based on the values provided, not touching descriptions

```php
public Timesheets::upsertTime(int $ticketId, array $params): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** | The ID of the ticket. |
| `params` | **array** | An associative array of parameters for the time entry.<br />- userId: The ID of the user creating the time entry. Defaults to the ID of the logged-in user.<br />- kind: The type of timesheet entry. Required.<br />- date: The date of the time entry. Required.<br />- hours: The number of hours for the time entry. Required. |


**Return Value:**

Returns true if the time entry was successfully upserted.



---
### getLoggedHoursForTicketByDate



```php
public Timesheets::getLoggedHoursForTicketByDate(int $ticketId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


**Return Value:**





---
### getSumLoggedHoursForTicket



```php
public Timesheets::getSumLoggedHoursForTicket(int $ticketId): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


**Return Value:**





---
### getRemainingHours



```php
public Timesheets::getRemainingHours(\Leantime\Domain\Tickets\Models\Tickets $ticket): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticket` | **\Leantime\Domain\Tickets\Models\Tickets** |  |


**Return Value:**





---
### getUsersTicketHours



```php
public Timesheets::getUsersTicketHours(int $ticketId, int $userId): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |
| `userId` | **int** |  |


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
public Timesheets::getAll(\Carbon\CarbonInterface $dateFrom, \Carbon\CarbonInterface $dateTo, int $projectId = -1, string $kind = &#039;all&#039;, int|null $userId = null, string $invEmpl = &#039;1&#039;, string $invComp = &#039;1&#039;, string $ticketFilter = &#039;-1&#039;, string $paid = &#039;1&#039;, string $clientId = &#039;-1&#039;): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateFrom` | **\Carbon\CarbonInterface** |  |
| `dateTo` | **\Carbon\CarbonInterface** |  |
| `projectId` | **int** |  |
| `kind` | **string** |  |
| `userId` | **int|null** |  |
| `invEmpl` | **string** |  |
| `invComp` | **string** |  |
| `ticketFilter` | **string** |  |
| `paid` | **string** |  |
| `clientId` | **string** |  |


**Return Value:**





---
### getWeeklyTimesheets



```php
public Timesheets::getWeeklyTimesheets(int $projectId, \Carbon\CarbonInterface $fromDate, int $userId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `fromDate` | **\Carbon\CarbonInterface** |  |
| `userId` | **int** |  |


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
### pollForNewTimesheets



```php
public Timesheets::pollForNewTimesheets(?int $projectId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |


**Return Value:**





---
### pollForUpdatedTimesheets



```php
public Timesheets::pollForUpdatedTimesheets(?int $projectId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |


**Return Value:**





---
### prepareDatesForApiResponse



```php
private Timesheets::prepareDatesForApiResponse(mixed $timesheet): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `timesheet` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
