---
title: \Leantime\Domain\Users\Services\Users
footer: false
---

# Users




`leantime.rpc.Users.Users.`


## Available Methods
### `leantime.rpc.Users.Users.getProfilePicture`



```json
{
    "method": "leantime.rpc.Users.Users.getProfilePicture",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string[]|\SVG\SVG
}
```



---
### `leantime.rpc.Users.Users.editUser`



```json
{
    "method": "leantime.rpc.Users.Users.editUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": ,
        "id": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `id` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Users.Users.getNumberOfUsers`



```json
{
    "method": "leantime.rpc.Users.Users.getNumberOfUsers",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "activeOnly": bool,
        "includeApi": bool,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `activeOnly` | **bool** |  |
| `includeApi` | **bool** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Users.Users.getAll`



```json
{
    "method": "leantime.rpc.Users.Users.getAll",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "activeOnly": false,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `activeOnly` | **false** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Users.Users.getUser`



```json
{
    "method": "leantime.rpc.Users.Users.getUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Users.Users.getUserByEmail`



```json
{
    "method": "leantime.rpc.Users.Users.getUserByEmail",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "email": ,
        "status": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `email` | **** |  |
| `status` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Users.Users.getAllBySource`



```json
{
    "method": "leantime.rpc.Users.Users.getAllBySource",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "source": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `source` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Users.Users.setProfilePicture`



```json
{
    "method": "leantime.rpc.Users.Users.setProfilePicture",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "photo": ,
        "id": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `photo` | **** |  |
| `id` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Users.Users.updateUserSettings`



```json
{
    "method": "leantime.rpc.Users.Users.updateUserSettings",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "category": ,
        "setting": ,
        "value": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `category` | **** |  |
| `setting` | **** |  |
| `value` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Users.Users.checkPasswordStrength`

checkPasswordStrength - Checks password strength for minimum requirements
Current requirements are:
Password must be at least 8 characters in length.

```json
{
    "method": "leantime.rpc.Users.Users.checkPasswordStrength",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "password": string,
    }
}
```


Password must include at least one upper case letter.
Password must include at least one number.
Password must include at least one special character.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `password` | **string** | The string to be checked |


**Returns:**
returns true if password meets requirements
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Users.Users.createUserInvite`

createUserInvite - generates a new invite token, creates the user in the db and sends the invitation email TODO: Should accept userModel

```json
{
    "method": "leantime.rpc.Users.Users.createUserInvite",
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
| `values` | **array** | basic user values |


**Returns:**
returns new user id on success, false on failure
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|int
}
```



---
### `leantime.rpc.Users.Users.addUser`

addUser - simple service wrapper to create a new user

```json
{
    "method": "leantime.rpc.Users.Users.addUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```


TODO: Should accept userModel






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | basic user values |


**Returns:**
returns new user id on success, false on failure
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|int
}
```



---
### `leantime.rpc.Users.Users.usernameExist`

usernameExist - Checks if a given username (email) is already in the db

```json
{
    "method": "leantime.rpc.Users.Users.usernameExist",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "username": string,
        "notUserId": int|string,
    }
}
```


TODO: Should accept userModel






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **string** | username |
| `notUserId` | **int|string** | optional userId to skip. (used when changing email addresses to a new one, skips checking the old one) |


**Returns:**
returns true or false
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Users.Users.getUsersWithProjectAccess`

getUsersWithProjectAccess - gets all users who can access a project

```json
{
    "method": "leantime.rpc.Users.Users.getUsersWithProjectAccess",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "currentUser": int,
        "projectId": int,
    }
}
```


TODO: Should return usermodel






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `currentUser` | **int** | user who is trying to access the project |
| `projectId` | **int** | project id |


**Returns:**
returns array of users
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Users.Users.editOwn`



```json
{
    "method": "leantime.rpc.Users.Users.editOwn",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": ,
        "id": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `id` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Users.Users.deleteUser`

Delete the user with the specified id.

```json
{
    "method": "leantime.rpc.Users.Users.deleteUser",
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
| `id` | **int** | The id of the user to delete. |


**Returns:**
True if the user was deleted successfully, false otherwise.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---

