---
title: \Leantime\Domain\Ldap\Services\Ldap
footer: false
---

# Ldap





* Full name: `\Leantime\Domain\Ldap\Services\Ldap`



## Methods

### __construct



```php
public Ldap::__construct(bool|\Leantime\Core\Configuration\Environment $differentConfig = false): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `differentConfig` | **bool|\Leantime\Core\Configuration\Environment** |  |


**Return Value:**





---
### connect



```php
public Ldap::connect(): bool|void
```









**Return Value:**





---
### bind



```php
public Ldap::bind(string $username = &#039;&#039;, string $password = &#039;&#039;): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **string** |  |
| `password` | **string** |  |


**Return Value:**





---
### getEmail



```php
public Ldap::getEmail( $username): mixed|string|void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **** |  |


**Return Value:**





---
### getSingleUser



```php
public Ldap::getSingleUser( $username): array|false|void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **** |  |


**Return Value:**





---
### extractLdapFromUsername



```php
public Ldap::extractLdapFromUsername( $username): mixed|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **** |  |


**Return Value:**





---
### getAllMembers



```php
public Ldap::getAllMembers(): array|false|void
```









**Return Value:**





---
### upsertUsers



```php
public Ldap::upsertUsers( $ldapUsers): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ldapUsers` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
