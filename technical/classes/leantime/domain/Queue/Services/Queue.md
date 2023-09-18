---
title: \Leantime\Domain\Queue\Services\Queue
footer: false
---

# Queue





* Full name: `\Leantime\Domain\Queue\Services\Queue`



## Methods

### __construct



```php
public Queue::__construct(\Leantime\Domain\Queue\Repositories\Queue $queue, \Leantime\Domain\Users\Repositories\Users $userRepo, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Core\Mailer $mailer, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `queue` | **\Leantime\Domain\Queue\Repositories\Queue** |  |
| `userRepo` | **\Leantime\Domain\Users\Repositories\Users** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `mailer` | **\Leantime\Core\Mailer** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### doFormatMail



```php
private Queue::doFormatMail(mixed $messageToSendToUser): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `messageToSendToUser` | **mixed** |  |


**Return Value:**





---
### processQueue



```php
public Queue::processQueue(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
