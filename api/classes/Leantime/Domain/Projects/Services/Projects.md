---
title: \Leantime\Domain\Projects\Services\Projects
footer: false
---

# Projects




`leantime.rpc.Projects.Projects.`


## Available Methods
### `leantime.rpc.Projects.Projects.__construct`



```json
{
    "method": "leantime.rpc.Projects.Projects.__construct",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "tpl": \Leantime\Core\Template,
        "projectRepository": \Leantime\Domain\Projects\Repositories\Projects,
        "ticketRepository": \Leantime\Domain\Tickets\Repositories\Tickets,
        "settingsRepo": \Leantime\Domain\Setting\Repositories\Setting,
        "filesRepository": \Leantime\Domain\Files\Repositories\Files,
        "language": \Leantime\Core\Language,
        "messengerService": \Leantime\Domain\Notifications\Services\Messengers,
        "notificationService": \Leantime\Domain\Notifications\Services\Notifications,
    }
}
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


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Projects.Projects.getProjectTypes`



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
| `id` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Projects.Projects.getProjectProgress`



```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectProgress",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getUsersToNotify`



```json
{
    "method": "leantime.rpc.Projects.Projects.getUsersToNotify",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getAllUserInfoToNotify`



```json
{
    "method": "leantime.rpc.Projects.Projects.getAllUserInfoToNotify",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.notifyProjectUsers`



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
| `notification` | **\Leantime\Domain\Notifications\Models\Notification** |  |


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



```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectName",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed|void
}
```



---
### `leantime.rpc.Projects.Projects.getProjectIdAssignedToUser`



```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectIdAssignedToUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Projects.Projects.getProjectsAssignedToUser`



```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectsAssignedToUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ,
        "projectStatus": string,
        "clientId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectStatus` | **string** |  |
| `clientId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.findMyChildren`



```json
{
    "method": "leantime.rpc.Projects.Projects.findMyChildren",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "currentParentId": ,
        "projects": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `currentParentId` | **** |  |
| `projects` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.cleanParentRelationship`

Ensures all projects have a valid parent. If not the parent is removed.

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


This way a user can still access a project even if they don't have access to the child.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projects` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getProjectHierarchyAssignedToUser`



```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectHierarchyAssignedToUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ,
        "projectStatus": string,
        "clientId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectStatus` | **string** |  |
| `clientId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getProjectHierarchyAvailableToUser`



```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectHierarchyAvailableToUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ,
        "projectStatus": string,
        "clientId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectStatus` | **string** |  |
| `clientId` | **** |  |


**Returns:**

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


Clients are determined by the projects
the user is assigned to.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user. |
| `projectStatus` | **string** | (optional) The status of the projects to consider. Defaults to &quot;open&quot;. |


**Returns:**
An array of client objects.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getClientsFromProjectList`



```json
{
    "method": "leantime.rpc.Projects.Projects.getClientsFromProjectList",
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
| `projects` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getProjectRole`



```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectRole",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ,
        "projectId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed|string
}
```



---
### `leantime.rpc.Projects.Projects.getProjectsUserHasAccessTo`



```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectsUserHasAccessTo",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Projects.Projects.setCurrentProject`

Sets the current project in the session.

```json
{
    "method": "leantime.rpc.Projects.Projects.setCurrentProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```


If a project ID is provided in the query string, it is used to set the current project.
If no project ID is provided, the last visited project or the first assigned project is set as the current project.
If no project is found, an exception is thrown.







**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Projects.Projects.getCurrentProjectId`

Get current project id or 0 if no current project is set.

```json
{
    "method": "leantime.rpc.Projects.Projects.getCurrentProjectId",
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
    "result": int
}
```



---
### `leantime.rpc.Projects.Projects.changeCurrentSessionProject`



```json
{
    "method": "leantime.rpc.Projects.Projects.changeCurrentSessionProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.resetCurrentProject`



```json
{
    "method": "leantime.rpc.Projects.Projects.resetCurrentProject",
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
    "result": void
}
```



---
### `leantime.rpc.Projects.Projects.getUsersAssignedToProject`



```json
{
    "method": "leantime.rpc.Projects.Projects.getUsersAssignedToProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.isUserMemberOfProject`

Checks if a user is directly assigned to a project.

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


Client assignments or projects available to entire organization are not considered true.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `projectId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.addProject`

Adds a new project to the system.

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
| `values` | **array** | An associative array containing the project details.<br />- name: The name of the project.<br />- details: Additional details of the project (optional, default: &#039;&#039;).<br />- clientId: The ID of the client associated with the project.<br />- hourBudget: The hour budget for the project (optional, default: 0).<br />- assignedUsers: Comma-separated list of user IDs assigned to the project (optional, default: &#039;&#039;).<br />- dollarBudget: The dollar budget for the project (optional, default: 0).<br />- psettings: The settings for the project (optional, default: &#039;restricted&#039;).<br />- type: The type of the project (optional, default: &#039;project&#039;).<br />- start: The start date of the project in user format (YYYY-MM-DD).<br />- end: The end date of the project in user format (YYYY-MM-DD). |


**Returns:**
The ID of the newly added project
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int|false
}
```



---
### `leantime.rpc.Projects.Projects.duplicateProject`



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
| `projectId` | **int** |  |
| `clientId` | **int** |  |
| `projectName` | **string** |  |
| `userStartDate` | **string** |  |
| `assignSameUsers` | **bool** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|int
}
```



---
### `leantime.rpc.Projects.Projects.duplicateCanvas`



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
| `repository` | **string** |  |
| `originalProjectId` | **int** |  |
| `newProjectId` | **int** |  |
| `canvasTypeName` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.getProjectUserRelation`



```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectUserRelation",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.patch`



```json
{
    "method": "leantime.rpc.Projects.Projects.patch",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": ,
        "params": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |
| `params` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.getProjectAvatar`



```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectAvatar",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Projects.Projects.setProjectAvatar`



```json
{
    "method": "leantime.rpc.Projects.Projects.setProjectAvatar",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "file": ,
        "project": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **** |  |
| `project` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": null
}
```



---
### `leantime.rpc.Projects.Projects.getProjectSetupChecklist`



```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectSetupChecklist",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.updateProjectProgress`



```json
{
    "method": "leantime.rpc.Projects.Projects.updateProjectProgress",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "stepsComplete": ,
        "projectId": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `stepsComplete` | **** |  |
| `projectId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
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
| `projects` | **array** | An array of project IDs to be assigned to the user. |


**Returns:**
Returns true if the project relations were successfully edited, false otherwise.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.getProjectIdbyName`

Returns the project ID by its name from the given array of projects.

```json
{
    "method": "leantime.rpc.Projects.Projects.getProjectIdbyName",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "allProjects": array,
        "projectName": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `allProjects` | **array** | An array of projects. |
| `projectName` | **string** | The name of the project to search for. |


**Returns:**
The ID of the project if found, or false if not found.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int|bool
}
```



---
### `leantime.rpc.Projects.Projects.updateProjectSorting`



```json
{
    "method": "leantime.rpc.Projects.Projects.updateProjectSorting",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|void
}
```



---
### `leantime.rpc.Projects.Projects.editProject`

Edits a project with the given values.

```json
{
    "method": "leantime.rpc.Projects.Projects.editProject",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": mixed,
        "id": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** | The values to update the project with. |
| `id` | **int** | The ID of the project to edit. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Projects.Projects.updateProjectStatusAndSorting`



```json
{
    "method": "leantime.rpc.Projects.Projects.updateProjectStatusAndSorting",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": ,
        "handler": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **** |  |
| `handler` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Projects.Projects.getClientManagerProjects`

Gets all the projects a company manager has access to.

```json
{
    "method": "leantime.rpc.Projects.Projects.getClientManagerProjects",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "clientId": int,
    }
}
```


Includes all projects within a client + all assigned projects






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** |  |
| `clientId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.getAll`



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
| `showClosedProjects` | **bool** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.findProject`



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
| `term` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.pollForNewProjects`



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

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Projects.Projects.pollForUpdatedProjects`



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

