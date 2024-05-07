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
public Install::getDBObject(): \PDO|null
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
public Install::createDB( $dbName): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dbName` | **** |  |


**Return Value:**





---
### setupDB

setupDB installs database

```php
public Install::setupDB(array $values, string $db = &#039;&#039;): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | Form values for admin user and company information |
| `db` | **string** |  |


**Return Value:**





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
private Install::update_sql_20100(): bool|array
```









**Return Value:**





---
### update_sql_20101



```php
private Install::update_sql_20101(): bool|array
```









**Return Value:**





---
### update_sql_20102



```php
private Install::update_sql_20102(): bool|array
```









**Return Value:**





---
### update_sql_20103



```php
private Install::update_sql_20103(): bool|array
```









**Return Value:**





---
### update_sql_20104



```php
private Install::update_sql_20104(): bool|array
```









**Return Value:**





---
### update_sql_20105



```php
private Install::update_sql_20105(): bool|array
```









**Return Value:**





---
### update_sql_20106



```php
private Install::update_sql_20106(): bool|array
```









**Return Value:**





---
### update_sql_20107



```php
private Install::update_sql_20107(): bool|array
```









**Return Value:**





---
### update_sql_20108



```php
private Install::update_sql_20108(): bool|array
```









**Return Value:**





---
### update_sql_20109



```php
private Install::update_sql_20109(): bool|array
```









**Return Value:**





---
### update_sql_20110



```php
private Install::update_sql_20110(): bool|array
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
### update_sql_20122



```php
public Install::update_sql_20122(): bool|array
```









**Return Value:**





---
### update_sql_20401



```php
public Install::update_sql_20401(): bool|array
```









**Return Value:**





---
### update_sql_20402



```php
public Install::update_sql_20402(): bool|array
```









**Return Value:**





---
### update_sql_20405

Install script did not include medium text updates. Run again

```php
public Install::update_sql_20405(): bool|array
```









**Return Value:**





---
### update_sql_20406

Install script did not include medium text updates. Run again

```php
public Install::update_sql_20406(): bool|array
```









**Return Value:**





---
### update_sql_20407



```php
public Install::update_sql_20407(): bool|array
```









**Return Value:**





---
### update_sql_30002



```php
public Install::update_sql_30002(): bool|array
```









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
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
