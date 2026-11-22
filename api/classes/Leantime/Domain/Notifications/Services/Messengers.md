---
title: \Leantime\Domain\Notifications\Services\Messengers
footer: false
---

# Messengers

Posts project notifications to the messenger webhooks a project has configured (Slack,
Mattermost, Zulip, Discord, Telegram).

`leantime.rpc.Notifications.Messengers.`


## Available Methods
### `leantime.rpc.Notifications.Messengers.__construct`

__construct - get database connection

```json
{
    "method": "leantime.rpc.Notifications.Messengers.__construct",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "httpClient": \Leantime\Core\Support\OutboundHttpClient,
        "settingsRepo": \Leantime\Domain\Setting\Repositories\Setting,
        "language": \Leantime\Core\Language,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `httpClient` | **\Leantime\Core\Support\OutboundHttpClient** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `language` | **\Leantime\Core\Language** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Notifications.Messengers.slackWebhook`

slackWebhook

```json
{
    "method": "leantime.rpc.Notifications.Messengers.slackWebhook",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "notification": \Leantime\Domain\Notifications\Models\Notification,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Notifications.Messengers.mattermostWebhook`

mattermostWebhook

```json
{
    "method": "leantime.rpc.Notifications.Messengers.mattermostWebhook",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "notification": \Leantime\Domain\Notifications\Models\Notification,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Notifications.Messengers.zulipWebhook`

zulipWebhook

```json
{
    "method": "leantime.rpc.Notifications.Messengers.zulipWebhook",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "notification": \Leantime\Domain\Notifications\Models\Notification,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Notifications.Messengers.discordWebhook`

mattermostWebhook

```json
{
    "method": "leantime.rpc.Notifications.Messengers.discordWebhook",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "notification": \Leantime\Domain\Notifications\Models\Notification,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Notifications.Messengers.prepareMessage`



```json
{
    "method": "leantime.rpc.Notifications.Messengers.prepareMessage",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "notification": \Leantime\Domain\Notifications\Models\Notification,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array[]
}
```



---

