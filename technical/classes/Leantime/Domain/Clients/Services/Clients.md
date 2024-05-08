---
title: \Leantime\Domain\Clients\Services\Clients
footer: false
---

# Clients

Class Clients



* Full name: `\Leantime\Domain\Clients\Services\Clients`



## Methods

### __construct



```php
public Clients::__construct(\Leantime\Domain\Projects\Repositories\Projects $projectRepository, \Leantime\Domain\Clients\Repositories\Clients $clientRepository): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectRepository` | **\Leantime\Domain\Projects\Repositories\Projects** |  |
| `clientRepository` | **\Leantime\Domain\Clients\Repositories\Clients** |  |


**Return Value:**





---
### getUserClients



```php
public Clients::getUserClients(int $userId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |


**Return Value:**





---
### getAll



```php
public Clients::getAll(array $searchparams = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchparams` | **array** |  |


**Return Value:**





---
### patch

patches the client by key.

```php
public Clients::patch(int $id, array $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | Id of the object to be patched |
| `params` | **array** | Key=&gt;value array where key represents the object field name and value the value. |


**Return Value:**

returns true on success, false on failure



---
### editClient

updates the client by key.

```php
public Clients::editClient(object|array $values): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **object|array** | expects the entire object to be updated as object or array |


**Return Value:**

Returns true on success, false on failure



---
### create

Creates a new client

```php
public Clients::create(object|array $values): int|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **object|array** | Object or array to be created |


**Return Value:**

Returns id of new element or false



---
### delete

Deletes a client

```php
public Clients::delete(int $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | Id of the object to be deleted |


**Return Value:**

Returns id of new element or false



---
### get

Gets 1 specific client by id

```php
public Clients::get(int $id): object|array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | Id of the object to be retrieved |


**Return Value:**

Returns object or array. False on failure or if item cannot be found



---


---
> Automatically generated from source code comments on 2024-05-08 using [phpDocumentor](http://www.phpdoc.org/)
