---
title: \Leantime\Domain\Clients\Services\Clients
footer: false
---

# Clients

Class Clients


`leantime.rpc.Clients.Clients.`


## Available Methods
### `leantime.rpc.Clients.Clients.getUserClients`



```json
{
    "method": "leantime.rpc.Clients.Clients.getUserClients",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Clients.Clients.getAll`



```json
{
    "method": "leantime.rpc.Clients.Clients.getAll",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "searchparams": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchparams` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Clients.Clients.patch`

patches the client by key.

```json
{
    "method": "leantime.rpc.Clients.Clients.patch",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "params": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | Id of the object to be patched |
| `params` | **array** | Key=&gt;value array where key represents the object field name and value the value. |


**Returns:**
returns true on success, false on failure
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Clients.Clients.editClient`

updates the client by key.

```json
{
    "method": "leantime.rpc.Clients.Clients.editClient",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": object|array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **object|array** | expects the entire object to be updated as object or array |


**Returns:**
Returns true on success, false on failure
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Clients.Clients.create`

Creates a new client

```json
{
    "method": "leantime.rpc.Clients.Clients.create",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": object|array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **object|array** | Object or array to be created |


**Returns:**
Returns id of new element or false
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int|false
}
```



---
### `leantime.rpc.Clients.Clients.delete`

Deletes a client

```json
{
    "method": "leantime.rpc.Clients.Clients.delete",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | Id of the object to be deleted |


**Returns:**
Returns id of new element or false
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Clients.Clients.get`

Gets 1 specific client by id

```json
{
    "method": "leantime.rpc.Clients.Clients.get",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | Id of the object to be retrieved |


**Returns:**
Returns object or array. False on failure or if item cannot be found
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": object|array|false
}
```



---

