---
title: \leantime\domain\repositories\calendar
footer: false
---

# calendar





* Full name: `\leantime\domain\repositories\calendar`



## Methods

### __construct

__construct - get database connection

```php
public calendar::__construct(): mixed
```









**Return Value:**





---
### getAllDates



```php
public calendar::getAllDates(mixed $dateFrom, mixed $dateTo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateFrom` | **mixed** |  |
| `dateTo` | **mixed** |  |


**Return Value:**





---
### getCalendar



```php
public calendar::getCalendar(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### getCalendarBySecretHash



```php
public calendar::getCalendarBySecretHash(mixed $userHash, mixed $calHash): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userHash` | **mixed** |  |
| `calHash` | **mixed** |  |


**Return Value:**





---
### getCalendarEventsForToday



```php
public calendar::getCalendarEventsForToday(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getTicketWishDates



```php
public calendar::getTicketWishDates(): mixed
```









**Return Value:**





---
### getTicketEditDates



```php
public calendar::getTicketEditDates(): mixed
```









**Return Value:**





---
### addEvent



```php
public calendar::addEvent(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### getEvent



```php
public calendar::getEvent(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### editEvent



```php
public calendar::editEvent(mixed $values, mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |
| `id` | **mixed** |  |


**Return Value:**





---
### delPersonalEvent



```php
public calendar::delPersonalEvent(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getMyGoogleCalendars



```php
public calendar::getMyGoogleCalendars(): mixed
```









**Return Value:**





---
### getGCal



```php
public calendar::getGCal(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### editGUrl



```php
public calendar::editGUrl(mixed $values, mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |
| `id` | **mixed** |  |


**Return Value:**





---
### deleteGCal



```php
public calendar::deleteGCal(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addGUrl



```php
public calendar::addGUrl(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
