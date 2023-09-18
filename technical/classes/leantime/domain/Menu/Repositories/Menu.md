---
title: \Leantime\Domain\Menu\Repositories\Menu
footer: false
---

# Menu





* Full name: `\Leantime\Domain\Menu\Repositories\Menu`



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Domain\Menu\Repositories\Menu::DEFAULT_MENU`||&#039;default&#039;|

## Methods

### __construct



```php
public Menu::__construct(\Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Core\Language $language, \Leantime\Core\Environment $config, \Leantime\Domain\Tickets\Services\Tickets $ticketsService, \Leantime\Domain\Auth\Services\Auth $authService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `language` | **\Leantime\Core\Language** |  |
| `config` | **\Leantime\Core\Environment** |  |
| `ticketsService` | **\Leantime\Domain\Tickets\Services\Tickets** |  |
| `authService` | **\Leantime\Domain\Auth\Services\Auth** |  |


**Return Value:**





---
### getMenuTypes

getMenuTypes - Return an array of a currently supported menu types

```php
public Menu::getMenuTypes(): array
```









**Return Value:**

Array of supported menu types



---
### setSubmenuState

setSubmenuState - Set the state of the submenu (open or closed)

```php
public Menu::setSubmenuState(string $submenu, string $state): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `submenu` | **string** | Submenu identifier |
| `state` | **string** | New state (open / closed) |


**Return Value:**





---
### getSubmenuState

getSubmenuState - Gets the state of the submenu (open or closed)

```php
public Menu::getSubmenuState(string $submenu): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `submenu` | **string** | Submenu identifier |


**Return Value:**





---
### getMenuStructure

getMenu - Return a specific menu structure

```php
public Menu::getMenuStructure(string $menuType = &#039;&#039;): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `menuType` | **string** | Menu type to return |


**Return Value:**

Array of menu structrue



---
### processMenuItem



```php
public Menu::processMenuItem(mixed $element, mixed& $structure): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **mixed** |  |
| `structure` | **mixed** |  |


**Return Value:**





---
### getTicketMenu



```php
public Menu::getTicketMenu(): mixed
```









**Return Value:**





---
### getIdeaMenu



```php
public Menu::getIdeaMenu(): mixed
```









**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
private static Eventhelpers::get_event_context(mixed $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **mixed** |  |


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
private static Eventhelpers::get_function_context(mixed $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
