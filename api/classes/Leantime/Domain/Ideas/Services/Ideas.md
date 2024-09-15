---
title: \Leantime\Domain\Ideas\Services\Ideas
footer: false
---

# Ideas




`leantime.rpc.Ideas.Ideas.`


## Available Methods
### `leantime.rpc.Ideas.Ideas.pollForNewIdeas`



```json
{
    "method": "leantime.rpc.Ideas.Ideas.pollForNewIdeas",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
        "board": ?int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `board` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Ideas.Ideas.pollForUpdatedIdeas`



```json
{
    "method": "leantime.rpc.Ideas.Ideas.pollForUpdatedIdeas",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
        "board": ?int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `board` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

