---
title: \Leantime\Domain\Calendar\Services\Calendar
footer: false
---

# Calendar





* Full name: `\Leantime\Domain\Calendar\Services\Calendar`



## Methods

### __construct



```php
public Calendar::__construct(\Leantime\Domain\Calendar\Repositories\Calendar $calendarRepo, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `calendarRepo` | **\Leantime\Domain\Calendar\Repositories\Calendar** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





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

Adds a new event to the users calendar

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
public Calendar::getEvent(mixed $eventId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventId` | **mixed** |  |


**Return Value:**





---
### editEvent

edits an event on the users calendar

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

deletes an event on the users calendar

```php
public Calendar::delEvent(mixed $id): int|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**

returns the id on success, false on failure



---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
