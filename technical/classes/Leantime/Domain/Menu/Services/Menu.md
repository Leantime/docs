---
title: \Leantime\Domain\Menu\Services\Menu
footer: false
---

# Menu





* Full name: `\Leantime\Domain\Menu\Services\Menu`



## Methods

### __construct



```php
public Menu::__construct(\Leantime\Core\Template $tpl, \Leantime\Core\Language $language, \Leantime\Core\Environment $config, \Leantime\Domain\Projects\Repositories\Projects $projectRepository, \Leantime\Domain\Tickets\Repositories\Tickets $ticketRepository, \Leantime\Domain\Timesheets\Repositories\Timesheets $timesheetsRepo, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Domain\Projects\Services\Projects $projectService, \Leantime\Domain\Timesheets\Services\Timesheets $timesheetService, \Leantime\Domain\Sprints\Services\Sprints $sprintService, \Leantime\Domain\Users\Services\Users $userService, \Leantime\Domain\Setting\Services\Setting $settingSvc): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `tpl` | **\Leantime\Core\Template** |  |
| `language` | **\Leantime\Core\Language** |  |
| `config` | **\Leantime\Core\Environment** |  |
| `projectRepository` | **\Leantime\Domain\Projects\Repositories\Projects** |  |
| `ticketRepository` | **\Leantime\Domain\Tickets\Repositories\Tickets** |  |
| `timesheetsRepo` | **\Leantime\Domain\Timesheets\Repositories\Timesheets** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** |  |
| `timesheetService` | **\Leantime\Domain\Timesheets\Services\Timesheets** |  |
| `sprintService` | **\Leantime\Domain\Sprints\Services\Sprints** |  |
| `userService` | **\Leantime\Domain\Users\Services\Users** |  |
| `settingSvc` | **\Leantime\Domain\Setting\Services\Setting** |  |


**Return Value:**





---
### getUserProjectList



```php
public Menu::getUserProjectList(int $userId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |


**Return Value:**





---
### getProjectTypeAvatars



```php
public Menu::getProjectTypeAvatars(): array
```









**Return Value:**





---
### getProjectSelectorGroupingOptions



```php
public Menu::getProjectSelectorGroupingOptions(): array
```









**Return Value:**





---


## Inherited methods

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
