---
title: \Leantime\Domain\Files\Services\Files
footer: false
---

# Files



`leantime.rpc.Files.Files.`


## Available Methods
### `leantime.rpc.Files.Files.getFilesByModule`

Lists files for a module/entity, fail-closed against the entity's owning project.

```json
{
    "method": "leantime.rpc.Files.Files.getFilesByModule",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "module": string,
        "entityId": mixed,
        "userId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** |  |
| `entityId` | **mixed** |  |
| `userId` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|array
}
```



---
### `leantime.rpc.Files.Files.upload`

Stores an uploaded file against a module/moduleId after authorizing the target via
userCanUploadToModule() (empty or unknown modules are denied).

```json
{
    "method": "leantime.rpc.Files.Files.upload",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "file": mixed,
        "module": mixed,
        "moduleId": mixed,
        "entity": mixed,
        "disk": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **mixed** |  |
| `module` | **mixed** |  |
| `moduleId` | **mixed** |  |
| `entity` | **mixed** |  |
| `disk` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|string|false
}
```



---
### `leantime.rpc.Files.Files.deleteFile`

Delete a file. The uploader may always delete their own file; otherwise the caller needs
files.delete (editor+) IN THE FILE'S OWN PROJECT.

```json
{
    "method": "leantime.rpc.Files.Files.deleteFile",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "fileId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fileId` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Files.Files.getImageExtensions`

Returns the list of image file extensions treated as previewable images.

```json
{
    "method": "leantime.rpc.Files.Files.getImageExtensions",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**
The whitelisted image extensions.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,string>
}
```



---
### `leantime.rpc.Files.Files.getFileForUser`

Resolves a file by its encoded name, authorizes the CURRENT (session) user, and returns
the file response.

**Limit:** Over the API this method doesn't return the file or image. The result is an empty or internal object, and a missing file comes back as a result, not an error.

```json
{
    "method": "leantime.rpc.Files.Files.getFileForUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "encName": string,
        "userId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `encName` | **string** | The encoded (hashed) filename without extension. |
| `userId` | **int** | Retained for signature/RPC compatibility; not used for authorization. |


**Returns:**
The file content response, 403 if unauthorized, or 404 if not found.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \Symfony\Component\HttpFoundation\Response
}
```



---

