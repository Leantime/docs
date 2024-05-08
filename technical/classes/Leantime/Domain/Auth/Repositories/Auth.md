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
public Auth::invalidateSession(string $sessionId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sessionId` | **string** |  |


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
public Auth::getUserByLogin(string $username, string $password): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **string** |  |
| `password` | **string** |  |


**Return Value:**





---
### getUserByEmail



```php
public Auth::getUserByEmail(string $username): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **string** |  |


**Return Value:**





---
### updateUserSession

updateSession - Update the session time by sessionId

```php
public Auth::updateUserSession(int $userId, string $sessionid, string $time): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `sessionid` | **string** |  |
| `time` | **string** |  |


**Return Value:**





---
### validateResetLink

validateResetLink - validates that the password reset link belongs to a user account in the database

```php
public Auth::validateResetLink(string $hash): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hash` | **string** |  |


**Return Value:**





---
### getUserByInviteLink

getUserByInviteLink - gets an invited user by invite code

```php
public Auth::getUserByInviteLink(string $hash): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hash` | **string** |  |


**Return Value:**





---
### setPWResetLink



```php
public Auth::setPWResetLink(string $username, string $resetLink): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **string** |  |
| `resetLink` | **string** |  |


**Return Value:**





---
### changePW



```php
public Auth::changePW(string $password, string $hash): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `password` | **string** |  |
| `hash` | **string** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-08 using [phpDocumentor](http://www.phpdoc.org/)
