---
title: \leantime\domain\services\ldap
footer: false
---

# ldap





* Full name: `\leantime\domain\services\ldap`



## Methods

### __construct



```php
public ldap::__construct(mixed $differentConfig = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `differentConfig` | **mixed** |  |


**Return Value:**





---
### connect



```php
public ldap::connect(): mixed
```









**Return Value:**





---
### bind



```php
public ldap::bind(mixed $username = &#039;&#039;, mixed $password = &#039;&#039;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **mixed** |  |
| `password` | **mixed** |  |


**Return Value:**





---
### getEmail



```php
public ldap::getEmail(mixed $username): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **mixed** |  |


**Return Value:**





---
### getSingleUser



```php
public ldap::getSingleUser(mixed $username): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **mixed** |  |


**Return Value:**





---
### extractLdapFromUsername



```php
public ldap::extractLdapFromUsername(mixed $username): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **mixed** |  |


**Return Value:**





---
### getAllMembers



```php
public ldap::getAllMembers(): mixed
```









**Return Value:**





---
### upsertUsers



```php
public ldap::upsertUsers(mixed $ldapUsers): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ldapUsers` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
