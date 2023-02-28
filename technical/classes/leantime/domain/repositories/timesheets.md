---
title: \leantime\domain\repositories\timesheets
footer: false
---

# timesheets





* Full name: `\leantime\domain\repositories\timesheets`
* Parent class: [\leantime\core\repository](../../core/repository.md)



## Methods

### __construct

__construct - get database connection

```php
public timesheets::__construct(): mixed
```









**Return Value:**





---
### getAll

getAll - get all timesheet entries

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
### export



```php
public timesheets::export(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### getUsersHours



```php
public timesheets::getUsersHours(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getHoursBooked



```php
public timesheets::getHoursBooked(): mixed
```









**Return Value:**





---
### getWeeklyTimesheets



```php
public timesheets::getWeeklyTimesheets(mixed $projectId = -1, mixed $dateStart = &#039;0000-01-01 00:00:00&#039;, mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |
| `dateStart` | **mixed** |  |
| `userId` | **mixed** |  |


**Return Value:**





---
### getUsersTicketHours

getUsersTicketHours - get the total hours

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
### addTime

addTime - add user specific time entry

```php
public timesheets::addTime(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### simpleInsert



```php
public timesheets::simpleInsert(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### getTimesheet

getTime - get a specific time entry

```php
public timesheets::getTimesheet(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### updateTime

updatTime - update specific time entry

```php
public timesheets::updateTime(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### UpdateHours

updatTime - update specific time entry

```php
public timesheets::UpdateHours(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### getProjectHours

getProjectHours - get the Project hours for a specific project

```php
public timesheets::getProjectHours(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getLoggedHoursForTicket

getLoggedHoursForTicket - get the Ticket hours for a specific ticket

```php
public timesheets::getLoggedHoursForTicket( $ticketId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **** |  |


**Return Value:**





---
### dateRange

dateRange - returns every single day between two dates

```php
private timesheets::dateRange( $first,  $last, string $step = &#039;+1 day&#039;, string $format = &#039;Y-m-d&#039;): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `first` | **** | first date |
| `last` | **** | last date |
| `step` | **string** | default 1 day, can be changed to get every other day, week etc. |
| `format` | **string** | date format |


**Return Value:**





---
### deleteTime



```php
public timesheets::deleteTime(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### updateInvoices

updateInvoices

```php
public timesheets::updateInvoices(mixed $invEmpl, mixed $invComp = &#039;&#039;, mixed $paid = &#039;&#039;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `invEmpl` | **mixed** |  |
| `invComp` | **mixed** |  |
| `paid` | **mixed** |  |


**Return Value:**





---
### punchIn

punchIn - clock in on a specified ticket

```php
public timesheets::punchIn( $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **** |  |


**Return Value:**





---
### punchOut

punchOut - clock out on whatever ticket is open for the user

```php
public timesheets::punchOut(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---
### isClocked

isClocked - Checks to see whether a user is clocked in

```php
public timesheets::isClocked(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getTicketHours

getTicketHours - get the Ticket hours for a specific ticket

```php
public timesheets::getTicketHours(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---


## Inherited methods

### dbcall



```php
protected repository::dbcall(array $args): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `args` | **array** |  |


**Return Value:**





---
### dispatch_event

dispatches an event with context

```php
public static eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
private static eventhelpers::get_event_context(mixed $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **mixed** |  |


**Return Value:**





---
### set_class_context

Gets the class context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static eventhelpers::get_function_context(mixed $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
