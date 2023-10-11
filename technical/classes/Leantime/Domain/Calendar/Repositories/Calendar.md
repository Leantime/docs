---
title: \Leantime\Domain\Calendar\Repositories\Calendar
footer: false
---

# Calendar

Repository



* Full name: `\Leantime\Domain\Calendar\Repositories\Calendar`
* Parent class: [\Leantime\Core\Repository](../../../Core/Repository.md)



## Methods

### __construct

__construct - get database connection

```php
public Calendar::__construct(\Leantime\Core\Db $db, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### getAllDates



```php
public Calendar::getAllDates( $dateFrom,  $dateTo): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateFrom` | **** |  |
| `dateTo` | **** |  |


**Return Value:**





---
### getAll



```php
public Calendar::getAll( $dateFrom,  $dateTo): false|array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateFrom` | **** |  |
| `dateTo` | **** |  |


**Return Value:**





---
### getCalendar



```php
public Calendar::getCalendar( $userId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |


**Return Value:**





---
### getCalendarBySecretHash



```php
public Calendar::getCalendarBySecretHash( $userHash,  $calHash): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userHash` | **** |  |
| `calHash` | **** |  |


**Return Value:**





---
### getCalendarEventsForToday



```php
public Calendar::getCalendarEventsForToday( $id): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


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
public Calendar::addEvent( $values): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### getEvent



```php
public Calendar::getEvent( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### editEvent



```php
public Calendar::editEvent( $values,  $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `id` | **** |  |


**Return Value:**





---
### delPersonalEvent



```php
public Calendar::delPersonalEvent( $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getMyGoogleCalendars



```php
public Calendar::getMyGoogleCalendars(): array|false
```









**Return Value:**





---
### getGCal



```php
public Calendar::getGCal( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### editGUrl



```php
public Calendar::editGUrl( $values,  $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `id` | **** |  |


**Return Value:**





---
### deleteGCal



```php
public Calendar::deleteGCal( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### addGUrl



```php
public Calendar::addGUrl( $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


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
