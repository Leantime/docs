---
title: "Goalcanvas API"
description: "Reference for the Leantime Goalcanvas JSON-RPC service: every leantime.rpc.Goalcanvas method with its parameters and return values."
---

Goalcanvas (Goals / OKRs) service.

`leantime.rpc.Goalcanvas.Goalcanvas.`


## Available Methods
### `leantime.rpc.Goalcanvas.Goalcanvas.getCanvasItemsById`

List the goals on a board (by board id), authorized for VIEW against the board's project.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getCanvasItemsById",
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
    "result": array
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.getChildGoalsForReporting`

Sum the linked children's current values for a parent goal, authorized for VIEW against
the PARENT goal's project. The cross-project roll-up of linked children is the feature;
the gate is on the parent the caller asked about. Linked goals in projects with the Goals
module switched off are left out. Returns 0 for a missing/foreign/unauthorized parent.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getChildGoalsForReporting",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "parentId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int|mixed
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.getChildrenbyKPI`

The child-goal hierarchy for a parent goal, authorized for VIEW against the PARENT goal's
project. Returns [] for a missing/foreign/unauthorized parent.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getChildrenbyKPI",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "parentId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `parentId` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.getParentKPIs`

Available parent KPIs for linking, authorized for VIEW against $projectId (dispatch gate).

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getParentKPIs",
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
| `projectId` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.getGoalsByMilestone`

Goals linked to a milestone, authorized for VIEW against the milestone's
project. Reachable beyond the milestone UI (MCP getGoalsByMilestone wraps
it verbatim), so the caller's access to the milestone cannot be assumed —
a missing/foreign/unauthorized milestone returns [].

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getGoalsByMilestone",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "milestoneId": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `milestoneId` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.getGoalMilestones`

The milestone chips for a goal + a status summary, authorized for VIEW
against the goal's project. Chips arrive already sorted (in-progress →
not-started → done, then due date). The summary drives the one-line
roll-up above the chips.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getGoalMilestones",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "goalId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `goalId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{milestones: array<int,array<string,mixed>>, summary: array{total: int, done: int, inProgress: int, notStarted: int}}
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.getMilestonesForGoals`

Batch sibling of getGoalMilestones(): hydrate milestone chips for many
goals in a single pass, so callers with a goal set (e.g. the reports
engine) avoid an N+1. Each goal is authorized for VIEW against its real
project; goals the caller can't see are silently omitted. Returns a map
keyed by goal id: every AUTHORIZED goal is present, mapping to an empty
array when it has no milestones — so callers get a predictable key set.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getMilestonesForGoals",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "goalIds": int[],
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `goalIds` | **int[]** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<int,array<string,mixed>>>
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.addMilestoneToGoal`

Link one milestone to a goal (append — leaves existing links intact).

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.addMilestoneToGoal",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "goalId": int,
        "milestoneId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `goalId` | **int** |  |
| `milestoneId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.removeMilestoneFromGoal`

Unlink one milestone from a goal (leaves the goal's other links intact).

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.removeMilestoneFromGoal",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "goalId": int,
        "milestoneId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `goalId` | **int** |  |
| `milestoneId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.getMilestonesByGoal`

A goal's milestones (edge model) for the mobile Progress feature —
authorized for VIEW against the goal's project, and each milestone is
further filtered to the caller's accessible projects as defense-in-depth
(goal→milestone links are same-project only, so normally a no-op). Returns []
for a missing/foreign/unauthorized goal. Dates are returned as stored
(UTC). A milestone may appear under several goals — this is many-to-many.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getMilestonesByGoal",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "goalId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `goalId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.getGoalRollup`

Aggregate rollup for a goal's milestones — the payload the mobile
Progress "arc" is drawn from. Authorized for VIEW against the goal's
project; milestones filtered to the caller's accessible projects.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getGoalRollup",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "goalId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `goalId` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{goalId: int, total: int, done: int, inProgress: int, notStarted: int, percentComplete: int, startDate: string|null, endDate: string|null, currentMilestoneId: int|null}
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.getSingleCanvas`

Fetch a single goal board by id, authorized for VIEW against the board's real project.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.getSingleCanvas",
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
False when missing/foreign/unauthorized.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<string,mixed>|false
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.createGoalboard`

Create a goal board, authorized for CREATE against the target project.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.createGoalboard",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.updateGoalboard`

Rename a goal board, authorized for EDIT against the board's real project.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.updateGoalboard",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.createGoal`

Create a goal item, authorized for CREATE against the target board's real project.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.createGoal",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array<string,mixed>,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array<string,mixed>** | Item values (must include `canvasId`) |


**Returns:**
New item id, or false on insert failure
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|string
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.patchGoalItem`

Patch allowlisted columns of a goal item, authorized for EDIT against the item's real
project.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.patchGoalItem",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "params": array<string,mixed>,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | Goal item id |
| `params` | **array<string,mixed>** | Fields to patch (allowlisted in the repository) |


**Returns:**
False when no allowlisted columns were present
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.pollGoals`

Poll all goals the user can access (optionally scoped to a project/board). The repository
query already filters to the user's accessible projects; the dispatch gate adds the
capability check.

```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.pollGoals",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
        "board": ?int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `board` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---
### `leantime.rpc.Goalcanvas.Goalcanvas.pollForUpdatedGoals`



```json
{
    "method": "leantime.rpc.Goalcanvas.Goalcanvas.pollForUpdatedGoals",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": ?int,
        "board": ?int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **?int** |  |
| `board` | **?int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array
}
```



---

