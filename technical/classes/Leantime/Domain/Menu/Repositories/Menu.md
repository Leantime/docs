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
public Menu::__construct(\Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Core\Language $language, \Leantime\Core\Configuration\Environment $config, \Leantime\Domain\Tickets\Services\Tickets $ticketsService, \Leantime\Domain\Auth\Services\Auth $authService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `language` | **\Leantime\Core\Language** |  |
| `config` | **\Leantime\Core\Configuration\Environment** |  |
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
### buildMenuStructure



```php
protected Menu::buildMenuStructure(array $menuStructure, string $filter): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `menuStructure` | **array** |  |
| `filter` | **string** |  |


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
public Menu::processMenuItem( $element, & $structure): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **** |  |
| `structure` | **** |  |


**Return Value:**





---
### getTicketMenu



```php
public Menu::getTicketMenu(): array|mixed|string|string[]
```









**Return Value:**





---
### getTimelineMenu



```php
public Menu::getTimelineMenu(): mixed
```









**Return Value:**





---
### getIdeaMenu



```php
public Menu::getIdeaMenu(): string
```









**Return Value:**





---
### getSectionMenuType



```php
public Menu::getSectionMenuType(mixed $currentRoute, mixed $default = &quot;default&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `currentRoute` | **mixed** |  |
| `default` | **mixed** |  |


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
