---
title: \Leantime\Domain\Setting\Services\Setting
footer: false
---

# Setting




`leantime.rpc.Setting.Setting.`


## Available Methods
### `leantime.rpc.Setting.Setting.setLogo`



```json
{
    "method": "leantime.rpc.Setting.Setting.setLogo",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "file": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Setting.Setting.resetLogo`



```json
{
    "method": "leantime.rpc.Setting.Setting.resetLogo",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Setting.Setting.saveSetting`



```json
{
    "method": "leantime.rpc.Setting.Setting.saveSetting",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "key": ,
        "value": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **** |  |
| `value` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Setting.Setting.getSetting`



```json
{
    "method": "leantime.rpc.Setting.Setting.getSetting",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "key": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|mixed
}
```



---
### `leantime.rpc.Setting.Setting.getSettingsRepo`



```json
{
    "method": "leantime.rpc.Setting.Setting.getSettingsRepo",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \Leantime\Domain\Setting\Repositories\Setting
}
```



---
### `leantime.rpc.Setting.Setting.setSettingsRepo`



```json
{
    "method": "leantime.rpc.Setting.Setting.setSettingsRepo",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "settingsRepo": \Leantime\Domain\Setting\Repositories\Setting,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---

