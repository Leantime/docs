---
title: \Leantime\Domain\Reactions\Services\Reactions
footer: false
---

# Reactions

Reactions service.

`leantime.rpc.Reactions.Reactions.`


## Available Methods
### `leantime.rpc.Reactions.Reactions.react`

Adds a reaction on behalf of the CURRENT (session) user.

```json
{
    "method": "leantime.rpc.Reactions.Reactions.react",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "module": string,
        "moduleId": int,
        "reaction": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** | The entity module (e.g. &#039;tickets&#039;) |
| `moduleId` | **int** | The entity id |
| `reaction` | **string** | The reaction key |


**Returns:**
True if the reaction was added
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Reactions.Reactions.unreact`

Removes a reaction on behalf of the CURRENT (session) user.

```json
{
    "method": "leantime.rpc.Reactions.Reactions.unreact",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "module": string,
        "moduleId": int,
        "reaction": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** | The entity module (e.g. &#039;tickets&#039;) |
| `moduleId` | **int** | The entity id |
| `reaction` | **string** | The reaction key |


**Returns:**
True if the reaction was removed
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Reactions.Reactions.getReactionType`

getReactionType - returns the category/type of a given reaction

```json
{
    "method": "leantime.rpc.Reactions.Reactions.getReactionType",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "reaction": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `reaction` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string|false
}
```



---
### `leantime.rpc.Reactions.Reactions.getGroupedEntityReactions`

getGroupedEntityReactions - gets all reactions for a given entity grouped and counted by reactions

```json
{
    "method": "leantime.rpc.Reactions.Reactions.getGroupedEntityReactions",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "module": string,
        "moduleId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** |  |
| `moduleId` | **int** |  |


**Returns:**
returns the array on success or false on failure
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Reactions.Reactions.getEntityReactionsWithUsers`

getEntityReactionsWithUsers - gets all reactions for an entity with user names

```json
{
    "method": "leantime.rpc.Reactions.Reactions.getEntityReactionsWithUsers",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "module": string,
        "moduleId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** |  |
| `moduleId` | **int** |  |


**Returns:**
returns array grouped by reaction with user info
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

