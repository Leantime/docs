---
title: \Leantime\Domain\Help\Services\InviteTeamStep
footer: false
---

# InviteTeamStep





* Full name: `\Leantime\Domain\Help\Services\InviteTeamStep`
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

Retrieves the action for the current request.

```php
public InviteTeamStep::getAction(): string
```

This method is responsible for returning the action to be performed based on the current request.
The action is returned as a string.







**Return Value:**

The action to be performed.



---
### getTemplate

Retrieves the template for the current request.

```php
public InviteTeamStep::getTemplate(): string
```

This method is responsible for returning the template to be used for rendering the content based on the current request.
The template is returned as a string.







**Return Value:**

The template to be used for rendering the content.



---
### handle

Handles the given parameters for performing a specific action.

```php
public InviteTeamStep::handle(array $params): bool
```

This method is responsible for processing and handling the given parameters for performing a specific action.
It iterates over the parameters and checks if the corresponding email is set and not empty.
If the email is valid and does not exist as a username, it creates a new user invite and then establishes a relation
between the new user and the current project.
In the end, a success notification is set.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | The parameters to be handled. |


**Return Value:**

True if the handling was successful, false otherwise.



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
