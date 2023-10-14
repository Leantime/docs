---
title: \Leantime\Domain\Auth\Repositories\Auth
footer: false
---

# Auth





* Full name: `\Leantime\Domain\Auth\Repositories\Auth`



## Methods

### __construct



```php
public Auth::__construct(\Leantime\Core\Db $db, \Leantime\Core\Environment $config, \Leantime\Domain\Users\Repositories\Users $userRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |
| `config` | **\Leantime\Core\Environment** |  |
| `userRepo` | **\Leantime\Domain\Users\Repositories\Users** |  |


**Return Value:**





---
### invalidateSession

logout - destroy sessions and cookies

```php
public Auth::invalidateSession( $sessionId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sessionId` | **** |  |


**Return Value:**





---
### invalidateExpiredUserSessions

checkSessions - check all sessions in the database and unset them if necessary

```php
private Auth::invalidateExpiredUserSessions(): bool
```









**Return Value:**





---
### getUserByLogin

getUserByLogin - Check login data and returns user if correct

```php
public Auth::getUserByLogin( $username,  $password): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **** |  |
| `password` | **** |  |


**Return Value:**





---
### getUserByEmail



```php
public Auth::getUserByEmail( $username): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **** |  |


**Return Value:**





---
### updateUserSession

updateSession - Update the session time by sessionId

```php
public Auth::updateUserSession( $userId,  $sessionid,  $time): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `sessionid` | **** |  |
| `time` | **** |  |


**Return Value:**





---
### validateResetLink

validateResetLink - validates that the password reset link belongs to a user account in the database

```php
public Auth::validateResetLink(mixed $hash): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hash` | **mixed** |  |


**Return Value:**





---
### getUserByInviteLink

getUserByInviteLink - gets an invited user by invite code

```php
public Auth::getUserByInviteLink(mixed $hash): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hash` | **mixed** |  |


**Return Value:**





---
### setPWResetLink



```php
public Auth::setPWResetLink( $username,  $resetLink): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **** |  |
| `resetLink` | **** |  |


**Return Value:**





---
### changePW



```php
public Auth::changePW( $password,  $hash): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `password` | **** |  |
| `hash` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
