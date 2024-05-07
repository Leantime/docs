---
title: \Leantime\Plugins\StrategyPro\Repositories\StrategyPro
footer: false
---

# StrategyPro





* Full name: `\Leantime\Plugins\StrategyPro\Repositories\StrategyPro`



## Methods

### __construct



```php
public StrategyPro::__construct(\Leantime\Core\Environment $config, \Leantime\Core\Db $db, \Leantime\Core\Language $language): mixed
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
public StrategyPro::getStateLabels(mixed $projectId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### getStatusList



```php
public StrategyPro::getStatusList(): mixed
```









**Return Value:**





---
### getAll

getAll - get all projects open and closed

```php
public StrategyPro::getAll(mixed $showClosedProjects = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `showClosedProjects` | **mixed** |  |


**Return Value:**





---
### getAllStrategyProjects

getAll - get all projects open and closed

```php
public StrategyPro::getAllStrategyProjects(mixed $programId): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `programId` | **mixed** |  |


**Return Value:**





---
### getNumberOfProjects



```php
public StrategyPro::getNumberOfProjects(mixed $clientId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **mixed** |  |


**Return Value:**





---
### getUserPrograms



```php
public StrategyPro::getUserPrograms(mixed $userId, mixed $status = &quot;all&quot;, mixed $clientId = &quot;&quot;): mixed
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
public StrategyPro::getProjectsUserHasAccessTo(mixed $userId, mixed $status = &quot;all&quot;, mixed $clientId = &quot;&quot;): mixed
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
public StrategyPro::getClientProjects(mixed $clientId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **mixed** |  |


**Return Value:**





---
### getProjectTickets



```php
public StrategyPro::getProjectTickets(mixed $projectId): mixed
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
public StrategyPro::getProject( $id): mixed
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
public StrategyPro::getUsersAssignedToProject( $id): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Return Value:**





---
### getProjectBookedHours



```php
public StrategyPro::getProjectBookedHours(mixed $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### recursive_array_search



```php
public StrategyPro::recursive_array_search(mixed $needle, mixed $haystack): mixed
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
public StrategyPro::getProjectBookedHoursArray(mixed $id): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getProjectBookedDollars



```php
public StrategyPro::getProjectBookedDollars(mixed $id): mixed
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
public StrategyPro::addProject(array|bool $values): int|bool
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
public StrategyPro::editProject(array $values,  $id): mixed
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
public StrategyPro::editProjectRelations(array $values, mixed $projectId): mixed
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
public StrategyPro::deleteProject( $id): mixed
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
public StrategyPro::hasTickets( $id): bool
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
public StrategyPro::getUserProjectRelation( $id, mixed $projectId = null): array
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
public StrategyPro::isUserAssignedToProject(mixed $userId, mixed $projectId): mixed
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
public StrategyPro::getProjectUserRelation(mixed $id): mixed
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
public StrategyPro::editUserProjectRelations( $id, mixed $projects): bool
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
public StrategyPro::deleteProjectRelation(mixed $userId, mixed $projectId): mixed
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
public StrategyPro::deleteAllProjectRelations(mixed $userId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


**Return Value:**





---
### deleteAllUserRelations



```php
public StrategyPro::deleteAllUserRelations(mixed $projectId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |


**Return Value:**





---
### addProjectRelation



```php
public StrategyPro::addProjectRelation(mixed $userId, mixed $projectId, mixed $projectRole): mixed
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
public StrategyPro::patch(mixed $id, mixed $params): mixed
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
public StrategyPro::setPicture(mixed $_FILE, mixed $id): mixed
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
public StrategyPro::getProjectAvatar(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
