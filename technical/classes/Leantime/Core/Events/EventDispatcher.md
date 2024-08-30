---
title: \Leantime\Core\Events\EventDispatcher
footer: false
---

# EventDispatcher

EventDispatcher class - Handles all events and filters



* Full name: `\Leantime\Core\Events\EventDispatcher`
* This class implements: \Illuminate\Contracts\Events\Dispatcher



## Methods

### dispatch_event

Dispatches an event to be executed somewhere

```php
public static EventDispatcher::dispatch_event(string $eventName, mixed $payload = [], string $context = &#039;&#039;): void
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
### dispatch



```php
public EventDispatcher::dispatch(mixed $eventName, mixed $payload = [], mixed $context = &#039;&#039;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventName` | **mixed** |  |
| `payload` | **mixed** |  |
| `context` | **mixed** |  |


**Return Value:**





---
### findEventListeners

Finds event listeners by event names,
Allows listeners with wildcards

```php
public static EventDispatcher::findEventListeners(string $eventName, array $registry): array
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
public static EventDispatcher::dispatch_filter(string $filtername, mixed $payload = &#039;&#039;, mixed $available_params = [], mixed $context = &#039;&#039;): mixed
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
public static EventDispatcher::discover_listeners(): void
```



* This method is **static**.





**Return Value:**





---
### getDomainPaths



```php
public static EventDispatcher::getDomainPaths(): mixed
```



* This method is **static**.





**Return Value:**





---
### add_event_listener

Adds an event listener to be registered

```php
public static EventDispatcher::add_event_listener(string $eventName, string|callable|object $handler, int $priority = 10): void
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
public static EventDispatcher::add_filter_listener(string $filtername, string|callable|object $handler, int $priority = 10): void
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
public static EventDispatcher::get_registries(): array
```



* This method is **static**.





**Return Value:**





---
### get_available_hooks

Gets all available hooks

```php
public static EventDispatcher::get_available_hooks(): array
```



* This method is **static**.





**Return Value:**





---
### sortByPriority

Sorts listeners by priority for a given hook and type

```php
private static EventDispatcher::sortByPriority(string $type, string $hookName): void
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
private static EventDispatcher::defineParams(mixed $paramAttr): array|object
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
private static EventDispatcher::executeHandlers(array $registry, string $registryType, string $hookName, mixed $payload, array|object $available_params = []): array|object|null
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
### getEventRegistry



```php
public static EventDispatcher::getEventRegistry(): array
```



* This method is **static**.





**Return Value:**





---
### getFilterRegistry



```php
public static EventDispatcher::getFilterRegistry(): array
```



* This method is **static**.





**Return Value:**





---
### listen



```php
public EventDispatcher::listen(mixed $events, mixed $listener = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `events` | **mixed** |  |
| `listener` | **mixed** |  |


**Return Value:**





---
### hasListeners

Determine if a given event has listeners.

```php
public EventDispatcher::hasListeners(string $eventName): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventName` | **string** |  |


**Return Value:**





---
### subscribe

Register an event subscriber with the dispatcher.

```php
public EventDispatcher::subscribe(object|string $subscriber): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `subscriber` | **object|string** |  |


**Return Value:**





---
### until

Dispatch an event until the first non-null response is returned.

```php
public EventDispatcher::until(string|object $event, mixed $payload = []): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `event` | **string|object** |  |
| `payload` | **mixed** |  |


**Return Value:**





---
### push

Register an event and payload to be fired later.

```php
public EventDispatcher::push(string $event, array $payload = []): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `event` | **string** |  |
| `payload` | **array** |  |


**Return Value:**





---
### flush

Flush a set of pushed events.

```php
public EventDispatcher::flush(string $event): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `event` | **string** |  |


**Return Value:**





---
### forget

Remove a set of listeners from the dispatcher.

```php
public EventDispatcher::forget(string $event): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `event` | **string** |  |


**Return Value:**





---
### forgetPushed

Forget all of the queued listeners.

```php
public EventDispatcher::forgetPushed(): void
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
