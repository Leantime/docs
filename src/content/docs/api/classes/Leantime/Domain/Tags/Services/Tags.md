---
title: "Tags API"
description: "Reference for the Leantime Tags JSON-RPC service: every leantime.rpc.Tags method with its parameters and return values."
---

`leantime.rpc.Tags.Tags.`


## Available Methods
### `leantime.rpc.Tags.Tags.getTags`



```json
{
    "method": "leantime.rpc.Tags.Tags.getTags",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
        "term": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `term` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tags.Tags.explodeAndMergeTags`



```json
{
    "method": "leantime.rpc.Tags.Tags.explodeAndMergeTags",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "dbTagValues": ,
        "mergeInto": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dbTagValues` | **** |  |
| `mergeInto` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

