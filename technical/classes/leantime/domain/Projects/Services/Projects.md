---
title: \Leantime\Domain\Projects\Services\Projects
footer: false
---

# Projects





* Full name: `\Leantime\Domain\Projects\Services\Projects`



## Methods

### __construct



```php
public Projects::__construct(\Leantime\Core\Template $tpl, \Leantime\Domain\Projects\Repositories\Projects $projectRepository, \Leantime\Domain\Tickets\Repositories\Tickets $ticketRepository, \Leantime\Domain\Setting\Repositories\Setting $settingsRepo, \Leantime\Domain\Files\Repositories\Files $filesRepository, \Leantime\Core\Language $language, \Leantime\Domain\Notifications\Services\Messengers $messengerService, \Leantime\Domain\Notifications\Services\Notifications $notificationService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `tpl` | **\Leantime\Core\Template** |  |
| `projectRepository` | **\Leantime\Domain\Projects\Repositories\Projects** |  |
| `ticketRepository` | **\Leantime\Domain\Tickets\Repositories\Tickets** |  |
| `settingsRepo` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `filesRepository` | **\Leantime\Domain\Files\Repositories\Files** |  |
| `language` | **\Leantime\Core\Language** |  |
| `messengerService` | **\Leantime\Domain\Notifications\Services\Messengers** |  |
| `notificationService` | **\Leantime\Domain\Notifications\Services\Notifications** |  |


**Return Value:**





---
### getProjectTypes



```php
public Projects::getProjectTypes(): mixed
```









**Return Value:**





---
### getProject



```php
public Projects::getProject(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getProjectProgress



```php
public Projects::getProjectProgress(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getUsersToNotify



```php
public Projects::getUsersToNotify(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getAllUserInfoToNotify



```php
public Projects::getAllUserInfoToNotify(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### notifyProjectUsers



```php
public Projects::notifyProjectUsers(\Leantime\Domain\Notifications\Models\Notification $notification): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


**Return Value:**





---
### getProjectName



```php
public Projects::getProjectName(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getProjectIdAssignedToUser



```php
public Projects::getProjectIdAssignedToUser(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### getProjectsAssignedToUser



```php
public Projects::getProjectsAssignedToUser(mixed $userId, mixed $projectStatus = &quot;open&quot;, mixed $clientId = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectStatus` | **mixed** |  |
| `clientId` | **mixed** |  |


**Return Value:**





---
### getProjectHierarchyAssignedToUser



```php
public Projects::getProjectHierarchyAssignedToUser(mixed $userId, mixed $projectStatus = &quot;open&quot;, mixed $clientId = &quot;&quot;): mixed
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
public Projects::getProjectRole(mixed $userId, mixed $projectId): mixed
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
public Projects::getProjectsUserHasAccessTo(mixed $userId, mixed $projectStatus = &quot;open&quot;, mixed $clientId = &quot;&quot;): mixed
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
public Projects::setCurrentProject(): mixed
```









**Return Value:**





---
### changeCurrentSessionProject



```php
public Projects::changeCurrentSessionProject(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### resetCurrentProject



```php
public Projects::resetCurrentProject(): mixed
```









**Return Value:**





---
### getUsersAssignedToProject



```php
public Projects::getUsersAssignedToProject(mixed $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### isUserAssignedToProject



```php
public Projects::isUserAssignedToProject(int $userId, int $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `projectId` | **int** |  |


**Return Value:**





---
### isUserMemberOfProject

Checks if a user is directly assigned to a project.

```php
public Projects::isUserMemberOfProject( $userId,  $projectId): bool
```

Client assignments or projects available to entire organization are not considered true.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectId` | **** |  |


**Return Value:**





---
### duplicateProject



```php
public Projects::duplicateProject(int $projectId, int $clientId, string $projectName, string $userStartDate, bool $assignSameUsers): mixed
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
### duplicateCanvas



```php
private Projects::duplicateCanvas(string $repository, int $originalProjectId, int $newProjectId, string $canvasTypeName = &#039;&#039;): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `repository` | **string** |  |
| `originalProjectId` | **int** |  |
| `newProjectId` | **int** |  |
| `canvasTypeName` | **string** |  |


**Return Value:**





---
### getProjectUserRelation



```php
public Projects::getProjectUserRelation(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### patch



```php
public Projects::patch(mixed $id, mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `params` | **mixed** |  |


**Return Value:**





---
### getProjectAvatar



```php
public Projects::getProjectAvatar(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### setProjectAvatar



```php
public Projects::setProjectAvatar(mixed $file, mixed $project): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **mixed** |  |
| `project` | **mixed** |  |


**Return Value:**





---
### getProjectSetupChecklist



```php
public Projects::getProjectSetupChecklist(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### updateProjectProgress



```php
public Projects::updateProjectProgress(mixed $stepsComplete, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `stepsComplete` | **mixed** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### updateProjectSorting



```php
public Projects::updateProjectSorting(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### updateProjectStatusAndSorting



```php
public Projects::updateProjectStatusAndSorting(mixed $params, mixed $handler = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |
| `handler` | **mixed** |  |


**Return Value:**





---
### getClientManagerProjects

Gets all the projects a company manager has access to.

```php
public Projects::getClientManagerProjects(int $userId, int $clientId): array
```

Includes all projects within a client + all assigned projects






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `clientId` | **int** |  |


**Return Value:**





---
### getAll



```php
public Projects::getAll(bool $showClosedProjects = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `showClosedProjects` | **bool** |  |


**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int $function = null): void
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
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int $function = null): mixed
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
private static Eventhelpers::get_event_context(mixed $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **mixed** |  |


**Return Value:**





---
### set_class_context

Gets the class Context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static Eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static Eventhelpers::get_function_context(mixed $functionInt = null): string
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
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
