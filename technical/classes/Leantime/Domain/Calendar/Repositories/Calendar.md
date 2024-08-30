---
title: \Leantime\Domain\Calendar\Repositories\Calendar
footer: false
---

# Calendar

Repository


`\Leantime\Domain\Calendar\Repositories\Calendar`

* Parent class: [\Leantime\Core\Db\Repository](../../../Core/Db/Repository.md)



## Methods

### __construct

Class constructor.

```php
public Calendar::__construct(\Leantime\Core\Db\Db $db, \Leantime\Core\Language $language, \Leantime\Core\Support\DateTimeHelper $dateTimeHelper, \Leantime\Core\Configuration\Environment $config): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** | The DbCore object. |
| `language` | **\Leantime\Core\Language** | The LanguageCore object. |
| `dateTimeHelper` | **\Leantime\Core\Support\DateTimeHelper** | The DateTimeHelper object. |
| `config` | **\Leantime\Core\Configuration\Environment** | The Environment object. |


**Return Value:**





---
### getAllDates



```php
public Calendar::getAllDates(string $dateFrom, string $dateTo): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateFrom` | **string** |  |
| `dateTo` | **string** |  |


**Return Value:**





---
### getAll

Retrieves calendar events based on optional filters.

```php
public Calendar::getAll(int|null $userId, \Carbon\CarbonImmutable|null $dateFrom, \Carbon\CarbonImmutable|null $dateTo): bool|array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int|null** | The user ID to filter the results by. |
| `dateFrom` | **\Carbon\CarbonImmutable|null** | The minimum date and time of the events. |
| `dateTo` | **\Carbon\CarbonImmutable|null** | The maximum date and time of the events. |


**Return Value:**

Returns an array of calendar events if successful, otherwise false.



---
### getCalendar



```php
public Calendar::getCalendar(int $userId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |


**Return Value:**





---
### mapEventData

Generates an event array for fullcalendar.io frontend.

```php
private Calendar::mapEventData(string $title, string $description, bool $allDay, int $id, int $projectId, string $eventType, string $dateContext, string $backgroundColor, string $borderColor, int|null $dateFrom, int|null $dateTo): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **string** |  |
| `description` | **string** |  |
| `allDay` | **bool** |  |
| `id` | **int** |  |
| `projectId` | **int** |  |
| `eventType` | **string** |  |
| `dateContext` | **string** |  |
| `backgroundColor` | **string** |  |
| `borderColor` | **string** |  |
| `dateFrom` | **int|null** |  |
| `dateTo` | **int|null** |  |


**Return Value:**





---
### getCalendarBySecretHash



```php
public Calendar::getCalendarBySecretHash(string $userHash, string $calHash): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userHash` | **string** |  |
| `calHash` | **string** |  |


**Return Value:**





---
### getTicketWishDates



```php
public Calendar::getTicketWishDates(): array|false
```









**Return Value:**





---
### getTicketEditDates



```php
public Calendar::getTicketEditDates(): array|false
```









**Return Value:**





---
### addEvent



```php
public Calendar::addEvent(array $values): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Return Value:**





---
### getEvent



```php
public Calendar::getEvent(int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### editEvent



```php
public Calendar::editEvent(array $values, int $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `id` | **int** |  |


**Return Value:**





---
### delPersonalEvent



```php
public Calendar::delPersonalEvent(int $id): int|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### getMyExternalCalendars



```php
public Calendar::getMyExternalCalendars(int $userId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |


**Return Value:**





---
### getExternalCalendar



```php
public Calendar::getExternalCalendar(int $calendarId, int $userId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `calendarId` | **int** |  |
| `userId` | **int** |  |


**Return Value:**





---
### getGCal



```php
public Calendar::getGCal(int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### editGUrl



```php
public Calendar::editGUrl(array $values, int $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `id` | **int** |  |


**Return Value:**





---
### deleteGCal



```php
public Calendar::deleteGCal(int $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### addGUrl



```php
public Calendar::addGUrl(array $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


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
public static DispatchesEvents::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
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
public static DispatchesEvents::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
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
protected static DispatchesEvents::get_event_context( $function): string
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
private static DispatchesEvents::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static DispatchesEvents::get_function_context(?int $functionInt = null): string
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
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
