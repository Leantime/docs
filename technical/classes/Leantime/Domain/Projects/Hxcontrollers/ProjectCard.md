---
title: \Leantime\Domain\Projects\Hxcontrollers\ProjectCard
footer: false
---

# ProjectCard

HtmxController Class - Base class For all htmx controllers


`\Leantime\Domain\Projects\Hxcontrollers\ProjectCard`

* Parent class: [\Leantime\Core\Controller\HtmxController](../../../Core/Controller/HtmxController.md)



## Methods

### init

Controller constructor

```php
public ProjectCard::init(\Leantime\Domain\Projects\Services\Projects $projectsService, \Leantime\Domain\Tickets\Services\Tickets $ticketsService, \Leantime\Domain\Users\Services\Users $usersService, \Leantime\Domain\Timesheets\Services\Timesheets $timesheetsService, \Leantime\Domain\Reports\Services\Reports $reportsService, \Leantime\Domain\Setting\Repositories\Setting $settingRepo, \Leantime\Domain\Calendar\Repositories\Calendar $calendarRepo, \Leantime\Domain\Clients\Repositories\Clients $clientRepo, \Leantime\Domain\Comments\Services\Comments $commentsService, \Leantime\Domain\Menu\Services\Menu $menuService, \Leantime\Domain\Reactions\Services\Reactions $reactionService): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectsService` | **\Leantime\Domain\Projects\Services\Projects** |  |
| `ticketsService` | **\Leantime\Domain\Tickets\Services\Tickets** |  |
| `usersService` | **\Leantime\Domain\Users\Services\Users** |  |
| `timesheetsService` | **\Leantime\Domain\Timesheets\Services\Timesheets** |  |
| `reportsService` | **\Leantime\Domain\Reports\Services\Reports** |  |
| `settingRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `calendarRepo` | **\Leantime\Domain\Calendar\Repositories\Calendar** |  |
| `clientRepo` | **\Leantime\Domain\Clients\Repositories\Clients** |  |
| `commentsService` | **\Leantime\Domain\Comments\Services\Comments** |  |
| `menuService` | **\Leantime\Domain\Menu\Services\Menu** |  |
| `reactionService` | **\Leantime\Domain\Reactions\Services\Reactions** |  |


**Return Value:**





---
### get



```php
public ProjectCard::get(): mixed
```









**Return Value:**





---
### toggleFavorite



```php
public ProjectCard::toggleFavorite(): mixed
```









**Return Value:**





---
### getProgress



```php
public ProjectCard::getProgress(): mixed
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
