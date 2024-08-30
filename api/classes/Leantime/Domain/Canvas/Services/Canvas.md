---
title: \Leantime\Domain\Canvas\Services\Canvas
footer: false
---

# Canvas




`leantime.rpc.Canvas.Canvas.`


## Available Methods
### `leantime.rpc.Canvas.Canvas.import`

import - Import canvas from XML file

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









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filename` | **string** | File to import |
| `canvasName` | **string** |  |
| `projectId` | **int** | Project identifier |
| `authorId` | **int** |  |


**Returns:**
False if import failed and the id of the newly created canvas otherwise
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|int
}
```



---
### `leantime.rpc.Canvas.Canvas.getBoardProgress`

getBoardProgress - gets the progress of canvas types. counts items in each box-type and calculates percent done if each box type has at least 1 item.

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

getLastUpdatedCanvas - gets the list of canvas boards ordered by last updated item

```json
{
    "method": "leantime.rpc.Canvas.Canvas.getLastUpdatedCanvas",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": string,
        "boards": array,
    }
}
```









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

