---
title: \Leantime\Domain\Notifications\Repositories\Notifications
footer: false
---

# Notifications





* Full name: `\Leantime\Domain\Notifications\Repositories\Notifications`



## Methods

### __construct

__construct - get database connection

```php
public Notifications::__construct(\Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getAllNotifications



```php
public Notifications::getAllNotifications(mixed $userId, mixed $showNewOnly = false, mixed $limitStart, mixed $limitEnd = 100, mixed $filterOptions = array()): mixed
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
public Notifications::addNotifications(array $notifications): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notifications` | **array** |  |


**Return Value:**





---
### markNotificationRead



```php
public Notifications::markNotificationRead(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### markAllNotificationRead



```php
public Notifications::markAllNotificationRead(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
