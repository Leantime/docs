---
title: \Leantime\Domain\Blueprints\Services\BlueprintsExport
footer: false
---

# BlueprintsExport

BlueprintsExport service - builds the XML export for a blueprint canvas board.

`leantime.rpc.Blueprints.BlueprintsExport.`


## Available Methods
### `leantime.rpc.Blueprints.BlueprintsExport.exportToXml`

exportToXml - generate the XML document for a canvas board.

```json
{
    "method": "leantime.rpc.Blueprints.BlueprintsExport.exportToXml",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "canvasId": int,
        "canvasSlug": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `canvasId` | **int** | Canvas board identifier |
| `canvasSlug` | **string** | Canvas type slug (e.g. &quot;swot&quot;) |


**Returns:**
XML document, or null if the canvas type or board does not exist,
or the user cannot view it (export is reachable via JSON-RPC with
an arbitrary board id, so the VIEW authorization happens here).
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string|null
}
```



---

