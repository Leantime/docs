---
title: \Leantime\Domain\Projects\Services\Projects
footer: false
---

# Projects

The Projects class is responsible for managing projects and project-related operations.


`\Leantime\Domain\Projects\Services\Projects`




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

Gets the project types.

```php
public Projects::getProjectTypes(): mixed
```









**Return Value:**





---
### getProject

Gets the project with the given ID.

```php
public Projects::getProject(int $id): bool|array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The ID of the project to retrieve. |


**Return Value:**

Returns the project data as an associative array if the project exists, otherwise returns false.



---
### getProjectProgress

Gets the progress of a project.

```php
public Projects::getProjectProgress(int $projectId): array
```

Calculates the completion percentage, estimated completion date,
and planned completion date of the project.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project. |


**Return Value:**

The progress of the project.



---
### getUsersToNotify

Gets an array of user IDs to notify for a given project.

```php
public Projects::getUsersToNotify(int $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project to get users to notify for. |


**Return Value:**

An array of user IDs.



---
### getAllUserInfoToNotify

Gets all the users who need to be notified for a given project.

```php
public Projects::getAllUserInfoToNotify(int $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project. |


**Return Value:**

An array of users to notify.



---
### notifyProjectUsers

Notifies the users associated with a project about a notification.

```php
public Projects::notifyProjectUsers(\Leantime\Domain\Notifications\Models\Notification $notification): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** | The notification object to send. |


**Return Value:**





---
### getProjectName

Retrieves the name of a project based on its ID.

```php
public Projects::getProjectName(int $projectId): string|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project. |


**Return Value:**

The name of the project, or null if the project does not exist.



---
### getProjectIdAssignedToUser

Gets the project IDs assigned to a specified user.

```php
public Projects::getProjectIdAssignedToUser(int $userId): false|array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |


**Return Value:**

The project IDs assigned to the user, or false if no projects are found.



---
### getProjectsAssignedToUser

Gets projects assigned to a user.

```php
public Projects::getProjectsAssignedToUser(int $userId, string $projectStatus = &quot;open&quot;, int|null $clientId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |
| `projectStatus` | **string** | The status of the projects. Defaults to &quot;open&quot;. |
| `clientId` | **int|null** | The ID of the client. Defaults to null. |


**Return Value:**

The projects assigned to the user.



---
### findMyChildren

Finds all children projects for a given parent project.

```php
public Projects::findMyChildren(mixed $currentParentId, array $projects): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `currentParentId` | **mixed** | The ID of the current parent project. |
| `projects` | **array** | An array of projects to search for children. |


**Return Value:**

An array of children projects found.



---
### cleanParentRelationship

Cleans the parent relationship in the given array of projects.

```php
public Projects::cleanParentRelationship(array $projects): array
```

Removes projects that have a parent project that does not exist in the array.
Assigns a parent id of 0 to projects that have no parent.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projects` | **array** | An array of projects |


**Return Value:**

The cleaned array of projects



---
### getProjectHierarchyAssignedToUser

Gets the hierarchy of projects assigned to a user.

```php
public Projects::getProjectHierarchyAssignedToUser(int $userId, string $projectStatus = &quot;open&quot;, int|null $clientId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |
| `projectStatus` | **string** | The project status. Default is &quot;open&quot;. |
| `clientId` | **int|null** | The ID of the client. Default is null. |


**Return Value:**

An array containing the assigned projects, the project hierarchy, and the favorite projects.



---
### getProjectHierarchyAvailableToUser

Gets the project hierarchy available to a user.

```php
public Projects::getProjectHierarchyAvailableToUser(int $userId, string $projectStatus = &quot;open&quot;, int|null $clientId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |
| `projectStatus` | **string** | The status of the projects to retrieve. Defaults to &quot;open&quot;. |
| `clientId` | **int|null** | The ID of the client. Defaults to null. |


**Return Value:**

Returns an array containing the following keys:
- "allAvailableProjects": An array of all projects available to the user.
- "allAvailableProjectsHierarchy": An array representing the project hierarchy available to the user.
- "clients": An array of clients associated with the projects available to the user.



---
### getAllClientsAvailableToUser

Gets all the clients available to a user.

```php
public Projects::getAllClientsAvailableToUser(int $userId, string $projectStatus = &quot;open&quot;): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |
| `projectStatus` | **string** | The status of the projects to be considered. Defaults to &quot;open&quot;. |


**Return Value:**

An array of clients available to the user.



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

Gets the role of a user in a specific project.

```php
public Projects::getProjectRole(mixed $userId, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** | The user ID. |
| `projectId` | **mixed** | The project ID. |


**Return Value:**

The role of the user in the project (string) or an empty string if the user is not assigned to the project or if the project role is not defined.



---
### getProjectsUserHasAccessTo

Gets the projects that a user has access to.

```php
public Projects::getProjectsUserHasAccessTo(int $userId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |


**Return Value:**

The array of projects if the user has access, false otherwise.



---
### setCurrentProject

Sets the current project for the user.

```php
public Projects::setCurrentProject(): void
```

If projectId is present in the query string, it sets the project based on that.
If projectId is not present, it checks if the currentProject is set in the session and sets the project based on that.
If currentProject is not set, it sets the currentProject to 0.
If lastProject setting is set in the user's settings, it sets the project based on that.
If lastProject setting is not set, it sets the currentProject to the first project assigned to the user.
If no projects are assigned to the user, it throws an Exception.







**Return Value:**





---
### getCurrentProjectId

Gets the current project ID.

```php
public Projects::getCurrentProjectId(): int
```

If the session variable "currentProject" is set, it returns its integer value.
Otherwise, it returns 0.







**Return Value:**

The current project ID.



---
### changeCurrentSessionProject

Change the current session project to the specified projectId.

```php
public Projects::changeCurrentSessionProject(mixed $projectId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** | The ID of the project to set as current. |


**Return Value:**

Returns true if the current project is successfully changed, false otherwise.



---
### resetCurrentProject

Resets the current project by clearing all session data related to the project.

```php
public Projects::resetCurrentProject(): void
```









**Return Value:**





---
### getUsersAssignedToProject

Gets all the users assigned to a specific project.

```php
public Projects::getUsersAssignedToProject(int $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project. |


**Return Value:**

An array of users assigned to the project.



---
### isUserAssignedToProject

Checks if a user is assigned to a particular project.

```php
public Projects::isUserAssignedToProject(int $userId, int $projectId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user being checked. |
| `projectId` | **int** | The ID of the project being checked. |


**Return Value:**

Returns true if the user is assigned to the project, false otherwise.



---
### isUserMemberOfProject

Checks if a user is a member of a specific project.

```php
public Projects::isUserMemberOfProject(int $userId, int $projectId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | - The ID of the user. |
| `projectId` | **int** | - The ID of the project. |


**Return Value:**

- Returns true if the user is a member of the project, otherwise false.



---
### addProject

Adds a new project.

```php
public Projects::addProject(array $values): int|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | The project data.<br />- name: string (required) The name of the project.<br />- details: string (optional) Additional details about the project.<br />- clientId: int (required) The ID of the client associated with the project.<br />- hourBudget: int (optional) The hour budget for the project (defaults to 0).<br />- assignedUsers: string (optional) The list of assigned users (defaults to an empty string).<br />- dollarBudget: int (optional) The dollar budget for the project (defaults to 0).<br />- psettings: string (optional) The project settings (defaults to &#039;restricted&#039;).<br />- type: string (fixed value &#039;project&#039;) The type of the project.<br />- start: string&amp;#124;null The start date of the project in user format or null.<br />- end: string&amp;#124;null The end date of the project in user format or null. |


**Return Value:**

The ID of the added project, or false if the project could not be added.



---
### duplicateProject

Duplicates a project with the specified details.

```php
public Projects::duplicateProject(int $projectId, int $clientId, string $projectName, string $userStartDate, bool $assignSameUsers): bool|int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project to duplicate. |
| `clientId` | **int** | The ID of the client for the duplicate project. |
| `projectName` | **string** | The name of the duplicate project. |
| `userStartDate` | **string** | The start date of the duplicate project in the format specified by the language setting. |
| `assignSameUsers` | **bool** | Whether to assign the same users as the original project. |


**Return Value:**

Returns true if the project was successfully duplicated, or the ID of the new project if successful.



---
### duplicateCanvas

Duplicate a canvas from one project to another.

```php
private Projects::duplicateCanvas(string $repository, int $originalProjectId, int $newProjectId, string $canvasTypeName = &#039;&#039;): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `repository` | **string** | The repository class to use for CRUD operations |
| `originalProjectId` | **int** | The ID of the original project |
| `newProjectId` | **int** | The ID of the new project |
| `canvasTypeName` | **string** | The canvas type name (optional) |


**Return Value:**

True if the canvas is duplicated successfully, false otherwise



---
### getProjectUserRelation

Retrieves the relation between a project and its users.

```php
public Projects::getProjectUserRelation(int $id): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The ID of the project. |


**Return Value:**

The relation between the project and its users.



---
### patch

Updates a project with the given parameters.

```php
public Projects::patch(int $id, array $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The ID of the project. |
| `params` | **array** | The parameters to update the project. |


**Return Value:**

Returns true if the project was successfully updated, false otherwise.



---
### getProjectAvatar

Retrieves the avatar for a project.

```php
public Projects::getProjectAvatar(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** | The ID of the project. |


**Return Value:**

The avatar for the project.



---
### setProjectAvatar

Sets the avatar for a project.

```php
public Projects::setProjectAvatar(mixed $file, mixed $project): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **mixed** | The file containing the avatar. |
| `project` | **mixed** | The project object. |


**Return Value:**

Indicates whether the avatar was successfully set.



---
### getAllProjects

Retrieves all projects.

```php
public Projects::getAllProjects(): array
```









**Return Value:**

The projects.



---
### getProjectSetupChecklist

Retrieves the setup checklist for a project.

```php
public Projects::getProjectSetupChecklist(int $projectId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project. |


**Return Value:**

The setup checklist for the project



---
### updateProjectProgress

Updates the progress of a project.

```php
public Projects::updateProjectProgress(string|array $stepsComplete, int $projectId): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `stepsComplete` | **string|array** | The steps completed for the project. |
| `projectId` | **int** | The ID of the project. |


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
| `projects` | **array** | The projects to be edited. |


**Return Value:**

True if the project relations were successfully edited, false otherwise.

@api



---
### getProjectIdbyName

Retrieves the ID of a project by its name.

```php
public Projects::getProjectIdbyName(array $allProjects, string $projectName): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `allProjects` | **array** | The array of all projects. |
| `projectName` | **string** | The name of the project to retrieve the ID for. |


**Return Value:**

The ID of the project if found, or false if not found.

@api



---
### updateProjectSorting

Updates the sorting of multiple projects.

```php
public Projects::updateProjectSorting(array $params): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | The array containing the project IDs as keys and their corresponding sort index as values (ticketId: sortIndex). |


**Return Value:**

Returns true if the sorting update was successful, false otherwise.



---
### editProject

Edits a project.

```php
public Projects::editProject(mixed $values, int $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** | The values to be updated in the project. |
| `id` | **int** | The ID of the project to be edited. |


**Return Value:**

@api



---
### updateProjectStatusAndSorting

Updates the status and sorting of projects.

```php
public Projects::updateProjectStatusAndSorting(array $params, null $handler = null): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | An associative array representing the project status and sorting.<br />The key is the status and the value is the serialized project list. |
| `handler` | **null** | Optional parameter for handling the project update process. |


**Return Value:**

Returns true if the update process is successful, false otherwise.



---
### getClientManagerProjects

Retrieves the projects for a client manager.

```php
public Projects::getClientManagerProjects(int $userId, int $clientId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |
| `clientId` | **int** | The ID of the client. |


**Return Value:**

The projects for the client manager.

@api



---
### getAll

Gets all the projects for the current user.

```php
public Projects::getAll(bool $showClosedProjects = false): array
```

By default, closed projects are not included.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `showClosedProjects` | **bool** | (optional) Set to true to include closed projects. |


**Return Value:**

Returns an array of projects.



---
### findProject

Finds projects based on a search term.

```php
public Projects::findProject(string $term = &quot;&quot;): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `term` | **string** | The search term (optional) |


**Return Value:**

The filtered projects that match the search term



---
### pollForNewProjects

Polls for new projects for the current user session.

```php
public Projects::pollForNewProjects(): array
```

Retrieves all projects for the current user and prepares the dates for API response.







**Return Value:**

An array of projects with prepared dates for API response.



---
### pollForUpdatedProjects

Polls for updated projects.

```php
public Projects::pollForUpdatedProjects(): array
```

Retrieves all the projects the current user has access to and prepares them for API response.
Adds the modified timestamp to the project ID for tracking updates.







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
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
