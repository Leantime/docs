---
title: \Leantime\Core\Service
footer: false
---

# Service

Service Interface - Base interface for all services



* Full name: `\Leantime\Core\Service`
* Parent interface: [](../../../classes.md)



## Methods

### patch

patches the object by key.

```php
public Service::patch(int $id, array $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | id of the object to be patched |
| `params` | **array** | key=&gt;value array where key represents the object field name and value the value. |


**Return Value:**

returns true on success, false on failure



---
### update

updates the object by key.

```php
public Service::update(object|array $object): bool
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
public Service::create(object|array $object): int|false
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
public Service::delete(int $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | id of the object to be deleted |


**Return Value:**

returns id of new element or false



---
### get

Gets 1 specific item

```php
public Service::get(int $id): object|array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | id of the object to be retrieved |


**Return Value:**

returns object or array. False on failure or if item cannot be found



---
### getAll

Get all items

```php
public Service::getAll(array $searchparams = null): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchparams` | **array** | search parameters |


**Return Value:**

returns array on success, false on failure. No results should return empty array



---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
