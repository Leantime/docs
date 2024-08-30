---
title: \Leantime\Domain\Tickets\Services\Tickets
footer: false
---

# Tickets




`leantime.rpc.Tickets.Tickets.`


## Available Methods
### `leantime.rpc.Tickets.Tickets.getStatusLabels`

Gets all status labels for the current set project

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getStatusLabels",
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
| `projectId` | **int** | project id to get status labels for |


**Returns:**
returns an array of status labels
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllStatusLabelsByUserId`

getAllStatusLabelsByUserId - Gets all the status labels a specific user might encounter and groups them by project.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getAllStatusLabelsByUserId",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ,
    }
}
```


Used to get all the status dropdowns for user home dashboards






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.saveStatusLabels`

saveStatusLabels - Saves the description/label of a status

```json
{
    "method": "leantime.rpc.Tickets.Tickets.saveStatusLabels",
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
    "result": bool
}
```



---
### `leantime.rpc.Tickets.Tickets.getKanbanColumns`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getKanbanColumns",
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
### `leantime.rpc.Tickets.Tickets.getTypeIcons`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getTypeIcons",
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
    "result": array|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getEffortLabels`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getEffortLabels",
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
    "result": array|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getTicketTypes`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getTicketTypes",
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
    "result": array|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getPriorityLabels`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getPriorityLabels",
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
    "result": array|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.prepareTicketSearchArray`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.prepareTicketSearchArray",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "searchParams": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchParams` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.countSetFilters`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.countSetFilters",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "searchCriteria": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Tickets.Tickets.getSetFilters`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getSetFilters",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "searchCriteria": array,
        "includeGroup": bool,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **array** |  |
| `includeGroup` | **bool** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getAll`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getAll",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "searchCriteria": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllGrouped`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getAllGrouped",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "searchCriteria": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllPossibleParents`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getAllPossibleParents",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticket": \Leantime\Domain\Tickets\Models\Tickets,
        "projectId": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticket` | **\Leantime\Domain\Tickets\Models\Tickets** |  |
| `projectId` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getTicket`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getTicket",
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
    "result": bool|\Leantime\Domain\Tickets\Models\Tickets
}
```



---
### `leantime.rpc.Tickets.Tickets.getOpenUserTicketsThisWeekAndLater`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getOpenUserTicketsThisWeekAndLater",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ,
        "projectId": ,
        "includeDoneTickets": false,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **** |  |
| `projectId` | **** |  |
| `includeDoneTickets` | **false** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getLastTickets`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getLastTickets",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ,
        "limit": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |
| `limit` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Tickets.Tickets.getOpenUserTicketsByProject`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getOpenUserTicketsByProject",
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
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getOpenUserTicketsByPriority`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getOpenUserTicketsByPriority",
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
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getOpenUserTicketsBySprint`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getOpenUserTicketsBySprint",
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
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllMilestones`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getAllMilestones",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "searchCriteria": ,
        "sortBy": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **** |  |
| `sortBy` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllMilestonesOverview`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getAllMilestonesOverview",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "includeArchived": bool,
        "sortBy": string,
        "includeTasks": bool,
        "clientId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `includeArchived` | **bool** |  |
| `sortBy` | **string** |  |
| `includeTasks` | **bool** |  |
| `clientId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllMilestonesByUserProjects`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getAllMilestonesByUserProjects",
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
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getMilestoneProgress`

Calculate the progress of a milestone based on the tickets associated with it.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getMilestoneProgress",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "milestoneId": int|string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `milestoneId` | **int|string** | ID of the milestone. |


**Returns:**
The progress of the milestone as a percentage.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": float
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllSubtasks`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getAllSubtasks",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Tickets.Tickets.quickAddTicket`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.quickAddTicket",
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
    "result": bool|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.quickAddMilestone`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.quickAddMilestone",
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
    "result": array|bool|int
}
```



---
### `leantime.rpc.Tickets.Tickets.addTicket`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.addTicket",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|string[]|void
}
```



---
### `leantime.rpc.Tickets.Tickets.patch`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.patch",
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
### `leantime.rpc.Tickets.Tickets.moveTicket`

moveTicket - Moves a ticket from one project to another. Milestone children will be moved as well

```json
{
    "method": "leantime.rpc.Tickets.Tickets.moveTicket",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "projectId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |
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
### `leantime.rpc.Tickets.Tickets.quickUpdateMilestone`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.quickUpdateMilestone",
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
    "result": bool|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.upsertSubtask`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.upsertSubtask",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": ,
        "parentTicket": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **** |  |
| `parentTicket` | **** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Tickets.Tickets.updateTicketSorting`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.updateTicketSorting",
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
### `leantime.rpc.Tickets.Tickets.updateTicketStatusAndSorting`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.updateTicketStatusAndSorting",
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
### `leantime.rpc.Tickets.Tickets.delete`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.delete",
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
    "result": bool|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.deleteMilestone`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.deleteMilestone",
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
    "result": bool|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getLastTicketViewUrl`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getLastTicketViewUrl",
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
    "result": mixed|string
}
```



---
### `leantime.rpc.Tickets.Tickets.getGroupByFieldOptions`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getGroupByFieldOptions",
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
### `leantime.rpc.Tickets.Tickets.getSortByFieldOptions`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getSortByFieldOptions",
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
    "result": array[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getNewFieldOptions`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getNewFieldOptions",
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
    "result": array|array[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getTicketTemplateAssignments`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getTicketTemplateAssignments",
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
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.pollForNewAccountMilestones`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.pollForNewAccountMilestones",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
        "userId": ?int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `userId` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.pollForUpdatedAccountMilestones`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.pollForUpdatedAccountMilestones",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
        "userId": ?int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `userId` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.pollForNewAccountTodos`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.pollForNewAccountTodos",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
        "userId": ?int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `userId` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.pollForUpdatedAccountTodos`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.pollForUpdatedAccountTodos",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
        "userId": ?int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `userId` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

