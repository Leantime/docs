---
title: \Leantime\Plugins\Llamadorian\Services\StoryTime
footer: false
---

# StoryTime





* Full name: `\Leantime\Plugins\Llamadorian\Services\StoryTime`
* Parent class: [\Leantime\Plugins\Llamadorian\Services\BaseService](technical/BaseService.md)



## Methods

### __construct



```php
public StoryTime::__construct(\Leantime\Domain\Notifications\Services\Notifications $notificationsSvc, \Leantime\Domain\Setting\Services\Setting $settingsSvc, \Leantime\Domain\Api\Services\Api $apiSvc, \Leantime\Plugins\Llamadorian\Repositories\AiResponse $aiResponseRepository, \Leantime\Plugins\Llamadorian\Repositories\User $userRepository, \Leantime\Plugins\Llamadorian\Repositories\Project $projectRepository, \Leantime\Domain\Users\Services\Users $usersSvc, \Leantime\Domain\Projects\Services\Projects $projectSvc): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notificationsSvc` | **\Leantime\Domain\Notifications\Services\Notifications** |  |
| `settingsSvc` | **\Leantime\Domain\Setting\Services\Setting** |  |
| `apiSvc` | **\Leantime\Domain\Api\Services\Api** |  |
| `aiResponseRepository` | **\Leantime\Plugins\Llamadorian\Repositories\AiResponse** |  |
| `userRepository` | **\Leantime\Plugins\Llamadorian\Repositories\User** |  |
| `projectRepository` | **\Leantime\Plugins\Llamadorian\Repositories\Project** |  |
| `usersSvc` | **\Leantime\Domain\Users\Services\Users** |  |
| `projectSvc` | **\Leantime\Domain\Projects\Services\Projects** |  |


**Return Value:**





---
### archiveStory



```php
public StoryTime::archiveStory(int $userId, int $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `projectId` | **int** |  |


**Return Value:**





---
### bulkArchiveStoriesByProjectId



```php
public StoryTime::bulkArchiveStoriesByProjectId(int $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |


**Return Value:**





---
### getStory



```php
public StoryTime::getStory(int $userId, int $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `projectId` | **int** |  |


**Return Value:**





---
### generateNewProjectIntroduction



```php
public StoryTime::generateNewProjectIntroduction(int $userId, int $projectId, string $persona): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `projectId` | **int** |  |
| `persona` | **string** |  |


**Return Value:**





---
### isMissingRequirements



```php
public StoryTime::isMissingRequirements(mixed $userId, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### setUnseenStoryFlagKeysForAllTeamMembers



```php
public StoryTime::setUnseenStoryFlagKeysForAllTeamMembers(int $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |


**Return Value:**





---
### bulkGenerateNewProjectIntroductionsByProjectId



```php
public StoryTime::bulkGenerateNewProjectIntroductionsByProjectId(int $projectId, string $persona): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `persona` | **string** |  |


**Return Value:**





---
### getProjectIdsByUserId



```php
public StoryTime::getProjectIdsByUserId(int $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |


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
