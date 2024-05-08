---
title: \Leantime\Domain\Api\Services\Api
footer: false
---

# Api





* Full name: `\Leantime\Domain\Api\Services\Api`



## Methods

### __construct



```php
public Api::__construct(\Leantime\Domain\Api\Repositories\Api $apiRepository, \Leantime\Domain\Users\Repositories\Users $userRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `apiRepository` | **\Leantime\Domain\Api\Repositories\Api** |  |
| `userRepo` | **\Leantime\Domain\Users\Repositories\Users** |  |


**Return Value:**





---
### getAPIKeyUser



```php
public Api::getAPIKeyUser(string $apiKey): bool|array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `apiKey` | **string** |  |


**Return Value:**





---
### createAPIKey

createAPIKey - simple service wrapper to create a new user

```php
public Api::createAPIKey(array $values): bool|array
```

TODO: Should accept userModel






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | basic user values |


**Return Value:**

returns new user id on success, false on failure



---
### getAPIKeys

getAPIKeys - gets api keys (users) from user table

```php
public Api::getAPIKeys(): array|false
```









**Return Value:**





---
### randomStr

Generate a random string, using a cryptographically secure
pseudorandom number generator (random_int)

```php
public Api::randomStr(int $length = 64, string $keyspace = &#039;0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&#039;): string
```

This function uses type hints now (PHP 7+ only), but it was originally
written for PHP 5 as well.

For PHP 7, random_int is a PHP core function
For PHP 5.x, depends on https://github.com/paragonie/random_compat






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `length` | **int** | How many characters do we want? |
| `keyspace` | **string** | A string of all possible characters to select from |


**Return Value:**





---
### jsonResponse



```php
public Api::jsonResponse(int $id, array|null $result): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |
| `result` | **array|null** |  |


**Return Value:**




**See Also:**

*  - ../Controllers/Tickets.php

---
### getCaseCorrectPathFromManifest

Check the manifest for the asset and serve if found.

```php
public Api::getCaseCorrectPathFromManifest(string $filepath): string|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filepath` | **string** |  |


**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
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
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
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
protected static Eventhelpers::get_event_context( $function): string
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
private static Eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static Eventhelpers::get_function_context(?int $functionInt = null): string
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
> Automatically generated from source code comments on 2024-05-08 using [phpDocumentor](http://www.phpdoc.org/)
