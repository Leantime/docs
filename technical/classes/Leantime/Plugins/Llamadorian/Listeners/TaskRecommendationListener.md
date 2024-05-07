---
title: \Leantime\Plugins\Llamadorian\Listeners\TaskRecommendationListener
footer: false
---

# TaskRecommendationListener





* Full name: `\Leantime\Plugins\Llamadorian\Listeners\TaskRecommendationListener`



## Methods

### __construct



```php
public TaskRecommendationListener::__construct(\Leantime\Plugins\Llamadorian\Services\TaskRecommendation $taskRecommendationService, \Leantime\Domain\Setting\Services\Setting $settingsSvc, \Leantime\Plugins\Llamadorian\Repositories\AiResponse $aiResponse): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `taskRecommendationService` | **\Leantime\Plugins\Llamadorian\Services\TaskRecommendation** |  |
| `settingsSvc` | **\Leantime\Domain\Setting\Services\Setting** |  |
| `aiResponse` | **\Leantime\Plugins\Llamadorian\Repositories\AiResponse** |  |


**Return Value:**





---
### getMyPrioritizedList



```php
public TaskRecommendationListener::getMyPrioritizedList(mixed $tasks): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `tasks` | **mixed** |  |


**Return Value:**





---
### showSwitch



```php
public TaskRecommendationListener::showSwitch(): mixed
```









**Return Value:**





---
### showTaskRecommendationTutorial



```php
public TaskRecommendationListener::showTaskRecommendationTutorial(): mixed
```









**Return Value:**





---
### renderTaskBreakDownBtn



```php
public TaskRecommendationListener::renderTaskBreakDownBtn(mixed $ticketId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
