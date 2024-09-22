---
title: \Leantime\Domain\Projects\Services\Projects
footer: false
---

# Projects

The Projects class is responsible for managing projects and project-related operations.


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
Returns the project data as an associative array if the project exists, otherwise returns false.
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


Calculates the completion percentage, estimated completion date,
and planned completion date of the project.






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
### `leantime.rpc.Projects.Projects.notifyProjectUsers`

Notifies the users associated with a project about a notification.

```json
{
    "method": "leantime.rpc.Projects.Projects.notifyProjectUsers",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "notification": \Leantime\Domain\Notifications\Models\Notification,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** | The notification object to send. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
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
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |
| `projectStatus` | **string** | The status of the projects. Defaults to &quot;open&quot;. |
| `clientId` | **int|null** | The ID of the client. Defaults to null. |


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


Removes projects that have a parent project that does not exist in the array.
Assigns a parent id of 0 to projects that have no parent.






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
| `clientId` | **int|null** | The ID of the client. Default is null. |


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
| `clientId` | **int|null** | The ID of the client. Defaults to null. |


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
        "userId": mixed,
        "projectId": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** | The user ID. |
| `projectId` | **mixed** | The project ID. |


**Returns:**
The role of the user in the project (string) or an empty string if the user is not assigned to the project or if the project role is not defined.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
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
        "userId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |


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

Gets all the users assigned to a specific project.

```json
{
    "method": "leantime.rpc.Projects.Projects.getUsersAssignedToProject",
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
An array of users assigned to the project.
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
| `values` | **array** | The project data.<br />- name: string (required) The name of the project.<br />- details: string (optional) Additional details about the project.<br />- clientId: int (required) The ID of the client associated with the project.<br />- hourBudget: int (optional) The hour budget for the project (defaults to 0).<br />- assignedUsers: string (optional) The list of assigned users (defaults to an empty string).<br />- dollarBudget: int (optional) The dollar budget for the project (defaults to 0).<br />- psettings: string (optional) The project settings (defaults to &#039;restricted&#039;).<br />- type: string (fixed value &#039;project&#039;) The type of the project.<br />- start: string&amp;#124;null The start date of the project in user format or null.<br />- end: string&amp;#124;null The end date of the project in user format or null. |


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
### `leantime.rpc.Projects.Projects.duplicateCanvas`

Duplicate a canvas from one project to another.

```json
{
    "method": "leantime.rpc.Projects.Projects.duplicateCanvas",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "repository": string,
        "originalProjectId": int,
        "newProjectId": int,
        "canvasTypeName": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `repository` | **string** | The repository class to use for CRUD operations |
| `originalProjectId` | **int** | The ID of the original project |
| `newProjectId` | **int** | The ID of the new project |
| `canvasTypeName` | **string** | The canvas type name (optional) |


**Returns:**
True if the canvas is duplicated successfully, false otherwise
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.getProjectUserRelation`

Retrieves the relation between a project and its users.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectUserRelation",
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
| `id` | **int** | The ID of the project. |


**Returns:**
The relation between the project and its users.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.patch`

Updates a project with the given parameters.

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
| `params` | **array** | The parameters to update the project. |


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
The avatar for the project.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Projects.Projects.setProjectAvatar`

Sets the avatar for a project.

```json
{
    "method": "leantime.rpc.Projects.Projects.setProjectAvatar",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "file": mixed,
        "project": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **mixed** | The file containing the avatar. |
| `project` | **mixed** | The project object. |


**Returns:**
Indicates whether the avatar was successfully set.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
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


By default, closed projects are not included.






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


Retrieves all projects for the current user and prepares the dates for API response.







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


Retrieves all the projects the current user has access to and prepares them for API response.
Adds the modified timestamp to the project ID for tracking updates.







**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

