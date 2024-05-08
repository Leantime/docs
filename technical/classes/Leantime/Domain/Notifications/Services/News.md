---
title: \Leantime\Domain\Notifications\Services\News
footer: false
---

# News





* Full name: `\Leantime\Domain\Notifications\Services\News`



## Methods

### __construct

__construct - get database connection

```php
public News::__construct(\Leantime\Core\Db $db, \Leantime\Domain\Notifications\Repositories\Notifications $notificationsRepo, \Leantime\Domain\Users\Repositories\Users $userRepository, \Leantime\Core\Language $language, \Leantime\Domain\Setting\Services\Setting $settingService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |
| `notificationsRepo` | **\Leantime\Domain\Notifications\Repositories\Notifications** |  |
| `userRepository` | **\Leantime\Domain\Users\Repositories\Users** |  |
| `language` | **\Leantime\Core\Language** |  |
| `settingService` | **\Leantime\Domain\Setting\Services\Setting** |  |


**Return Value:**





---
### getLatest



```php
public News::getLatest(int $userId): false|\SimpleXMLElement
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |


**Return Value:**





---
### hasNews



```php
public News::hasNews(int $userId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |


**Return Value:**





---
### getFeed

getFeed - Fetches the feed from a remote URL and returns the contents as a SimpleXMLElement object

```php
public News::getFeed(): \SimpleXMLElement
```









**Return Value:**

- The parsed XML content as a SimpleXMLElement object



---


---
> Automatically generated from source code comments on 2024-05-08 using [phpDocumentor](http://www.phpdoc.org/)
