---
title: \leantime\domain\repositories\users
footer: false
---

# users





* Full name: `\leantime\domain\repositories\users`



## Methods

### __construct

__construct - neu db connection

```php
public users::__construct(): mixed
```









**Return Value:**





---
### getUser

getUser - get on user from db

```php
public users::getUser( $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getUserBySha

getUser - get on user from db

```php
public users::getUserBySha(mixed $hash): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hash` | **mixed** |  |


**Return Value:**





---
### getLastLogin

getLastLogin - get the date of the last login of any user

```php
public users::getLastLogin(): string|null
```









**Return Value:**

returns datetime string with last login or null if nothing could be found



---
### getUserByEmail

getUserByEmail - get on user from db

```php
public users::getUserByEmail(mixed $email): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `email` | **mixed** |  |


**Return Value:**





---
### getNumberOfUsers



```php
public users::getNumberOfUsers(): mixed
```









**Return Value:**





---
### getEmployees

getEmployees - get all employees

```php
public users::getEmployees(): array
```









**Return Value:**





---
### getAll

getAll - get all user

```php
public users::getAll(): array
```









**Return Value:**





---
### getAllBySource



```php
public users::getAllBySource(mixed $source): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `source` | **mixed** |  |


**Return Value:**





---
### getAllClientUsers

getAll - get all user

```php
public users::getAllClientUsers(mixed $clientId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **mixed** |  |


**Return Value:**





---
### isAdmin



```php
public users::isAdmin(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### editUser

editUSer - edit user

```php
public users::editUser(array $values,  $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `id` | **** |  |


**Return Value:**





---
### usernameExist

usernameExist - Check if a username is already in db

```php
public users::usernameExist( $username,  $userId = &#039;&#039;): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **** |  |
| `userId` | **** |  |


**Return Value:**





---
### editOwn

editOwn - Edit own Userdates

```php
public users::editOwn( $values,  $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `id` | **** |  |


**Return Value:**





---
### addUser

addUser - add User to db

```php
public users::addUser(array $values): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Return Value:**





---
### deleteUser

deleteUser - delete user from db

```php
public users::deleteUser( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### setPicture

setPicture - set the profile picture for an individual

```php
public users::setPicture(mixed $_FILE, mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `_FILE` | **mixed** |  |
| `id` | **mixed** |  |


**Return Value:**





---
### getProfilePicture



```php
public users::getProfilePicture(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### patchUser



```php
public users::patchUser(mixed $id, mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `params` | **mixed** |  |


**Return Value:**





---
### getUserIdByName

getUserIdByName - Get Author/User Id by first- and lastname

```php
public users::getUserIdByName(string $firstname, string $lastname): int|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `firstname` | **string** |  |
| `lastname` | **string** | Lastname |


**Return Value:**

Identifier of user or false, if not found



---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
