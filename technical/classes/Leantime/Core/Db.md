---
title: \Leantime\Core\Db
footer: false
---

# Db

Database Class - Very simple abstraction layer for pdo connection



* Full name: `\Leantime\Core\Db`



## Methods

### __construct

__construct - connect to database and select db

```php
public Db::__construct(\Leantime\Core\Environment $config): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Environment** |  |


**Return Value:**





---
### arrayToPdoBindingString

This function will generate a pdo binding string (":editors0,:editors1,:editors2,:editors3") to be used in a PDO
query that uses the IN() clause, to assist in proper PDO array bindings to avoid SQL injection.

```php
public static Db::arrayToPdoBindingString(string $name, int $count): string
```

A counted for loop is user rather than foreach with a key to avoid issues if the array passed has any
arbitrary keys

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **string** |  |
| `count` | **int** |  |


**Return Value:**





---
### sanitizeToColumnString

Sanitizes a string to only contain letters, numbers and underscore.

```php
public static Db::sanitizeToColumnString(string $string): string
```

Used for patch statements with variable column keys values

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `string` | **string** |  |


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
private static Eventhelpers::get_event_context( $function): string
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
private static Eventhelpers::get_function_context(null $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **null** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
