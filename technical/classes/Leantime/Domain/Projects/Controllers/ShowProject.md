---
title: \Leantime\Domain\Projects\Controllers\ShowProject
footer: false
---

# ShowProject

Controller Class - Base class For all controllers


`\Leantime\Domain\Projects\Controllers\ShowProject`

* Parent class: [\Leantime\Core\Controller\Controller](../../../Core/Controller/Controller.md)



## Methods

### init

init - initialize private variables

```php
public ShowProject::init(\Leantime\Domain\Projects\Services\Projects $projectService, \Leantime\Domain\Comments\Services\Comments $commentService, \Leantime\Domain\Files\Services\Files $fileService, \Leantime\Domain\Tickets\Services\Tickets $ticketService, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Domain\Projects\Repositories\Projects $projectRepo, \Leantime\Domain\Users\Repositories\Users $userRepo, \Leantime\Domain\Clients\Repositories\Clients $clientsRepo, \Leantime\Domain\Files\Repositories\Files $fileRepo, \Leantime\Domain\Comments\Repositories\Comments $commentsRepo, \Leantime\Domain\Menu\Repositories\Menu $menuRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** |  |
| `commentService` | **\Leantime\Domain\Comments\Services\Comments** |  |
| `fileService` | **\Leantime\Domain\Files\Services\Files** |  |
| `ticketService` | **\Leantime\Domain\Tickets\Services\Tickets** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `projectRepo` | **\Leantime\Domain\Projects\Repositories\Projects** |  |
| `userRepo` | **\Leantime\Domain\Users\Repositories\Users** |  |
| `clientsRepo` | **\Leantime\Domain\Clients\Repositories\Clients** |  |
| `fileRepo` | **\Leantime\Domain\Files\Repositories\Files** |  |
| `commentsRepo` | **\Leantime\Domain\Comments\Repositories\Comments** |  |
| `menuRepo` | **\Leantime\Domain\Menu\Repositories\Menu** |  |


**Return Value:**





---
### run

One Method to rule them all.

```php
public ShowProject::run(): mixed
```

..







**Return Value:**





---


## Inherited methods

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
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
