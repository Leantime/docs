---
title: \Leantime\Domain\Calendar\Services\Calendar
footer: false
---

# Calendar




`\Leantime\Domain\Calendar\Services\Calendar`




## Methods

### __construct



```php
public Calendar::__construct(\Leantime\Domain\Calendar\Repositories\Calendar $calendarRepo, \Leantime\Core\Language $language, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Core\Configuration\Environment $config): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `calendarRepo` | **\Leantime\Domain\Calendar\Repositories\Calendar** |  |
| `language` | **\Leantime\Core\Language** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `config` | **\Leantime\Core\Configuration\Environment** |  |


**Return Value:**





---
### deleteGCal

Deletes a Google Calendar.

```php
public Calendar::deleteGCal(int $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The ID of the Google Calendar to delete. |


**Return Value:**

Returns true if the Google Calendar was successfully deleted, false otherwise.



---
### patch

Patches calendar event

```php
public Calendar::patch(mixed $id, mixed $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `params` | **mixed** |  |


**Return Value:**

true on success, false on failure



---
### userIsAllowedToUpdate

Checks if user is allowed to make changes to event

```php
private Calendar::userIsAllowedToUpdate(mixed $eventId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventId` | **mixed** |  |


**Return Value:**

true on success, false on failure



---
### addEvent

Adds a new event to the user's calendar

```php
public Calendar::addEvent(array $values): int|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Return Value:**

returns the id on success, false on failure



---
### getEvent



```php
public Calendar::getEvent(int $eventId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventId` | **int** |  |


**Return Value:**





---
### editEvent

edits an event on the user's calendar
Important: Time needs to come in as user formatted time value.

```php
public Calendar::editEvent(array $values): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Return Value:**

returns true on success, false on failure



---
### delEvent

deletes an event on the user's calendar

```php
public Calendar::delEvent(int $id): int|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**

returns the id on success, false on failure



---
### getExternalCalendar



```php
public Calendar::getExternalCalendar(int $id, int $userId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |
| `userId` | **int** |  |


**Return Value:**





---
### editExternalCalendar



```php
public Calendar::editExternalCalendar(array $values, int $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `id` | **int** |  |


**Return Value:**





---
### getIcalByHash

Retrieves iCal calendar by user hash and calendar hash.

```php
public Calendar::getIcalByHash(string $userHash, string $calHash): \Spatie\IcalendarGenerator\Components\Calendar
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userHash` | **string** | The hash of the user. |
| `calHash` | **string** | The hash of the calendar. |


**Return Value:**

The iCal calendar generated from the calendar events.



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
### getICalUrl



```php
public Calendar::getICalUrl(): mixed
```









**Return Value:**





---
### generateIcalHash



```php
public Calendar::generateIcalHash(): mixed
```









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


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
