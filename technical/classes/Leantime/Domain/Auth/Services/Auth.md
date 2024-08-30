---
title: \Leantime\Domain\Auth\Services\Auth
footer: false
---

# Auth





* Full name: `\Leantime\Domain\Auth\Services\Auth`



## Methods

### __construct

__construct - getInstance of session and get sessionId and refers to login if post is set

```php
public Auth::__construct(\Leantime\Core\Configuration\Environment $config, \Illuminate\Session\SessionManager $session, \Leantime\Core\Language $language, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Domain\Auth\Repositories\Auth $authRepo, \Leantime\Domain\Users\Repositories\Users $userRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Configuration\Environment** |  |
| `session` | **\Illuminate\Session\SessionManager** |  |
| `language` | **\Leantime\Core\Language** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `authRepo` | **\Leantime\Domain\Auth\Repositories\Auth** |  |
| `userRepo` | **\Leantime\Domain\Users\Repositories\Users** |  |


**Return Value:**





---
### getRoleToCheck



```php
public static Auth::getRoleToCheck(bool $forceGlobalRoleCheck): string|bool
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `forceGlobalRoleCheck` | **bool** |  |


**Return Value:**

returns role as string or false on failure



---
### login

login - Validate POST-data with DB

```php
public Auth::login(string $username, string $password): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **string** |  |
| `password` | **string** |  |


**Return Value:**





---
### setUsersession



```php
public Auth::setUsersession(mixed $user, bool $isLdap = false): false|void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `user` | **mixed** |  |
| `isLdap` | **bool** |  |


**Return Value:**





---
### updateUserSessionDB



```php
public Auth::updateUserSessionDB(int $userId, string $sessionID): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `sessionID` | **string** |  |


**Return Value:**





---
### loggedIn

logged_in - Check if logged in and Update sessions

```php
public Auth::loggedIn(): bool
```









**Return Value:**





---
### isLoggedIn

Checks if a user is logged in.

```php
public static Auth::isLoggedIn(): bool
```



* This method is **static**.





**Return Value:**

Returns true if the user is logged in, false otherwise.



---
### logout

logout - destroy sessions and cookies

```php
public Auth::logout(): void
```









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
| `hash` | **string** | invite link hash |


**Return Value:**





---
### getUserByInviteLink

getUserByInviteLink - gets the user by invite link

```php
public Auth::getUserByInviteLink(string $hash): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hash` | **string** | invite link hash |


**Return Value:**





---
### generateLinkAndSendEmail

generateLinkAndSendEmail - generates an invitation link (hash) and sends email to user

```php
public Auth::generateLinkAndSendEmail(string $username): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **string** | new user to be invited (email) |


**Return Value:**

returns true on success, false on failure



---
### changePw



```php
public Auth::changePw(string $password, string $hash): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `password` | **string** |  |
| `hash` | **string** |  |


**Return Value:**





---
### userIsAtLeast



```php
public static Auth::userIsAtLeast(string $role, bool $forceGlobalRoleCheck = false): bool
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `role` | **string** |  |
| `forceGlobalRoleCheck` | **bool** |  |


**Return Value:**





---
### authOrRedirect



```php
public static Auth::authOrRedirect(array|string $role, bool $forceGlobalRoleCheck = false): bool
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `role` | **array|string** |  |
| `forceGlobalRoleCheck` | **bool** |  |


**Return Value:**





---
### userHasRole



```php
public static Auth::userHasRole(string|array $role, bool $forceGlobalRoleCheck = false): bool
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `role` | **string|array** |  |
| `forceGlobalRoleCheck` | **bool** |  |


**Return Value:**





---
### getRole



```php
public static Auth::getRole(): void
```



* This method is **static**.





**Return Value:**





---
### getUserClientId



```php
public static Auth::getUserClientId(): mixed
```



* This method is **static**.





**Return Value:**





---
### getUserId



```php
public static Auth::getUserId(): mixed
```



* This method is **static**.





**Return Value:**





---
### use2FA



```php
public Auth::use2FA(): mixed
```









**Return Value:**





---
### verify2FA



```php
public Auth::verify2FA(string $code): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `code` | **string** |  |


**Return Value:**





---
### get2FAVerified



```php
public Auth::get2FAVerified(): mixed
```









**Return Value:**





---
### set2FAVerified



```php
public Auth::set2FAVerified(): void
```









**Return Value:**





---
### logFailedLogin



```php
private Auth::logFailedLogin(string $user): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `user` | **string** |  |


**Return Value:**





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
