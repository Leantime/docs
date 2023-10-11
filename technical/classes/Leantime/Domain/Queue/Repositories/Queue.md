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
public Queue::queueMessageToUsers( $recipients,  $message, string $subject = &quot;&quot;, int $projectId): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `recipients` | **** |  |
| `message` | **** |  |
| `subject` | **string** |  |
| `projectId` | **int** |  |


**Return Value:**





---
### listMessageInQueue



```php
public Queue::listMessageInQueue(string $channel = &#039;email&#039;,  $recipients = null, int $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `channel` | **string** |  |
| `recipients` | **** |  |
| `projectId` | **int** |  |


**Return Value:**





---
### deleteMessageInQueue



```php
public Queue::deleteMessageInQueue( $msghashes): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `msghashes` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
