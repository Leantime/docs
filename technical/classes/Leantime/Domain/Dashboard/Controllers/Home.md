---
title: \Leantime\Domain\Dashboard\Controllers\Home
footer: false
---

# Home

Controller Class - Base class For all controllers



* Full name: `\Leantime\Domain\Dashboard\Controllers\Home`
* Parent class: [\Leantime\Core\Controller](../../../Core/Controller.md)



## Methods

### init



```php
public Home::init(\Leantime\Domain\Projects\Services\Projects $projectsService, \Leantime\Domain\Tickets\Services\Tickets $ticketsService, \Leantime\Domain\Users\Services\Users $usersService, \Leantime\Domain\Timesheets\Services\Timesheets $timesheetsService, \Leantime\Domain\Reports\Services\Reports $reportsService, \Leantime\Domain\Setting\Repositories\Setting $settingRepo, \Leantime\Domain\Calendar\Repositories\Calendar $calendarRepo): void
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


**Return Value:**





---
### get



```php
public Home::get(): void
```









**Return Value:**





---
### post



```php
public Home::post( $params): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Return Value:**





---


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
