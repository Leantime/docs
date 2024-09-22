---
title: \Leantime\Domain\Notifications\Repositories\Notifications
footer: false
---

# Notifications




`\Leantime\Domain\Notifications\Repositories\Notifications`




## Methods

### __construct

__construct - get database connection

```php
public Notifications::__construct(\Leantime\Core\Db\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |


**Return Value:**





---
### getAllNotifications



```php
public Notifications::getAllNotifications( $userId, false $showNewOnly = false, int $limitStart, int $limitEnd = 100, array $filterOptions = array()): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `showNewOnly` | **false** |  |
| `limitStart` | **int** |  |
| `limitEnd` | **int** |  |
| `filterOptions` | **array** |  |


**Return Value:**





---
### addNotifications



```php
public Notifications::addNotifications(array $notifications): bool|void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notifications` | **array** |  |


**Return Value:**





---
### markNotificationRead



```php
public Notifications::markNotificationRead( $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### markAllNotificationRead



```php
public Notifications::markAllNotificationRead( $userId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
