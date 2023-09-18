---
title: \Leantime\Domain\Queue\Repositories\Queue
footer: false
---

# Queue





* Full name: `\Leantime\Domain\Queue\Repositories\Queue`



## Methods

### __construct



```php
public Queue::__construct(\Leantime\Core\Db $db, \Leantime\Domain\Users\Repositories\Users $users): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |
| `users` | **\Leantime\Domain\Users\Repositories\Users** |  |


**Return Value:**





---
### queueMessageToUsers



```php
public Queue::queueMessageToUsers(mixed $recipients, mixed $message, mixed $subject = &quot;&quot;, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `recipients` | **mixed** |  |
| `message` | **mixed** |  |
| `subject` | **mixed** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### listMessageInQueue



```php
public Queue::listMessageInQueue(mixed $channel = &#039;email&#039;, mixed $recipients = null, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `channel` | **mixed** |  |
| `recipients` | **mixed** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### deleteMessageInQueue



```php
public Queue::deleteMessageInQueue(mixed $msghashes): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `msghashes` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
