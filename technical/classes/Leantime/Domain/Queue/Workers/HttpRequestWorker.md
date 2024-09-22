---
title: \Leantime\Domain\Queue\Workers\HttpRequestWorker
footer: false
---

# HttpRequestWorker




`\Leantime\Domain\Queue\Workers\HttpRequestWorker`




## Methods

### __construct



```php
public HttpRequestWorker::__construct(\Leantime\Domain\Users\Repositories\Users $userRepo, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Core\Mailer $mailer, \Leantime\Domain\Queue\Repositories\Queue $queue, \GuzzleHttp\Client $client): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userRepo` | **\Leantime\Domain\Users\Repositories\Users** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `mailer` | **\Leantime\Core\Mailer** |  |
| `queue` | **\Leantime\Domain\Queue\Repositories\Queue** |  |
| `client` | **\GuzzleHttp\Client** |  |


**Return Value:**





---
### handleQueue



```php
public HttpRequestWorker::handleQueue(mixed $messages): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `messages` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
