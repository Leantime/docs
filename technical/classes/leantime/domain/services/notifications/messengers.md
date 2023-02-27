---
title: \leantime\domain\services\notifications\messengers
footer: false
---

# messengers





* Full name: `\leantime\domain\services\notifications\messengers`



## Methods

### __construct

__construct - get database connection

```php
public messengers::__construct(): mixed
```









**Return Value:**





---
### sendNotificationToMessengers



```php
public messengers::sendNotificationToMessengers(\leantime\domain\models\notifications\notification $notification, mixed $projectName, array|string $messengers = &quot;all&quot;): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\leantime\domain\models\notifications\notification** |  |
| `projectName` | **mixed** |  |
| `messengers` | **array|string** |  |


**Return Value:**





---
### slackWebhook

slackWebhook

```php
private messengers::slackWebhook(\leantime\domain\models\notifications\notification $notification): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\leantime\domain\models\notifications\notification** |  |


**Return Value:**





---
### mattermostWebhook

mattermostWebhook

```php
private messengers::mattermostWebhook(\leantime\domain\models\notifications\notification $notification): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\leantime\domain\models\notifications\notification** |  |


**Return Value:**





---
### zulipWebhook

zulipWebhook

```php
private messengers::zulipWebhook(\leantime\domain\models\notifications\notification $notification): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\leantime\domain\models\notifications\notification** |  |


**Return Value:**





---
### discordWebhook

mattermostWebhook

```php
public messengers::discordWebhook(\leantime\domain\models\notifications\notification $notification): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\leantime\domain\models\notifications\notification** |  |


**Return Value:**





---
### prepareMessage



```php
public messengers::prepareMessage(\leantime\domain\models\notifications\notification $notification): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\leantime\domain\models\notifications\notification** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
