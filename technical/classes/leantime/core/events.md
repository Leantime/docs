---
title: \leantime\core\events
footer: false
---

# events





* Full name: `\leantime\core\events`



## Methods

### dispatch_event

Dispatches an event to be executed somewhere

```php
public static events::dispatch_event(string $eventName, mixed $payload = [], string $context = &#039;&#039;): void
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
### dispatch_filter

Dispatches a filter to manipulate a variable somewhere

```php
public static events::dispatch_filter(string $filtername, mixed $payload = &#039;&#039;, mixed $available_params = [], mixed $context = &#039;&#039;): mixed
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
public static events::discover_listeners(): void
```



* This method is **static**.





**Return Value:**





---
### add_event_listener

Adds an event listener to be registered

```php
public static events::add_event_listener(string $eventName, string|callable|object $handler, int $priority = 10): void
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
public static events::add_filter_listener(string $filtername, string|callable|object $handler, int $priority = 10): void
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
public static events::get_registries(): array
```



* This method is **static**.





**Return Value:**





---
### get_available_hooks

Gets all available hooks

```php
public static events::get_available_hooks(): array
```



* This method is **static**.





**Return Value:**





---
### sortByPriority

Sorts listeners by priority for a given hook and type

```php
private static events::sortByPriority(string $type, string $hookName): void
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
private static events::defineParams(mixed $paramAttr): array|object
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
private static events::executeHandlers(array $registry, string $hookName, mixed $payload, array|object $available_params = []): array|object
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `registry` | **array** |  |
| `hookName` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **array|object** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
