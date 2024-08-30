---
title: \Leantime\Core\Configuration\Environment
footer: false
---

# Environment

environment - class To handle environment variables


`\Leantime\Core\Configuration\Environment`

* This class implements: \ArrayAccess, \Illuminate\Contracts\Config\Repository



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Core\Configuration\Environment::LEGACY_MAPPINGS`|array|[&#039;printLogoUrl&#039; =&gt; &#039;LEAN_PRINT_LOGO_URL&#039;, &#039;primarycolor&#039; =&gt; &#039;LEAN_PRIMARY_COLOR&#039;, &#039;secondarycolor&#039; =&gt; &#039;LEAN_SECONDARY_COLOR&#039;, &#039;email&#039; =&gt; &#039;LEAN_EMAIL_RETURN&#039;, &#039;useSMTP&#039; =&gt; &#039;LEAN_EMAIL_USE_SMTP&#039;, &#039;smtpHosts&#039; =&gt; &#039;LEAN_EMAIL_SMTP_HOSTS&#039;, &#039;smtpAuth&#039; =&gt; &#039;LEAN_EMAIL_SMTP_AUTH&#039;, &#039;smtpUsername&#039; =&gt; &#039;LEAN_EMAIL_SMTP_USERNAME&#039;, &#039;smtpPassword&#039; =&gt; &#039;LEAN_EMAIL_SMTP_PASSWORD&#039;, &#039;smtpAutoTLS&#039; =&gt; &#039;LEAN_EMAIL_SMTP_AUTO_TLS&#039;, &#039;smtpSecure&#039; =&gt; &#039;LEAN_EMAIL_SMTP_SECURE&#039;, &#039;smtpPort&#039; =&gt; &#039;LEAN_EMAIL_SMTP_PORT&#039;, &#039;smtpSSLNoverify&#039; =&gt; &#039;LEAN_EMAIL_SMTP_SSLNOVERIFY&#039;, &#039;useLdap&#039; =&gt; &#039;LEAN_LDAP_USE_LDAP&#039;, &#039;ldapType&#039; =&gt; &#039;LEAN_LDAP_LDAP_TYPE&#039;, &#039;ldapLtGroupAssignments&#039; =&gt; &#039;LEAN_LDAP_GROUP_ASSIGNMENT&#039;, &#039;ldapDomain&#039; =&gt; &#039;LEAN_LDAP_LDAP_DOMAIN&#039;, &#039;oidcClientId&#039; =&gt; &#039;LEAN_OIDC_CLIENT_ID&#039;, &#039;oidcClientSecret&#039; =&gt; &#039;LEAN_OIDC_CLIENT_SECRET&#039;, &#039;oidcAuthUrl&#039; =&gt; &#039;LEAN_OIDC_AUTH_URL_OVERRIDE&#039;, &#039;oidcTokenUrl&#039; =&gt; &#039;LEAN_OIDC_TOKEN_URL_OVERRIDE&#039;, &#039;oidcJwksUrl&#039; =&gt; &#039;LEAN_OIDC_JWKS_URL_OVERRIDE&#039;, &#039;oidcUserInfoUrl&#039; =&gt; &#039;LEAN_OIDC_USERINFO_URL_OVERRIDE&#039;, &#039;oidcFieldFirstName&#039; =&gt; &#039;LEAN_OIDC_FIELD_FIRSTNAME&#039;, &#039;oidcFieldLastName&#039; =&gt; &#039;LEAN_OIDC_FIELD_LASTNAME&#039;, &#039;redisURL&#039; =&gt; &#039;LEAN_REDIS_URL&#039;]|

## Methods

### __construct

environment constructor.

```php
public Environment::__construct(\Leantime\Core\Configuration\DefaultConfig $defaultConfiguration): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `defaultConfiguration` | **\Leantime\Core\Configuration\DefaultConfig** |  |


**Return Value:**





---
### updateCache



```php
public Environment::updateCache(): mixed
```









**Return Value:**





---
### getBool

getBool - get a boolean value from the environment

```php
private Environment::getBool(string $envVar, bool $default): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `envVar` | **string** |  |
| `default` | **bool** |  |


**Return Value:**





---
### getString

getString - get a string value from the environment

```php
private Environment::getString(string $envVar, string $default = &#039;&#039;): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `envVar` | **string** |  |
| `default` | **string** |  |


**Return Value:**





---
### environmentHelper

environmentHelper - helper function to get a value from the environment

```php
private Environment::environmentHelper(string $envVar, mixed $default, string $dataType = &quot;string&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `envVar` | **string** |  |
| `default` | **mixed** |  |
| `dataType` | **string** |  |


**Return Value:**





---
### tryGetFromPhp



```php
private Environment::tryGetFromPhp(string $envVar, mixed $currentValue): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `envVar` | **string** |  |
| `currentValue` | **mixed** |  |


**Return Value:**





---
### tryGetFromEnvironment

tryGetFromEnvironment - try to get a value from the environment

```php
private Environment::tryGetFromEnvironment(string $envVar, mixed $currentValue): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `envVar` | **string** |  |
| `currentValue` | **mixed** |  |


**Return Value:**





---
### tryGetFromYaml

tryGetFromYaml - try to get a value from the yaml file

```php
private Environment::tryGetFromYaml(string $envVar, mixed $currentValue): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `envVar` | **string** |  |
| `currentValue` | **mixed** |  |


**Return Value:**





---
### has

Determine if the given configuration value exists.

```php
public Environment::has(string $key): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |


**Return Value:**





---
### get

Get the specified configuration value.

```php
public Environment::get(array|string $key, mixed $default = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **array|string** |  |
| `default` | **mixed** |  |


**Return Value:**





---
### getMany

Get many configuration values.

```php
public Environment::getMany(array $keys): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `keys` | **array** |  |


**Return Value:**





---
### set

Set a given configuration value.

```php
public Environment::set(array|string $key, mixed $value = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **array|string** |  |
| `value` | **mixed** |  |


**Return Value:**





---
### prepend

Prepend a value onto an array configuration value.

```php
public Environment::prepend(string $key, mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |
| `value` | **mixed** |  |


**Return Value:**





---
### push

Push a value onto an array configuration value.

```php
public Environment::push(string $key, mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |
| `value` | **mixed** |  |


**Return Value:**





---
### all

Get all of the configuration items for the application.

```php
public Environment::all(): array
```









**Return Value:**





---
### offsetExists

Determine if the given configuration option exists.

```php
public Environment::offsetExists(string $key): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |


**Return Value:**





---
### offsetGet

Get a configuration option.

```php
public Environment::offsetGet(string $key): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |


**Return Value:**





---
### offsetSet

Set a configuration option.

```php
public Environment::offsetSet(string $key, mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |
| `value` | **mixed** |  |


**Return Value:**





---
### offsetUnset

Unset a configuration option.

```php
public Environment::offsetUnset(string $key): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |


**Return Value:**





---
### __get

Dynamically access the configuration using object syntax.

```php
public Environment::__get(string $key): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |


**Return Value:**





---
### __set

Dynamically set the configuration using object syntax.

```php
public Environment::__set(string $key, mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |
| `value` | **mixed** |  |


**Return Value:**





---
### __isset

Dynamically check if a configuration option is set using object syntax.

```php
public Environment::__isset(string $key): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |


**Return Value:**





---
### __unset

Dynamically unset a configuration option using object syntax.

```php
public Environment::__unset(string $key): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **string** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
