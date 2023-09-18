---
title: \Leantime\Domain\Ldap\Services\Ldap
footer: false
---

# Ldap





* Full name: `\Leantime\Domain\Ldap\Services\Ldap`



## Methods

### __construct



```php
public Ldap::__construct(mixed $differentConfig = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `differentConfig` | **mixed** |  |


**Return Value:**





---
### connect



```php
public Ldap::connect(): mixed
```









**Return Value:**





---
### bind



```php
public Ldap::bind(mixed $username = &#039;&#039;, mixed $password = &#039;&#039;): mixed
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
public Ldap::getEmail(mixed $username): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **mixed** |  |


**Return Value:**





---
### getSingleUser



```php
public Ldap::getSingleUser(mixed $username): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **mixed** |  |


**Return Value:**





---
### extractLdapFromUsername



```php
public Ldap::extractLdapFromUsername(mixed $username): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **mixed** |  |


**Return Value:**





---
### getAllMembers



```php
public Ldap::getAllMembers(): mixed
```









**Return Value:**





---
### upsertUsers



```php
public Ldap::upsertUsers(mixed $ldapUsers): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ldapUsers` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
