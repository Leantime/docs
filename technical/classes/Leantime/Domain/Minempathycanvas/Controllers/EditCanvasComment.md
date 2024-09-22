---
title: \Leantime\Domain\Minempathycanvas\Controllers\EditCanvasComment
footer: false
---

# EditCanvasComment

Controller Class - Base class For all controllers


`\Leantime\Domain\Minempathycanvas\Controllers\EditCanvasComment`

* Parent class: [\Leantime\Domain\Canvas\Controllers\EditCanvasComment](../../Canvas/Controllers/EditCanvasComment.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Domain\Minempathycanvas\Controllers\EditCanvasComment::CANVAS_NAME`||&#039;minempathy&#039;|



## Inherited methods

### init

init - initialize private variables

```php
public EditCanvasComment::init(\Leantime\Domain\Tickets\Repositories\Tickets $ticketRepo, \Leantime\Domain\Comments\Repositories\Comments $commentsRepo, \Leantime\Domain\Sprints\Services\Sprints $sprintService, \Leantime\Domain\Tickets\Services\Tickets $ticketService, \Leantime\Domain\Projects\Services\Projects $projectService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketRepo` | **\Leantime\Domain\Tickets\Repositories\Tickets** |  |
| `commentsRepo` | **\Leantime\Domain\Comments\Repositories\Comments** |  |
| `sprintService` | **\Leantime\Domain\Sprints\Services\Sprints** |  |
| `ticketService` | **\Leantime\Domain\Tickets\Services\Tickets** |  |
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** |  |


**Return Value:**





---
### get

get - handle get requests

```php
public EditCanvasComment::get(mixed $params): mixed
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
public EditCanvasComment::post(mixed $params): mixed
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
public EditCanvasComment::put(mixed $params): mixed
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
public EditCanvasComment::delete(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### __construct

constructor - initialize private variables

```php
public Controller::__construct(\Leantime\Core\Http\IncomingRequest $incomingRequest, \Leantime\Core\Template $tpl, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `incomingRequest` | **\Leantime\Core\Http\IncomingRequest** | The request to be initialized. |
| `tpl` | **\Leantime\Core\Template** | The template to be initialized. |
| `language` | **\Leantime\Core\Language** | The language to be initialized. |


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
### getResponse

getResponse - returns the response

```php
public Controller::getResponse(): \Symfony\Component\HttpFoundation\Response
```









**Return Value:**

The response object.



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
