---
title: \Leantime\Plugins\Accounts\Services\InviteTeamStep
footer: false
---

# InviteTeamStep





* Full name: `\Leantime\Plugins\Accounts\Services\InviteTeamStep`
* This class implements: \Leantime\Domain\Help\Contracts\OnboardingSteps



## Methods

### __construct



```php
public InviteTeamStep::__construct(\Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Domain\Projects\Services\Projects $projectService, \Leantime\Domain\Users\Services\Users $userService, \Leantime\Core\Template $tplService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** |  |
| `userService` | **\Leantime\Domain\Users\Services\Users** |  |
| `tplService` | **\Leantime\Core\Template** |  |


**Return Value:**





---
### getTitle



```php
public InviteTeamStep::getTitle(): string
```









**Return Value:**





---
### getAction



```php
public InviteTeamStep::getAction(): string
```









**Return Value:**





---
### getTemplate



```php
public InviteTeamStep::getTemplate(): string
```









**Return Value:**





---
### handle



```php
public InviteTeamStep::handle(mixed $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


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
protected static Eventhelpers::get_event_context( $function): string
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
private static Eventhelpers::get_function_context(?int $functionInt = null): string
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
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
