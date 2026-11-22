---
title: "Canvas API"
description: "Reference for the Leantime Canvas JSON-RPC service: every leantime.rpc.Canvas method with its parameters and return values."
---

Thin backwards-compatibility shim over the Blueprints service.

`leantime.rpc.Canvas.Canvas.`
* **Warning:** this class is **deprecated**. This means that this class will likely be removed in a future version.


## Available Methods
### `leantime.rpc.Canvas.Canvas.import`

import - Import canvas from XML file (delegates to Blueprints).

```json
{
    "method": "leantime.rpc.Canvas.Canvas.import",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "filename": string,
        "canvasName": string,
        "projectId": int,
        "authorId": int,
    }
}
```






* **Warning:** this method is **deprecated**. This means that this method will likely be removed in a future version.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filename` | **string** | File to import |
| `canvasName` | **string** | Legacy canvas type (e.g. &quot;swotcanvas&quot;) or slug |
| `projectId` | **int** | Project identifier |
| `authorId` | **int** | Author identifier |


**Returns:**
False if import failed, otherwise the new canvas id
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|int
}
```



---
### `leantime.rpc.Canvas.Canvas.getBoardProgress`

getBoardProgress - completion percentage per canvas type (delegates to Blueprints).

```json
{
    "method": "leantime.rpc.Canvas.Canvas.getBoardProgress",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": string,
        "boards": array,
    }
}
```






* **Warning:** this method is **deprecated**. This means that this method will likely be removed in a future version.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **string** | projectId (optional) |
| `boards` | **array** | Array of project board types |


**Returns:**
List of boards with a progress percentage
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Canvas.Canvas.getLastUpdatedCanvas`

getLastUpdatedCanvas - canvas boards ordered by last updated item (delegates to Blueprints).

```json
{
    "method": "leantime.rpc.Canvas.Canvas.getLastUpdatedCanvas",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int|null,
        "boards": array,
    }
}
```






* **Warning:** this method is **deprecated**. This means that this method will likely be removed in a future version.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int\|null** | projectId (optional) |
| `boards` | **array** | Array of project board types |


**Returns:**
List of boards
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

