---
title: \Leantime\Domain\Menu\Composers\HeadMenu
footer: false
---

# HeadMenu




`\Leantime\Domain\Menu\Composers\HeadMenu`

* Parent class: [\Leantime\Core\Controller\Composer](../../../Core/Controller/Composer.md)



## Methods

### init



```php
public HeadMenu::init(\Leantime\Domain\Notifications\Services\Notifications $notificationService, \Leantime\Domain\Timesheets\Services\Timesheets $timesheets, \Leantime\Domain\Users\Services\Users $userService, \Leantime\Domain\Auth\Services\Auth $authService, \Leantime\Domain\Help\Services\Helper $helperService, \Leantime\Domain\Menu\Repositories\Menu $menuRepo, \Leantime\Core\Theme $themeCore): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notificationService` | **\Leantime\Domain\Notifications\Services\Notifications** |  |
| `timesheets` | **\Leantime\Domain\Timesheets\Services\Timesheets** |  |
| `userService` | **\Leantime\Domain\Users\Services\Users** |  |
| `authService` | **\Leantime\Domain\Auth\Services\Auth** |  |
| `helperService` | **\Leantime\Domain\Help\Services\Helper** |  |
| `menuRepo` | **\Leantime\Domain\Menu\Repositories\Menu** |  |
| `themeCore` | **\Leantime\Core\Theme** |  |


**Return Value:**





---
### with

Data to be passed to view before rendering

```php
public HeadMenu::with(): array
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
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
