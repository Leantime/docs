# Import from Jira, Trello, Asana or a spreadsheet

You can bring your to-dos, projects, users, ideas, [goals](using-leantime/goals.md) and [milestones](using-leantime/roadmap-planning.md) into Leantime from a CSV or Excel file. Any tool that exports CSV or Excel works: Jira, Trello, Asana, Monday, ClickUp, Microsoft Planner, Excel or Google Sheets.

**At a glance**

- **Time:** 10 to 30 minutes, depending on how much you tidy the file first
- **Level:** Beginner
- **You need:** an Administrator or Owner account in Leantime, and a CSV or Excel (.xlsx) export from your old tool
- **At the end:** your to-dos in Leantime, with their titles, descriptions, assignees, statuses and due dates

## How does the import work?

You upload a CSV or Excel file and check what Leantime found in it. Then you choose what it contains (for example To-Dos) and match each column to a Leantime field. Leantime checks the values, shows you what it will import, and imports it when you confirm. Each row becomes one item.

You don't have to tidy the file's layout first. Leantime finds the headings below a title or export details, skips empty rows, and reads files separated by commas, semicolons or tabs, in any common text encoding.

## Before you start

Import in this order, so each step finds what the next one needs:

1. **People.** Add your team, or import them from a CSV of users. To-dos are assigned by email address, so everyone has to exist first.
2. **Projects.** Create them, or import them from their own CSV.
3. **Project teams.** Add each person to the projects they work on (see [How do I add people to a project?](using-leantime/managing-projects.md#how-do-i-add-people-to-a-project)). A to-do can only be assigned to someone on its project's team.
4. **Milestones,** if you use them.
5. **To-dos.**

An import doesn't send a notification for every to-do. Each project gets one summary instead, for example "Ada imported 24 open to-dos into Website Redesign", that links to the project. The project team gets it according to each person's own [notification settings](using-leantime/notifications.md#how-do-i-choose-which-notifications-i-get-in-leantime). People assigned to the imported to-dos get it even if they only follow their own work. Done and archived to-dos don't trigger it. You, the person importing, don't get the summary.

## Step 1: Export from your old tool

| Tool | Where to find the CSV export |
|---|---|
| Jira | Filters → **Export** → **Export Excel CSV (all fields)** |
| Trello | Board menu → **Print, export and share** → **Export as CSV** (not on every Trello plan) |
| Asana | Project menu → **Export/Print** → **CSV** |
| Excel | Upload the .xlsx file as it is. An older .xls file: **File** → **Save as** → **Excel Workbook (.xlsx)** first |
| Google Sheets | **File** → **Download** → **Microsoft Excel (.xlsx)** or **Comma-separated values (.csv)** |
| Other spreadsheets | **File** → **Save as** → **CSV** |

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
- **Assignees are on the project's team.** Someone who isn't is listed when you review the import, with the row number, and the import waits until you fix it.
- **Statuses match.** A status that doesn't exist in the project, like Jira's `To Do`, becomes the project's **New** status.
- **Priorities are numbers.** Words like `High` are left out without a warning. Replace them with numbers first; in a spreadsheet, use find and replace.
- **Dates are in a format Leantime reads.** Jira's `01/Dec/26 9:00 AM` and dates with milliseconds, like `2026-12-01T17:00:00.000Z`, are rejected. Change them to `2026-12-01`. In an Excel file, cells formatted as dates are read as dates, whatever format they show.
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
| Labels | `Tags` | Jira adds a Labels column for each label. Leantime numbers them (Labels, Labels (2) …): match each one to **Tags** and the labels are combined |

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
2. Under **CSV & Excel Import**, click **Import CSV or Excel** and upload your file.
3. **Here's what we found in your file:** check the file type, the number of rows and columns, and the first rows. Row numbers are the rows of your spreadsheet.
   - In an Excel file with several sheets, choose the **Sheet** to import. Hidden sheets aren't offered.
   - Leantime tells you when it took the headings from a lower row and left rows above them out. If your headings are on another row, choose it under **Headings are on row** and click **Change**.

   Then click **Next**.
4. **What are you importing?** Choose **To-Dos** (or Projects, Users, Ideas, Goals or Milestones) and click **Next**.
5. **Field matching:** check that every column points at the right Leantime field. Columns you renamed in step 2 are already matched; the others are set to **Don't map**. Match each field to one column only. **Tags** is the exception: match several columns to it and their values are combined.

   Only match a column to **Id** when it holds IDs from this Leantime, on purpose: a row whose Id matches an existing item **updates that item** instead of creating a new one (see [Can I update items I already imported?](#can-i-update-items-i-already-imported)).

6. **Review:** Leantime lists any problems it found, each with its row number: an unknown email address, someone who isn't on the project's team, a date it can't read, a type or effort value it doesn't know, a field matched to two columns, or a missing required column. While there are problems, you can only click **Go back**: fix the matching, or fix the file and upload it again.
7. When there are no problems, click **Confirm**. Leantime shows how many rows it imported.

> **Tip:** Try a file with three or four rows first, check the result on the board, then import the rest.

A file can hold up to 500,000 cells, for example 20,000 rows of 25 columns. For a file with more than 1,000 rows, the import can take a few minutes; if it stops, import the file in smaller parts.

## Why didn't everything import?

Some problems only show up when Leantime saves the rows, after **Confirm**. Leantime still imports every other row. The page then says **Some rows weren't imported**, with how many rows came in and a list of the others: each with its row number and the reason, for example "Row 14: There is no item with the Id 482 that you can update." If no row could be saved, it says **Nothing was imported**.

To finish:

1. Fix the rows on the list.
2. Import a file with only those rows. Importing the whole file again would create the other rows a second time.

If a row says it **may have been saved anyway**, look for it in Leantime before you import it again.

## What can I import?

| Import | Fields you can fill |
|---|---|
| To-Dos | Title, Description, Type, Assigned To, Priority, Status, Due Date, Effort, Plan Hours, Hours Remaining, Sprint, Tags, Milestone, Project, Created On |
| Projects | Project Name, **ClientId** (required: the ID of an existing client, or `0` for none), Details, Start Date, End Date, Hour Budget, Dollar Budget, Assigned Users, Permission Settings |
| Users | Email, First Name, Last Name, Role, Job Title, Job Level, Department, Phone, Send Invite |
| Ideas | Title, Description, **CanvasId** (required: the ID of an existing idea board), Author, Status, MilestoneId |
| Goals | Title, **CanvasId** (required: the ID of an existing goal board), Start Value, Current Value, End Value (all required), Metric, Status, Start Date, End Date, Assigned To |
| Milestones | Title, Description, Assigned To, Status, Edit From / Edit To (the milestone's dates), Project |

A **Type** column takes `Task`, `Story` or `Bug`; without one, imported to-dos are Tasks. Comments, attachments and time entries aren't part of the import.

## Can I update items I already imported?

Yes, for most imports. Export or note the Leantime IDs, put them in an `Id` column and match it to **Id**. An Id that doesn't match an item you can update is listed after the import, and that row is left out. How rows are handled depends on what you import:

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
