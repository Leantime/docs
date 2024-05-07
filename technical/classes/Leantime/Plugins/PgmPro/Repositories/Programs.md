---
title: \Leantime\Plugins\PgmPro\Repositories\Programs
footer: false
---

# Programs





* Full name: `\Leantime\Plugins\PgmPro\Repositories\Programs`



## Methods

### __construct



```php
public Programs::__construct(\Leantime\Core\Environment $config, \Leantime\Core\Db $db, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Environment** |  |
| `db` | **\Leantime\Core\Db** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### getStateLabels



```php
public Programs::getStateLabels(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getStatusList



```php
public Programs::getStatusList(): mixed
```









**Return Value:**





---
### getAll

getAll - get all projects open and closed

```php
public Programs::getAll(mixed $showClosedProjects = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `showClosedProjects` | **mixed** |  |


**Return Value:**





---
### getAllProgramProjects

getAll - get all projects open and closed

```php
public Programs::getAllProgramProjects(mixed $programId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `programId` | **mixed** |  |


**Return Value:**





---
### getNumberOfProjects



```php
public Programs::getNumberOfProjects(mixed $clientId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **mixed** |  |


**Return Value:**





---
### getUserPrograms



```php
public Programs::getUserPrograms(mixed $userId, mixed $status = &quot;all&quot;, mixed $clientId = &quot;&quot;): mixed
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
public Programs::getProjectsUserHasAccessTo(mixed $userId, mixed $status = &quot;all&quot;, mixed $clientId = &quot;&quot;): mixed
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
public Programs::getClientProjects(mixed $clientId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **mixed** |  |


**Return Value:**





---
### getProjectTickets



```php
public Programs::getProjectTickets(mixed $projectId): mixed
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
public Programs::getProject( $id): mixed
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
public Programs::getUsersAssignedToProject( $id): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getProjectBookedHours



```php
public Programs::getProjectBookedHours(mixed $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### recursive_array_search



```php
public Programs::recursive_array_search(mixed $needle, mixed $haystack): mixed
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
public Programs::getProjectBookedHoursArray(mixed $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getProjectBookedDollars



```php
public Programs::getProjectBookedDollars(mixed $id): mixed
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
public Programs::addProject(array|bool $values): int|bool
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
public Programs::editProject(array $values,  $id): mixed
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
public Programs::editProjectRelations(array $values, mixed $projectId): mixed
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
public Programs::deleteProject( $id): mixed
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
public Programs::hasTickets( $id): bool
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
public Programs::getUserProjectRelation( $id, mixed $projectId = null): array
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
public Programs::isUserAssignedToProject(mixed $userId, mixed $projectId): mixed
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
public Programs::getProjectUserRelation(mixed $id): mixed
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
public Programs::editUserProjectRelations( $id, mixed $projects): bool
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
public Programs::deleteProjectRelation(mixed $userId, mixed $projectId): mixed
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
public Programs::deleteAllProjectRelations(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### deleteAllUserRelations



```php
public Programs::deleteAllUserRelations(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### addProjectRelation



```php
public Programs::addProjectRelation(mixed $userId, mixed $projectId, mixed $projectRole): mixed
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
public Programs::patch(mixed $id, mixed $params): mixed
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
public Programs::setPicture(mixed $_FILE, mixed $id): mixed
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
public Programs::getProjectAvatar(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
