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
        "userId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


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
        "params": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


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

Retrieves all tickets based on the provided search criteria.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getAll",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "searchCriteria": array|null,
        "limit": ?int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **array|null** | An associative array containing search parameters such as<br />&#039;currentProject&#039;, &#039;currentUser&#039;, &#039;users&#039;, &#039;status&#039;, &#039;term&#039;,<br />&#039;effort&#039;, &#039;excludeType&#039;, &#039;type&#039;, &#039;milestone&#039;, &#039;groupBy&#039;,<br />&#039;orderBy&#039;, &#039;orderDirection&#039;, &#039;priority&#039;, &#039;clients&#039;, and &#039;sprint&#039;.<br />These values are used to filter the search results.<br />Server-side filters for API watchers (#3700), all optional and<br />usable without a project (results stay limited to projects<br />the caller can access):<br />- &#039;modifiedAfter&#039; / &#039;modifiedBefore&#039;: ISO 8601 datetime; matches<br />the ticket&#039;s last modification (creation date if never modified).<br />- &#039;statusType&#039;: comma list of NEW, INPROGRESS, DONE, NOT_DONE,<br />resolved against each ticket&#039;s own project status labels. |
| `limit` | **?int** |  |


**Returns:**
An array of tickets matching the search criteria, or false on failure.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Tickets.Tickets.getStatusSummary`

Compact ticket discovery for API/agent watchers (#3703).

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getStatusSummary",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int|null,
        "statusType": string|null,
        "modifiedAfter": string|null,
        "includeSubtasks": bool,
        "activeLimit": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|null** | Limit to one project (null = every accessible, non-closed project). |
| `statusType` | **string|null** | Which tickets to list as active: NEW, INPROGRESS, DONE, NOT_DONE (comma list). Default INPROGRESS. |
| `modifiedAfter` | **string|null** | ISO 8601 datetime; only count/list tickets changed since then. |
| `includeSubtasks` | **bool** | Include subtasks (default true). Milestones are never included. |
| `activeLimit` | **int** | Maximum active tickets returned, most recently modified first (1-500, default 50). |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{total: int, countsByType: array<string,int>, countsByStatus: array<int,array<string,mixed>>, active: array<int,array<string,mixed>>, activeTotal: int, activeTruncated: bool}
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllOpenUserTickets`

Retrieves all open user tickets, optionally filtered by user ID and project.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getAllOpenUserTickets",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int|null,
        "project": int|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int|null** | The user ID to filter tickets. If null, tickets are not filtered by user. |
| `project` | **int|null** | The project ID to filter tickets. If null, tickets are not filtered by project. |


**Returns:**
An array of open user tickets with relevant details such as status labels.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getScheduledTasks`

Retrieves scheduled tasks within a given date range and optionally filters by user ID.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getScheduledTasks",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "dateFrom": \Carbon\CarbonImmutable,
        "dateTo": \Carbon\CarbonImmutable,
        "userId": int|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateFrom` | **\Carbon\CarbonImmutable** | The start date and time, expected in UTC. |
| `dateTo` | **\Carbon\CarbonImmutable** | The end date and time, expected in UTC. |
| `userId` | **int|null** | Optional user ID to filter the tasks. |


**Returns:**
Returns an associative array containing the following keys:
- 'totalTasks': An array of all scheduled tasks within the date range.
- 'doneTasks': An array of tasks marked as completed (DONE status).
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
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
        "searchCriteria": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getStatusBreakdownBySwimlane`

Get status breakdown counts for grouped tickets

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getStatusBreakdownBySwimlane",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "groupedTickets": array,
        "statusColumns": array,
        "statusField": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `groupedTickets` | **array** | - Result from getAllGrouped() |
| `statusColumns` | **array** | - Result from getKanbanColumns() |
| `statusField` | **string** |  |


**Returns:**
Status counts per swimlane with structure:
[
'groupId' => [
'statusCounts' => ['status_id' => count, ...],
'totalCount' => int,
'label' => string,
'id' => string,
'class' => string,
'moreInfo' => string
]
]
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllPossibleParents`

Tickets of a project that may serve as the parent of $ticket.

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
| `ticket` | **\Leantime\Domain\Tickets\Models\Tickets** | The ticket whose possible parents are listed. |
| `projectId` | **string** | Project id, or &#039;currentProject&#039; for the session project. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,\Leantime\Domain\Tickets\Models\Tickets>
}
```



---
### `leantime.rpc.Tickets.Tickets.getTicket`

Retrieves a ticket based on its ID if the user has access to the associated project.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getTicket",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int|string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int|string** | The ID of the ticket to retrieve. |


**Returns:**
The ticket object if found and accessible, or false otherwise.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \Leantime\Domain\Tickets\Models\Tickets|bool
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
        "projectId": mixed,
        "limit": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **mixed** |  |
| `limit` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|array
}
```



---
### `leantime.rpc.Tickets.Tickets.getOpenUserTicketsThisWeekAndLater`

Retrieves the open tickets assigned to a user that are due this week and later, optionally
narrowed to a single project, with optional inclusion of completed tickets and milestones.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getOpenUserTicketsThisWeekAndLater",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "projectId": int|string|null,
        "includeDoneTickets": bool,
        "includeMilestones": bool,
        "limit": ?int,
        "offset": ?int,
        "group": ?string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The ID of the user whose tickets are to be retrieved. |
| `projectId` | **int|string|null** | Optional project to narrow to; null/0/&#039;&#039; = across all the user&#039;s projects. |
| `includeDoneTickets` | **bool** | Whether to include tickets marked as done. Default is false. |
| `includeMilestones` | **bool** | Whether to include milestones in the results. Default is false. |
| `limit` | **?int** |  |
| `offset` | **?int** |  |
| `group` | **?string** |  |


**Returns:**
Returns an array of grouped tickets categorized by their due date (e.g.,
overdue, this week, later).
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
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
        "userId": mixed,
        "projectId": mixed,
        "includeMilestones": bool,
        "limit": ?int,
        "offset": ?int,
        "group": ?string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |
| `includeMilestones` | **bool** |  |
| `limit` | **?int** |  |
| `offset` | **?int** |  |
| `group` | **?string** |  |


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
        "userId": mixed,
        "projectId": mixed,
        "includeMilestones": bool,
        "limit": ?int,
        "offset": ?int,
        "group": ?string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |
| `includeMilestones` | **bool** |  |
| `limit` | **?int** |  |
| `offset` | **?int** |  |
| `group` | **?string** |  |


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
        "userId": mixed,
        "projectId": mixed,
        "includeMilestones": bool,
        "limit": ?int,
        "offset": ?int,
        "group": ?string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |
| `includeMilestones` | **bool** |  |
| `limit` | **?int** |  |
| `offset` | **?int** |  |
| `group` | **?string** |  |


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

Retrieves all milestones based on the provided search criteria and sort option.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getAllMilestones",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "searchCriteria": mixed,
        "sortBy": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `searchCriteria` | **mixed** | Search parameters (array). Must be scoped to a project — either a single<br />&#039;currentProject&#039; id (&gt; 0) or a non-empty comma-separated &#039;projects&#039;<br />set (used by program/cross-project boards). |
| `sortBy` | **string** | The sorting option for the milestones. Defaults to &#039;standard&#039;. |


**Returns:**
Milestones sorted hierarchically; an empty array when the criteria are not project-scoped.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
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
        "searchCriteria": array,
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
| `searchCriteria` | **array** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|array
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
        "userId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **mixed** |  |


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
    "result": false|array
}
```



---
### `leantime.rpc.Tickets.Tickets.quickAddTicket`

Adds a new ticket quickly based on the provided parameters.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.quickAddTicket",
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
| `params` | **array** | An associative array of ticket details which may include:<br />- headline (string)        : The title of the ticket (required).<br />- description (string)     : The description of the task.<br />- projectId (int)          : The ID of the project to which the ticket belongs.<br />- editorId (int)           : The ID of the user editing/creating the ticket.<br />- userId (int)             : The ID of the user assigned to the ticket.<br />- dateToFinish (string)    : The due date for completion of the ticket. In user date format or ISO8601<br />- status (int)             : The status of the ticket (default: 3).<br />- sprint (int)             : The sprint associated with the ticket.<br />- editFrom (string)        : Start time for the edit period. In user date format or ISO8601<br />- editTo (string)          : End time for the edit period. In user date format or ISO8601<br />- milestone (int)          : The ID of the associated milestone. |


**Returns:**
Returns an array with ticket details if successful or false on failure.
If 'headline' is missing in $params or ticket creation fails, an error array will be returned with a status and message.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Tickets.Tickets.quickAddMilestone`

Adds a milestone quickly with the given parameters.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.quickAddMilestone",
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
| `params` | **array** | An associative array of milestone details, which includes:<br />- &#039;headline&#039;: string, The title or headline of the milestone.<br />- &#039;projectId&#039;: int&amp;#124;null, The ID of the project associated with the milestone (optional).<br />- &#039;editorId&#039;: int&amp;#124;null, The user ID of the editor creating the milestone (optional).<br />- &#039;userId&#039;: int&amp;#124;null, The user ID associated with the milestone (optional).<br />- &#039;dependentMilestone&#039;: int&amp;#124;null, The ID of a milestone it depends on (optional).<br />- &#039;tags&#039;: string&amp;#124;null, Tags related to the milestone (optional).<br />- &#039;editFrom&#039;: string&amp;#124;null, Start time of editing (optional).<br />- &#039;editTo&#039;: string&amp;#124;null, End time of editing (optional). |


**Returns:**
Returns the ticket creation result. If an error occurs, an array with 'status' and 'message' keys is returned.
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

Updates the details of an existing ticket based on the provided parameters.

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
| `values` | **array** | An associative array containing the ticket details to be updated, which includes:<br />- &#039;id&#039;: int, The ID of the ticket to be updated.<br />- &#039;headline&#039;: string&amp;#124;null, The title or headline of the ticket (optional).<br />- &#039;type&#039;: string&amp;#124;null, The type or category of the ticket (optional).<br />- &#039;description&#039;: string&amp;#124;null, The description of the ticket (optional).<br />- &#039;projectId&#039;: int&amp;#124;null, The ID of the project associated with the ticket (optional).<br />- &#039;editorId&#039;: int&amp;#124;null, The user ID of the editor updating the ticket (optional).<br />- &#039;dateToFinish&#039;: string&amp;#124;null, The intended completion date for the ticket (optional).<br />- &#039;timeToFinish&#039;: string&amp;#124;null, The intended completion time for the ticket (optional).<br />- &#039;status&#039;: int&amp;#124;null, The current status of the ticket (optional).<br />- &#039;planHours&#039;: string&amp;#124;null, The planned hours for the ticket (optional).<br />- &#039;tags&#039;: string&amp;#124;null, Tags associated with the ticket (optional).<br />- &#039;sprint&#039;: string&amp;#124;null, The sprint associated with the ticket (optional).<br />- &#039;storypoints&#039;: string&amp;#124;null, The story points for the ticket (optional).<br />- &#039;hourRemaining&#039;: string&amp;#124;null, The remaining hours for the ticket (optional).<br />- &#039;priority&#039;: int&amp;#124;null, The priority level of the ticket (optional).<br />- &#039;acceptanceCriteria&#039;: string&amp;#124;null, Acceptance criteria for completing the ticket (optional).<br />- &#039;editFrom&#039;: string&amp;#124;null, Start date of ticket editing (optional).<br />- &#039;timeFrom&#039;: string&amp;#124;null, Start time of ticket editing (optional).<br />- &#039;editTo&#039;: string&amp;#124;null, End date for ticket editing (optional).<br />- &#039;timeTo&#039;: string&amp;#124;null, End time for ticket editing (optional).<br />- &#039;dependingTicketId&#039;: int&amp;#124;null, A ticket ID this ticket depends on (optional).<br />- &#039;milestoneid&#039;: int&amp;#124;null, The ID of the milestone associated with this ticket (optional).<br />Fields that are not sent keep their stored value (partial update, #3701);<br />send a field with an empty value to clear it. |


**Returns:**
Returns true if the ticket is successfully updated.
If an error occurs, an array with keys 'msg' and 'type' is returned. Returns false if the update operation fails.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Tickets.Tickets.getAllDoneUserTickets`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getAllDoneUserTickets",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ?int,
        "project": ?int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **?int** |  |
| `project` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getMyClosedTicketsForDate`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getMyClosedTicketsForDate",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ?int,
        "date": ?string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **?int** |  |
| `date` | **?string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getMyClosedTicketsForRange`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getMyClosedTicketsForRange",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ?int,
        "from": ?string,
        "to": ?string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **?int** |  |
| `from` | **?string** |  |
| `to` | **?string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.getMyCommentedTicketsForRange`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.getMyCommentedTicketsForRange",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": ?int,
        "from": ?string,
        "to": ?string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **?int** |  |
| `from` | **?string** |  |
| `to` | **?string** |  |


**Returns:**
Raw ticket rows (id, headline,
                                         projectName, editorId, status, …).

Note: these rows do NOT carry the resolved statusLabel / statusClass /
statusType that the getAll*UserTickets methods attach.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---
### `leantime.rpc.Tickets.Tickets.markTicketReopen`



```json
{
    "method": "leantime.rpc.Tickets.Tickets.markTicketReopen",
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
    "result": bool
}
```



---
### `leantime.rpc.Tickets.Tickets.markTicketDone`

Mark a ticket done by resolving the project's first DONE-statusType status and patching to
it. Mobile's swipe-to-complete (the marquee gesture). Companion to {@see markTicketReopen}.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.markTicketDone",
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
    "result": bool
}
```



---
### `leantime.rpc.Tickets.Tickets.patchTicket`

Authorized JSON-RPC entry point for patching a single ticket field.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.patchTicket",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "values": array,
        "strict": bool,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The ticket id to update |
| `values` | **array** | The fields to update |
| `strict` | **bool** | Reject the whole patch when any field is unknown (default false). |


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
### `leantime.rpc.Tickets.Tickets.setTicketStatusByType`

Set a ticket's status from a semantic status type ("new" / "inprogress" / "done").

```json
{
    "method": "leantime.rpc.Tickets.Tickets.setTicketStatusByType",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "ticketId": int,
        "statusType": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticketId` | **int** |  |
| `statusType` | **string** |  |


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

moveTicket - Moves a ticket from one project to another. Milestone children will be moved as well.

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
        "params": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|string[]
}
```



---
### `leantime.rpc.Tickets.Tickets.getMilestone`

Loads a milestone (or any ticket) by id for the milestone dialog.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getMilestone",
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
| `id` | **int** | The ticket/milestone id. |


**Returns:**
The milestone model, or false if not found or not viewable.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \Leantime\Domain\Tickets\Models\Tickets|bool
}
```



---
### `leantime.rpc.Tickets.Tickets.addMilestoneComment`

Adds a comment to a milestone and fires the milestone comment
notification to project users. Mirrors the legacy EditMilestone
controller flow exactly (comment add + dedicated milestone comment
notification on top of the generic comment notification).

```json
{
    "method": "leantime.rpc.Tickets.Tickets.addMilestoneComment",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": array,
        "milestone": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | Request params containing &#039;id&#039;, &#039;text&#039; and &#039;father&#039;. |
| `milestone` | **mixed** | The milestone entity the comment belongs to (TicketModel or false when not found). |


**Returns:**
True if the comment was added, false otherwise.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Tickets.Tickets.updateMilestoneFromDialog`

Updates a milestone from the milestone dialog and, on success, fires the
milestone-updated notification to project users. Wraps
quickUpdateMilestone() so existing non-dialog callers keep their current
(notification-free) behavior.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.updateMilestoneFromDialog",
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
| `params` | **array** | Milestone fields including &#039;id&#039; and &#039;headline&#039;. |


**Returns:**
The quickUpdateMilestone result.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Tickets.Tickets.createMilestoneFromDialog`

Creates a milestone from the milestone dialog and, on success, fires the
milestone-created notification to project users. Wraps
quickAddMilestone() so existing non-dialog callers keep their current
(notification-free) behavior.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.createMilestoneFromDialog",
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
| `params` | **array** | Milestone fields including &#039;headline&#039;. |


**Returns:**
The new milestone id on success, otherwise the quickAddMilestone result.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool|int
}
```



---
### `leantime.rpc.Tickets.Tickets.getClientNameById`

Resolves a client's display name by id. Returns an empty string when no
id is given or the client cannot be found.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getClientNameById",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "clientId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **int** | The client id (0 means &quot;no client&quot;). |


**Returns:**
The client name, or an empty string.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---
### `leantime.rpc.Tickets.Tickets.quickAddTicketFromKanban`

Handles the Kanban quick-add flow: maps the active swimlane context onto
the new task (priority, story points, milestone, editor, sprint, type or
a due-date bucket), creates the task, and manages the
stay-open/error reopen flash state. Returns a normalized result so the
controller only has to set the notification and redirect.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.quickAddTicketFromKanban",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "formParams": array,
        "swimlane": string|null,
        "groupBy": string|null,
        "stayOpen": bool,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formParams` | **array** | Base quick-add fields (headline, status, milestone, sprint, projectId, editorId). |
| `swimlane` | **string|null** | The swimlane value the task was added under. |
| `groupBy` | **string|null** | The active Kanban grouping field. |
| `stayOpen` | **bool** | Whether the quick-add form should stay open after a successful add. |


**Returns:**
Normalized result for the controller.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{success: bool, headline: string, status: mixed, message: string}
}
```



---
### `leantime.rpc.Tickets.Tickets.quickAddProgramTicket`

Quick-add a task from the program (cross-project) kanban.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.quickAddProgramTicket",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "formParams": array,
        "swimlane": ?string,
        "groupBy": ?string,
        "stayOpen": bool,
        "projectId": int,
        "statusType": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formParams` | **array** |  |
| `swimlane` | **?string** |  |
| `groupBy` | **?string** |  |
| `stayOpen` | **bool** |  |
| `projectId` | **int** |  |
| `statusType` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Tickets.Tickets.upsertSubtask`

Create a subtask under a parent ticket, or update one of the parent's existing subtasks.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.upsertSubtask",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": mixed,
        "parentTicket": \Leantime\Domain\Tickets\Models\Tickets|array|int|string|false|null,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** | Subtask fields (headline, status, ...); `subtaskId` selects an update. Any non-array is rejected. |
| `parentTicket` | **\Leantime\Domain\Tickets\Models\Tickets|array|int|string|false|null** | The parent ticket (or its id). |


**Returns:**
True on success, false when the parent/subtask cannot be resolved or the write fails.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Tickets.Tickets.sortTickets`

Authorized JSON-RPC entry point for Gantt re-sorting of tickets/milestones.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.sortTickets",
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
| `params` | **array** | Array of ticketId =&gt; sortPosition from Gantt drag-drop |


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
### `leantime.rpc.Tickets.Tickets.updateTicketStatusAndSorting`

Applies a kanban drag: sets the status of the posted cards and their manual kanban order.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.updateTicketStatusAndSorting",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": mixed,
        "handler": string|null,
        "preserveSortIndex": bool,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** | statusKey =&gt; serialized card list (&quot;ticket[]=1&amp;ticket[]=2&quot;); anything<br />but an array (e.g. a malformed RPC call) is rejected. |
| `handler` | **string|null** | The dragged card (ticket_ID); only it may change status. |
| `preserveSortIndex` | **bool** | True when the board is sorted by a field rather than the<br />manual order: statuses change but kanbanSortIndex is kept. |


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
        "id": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


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
        "id": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


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
### `leantime.rpc.Tickets.Tickets.getProgramTicketTemplateAssignments`

Build the template assignments for a program-level cross-project task board.

```json
{
    "method": "leantime.rpc.Tickets.Tickets.getProgramTicketTemplateAssignments",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": array,
        "programId": int,
        "childIds": int[],
        "availableProjects": array<int,string>,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array** | Incoming request/search parameters. |
| `programId` | **int** | The program project id (owns the shared sprints + canonical labels). |
| `childIds` | **int[]** | The child project ids the board spans. Re-checked here: ids the<br />caller may not view are dropped (this is an @api entry point). |
| `availableProjects` | **array<int,string>** | id =&gt; name map used by the project filter/grouping. |


**Returns:**

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

