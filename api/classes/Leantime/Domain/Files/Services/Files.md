---
title: \Leantime\Domain\Files\Services\Files
footer: false
---

# Files




`leantime.rpc.Files.Files.`


## Available Methods
### `leantime.rpc.Files.Files.getFilesByModule`



```json
{
    "method": "leantime.rpc.Files.Files.getFilesByModule",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "module": string,
        "entityId": ,
        "userId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** |  |
| `entityId` | **** |  |
| `userId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Files.Files.uploadFile`



```json
{
    "method": "leantime.rpc.Files.Files.uploadFile",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "file": ,
        "module": ,
        "entityId": ,
        "entity": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **** |  |
| `module` | **** |  |
| `entityId` | **** |  |
| `entity` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Files.Files.deleteFile`



```json
{
    "method": "leantime.rpc.Files.Files.deleteFile",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "fileId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fileId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---

