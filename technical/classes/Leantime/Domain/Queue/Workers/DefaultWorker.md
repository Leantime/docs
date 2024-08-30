---
title: \Leantime\Domain\Queue\Workers\DefaultWorker
footer: false
---

# DefaultWorker





* Full name: `\Leantime\Domain\Queue\Workers\DefaultWorker`



## Methods

### __construct



```php
public DefaultWorker::__construct(\Leantime\Domain\Users\Repositories\Users $userRepo, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Domain\Queue\Repositories\Queue $queue, \GuzzleHttp\Client $client): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userRepo` | **\Leantime\Domain\Users\Repositories\Users** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `queue` | **\Leantime\Domain\Queue\Repositories\Queue** |  |
| `client` | **\GuzzleHttp\Client** |  |


**Return Value:**





---
### handleQueue



```php
public DefaultWorker::handleQueue(mixed $messages): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `messages` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
