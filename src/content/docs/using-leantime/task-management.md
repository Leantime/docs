---
title: "Task management"
description: "Manage to-dos (tasks) in Leantime: add them, break them into subtasks, set dependencies, switch between kanban, table and list views, and use swimlanes."
head:
  - tag: title
    content: "To-dos (tasks) in Leantime: kanban, subtasks and sprints"
---

To-Dos are the work in a project: each one has an owner, a status, a priority and a size, and can belong to a milestone. Open **To-Dos** in a project's menu to see them as a Kanban board, a table or a list. Break bigger to-dos into subtasks, add collaborators who need to follow along, and group the board into swimlanes when it gets busy.

![The To-Dos Kanban board of the Open the Eastside pantry project: columns New, Blocked, In Progress, Waiting for Approval and Done, with New outlined](/_images/using-leantime/todos-kanban.webp)

## How do I add a to-do in Leantime?

- **From anywhere on the page:** click **+ New → Add To-Do**. A window opens where you fill in everything at once.
- **Straight into a column:** click **Add To-Do** at the top of a Kanban column, type the title and press **Enter**. **Shift+Enter** saves it and starts the next one, **Esc** cancels. The to-do starts in that column's status and is assigned to you.
- **In the List view:** type in the **Create new task** box.

Adding to-dos needs the Editor role or higher.

## What's on a to-do?

Click a to-do's title to open it. The **Details** tab holds everything about it:

![A to-do's Details tab: the title, Status, Priority, Effort, Assigned to with Assign to me, Collaborators (outlined), Due Date, Tags and the description, with Organization (Type, Project, Milestone, Sprint, Related To) on the right](/_images/using-leantime/todos-details.webp)

| Field | What it's for |
| --- | --- |
| **Status** | Where the work is: New, In Progress, Done and so on (see [How do I change the statuses?](#how-do-i-change-the-statuses)) |
| **Priority** | Critical, High, Medium, Low or Lowest |
| **Effort** | How big it is: < 2min, XS, S, M, L, XL or XXL |
| **Assigned to** | The one person who owns it. **Assign to me** takes it yourself. |
| **Collaborators** | Others who work on it or need to follow it |
| **Due Date** | When it's due, with an optional time |
| **Tags** | Your own labels, to find related to-dos |
| **Type**, **Project**, **Milestone**, **Sprint**, **Related To** | Under **Organization**: what kind of to-do it is (Task, Subtask, Story or Bug), which project and milestone it belongs to, which sprint, and which to-do it's part of |
| **Work Start**, **Work End**, **Planned Hours / Hours Left** | Under **Schedule**: when you plan to work on it and how long it should take |

Below the form are the to-do's **Subtasks** and the **Discussion**, where your team comments and @mentions each other. The other tabs hold the to-do's **Files**, its **Time Tracking** and its **History**.

## Can a to-do have more than one person?

A to-do has one **assignee**, who owns it, so it's always clear who moves it forward. Anyone else who works on it or needs to follow it goes in **Collaborators**.

- **The assignee** gets an "Assigned to you" notification, unless they assigned it to themselves.
- **Collaborators** are told when the to-do is created, changed or moves to another status, even if their [notification settings](/using-leantime/notifications/) would otherwise hide that project's updates.
- **Anyone you @mention** in a comment or the description is notified too.

If several people each do a separate part, give each part its own subtask and assignee.

## How do I break a to-do into subtasks?

1. **Open the to-do** and scroll to **Subtasks**.
2. **Click Add Task,** type what needs doing, and click **Save**.

![The Subtasks section of a to-do: Add Task (outlined), and two subtasks with their effort and status](/_images/using-leantime/todos-subtasks.webp)

A subtask is a to-do of its own: it has its own assignee, status, effort and due date, and it inherits its parent's project, milestone and sprint. Change its status right in the list; open it to change the rest. On the Kanban board, subtasks are separate cards, with the parent's name above the title, and the parent's card shows how many subtasks it has.

To make an existing to-do a subtask of another one, pick the parent under **Organization → Related To**.

## Can one to-do depend on another?

Leantime links to-dos in one way: a subtask belongs to its parent (**Related To**). There's no separate "depends on" or "blocked by" link between two to-dos.

- **Waiting on something?** Move the to-do to **Blocked**, and say what it's waiting for in a comment.
- **One stage can't start before another ends?** Use milestones. A milestone can **depend on** another milestone, and the Milestones timeline draws an arrow between them (see [Milestones](/using-leantime/roadmap-planning/)).
- **Work that has to happen in order inside one to-do?** Break it into subtasks and work through them.

## Which views can I use?

Switch between them at the top left of the To-Dos page. Leantime opens the one you used last.

- **Kanban:** a column per status. Drag a card to change its status. Change a card's milestone, effort, priority or assignee from its chips, without opening it. **Cards** chooses what each card shows and how cards are sorted.
- **Table:** one row per to-do, with columns you can sort and hide (**Columns**), and **Export** to a CSV file.
- **List:** to-dos on the left; click one to edit it on the right.

The timeline isn't here: it's under **Milestones** in the project menu, where **Show Tasks** adds to-dos to it.

## How do I use swimlanes?

Swimlanes split the Kanban board into rows, so a busy board is easier to scan. Click **Group By** and choose what each row stands for:

![The Kanban board grouped by priority: a Critical row with its to-do in the Blocked column, and the High row below, with Group By outlined](/_images/using-leantime/todos-swimlanes.webp)

- **Priority**, **Effort**, **Type** or **Milestone**
- **User:** one row per assignee
- **Sprint**
- **Due Date:** Overdue, Due This Week, Due Next Week, Due Later and No Due Date
- **Parent Task:** a row for each to-do's subtasks, named after the parent. Subtasks of subtasks go under the top-level parent. To-dos without a parent, including the parents themselves, stay in **No Parent Task**.

Click a row's name to collapse it. **Add To-Do** inside a row fills in that row's value for you, like the priority, the assignee or the milestone. Two exceptions: in a **Parent Task** row the new to-do isn't a subtask (add subtasks from the parent's **Subtasks** section, or set **Related To**), and in the **Overdue** row it gets today's date, so it moves to **Due This Week**. Grouping is just a view: choose **No Grouping** to go back, and nothing about your to-dos changes. In the Table and List views you can also group by **Status**.

## How do I filter or find to-dos?

Click **Filter** and choose a **User**, **Milestone**, **Type**, **Priority** or **Status**, or type a **Search Term**, then click **Search**. The number on the button shows how many filters are on. **Not Done** under Status hides finished work.

![The Filter panel: User, Milestone, Type, Priority, Status and Search Term, with the Search button](/_images/using-leantime/todos-filter.webp)

To find a to-do in any project, use the search box at the top of every page.

## How do I change the statuses?

Every project starts with **New**, **Blocked**, **In Progress**, **Waiting for Approval** and **Done**, plus **Archived**, which is hidden from the board.

To rename, add, reorder or hide statuses, open **Project Settings → To-Do Status Settings**. For each status you set its label, color, whether it shows on the Kanban board, and how Reports count it (**Report As**: New, In Progress, Done, or not at all). A to-do in a status reported as Done counts as finished in Reports and milestone progress. If you move it there while your timer runs on it, your timer stops; other people's timers keep running. **Archived** can't be renamed or removed. You need the Manager role or higher.

![Project Settings, To-Do Status Settings (outlined): each status with its sort position, label, color, Report As and Show on Kanban Board](/_images/using-leantime/todos-statuses.webp)

The **⋮** menu on a Kanban column has the same options for that column: **Edit Label** and **Add/Remove Columns**.

## How do I move a to-do to another project?

Open the to-do's **⋮** menu and choose **Move To-Do**, then pick the project. Its sprint, milestone and parent are cleared, because they belong to the old project. You need edit rights in both projects.

## How do I track time on a to-do?

Open the to-do's **⋮** menu and choose **Track Time → Start Work**; choose **Stop Work** when you're done. To log time afterwards, open the to-do's **Time Tracking** tab. Both need time tracking to be on for the project (see [Time tracking](/using-leantime/timesheets/)).

## What about sprints?

Sprints are optional. Use the menu next to **To-Dos** at the top of the page to **Create Sprint**, or to switch between **All To-Dos**, the **Backlog** and each sprint. A to-do's **Sprint** field puts it in one.

## Who can do what with to-dos?

| Role | To-dos |
| --- | --- |
| Read Only | See them |
| Commenter | Also comment and add files |
| Editor and above | Create, edit, move and delete them |
| Manager and above | Also change the project's statuses |

See [User Management](/using-leantime/user-management/) for the roles.

## Related

- [How should I organize my work?](/getting-started/organize-your-work/)
- [Milestones](/using-leantime/roadmap-planning/)
- [My Work Dashboard](/using-leantime/my-work-dashboard/)
- [Notifications](/using-leantime/notifications/)
