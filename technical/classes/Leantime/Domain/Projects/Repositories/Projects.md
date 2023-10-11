---
title: \Leantime\Domain\Projects\Repositories\Projects
footer: false
---

# Projects





* Full name: `\Leantime\Domain\Projects\Repositories\Projects`



## Methods

### __construct



```php
public Projects::__construct(\Leantime\Core\Environment $config, \Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Environment** |  |
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getAll

getAll - get all projects open and closed

```php
public Projects::getAll(bool $showClosedProjects = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `showClosedProjects` | **bool** |  |


**Return Value:**





---
### getUsersAssignedToProject

getUsersAssignedToProject - get one project

```php
public Projects::getUsersAssignedToProject( $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getUserProjects



```php
public Projects::getUserProjects(int $userId, string $projectStatus = &quot;all&quot;, int|null $clientId = null, string $accessStatus = &quot;assigned&quot;): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `projectStatus` | **string** |  |
| `clientId` | **int|null** |  |
| `accessStatus` | **string** |  |


**Return Value:**





---
### getProjectsUserHasAccessTo



```php
public Projects::getProjectsUserHasAccessTo( $userId, string $status = &quot;all&quot;, string $clientId = &quot;&quot;): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `status` | **string** |  |
| `clientId` | **string** |  |


**Return Value:**





---
### getNumberOfProjects



```php
public Projects::getNumberOfProjects( $clientId = null,  $type = null): int|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **** |  |
| `type` | **** |  |


**Return Value:**





---
### getClientProjects



```php
public Projects::getClientProjects( $clientId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **** |  |


**Return Value:**





---
### getProjectTickets



```php
public Projects::getProjectTickets( $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getProject

getProject - get one project

```php
public Projects::getProject( $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getProjectBookedHours



```php
public Projects::getProjectBookedHours( $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### recursive_array_search



```php
public Projects::recursive_array_search( $needle,  $haystack): false|int|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `needle` | **** |  |
| `haystack` | **** |  |


**Return Value:**





---
### getProjectBookedHoursArray



```php
public Projects::getProjectBookedHoursArray( $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getProjectBookedDollars



```php
public Projects::getProjectBookedDollars( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### addProject

addProject - add a project to a client

```php
public Projects::addProject(bool|array $values): int|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **bool|array** |  |


**Return Value:**

returns new project id on success, false on failure.



---
### editProject

editProject - edit a project

```php
public Projects::editProject(array $values,  $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `id` | **** |  |


**Return Value:**





---
### editProjectRelations

editProject - edit a project

```php
public Projects::editProjectRelations(array $values,  $projectId): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `projectId` | **** |  |


**Return Value:**





---
### deleteProject

deleteProject - delete a project

```php
public Projects::deleteProject( $id): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### hasTickets

hasTickets - check if there are Tickets related to a project

```php
public Projects::hasTickets( $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getUserProjectRelation

getUserProjectRelation - get all projects related to a user

```php
public Projects::getUserProjectRelation( $id, null $projectId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `projectId` | **null** |  |


**Return Value:**





---
### isUserAssignedToProject



```php
public Projects::isUserAssignedToProject( $userId,  $projectId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectId` | **** |  |


**Return Value:**





---
### isUserMemberOfProject



```php
public Projects::isUserMemberOfProject( $userId,  $projectId): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectId` | **** |  |


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
### editUserProjectRelations

getUserProjectRelation - get all projects related to a user

```php
public Projects::editUserProjectRelations( $id,  $projects): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `projects` | **** |  |


**Return Value:**





---
### deleteProjectRelation



```php
public Projects::deleteProjectRelation( $userId,  $projectId): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectId` | **** |  |


**Return Value:**





---
### deleteAllProjectRelations



```php
public Projects::deleteAllProjectRelations( $userId): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |


**Return Value:**





---
### deleteAllUserRelations



```php
public Projects::deleteAllUserRelations( $projectId): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### addProjectRelation



```php
public Projects::addProjectRelation( $userId,  $projectId,  $projectRole): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectId` | **** |  |
| `projectRole` | **** |  |


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
### setPicture

setPicture - set the profile picture for an individual

```php
public Projects::setPicture(array $_FILE,  $id): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `_FILE` | **array** |  |
| `id` | **** |  |


**Return Value:**





---
### getProjectAvatar



```php
public Projects::getProjectAvatar( $id): string[]|\SVG\SVG
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


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
