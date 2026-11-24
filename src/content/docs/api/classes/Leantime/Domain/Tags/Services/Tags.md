---
title: "Tags API"
description: "Reference for the Leantime Tags JSON-RPC service: every leantime.rpc.Tags method with its parameters and return values."
---

`leantime.rpc.Tags.Tags.`


## Available Methods
### `leantime.rpc.Tags.Tags.getTags`

Returns the tag autocomplete suggestions for a project, filtered by $term.

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
| `projectId` | **int** | The project to read tags from |
| `term` | **string** | Substring to filter tag suggestions by |


**Returns:**
Matching tag strings (an empty array means no matches, NOT no access)
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

