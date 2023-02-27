---
title: \leantime\domain\repositories\install
footer: false
---

# install





* Full name: `\leantime\domain\repositories\install`



## Methods

### __construct

__construct - get database connection

```php
public install::__construct(): mixed
```









**Return Value:**





---
### checkIfInstalled

checkIfInstalled checks if zp user table exists (and assumes that leantime is installed)

```php
public install::checkIfInstalled(): bool
```









**Return Value:**





---
### setupDB

setupDB installs database

```php
public install::setupDB(array $values): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | Form values for admin user and company information |


**Return Value:**

| string



---
### updateDB

updateDB main entry point to update the db based on version number. Executes all missing db update scripts

```php
public install::updateDB(): bool|array
```









**Return Value:**





---
### sqlPrep

sqlPrep - returns all the create table statements

```php
private install::sqlPrep(): string
```









**Return Value:**





---
### update_sql_20004

update_sql_20004 - database update sql for V2.0.4
- Updates all tables and db to utf8mb4
- converts 255 index to be smaller

```php
private install::update_sql_20004(): bool|array
```









**Return Value:**





---
### update_sql_20100



```php
private install::update_sql_20100(): mixed
```









**Return Value:**





---
### update_sql_20101



```php
private install::update_sql_20101(): mixed
```









**Return Value:**





---
### update_sql_20102



```php
private install::update_sql_20102(): mixed
```









**Return Value:**





---
### update_sql_20103



```php
private install::update_sql_20103(): mixed
```









**Return Value:**





---
### update_sql_20104



```php
private install::update_sql_20104(): mixed
```









**Return Value:**





---
### update_sql_20105



```php
private install::update_sql_20105(): mixed
```









**Return Value:**





---
### update_sql_20106



```php
private install::update_sql_20106(): mixed
```









**Return Value:**





---
### update_sql_20107



```php
private install::update_sql_20107(): mixed
```









**Return Value:**





---
### update_sql_20108



```php
private install::update_sql_20108(): mixed
```









**Return Value:**





---
### update_sql_20109



```php
private install::update_sql_20109(): mixed
```









**Return Value:**





---
### update_sql_20110



```php
private install::update_sql_20110(): mixed
```









**Return Value:**





---
### update_sql_20111



```php
private install::update_sql_20111(): bool|array
```









**Return Value:**





---
### update_sql_20112



```php
private install::update_sql_20112(): bool|array
```









**Return Value:**





---
### update_sql_20113



```php
private install::update_sql_20113(): bool|array
```









**Return Value:**





---
### update_sql_20114



```php
public install::update_sql_20114(): bool|array
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
