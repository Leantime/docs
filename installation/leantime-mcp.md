# Leantime MCP Server

The MCP Server lets AI assistants such as Claude, Cursor, VS Code Copilot, Windsurf and Codex work directly in your Leantime. Instead of copying task lists into a chat, you ask the assistant, and it reads and updates Leantime for you:

- "What's due for me this week, and what's overdue?"
- "Create these five tasks in the Website project and put them in the Launch milestone."
- "Log 2 hours to task #456 for yesterday."
- "Write a status update for the Acme project from what was completed this week."

The assistant only sees and changes what **your** Leantime account can see and change. It works the same way the Leantime app does, with the same project access and role.

**On this page**

1. [How it works](?id=how-it-works)
2. [Before you start](?id=before-you-start)
3. [Step 1: Install the plugin (self-hosted only)](?id=step-1-install-the-plugin-self-hosted-only)
4. [Step 2: Create a token](?id=step-2-create-a-token)
5. [Step 3: Connect your AI assistant](?id=step-3-connect-your-ai-assistant)
6. [Step 4: Check the connection](?id=step-4-check-the-connection)
7. [What the assistant can do](?id=what-the-assistant-can-do)
8. [Getting good results](?id=getting-good-results)
9. [Running an AI agent as a team member](?id=running-an-ai-agent-as-a-team-member)
10. [Security and privacy](?id=security-and-privacy)
11. [Settings for administrators](?id=settings-for-administrators)
12. [Troubleshooting](?id=troubleshooting)
13. [FAQ](?id=faq)

## How it works

[MCP (Model Context Protocol)](https://modelcontextprotocol.io/) is an open standard that lets AI assistants call tools in other applications. Leantime's MCP server is a single web address on your Leantime:

```
https://your-leantime-url/mcp
```

Your AI assistant connects to that address and sends a token with every request. Leantime checks the token, works out which user it belongs to, and runs each request as that user. Nothing is installed on your computer apart from the assistant itself (and a small helper for Claude Desktop, see below).

When you ask a question, the assistant decides which Leantime tools to call (for example `findTasks`, then `editTask`), shows you what it is doing, and answers from the results.

## Before you start

You need:

| | Leantime Cloud | Self-hosted |
|---|---|---|
| Leantime version | Always current | **3.13 or later** (MCP Server plugin 2.x) |
| MCP Server plugin | Included, nothing to install | Install from the [Marketplace](https://marketplace.leantime.io/product/mcp-server/) |
| HTTPS | Included | Strongly recommended. Tokens are sent with every request. |

And an AI assistant that can connect to a **remote MCP server with a custom header**:

| Assistant | Works? | Notes |
|---|---|---|
| Claude Code | Yes | Built in |
| Cursor | Yes | Built in |
| VS Code (GitHub Copilot agent mode) | Yes | Built in |
| Windsurf | Yes | Built in |
| OpenAI Codex CLI | Yes | Built in |
| Claude Desktop | Yes | Through the free `mcp-remote` helper (needs Node.js 18+) |
| Claude.ai (web), ChatGPT (web) connectors | Not yet | These only connect to servers that sign in with OAuth. Leantime's MCP server uses tokens. |

> Your Leantime data goes to the AI provider you use (Anthropic, OpenAI, Cursor, …) as part of the conversation. Check that this is allowed for your organisation before connecting.

## Step 1: Install the plugin (self-hosted only)

Skip this step on Leantime Cloud.

1. In Leantime, open the **Administration** menu and choose **Leantime Apps** (you need to be an Owner or Administrator).
2. On the **App Marketplace** tab, find **MCP Server**.
3. Buy a license, enter the license key and click **Install**.
4. On the **My Apps** tab, click **Enable** next to MCP Server.

The server is now live at `https://your-leantime-url/mcp`. If Leantime is installed in a subfolder, include it: `https://example.com/leantime/mcp`.

## Step 2: Create a token

The MCP server accepts two kinds of credentials. Use a **Personal Access Token** unless you are setting up a shared automation.

### Personal Access Token (recommended)

A personal token acts as **you**: "my tasks", "log time for me" and "assign it to me" all mean your account, and the assistant sees exactly the projects you can see.

1. Click your avatar and open **My Profile**.
2. Open the **Personal Access Tokens** tab.
3. Click **Create Token** and give it a name you'll recognise later, such as "Claude Code – laptop".
4. Copy the token. **It is only shown once.**

The assistant sends it as a header:

```
Authorization: Bearer YOUR_TOKEN
```

Good to know:

- A token has the **full access of your account**. It does not expire. Anyone who has it can do in Leantime whatever you can do.
- Create **one token per assistant or device**. Then you can revoke one without breaking the others.
- Revoke a token any time from the same tab. The assistant stops working immediately.
- Tokens are not affected by two-factor authentication or single sign-on (SSO). If you sign in with Google, Microsoft, OIDC or LDAP, you can still create a token.

### API key (for shared automations)

API keys are service accounts created by an Owner or Administrator under **Company Settings → API Keys**. They act as that API user, not as a person. "My tasks" then means the API user's tasks, which is usually nothing. Use them for team-wide automations, not for your own assistant.

```
x-api-key: lt_yourkeyname_yoursecret
```

## Step 3: Connect your AI assistant

In every example, replace `https://your-leantime-url` with your Leantime address and `YOUR_TOKEN` with the token from Step 2. To use an API key, replace the `Authorization` header with `"x-api-key": "lt_..."`.

### Claude Code

Run once in a terminal:

```bash
claude mcp add --transport http leantime https://your-leantime-url/mcp \
  --header "Authorization: Bearer YOUR_TOKEN"
```

Add `--scope user` to use Leantime in every project, not just the current folder. Check it with `claude mcp list`, or type `/mcp` inside Claude Code.

### Claude Desktop

Claude Desktop's built-in connectors can't send a token header yet, so use the free [`mcp-remote`](https://www.npmjs.com/package/mcp-remote) helper. It needs [Node.js](https://nodejs.org/) 18 or later.

1. In Claude Desktop, open **Settings → Developer → Edit Config**. This opens `claude_desktop_config.json`:
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
2. Add the `leantime` entry (keep any servers you already have):

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

3. Quit Claude Desktop completely and open it again.

Keep the token in `env` as shown. Putting `Bearer YOUR_TOKEN` directly in `args` breaks on Windows because of the space.

### Cursor

Open **Cursor Settings → MCP → Add new MCP server**, or edit `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` (one project):

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

### VS Code (GitHub Copilot)

Run **MCP: Add Server…** from the command palette, or create `.vscode/mcp.json`. Using an input means the token isn't stored in the file:

```json
{
  "inputs": [
    { "type": "promptString", "id": "leantime-token", "description": "Leantime token", "password": true }
  ],
  "servers": {
    "leantime": {
      "type": "http",
      "url": "https://your-leantime-url/mcp",
      "headers": { "Authorization": "Bearer ${input:leantime-token}" }
    }
  }
}
```

Use Copilot Chat in **Agent** mode to call the tools.

### Windsurf

Edit `~/.codeium/windsurf/mcp_config.json`. Note that Windsurf uses `serverUrl`, not `url`:

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

### OpenAI Codex CLI

Add this to `~/.codex/config.toml`, and set the token as an environment variable (`export LEANTIME_TOKEN=YOUR_TOKEN`) so it isn't stored in the file:

```toml
[mcp_servers.leantime]
url = "https://your-leantime-url/mcp"
bearer_token_env_var = "LEANTIME_TOKEN"
```

### Any other assistant

Any assistant that supports **Streamable HTTP** MCP servers with custom headers works. Give it the URL `https://your-leantime-url/mcp` and the `Authorization: Bearer …` header. Assistants that only support local (stdio) servers can use `mcp-remote` as shown for Claude Desktop.

## Step 4: Check the connection

Ask your assistant:

> Which Leantime projects can you see?

It should call `getAllProjects` and list your projects. If it does, you're done.

If it doesn't, test the server directly from a terminal:

```bash
curl https://your-leantime-url/mcp \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"curl","version":"1"}}}'
```

| Result | Meaning |
|---|---|
| JSON with `"serverInfo":{"name":"Leantime MCP Server"` | The server and your token work. Check the assistant's configuration. |
| `401` | The token is wrong, revoked, or a proxy removed the header. See [Troubleshooting](?id=troubleshooting). |
| `404` or a Leantime web page | The plugin isn't enabled, or the URL is missing a subfolder. |
| `429` | Too many requests. Wait a minute. |

## What the assistant can do

You don't call these tools yourself. The assistant picks them based on what you ask. The list helps you know what's possible and what the assistant will ask permission for.

**Reads** only looks at data. **Adds** creates new data. **Changes** edits existing data.

### Tasks

| Tool | What it does | |
|---|---|---|
| `findTasks` | Finds tasks across your projects by assignee, status or last change | Reads |
| `getTicket` | Shows one task with all its details | Reads |
| `getTaskStatusSummary` | Counts tasks per status in a project | Reads |
| `getStatusLabels` | Lists the statuses a project uses | Reads |
| `getAllStatusLabelsByUserId` | Lists statuses for all your projects | Reads |
| `addTask` | Creates a task | Adds |
| `bulkAddTasks` | Creates many tasks in one go | Adds |
| `addSubtask` | Creates a subtask under a task | Adds |
| `createSubtasksForTask` | Creates several subtasks under a task | Adds |
| `editTask` | Changes a task: status, assignee, dates, milestone, description… | Changes |
| `bulkEditTasks` | Changes many tasks in one go | Changes |
| `bulkScheduleTasks` | Sets the planned start and end of many tasks | Changes |

### Milestones

| Tool | What it does | |
|---|---|---|
| `findMilestones` | Lists a project's milestones | Reads |
| `getMilestone` | Shows one milestone | Reads |
| `addMilestone` | Creates a milestone | Adds |
| `addMilestonesForProject` | Creates several milestones in one go | Adds |
| `editMilestone` | Changes a milestone | Changes |

### Projects

| Tool | What it does | |
|---|---|---|
| `getAllProjects` | Lists your projects with progress | Reads |
| `findProject` | Finds a project by name | Reads |
| `getProject` | Shows one project | Reads |
| `getFullProjectOverview` | Project details, progress, tasks, status updates and time in one answer | Reads |
| `getProjectsAssignedToUser` | Lists the projects you're assigned to | Reads |
| `getUsersAssignedToProject` | Lists a project's team | Reads |
| `addProject` | Creates a project (Managers and above) | Adds |
| `editProject`, `patchProject` | Changes a project (Managers and above) | Changes |

### Goals

| Tool | What it does | |
|---|---|---|
| `getAllGoals` | Lists a project's goals | Reads |
| `getGoal` | Shows one goal with its progress | Reads |
| `getGoalsByMilestone` | Lists goals linked to a milestone | Reads |
| `getChildGoals`, `getParentKPIs` | Shows how goals roll up into each other | Reads |
| `createGoalboard` | Creates a goal board | Adds |
| `createGoal` | Creates a goal with start, current and target values | Adds |
| `editGoal` | Updates a goal, for example its current value | Changes |

### Calendar and planning

These work on **your own** calendar.

| Tool | What it does | |
|---|---|---|
| `getCalendar` | Shows your events and scheduled tasks for a date range | Reads |
| `getICalUrl` | Gives you the address to subscribe to your Leantime calendar | Reads |
| `addEvent`, `bulkAddEvents` | Creates calendar events | Adds |
| `editEvent`, `bulkEditEvents` | Changes calendar events | Changes |
| `deleteEvent` | Deletes a calendar event | **Deletes** |
| `scheduleTaskOnCalendar` | Blocks time for a task | Changes |
| `scheduleDay` | Places events and tasks into the free slots of a day | Adds |
| `breakdownTask` | Splits a task into subtasks and schedules them | Adds |

### Comments and status updates

| Tool | What it does | |
|---|---|---|
| `getComments` | Shows comments on a task, goal, idea or doc | Reads |
| `getAllProjectComments` | Shows a project's status updates | Reads |
| `pollComments` | Shows recent comments across your projects | Reads |
| `addComment` | Adds a comment | Adds |
| `addProjectStatusUpdate` | Posts a project status update (green, yellow or red) | Adds |

### Time tracking

| Tool | What it does | |
|---|---|---|
| `startTimer`, `stopTimer` | Starts and stops your timer on a task | Changes |
| `logTime` | Logs hours to a task | Adds |
| `getUserTimesheets` | Shows your time entries | Reads |
| `getWeeklyTimesheets` | Shows a week of time entries | Reads |
| `getTimesheetSummary` | Totals hours by project, task, user or day | Reads |
| `getProjectTimesheets` | Shows everyone's time on a project (needs permission to manage timesheets) | Reads |

### Search and help

| Tool | What it does | |
|---|---|---|
| `search` | Searches tasks, projects, goals, milestones, docs and more, like the search bar in Leantime | Reads |
| `searchLeantimeDocumentation` | Searches Leantime's online documentation (self-hosted: needs `LEAN_JINA_KEY`, see [Settings for administrators](?id=settings-for-administrators)) | Reads |
| `seedResourcesFromProjects` | Fills a program's resource plan from its projects (only with the Program Management plugin) | Adds |

Whether a tool works also depends on your role and the project. For example, a Read Only user can use the "Reads" tools but not change tasks, and Goals tools don't work in a project that has Goals switched off.

## Getting good results

The assistant works best when you are specific about **which project** and **what you want back**.

**Name the project, or ask the assistant to find it first.** "Create a task in the Website Redesign project" works better than "create a task", because the assistant otherwise has to guess.

**Use task numbers when you have them.** "Mark #123 as done" is faster and safer than "mark the budget task as done".

**Ask for a plan before big changes.** For anything that changes many tasks, say "show me what you'd change first". Most assistants ask for approval before each change; keep that switched on until you trust the setup.

**Use the bulk tools for big jobs.** "Create these 20 tasks" uses one `bulkAddTasks` call instead of 20 separate calls, which is faster and stays under the rate limit.

**Status names are per project.** Each project can have its own statuses. If "move to In Review" doesn't work, ask "what statuses does this project have?" first.

### Example prompts

**Your day**
- "What's assigned to me that's due this week or overdue? Group it by project."
- "Plan my day tomorrow from 9 to 5 around my calendar, with my two most urgent tasks in the morning."
- "Start a timer on #234." … "Stop my timer."

**Tasks and milestones**
- "Create these tasks in the Website Redesign project, all in the Launch milestone: design homepage mockup (due Friday), review competitor sites (Wednesday), gather stakeholder feedback (next Monday)."
- "Break #789 into subtasks of about two hours each."
- "Move #234, #235 and #241 to the March Sprint milestone and set them to In Progress."
- "Which milestones in Project Atlas are due this month, and how many tasks are still open in each?"

**Time**
- "Log 2 hours to #456 for yesterday: 'Fixed checkout bug'."
- "How many hours did I log last week, by project?"
- "Compare my calendar and completed tasks this week with my logged time. Which tasks have no time entries?"

**Reporting**
- "Write a status report for the Acme Website project: completed this week, in progress, upcoming milestones, risks."
- "Post a project status update on Acme Website: status green, 'Design approved, development starts Monday.'"
- "Show the goals for the Q1 Initiative project and which ones are behind."

**Finding things**
- "Search Leantime for anything about 'invoice export'."
- "What did people comment on in the Mobile App project since Monday?"

## Running an AI agent as a team member

You can have an AI agent pick up and work on tasks next to your team. Set it up so its work is visible and easy to undo:

1. **Create a separate Leantime user for the agent**, for example "AI Assistant" with its own email. Give it the **Editor** role, not Manager or Administrator.
2. **Add that user only to the projects it should work in.**
3. **Sign in as that user once, and create a Personal Access Token** for it (Step 2). Configure the agent with that token.
4. Assign tasks to the agent user. Everything it creates, edits or comments on shows its name, so the team can see what was done by the agent.

Then give the agent clear working rules in its instructions, for example:

```
You work in the Leantime project "Support Backlog".
1. Find tasks assigned to you with status "New".
2. Before starting a task, set it to "In Progress" and add a comment saying what you plan to do.
3. When done, add a comment with the result and set the status to "Review". Never set "Done" yourself.
4. If something is unclear, add a comment with your question and assign the task back to its creator.
```

Leantime doesn't run the agent on a schedule. The agent runs when you (or your automation) start it. Use your agent platform's scheduler if you want a daily digest or a regular check.

## Security and privacy

- **Same permissions as the app.** Every request runs as the token's user, with that user's role and project access. A user can't reach a project through MCP that they can't open in Leantime.
- **Tokens are full-access keys.** A token can do everything its user can. There are no read-only tokens yet. Treat tokens like passwords, never paste them into a chat or commit them to a repository, and use a separate, limited user (see above) for agents.
- **Keep approvals on.** Most assistants ask before running a tool that changes data. Leantime marks its tools as read-only, adding data, or changing data, so your assistant can tell them apart. `deleteEvent` is the only tool that deletes.
- **Data goes to your AI provider.** The results of every tool call (task titles, descriptions, comments, time entries) become part of the conversation with the AI provider you use.
- **Use HTTPS.** The token is sent with every request.
- **Rate limits.** Each user and IP can make 300 MCP requests per minute by default.
- **Revoke what you don't use** under **My Profile → Personal Access Tokens**. Delete API keys under **Company Settings → API Keys**.

## Settings for administrators

Self-hosted only. Set these in `config/.env`:

| Variable | Default | What it does |
|---|---|---|
| `LEAN_RATELIMIT_MCP` | `300` | MCP requests per minute, per user and IP. |
| `LEAN_JINA_KEY` | empty | API key for [Jina](https://jina.ai/) search. Needed by the `searchLeantimeDocumentation` tool, which searches Leantime's online documentation. Without it, that tool returns an error. The search queries are sent to Jina. |

**Reverse proxies.** If Leantime runs behind nginx, Apache, Traefik, Cloudflare or a load balancer, make sure the `Authorization` header is passed through. Apache with PHP-FPM or FastCGI often drops it. Add this to your virtual host or `.htaccess`:

```apache
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
```

Also make sure the proxy doesn't buffer or time out short requests to `/mcp`, and that `LEAN_APP_URL` is set to the public address.

**Updates.** After updating Leantime, finish the database update in the browser before using MCP again.

## Troubleshooting

**`401 Unauthorized`**
- Check the header format: `Authorization: Bearer <token>` (with a space after `Bearer`) or `x-api-key: lt_...`.
- The token may have been revoked. Create a new one.
- A reverse proxy may be removing the `Authorization` header. See [Settings for administrators](?id=settings-for-administrators). Test with the curl command from Step 4 on the server itself.

**`404 Not Found` on `/mcp`**
- Self-hosted: the MCP Server plugin isn't installed or enabled.
- Leantime is in a subfolder: use `https://example.com/leantime/mcp`.

**The assistant connects, but finds nothing**
- The token's user isn't assigned to that project. MCP uses the same access as the app.
- With an API key, "my tasks" means the API user's tasks. Use a Personal Access Token.

**"Not allowed" or "module is switched off"**
- The project has that feature (for example Goals or Time tracking) switched off in **Project Settings → Modules**, or your role can't do that action in the app either.

**Dates or times are off by some hours**
- Times are interpreted in your Leantime timezone (**My Profile → Settings**). Tell the assistant the timezone if it guesses wrong, for example "tomorrow 9:00 Berlin time".

**`429 Too Many Requests`**
- Wait a minute. Ask the assistant to use the bulk tools for large jobs, or (self-hosted) raise `LEAN_RATELIMIT_MCP`.

**The assistant doesn't see new tools after an update**
- Assistants may keep the tool list for up to 15 minutes. Restart the assistant or reconnect the server.

**Claude Desktop shows "Server disconnected"**
- Check that Node.js 18+ is installed (`node -v`).
- Read the log: `~/Library/Logs/Claude/mcp-server-leantime.log` (macOS) or `%APPDATA%\Claude\logs\mcp-server-leantime.log` (Windows).
- Local development with a self-signed certificate only: add `"NODE_TLS_REJECT_UNAUTHORIZED": "0"` to `env`. Never do this in production.

**Server logs**
- Self-hosted: `storage/logs/` in your Leantime installation.

## FAQ

**Is it available on Leantime Cloud?**
Yes. Use the address you open Leantime Cloud with, plus `/mcp`, and a Personal Access Token.

**Can I use it with ChatGPT or Claude.ai in the browser?**
Not yet. Their connectors only work with servers that sign in through OAuth. Use Claude Desktop, Claude Code, Cursor, VS Code, Windsurf or Codex.

**Can I give the assistant read-only access?**
Not with a token setting yet. Use your assistant's tool approval settings to allow only the read tools, or connect with a separate user that has the **Read Only** role.

**Can the assistant delete my tasks or projects?**
No. The only tool that deletes anything is `deleteEvent`, for calendar events. The assistant can still change tasks (status, assignee, dates), so keep approvals on for changes.

**I used the `leantime-mcp` npm package before. Do I need to change anything?**
Yes. The npm bridge is deprecated. Replace it with one of the configurations in Step 3. Your existing token keeps working.

**Is there an MCP server that works without the plugin?**
There is a community project, [daniel-eder/leantime-mcp](https://github.com/daniel-eder/leantime-mcp), that uses Leantime's [JSON-RPC API](api/usage.md) with an API key. It isn't maintained by the Leantime team.

## Resources

- [MCP Server plugin](https://marketplace.leantime.io/product/mcp-server/) on the Leantime Marketplace
- [Model Context Protocol](https://modelcontextprotocol.io/) specification
- [Leantime JSON-RPC API](api/usage.md)
- [Report a bug](https://github.com/Leantime/leantime/issues/new)
