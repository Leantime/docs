---
title: \leantime\domain\services\auth
footer: false
---

# auth





* Full name: `\leantime\domain\services\auth`



## Methods

### __construct

__construct - getInstance of session and get sessionId and refers to login if post is set

```php
protected auth::__construct( $sessionid): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sessionid` | **** |  |


**Return Value:**





---
### getInstance



```php
public static auth::getInstance(mixed $sessionid = &quot;&quot;): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sessionid` | **mixed** |  |


**Return Value:**





---
### getRoleToCheck



```php
public static auth::getRoleToCheck(bool $forceGlobalRoleCheck): string|bool
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
public auth::login(mixed $username, mixed $password): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **mixed** |  |
| `password` | **mixed** |  |


**Return Value:**





---
### setUserSession



```php
public auth::setUserSession(mixed $user, mixed $isLdap = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `user` | **mixed** |  |
| `isLdap` | **mixed** |  |


**Return Value:**





---
### logged_in

logged_in - Check if logged in and Update sessions

```php
public auth::logged_in(): bool
```









**Return Value:**





---
### logout

logout - destroy sessions and cookies

```php
public auth::logout(): mixed
```









**Return Value:**





---
### validateResetLink

validateResetLink - validates that the password reset link belongs to a user account in the database

```php
public auth::validateResetLink(string $hash): bool
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
public auth::getUserByInviteLink(string $hash): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hash` | **string** | invite link hash |


**Return Value:**





---
### generateLinkAndSendEmail

generateLinkAndSendEmail - generates an invite link (hash) and sends email to user

```php
public auth::generateLinkAndSendEmail(string $username): bool
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
public auth::changePw(mixed $password, mixed $hash): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `password` | **mixed** |  |
| `hash` | **mixed** |  |


**Return Value:**





---
### userIsAtLeast



```php
public static auth::userIsAtLeast(string $role, mixed $forceGlobalRoleCheck = false): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `role` | **string** |  |
| `forceGlobalRoleCheck` | **mixed** |  |


**Return Value:**





---
### authOrRedirect



```php
public static auth::authOrRedirect(mixed $role, mixed $forceGlobalRoleCheck = false): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `role` | **mixed** |  |
| `forceGlobalRoleCheck` | **mixed** |  |


**Return Value:**





---
### userHasRole



```php
public static auth::userHasRole(string|array $role, mixed $forceGlobalRoleCheck = false): bool
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `role` | **string|array** |  |
| `forceGlobalRoleCheck` | **mixed** |  |


**Return Value:**





---
### getRole



```php
public static auth::getRole(): mixed
```



* This method is **static**.





**Return Value:**





---
### getUserClientId



```php
public static auth::getUserClientId(): mixed
```



* This method is **static**.





**Return Value:**





---
### getUserId



```php
public static auth::getUserId(): mixed
```



* This method is **static**.





**Return Value:**





---
### use2FA



```php
public auth::use2FA(): mixed
```









**Return Value:**





---
### verify2FA



```php
public auth::verify2FA(mixed $code): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `code` | **mixed** |  |


**Return Value:**





---
### get2FAVerified



```php
public auth::get2FAVerified(): mixed
```









**Return Value:**





---
### set2FAVerified



```php
public auth::set2FAVerified(): mixed
```









**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
private static eventhelpers::get_event_context(mixed $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **mixed** |  |


**Return Value:**





---
### set_class_context

Gets the class context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static eventhelpers::get_function_context(mixed $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
