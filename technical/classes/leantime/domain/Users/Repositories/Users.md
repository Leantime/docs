---
title: \Leantime\Domain\Users\Repositories\Users
footer: false
---

# Users





* Full name: `\Leantime\Domain\Users\Repositories\Users`



## Methods

### __construct

__construct - neu db connection

```php
public Users::__construct(\Leantime\Core\Environment $config, \Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Environment** |  |
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getUser

getUser - get on user from db

```php
public Users::getUser( $id): array|bool
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
public Users::getUserBySha(mixed $hash): array
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
public Users::getLastLogin(): string|null
```









**Return Value:**

returns datetime string with last login or null if nothing could be found



---
### getUserByEmail

getUserByEmail - get on user from db

```php
public Users::getUserByEmail(mixed $email): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `email` | **mixed** |  |


**Return Value:**





---
### getNumberOfUsers



```php
public Users::getNumberOfUsers(): int
```









**Return Value:**





---
### getEmployees

getEmployees - get all employees

```php
public Users::getEmployees(): array
```









**Return Value:**





---
### getAll

getAll - get all user

```php
public Users::getAll(mixed $activeOnly = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `activeOnly` | **mixed** |  |


**Return Value:**





---
### getAllBySource



```php
public Users::getAllBySource(mixed $source): mixed
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
public Users::getAllClientUsers(mixed $clientId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **mixed** |  |


**Return Value:**





---
### isAdmin



```php
public Users::isAdmin(mixed $userId): bool
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
public Users::editUser(array $values,  $id): mixed
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
public Users::usernameExist( $username,  $userId = &#039;&#039;): bool
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
public Users::editOwn( $values,  $id): mixed
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
public Users::addUser(array $values): false|string
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
public Users::deleteUser( $id): mixed
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
public Users::setPicture(mixed $_FILE, mixed $id): mixed
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
public Users::getProfilePicture(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### patchUser



```php
public Users::patchUser(mixed $id, mixed $params): mixed
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
public Users::getUserIdByName(string $firstname, string $lastname): int|bool
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
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
