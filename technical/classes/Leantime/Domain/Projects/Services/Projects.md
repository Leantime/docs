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
public Projects::getProject( $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getProjectProgress



```php
public Projects::getProjectProgress( $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getUsersToNotify



```php
public Projects::getUsersToNotify( $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getAllUserInfoToNotify



```php
public Projects::getAllUserInfoToNotify( $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### notifyProjectUsers



```php
public Projects::notifyProjectUsers(\Leantime\Domain\Notifications\Models\Notification $notification): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


**Return Value:**





---
### getProjectName



```php
public Projects::getProjectName( $projectId): mixed|void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getProjectIdAssignedToUser



```php
public Projects::getProjectIdAssignedToUser( $userId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |


**Return Value:**





---
### getProjectsAssignedToUser



```php
public Projects::getProjectsAssignedToUser( $userId, string $projectStatus = &quot;open&quot;,  $clientId = null): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectStatus` | **string** |  |
| `clientId` | **** |  |


**Return Value:**





---
### findMyChildren



```php
public Projects::findMyChildren( $currentParentId, array $projects): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `currentParentId` | **** |  |
| `projects` | **array** |  |


**Return Value:**





---
### cleanParentRelationship

Ensures all projects have a valid parent. If not the parent is removed.

```php
public Projects::cleanParentRelationship(array $projects): array
```

This way a user can still access a project even if they don't have access to the child.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projects` | **array** |  |


**Return Value:**





---
### getProjectHierarchyAssignedToUser



```php
public Projects::getProjectHierarchyAssignedToUser( $userId, string $projectStatus = &quot;open&quot;,  $clientId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectStatus` | **string** |  |
| `clientId` | **** |  |


**Return Value:**





---
### getProjectHierarchyAvailableToUser



```php
public Projects::getProjectHierarchyAvailableToUser( $userId, string $projectStatus = &quot;open&quot;,  $clientId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectStatus` | **string** |  |
| `clientId` | **** |  |


**Return Value:**





---
### getClientsFromProjectList



```php
public Projects::getClientsFromProjectList(array $projects): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projects` | **array** |  |


**Return Value:**





---
### getProjectRole



```php
public Projects::getProjectRole( $userId,  $projectId): mixed|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectId` | **** |  |


**Return Value:**





---
### getProjectsUserHasAccessTo



```php
public Projects::getProjectsUserHasAccessTo( $userId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |


**Return Value:**





---
### setCurrentProject



```php
public Projects::setCurrentProject(): void
```









**Return Value:**





---
### changeCurrentSessionProject



```php
public Projects::changeCurrentSessionProject( $projectId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### resetCurrentProject



```php
public Projects::resetCurrentProject(): void
```









**Return Value:**





---
### getUsersAssignedToProject



```php
public Projects::getUsersAssignedToProject( $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### isUserAssignedToProject



```php
public Projects::isUserAssignedToProject(int $userId, int $projectId): bool
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
public Projects::isUserMemberOfProject(int $userId, int $projectId): bool
```

Client assignments or projects available to entire organization are not considered true.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `projectId` | **int** |  |


**Return Value:**





---
### duplicateProject



```php
public Projects::duplicateProject(int $projectId, int $clientId, string $projectName, string $userStartDate, bool $assignSameUsers): bool|int
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
public Projects::getProjectUserRelation( $id): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### patch



```php
public Projects::patch( $id,  $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `params` | **** |  |


**Return Value:**





---
### getProjectAvatar



```php
public Projects::getProjectAvatar( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### setProjectAvatar



```php
public Projects::setProjectAvatar( $file,  $project): null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **** |  |
| `project` | **** |  |


**Return Value:**





---
### getProjectSetupChecklist



```php
public Projects::getProjectSetupChecklist( $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### updateProjectProgress



```php
public Projects::updateProjectProgress( $stepsComplete,  $projectId): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `stepsComplete` | **** |  |
| `projectId` | **** |  |


**Return Value:**





---
### updateProjectSorting



```php
public Projects::updateProjectSorting( $params): false|void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Return Value:**





---
### updateProjectStatusAndSorting



```php
public Projects::updateProjectStatusAndSorting( $params,  $handler = null): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |
| `handler` | **** |  |


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
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
private static Eventhelpers::get_event_context( $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **** |  |


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
private static Eventhelpers::get_function_context(null $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **null** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
