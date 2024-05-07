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

Get database connection

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

Retrieves all timesheets based on the provided filters.

```php
public Timesheets::getAll(int|null $id, string|null $kind, \Carbon\CarbonInterface|null $dateFrom, \Carbon\CarbonInterface|null $dateTo, int|null $userId, string|null $invEmpl, string|null $invComp, string|null $paid, int|null $clientId, int|null $ticketFilter): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int|null** |  |
| `kind` | **string|null** |  |
| `dateFrom` | **\Carbon\CarbonInterface|null** |  |
| `dateTo` | **\Carbon\CarbonInterface|null** |  |
| `userId` | **int|null** |  |
| `invEmpl` | **string|null** |  |
| `invComp` | **string|null** |  |
| `paid` | **string|null** |  |
| `clientId` | **int|null** |  |
| `ticketFilter` | **int|null** |  |


**Return Value:**

An array of timesheets or false if there was an error



---
### getUsersHours



```php
public Timesheets::getUsersHours(int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### getHoursBooked

Retrieves the total number of hours booked from the timesheets table.

```php
public Timesheets::getHoursBooked(): mixed
```









**Return Value:**

The total number of hours booked, or 0 if no hours are booked.



---
### getWeeklyTimesheets



```php
public Timesheets::getWeeklyTimesheets(int $projectId, \Carbon\CarbonInterface $fromDate, int $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `fromDate` | **\Carbon\CarbonInterface** |  |
| `userId` | **int** |  |


**Return Value:**





---
### getUsersTicketHours

getUsersTicketHours - get the total hours

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
### addTime

addTime - add user-specific time entry

```php
public Timesheets::addTime(array $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Return Value:**





---
### upsertTimesheetEntry

addTime - add user-specific time entry

```php
public Timesheets::upsertTimesheetEntry(array $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Return Value:**





---
### getTimesheet

getTime - get a specific time entry

```php
public Timesheets::getTimesheet(int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### updateTime

updatTime - update specific time entry

```php
public Timesheets::updateTime(array $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Return Value:**





---
### updateHours

updatTime - update specific time entry

```php
public Timesheets::updateHours(array $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Return Value:**





---
### getProjectHours

getProjectHours - get the Project hours for a specific project

```php
public Timesheets::getProjectHours(int $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |


**Return Value:**





---
### getLoggedHoursForTicket

getLoggedHoursForTicket - get the Ticket hours for a specific ticket

```php
public Timesheets::getLoggedHoursForTicket(int $ticketId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


**Return Value:**





---
### deleteTime



```php
public Timesheets::deleteTime(int $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### cleanUpEmptyTimesheets

Clean up empty timesheets.

```php
public Timesheets::cleanUpEmptyTimesheets(): void
```

This function deletes all timesheets from the "zp_timesheets" table
where the hours value is equal to 0.







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
public Timesheets::punchIn(int $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


**Return Value:**





---
### punchOut

punchOut - clock out on whatever ticket is open for the user

```php
public Timesheets::punchOut(int $ticketId): float|false|int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


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
protected Repository::getFieldAttribute(object|string $class, string $property, bool $includeId = false): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `class` | **object|string** | - the class to get the attribute from |
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
protected static Eventhelpers::get_event_context( $function): string
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
private static Eventhelpers::get_function_context(?int $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **?int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
