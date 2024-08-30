---
title: \Leantime\Domain\Help\Services\ProjectDefinitionStep
footer: false
---

# ProjectDefinitionStep





* Full name: `\Leantime\Domain\Help\Services\ProjectDefinitionStep`
* This class implements: \Leantime\Domain\Help\Contracts\OnboardingSteps



## Methods

### __construct



```php
public ProjectDefinitionStep::__construct(\Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Domain\Projects\Services\Projects $projectService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** |  |


**Return Value:**





---
### getTitle



```php
public ProjectDefinitionStep::getTitle(): string
```









**Return Value:**





---
### getAction

Retrieves the action of the current object.

```php
public ProjectDefinitionStep::getAction(): string
```









**Return Value:**

The action of the current object.



---
### getTemplate

Retrieves the template to render for the current object.

```php
public ProjectDefinitionStep::getTemplate(): string
```









**Return Value:**

The template to render for the current object.



---
### handle

Handles the given parameters and performs necessary operations.

```php
public ProjectDefinitionStep::handle(array $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | The parameters passed to the method. |


**Return Value:**

Returns true.



---


## Inherited methods

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
