---
title: \Leantime\Domain\Menu\Composers\Menu
footer: false
---

# Menu





* Full name: `\Leantime\Domain\Menu\Composers\Menu`
* Parent class: [\Leantime\Core\Composer](../../../Core/Composer.md)



## Methods

### init



```php
public Menu::init(\Leantime\Domain\Projects\Services\Projects $projectService, \Leantime\Domain\Tickets\Services\Tickets $ticketService, \Leantime\Domain\Setting\Services\Setting $settingSvc, \Leantime\Domain\Menu\Repositories\Menu $menuRepo, \Leantime\Domain\Menu\Services\Menu $menuService, \Leantime\Core\IncomingRequest $request): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** |  |
| `ticketService` | **\Leantime\Domain\Tickets\Services\Tickets** |  |
| `settingSvc` | **\Leantime\Domain\Setting\Services\Setting** |  |
| `menuRepo` | **\Leantime\Domain\Menu\Repositories\Menu** |  |
| `menuService` | **\Leantime\Domain\Menu\Services\Menu** |  |
| `request` | **\Leantime\Core\IncomingRequest** |  |


**Return Value:**





---
### with

Data to be passed to view before rendering

```php
public Menu::with(): array
```









**Return Value:**





---


## Inherited methods

### compose

Compose the view before rendering.

```php
public Composer::compose(\Illuminate\View\View $view): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `view` | **\Illuminate\View\View** |  |


**Return Value:**





---
### merge

Data to be merged and passed to the view before rendering.

```php
protected Composer::merge(): array
```









**Return Value:**





---
### with

Data to be passed to view before rendering

```php
protected Composer::with(): array
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
