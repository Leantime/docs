---
title: \Leantime\Domain\Tags\Services\Tags
footer: false
---

# Tags




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


The JSON-RPC endpoint has no controller-level project gate (the retired
Api\Controllers\Tags forced session('currentProject'), but a JSON-RPC caller
can pass any projectId). isUserAssignedToProject() is the full access check —
it allows admins/owners, org-wide ("all") and client-level projects, and
directly assigned users — so this both preserves legitimate access and prevents
cross-project tag enumeration.






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

