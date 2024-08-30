---
title: \Leantime\Domain\Widgets\Services\Widgets
footer: false
---

# Widgets




`\Leantime\Domain\Widgets\Services\Widgets`




## Methods

### __construct

__construct method.

```php
public Widgets::__construct(\Leantime\Domain\Setting\Repositories\Setting $settingRepo): void
```

Initializes the object and sets the available widgets and default widgets.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settingRepo` | **\Leantime\Domain\Setting\Repositories\Setting** | The Setting repository object |


**Return Value:**





---
### getAll

Retrieves all available widgets.

```php
public Widgets::getAll(): array
```









**Return Value:**

The array of available widgets.



---
### getActiveWidgets

Retrieves the active widgets for a specific user.

```php
public Widgets::getActiveWidgets(int $userId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |


**Return Value:**

The array of active widgets.



---
### resetDashboard

Resets the dashboard grid for a specific user.

```php
public Widgets::resetDashboard(int $userId): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user for whom the dashboard grid needs to be reset. |


**Return Value:**





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
