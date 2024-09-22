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
    "result": array|bool
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

Adds a ticket to the system.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.addTicket",
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
| `values` | **array** | An array of ticket data.<br />- id (optional): The ID of the ticket.<br />- headline (optional): The headline of the ticket.<br />- type (optional): The type of the ticket. Default is &quot;task&quot;.<br />- description (optional): The description of the ticket.<br />- projectId (optional): The ID of the project the ticket belongs to. Default is the current project.<br />- editorId (optional): The ID of the editor of the ticket.<br />- userId: The ID of the user creating the ticket.<br />- date: The date when the ticket is created.<br />- dateToFinish (optional): The date to finish the ticket.<br />- timeToFinish (optional): The time to finish the ticket.<br />- status (optional): The status of the ticket. Default is 3.<br />- planHours (optional): The planned hours for the ticket.<br />- tags (optional): The tags associated with the ticket.<br />- sprint (optional): The sprint the ticket belongs to.<br />- storypoints (optional): The story points assigned to the ticket.<br />- hourRemaining (optional): The remaining hours for the ticket.<br />- priority (optional): The priority of the ticket.<br />- acceptanceCriteria (optional): The acceptance criteria of the ticket.<br />- editFrom (optional): The edit from date of the ticket.<br />- timeFrom (optional): The edit from time of the ticket.<br />- editTo (optional): The edit to date of the ticket.<br />- timeTo (optional): The edit to time of the ticket.<br />- dependingTicketId (optional): The ID of the depending ticket.<br />- milestoneid (optional): The ID of the milestone the ticket belongs to. |


**Returns:**
If the ticket is successfully added, returns the ID of the ticket.
If the user does not have access to the project, returns an error message and type array.
If the headline is missing, returns an error message and type array.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|int|bool
}
```



---
### `leantime.rpc.Tickets.Tickets.updateTicket`

Updates a ticket with the given values.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.updateTicket",
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
| `values` | **array** | The array containing the ticket values to update.<br />Accepted keys are:<br />- &#039;id&#039; =&gt; The ticket ID.<br />- &#039;headline&#039; =&gt; The ticket headline. (optional)<br />- &#039;type&#039; =&gt; The ticket type. (optional)<br />- &#039;description&#039; =&gt; The ticket description. (optional)<br />- &#039;projectId&#039; =&gt; The project ID. Defaults to session(&quot;currentProject&quot;). (optional);<br />- &#039;editorId&#039; =&gt; The editor ID. (optional)<br />- &#039;date&#039; =&gt; The ticket date. Defaults to the current date and time. (optional)<br />- &#039;dateToFinish&#039; =&gt; The ticket deadline date. (optional)<br />- &#039;timeToFinish&#039; =&gt; The ticket deadline time. (optional)<br />- &#039;status&#039; =&gt; The ticket status. (optional)<br />- &#039;planHours&#039; =&gt; The planned hours for the ticket. (optional)<br />- &#039;tags&#039; =&gt; The tags for the ticket. (optional)<br />- &#039;sprint&#039; =&gt; The sprint for the ticket. (optional)<br />- &#039;storypoints&#039; =&gt; The story points for the ticket. (optional)<br />- &#039;hourRemaining&#039; =&gt; The remaining hours for the ticket. (optional)<br />- &#039;priority&#039; =&gt; The ticket priority. (optional)<br />- &#039;acceptanceCriteria&#039; =&gt; The ticket acceptance criteria. (optional)<br />- &#039;editFrom&#039; =&gt; The ticket edit &#039;from&#039; date-time. (optional)<br />- &#039;time* |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
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
### `leantime.rpc.Tickets.Tickets.prepareTicketDates`

Prepare ticket dates for database.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.prepareTicketDates",
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
| `values` | **array** | The values of the ticket fields. |


**Returns:**
The values of the ticket fields after preparing the dates.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.findMilestone`

Find milestones that contain a specific term in their headline.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.findMilestone",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "term": string,
        "projectId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `term` | **string** | The term to search for in the headline. |
| `projectId` | **int** | The ID of the project to search milestones in. |


**Returns:**
The array of milestones that match the search term.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.findTicket`

Finds tickets based on search term, project ID, and optional user ID.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.findTicket",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "term": string,
        "projectId": int,
        "userId": int|null,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `term` | **string** | The search term to match against ticket headlines. |
| `projectId` | **int** | The ID of the project to search within. |
| `userId` | **int|null** | (Optional) The ID of the user to limit the search to. |


**Returns:**
An array of tickets matching the search criteria.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.pollForNewAccountMilestones`

Retrieve milestones for a specific project and user.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.pollForNewAccountMilestones",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int|null,
        "userId": int|null,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|null** | The ID of the project (optional) |
| `userId` | **int|null** | The ID of the user (optional) |


**Returns:**
An array of milestones or false if an error occurred
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Tickets.Tickets.pollForUpdatedAccountMilestones`

Polls for updated account milestones.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.pollForUpdatedAccountMilestones",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int|null,
        "userId": int|null,
    }
}
```


Retrieves all milestones based on the provided search criteria and prepares the dates for API response.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|null** | (optional) The ID of the project to filter milestones by. |
| `userId` | **int|null** | (optional) The ID of the user to filter milestones by. |


**Returns:**
An array of milestones with prepared dates for API response, or false if an error occurs.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Tickets.Tickets.pollForNewAccountTodos`

Polls for new account todos.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.pollForNewAccountTodos",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int|null,
        "userId": int|null,
    }
}
```


Retrieves all account todos based on the provided search criteria. If no criteria are provided,
it will return all todos. Optionally, a project ID and a user ID can be specified to filter the todos.
It excludes todos of type "milestone".






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|null** | The ID of the project to filter the todos (optional). |
| `userId` | **int|null** | The ID of the user to filter the todos (optional). |


**Returns:**
The retrieved todos as an array of associative arrays.
Returns false if an error occurs during retrieval.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Tickets.Tickets.pollForUpdatedAccountTodos`

Polls for updated account todos.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.pollForUpdatedAccountTodos",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int|null,
        "userId": int|null,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|null** | The ID of the project (optional) |
| `userId` | **int|null** | The ID of the user (optional) |


**Returns:**
An array of updated account todos or false if there was an error
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---

