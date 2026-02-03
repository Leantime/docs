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

- Leantime 3.x or later (self-hosted)
- MCP Server plugin from the Leantime Marketplace
- Node.js 18+ (for the MCP bridge)
- An MCP-compatible AI client (Claude Desktop, VS Code, Cursor, etc.)

## Installation

### Step 1: Install the MCP Server Plugin

1. Go to **Settings → Plugins** in your Leantime instance
2. Navigate to the Leantime Marketplace
3. Find and purchase the "MCP Server" plugin
4. Enter your license key and click Install
5. Enable the plugin

Once enabled, the `/mcp` endpoint becomes available at `https://your-leantime-url/mcp`.

### Step 2: Install the MCP Bridge

The bridge connects your local AI client to your remote Leantime server:

```bash
npm install -g leantime-mcp
```

Alternative installation from source:
```bash
git clone https://github.com/leantime/leantime-mcp.git
cd leantime-mcp
npm install
npm run build
npm install -g .
```

### Step 3: Generate an Access Token

**Option A: Personal Access Token (Recommended)**

Personal tokens are tied to your user account, so queries like "my tasks" work correctly.

1. Go to **Profile → Personal Access Tokens**
2. Click "Generate New Token"
3. Copy and save the token securely

**Option B: Standard API Key**

API keys are service accounts not tied to a specific user.

1. Go to **Settings → API**
2. Generate a new API key (format: `lt_{username}_{hash}`)

Note: With API keys, user-specific queries won't work. Use personal access tokens for the best experience.

## Client Configuration

### Claude Desktop

Edit your Claude Desktop configuration file:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "leantime": {
      "command": "leantime-mcp",
      "args": [
        "https://your-leantime-url.com/mcp",
        "--token",
        "YOUR_ACCESS_TOKEN"
      ]
    }
  }
}
```

Restart Claude Desktop after saving.

### VS Code (with MCP Extension)

Add to your VS Code settings:

```json
{
  "mcp.servers": {
    "leantime": {
      "command": "leantime-mcp",
      "args": [
        "https://your-leantime-url.com/mcp",
        "--token",
        "YOUR_ACCESS_TOKEN"
      ]
    }
  }
}
```

### Cursor

Open Cursor Settings → Extensions → MCP and add:

```json
{
  "leantime": {
    "command": "leantime-mcp",
    "args": [
      "https://your-leantime-url.com/mcp",
      "--token",
      "YOUR_ACCESS_TOKEN"
    ]
  }
}
```

### Using mcp-remote (Alternative)

If you prefer not to install the Leantime bridge:

```json
{
  "mcpServers": {
    "leantime": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://your-leantime-url.com/mcp",
        "--header",
        "Authorization: Bearer YOUR_ACCESS_TOKEN"
      ],
      "env": {
        "NODE_TLS_REJECT_UNAUTHORIZED": "0"
      }
    }
  }
}
```

Note: Only set `NODE_TLS_REJECT_UNAUTHORIZED` to "0" for self-signed certificates in development.

### Local/STDIO Mode (Self-Hosted)

For direct server-side connections without the HTTP bridge:

```json
{
  "mcpServers": {
    "leantime": {
      "command": "php",
      "args": [
        "/path-to-leantime/bin/leantime",
        "lt-mcp:start",
        "--transport=stdio",
        "--token=YOUR_TOKEN"
      ]
    }
  }
}
```

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

## Server Configuration

### Environment Variables

Add these to your `.env` file to customize the MCP server:

```bash
# Enable/disable MCP server
MCP_SERVER_ENABLED=true

# Transport settings
MCP_SERVER_HOST=127.0.0.1
MCP_SERVER_PORT=3001
MCP_TRANSPORT=stdio

# Authentication
MCP_REQUIRE_AUTH=true
MCP_REQUIRED_ROLE=editor

# Security
MCP_ALLOWED_IPS=127.0.0.1,::1
MCP_RATE_LIMIT=100

# Performance
MCP_AUTO_DISCOVER_TOOLS=true
MCP_CACHE_TOOLS=true
MCP_MAX_EXECUTION_TIME=30
MCP_MEMORY_LIMIT=256M
MCP_MAX_RESPONSE_SIZE=10485760
```

### Security Best Practices

1. **Always use HTTPS** in production
2. **Use Personal Access Tokens** instead of API keys when possible
3. **Configure IP whitelisting** with `MCP_ALLOWED_IPS`
4. **Set rate limits** to prevent abuse
5. **Rotate tokens regularly**
6. **Monitor logs** for suspicious activity

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

## Troubleshooting

### Connection Issues

**"Connection refused" error:**
- Verify the MCP plugin is installed and enabled
- Check that `/mcp` endpoint is accessible
- Ensure your token is valid

**SSL/Certificate errors:**
- For self-signed certs, add `NODE_TLS_REJECT_UNAUTHORIZED=0` to env
- In production, use a valid SSL certificate

### Authentication Errors

**"Unauthorized" or "Invalid token":**
- Regenerate your Personal Access Token
- Ensure the token hasn't expired
- Check that your user has the required role (default: editor)

**"My tasks" queries return nothing:**
- You're likely using an API key instead of Personal Access Token
- API keys are service accounts, not tied to users
- Generate a Personal Access Token from your Profile page

### Performance Issues

**Slow responses:**
- Enable tool caching: `MCP_CACHE_TOOLS=true`
- Increase memory limit: `MCP_MEMORY_LIMIT=512M`
- Use bulk operations instead of individual calls

**Rate limiting:**
- Increase `MCP_RATE_LIMIT` value
- Batch requests where possible

### Debugging

Enable verbose logging:

```bash
MCP_LOG_REQUESTS=true
MCP_EXPOSE_ERRORS=true
```

Check logs at: `storage/logs/leantime-xx-xx-xx.log`

**Bridge debugging:**
```bash
# View debug output
leantime-mcp https://your-url.com/mcp --token YOUR_TOKEN 2>debug.log
```

**Claude Desktop logs (macOS):**
`~/Library/Logs/Claude/mcp-server-leantime.log`

### Tool Discovery Issues

If tools aren't appearing:

```bash
php bin/leantime lt-mcp:discover
```

This rebuilds the tool cache.

## Alternative: Community MCP Server

There's also a community-maintained MCP server that doesn't require the plugin:

```json
{
  "mcpServers": {
    "leantime": {
      "command": "uvx",
      "args": [
        "--from",
        "git+https://github.com/daniel-eder/leantime-mcp.git",
        "leantime-mcp"
      ],
      "env": {
        "LEANTIME_URL": "https://your-leantime-instance.com",
        "LEANTIME_API_KEY": "your_api_key_here",
        "LEANTIME_USER_EMAIL": "your_email@example.com"
      }
    }
  }
}
```

This uses Leantime's JSON-RPC API directly and requires Python/uv.

## Resources

- [MCP Server Plugin](https://marketplace.leantime.io/product/mcp-server/) - Leantime Marketplace
- [leantime-mcp Bridge](https://www.npmjs.com/package/leantime-mcp) - npm package
- [GitHub: leantime-mcp](https://github.com/Leantime/leantime-mcp) - Bridge source code
- [MCP Protocol Specification](https://modelcontextprotocol.io/) - Official MCP docs
- [Leantime Support](https://support.leantime.io/en/article/leantime-mcp-server-dkomm9/) - Official documentation
