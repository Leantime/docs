---
title: \Leantime\Domain\Help\Services\Helper
footer: false
---

# Helper




`\Leantime\Domain\Help\Services\Helper`




## Methods

### __construct

Constructor for the class.

```php
public Helper::__construct(): void
```

Initializes the availableModals property by dispatching the "addHelperModal" event.







**Return Value:**





---
### getAllHelperModals

Returns an array of all available helper modals.

```php
public Helper::getAllHelperModals(): array
```









**Return Value:**

The array of available helper modals.



---
### getHelperModalByRoute

Retrieves the corresponding helper modal for a given route.

```php
public Helper::getHelperModalByRoute(string $route): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `route` | **string** | The route for which to retrieve the helper modal. |


**Return Value:**

The helper modal associated with the given route. If not found, 'notfound' is returned.



---
### getFirstLoginSteps

Retrieves the first login steps.

```php
public Helper::getFirstLoginSteps(): array
```

This method returns an array of steps that a user needs to follow during the first login.

Each step consists of a template and a button label.







**Return Value:**

The first login steps.



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
