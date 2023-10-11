---
title: \Leantime\Domain\Clients\Repositories\Clients
footer: false
---

# Clients





* Full name: `\Leantime\Domain\Clients\Repositories\Clients`



## Methods

### __construct

__construct - get database connection

```php
public Clients::__construct(\Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getClient

getClient - get one client from db

```php
public Clients::getClient( $id): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getAll

getAll - get all clients

```php
public Clients::getAll(): array
```









**Return Value:**





---
### getNumberOfClients



```php
public Clients::getNumberOfClients(): int|mixed
```









**Return Value:**





---
### isClient



```php
public Clients::isClient( $values): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Return Value:**





---
### getClientsUsers



```php
public Clients::getClientsUsers( $clientId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **** |  |


**Return Value:**





---
### addClient

addClient - add a client and postback test

```php
public Clients::addClient(array $values): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |


**Return Value:**





---
### editClient

editClient - edit a client

```php
public Clients::editClient(array $values,  $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `id` | **** |  |


**Return Value:**





---
### deleteClient

deleteClient - delete a client

```php
public Clients::deleteClient( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### hasTickets

hasTickets - check if a project has Tickets

```php
public Clients::hasTickets( $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
