---
title: \Leantime\Plugins\Llamadorian\Services\TaskRecommendation
footer: false
---

# TaskRecommendation





* Full name: `\Leantime\Plugins\Llamadorian\Services\TaskRecommendation`
* Parent class: [\Leantime\Plugins\Llamadorian\Services\BaseService](technical/BaseService.md)



## Methods

### __construct



```php
public TaskRecommendation::__construct(\Leantime\Domain\Notifications\Services\Notifications $notificationsSvc, \Leantime\Domain\Setting\Services\Setting $settingsSvc, \Leantime\Domain\Api\Services\Api $apiSvc, \Leantime\Plugins\Llamadorian\Api\Repositories\Ticket $aiTicketRepo, \Leantime\Plugins\Llamadorian\Repositories\AiResponse $aiResponseRepository): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notificationsSvc` | **\Leantime\Domain\Notifications\Services\Notifications** |  |
| `settingsSvc` | **\Leantime\Domain\Setting\Services\Setting** |  |
| `apiSvc` | **\Leantime\Domain\Api\Services\Api** |  |
| `aiTicketRepo` | **\Leantime\Plugins\Llamadorian\Api\Repositories\Ticket** |  |
| `aiResponseRepository` | **\Leantime\Plugins\Llamadorian\Repositories\AiResponse** |  |


**Return Value:**





---
### generatePrioritizedList

Generates a prioritized list of tasks for the current user.

```php
public TaskRecommendation::generatePrioritizedList(): array|null
```









**Return Value:**

The prioritized list of tasks, or null if an error occurs.



---
### getCurrentPrioritizedList

Retrieves the current prioritized list of tasks for the user.

```php
public TaskRecommendation::getCurrentPrioritizedList(): object|null
```









**Return Value:**

The current prioritized list of tasks, or null if no list is found.



---
### getPrioritizedTodoListFromFiltered

Retrieves the prioritized todo list from the filtered task groups.

```php
public TaskRecommendation::getPrioritizedTodoListFromFiltered(array $taskGrops): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `taskGrops` | **array** |  |


**Return Value:**

The prioritized todo list, or the original task groups if no prioritized list is found.



---
### getTaskBreakdown

Generates a prioritized list of tasks for the current user.

```php
public TaskRecommendation::getTaskBreakdown(mixed $taskId): array|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `taskId` | **mixed** |  |


**Return Value:**

The prioritized list of tasks, or null if an error occurs.



---


## Inherited methods

### __construct



```php
public BaseService::__construct(\Leantime\Domain\Notifications\Services\Notifications $notificationsSvc, \Leantime\Domain\Setting\Services\Setting $settingsSvc, \Leantime\Domain\Api\Services\Api $apiSvc): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notificationsSvc` | **\Leantime\Domain\Notifications\Services\Notifications** |  |
| `settingsSvc` | **\Leantime\Domain\Setting\Services\Setting** |  |
| `apiSvc` | **\Leantime\Domain\Api\Services\Api** |  |


**Return Value:**





---
### sendHttpRequest



```php
protected BaseService::sendHttpRequest(string $url, string $method, array $queryParams): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | **string** |  |
| `method` | **string** |  |
| `queryParams` | **array** |  |


**Return Value:**





---
### queueHttpRequest



```php
protected BaseService::queueHttpRequest(string $url, string $method, array $queryParams): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | **string** |  |
| `method` | **string** |  |
| `queryParams` | **array** |  |


**Return Value:**





---
### sendHttpRequestWithBody



```php
protected BaseService::sendHttpRequestWithBody(string $url, string $method, string $data): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | **string** |  |
| `method` | **string** |  |
| `data` | **string** |  |


**Return Value:**





---
### createAINotification



```php
public BaseService::createAINotification(mixed $userId, mixed $message): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `message` | **mixed** |  |


**Return Value:**





---
### getApiKey



```php
protected BaseService::getApiKey(): mixed
```









**Return Value:**





---
### getLlamadorianSettings



```php
public BaseService::getLlamadorianSettings(mixed $projectId): array|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### saveLlamadorianSettings



```php
public BaseService::saveLlamadorianSettings(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### getAIPersonaByProjectId



```php
public BaseService::getAIPersonaByProjectId(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
