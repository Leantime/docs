---
title: \Leantime\Domain\Plugins\Hxcontrollers\Marketplaceplugins
footer: false
---

# Marketplaceplugins

HtmxController Class - Base class For all htmx controllers


`\Leantime\Domain\Plugins\Hxcontrollers\Marketplaceplugins`

* Parent class: [\Leantime\Core\Controller\HtmxController](../../../Core/Controller/HtmxController.md)



## Methods

### init



```php
public Marketplaceplugins::init(\Leantime\Domain\Plugins\Services\Plugins $pluginService): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pluginService` | **\Leantime\Domain\Plugins\Services\Plugins** |  |


**Return Value:**





---
### getlist



```php
public Marketplaceplugins::getlist(): void
```









**Return Value:**





---
### search



```php
public Marketplaceplugins::search(): void
```









**Return Value:**





---


## Inherited methods

### __construct

constructor - initialize private variables

```php
public HtmxController::__construct(\Leantime\Core\Http\IncomingRequest $incomingRequest, \Leantime\Core\Template $tpl): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `incomingRequest` | **\Leantime\Core\Http\IncomingRequest** | The request to be initialized. |
| `tpl` | **\Leantime\Core\Template** | The template to be initialized. |


**Return Value:**





---
### executeActions

Allows hooking into all controllers with events

```php
private HtmxController::executeActions(): void
```









**Return Value:**





---
### setHTMXEvent

Sets the response header to trigger an htmx event

```php
public HtmxController::setHTMXEvent(string $eventName): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `eventName` | **string** |  |


**Return Value:**





---
### getResponse

Gets the response

```php
public HtmxController::getResponse(): \Symfony\Component\HttpFoundation\Response
```









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
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
