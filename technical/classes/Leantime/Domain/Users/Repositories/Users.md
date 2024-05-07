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
public Users::getUserBySha( $hash): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hash` | **** |  |


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
public Users::getUserByEmail(string $email, string $status = &quot;a&quot;): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `email` | **string** |  |
| `status` | **string** |  |


**Return Value:**





---
### getNumberOfUsers



```php
public Users::getNumberOfUsers(mixed $activeOnly = false, mixed $includeApi = true): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `activeOnly` | **mixed** |  |
| `includeApi` | **mixed** |  |


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
public Users::getAll(bool $activeOnly = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `activeOnly` | **bool** |  |


**Return Value:**





---
### getAllBySource



```php
public Users::getAllBySource( $source): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `source` | **** |  |


**Return Value:**





---
### getAllClientUsers

getAll - get all user

```php
public Users::getAllClientUsers( $clientId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **** |  |


**Return Value:**





---
### isAdmin



```php
public Users::isAdmin( $userId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |


**Return Value:**





---
### editUser

editUSer - edit user

```php
public Users::editUser(array $values,  $id): bool
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
public Users::usernameExist( $username, string $userId = &#039;&#039;): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **** |  |
| `userId` | **string** |  |


**Return Value:**





---
### editOwn

editOwn - Edit own Userdates

```php
public Users::editOwn( $values,  $id): void
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
public Users::deleteUser( $id): void
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
public Users::setPicture(array $_FILE,  $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `_FILE` | **array** |  |
| `id` | **** |  |


**Return Value:**





---
### getProfilePicture



```php
public Users::getProfilePicture( $id): string[]|\SVG\SVG
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### patchUser



```php
public Users::patchUser( $id,  $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `params` | **** |  |


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
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
