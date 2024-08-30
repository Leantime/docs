---
title: \Leantime\Domain\Queue\Services\Queue
footer: false
---

# Queue





* Full name: `\Leantime\Domain\Queue\Services\Queue`



## Methods

### __construct

Class constructor.

```php
public Queue::__construct(\Leantime\Domain\Queue\Repositories\Queue $queue, \Leantime\Domain\Users\Repositories\Users $userRepo, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Core\Mailer $mailer, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `queue` | **\Leantime\Domain\Queue\Repositories\Queue** | The queue repository. |
| `userRepo` | **\Leantime\Domain\Users\Repositories\Users** | The user repository. |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** | The settings repository. |
| `mailer` | **\Leantime\Core\Mailer** | The mailer core. |
| `language` | **\Leantime\Core\Language** | The language core. |


**Return Value:**





---
### processQueue

Process the queue for a specific worker.

```php
public Queue::processQueue(\Leantime\Domain\Queue\Workers\Workers $worker): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `worker` | **\Leantime\Domain\Queue\Workers\Workers** | The worker for which to process the queue. |


**Return Value:**

Returns true if the queue was processed successfully, false otherwise.



---
### addToQueue



```php
public Queue::addToQueue(\Leantime\Domain\Queue\Workers\Workers $channel, string $subject, string $message, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `channel` | **\Leantime\Domain\Queue\Workers\Workers** |  |
| `subject` | **string** |  |
| `message` | **string** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### addJob



```php
public static Queue::addJob(\Leantime\Domain\Queue\Workers\Workers $channel, string $subject, mixed $message, ?int $userId = null, ?int $projectId = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `channel` | **\Leantime\Domain\Queue\Workers\Workers** |  |
| `subject` | **string** |  |
| `message` | **mixed** |  |
| `userId` | **?int** |  |
| `projectId` | **?int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
