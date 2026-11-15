# Reports

Reports answer "how is this project going?" in one place: what got done, what's in progress, what's coming, and whether the goals are moving. Use them for a weekly check-in, a client update or a board meeting, or just to see your progress add up.

## How do I see a project's report in Leantime?

Open the project, open **Data Room** in the left menu and click **Reports**. The **Status Report** opens first. The second tab, **Delivery Metrics**, has the numbers behind the work.

## What's in the Status Report?

![The Status Report of Website Redesign: On Track and Print at the top, the Status Report and Delivery Metrics tabs, the period picker outlined, four numbers, Accomplished this period, Changed this period and the milestones In flight](../_images/using-leantime/reports-status.webp)

**At the top:** the project's status from its latest [project update](using-leantime/managing-projects.md#whats-on-the-project-overview) (**On Track**, **At Risk** or **Off Track**) and a **Print** button.

**The period.** The report covers one period at a time. Choose it at the top right: **last quarter**, **this quarter**, **next quarter**, or your own dates.

**The numbers:** how much of the project is done, then **Milestones completed**, milestones **In flight**, **Overdue** milestones and **Hours logged** in the period. The small badge next to a number shows the change from the period before.

**The sections below them:**

- **Needs attention** appears when something needs a look, like an overdue milestone or a goal at risk.
- **Accomplished this period:** the milestones finished in the period. This is the part to share when someone asks what got done.
- **Changed this period:** milestones that were added during the period, or whose due date moved out of it. It keeps the report honest about plans that changed.
- **In flight:** the milestones being worked on, with their due dates and how far along they are.
- **Coming up:** milestones planned for the periods after this one.
- **Goals & KPIs:** each [goal](using-leantime/goals.md) with its number, its progress and the milestones linked to it. Goals show where they stand today, whichever period you pick.
- **Status updates:** the project updates posted in the period.

## What's in Delivery Metrics?

![The Delivery Metrics tab: Planned Hours, Hours Left, Logged Hours and Open To-Dos, and the Cumulative Flow chart with its Number of To-Dos, Effort and Hours switch outlined](../_images/using-leantime/reports-metrics.webp)

- **Summary:** planned hours, hours left, logged hours and open to-dos.
- **Cumulative Flow:** how many to-dos were new, in progress and done on each day. Switch between **Number of To-Dos**, **Effort** and **Hours** above the chart. A band that keeps growing while **Done** stays flat means work is piling up.
- **Project Progress:** done and open to-dos as a ring.
- **Milestones:** each milestone's due date and progress.

Planned and logged hours only show numbers when the team plans and [tracks time](using-leantime/timesheets.md) on their to-dos.

How a to-do counts as new, in progress or done comes from its status's **Report As** setting (see [How do I change the to-do statuses?](using-leantime/managing-projects.md#how-do-i-change-the-to-do-statuses)).

## How does Leantime calculate progress?

Progress shows up in several places, and they don't all count the same way, because each answers a slightly different question. In all of them, a to-do counts as done when its status's **Report As** setting is **Done**.

| Where you see it | What it answers | How it's counted |
|---|---|---|
| **Project progress:** the Project Overview, the Project Hub cards, "% complete" at the top of the Status Report and the ring in Delivery Metrics | How much of the project's work is done? | Each to-do counts by its **effort**. A to-do without an effort counts as the project's average effort. Milestones themselves don't count. |
| **Milestone progress in Reports** and on the Milestones timeline | How much of this milestone's work is done, counting urgent work more? | Each to-do counts by its **effort × priority**: Critical ×2, High ×1.75, Medium ×1.5, Low ×1.25, Lowest ×1. A to-do without an effort counts as 3, without a priority as Medium. In the Status Report, a milestone that is itself set to Done counts as 100%. |
| **Milestone progress on a goal:** the goal's Progress tab and its card | How much of the work behind this goal is done? | Each to-do counts by its **effort** only. A to-do without an effort counts as 3. |
| **Goal progress** | How far has the number moved? | (Now − Start) ÷ (Goal − Start). A goal from 40 to 100 is 30% done at 58. |

**An example.** The milestone "Checkout rebuilt" has two to-dos, neither with an effort set. The finished one is **Critical**, the open one **Medium**.

- On the goal, it shows **50%**: each to-do counts 3, and 3 of 6 is done.
- In the Status Report, it shows **57%**: the finished to-do counts 3 × 2 = 6, the open one 3 × 1.5 = 4.5, and 6 of 10.5 is done.

Both are right: the report gives more weight to the urgent to-do that's already finished.

**The estimated finish date.** Once 10 or more to-dos in the project are done, Leantime estimates when the project will be finished from how fast work has been getting done since the first to-do. Until then, the top of the Status Report says "Complete more To-Dos to see that!".

## How do I share a report?

Click **Print** at the top of the Status Report. Your browser's print window opens, where you can print it or save it as a PDF to send.

## What if something goes wrong?

- **I don't see Reports in the left menu.** Reports may be switched off for this project on the **Modules** tab of **Project Settings** (see [How do I switch features on or off for a project?](using-leantime/managing-projects.md#how-do-i-switch-features-on-or-off-for-a-project)).
- **The top of the report says "No update".** Nobody has posted a project update yet. Post one on the Project Overview with **Update Status**.
- **Done to-dos don't count as done.** Check the **Report As** setting of the status they're in.
- **Hours show 0.** No time was logged on this project's to-dos in the period you picked; check the timesheets for those dates (see [Timesheets and time tracking](using-leantime/timesheets.md)). If Time tracking is switched off for the project, nobody can log new time, but hours logged earlier still count.
