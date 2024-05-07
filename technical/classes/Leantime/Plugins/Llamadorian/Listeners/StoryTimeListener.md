---
title: \Leantime\Plugins\Llamadorian\Listeners\StoryTimeListener
footer: false
---

# StoryTimeListener





* Full name: `\Leantime\Plugins\Llamadorian\Listeners\StoryTimeListener`



## Methods

### __construct



```php
public StoryTimeListener::__construct(\Leantime\Plugins\Llamadorian\Repositories\Project $projectRepository, \Leantime\Domain\Setting\Services\Setting $settingsSvc, \Leantime\Domain\Projects\Services\Projects $projectSvc, \Leantime\Plugins\Llamadorian\Services\StoryTime $storyTimeService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectRepository` | **\Leantime\Plugins\Llamadorian\Repositories\Project** |  |
| `settingsSvc` | **\Leantime\Domain\Setting\Services\Setting** |  |
| `projectSvc` | **\Leantime\Domain\Projects\Services\Projects** |  |
| `storyTimeService` | **\Leantime\Plugins\Llamadorian\Services\StoryTime** |  |


**Return Value:**





---
### handle



```php
public StoryTimeListener::handle(): mixed
```









**Return Value:**





---
### userAdded



```php
public StoryTimeListener::userAdded(mixed $payload): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `payload` | **mixed** |  |


**Return Value:**





---
### projectEdited



```php
public StoryTimeListener::projectEdited(mixed $newProject, mixed $oldProject): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `newProject` | **mixed** |  |
| `oldProject` | **mixed** |  |


**Return Value:**





---
### handleJobTitleChange



```php
public StoryTimeListener::handleJobTitleChange(mixed $payload): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `payload` | **mixed** |  |


**Return Value:**





---
### showMyStory



```php
public StoryTimeListener::showMyStory(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### storyGenerationCTA



```php
public StoryTimeListener::storyGenerationCTA(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
