---
title: \leantime\domain\services\projects
footer: false
---

# projects





* Full name: `\leantime\domain\services\projects`



## Methods

### __construct



```php
public projects::__construct(): mixed
```









**Return Value:**





---
### getProject



```php
public projects::getProject(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getProjectProgress



```php
public projects::getProjectProgress(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getUsersToNotify



```php
public projects::getUsersToNotify(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllUserInfoToNotify



```php
public projects::getAllUserInfoToNotify(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### notifyProjectUsers



```php
public projects::notifyProjectUsers(\leantime\domain\models\notifications\notification $notification): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\leantime\domain\models\notifications\notification** |  |


**Return Value:**





---
### getProjectName



```php
public projects::getProjectName(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getProjectIdAssignedToUser



```php
public projects::getProjectIdAssignedToUser(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### getProjectsAssignedToUser



```php
public projects::getProjectsAssignedToUser(mixed $userId, mixed $projectStatus = &quot;open&quot;, mixed $clientId = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectStatus` | **mixed** |  |
| `clientId` | **mixed** |  |


**Return Value:**





---
### getProjectRole



```php
public projects::getProjectRole(mixed $userId, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### getProjectsUserHasAccessTo



```php
public projects::getProjectsUserHasAccessTo(mixed $userId, mixed $projectStatus = &quot;open&quot;, mixed $clientId = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectStatus` | **mixed** |  |
| `clientId` | **mixed** |  |


**Return Value:**





---
### setCurrentProject



```php
public projects::setCurrentProject(): mixed
```









**Return Value:**





---
### changeCurrentSessionProject



```php
public projects::changeCurrentSessionProject(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### resetCurrentProject



```php
public projects::resetCurrentProject(): mixed
```









**Return Value:**





---
### getUsersAssignedToProject



```php
public projects::getUsersAssignedToProject(mixed $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### isUserAssignedToProject



```php
public projects::isUserAssignedToProject(mixed $userId, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### duplicateProject



```php
public projects::duplicateProject(int $projectId, int $clientId, string $projectName, string $userStartDate, bool $assignSameUsers): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `clientId` | **int** |  |
| `projectName` | **string** |  |
| `userStartDate` | **string** |  |
| `assignSameUsers` | **bool** |  |


**Return Value:**





---
### getProjectUserRelation



```php
public projects::getProjectUserRelation(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### patch



```php
public projects::patch(mixed $id, mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `params` | **mixed** |  |


**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
private static eventhelpers::get_event_context(mixed $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **mixed** |  |


**Return Value:**





---
### set_class_context

Gets the class context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static eventhelpers::get_function_context(mixed $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
