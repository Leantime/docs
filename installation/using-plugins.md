# Plugins

Plugins add features to Leantime. Each one does one job, like planning a strategy above your projects, sketching on a whiteboard, or repeating a to-do every week. Pick the ones your team needs.

- **In Leantime Cloud,** the marketplace plugins are already switched on, except Advanced Authentication, which is for self-hosted servers.
- **On your own server,** get a plugin from the [Leantime Marketplace](https://marketplace.leantime.io/) and install it with its license key: see [Installing plugins](installation/plugin-installation.md) and [Plugin licenses and updates](installation/plugin-licenses.md).

## Which plugin do I need?

### Plan above your projects

- **[Strategy Pro](plugins/strategy-pro.md):** set out what your organization is working toward, with focus areas and measurable goals, and see which programs and projects serve them.
- **[Programs](plugins/programs.md):** group related projects into a program, and see their to-dos, milestones and people in one place.

### Think it through and take notes

- **[Whiteboards](plugins/whiteboards.md):** sketch floor plans, flows and diagrams on a shared whiteboard inside a project.
- **[Notes](#notes):** jot down quick notes and ideas that don't belong in a project's docs yet.

### Add to your to-dos

- **[Custom fields](#custom-fields):** add your own fields to to-dos, for the details your team tracks that Leantime doesn't have a field for.
- **[Recurring to-dos](#recurring-tasks):** create a to-do again on a schedule, like every week or every month.

### Stay focused

- **[Pomodoro timer](#pomodoro-timer):** work in focused blocks with short breaks in between.

### Sign in and connect other tools

- **[Advanced Authentication](installation/plugin-installation.md?id=advanced-auth-plugin):** sign in with Google, Microsoft, GitHub, Okta and more, and use the [Leantime Mobile](https://leantime.io/mobile) app, including phone notifications (see [Set up the mobile app](installation/mobile-app-setup.md)). Self-hosted only.
- **[MCP Server](installation/leantime-mcp.md):** let AI assistants like Claude work with your Leantime projects.

## How do I switch a plugin on?

On your own server, go to **Company → Leantime Apps → My Apps** and switch the plugin on. Its menu items and options appear right away. See [Installing plugins](installation/plugin-installation.md) for the license key and the first install.

Some plugins add their own items to the menu, like **Whiteboards** in a project. Others add options to screens you already know, like an extra field in a to-do.

---

The sections below will move to pages of their own.

## Custom Fields

The Custom Fields plugin lets you add custom data fields to tasks, adapting Leantime to your specific workflow needs.

### Accessing Custom Fields

Navigate to **Company Settings → Custom Fields** to manage your custom field definitions.

### Creating a Custom Field

1. Click **Add New Field**
2. Configure the field properties:

| Property | Description |
|----------|-------------|
| **Field Name** | Display name shown on tasks |
| **Field Type** | Text, textarea, dropdown, checkbox, date, number |
| **Required** | Whether the field must be filled in |
| **Conditions** | Limit field to specific projects or task types |

3. Click **Save**

### Field Types

**Text:** Single-line input for short values like reference numbers, codes, or links.

**Textarea:** Multi-line input for longer content like notes or detailed descriptions.

**Dropdown:** Predefined list of options. After selecting this type, add your options:
- Click **Add Option**
- Enter the option value
- Repeat for each choice
- Drag to reorder options

**Checkbox:** Yes/No toggle for binary choices like "Approved" or "Billable."

**Date:** Date picker for tracking deadlines, review dates, or milestones beyond the standard due date.

**Number:** Numeric input for quantities, scores, or measurements.

### Using Conditions

Conditions let you target custom fields to specific contexts rather than applying them globally.

**Project-specific fields:**
1. In the field settings, click **Add Condition**
2. Select **Project** as the condition type
3. Choose which projects should display this field

**Task type-specific fields:**
1. Add a condition for **Task Type**
2. Select which task types (Bug, Feature, Task, etc.) should include this field

You can combine multiple conditions. For example, a "Severity" dropdown that only appears on Bug tasks within your Development project.

### Viewing Custom Field Data

Custom field values appear:
- On the task detail view
- In the task table view (if column is enabled)
- In exports and reports

## Recurring Tasks

The Recurring Tasks plugin automatically creates tasks on a schedule, eliminating repetitive manual task creation.

### Creating a Recurring Task

1. Create a task as normal (this becomes the template)
2. In the task details, click **Make Recurring**
3. Configure the recurrence pattern:

| Pattern | Use Case |
|---------|----------|
| **Daily** | Daily stand-ups, check-ins |
| **Weekly** | Weekly reports, team meetings |
| **Bi-weekly** | Sprint planning, payroll tasks |
| **Monthly** | Monthly reviews, invoicing |
| **Quarterly** | Quarterly planning, OKR reviews |
| **Yearly** | Annual reviews, renewals |

4. Set additional options:
   - **Start Date:** When recurrence begins
   - **End Date:** Optional end to the recurrence
   - **Create X days before due:** Lead time for task creation

5. Click **Save**

### How It Works

- The original task serves as a template
- New task instances are created automatically based on your schedule
- Each instance is independent—completing one doesn't affect others
- Task details (description, assignee, project) copy from the template

### Managing Recurring Tasks

**Identify recurring tasks:** Tasks with active recurrence show a recurrence indicator icon.

**Edit the pattern:** Open the task and click the recurrence settings to modify the schedule.

**Stop recurrence:** Toggle off the recurring setting or set an end date in the task's recurrence options.

**Edit template:** Changes to the original task affect future instances (not already-created ones).

### Common Use Cases

- **Daily stand-ups:** Create at 8 AM each workday
- **Weekly status reports:** Due every Friday
- **Monthly invoicing:** Create on the 25th for month-end processing
- **Quarterly reviews:** Appear 2 weeks before quarter end

## Notes

The Notes plugin provides a quick-capture system for thoughts and ideas that don't yet belong in formal project documentation.

### Accessing Notes

Notes appears in two places:
- **Sidebar menu:** Click the **Notes** icon (sticky note) in the personal section of the sidebar
- **Dashboard widget:** Add the Notes widget to your Work Dashboard for quick access

### Creating Notes

1. Click **Notes** in the sidebar or use the dashboard widget
2. Click **New Note**
3. Type your content
4. Click outside to save (auto-saves)

### Organizing Notes

**Color coding:** Click the color dot to categorize notes visually.

**Pinning:** Pin important notes to keep them at the top.

**Project linking:** Associate notes with specific projects for context.

**Search:** Use the search bar to find notes by content.

### Notes vs. Project Docs

| Notes | Project Docs |
|-------|--------------|
| Quick capture | Formal documentation |
| Personal visibility | Team shared |
| Temporary thoughts | Permanent records |
| Unstructured | Structured templates |

Notes on your Work Dashboard are visible only to you—perfect for personal reminders, quick thoughts, or draft ideas before they're ready to share.

---

## Pomodoro Timer

The Pomodoro plugin helps maintain focus through structured work intervals.

### Accessing Pomodoro

The Pomodoro timer is available as a **dashboard widget**:

1. Go to your **Work Dashboard**
2. Click **Add Widget** (if not already added)
3. Select **Pomodoro** from the available widgets
4. Position the widget where you want it on your dashboard

### Starting a Pomodoro

1. In the Pomodoro widget, optionally select a task to associate with this session
2. Click **Start**
3. Focus on your work until the timer completes

### The Pomodoro Cycle

| Phase | Duration | Purpose |
|-------|----------|---------|
| **Focus** | 25 minutes | Deep work on your task |
| **Short Break** | 5 minutes | Rest after each focus session |
| **Long Break** | 15-30 minutes | Extended rest after 4 pomodoros |

### Features

**Task Association:** Link sessions to specific tasks. Time is automatically logged.

**Notifications:** Audio/visual alerts when phases end.

**Statistics:** Track your pomodoro history and patterns.

**Customization:** Adjust timer durations in settings.

### ADHD-Friendly Design

The Pomodoro technique is particularly helpful for:
- **Starting tasks:** A defined time box makes beginning less daunting
- **Maintaining focus:** Short intervals prevent mental fatigue
- **Taking breaks:** Built-in rest prevents burnout
- **Tracking time:** Visual progress creates momentum

## Getting help

- **Something not working?** See [Plugin licenses, updates and problems](installation/plugin-licenses.md).
- **Questions:** ask in the [Leantime Discord](https://discord.gg/4zMzJtAq9z) or the [community forum](https://community.leantime.io).
