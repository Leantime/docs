---
title: \Leantime\Domain\Ideas\Services\Ideas
footer: false
---

# Ideas




`\Leantime\Domain\Ideas\Services\Ideas`




## Methods

### __construct



```php
public Ideas::__construct(\Leantime\Domain\Ideas\Repositories\Ideas $ideasRepository): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ideasRepository` | **\Leantime\Domain\Ideas\Repositories\Ideas** |  |


**Return Value:**





---
### pollForNewIdeas



```php
public Ideas::pollForNewIdeas(?int $projectId = null, ?int $board = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `board` | **?int** |  |


**Return Value:**





---
### pollForUpdatedIdeas



```php
public Ideas::pollForUpdatedIdeas(?int $projectId = null, ?int $board = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `board` | **?int** |  |


**Return Value:**





---
### prepareDatesForApiResponse



```php
private Ideas::prepareDatesForApiResponse(mixed $idea): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `idea` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
