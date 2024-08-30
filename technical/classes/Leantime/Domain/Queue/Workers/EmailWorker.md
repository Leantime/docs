---
title: \Leantime\Domain\Queue\Workers\EmailWorker
footer: false
---

# EmailWorker





* Full name: `\Leantime\Domain\Queue\Workers\EmailWorker`



## Methods

### __construct



```php
public EmailWorker::__construct(\Leantime\Domain\Users\Repositories\Users $userRepo, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Core\Mailer $mailer, \Leantime\Domain\Queue\Repositories\Queue $queue, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userRepo` | **\Leantime\Domain\Users\Repositories\Users** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `mailer` | **\Leantime\Core\Mailer** |  |
| `queue` | **\Leantime\Domain\Queue\Repositories\Queue** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### handleQueue



```php
public EmailWorker::handleQueue(mixed $messages): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `messages` | **mixed** |  |


**Return Value:**





---
### doFormatMail



```php
private EmailWorker::doFormatMail( $messageToSendToUser): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `messageToSendToUser` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
