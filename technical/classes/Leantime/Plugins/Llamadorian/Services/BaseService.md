---
title: \Leantime\Plugins\Llamadorian\Services\BaseService
footer: false
---

# BaseService





* Full name: `\Leantime\Plugins\Llamadorian\Services\BaseService`



## Methods

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
