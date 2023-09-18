---
title: \Leantime\Core\Environment
footer: false
---

# Environment

environment - class To handle environment variables



* Full name: `\Leantime\Core\Environment`
* This class implements: \ArrayAccess, \Illuminate\Contracts\Config\Repository



## Methods

### __construct

environment constructor.

```php
public Environment::__construct(\Leantime\Core\DefaultConfig $defaultConfiguration): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `defaultConfiguration` | **\Leantime\Core\DefaultConfig** |  |


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


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
