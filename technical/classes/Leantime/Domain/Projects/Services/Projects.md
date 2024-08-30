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
public Projects::getProject(int $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


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
public Projects::getProjectsAssignedToUser( $userId, string $projectStatus = &quot;open&quot;,  $clientId = null): array
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
### getAllClientsAvailableToUser

Gets all the clients available to a user.

```php
public Projects::getAllClientsAvailableToUser(int $userId, string $projectStatus = &quot;open&quot;): array
```

Clients are determined by the projects
the user is assigned to.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |
| `projectStatus` | **string** | (optional) The status of the projects to consider. Defaults to &quot;open&quot;. |


**Return Value:**

An array of client objects.



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

Sets the current project in the session.

```php
public Projects::setCurrentProject(): void
```

If a project ID is provided in the query string, it is used to set the current project.
If no project ID is provided, the last visited project or the first assigned project is set as the current project.
If no project is found, an exception is thrown.







**Return Value:**





---
### getCurrentProjectId

Get current project id or 0 if no current project is set.

```php
public Projects::getCurrentProjectId(): int
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
### addProject

Adds a new project to the system.

```php
public Projects::addProject(array $values): int|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | An associative array containing the project details.<br />- name: The name of the project.<br />- details: Additional details of the project (optional, default: &#039;&#039;).<br />- clientId: The ID of the client associated with the project.<br />- hourBudget: The hour budget for the project (optional, default: 0).<br />- assignedUsers: Comma-separated list of user IDs assigned to the project (optional, default: &#039;&#039;).<br />- dollarBudget: The dollar budget for the project (optional, default: 0).<br />- psettings: The settings for the project (optional, default: &#039;restricted&#039;).<br />- type: The type of the project (optional, default: &#039;project&#039;).<br />- start: The start date of the project in user format (YYYY-MM-DD).<br />- end: The end date of the project in user format (YYYY-MM-DD). |


**Return Value:**

The ID of the newly added project



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
### getAllProjects



```php
public Projects::getAllProjects(): mixed
```









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
### editUserProjectRelations

Edits the project relations of a user.

```php
public Projects::editUserProjectRelations(int $id, array $projects): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The ID of the user. |
| `projects` | **array** | An array of project IDs to be assigned to the user. |


**Return Value:**

Returns true if the project relations were successfully edited, false otherwise.



---
### getProjectIdbyName

Returns the project ID by its name from the given array of projects.

```php
public Projects::getProjectIdbyName(array $allProjects, string $projectName): int|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `allProjects` | **array** | An array of projects. |
| `projectName` | **string** | The name of the project to search for. |


**Return Value:**

The ID of the project if found, or false if not found.



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
### editProject

Edits a project with the given values.

```php
public Projects::editProject(mixed $values, int $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** | The values to update the project with. |
| `id` | **int** | The ID of the project to edit. |


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
### findProject



```php
public Projects::findProject(string $term = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `term` | **string** |  |


**Return Value:**





---
### pollForNewProjects



```php
public Projects::pollForNewProjects(): mixed
```









**Return Value:**





---
### pollForUpdatedProjects



```php
public Projects::pollForUpdatedProjects(): array
```









**Return Value:**





---
### prepareDatesForApiResponse



```php
private Projects::prepareDatesForApiResponse(mixed $project): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `project` | **mixed** |  |


**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static DispatchesEvents::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
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
public static DispatchesEvents::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
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
protected static DispatchesEvents::get_event_context( $function): string
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
private static DispatchesEvents::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static DispatchesEvents::get_function_context(?int $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **?int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
