---
title: \Leantime\Domain\Install\Repositories\Install
footer: false
---

# Install





* Full name: `\Leantime\Domain\Install\Repositories\Install`



## Methods

### __construct

__construct - get database connection

```php
public Install::__construct(\Leantime\Core\Environment $config, \Leantime\Core\AppSettings $settings): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Environment** |  |
| `settings` | **\Leantime\Core\AppSettings** |  |


**Return Value:**





---
### getDBObject

returns current database object

```php
public Install::getDBObject(): mixed
```









**Return Value:**





---
### checkIfInstalled

checkIfInstalled checks if zp user table exists (and assumes that leantime is installed)

```php
public Install::checkIfInstalled(): bool
```









**Return Value:**





---
### createDB



```php
public Install::createDB(mixed $dbName): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dbName` | **mixed** |  |


**Return Value:**





---
### setupDB

setupDB installs database

```php
public Install::setupDB(array $values, mixed $db = &#039;&#039;): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | Form values for admin user and company information |
| `db` | **mixed** |  |


**Return Value:**

| string



---
### updateDB

updateDB main entry point to update the db based on version number. Executes all missing db update scripts

```php
public Install::updateDB(): bool|array
```









**Return Value:**





---
### sqlPrep

sqlPrep - returns all the create table statements

```php
private Install::sqlPrep(): string
```









**Return Value:**





---
### update_sql_20004

update_sql_20004 - database update sql for V2.0.4
- Updates all tables and db to utf8mb4
- converts 255 index to be smaller

```php
private Install::update_sql_20004(): bool|array
```









**Return Value:**





---
### update_sql_20100



```php
private Install::update_sql_20100(): mixed
```









**Return Value:**





---
### update_sql_20101



```php
private Install::update_sql_20101(): mixed
```









**Return Value:**





---
### update_sql_20102



```php
private Install::update_sql_20102(): mixed
```









**Return Value:**





---
### update_sql_20103



```php
private Install::update_sql_20103(): mixed
```









**Return Value:**





---
### update_sql_20104



```php
private Install::update_sql_20104(): mixed
```









**Return Value:**





---
### update_sql_20105



```php
private Install::update_sql_20105(): mixed
```









**Return Value:**





---
### update_sql_20106



```php
private Install::update_sql_20106(): mixed
```









**Return Value:**





---
### update_sql_20107



```php
private Install::update_sql_20107(): mixed
```









**Return Value:**





---
### update_sql_20108



```php
private Install::update_sql_20108(): mixed
```









**Return Value:**





---
### update_sql_20109



```php
private Install::update_sql_20109(): mixed
```









**Return Value:**





---
### update_sql_20110



```php
private Install::update_sql_20110(): mixed
```









**Return Value:**





---
### update_sql_20111



```php
private Install::update_sql_20111(): bool|array
```









**Return Value:**





---
### update_sql_20112



```php
private Install::update_sql_20112(): bool|array
```









**Return Value:**





---
### update_sql_20113



```php
private Install::update_sql_20113(): bool|array
```









**Return Value:**





---
### update_sql_20114



```php
public Install::update_sql_20114(): bool|array
```









**Return Value:**





---
### update_sql_20115



```php
public Install::update_sql_20115(): bool|array
```









**Return Value:**





---
### update_sql_20116



```php
public Install::update_sql_20116(): bool|array
```









**Return Value:**





---
### update_sql_20117



```php
public Install::update_sql_20117(): bool|array
```









**Return Value:**





---
### update_sql_20118



```php
public Install::update_sql_20118(): bool|array
```









**Return Value:**





---
### update_sql_20120



```php
public Install::update_sql_20120(): bool|array
```









**Return Value:**





---
### update_sql_20121



```php
public Install::update_sql_20121(): bool|array
```









**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int $function = null): void
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
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int $function = null): mixed
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
private static Eventhelpers::get_event_context(mixed $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **mixed** |  |


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
private static Eventhelpers::get_function_context(mixed $functionInt = null): string
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
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
