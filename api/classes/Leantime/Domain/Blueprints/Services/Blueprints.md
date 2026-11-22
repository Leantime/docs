---
title: \Leantime\Domain\Blueprints\Services\Blueprints
footer: false
---

# Blueprints

Blueprints service - business logic for unified canvas boards.

Replaces the old Canvas\Services\Canvas by using the Blueprints repo
and TemplateRegistry directly instead of dynamically resolving variant repos.

Authorization: canvas boards and items are PROJECT-scoped (each board belongs to one
project; items belong to a board). Every by-id board/item operation routes through this
service, which resolves the entity's REAL project via the repository's fail-closed
resolvers and authorizes the matching {@see \Leantime\Domain\Blueprints\Permissions\BlueprintsPermissions} verb against it. A
resolver returning null (missing id, or an id whose board is a different canvas type — the
shared `zp_canvas`/`zp_canvas_items` tables hold every variant under one id sequence) is
treated as DENY, never as "fall back to the session project". Controllers therefore call
these methods instead of the repository directly.
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


Parses the XML, validates its structure, then creates a new canvas board
with all items from the file.






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


Counts items per box type for each canvas and calculates what fraction
of box types have at least one item.






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
| `projectId` | **int|null** | Project identifier (null for all) |
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

