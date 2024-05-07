---
title: \Leantime\Plugins\Llamadorian\Listeners\BotListener
footer: false
---

# BotListener





* Full name: `\Leantime\Plugins\Llamadorian\Listeners\BotListener`



## Methods

### __construct



```php
public BotListener::__construct(\Leantime\Plugins\Llamadorian\Services\AiCoach $aiCoachService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `aiCoachService` | **\Leantime\Plugins\Llamadorian\Services\AiCoach** |  |


**Return Value:**





---
### handle



```php
public BotListener::handle(): mixed
```









**Return Value:**





---
### statusUpdate



```php
public BotListener::statusUpdate(mixed $payload): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `payload` | **mixed** |  |


**Return Value:**





---
### isTicketMismatch



```php
private BotListener::isTicketMismatch(mixed $ticketId, mixed $handler): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |
| `handler` | **mixed** |  |


**Return Value:**





---
### handleAICoachMessage



```php
private BotListener::handleAICoachMessage(mixed $ticketId, mixed $coachMessage): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |
| `coachMessage` | **mixed** |  |


**Return Value:**





---
### showMessage



```php
private BotListener::showMessage(mixed $message): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `message` | **mixed** |  |


**Return Value:**





---
### showNotificationIndicator



```php
private BotListener::showNotificationIndicator(mixed $notification): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **mixed** |  |


**Return Value:**





---
### getAINotifications



```php
private BotListener::getAINotifications(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
