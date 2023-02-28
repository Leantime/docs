---
title: \leantime\domain\repositories\menu
footer: false
---

# menu





* Full name: `\leantime\domain\repositories\menu`



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\leantime\domain\repositories\menu::DEFAULT_MENU`||&#039;default&#039;|

## Methods

### __construct



```php
public menu::__construct(): mixed
```









**Return Value:**





---
### getMenuTypes

getMenuTypes - Return an array of a currently supported menu types

```php
public menu::getMenuTypes(): array
```









**Return Value:**

Array of supported menu types



---
### setSubmenuState

setSubmenuState - Set the state of the submenu (open or closed)

```php
public menu::setSubmenuState(string $submenu, string $state): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `submenu` | **string** | Submenu identifier |
| `state` | **string** | New state (open / closed) |


**Return Value:**





---
### getMenuStructure

getMenu - Return a specific menu structure

```php
public menu::getMenuStructure(string $menuType = &#039;&#039;): array
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
public menu::processMenuItem(mixed $element, mixed& $structure): mixed
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
public menu::getTicketMenu(): mixed
```









**Return Value:**





---
### getIdeaMenu



```php
public menu::getIdeaMenu(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
