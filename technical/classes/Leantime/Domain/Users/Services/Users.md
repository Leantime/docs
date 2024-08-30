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
public Users::getProfilePicture( $id): string[]|\SVG\SVG
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### editUser



```php
public Users::editUser( $values,  $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `id` | **** |  |


**Return Value:**





---
### getNumberOfUsers



```php
public Users::getNumberOfUsers(bool $activeOnly = false, bool $includeApi = true): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `activeOnly` | **bool** |  |
| `includeApi` | **bool** |  |


**Return Value:**





---
### getAll



```php
public Users::getAll(false $activeOnly = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `activeOnly` | **false** |  |


**Return Value:**





---
### getUser



```php
public Users::getUser( $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getUserByEmail



```php
public Users::getUserByEmail( $email, mixed $status = &quot;a&quot;): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `email` | **** |  |
| `status` | **mixed** |  |


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
### setProfilePicture



```php
public Users::setProfilePicture( $photo,  $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `photo` | **** |  |
| `id` | **** |  |


**Return Value:**





---
### updateUserSettings



```php
public Users::updateUserSettings( $category,  $setting,  $value): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `category` | **** |  |
| `setting` | **** |  |
| `value` | **** |  |


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

createUserInvite - generates a new invite token, creates the user in the db and sends the invitation email TODO: Should accept userModel

```php
public Users::createUserInvite(array $values): bool|int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | basic user values |


**Return Value:**

returns new user id on success, false on failure



---
### sendUserInvite



```php
public Users::sendUserInvite(string $inviteCode, string $user): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `inviteCode` | **string** |  |
| `user` | **string** |  |


**Return Value:**





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
public Users::usernameExist(string $username, int|string $notUserId = &#039;&#039;): bool
```

TODO: Should accept userModel






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **string** | username |
| `notUserId` | **int|string** | optional userId to skip. (used when changing email addresses to a new one, skips checking the old one) |


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
public Users::editOwn( $values,  $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `id` | **** |  |


**Return Value:**





---
### deleteUser

Delete the user with the specified id.

```php
public Users::deleteUser(int $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The id of the user to delete. |


**Return Value:**

True if the user was deleted successfully, false otherwise.



---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static DispatchesEvents::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static DispatchesEvents::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
protected static DispatchesEvents::get_event_context( $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **** |  |


**Return Value:**





---
### set_class_context

Gets the class Context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static DispatchesEvents::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static DispatchesEvents::get_function_context(?int $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **?int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
