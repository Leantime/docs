---
title: \Leantime\Domain\Timesheets\Repositories\Timesheets
footer: false
---

# Timesheets

Repository



* Full name: `\Leantime\Domain\Timesheets\Repositories\Timesheets`
* Parent class: [\Leantime\Core\Repository](../../../Core/Repository.md)



## Methods

### __construct

__construct - get database connection

```php
public Timesheets::__construct(\Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getAll

getAll - get all timesheet entries

```php
public Timesheets::getAll(int $id, ?string $kind, ?string $dateFrom, ?string $dateTo, ?int $userId, ?string $invEmpl, ?string $invComp, ?string $paid, ?int $clientId, ?int $ticketFilter): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |
| `kind` | **?string** |  |
| `dateFrom` | **?string** |  |
| `dateTo` | **?string** |  |
| `userId` | **?int** |  |
| `invEmpl` | **?string** |  |
| `invComp` | **?string** |  |
| `paid` | **?string** |  |
| `clientId` | **?int** |  |
| `ticketFilter` | **?int** |  |


**Return Value:**





---
### export



```php
public Timesheets::export( $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### getUsersHours



```php
public Timesheets::getUsersHours( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getHoursBooked



```php
public Timesheets::getHoursBooked(): int|mixed
```









**Return Value:**





---
### getWeeklyTimesheets



```php
public Timesheets::getWeeklyTimesheets(int $projectId = -1, string $dateStart = &#039;0000-01-01 00:00:00&#039;, int $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `dateStart` | **string** |  |
| `userId` | **int** |  |


**Return Value:**





---
### getUsersTicketHours

getUsersTicketHours - get the total hours

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
### addTime

addTime - add user specific time entry

```php
public Timesheets::addTime(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### simpleInsert



```php
public Timesheets::simpleInsert( $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### getTimesheet

getTime - get a specific time entry

```php
public Timesheets::getTimesheet(mixed $id): mixed
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
public Timesheets::updateTime(mixed $values): mixed
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
public Timesheets::UpdateHours(mixed $values): mixed
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
public Timesheets::getProjectHours(mixed $projectId): mixed
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
public Timesheets::getLoggedHoursForTicket( $ticketId): array
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
private Timesheets::dateRange(string $first, string $last, string $step = &#039;+1 day&#039;, string $format = &#039;Y-m-d&#039;): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `first` | **string** | date |
| `last` | **string** | date |
| `step` | **string** | default 1 day, can be changed to get every other day, week etc. |
| `format` | **string** | date format |


**Return Value:**





---
### deleteTime



```php
public Timesheets::deleteTime( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### updateInvoices

updateInvoices

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
### punchIn

punchIn - clock in on a specified ticket

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

punchOut - clock out on whatever ticket is open for the user

```php
public Timesheets::punchOut(mixed $ticketId): float|false|int
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
public Timesheets::isClocked(int $id): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | $id |


**Return Value:**





---
### getTicketHours

getTicketHours - get the Ticket hours for a specific ticket

```php
public Timesheets::getTicketHours(mixed $ticketId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---


## Inherited methods

### dbcall

dbcall - creates a new dbcall object

```php
protected Repository::dbcall(array $args): object
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `args` | **array** | - usually the value of func_get_args(), gives events/filters values to work with |


**Return Value:**





---
### patch

patch - updates a record in the database

```php
public Repository::patch(int $id, array $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | - the id of the record to update |
| `params` | **array** | - the parameters to update |


**Return Value:**





---
### insert



```php
public Repository::insert(object $objectToInsert): false|int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `objectToInsert` | **object** |  |


**Return Value:**





---
### delete

delete - deletes a record from the database

```php
public Repository::delete(int $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | - the id of the record to delete |


**Return Value:**





---
### get

get - gets a record from the database

```php
public Repository::get(int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | - the id of the record to get |


**Return Value:**





---
### getFieldAttribute

getFieldAttribute - gets the field attribute for a given property

```php
protected Repository::getFieldAttribute(string $class, string $property, bool $includeId = false): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `class` | **string** | - the class to get the attribute from |
| `property` | **string** | - the property to get the attribute from |
| `includeId` | **bool** | - whether or not to include the id attribute |


**Return Value:**





---
### getDbFields

getDbFields - gets the database fields for a given class

```php
protected Repository::getDbFields(object|string $class): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `class` | **object|string** | - the class to get the fields from |


**Return Value:**





---
### dispatch_event

dispatches an event with context

```php
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
private static Eventhelpers::get_event_context( $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **** |  |


**Return Value:**





---
### set_class_context

Gets the class Context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static Eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static Eventhelpers::get_function_context(null $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **null** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
