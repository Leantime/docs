---
title: \leantime\domain\repositories\notifications
footer: false
---

# notifications





* Full name: `\leantime\domain\repositories\notifications`



## Methods

### __construct

__construct - get database connection

```php
public notifications::__construct(): mixed
```









**Return Value:**





---
### getAllNotifications



```php
public notifications::getAllNotifications(mixed $userId, mixed $showNewOnly = false, mixed $limitStart, mixed $limitEnd = 100, mixed $filterOptions = array()): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `showNewOnly` | **mixed** |  |
| `limitStart` | **mixed** |  |
| `limitEnd` | **mixed** |  |
| `filterOptions` | **mixed** |  |


**Return Value:**





---
### addNotifications



```php
public notifications::addNotifications(array $notifications): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notifications` | **array** |  |


**Return Value:**





---
### markNotificationRead



```php
public notifications::markNotificationRead(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### markAllNotificationRead



```php
public notifications::markAllNotificationRead(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
