# Import from Jira, Trello, Asana or a spreadsheet

You can bring your to-dos, projects, users, ideas, [goals](using-leantime/goals.md) and [milestones](using-leantime/roadmap-planning.md) into Leantime from a CSV file. Any tool that exports CSV works: Jira, Trello, Asana, Monday, ClickUp, Excel or Google Sheets.

**At a glance**

- **Time:** 10 to 30 minutes, depending on how much you tidy the file first
- **Level:** Beginner
- **You need:** an Administrator or Owner account in Leantime, and a CSV export from your old tool
- **At the end:** your to-dos in Leantime, with their titles, descriptions, assignees, statuses and due dates

## How does the import work?

You upload a CSV file, choose what it contains (for example To-Dos), and match each column to a Leantime field. Leantime checks the values, shows you what it will import, and imports it when you confirm. Each row becomes one item.

## Before you start

Import in this order, so each step finds what the next one needs:

1. **People.** Add your team, or import them from a CSV of users. To-dos are assigned by email address, so everyone has to exist first.
2. **Projects.** Create them, or import them from their own CSV.
3. **Project teams.** Add each person to the projects they work on (see [How do I add people to a project?](using-leantime/managing-projects.md#how-do-i-add-people-to-a-project)). A to-do can only be assigned to someone on its project's team.
4. **Milestones,** if you use them.
5. **To-dos.**

Imported to-dos send the same notifications as to-dos you add by hand. Each assignee gets "assigned to you" in their notifications, and by email or on their phone if they have those switched on. The project team gets an update, filtered by each person's own [notification settings](using-leantime/notifications.md#how-do-i-choose-which-notifications-i-get-in-leantime). You, the person importing, get neither: not for to-dos assigned to you, and not for the team update. For a big import, tell your team first.

## Step 1: Export from your old tool

| Tool | Where to find the CSV export |
|---|---|
| Jira | Filters → **Export** → **Export Excel CSV (all fields)** |
| Trello | Board menu → **Print, export and share** → **Export as CSV** (not on every Trello plan) |
| Asana | Project menu → **Export/Print** → **CSV** |
| Spreadsheet | **File** → **Download** or **Save as** → **CSV** |

The menus of other tools change often. If yours look different, search their help for "export CSV".

## Step 2: Prepare the file

Leantime fills in the matching automatically when a column has the same name as the Leantime field. Renaming your columns before you upload saves most of the work:

| Rename the column to | Use it for | Values Leantime expects |
|---|---|---|
| `Title` | The to-do's name | Text. Required. |
| `Description` | Details | Text |
| `Assigned To` | Who does it | The person's **email address** in Leantime, on **every** row |
| `Status` | Where it stands | A status name from the project's board, like `New`, `In Progress` or `Done` |
| `Due Date` | When it's due | A date in your own date format from **My Profile**, like `12/01/2026`, or `2026-12-01` |
| `Priority` | How urgent it is | A **number**: 1 Critical, 2 High, 3 Medium, 4 Low, 5 Lowest |
| `Project` | Which project it goes into | The project's exact name in Leantime |
| `Milestone` | Which milestone it belongs to | The milestone's **ID number** in Leantime, not its name. The milestone must already exist. |
| `Tags` | Labels | Text |

Also check:

- **Every row has an assignee's email.** An empty cell, or a name instead of an email, stops the import with "The Author/userId column must contain only valid User emails". To assign everything to yourself, delete the `Assigned To` column: without it, every to-do is assigned to the person importing.
- **Assignees are on the project's team.** Someone who isn't stops the import at that row (see [Why didn't everything import?](#why-didnt-everything-import)).
- **Statuses match.** A status that doesn't exist in the project, like Jira's `To Do`, becomes the project's **New** status.
- **Priorities are numbers.** Words like `High` are left out without a warning. Replace them with numbers first; in a spreadsheet, use find and replace.
- **Dates are in a format Leantime reads.** Jira's `01/Dec/26 9:00 AM` and dates with milliseconds, like `2026-12-01T17:00:00.000Z`, are rejected. Change them to `2026-12-01`.
- **Delete the columns you don't need.** It makes the matching screen shorter.

### What to change for Jira, Trello or Asana

Column names in exports can vary with your settings and plan. These are the usual ones.

**Jira**

| Jira column | Rename to | Change |
|---|---|---|
| Summary | `Title` | |
| Description | `Description` | |
| Assignee | `Assigned To` | Jira exports names. Replace each name with the person's email in Leantime |
| Status | `Status` | Rename `To Do` to `New`, or leave it: it becomes **New** |
| Priority | `Priority` | Highest → 1, High → 2, Medium → 3, Low → 4, Lowest → 5 |
| Due date | `Due Date` | Change dates like `01/Dec/26 9:00 AM` to `2026-12-01` |
| Labels | `Tags` | |

**Trello**

| Trello column | Rename to | Change |
|---|---|---|
| Card Name | `Title` | |
| Card Description | `Description` | |
| Members | `Assigned To` | Trello exports names. Replace them with one email per card |
| List Name | `Status` | Rename each list to a status in your Leantime project |
| Due Date | `Due Date` | Keep only the date, like `2026-12-01` |
| Labels | `Tags` | |

**Asana**

| Asana column | Rename to | Change |
|---|---|---|
| Name | `Title` | |
| Notes | `Description` | |
| Assignee Email | `Assigned To` | Delete the **Assignee** column with the names |
| Section/Column | `Status` | Rename each section to a status in your Leantime project |
| Due Date | `Due Date` | Already `2026-12-01` |
| Tags | `Tags` | |

Fill in an email for tasks nobody was assigned to, or remove those rows and import them separately without the `Assigned To` column.

## Step 3: Import

1. Open **Integrations** from the company menu. Only Administrators and Owners see it.
2. Under **CSV Import**, click **Import CSV** and upload your file.
3. **What are you importing?** Choose **To-Dos** (or Projects, Users, Ideas, Goals or Milestones) and click **Next**.
4. **Field matching:** check that every column points at the right Leantime field. Columns you renamed in step 2 are already matched. Choose **Don't map** for anything you don't want.

   > **Important:** Columns Leantime doesn't recognise are set to **Id** at first. Change each one to the right field, or to **Don't map**, before you continue. A column left on **Id** is read as Leantime IDs: a row whose number matches an existing to-do or project **updates that item** instead of creating a new one. Only match a column to **Id** when it holds IDs from this Leantime, on purpose (see [Can I update items I already imported?](#can-i-update-items-i-already-imported)).

5. **Review:** Leantime lists any problems it found, such as an unknown email address, a date it can't read, a missing required column or an effort value it doesn't know. While there are problems, you can only click **Go back**: fix the matching, or fix the CSV and upload it again.
6. When there are no problems, click **Confirm**. You'll see **Your data was synced successfully.**
7. **Look for a red message at the top** before you close the page. If there is one, not everything was imported (see below).

> **Tip:** Try a file with three or four rows first, check the result on the board, then import the rest.

## Why didn't everything import?

Some problems only show up when Leantime saves the rows, after **Confirm**. Then the import stops at the row with the problem, and a red message says why, for example "There was a problem with the import Ben Ortiz can't see the Website Redesign project because they aren't on its team." The page still says **Your data was synced successfully.**

The rows above that row are imported; that row and the ones after it aren't. To finish:

1. Fix the problem, for example by adding the person to the project's team.
2. Delete the rows that were already imported from your CSV, so they aren't created twice.
3. Import the file again.

## What can I import?

| Import | Fields you can fill |
|---|---|
| To-Dos | Title, Description, Assigned To, Priority, Status, Due Date, Effort, Plan Hours, Hours Remaining, Sprint, Tags, Milestone, Project, Created On |
| Projects | Project Name, **ClientId** (required: the ID of an existing client, or `0` for none), Details, Start Date, End Date, Hour Budget, Dollar Budget, Assigned Users, Permission Settings |
| Users | Email, First Name, Last Name, Role, Job Title, Job Level, Department, Phone, Send Invite |
| Ideas | Title, Description, **CanvasId** (required: the ID of an existing idea board), Author, Status, MilestoneId |
| Goals | Title, **CanvasId** (required: the ID of an existing goal board), Start Value, Current Value, End Value (all required), Metric, Status, Start Date, End Date, Assigned To |
| Milestones | Title, Description, Assigned To, Status, Edit From / Edit To (the milestone's dates), Project |

Imported to-dos are all of the type **Task**; change the type afterwards where you need Bug or Story. Comments, attachments and time entries aren't part of the CSV import.

## Can I update items I already imported?

Yes, for most imports. Export or note the Leantime IDs, put them in an `Id` column and match it to **Id**. How rows are handled depends on what you import:

| Import | Rows with an Id | Rows without an Id |
|---|---|---|
| To-Dos, Projects | Update that item | Create a new item |
| Ideas, Goals, Milestones | Update that item | Also treated as updates, so nothing new is created |
| Users | No Id column. Users are matched by email: an existing email updates that user | A new email creates a user |

So for ideas, goals and milestones, put new items and updates in **separate files**, and leave the Id column out of the file with new items.

## Related

- [User management](using-leantime/user-management.md): invite your team before you import their to-dos.
- [Projects](using-leantime/managing-projects.md)
- [Move Leantime to a new server](installation/move-server.md)
