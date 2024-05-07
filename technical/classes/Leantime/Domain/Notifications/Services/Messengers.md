---
title: \Leantime\Domain\Notifications\Services\Messengers
footer: false
---

# Messengers





* Full name: `\Leantime\Domain\Notifications\Services\Messengers`



## Methods

### __construct

__construct - get database connection

```php
public Messengers::__construct(\GuzzleHttp\Client $httpClient, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `httpClient` | **\GuzzleHttp\Client** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### sendNotificationToMessengers



```php
public Messengers::sendNotificationToMessengers(\Leantime\Domain\Notifications\Models\Notification $notification,  $projectName, array|string $messengers = &quot;all&quot;): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |
| `projectName` | **** |  |
| `messengers` | **array|string** |  |


**Return Value:**





---
### slackWebhook

slackWebhook

```php
private Messengers::slackWebhook(\Leantime\Domain\Notifications\Models\Notification $notification): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


**Return Value:**





---
### mattermostWebhook

mattermostWebhook

```php
private Messengers::mattermostWebhook(\Leantime\Domain\Notifications\Models\Notification $notification): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


**Return Value:**





---
### zulipWebhook

zulipWebhook

```php
private Messengers::zulipWebhook(\Leantime\Domain\Notifications\Models\Notification $notification): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


**Return Value:**





---
### discordWebhook

mattermostWebhook

```php
public Messengers::discordWebhook(\Leantime\Domain\Notifications\Models\Notification $notification): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


**Return Value:**





---
### prepareMessage



```php
public Messengers::prepareMessage(\Leantime\Domain\Notifications\Models\Notification $notification): array[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
