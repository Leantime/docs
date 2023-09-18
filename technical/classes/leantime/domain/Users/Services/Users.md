---
title: \Leantime\Domain\Users\Services\Users
footer: false
---

# Users





* Full name: `\Leantime\Domain\Users\Services\Users`



## Methods

### __construct



```php
public Users::__construct(\Leantime\Domain\Users\Repositories\Users $userRepo, \Leantime\Core\Language $language, \Leantime\Domain\Projects\Repositories\Projects $projectRepository, \Leantime\Domain\Clients\Repositories\Clients $clientRepo, \Leantime\Domain\Auth\Services\Auth $authService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userRepo` | **\Leantime\Domain\Users\Repositories\Users** |  |
| `language` | **\Leantime\Core\Language** |  |
| `projectRepository` | **\Leantime\Domain\Projects\Repositories\Projects** |  |
| `clientRepo` | **\Leantime\Domain\Clients\Repositories\Clients** |  |
| `authService` | **\Leantime\Domain\Auth\Services\Auth** |  |


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
### editUser



```php
public Users::editUser(mixed $values, mixed $id): mixed
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
public Users::getNumberOfUsers(): mixed
```









**Return Value:**





---
### getAll



```php
public Users::getAll(mixed $activeOnly = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `activeOnly` | **mixed** |  |


**Return Value:**





---
### getUser



```php
public Users::getUser(mixed $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getUserByEmail



```php
public Users::getUserByEmail(mixed $email): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `email` | **mixed** |  |


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
### setProfilePicture



```php
public Users::setProfilePicture(mixed $photo, mixed $id): mixed
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
public Users::updateUserSettings(mixed $category, mixed $setting, mixed $value): mixed
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
public Users::checkPasswordStrength(string $password): bool
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
public Users::createUserInvite(array $values): bool|int
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
public Users::addUser(array $values): bool|int
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
public Users::usernameExist(string $username, int $notUserId = &#039;&#039;): bool
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
public Users::getUsersWithProjectAccess(int $currentUser, int $projectId): array
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
### editOwn



```php
public Users::editOwn(mixed $values, mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |
| `id` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
