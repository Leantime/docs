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
public Notifications::getAllNotifications( $userId, int $showNewOnly, int $limitStart, int $limitEnd = 100, array $filterOptions = array()): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `showNewOnly` | **int** |  |
| `limitStart` | **int** |  |
| `limitEnd` | **int** |  |
| `filterOptions` | **array** |  |


**Return Value:**





---
### addNotifications



```php
public Notifications::addNotifications(array $notifications): bool|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notifications` | **array** |  |


**Return Value:**





---
### markNotificationRead



```php
public Notifications::markNotificationRead( $id,  $userId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `userId` | **** |  |


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
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
