---
title: \leantime\domain\repositories\queue
footer: false
---

# queue





* Full name: `\leantime\domain\repositories\queue`



## Methods

### __construct



```php
public queue::__construct(): mixed
```









**Return Value:**





---
### queueMessageToUsers



```php
public queue::queueMessageToUsers(mixed $recipients, mixed $message, mixed $subject = &quot;&quot;, mixed $projectId): mixed
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
public queue::listMessageInQueue(mixed $channel = &#039;email&#039;, mixed $recipients = null, mixed $projectId): mixed
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
public queue::deleteMessageInQueue(mixed $msghashes): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `msghashes` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
