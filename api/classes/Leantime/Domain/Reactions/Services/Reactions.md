---
title: \Leantime\Domain\Reactions\Services\Reactions
footer: false
---

# Reactions




`leantime.rpc.Reactions.Reactions.`


## Available Methods
### `leantime.rpc.Reactions.Reactions.addReaction`

addReaction - adds a reaction to an entity, checks if a user has already reacted the same way

```json
{
    "method": "leantime.rpc.Reactions.Reactions.addReaction",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "module": string,
        "moduleId": int,
        "reaction": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `module` | **string** |  |
| `moduleId` | **int** |  |
| `reaction` | **string** |  |


**Returns:**

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
    "result": array|bool
}
```



---
### `leantime.rpc.Reactions.Reactions.getUserReactions`

getMyReactions - gets user reactions. Can be very broad or very targeted

```json
{
    "method": "leantime.rpc.Reactions.Reactions.getUserReactions",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "module": string,
        "moduleId": int|null,
        "reaction": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `module` | **string** |  |
| `moduleId` | **int|null** |  |
| `reaction` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Reactions.Reactions.removeReaction`

addReaction - adds a reaction to an entity, checks if a user has already reacted the same way

```json
{
    "method": "leantime.rpc.Reactions.Reactions.removeReaction",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "module": string,
        "moduleId": int,
        "reaction": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `module` | **string** |  |
| `moduleId` | **int** |  |
| `reaction` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---

