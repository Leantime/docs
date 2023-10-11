---
title: \Leantime\Core\Events
footer: false
---

# Events

Events class - Handles all events and filters



* Full name: `\Leantime\Core\Events`



## Methods

### dispatch_event

Dispatches an event to be executed somewhere

```php
public static Events::dispatch_event(string $eventName, mixed $payload = [], string $context = &#039;&#039;): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventName` | **string** |  |
| `payload` | **mixed** |  |
| `context` | **string** |  |


**Return Value:**





---
### findEventListeners

Finds event listeners by event names,
Allows listeners with wildcards

```php
public static Events::findEventListeners(string $eventName, array $registry): array
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventName` | **string** |  |
| `registry` | **array** |  |


**Return Value:**





---
### dispatch_filter

Dispatches a filter to manipulate a variable somewhere

```php
public static Events::dispatch_filter(string $filtername, mixed $payload = &#039;&#039;, mixed $available_params = [], mixed $context = &#039;&#039;): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filtername` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `context` | **mixed** |  |


**Return Value:**





---
### discover_listeners

Finds all the event and filter listeners and registers them
(should only be executed once at the beginning of the program)

```php
public static Events::discover_listeners(): void
```



* This method is **static**.





**Return Value:**





---
### add_event_listener

Adds an event listener to be registered

```php
public static Events::add_event_listener(string $eventName, string|callable|object $handler, int $priority = 10): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventName` | **string** |  |
| `handler` | **string|callable|object** |  |
| `priority` | **int** |  |


**Return Value:**





---
### add_filter_listener

Adds a filter listener to be registered

```php
public static Events::add_filter_listener(string $filtername, string|callable|object $handler, int $priority = 10): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filtername` | **string** |  |
| `handler` | **string|callable|object** |  |
| `priority` | **int** |  |


**Return Value:**





---
### get_registries

Gets all registered listeners

```php
public static Events::get_registries(): array
```



* This method is **static**.





**Return Value:**





---
### get_available_hooks

Gets all available hooks

```php
public static Events::get_available_hooks(): array
```



* This method is **static**.





**Return Value:**





---
### sortByPriority

Sorts listeners by priority for a given hook and type

```php
private static Events::sortByPriority(string $type, string $hookName): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **string** |  |
| `hookName` | **string** |  |


**Return Value:**





---
### defineParams

Adds the current_route to the event's/filter's available params

```php
private static Events::defineParams(mixed $paramAttr): array|object
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `paramAttr` | **mixed** |  |


**Return Value:**





---
### executeHandlers

Executes all the handlers for a given hook

```php
private static Events::executeHandlers(array $registry, string $registryType, string $hookName, mixed $payload, array|object $available_params = []): array|object|null
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `registry` | **array** |  |
| `registryType` | **string** |  |
| `hookName` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **array|object** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
