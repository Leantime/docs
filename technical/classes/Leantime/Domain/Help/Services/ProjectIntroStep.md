---
title: \Leantime\Domain\Help\Services\ProjectIntroStep
footer: false
---

# ProjectIntroStep





* Full name: `\Leantime\Domain\Help\Services\ProjectIntroStep`
* This class implements: \Leantime\Domain\Help\Contracts\OnboardingSteps



## Methods

### __construct



```php
public ProjectIntroStep::__construct(\Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Domain\Projects\Services\Projects $projectService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** |  |


**Return Value:**





---
### getTitle

Get the title of the current project.

```php
public ProjectIntroStep::getTitle(): string
```









**Return Value:**

The title of the current project.



---
### getAction

Get the action for the current request.

```php
public ProjectIntroStep::getAction(): string
```









**Return Value:**

The action for the current request.



---
### getTemplate

Retrieves the template for the project introduction step.

```php
public ProjectIntroStep::getTemplate(): string
```









**Return Value:**

The template name for the project introduction step.



---
### handle

Handle the given parameters.

```php
public ProjectIntroStep::handle(array $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | The parameters passed to the handle method. |


**Return Value:**

Returns true on success.



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
> Automatically generated from source code comments on 2024-05-08 using [phpDocumentor](http://www.phpdoc.org/)
