# Leantime MCP Server Guide

> **Beta Notice:** The MCP Server plugin is currently in beta and may contain bugs. If you encounter issues, please [submit a bug report on GitHub](https://github.com/Leantime/leantime/issues).

The Model Context Protocol (MCP) server turns your Leantime instance into an AI-accessible project management hub. AI assistants like Claude, ChatGPT, and Cursor can read your projects, create tasks, log time, and manage your work directly.

## What is MCP?

MCP (Model Context Protocol) is a standardized way for AI assistants to interact with external tools and data sources. Instead of copy-pasting project details into your AI assistant, the assistant can query Leantime directly—understanding your current projects, tasks, and goals in real-time.

**Why this matters:**
- No more context-switching between Leantime and AI tools
- AI assistants understand your actual project state
- Automated task management and time tracking
- Natural language project queries ("What's due this week?")

## Prerequisites

- **Self-hosted:** Leantime 3.10.3 or later with the [MCP Server plugin](https://marketplace.leantime.io/product/mcp-server/) installed and enabled. **Leantime Cloud:** nothing to install.
- An access token (see below)
- An MCP client that supports remote (Streamable HTTP) servers: Claude Code, Cursor, VS Code, Windsurf, etc. Claude Desktop works too, via `mcp-remote` (see below).

No bridge or extra package is needed — clients connect straight to your Leantime's `/mcp` endpoint:

```
https://your-leantime-url/mcp
```

## Step 1: Install the MCP Server Plugin (self-hosted only)

1. Go to **Settings → Plugins** in your Leantime instance
2. Open the Marketplace tab and find **MCP Server**
3. Purchase, enter your license key and click Install
4. Enable the plugin

## Step 2: Create an Access Token

The endpoint accepts either of these:

**Option A: Personal Access Token (recommended)** — sent as `Authorization: Bearer <token>`

Personal tokens act as *you*, so "my tasks", "log time for me" etc. work and everything respects your project access.

1. Open your profile (**My Profile → Personal Access Tokens**)
2. Click **Create Token**, give it a name (e.g. "Claude Code")
3. Copy the token — it is only shown once

**Option B: API Key** — sent as `x-api-key: lt_...`

API keys are service accounts created by an admin under **Company Settings → API Keys**. They act as that service user, not as you, so "my tasks" refers to the API user. Good for automations and shared agents.

> If your account uses two-factor authentication, use a token — tokens are not affected by 2FA.

## Client Configuration

Replace `https://your-leantime-url` and the token in the examples. Use `"x-api-key": "lt_..."` instead of `Authorization` if you are using an API key.

### Claude Code

```bash
claude mcp add --transport http leantime https://your-leantime-url/mcp \
  --header "Authorization: Bearer YOUR_TOKEN"
```

### Cursor

`~/.cursor/mcp.json` (or `.cursor/mcp.json` in a project):

```json
{
  "mcpServers": {
    "leantime": {
      "url": "https://your-leantime-url/mcp",
      "headers": { "Authorization": "Bearer YOUR_TOKEN" }
    }
  }
}
```

### VS Code

`.vscode/mcp.json` (or **MCP: Add Server…** from the command palette):

```json
{
  "servers": {
    "leantime": {
      "type": "http",
      "url": "https://your-leantime-url/mcp",
      "headers": { "Authorization": "Bearer YOUR_TOKEN" }
    }
  }
}
```

### Windsurf

`~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "leantime": {
      "serverUrl": "https://your-leantime-url/mcp",
      "headers": { "Authorization": "Bearer YOUR_TOKEN" }
    }
  }
}
```

### Claude Desktop

Claude Desktop's built-in remote connectors don't support custom auth headers yet, so use the generic [`mcp-remote`](https://www.npmjs.com/package/mcp-remote) helper (requires Node.js 18+). Edit `claude_desktop_config.json`:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "leantime": {
      "command": "npx",
      "args": [
        "-y", "mcp-remote",
        "https://your-leantime-url/mcp",
        "--header", "Authorization:${LEANTIME_AUTH}"
      ],
      "env": { "LEANTIME_AUTH": "Bearer YOUR_TOKEN" }
    }
  }
}
```

Restart Claude Desktop after saving. (Keeping the header value in `env` avoids argument-quoting problems with the space in `Bearer ...`, especially on Windows.)

### Any other client

Any MCP client that supports Streamable HTTP works: point it at `https://your-leantime-url/mcp` and send one of the two auth headers. You can check connectivity with curl:

```bash
curl https://your-leantime-url/mcp \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"curl","version":"1"}}}'
```

A JSON response containing `"serverInfo":{"name":"Leantime MCP Server"...}` means everything is set up. A `401` means the token is missing or invalid.

> **Upgrading from the `leantime-mcp` npm bridge?** It is no longer needed and has been deprecated. Replace the `leantime-mcp` command in your config with one of the setups above — your existing token keeps working.

## Available Tools

The MCP server exposes comprehensive Leantime functionality:

### Projects
| Tool | Description |
|------|-------------|
| `getAllProjects` | List all accessible projects with progress info |
| `getProject` | Get details for a specific project |
| `getFullProjectOverview` | Comprehensive project data including comments and timesheets |
| `addProject` | Create a new project |
| `editProject` | Update project details |
| `findProject` | Search projects by name |
| `getUsersAssignedToProject` | List project team members |

### Tasks
| Tool | Description |
|------|-------------|
| `findTasks` | Search tasks across projects with filters |
| `getTicket` | Get a specific task by ID |
| `addTask` | Create a new task |
| `editTask` | Update task fields |
| `addSubtask` | Create a subtask under a parent |
| `bulkAddTasks` | Create multiple tasks at once |
| `bulkEditTasks` | Update multiple tasks at once |
| `getStatusLabels` | Get available status options for a project |
| `getTaskStatusSummary` | Task counts by status for a project (3.10.3+) |

### Milestones
| Tool | Description |
|------|-------------|
| `findMilestones` | List milestones for a project |
| `getMilestone` | Get milestone details |
| `addMilestone` | Create a new milestone |
| `editMilestone` | Update a milestone |
| `addMilestonesForProject` | Bulk create milestones |

### Goals (OKRs)
| Tool | Description |
|------|-------------|
| `getAllGoals` | List goals for a project |
| `getGoal` | Get goal details |
| `createGoal` | Create a new goal/KPI |
| `editGoal` | Update goal progress |
| `createGoalboard` | Create a goal board |
| `getGoalsByMilestone` | Get goals linked to a milestone |

### Calendar & Scheduling
| Tool | Description |
|------|-------------|
| `getCalendar` | Get calendar events for a date range |
| `addEvent` | Create a calendar event |
| `editEvent` | Update an event |
| `deleteEvent` | Remove an event |
| `scheduleTaskOnCalendar` | Timebox a task |
| `scheduleDay` | Create a structured day plan |
| `breakdownTask` | Split a task into scheduled subtasks |
| `getICalUrl` | Get user's iCal subscription URL |

### Timesheets
| Tool | Description |
|------|-------------|
| `getUserTimesheets` | Get your time entries |
| `getProjectTimesheets` | Get project time entries (managers) |
| `logTime` | Log time to a task |
| `getTimesheetSummary` | Aggregate time by project/user/day |
| `getWeeklyTimesheets` | Weekly timesheet view |

### Comments & Status Updates
| Tool | Description |
|------|-------------|
| `getComments` | Get comments on a task or project |
| `addComment` | Add a comment |
| `getAllProjectComments` | Get project status updates |
| `addProjectStatusUpdate` | Add RAG status update |

### Timer
| Tool | Description |
|------|-------------|
| `startTimer` | Start a Pomodoro or work timer |
| `stopTimer` | Stop and log timer |

## Example Prompts

Once configured, you can ask your AI assistant:

**Task Management:**
- "What tasks are assigned to me this week?"
- "Create a task called 'Review Q4 budget' in the Finance project"
- "Mark task #123 as done"
- "What's the status of the Website Redesign project?"

**Time Tracking:**
- "Log 2 hours to task #456 for today"
- "How much time did I log this week?"
- "Show me the timesheet summary for Project Alpha"

**Planning:**
- "Schedule my open tasks for tomorrow between 9am and 5pm"
- "Break down task #789 into subtasks and schedule them for next week"
- "What's on my calendar for Monday?"

**Project Overview:**
- "Give me a status report on all my projects"
- "What milestones are coming up this month?"
- "Show me the goals for the Q1 Initiative project"

## Use Cases & Workflow Examples

### Daily Standup Assistant

Start your day by asking your AI assistant for a personalized briefing:

```
"Give me my daily standup report: what I completed yesterday, 
what's on my plate today, and any blockers or overdue tasks."
```

The AI will query your tasks, calendar, and recent activity to generate a summary you can paste into Slack or share in your standup meeting.

### Automated Task Creation from Emails

When you receive an email requesting work, you can quickly create tasks:

```
"Create a task in the Client Projects project called 'Respond to Acme Corp RFP' 
with description 'Review and respond to the RFP received via email. 
Deadline mentioned as March 15.' Set the due date to March 12 
and assign it to me with high priority."
```

For recurring patterns, you can batch create:

```
"Create these tasks in the Website Redesign project:
1. Design homepage mockup - due Friday
2. Review competitor sites - due Wednesday  
3. Gather stakeholder feedback - due next Monday
4. Finalize color palette - due Thursday"
```

### Weekly Planning Session

Use the AI to help plan your week:

```
"Look at all my open tasks across projects. Prioritize them by due date 
and effort, then schedule them across this week. Keep mornings for 
deep work (tasks over 2 hours) and afternoons for smaller tasks. 
Block Friday afternoon for weekly review."
```

Or for a specific project:

```
"I need to finish the Q1 Report project by March 31. Break down 
all remaining tasks, estimate time needed, and create a schedule 
that gets everything done with buffer time."
```

### Meeting Follow-up Automation

After a meeting, quickly capture action items:

```
"Create these tasks from today's product meeting in the Product Roadmap project:
- 'Research competitor pricing' assigned to me, due next Tuesday
- 'Draft feature comparison doc' assigned to me, due next Thursday
- 'Schedule customer interviews' assigned to me, due Friday
Add a comment to each: 'Action item from March 3 product meeting'"
```

### Client Status Reports

Generate client-ready status updates:

```
"Generate a status report for the Acme Website project. Include:
- Overall project health (red/yellow/green)
- Completed tasks this week
- Tasks in progress
- Upcoming milestones
- Any risks or blockers
- Hours logged this month vs budget"
```

### Sprint Planning

For agile teams:

```
"Show me all tasks in the backlog for Project Phoenix. 
Group them by milestone and show story points. 
Which tasks are ready for the next sprint (have clear descriptions 
and no blockers)?"
```

Then move tasks into the sprint:

```
"Move these tasks to the March Sprint milestone: #234, #235, #241, #245. 
Update their status to 'Ready for Dev'."
```

### Time Tracking Catch-up

End of week timesheet reconciliation:

```
"Show me my calendar events and completed tasks for this week. 
Compare that to my logged time. What tasks am I missing time entries for?"
```

Then batch log time:

```
"Log time for these tasks from this week:
- Task #123: 3 hours on Monday, 2 hours on Tuesday
- Task #124: 4 hours on Wednesday
- Task #125: 2.5 hours on Thursday
Use 'Development' as the work type for all."
```

### Project Kickoff

Quickly scaffold a new project:

```
"Set up the 'Mobile App v2' project with these milestones:
1. Discovery & Planning (Jan 15 - Jan 31) - Blue
2. Design Phase (Feb 1 - Feb 28) - Purple  
3. Development Sprint 1 (Mar 1 - Mar 15) - Green
4. Development Sprint 2 (Mar 16 - Mar 31) - Green
5. QA & Testing (Apr 1 - Apr 15) - Orange
6. Launch Prep (Apr 16 - Apr 30) - Red

Then create starter tasks in each milestone for the typical activities."
```

### Goal Tracking & OKRs

Monitor OKR progress:

```
"Show me all goals for Q1 2024 across my projects. 
Which ones are on track, at risk, or behind? 
For any at risk, what tasks are blocking progress?"
```

Update goal metrics:

```
"Update the 'Increase user signups' goal - set current value to 1,250 
(target is 2,000). Add a comment noting the recent marketing campaign impact."
```

### Delegation & Team Coordination

Check team workload:

```
"Show me all in-progress tasks for the Engineering team on Project Atlas. 
Who has the most tasks assigned? Are there any unassigned tasks that need owners?"
```

Reassign work:

```
"Task #567 is blocked waiting on design. Unassign it from John 
and create a new subtask 'Provide design assets for feature X' 
assigned to Sarah with high priority."
```

### Proactive Notifications

Set up your own check-ins:

```
"What tasks are due in the next 3 days that aren't started yet? 
What tasks have been in progress for more than a week without updates?"
```

### Integration with Other Tools

Combine Leantime MCP with other MCP servers or tools:

**With a calendar MCP:**
```
"Check my Google Calendar for meetings tomorrow, then block focus time 
around them in Leantime for working on my highest priority tasks."
```

**With a notes/docs MCP:**
```
"Find the meeting notes from last week's planning session in my notes, 
extract action items, and create tasks for each in Leantime."
```

**With email/communication tools:**
```
"Draft a status email for the stakeholders on the Website Redesign project 
based on the current task status, recent completions, and upcoming milestones."
```

### AI Agent Workflows

For more autonomous operation, you can instruct AI agents to work independently:

**Code Review Agent:**
```
"Monitor the 'Code Review' project. When you see a task in 'Ready for Review' status:
1. Claim it by assigning to 'AI-Reviewer'
2. Add a comment that you're starting review
3. [Perform review using code tools]
4. Add findings as a comment
5. Update status to 'Changes Requested' or 'Approved'"
```

**Documentation Agent:**
```
"For all completed feature tasks in the Product project that don't have 
a 'docs-updated' tag, create a subtask 'Update documentation for [feature name]' 
and add the 'needs-docs' label."
```

**Daily Digest Agent:**
```
"Every morning at 8am, generate a digest of:
- Tasks that became overdue yesterday
- Tasks due today
- Any status updates from team members
- Milestone deadlines in the next 7 days
Format as a Slack message."
```

## Hybrid Human-AI Teams

The MCP server enables AI agents to work alongside human team members on the same project board:

### AI Agent Task Claiming Protocol

1. AI queries for unassigned tasks in "todo" status
2. AI evaluates task suitability (clear acceptance criteria, within capabilities)
3. AI claims task by assigning to "AI-Agent" identifier
4. AI updates status to "in_progress" and adds a comment
5. AI completes work and updates task to "done"
6. Human team reviews AI-completed work

### Preventing Conflicts

- Label AI-suitable tasks with "AI-Suitable" tag
- AI agents add "AI-Agent" label when claiming
- Use status updates to communicate progress
- Human team maintains oversight via comments

## Security & Limits

- Always use HTTPS in production.
- Prefer Personal Access Tokens; every tool call runs with that user's role and project access.
- Revoke tokens you no longer use from **My Profile → Personal Access Tokens** (or delete the API key).
- MCP requests are rate limited (default 300/minute per user and IP). Self-hosted admins can change this with `LEAN_RATELIMIT_MCP`.

## Troubleshooting

**`401 Unauthorized`**
- Check the header: `Authorization: Bearer <personal token>` or `x-api-key: lt_...` (not both mixed up)
- The token may have been revoked or expired — create a new one
- If a reverse proxy sits in front of Leantime, make sure it forwards the `Authorization` header

**`404` on `/mcp`**
- Self-hosted: the MCP Server plugin isn't installed or enabled
- Leantime is installed in a subfolder: include it, e.g. `https://example.com/leantime/mcp`

**Tools return "not allowed" / empty results**
- The token's user doesn't have access to that project. MCP uses exactly the same permissions as the web UI.
- "My tasks" returns nothing with an API key: API keys are service users — use a Personal Access Token.

**Too many requests (`429`)**
- You hit the rate limit; use the bulk tools (`bulkAddTasks`, `bulkEditTasks`, …) or raise `LEAN_RATELIMIT_MCP`

**SSL errors with a self-signed certificate (local development only)**
- `mcp-remote`: add `"NODE_TLS_REJECT_UNAUTHORIZED": "0"` to `env`. Never do this in production.

**Logs**
- Server: `storage/logs/` in your Leantime installation
- Claude Desktop (macOS): `~/Library/Logs/Claude/mcp-server-leantime.log`

## Alternative: Community MCP Server

There's also a community-maintained MCP server that doesn't require the plugin and talks to the JSON-RPC API directly (requires Python/uv):

```json
{
  "mcpServers": {
    "leantime": {
      "command": "uvx",
      "args": ["--from", "git+https://github.com/daniel-eder/leantime-mcp.git", "leantime-mcp"],
      "env": {
        "LEANTIME_URL": "https://your-leantime-instance.com",
        "LEANTIME_API_KEY": "your_api_key_here",
        "LEANTIME_USER_EMAIL": "your_email@example.com"
      }
    }
  }
}
```

## Resources

- [MCP Server Plugin](https://marketplace.leantime.io/product/mcp-server/) - Leantime Marketplace
- [MCP Protocol Specification](https://modelcontextprotocol.io/) - Official MCP docs
- [Leantime Support](https://support.leantime.io/en/article/leantime-mcp-server-dkomm9/) - Official documentation
