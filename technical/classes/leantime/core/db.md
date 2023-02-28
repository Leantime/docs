---
title: \leantime\core\db
footer: false
---

# db





* Full name: `\leantime\core\db`



## Methods

### __construct

__construct - connect to database and select db

```php
private db::__construct(): object
```









**Return Value:**





---
### getInstance



```php
public static db::getInstance(): mixed
```



* This method is **static**.





**Return Value:**





---
### arrayToPdoBindingString

This function will generate a pdo binding string (":editors0,:editors1,:editors2,:editors3") to be used in a PDO
query that uses the IN() clause, to assist in proper PDO array bindings to avoid SQL injection.

```php
public static db::arrayToPdoBindingString( $name,  $count): string
```

A counted for loop is user rather than foreach with a key to avoid issues if the array passed has any
arbitrary keys

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **** | string |
| `count` | **** | int |


**Return Value:**





---
### sanitizeToColumnString

Sanitizes a string to only contain letters, numbers and underscore.

```php
public static db::sanitizeToColumnString(mixed $string): string
```

Used for patch statements with variable column keys values

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `string` | **mixed** |  |


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
