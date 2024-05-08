---
title: \Leantime\Domain\Connector\Services\Integrations
footer: false
---

# Integrations





* Full name: `\Leantime\Domain\Connector\Services\Integrations`



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



```php
public Integrations::get(int $id): object|array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### updateTicket



```php
public Integrations::updateTicket(object|array $object): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `object` | **object|array** |  |


**Return Value:**





---
### create



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
> Automatically generated from source code comments on 2024-05-08 using [phpDocumentor](http://www.phpdoc.org/)
