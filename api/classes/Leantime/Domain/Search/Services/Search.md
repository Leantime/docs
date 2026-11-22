---
title: \Leantime\Domain\Search\Services\Search
footer: false
---

# Search

Global search across entity types. Owns the provider registry, the access scope and the
shared filter vocabulary; providers own their queries.

`leantime.rpc.Search.Search.`


## Available Methods
### `leantime.rpc.Search.Search.quickSearch`

Top hits per entity type for the header dropdown. One request, one small query per type.

```json
{
    "method": "leantime.rpc.Search.Search.quickSearch",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "term": string,
        "perType": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `term` | **string** |  |
| `perType` | **int** |  |


**Returns:**
Keyed by provider key; types without hits are omitted.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<string,\Leantime\Domain\Search\Models\SearchResult[]>
}
```



---
### `leantime.rpc.Search.Search.search`

Paged results for one entity type (the full results page loads one panel per type).

```json
{
    "method": "leantime.rpc.Search.Search.search",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "term": string,
        "type": string,
        "limit": int,
        "offset": int,
        "filters": array<string,mixed>,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `term` | **string** |  |
| `type` | **string** |  |
| `limit` | **int** |  |
| `offset` | **int** |  |
| `filters` | **array<string,mixed>** | Normalized filters, see normalizeFilters(). |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \Leantime\Domain\Search\Models\SearchResult[]
}
```



---

