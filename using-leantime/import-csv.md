# Import from Jira, Trello, Asana or a spreadsheet

You can bring your to-dos, projects, users, ideas, goals and milestones into Leantime from a CSV file. Any tool that exports CSV works: Jira, Trello, Asana, Monday, ClickUp, Excel or Google Sheets.

**At a glance**

- **Time:** 10 to 30 minutes, depending on how much you tidy the file first
- **Level:** Beginner
- **You need:** an administrator account in Leantime, and a CSV export from your old tool
- **At the end:** your to-dos in Leantime, with their titles, descriptions, assignees, statuses and due dates

## How does the import work?

You upload a CSV file, choose what it contains (for example To-Dos), and match each column to a Leantime field. Leantime checks the values, shows you what it will import, and imports it when you confirm. Each row becomes one item.

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
| `Title` | The to-do's name (Jira: Summary, Asana: Name) | Text. Required. |
| `Description` | Details | Text |
| `Assigned To` | Who does it | The person's **email address**, as used in Leantime |
| `Status` | Where it stands | A status name from the project's board, like `New`, `In Progress` or `Done` |
| `Due Date` | When it's due | A date, like `2026-12-01` |
| `Priority` | How urgent it is | A **number**: 1 Critical, 2 High, 3 Medium, 4 Low, 5 Lowest |
| `Project` | Which project it goes into | The project's exact name in Leantime |
| `Milestone` | Which milestone it belongs to | The milestone's **ID number** in Leantime, not its name. The milestone must already exist. |
| `Tags` | Labels | Text |

Also check:

- **People exist first.** Assignees are matched by email, so add your team to Leantime first (you can import users from a CSV too).
- **Projects exist first.** Create the projects, or import them first from their own CSV.
- **Statuses match.** A status that doesn't exist in the project, like Jira's `To Do`, becomes the project's **New** status.
- **Priorities are numbers.** Words like `High` aren't imported. Replace them with numbers first; in a spreadsheet, use find and replace.
- **Delete the columns you don't need.** It makes the matching screen shorter.

## Step 3: Import

1. Open **Integrations** from the company menu. Only administrators see it.
2. Under **CSV Import**, click **Import CSV** and upload your file.
3. **What are you importing?** Choose **To-Dos** (or Projects, Users, Ideas, Goals or Milestones) and click **Next**.
4. **Field matching:** check that every column points at the right Leantime field. Columns you renamed in step 2 are already matched. Choose **Don't map** for anything you don't want.

   > **Important:** Columns Leantime doesn't recognise are set to **Id** at first. Change each one to the right field, or to **Don't map**, before you continue. A column left on **Id** is read as Leantime IDs: a row whose number matches an existing to-do or project **updates that item** instead of creating a new one. Only match a column to **Id** when it holds IDs from this Leantime, on purpose (see [updating items](using-leantime/import-csv.md?id=can-i-update-items-i-already-imported)).

5. **Review:** Leantime lists any problems it found, such as an unknown email address, a missing required column or an effort value it doesn't know. While there are problems, you can only click **Go back**: fix the matching, or fix the CSV and upload it again.
6. When there are no problems, click **Confirm**. You'll see **Your data was synced successfully.**

> **Tip:** Try a file with three or four rows first, check the result on the board, then import the rest.

## What can I import?

| Import | Fields you can fill |
|---|---|
| To-Dos | Title, Description, Type (`task`, `bug`, `story`), Assigned To, Priority, Status, Due Date, Effort, Plan Hours, Hours Remaining, Sprint, Tags, Milestone, Project, Created On, Edit From / Edit To |
| Projects | Project Name, **ClientId** (required: the ID of an existing client, or `0` for none), Details, Start Date, End Date, Hour Budget, Dollar Budget, Assigned Users, Permission Settings |
| Users | Email, First Name, Last Name, Role, Job Title, Job Level, Department, Phone, Send Invite |
| Ideas | Title, Description, **CanvasId** (required: the ID of an existing idea board), Author, Status, MilestoneId |
| Goals | Title, **CanvasId** (required: the ID of an existing goal board), Start Value, Current Value, End Value (all required), Metric, Status, Start Date, End Date, Assigned To |
| Milestones | Title, Description, Assigned To, Status, Edit From / Edit To (the milestone's dates), Project |

Comments, attachments and time entries aren't part of the CSV import.

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
- [Move Leantime to a new server](installation/move-server.md)
