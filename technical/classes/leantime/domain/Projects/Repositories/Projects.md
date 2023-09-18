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
public Projects::getAll(mixed $showClosedProjects = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `showClosedProjects` | **mixed** |  |


**Return Value:**





---
### getNumberOfProjects



```php
public Projects::getNumberOfProjects(mixed $clientId = null, mixed $type = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **mixed** |  |
| `type` | **mixed** |  |


**Return Value:**





---
### getUserProjects



```php
public Projects::getUserProjects(mixed $userId, mixed $status = &quot;all&quot;, mixed $clientId = &quot;&quot;, mixed $hierarchy = array()): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `status` | **mixed** |  |
| `clientId` | **mixed** |  |
| `hierarchy` | **mixed** |  |


**Return Value:**





---
### getProjectsUserHasAccessTo



```php
public Projects::getProjectsUserHasAccessTo(mixed $userId, mixed $status = &quot;all&quot;, mixed $clientId = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `status` | **mixed** |  |
| `clientId` | **mixed** |  |


**Return Value:**





---
### getClientProjects



```php
public Projects::getClientProjects(mixed $clientId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **mixed** |  |


**Return Value:**





---
### getProjectTickets



```php
public Projects::getProjectTickets(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getProject

getProject - get one project

```php
public Projects::getProject( $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getUsersAssignedToProject

getProject - get one project

```php
public Projects::getUsersAssignedToProject( $id): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getProjectBookedHours



```php
public Projects::getProjectBookedHours(mixed $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### recursive_array_search



```php
public Projects::recursive_array_search(mixed $needle, mixed $haystack): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `needle` | **mixed** |  |
| `haystack` | **mixed** |  |


**Return Value:**





---
### getProjectBookedHoursArray



```php
public Projects::getProjectBookedHoursArray(mixed $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getProjectBookedDollars



```php
public Projects::getProjectBookedDollars(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addProject

addProject - add a project to a client

```php
public Projects::addProject(array|bool $values): int|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array|bool** |  |


**Return Value:**

returns new project id on success, false on failure.



---
### editProject

editProject - edit a project

```php
public Projects::editProject(array $values,  $id): mixed
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
public Projects::editProjectRelations(array $values, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### deleteProject

deleteProject - delete a project

```php
public Projects::deleteProject( $id): mixed
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
public Projects::getUserProjectRelation( $id, mixed $projectId = null): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### isUserAssignedToProject



```php
public Projects::isUserAssignedToProject(mixed $userId, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### isUserMemberOfProject



```php
public Projects::isUserMemberOfProject(mixed $userId, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |


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
### editUserProjectRelations

getUserProjectRelation - get all projects related to a user

```php
public Projects::editUserProjectRelations( $id, mixed $projects): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `projects` | **mixed** |  |


**Return Value:**





---
### deleteProjectRelation



```php
public Projects::deleteProjectRelation(mixed $userId, mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |


**Return Value:**





---
### deleteAllProjectRelations



```php
public Projects::deleteAllProjectRelations(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### deleteAllUserRelations



```php
public Projects::deleteAllUserRelations(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### addProjectRelation



```php
public Projects::addProjectRelation(mixed $userId, mixed $projectId, mixed $projectRole): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |
| `projectRole` | **mixed** |  |


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
### setPicture

setPicture - set the profile picture for an individual

```php
public Projects::setPicture(mixed $_FILE, mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `_FILE` | **mixed** |  |
| `id` | **mixed** |  |


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
