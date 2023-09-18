---
title: \Leantime\Domain\Connector\Services\Integrations
footer: false
---

# Integrations





* Full name: `\Leantime\Domain\Connector\Services\Integrations`
* This class implements: \Leantime\Core\Service



## Methods

### __construct



```php
public Integrations::__construct(\Leantime\Domain\Connector\Repositories\Integrations $integrationRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `integrationRepo` | **\Leantime\Domain\Connector\Repositories\Integrations** |  |


**Return Value:**





---
### get

Gets 1 specific item

```php
public Integrations::get(int $id): object|array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | id of the object to be retrieved |


**Return Value:**

returns object or array. False on failure or if item cannot be found



---
### update

updates the object by key.

```php
public Integrations::update(object|array $object): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `object` | **object|array** | expects the entire object to be updated as object or array |


**Return Value:**

returns true on success, false on failure



---
### create

Creates a new object

```php
public Integrations::create(object|array $object): int|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `object` | **object|array** | object or array to be created |


**Return Value:**

returns id of new element or false



---
### delete

Deletes object

```php
public Integrations::delete(int $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | id of the object to be deleted |


**Return Value:**

returns id of new element or false



---
### getAll

Get all items

```php
public Integrations::getAll(array $searchparams = null): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchparams` | **array** | search parameters |


**Return Value:**

returns array on success, false on failure. No results should return empty array



---
### patch

patches the object by key.

```php
public Integrations::patch(int $id, array $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | id of the object to be patched |
| `params` | **array** | key=&gt;value array where key represents the object field name and value the value. |


**Return Value:**

returns true on success, false on failure



---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
