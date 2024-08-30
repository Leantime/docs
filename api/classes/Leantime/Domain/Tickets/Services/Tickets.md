---
title: \Leantime\Domain\Tickets\Services\Tickets
footer: false
---

# Tickets




`leantime.rpc.Tickets.Tickets.`


## Available Methods
### `leantime.rpc.Tickets.Tickets.getStatusLabels`

Gets all status labels for the current set project

```curl
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
```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllStatusLabelsByUserId`

getAllStatusLabelsByUserId - Gets all the status labels a specific user might encounter and groups them by project.

```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.saveStatusLabels`

saveStatusLabels - Saves the description/label of a status

```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Tickets.Tickets.getKanbanColumns`



```curl
{
    "method": "leantime.rpc.Tickets.Tickets.getKanbanColumns",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getTypeIcons`



```curl
{
    "method": "leantime.rpc.Tickets.Tickets.getTypeIcons",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getEffortLabels`



```curl
{
    "method": "leantime.rpc.Tickets.Tickets.getEffortLabels",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getTicketTypes`



```curl
{
    "method": "leantime.rpc.Tickets.Tickets.getTicketTypes",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getPriorityLabels`



```curl
{
    "method": "leantime.rpc.Tickets.Tickets.getPriorityLabels",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.prepareTicketSearchArray`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.countSetFilters`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Tickets.Tickets.getSetFilters`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getAll`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllGrouped`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllPossibleParents`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getTicket`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|\Leantime\Domain\Tickets\Models\Tickets
}
```



---
### `leantime.rpc.Tickets.Tickets.getOpenUserTicketsThisWeekAndLater`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getLastTickets`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Tickets.Tickets.getOpenUserTicketsByProject`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getOpenUserTicketsByPriority`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getOpenUserTicketsBySprint`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllMilestones`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllMilestonesOverview`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllMilestonesByUserProjects`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getMilestoneProgress`

Calculate the progress of a milestone based on the tickets associated with it.

```curl
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
```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": float
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllSubtasks`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Tickets.Tickets.quickAddTicket`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.quickAddMilestone`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool|int
}
```



---
### `leantime.rpc.Tickets.Tickets.addTicket`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|string[]|void
}
```



---
### `leantime.rpc.Tickets.Tickets.patch`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Tickets.Tickets.moveTicket`

moveTicket - Moves a ticket from one project to another. Milestone children will be moved as well

```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Tickets.Tickets.quickUpdateMilestone`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.upsertSubtask`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Tickets.Tickets.updateTicketSorting`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|void
}
```



---
### `leantime.rpc.Tickets.Tickets.updateTicketStatusAndSorting`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Tickets.Tickets.delete`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.deleteMilestone`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getLastTicketViewUrl`



```curl
{
    "method": "leantime.rpc.Tickets.Tickets.getLastTicketViewUrl",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed|string
}
```



---
### `leantime.rpc.Tickets.Tickets.getGroupByFieldOptions`



```curl
{
    "method": "leantime.rpc.Tickets.Tickets.getGroupByFieldOptions",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getSortByFieldOptions`



```curl
{
    "method": "leantime.rpc.Tickets.Tickets.getSortByFieldOptions",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getNewFieldOptions`



```curl
{
    "method": "leantime.rpc.Tickets.Tickets.getNewFieldOptions",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|array[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getTicketTemplateAssignments`



```curl
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

```curl
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

