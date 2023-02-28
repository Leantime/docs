---
title: \leantime\domain\repositories\clients
footer: false
---

# clients





* Full name: `\leantime\domain\repositories\clients`



## Methods

### __construct

__construct - get database connection

```php
public clients::__construct(): mixed
```









**Return Value:**





---
### getClient

getClient - get one client from db

```php
public clients::getClient( $id): array
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
public clients::getAll(): array
```









**Return Value:**





---
### getNumberOfClients



```php
public clients::getNumberOfClients(): mixed
```









**Return Value:**





---
### isClient



```php
public clients::isClient(mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Return Value:**





---
### getClientsUsers



```php
public clients::getClientsUsers(mixed $clientId): mixed
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
public clients::addClient(array $values): mixed
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
public clients::editClient(array $values,  $id): mixed
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
public clients::deleteClient( $id): mixed
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
public clients::hasTickets( $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
