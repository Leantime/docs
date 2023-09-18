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
public Clients::getClient( $id): array
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
public Clients::getNumberOfClients(): mixed
```









**Return Value:**





---
### isClient



```php
public Clients::isClient(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### getClientsUsers



```php
public Clients::getClientsUsers(mixed $clientId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **mixed** |  |


**Return Value:**





---
### addClient

addClient - add a client and postback test

```php
public Clients::addClient(array $values): mixed
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
public Clients::editClient(array $values,  $id): mixed
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
public Clients::deleteClient( $id): mixed
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
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
