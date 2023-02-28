---
title: \leantime\domain\repositories\auth
footer: false
---

# auth





* Full name: `\leantime\domain\repositories\auth`



## Methods

### __construct



```php
public auth::__construct(): mixed
```









**Return Value:**





---
### invalidateSession

logout - destroy sessions and cookies

```php
public auth::invalidateSession(mixed $sessionId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sessionId` | **mixed** |  |


**Return Value:**





---
### invalidateExpiredUserSessions

checkSessions - check all sessions in the database and unset them if necessary

```php
private auth::invalidateExpiredUserSessions(): void
```









**Return Value:**





---
### getUserByLogin

getUserByLogin - Check login data and returns user if correct

```php
public auth::getUserByLogin( $username,  $password): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **** |  |
| `password` | **** |  |


**Return Value:**





---
### updateUserSession

updateSession - Update the session time by sessionId

```php
public auth::updateUserSession(mixed $userId,  $sessionid,  $time): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `sessionid` | **** |  |
| `time` | **** |  |


**Return Value:**





---
### validateResetLink

validateResetLink - validates that the password reset link belongs to a user account in the database

```php
public auth::validateResetLink(mixed $hash): bool
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
public auth::getUserByInviteLink(mixed $hash): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hash` | **mixed** |  |


**Return Value:**





---
### setPWResetLink



```php
public auth::setPWResetLink(mixed $username, mixed $resetLink): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **mixed** |  |
| `resetLink` | **mixed** |  |


**Return Value:**





---
### changePW



```php
public auth::changePW(mixed $password, mixed $hash): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `password` | **mixed** |  |
| `hash` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
