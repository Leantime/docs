---
title: \leantime\domain\repositories\projects
footer: false
---

# projects





* Full name: `\leantime\domain\repositories\projects`



## Methods

### __construct



```php
public projects::__construct(): mixed
```









**Return Value:**





---
### getAll

getAll - get all projects open and closed

```php
public projects::getAll(mixed $showClosedProjects = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `showClosedProjects` | **mixed** |  |


**Return Value:**





---
### getNumberOfProjects



```php
public projects::getNumberOfProjects(mixed $clientId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **mixed** |  |


**Return Value:**





---
### getUserProjects



```php
public projects::getUserProjects(mixed $userId, mixed $status = &quot;all&quot;, mixed $clientId = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `status` | **mixed** |  |
| `clientId` | **mixed** |  |


**Return Value:**





---
### getProjectsUserHasAccessTo



```php
public projects::getProjectsUserHasAccessTo(mixed $userId, mixed $status = &quot;all&quot;, mixed $clientId = &quot;&quot;): mixed
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
public projects::getClientProjects(mixed $clientId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **mixed** |  |


**Return Value:**





---
### getProjectTickets



```php
public projects::getProjectTickets(mixed $projectId): mixed
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
public projects::getProject( $id): mixed
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
public projects::getUsersAssignedToProject( $id): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getProjectBookedHours



```php
public projects::getProjectBookedHours(mixed $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### recursive_array_search



```php
public projects::recursive_array_search(mixed $needle, mixed $haystack): mixed
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
public projects::getProjectBookedHoursArray(mixed $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getProjectBookedDollars



```php
public projects::getProjectBookedDollars(mixed $id): mixed
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
public projects::addProject(array|bool $values): int|bool
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
public projects::editProject(array $values,  $id): mixed
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
public projects::editProjectRelations(array $values, mixed $projectId): mixed
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
public projects::deleteProject( $id): mixed
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
public projects::hasTickets( $id): bool
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
public projects::getUserProjectRelation( $id, mixed $projectId = null): array
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
public projects::isUserAssignedToProject(mixed $userId, mixed $projectId): mixed
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
public projects::getProjectUserRelation(mixed $id): mixed
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
public projects::editUserProjectRelations( $id, mixed $projects): bool
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
public projects::deleteProjectRelation(mixed $userId, mixed $projectId): mixed
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
public projects::deleteAllProjectRelations(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### deleteAllUserRelations



```php
public projects::deleteAllUserRelations(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### addProjectRelation



```php
public projects::addProjectRelation(mixed $userId, mixed $projectId, mixed $projectRole): mixed
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
public projects::patch(mixed $id, mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |
| `params` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
