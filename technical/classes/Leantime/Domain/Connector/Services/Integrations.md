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
| `id` | **int** |  |


**Return Value:**





---
### update

updates the object by key.

```php
public Integrations::update(object|array $object): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `object` | **object|array** |  |


**Return Value:**





---
### create

Creates a new object

```php
public Integrations::create(object|array $object): int|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `object` | **object|array** |  |


**Return Value:**





---
### delete

Deletes object

```php
public Integrations::delete(int $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### getAll

Get all items

```php
public Integrations::getAll(array|null $searchparams = null): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchparams` | **array|null** |  |


**Return Value:**





---
### patch

patches the object by key.

```php
public Integrations::patch(int $id, array $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |
| `params` | **array** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
