---
title: \Leantime\Domain\Notifications\Services\News
footer: false
---

# News




`leantime.rpc.Notifications.News.`


## Available Methods
### `leantime.rpc.Notifications.News.__construct`

__construct - get database connection

```json
{
    "method": "leantime.rpc.Notifications.News.__construct",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "db": \Leantime\Core\Db\Db,
        "notificationsRepo": \Leantime\Domain\Notifications\Repositories\Notifications,
        "userRepository": \Leantime\Domain\Users\Repositories\Users,
        "language": \Leantime\Core\Language,
        "settingService": \Leantime\Domain\Setting\Services\Setting,
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
| `settingService` | **\Leantime\Domain\Setting\Services\Setting** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Notifications.News.getFeed`

getFeed - Fetches the feed from a remote URL and returns the contents as a SimpleXMLElement object

```json
{
    "method": "leantime.rpc.Notifications.News.getFeed",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**
- The parsed XML content as a SimpleXMLElement object
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \SimpleXMLElement
}
```



---

