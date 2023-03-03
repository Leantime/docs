---
title: \leantime\domain\services\notifications
footer: false
---

# notifications





* Full name: `\leantime\domain\services\notifications`



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
public notifications::getAllNotifications(mixed $userId, mixed $showNewOnly, mixed $limitStart, mixed $limitEnd = 100, mixed $filterOptions = array()): mixed
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
public notifications::markNotificationRead(mixed $id, mixed $userId): mixed
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
public notifications::processMentions(string $content, string $module, int $moduleId, int $authorId, string $url): void
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
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
