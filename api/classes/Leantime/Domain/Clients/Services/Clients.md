---
title: \Leantime\Domain\Clients\Services\Clients
footer: false
---

# Clients

Client service - Business logic for client management.

`leantime.rpc.Clients.Clients.`


## Available Methods
### `leantime.rpc.Clients.Clients.getAll`

Gets all clients.

```json
{
    "method": "leantime.rpc.Clients.Clients.getAll",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "searchparams": array|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchparams` | **array|null** | Optional search parameters |


**Returns:**
List of all clients
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Clients.Clients.patch`

Patches the client by key.

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
| `params` | **array** | Key=&gt;value array where key represents the object field name and value the value |


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
### `leantime.rpc.Clients.Clients.editClient`

Updates an existing client.

```json
{
    "method": "leantime.rpc.Clients.Clients.editClient",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | Client data including &#039;id&#039; key |


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

Creates a new client.

```json
{
    "method": "leantime.rpc.Clients.Clients.create",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | Client data to create |


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

Deletes a client and its projects.

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
| `id` | **int** | Id of the client to be deleted |


**Returns:**
Returns true on success, false when the client has to-dos or a project could not be deleted
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Clients.Clients.get`

Gets 1 specific client by id.

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
| `id` | **int** | Id of the client to be retrieved |


**Returns:**
Returns client data or false if not found
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Clients.Clients.isClient`

Checks if a client with the same name and street already exists.

```json
{
    "method": "leantime.rpc.Clients.Clients.isClient",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | Client data with &#039;name&#039; and &#039;street&#039; keys |


**Returns:**
Returns true if client exists
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Clients.Clients.hasTickets`

Checks if a client has any tickets via its projects.

```json
{
    "method": "leantime.rpc.Clients.Clients.hasTickets",
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
| `id` | **int** | Client id |


**Returns:**
Returns true if client has tickets
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Clients.Clients.getClientsUsers`

Gets all users assigned to a client.

```json
{
    "method": "leantime.rpc.Clients.Clients.getClientsUsers",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "clientId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **int** | Client id |


**Returns:**
Returns list of users or false
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Clients.Clients.getClientProjects`

Gets projects belonging to a client.

```json
{
    "method": "leantime.rpc.Clients.Clients.getClientProjects",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "clientId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **int** | Client id |


**Returns:**
List of projects for this client
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Clients.Clients.createClient`

Creates a new client after validating it and checking for duplicates.

```json
{
    "method": "leantime.rpc.Clients.Clients.createClient",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | Client data to create (requires a non-empty &#039;name&#039;) |


**Returns:**
Id of the newly created client
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Clients.Clients.updateClient`

Updates an existing client after validating the name is present.

```json
{
    "method": "leantime.rpc.Clients.Clients.updateClient",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | Client data including &#039;id&#039; key (requires a non-empty &#039;name&#039;) |


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
### `leantime.rpc.Clients.Clients.removeUser`

Removes a user from a client by clearing the user's client assignment.

```json
{
    "method": "leantime.rpc.Clients.Clients.removeUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "clientId": int,
        "userId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **int** | Client the user should be removed from |
| `userId` | **int** | User to remove from the client |


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
### `leantime.rpc.Clients.Clients.getClientPageData`

Assembles the template data needed to render the client detail page.

```json
{
    "method": "leantime.rpc.Clients.Clients.getClientPageData",
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
| `id` | **int** | Client id |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{userClients: array|false, comments: array|false, imgExtensions: array<int,string>, clientProjects: array, files: array|false}
}
```



---

