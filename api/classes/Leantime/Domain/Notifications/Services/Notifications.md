---
title: \Leantime\Domain\Notifications\Services\Notifications
footer: false
---

# Notifications




`leantime.rpc.Notifications.Notifications.`


## Available Methods
### `leantime.rpc.Notifications.Notifications.__construct`

__construct - get database connection

```json
{
    "method": "leantime.rpc.Notifications.Notifications.__construct",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "db": \Leantime\Core\Db\Db,
        "notificationsRepo": \Leantime\Domain\Notifications\Repositories\Notifications,
        "userRepository": \Leantime\Domain\Users\Repositories\Users,
        "language": \Leantime\Core\Language,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |
| `notificationsRepo` | **\Leantime\Domain\Notifications\Repositories\Notifications** |  |
| `userRepository` | **\Leantime\Domain\Users\Repositories\Users** |  |
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
### `leantime.rpc.Notifications.Notifications.getAllNotifications`



```json
{
    "method": "leantime.rpc.Notifications.Notifications.getAllNotifications",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ,
        "showNewOnly": int,
        "limitStart": int,
        "limitEnd": int,
        "filterOptions": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `showNewOnly` | **int** |  |
| `limitStart` | **int** |  |
| `limitEnd` | **int** |  |
| `filterOptions` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Notifications.Notifications.addNotifications`



```json
{
    "method": "leantime.rpc.Notifications.Notifications.addNotifications",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "notifications": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notifications` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|null
}
```



---
### `leantime.rpc.Notifications.Notifications.markNotificationRead`



```json
{
    "method": "leantime.rpc.Notifications.Notifications.markNotificationRead",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": ,
        "userId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `userId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Notifications.Notifications.processMentions`



```json
{
    "method": "leantime.rpc.Notifications.Notifications.processMentions",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "content": string,
        "module": string,
        "moduleId": int,
        "authorId": int,
        "url": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | **string** |  |
| `module` | **string** |  |
| `moduleId` | **int** |  |
| `authorId` | **int** |  |
| `url` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---

