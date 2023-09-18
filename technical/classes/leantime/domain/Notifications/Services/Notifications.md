---
title: \Leantime\Domain\Notifications\Services\Notifications
footer: false
---

# Notifications





* Full name: `\Leantime\Domain\Notifications\Services\Notifications`



## Methods

### __construct

__construct - get database connection

```php
public Notifications::__construct(\Leantime\Core\Db $db, \Leantime\Domain\Notifications\Repositories\Notifications $notificationsRepo, \Leantime\Domain\Users\Repositories\Users $userRepository, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |
| `notificationsRepo` | **\Leantime\Domain\Notifications\Repositories\Notifications** |  |
| `userRepository` | **\Leantime\Domain\Users\Repositories\Users** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### getAllNotifications



```php
public Notifications::getAllNotifications(mixed $userId, mixed $showNewOnly, mixed $limitStart, mixed $limitEnd = 100, mixed $filterOptions = array()): mixed
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
public Notifications::markNotificationRead(mixed $id, mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `userId` | **mixed** |  |


**Return Value:**





---
### processMentions



```php
public Notifications::processMentions(string $content, string $module, int $moduleId, int $authorId, string $url): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | **string** |  |
| `module` | **string** |  |
| `moduleId` | **int** |  |
| `authorId` | **int** |  |
| `url` | **string** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
