---
title: \Leantime\Domain\Clients\Repositories\Clients
footer: false
---

# Clients

Repository


`\Leantime\Domain\Clients\Repositories\Clients`

* Parent class: [\Leantime\Core\Db\Repository](../../../Core/Db/Repository.md)



## Methods

### __construct

__construct - get database connection

```php
public Clients::__construct(\Leantime\Core\Db\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |


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
public Clients::editClient(array $values,  $id): bool
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
public Clients::deleteClient( $id): bool
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


## Inherited methods

### dbcall

dbcall - creates a new dbcall object

```php
protected Repository::dbcall(array $args): object
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `args` | **array** | - usually the value of func_get_args(), gives events/filters values to work with |


**Return Value:**





---
### patch

patch - updates a record in the database

```php
public Repository::patch(int $id, array $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | - the id of the record to update |
| `params` | **array** | - the parameters to update |


**Return Value:**





---
### insert



```php
public Repository::insert(object $objectToInsert): false|int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `objectToInsert` | **object** |  |


**Return Value:**





---
### delete

delete - deletes a record from the database

```php
public Repository::delete(int $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | - the id of the record to delete |


**Return Value:**





---
### get

get - gets a record from the database

```php
public Repository::get(int $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | - the id of the record to get |


**Return Value:**





---
### getFieldAttribute

getFieldAttribute - gets the field attribute for a given property

```php
protected Repository::getFieldAttribute(object|string $class, string $property, bool $includeId = false): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `class` | **object|string** | - the class to get the attribute from |
| `property` | **string** | - the property to get the attribute from |
| `includeId` | **bool** | - whether or not to include the id attribute |


**Return Value:**





---
### getDbFields

getDbFields - gets the database fields for a given class

```php
protected Repository::getDbFields(object|string $class): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `class` | **object|string** | - the class to get the fields from |


**Return Value:**





---
### dispatch_event

dispatches an event with context

```php
public static DispatchesEvents::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static DispatchesEvents::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
protected static DispatchesEvents::get_event_context( $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **** |  |


**Return Value:**





---
### set_class_context

Gets the class Context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static DispatchesEvents::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static DispatchesEvents::get_function_context(?int $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **?int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
