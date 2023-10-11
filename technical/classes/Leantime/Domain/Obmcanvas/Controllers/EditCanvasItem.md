---
title: \Leantime\Domain\Obmcanvas\Controllers\EditCanvasItem
footer: false
---

# EditCanvasItem

editCanvasItem class - Generic canvas controller / Edit Canvas Item



* Full name: `\Leantime\Domain\Obmcanvas\Controllers\EditCanvasItem`
* Parent class: [\Leantime\Domain\Canvas\Controllers\EditCanvasItem](../../Canvas/Controllers/EditCanvasItem.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Domain\Obmcanvas\Controllers\EditCanvasItem::CANVAS_NAME`|string|&#039;obm&#039;|



## Inherited methods

### __construct

constructor - initialize private variables

```php
public Controller::__construct(\Leantime\Core\IncomingRequest $incomingRequest, \Leantime\Core\template $tpl, \Leantime\Core\language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `incomingRequest` | **\Leantime\Core\IncomingRequest** | The request to be initialized. |
| `tpl` | **\Leantime\Core\template** | The template to be initialized. |
| `language` | **\Leantime\Core\language** | The language to be initialized. |


**Return Value:**





---
### get

get - handle get requests

```php
public EditCanvasItem::get(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### post

post - handle post requests

```php
public EditCanvasItem::post(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### put

put - handle put requests

```php
public EditCanvasItem::put(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### delete

delete - handle delete requests

```php
public EditCanvasItem::delete(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### executeActions

Allows hooking into all controllers with events

```php
private Controller::executeActions(string $method, object|array $params): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |
| `params` | **object|array** |  |


**Return Value:**





---
### dispatch_event

dispatches an event with context

```php
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
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
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
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
private static Eventhelpers::get_event_context( $function): string
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
private static Eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static Eventhelpers::get_function_context(null $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **null** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
