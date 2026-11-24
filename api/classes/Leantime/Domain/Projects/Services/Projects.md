---
title: \Leantime\Domain\Projects\Services\Projects
footer: false
---

# Projects

Projects service (the company project god-service) + the engine's project-access provider.

`leantime.rpc.Projects.Projects.`


## Available Methods
### `leantime.rpc.Projects.Projects.getProjectTypes`

Gets the project types.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectTypes",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Projects.Projects.getProject`

Gets the project with the given ID.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The ID of the project to retrieve. |


**Returns:**
Returns the project data as an associative array if the project exists and is visible, otherwise false.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|array
}
```



---
### `leantime.rpc.Projects.Projects.getProjectProgress`

Gets the progress of a project.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectProgress",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project. |


**Returns:**
The progress of the project.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getUsersToNotify`

Gets an array of user IDs to notify for a given project.

```json
{
    "method": "leantime.rpc.Projects.Projects.getUsersToNotify",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project to get users to notify for. |


**Returns:**
An array of user IDs.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getAllUserInfoToNotify`

Gets all the users who need to be notified for a given project.

```json
{
    "method": "leantime.rpc.Projects.Projects.getAllUserInfoToNotify",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project. |


**Returns:**
An array of users to notify.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getMuteCountForProject`

Gets the count of users who have muted notifications for a specific project.

```json
{
    "method": "leantime.rpc.Projects.Projects.getMuteCountForProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project ID. |


**Returns:**
Number of users who have muted this project.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Projects.Projects.getProjectName`

Retrieves the name of a project based on its ID.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectName",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project. |


**Returns:**
The name of the project, or null if the project does not exist.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string|null
}
```



---
### `leantime.rpc.Projects.Projects.getProjectIdAssignedToUser`

Gets the project IDs assigned to a specified user.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectIdAssignedToUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |


**Returns:**
The project IDs assigned to the user, or false if no projects are found.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|array
}
```



---
### `leantime.rpc.Projects.Projects.getProjectsAssignedToUser`

Gets projects assigned to a user.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectsAssignedToUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "projectStatus": string,
        "clientId": int|null,
        "projectTypes": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |
| `projectStatus` | **string** | The status of the projects. Defaults to &quot;open&quot;. |
| `clientId` | **int\|null** | The ID of the client. Defaults to null. |
| `projectTypes` | **string** |  |


**Returns:**
The projects assigned to the user.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.findMyChildren`

Finds all children projects for a given parent project.

```json
{
    "method": "leantime.rpc.Projects.Projects.findMyChildren",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "currentParentId": mixed,
        "projects": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `currentParentId` | **mixed** | The ID of the current parent project. |
| `projects` | **array** | An array of projects to search for children. |


**Returns:**
An array of children projects found.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.cleanParentRelationship`

Cleans the parent relationship in the given array of projects.

```json
{
    "method": "leantime.rpc.Projects.Projects.cleanParentRelationship",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projects": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projects` | **array** | An array of projects |


**Returns:**
The cleaned array of projects
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getProjectHierarchyAssignedToUser`

Gets the hierarchy of projects assigned to a user.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectHierarchyAssignedToUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "projectStatus": string,
        "clientId": int|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |
| `projectStatus` | **string** | The project status. Default is &quot;open&quot;. |
| `clientId` | **int\|null** | The ID of the client. Default is null. |


**Returns:**
An array containing the assigned projects, the project hierarchy, and the favorite projects.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getProjectHierarchyAvailableToUser`

Gets the project hierarchy available to a user.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectHierarchyAvailableToUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "projectStatus": string,
        "clientId": int|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |
| `projectStatus` | **string** | The status of the projects to retrieve. Defaults to &quot;open&quot;. |
| `clientId` | **int\|null** | The ID of the client. Defaults to null. |


**Returns:**
Returns an array containing the following keys:
- "allAvailableProjects": An array of all projects available to the user.
- "allAvailableProjectsHierarchy": An array representing the project hierarchy available to the user.
- "clients": An array of clients associated with the projects available to the user.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getAllClientsAvailableToUser`

Gets all the clients available to a user.

```json
{
    "method": "leantime.rpc.Projects.Projects.getAllClientsAvailableToUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "projectStatus": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |
| `projectStatus` | **string** | The status of the projects to be considered. Defaults to &quot;open&quot;. |


**Returns:**
An array of clients available to the user.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getProjectRole`

Gets the role of a user in a specific project.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectRole",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user ID. |
| `projectId` | **int** | The project ID. |


**Returns:**
The stored project-role key, or an empty string when the user has no
               explicit role in the project (or is not assigned to it).

Non-admins may only resolve their OWN role (the userId is pinned to the session user);
recursion-safe — a global role check only, never authorize()/can().
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---
### `leantime.rpc.Projects.Projects.getAccessibleProjectIds`

Ids of the projects a user can access, for scoping other queries.

```json
{
    "method": "leantime.rpc.Projects.Projects.getAccessibleProjectIds",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int|null,
        "projectStatus": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int\|null** | Optional. If omitted or 0, resolves to the session user. |
| `projectStatus` | **string** | &#039;open&#039; (default), &#039;closed&#039; or &#039;all&#039;. |


**Returns:**
Accessible project ids; empty when the user can access nothing.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int[]
}
```



---
### `leantime.rpc.Projects.Projects.getProjectsUserHasAccessTo`

Gets the projects that a user has access to.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectsUserHasAccessTo",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int\|null** | Optional. If omitted or 0, resolves to<br />the authenticated session user. |


**Returns:**
The array of projects if the user has access, false otherwise.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Projects.Projects.getProjectsByUserActivity`



```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectsByUserActivity",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|array
}
```



---
### `leantime.rpc.Projects.Projects.changeCurrentSessionProject`

Change the current session project to the specified projectId.

```json
{
    "method": "leantime.rpc.Projects.Projects.changeCurrentSessionProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** | The ID of the project to set as current. |


**Returns:**
Returns true if the current project is successfully changed, false otherwise.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.getUsersAssignedToProject`

Gets all users that have access to a project.

```json
{
    "method": "leantime.rpc.Projects.Projects.getUsersAssignedToProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
        "teamOnly": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project. |
| `teamOnly` | **mixed** |  |


**Returns:**
An array of users assigned to the project.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getUsersWithAccessToProject`

Gets all users that can access a project, honoring the project's access level
(psettings): directly assigned users plus — depending on the setting — all
active users ('all') or the client's active users ('clients').

```json
{
    "method": "leantime.rpc.Projects.Projects.getUsersWithAccessToProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project. |


**Returns:**
The users with access to the project.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.isUserAssignedToProject`

Checks if a user is assigned to a particular project.

```json
{
    "method": "leantime.rpc.Projects.Projects.isUserAssignedToProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user being checked. |
| `projectId` | **int** | The ID of the project being checked. |


**Returns:**
Returns true if the user is assigned to the project, false otherwise.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.isUserMemberOfProject`

Checks if a user is a member of a specific project.

```json
{
    "method": "leantime.rpc.Projects.Projects.isUserMemberOfProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | - The ID of the user. |
| `projectId` | **int** | - The ID of the project. |


**Returns:**
- Returns true if the user is a member of the project, otherwise false.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.addProject`

Adds a new project.

```json
{
    "method": "leantime.rpc.Projects.Projects.addProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | The project data.<br />- name: string (required) The name of the project.<br />- details: string (optional) Additional details about the project.<br />- clientId: int (required) The ID of the client associated with the project.<br />- hourBudget: int (optional) The hour budget for the project (defaults to 0).<br />- assignedUsers: string (optional) The list of assigned users (defaults to an empty string).<br />- dollarBudget: int (optional) The dollar budget for the project (defaults to 0).<br />- psettings: string (optional) The project settings (defaults to &#039;restricted&#039;).<br />- type: string (fixed value &#039;project&#039;) The type of the project.<br />- parent: int (optional) Id of a container project (program/strategy) to nest<br />the new project under. Ignored unless it references a program or strategy.<br />- start: string&amp;#124;null The start date of the project in user format or null.<br />- end: string&amp;#124;null The end date of the project in user format or null. |


**Returns:**
The ID of the added project, or false if the project could not be added.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int|false
}
```



---
### `leantime.rpc.Projects.Projects.duplicateProject`

Duplicates a project with the specified details.

```json
{
    "method": "leantime.rpc.Projects.Projects.duplicateProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
        "clientId": int,
        "projectName": string,
        "userStartDate": string,
        "assignSameUsers": bool,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The ID of the project to duplicate. |
| `clientId` | **int** | The ID of the client for the duplicate project. |
| `projectName` | **string** | The name of the duplicate project. |
| `userStartDate` | **string** | The start date of the duplicate project in the format specified by the language setting. |
| `assignSameUsers` | **bool** | Whether to assign the same users as the original project. |


**Returns:**
Returns true if the project was successfully duplicated, or the ID of the new project if successful.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|int
}
```



---
### `leantime.rpc.Projects.Projects.patch`

Patches a project with partial updates.

```json
{
    "method": "leantime.rpc.Projects.Projects.patch",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "params": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The ID of the project. |
| `params` | **array** | Fields to update (only these fields will be changed). |


**Returns:**
Returns true if the project was successfully updated, false otherwise.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.getProjectAvatar`

Retrieves the avatar for a project.

**Limit:** Over the API this method doesn't return the file or image. The result is an empty or internal object, and a missing file comes back as a result, not an error.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectAvatar",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** | The ID of the project. |


**Returns:**
Returns either an SVG file, a file response or a path to a file
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \SVG\SVG|\Symfony\Component\HttpFoundation\Response|string
}
```



---
### `leantime.rpc.Projects.Projects.getAllProjects`

Retrieves all projects.

```json
{
    "method": "leantime.rpc.Projects.Projects.getAllProjects",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**
The projects.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getAllStrategies`

Gets all strategy projects.

```json
{
    "method": "leantime.rpc.Projects.Projects.getAllStrategies",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**
Strategies with their details
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getAllPrograms`

Gets all program projects.

```json
{
    "method": "leantime.rpc.Projects.Projects.getAllPrograms",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**
Programs with their details
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.editUserProjectRelations`

Edits the project relations of a user.

```json
{
    "method": "leantime.rpc.Projects.Projects.editUserProjectRelations",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "projects": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The ID of the user. |
| `projects` | **array** | The projects to be edited. |


**Returns:**
True if the project relations were successfully edited, false otherwise.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.addUserToProject`

Adds a single user to a project, leaving their other project
relations untouched.

```json
{
    "method": "leantime.rpc.Projects.Projects.addUserToProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "projectId": int,
        "projectRole": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user to add. |
| `projectId` | **int** | The project to add them to. |
| `projectRole` | **string** | Optional per-project role. |


**Returns:**
True when a relation was created, false when the user
was already a member (or the ids were invalid).
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.removeUserFromProject`

Removes one user from one project's team, leaving their other projects alone.

```json
{
    "method": "leantime.rpc.Projects.Projects.removeUserFromProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user to remove. |
| `projectId` | **int** | The project to remove them from. |


**Returns:**
True when a membership was removed; false when they weren't on the team (or the ids were invalid).
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.deleteAllUserProjectRelations`

Removes all project relations for a given user.

```json
{
    "method": "leantime.rpc.Projects.Projects.deleteAllUserProjectRelations",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user ID |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Projects.Projects.getUserProjectRelation`

Retrieves the project relations for a given user.

```json
{
    "method": "leantime.rpc.Projects.Projects.getUserProjectRelation",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "projectId": int|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user ID |
| `projectId` | **int\|null** | Optional project ID filter |


**Returns:**
The project relations
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.deleteProject`

Deletes a project and all associated user relations.

```json
{
    "method": "leantime.rpc.Projects.Projects.deleteProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The project ID to delete |


**Returns:**
True if deleted, false if unauthorized
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.hasTickets`

Checks if a project has any tickets.

```json
{
    "method": "leantime.rpc.Projects.Projects.hasTickets",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The project ID |


**Returns:**
True if the project has tickets
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.patchProjectStatusAndSorting`

Authorized JSON-RPC entry point for kanban status + sort of projects.

```json
{
    "method": "leantime.rpc.Projects.Projects.patchProjectStatusAndSorting",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": array,
        "handler": string|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | Associative status =&gt; jQuery-sortable-serialized project list |
| `handler` | **string\|null** | Optional drag handler id (unused by the update) |


**Returns:**
True on success (false only if the underlying write fails)
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.sortProjects`

Authorized JSON-RPC entry point for Program Timeline (Gantt) re-sorting.

```json
{
    "method": "leantime.rpc.Projects.Projects.sortProjects",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | Map of (pgm-{id}&amp;#124;ticket-{id}&amp;#124;{id}) =&gt; sort position |


**Returns:**
True on success (false only if the underlying write fails)
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.patchProject`

Authorized JSON-RPC entry point for patching a single project (e.g. Gantt
date/sort changes from the Program Timeline).

```json
{
    "method": "leantime.rpc.Projects.Projects.patchProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "values": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The project id to patch |
| `values` | **array** | Fields to update (e.g. start, end, sortIndex) |


**Returns:**
True on success (false only if the underlying write fails)
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.getAll`

Gets all the projects for the current user.

```json
{
    "method": "leantime.rpc.Projects.Projects.getAll",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "showClosedProjects": bool,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `showClosedProjects` | **bool** | (optional) Set to true to include closed projects. |


**Returns:**
Returns an array of projects.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.findProject`

Finds projects based on a search term.

```json
{
    "method": "leantime.rpc.Projects.Projects.findProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "term": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `term` | **string** | The search term (optional) |


**Returns:**
The filtered projects that match the search term
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.pollForNewProjects`

Polls for new projects for the current user session.

```json
{
    "method": "leantime.rpc.Projects.Projects.pollForNewProjects",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**
An array of projects with prepared dates for API response.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.pollForUpdatedProjects`

Polls for updated projects.

```json
{
    "method": "leantime.rpc.Projects.Projects.pollForUpdatedProjects",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getAllUsers`

Returns all users in the system.

```json
{
    "method": "leantime.rpc.Projects.Projects.getAllUsers",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "activeOnly": bool,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `activeOnly` | **bool** | When true only active users are returned. |


**Returns:**
List of users.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getEmployees`

Returns all users flagged as employees.

```json
{
    "method": "leantime.rpc.Projects.Projects.getEmployees",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**
List of employee users.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getNewProjectDefaults`

Builds the default value set used to render the new-project form.

```json
{
    "method": "leantime.rpc.Projects.Projects.getNewProjectDefaults",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "parent": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parent` | **string** | Optional parent project id pre-fill. |


**Returns:**
Default project value structure.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getProjectHubData`

Builds the data needed to render the project hub for a user.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectHubData",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "clientId": int|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The user whose projects should be loaded. |
| `clientId` | **int\|null** | Optional client id to filter the project list. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{allProjects: array, clients: array, currentClientName: string, currentClient: int|string}
}
```



---
### `leantime.rpc.Projects.Projects.getProjectCardData`

Builds the progress view-model for a single project card.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectCardData",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project id to assemble card data for. |


**Returns:**
The project card data including id, progress, team, lastUpdate and status.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getProjectsCardData`

Builds the progress view-model for several project cards in one call.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectsCardData",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectIds": array<int,mixed>,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectIds` | **array<int,mixed>** | The project ids to assemble card data for, in display order (JSON ints or numeric strings). |


**Returns:**
A list of project card data (id, progress, team, lastUpdate, status), in the order requested.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array>
}
```



---
### `leantime.rpc.Projects.Projects.saveMattermostWebhook`

Persists the Mattermost webhook for a project.

```json
{
    "method": "leantime.rpc.Projects.Projects.saveMattermostWebhook",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
        "webhookUrl": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project id. |
| `webhookUrl` | **string** | The raw webhook URL from the request. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Projects.Projects.saveSlackWebhook`

Persists the Slack webhook for a project.

```json
{
    "method": "leantime.rpc.Projects.Projects.saveSlackWebhook",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
        "webhookUrl": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project id. |
| `webhookUrl` | **string** | The raw webhook URL from the request. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Projects.Projects.saveZulipWebhook`

Validates and persists the Zulip webhook configuration for a project.

```json
{
    "method": "leantime.rpc.Projects.Projects.saveZulipWebhook",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
        "hookData": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project id. |
| `hookData` | **array** | Raw hook fields (zulipURL, zulipEmail, zulipBotKey, zulipStream, zulipTopic). |


**Returns:**
The sanitized hook and whether it was persisted.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{hook: array, saved: bool}
}
```



---
### `leantime.rpc.Projects.Projects.saveTelegramWebhook`

Validates and persists the Telegram bot configuration for a project.

```json
{
    "method": "leantime.rpc.Projects.Projects.saveTelegramWebhook",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
        "hookData": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project id. |
| `hookData` | **array** | Raw hook fields (telegramBotToken, telegramChatId, telegramTopicId). |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{hook: array, saved: bool, error: string|null}
}
```



---
### `leantime.rpc.Projects.Projects.saveDiscordWebhooks`

Persists the (up to three) Discord webhooks for a project.

```json
{
    "method": "leantime.rpc.Projects.Projects.saveDiscordWebhooks",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
        "postData": array,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project id. |
| `postData` | **array** | The raw request data containing discordWebhookURL1..3. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Projects.Projects.getProjectIntegrationSettings`

Loads and de-serializes the integration webhook settings for a project.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectIntegrationSettings",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** | The project id. |


**Returns:**
The integration settings keyed by template variable name.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.editProjectAndNotify`

Edits a project and notifies its users about the update.

```json
{
    "method": "leantime.rpc.Projects.Projects.editProjectAndNotify",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
        "projectId": int,
        "project": array,
        "currentUrl": string,
        "authorId": int,
        "authorName": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | The project values to persist. |
| `projectId` | **int** | The project id being edited. |
| `project` | **array** | The current project entity (used in the notification). |
| `currentUrl` | **string** | The current request URL (used as notification CTA target). |
| `authorId` | **int** | The id of the user performing the edit. |
| `authorName` | **string** | The display name of the user performing the edit. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---

