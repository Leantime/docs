---
title: \Leantime\Plugins\Llamadorian\Services\StatusTracker
footer: false
---

# StatusTracker





* Full name: `\Leantime\Plugins\Llamadorian\Services\StatusTracker`
* Parent class: [\Leantime\Plugins\Llamadorian\Services\BaseService](technical/BaseService.md)



## Methods

### __construct



```php
public StatusTracker::__construct(\Leantime\Domain\Notifications\Services\Notifications $notificationsSvc, \Leantime\Domain\Setting\Services\Setting $settingsSvc, \Leantime\Domain\Api\Services\Api $apiSvc, \Leantime\Plugins\Llamadorian\Repositories\AiResponse $aiResponseRepository, \Leantime\Plugins\Llamadorian\Repositories\Ticket $ticketRepository, \Leantime\Plugins\Llamadorian\Repositories\Project $projectRepository, \Leantime\Plugins\Llamadorian\Repositories\CanvasItems $canvasItemsRepository, \Leantime\Plugins\Llamadorian\Repositories\User $userRepository, \Leantime\Domain\Tickets\Services\Tickets $ticketSvc, \Leantime\Core\language $lang): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notificationsSvc` | **\Leantime\Domain\Notifications\Services\Notifications** |  |
| `settingsSvc` | **\Leantime\Domain\Setting\Services\Setting** |  |
| `apiSvc` | **\Leantime\Domain\Api\Services\Api** |  |
| `aiResponseRepository` | **\Leantime\Plugins\Llamadorian\Repositories\AiResponse** |  |
| `ticketRepository` | **\Leantime\Plugins\Llamadorian\Repositories\Ticket** |  |
| `projectRepository` | **\Leantime\Plugins\Llamadorian\Repositories\Project** |  |
| `canvasItemsRepository` | **\Leantime\Plugins\Llamadorian\Repositories\CanvasItems** |  |
| `userRepository` | **\Leantime\Plugins\Llamadorian\Repositories\User** |  |
| `ticketSvc` | **\Leantime\Domain\Tickets\Services\Tickets** |  |
| `lang` | **\Leantime\Core\language** |  |


**Return Value:**





---
### getPreviousRunDate



```php
public StatusTracker::getPreviousRunDate(int $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |


**Return Value:**





---
### getProjectsWithUpdatesDue



```php
public StatusTracker::getProjectsWithUpdatesDue(?int $userId = null, ?int $projectId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **?int** |  |
| `projectId` | **?int** |  |


**Return Value:**





---
### getNextRunDate



```php
public StatusTracker::getNextRunDate(int $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |


**Return Value:**





---
### getUpcomingProjectUpdateByDueDate



```php
public StatusTracker::getUpcomingProjectUpdateByDueDate(string $date, ?int $userId, ?int $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **string** |  |
| `userId` | **?int** |  |
| `projectId` | **?int** |  |


**Return Value:**





---
### generateStatusUpdate



```php
public StatusTracker::generateStatusUpdate(string $projectId, string $dueDate): array|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **string** |  |
| `dueDate` | **string** |  |


**Return Value:**





---
### getPendingStatusUpdate



```php
public StatusTracker::getPendingStatusUpdate(string $projectId, \Carbon\CarbonImmutable $dueDate): array|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **string** |  |
| `dueDate` | **\Carbon\CarbonImmutable** |  |


**Return Value:**





---
### getStatusReportsByProjectId



```php
public StatusTracker::getStatusReportsByProjectId(int $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |


**Return Value:**





---
### getEntityCountByUser



```php
public StatusTracker::getEntityCountByUser(int $projectId, ?int $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `userId` | **?int** |  |


**Return Value:**





---
### addStatusUpdate



```php
public StatusTracker::addStatusUpdate(array $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** |  |


**Return Value:**





---
### generateStatusUpdateHtml



```php
private StatusTracker::generateStatusUpdateHtml(?string $highlights): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `highlights` | **?string** |  |


**Return Value:**





---
### getCanvasItemById



```php
public StatusTracker::getCanvasItemById(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### patchCanvasItemById



```php
public StatusTracker::patchCanvasItemById(mixed $id, mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `params` | **mixed** |  |


**Return Value:**





---
### getEntitiesForUpdates



```php
public StatusTracker::getEntitiesForUpdates(array $projects, int $userId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projects` | **array** |  |
| `userId` | **int** |  |


**Return Value:**





---
### generateWritingSupport



```php
public StatusTracker::generateWritingSupport(string $url, array $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | **string** |  |
| `params` | **array** |  |


**Return Value:**





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
