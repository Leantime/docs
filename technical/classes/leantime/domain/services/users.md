---
title: \leantime\domain\services\users
footer: false
---

# users





* Full name: `\leantime\domain\services\users`



## Methods

### __construct



```php
public users::__construct(): mixed
```









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
### editUser



```php
public users::editUser(mixed $values, mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |
| `id` | **mixed** |  |


**Return Value:**





---
### getNumberOfUsers



```php
public users::getNumberOfUsers(): mixed
```









**Return Value:**





---
### getAll



```php
public users::getAll(): mixed
```









**Return Value:**





---
### getUser



```php
public users::getUser(mixed $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getUserByEmail



```php
public users::getUserByEmail(mixed $email): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `email` | **mixed** |  |


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
### setProfilePicture



```php
public users::setProfilePicture(mixed $photo, mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `photo` | **mixed** |  |
| `id` | **mixed** |  |


**Return Value:**





---
### updateUserSettings



```php
public users::updateUserSettings(mixed $category, mixed $setting, mixed $value): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `category` | **mixed** |  |
| `setting` | **mixed** |  |
| `value` | **mixed** |  |


**Return Value:**





---
### checkPasswordStrength

checkPasswordStrength - Checks password strength for minimum requirements
Current requirements are:
Password must be at least 8 characters in length.

```php
public users::checkPasswordStrength(string $password): bool
```

Password must include at least one upper case letter.
Password must include at least one number.
Password must include at least one special character.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `password` | **string** | The string to be checked |


**Return Value:**

returns true if password meets requirements



---
### createUserInvite

createUserInvite - generates a new invite token, creates the user in the db and sends the invitation email

```php
public users::createUserInvite(array $values): bool|int
```

TODO: Should accept userModel






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | basic user values |


**Return Value:**

returns new user id on success, false on failure



---
### addUser

addUser - simple service wrapper to create a new user

```php
public users::addUser(array $values): bool|int
```

TODO: Should accept userModel






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | basic user values |


**Return Value:**

returns new user id on success, false on failure



---
### usernameExist

usernameExist - Checks if a given username (email) is already in the db

```php
public users::usernameExist(string $username, int $notUserId = &#039;&#039;): bool
```

TODO: Should accept userModel






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **string** | username |
| `notUserId` | **int** | optional userId to skip. (used when changing email addresses to a new one, skips checking the old one) |


**Return Value:**

returns true or false



---
### getUsersWithProjectAccess

getUsersWithProjectAccess - gets all users who can access a project

```php
public users::getUsersWithProjectAccess(int $currentUser, int $projectId): array
```

TODO: Should return usermodel






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `currentUser` | **int** | user who is trying to access the project |
| `projectId` | **int** | project id |


**Return Value:**

returns array of users



---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
