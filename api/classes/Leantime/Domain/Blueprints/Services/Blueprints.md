---
title: \Leantime\Domain\Blueprints\Services\Blueprints
footer: false
---

# Blueprints

Blueprints service - business logic for unified canvas boards.

`leantime.rpc.Blueprints.Blueprints.`


## Available Methods
### `leantime.rpc.Blueprints.Blueprints.patchCanvasItem`

Patch allowlisted columns of a canvas item, authorized for EDIT against the item's real
project. Used by the inline board-update API.

```json
{
    "method": "leantime.rpc.Blueprints.Blueprints.patchCanvasItem",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "params": array<string,mixed>,
        "canvasType": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | Canvas item id |
| `params` | **array<string,mixed>** | Fields to patch (allowlisted in the repository) |
| `canvasType` | **string** | Board type the item must belong to |


**Returns:**
False when no allowlisted columns were present (a client error, not a denial)
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Blueprints.Blueprints.import`

Import a canvas board from an XML file.

```json
{
    "method": "leantime.rpc.Blueprints.Blueprints.import",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "filename": string,
        "canvasSlug": string,
        "projectId": int,
        "authorId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filename` | **string** | Path to the XML file |
| `canvasSlug` | **string** | Canvas type slug (e.g., &quot;swot&quot;, &quot;lean&quot;) |
| `projectId` | **int** | Project identifier |
| `authorId` | **int** | Author user identifier |


**Returns:**
False on failure, or the new canvas board ID on success
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|int
}
```



---
### `leantime.rpc.Blueprints.Blueprints.getBoardProgress`

Get progress percentages for canvas boards in a project.

```json
{
    "method": "leantime.rpc.Blueprints.Blueprints.getBoardProgress",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": string,
        "boards": array<int,string>,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **string** | Project identifier (empty string for the current project) |
| `boards` | **array<int,string>** | Array of database canvas types to check |


**Returns:**
Map of canvas type to max progress (0.0 to 1.0)
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<string,float>
}
```



---
### `leantime.rpc.Blueprints.Blueprints.getLastUpdatedCanvas`

Get canvas boards ordered by last updated item.

```json
{
    "method": "leantime.rpc.Blueprints.Blueprints.getLastUpdatedCanvas",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int|null,
        "boards": array<int,string>,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int\|null** | Project identifier (null for all) |
| `boards` | **array<int,string>** | Array of database canvas types to filter by |


**Returns:**
List of canvas boards with modification dates
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---

