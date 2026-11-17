---
title: "Kanban"
description: "Kanban is a way to manage work by making it visible and keeping it moving. The Kanban Guide defines it as \"a strategy for optimizing the flow of value…"
---

Kanban is a way to manage work by making it visible and keeping it moving. The [Kanban Guide](https://kanbanguides.org/english/) defines it as "a strategy for optimizing the flow of value through a process." In practice, that usually starts with a board: a column for each stage of the work, and a card for each piece of work that moves across it.

The board is the easy part. What makes it Kanban is limiting how much is in progress at once, and using what the board shows to improve how the work flows.

## Where does Kanban come from?

*Kanban* is Japanese for "signboard". At Toyota, as part of the production system that became [Lean](/knowledge-base/whatislean/), cards signalled when a step needed more parts, so nothing was made before it was needed. In the 2000s, software teams adapted the idea to knowledge work, and the board became its best-known form.

Kanban is often grouped with [agile](/knowledge-base/agile/) methods, but it comes from Lean. It doesn't need sprints or set roles: work can flow continuously, and a team can start with the process it already has. It also works alongside [Scrum](/knowledge-base/scrum/): many Scrum teams use a Kanban board, and its limits on work in progress, inside their sprints.

## What are the Kanban practices?

The Kanban Guide names three practices that work together:

1. **Define and visualize the workflow.** Agree on the stages work goes through, show them as columns, and agree when work counts as started and when it counts as finished.
2. **Actively manage the work in the workflow.** Limit how much is in progress, keep work from getting stuck, and pull new work in only when there's room for it.
3. **Improve the workflow.** Look at how the work actually flows, and change the process when something gets in the way.

## Why limit work in progress?

Starting is easy; finishing is hard. When everyone has five things on the go, each one waits while the others get attention, and everything takes longer. Switching between tasks costs time too.

A work-in-progress (WIP) limit caps how many cards can be in a column, or in the whole board, at once. When a column is full, the team helps finish what's there before starting more. It feels slower, but work gets done sooner, and problems surface instead of hiding in a pile.

There's no perfect number. Start with a limit a little lower than what the team usually has in progress, watch what happens, and adjust.

## How do I know if work is flowing?

The Kanban Guide names four measures of flow:

| Measure | What it tells you |
| --- | --- |
| **Work in progress** | How many items are started but not finished |
| **Throughput** | How many items are finished per week (or day) |
| **Work item age** | How long a started item has been in progress |
| **Cycle time** | How long an item took from start to finish |

A card that's much older than the others is a good place to start a conversation.

## What are swimlanes?

Swimlanes split the board into rows. Columns answer "where is this work?"; lanes answer "what kind of work is this?". Common lanes are by priority, person, project, client or funder, or type of work.

Many teams add an **expedite** lane for the truly urgent, with a limit of one card, so urgent work gets through without everything else becoming urgent too.

Keep to one kind of lane at a time, and only a handful of lanes. Lanes that don't help you decide what to do next are just more to scan.

## What does a Kanban board look like outside software?

Any repeatable process fits. For example:

- **A grant pipeline:** Researching → Writing → Submitted → Awarded → Reporting → Closed.
- **Client work at an agency:** Briefed → In progress → Client review → Revisions → Delivered, with a lane per client.
- **Content:** Ideas → Planning → Writing → Review → Published.

## Doing it in Leantime

- **The board:** the To-Dos [Kanban view](/using-leantime/task-management/) has a column per status. Rename, add or hide statuses to match your workflow, and decide which ones count as in progress and done.
- **Swimlanes:** **Group By** on the Kanban board splits it into lanes by priority, person, milestone, sprint, due date and more.
- **WIP limits:** Leantime doesn't cap a column for you. Agree on a limit as a team and keep an eye on the **In Progress** column; **Group By → User** shows who has too much on.
- **Flow:** the **Cumulative Flow** chart in [Reports](/using-leantime/reports/) shows work in progress over time. A band that keeps widening while **Done** stays flat means work is piling up.

## Sources and further reading

- John Coleman and Daniel Vacanti, [The Kanban Guide](https://kanbanguides.org/english/) (May 2025)
- David J. Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business* (2010)
- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production* (1978; English 1988)
