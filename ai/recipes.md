# Things your AI assistant can do in Leantime

Once Leantime is connected to an AI assistant like Claude, you can hand it whole pieces of work, not just questions. Each page below is a complete recipe: what to ask, what you get, and what to check. Copy the request and adjust the project names and people to yours.

For shorter examples of what to ask, see [Use Leantime from your AI assistant](ai/use-leantime-from-your-ai-assistant.md).

## Pick an outcome

| You want | Recipe | Works with |
| --- | --- | --- |
| A meeting's decisions to become assigned to-dos, and the team to see what was decided | [Turn meeting notes into to-dos](ai/meeting-notes-to-todos.md) | Any connected assistant |
| A short report every morning: what got done, what's in progress, what's blocked, and the time logged | [Get a standup report every morning](ai/standup-report.md) | Any connected assistant; Claude for the morning schedule |
| A coding agent to pick up to-dos you tag for it, and hand them back for review | [Hand to-dos to a coding agent](ai/coding-agent.md) | Claude Code, or another coding agent |
| Customer emails to become tasks with an owner, a priority and a due date | [Turn emails into tasks](ai/emails-to-tasks.md) | Claude with the Gmail connector |
| A project ready for a teammate: the project, its team and their first tasks | [Set up a project for someone else](ai/project-for-someone-else.md) | Any connected assistant |
| An invoice from the billable time your team logged, and the time marked as invoiced | [Turn timesheets into an invoice](ai/invoice-from-timesheets.md) | Any connected assistant; one that makes files for a PDF or spreadsheet |

## Connect your assistant

Every recipe uses Leantime's [MCP server](installation/leantime-mcp.md). On Leantime Cloud it's already on. If you host Leantime yourself, install the MCP Server plugin first, and check that your version supports signing in from your assistant (see [Before you start](installation/leantime-mcp.md#before-you-start)).

With **Claude, ChatGPT and Claude Code**, you connect by signing in: there's nothing to copy. **Cursor, VS Code, Windsurf and Codex** use a token you create in Leantime. The [MCP server page](installation/leantime-mcp.md#step-3-connect-your-ai-assistant) has the steps for each.

### Add Leantime as a connector in Claude

> **To verify:** the steps in Claude follow Claude's help pages. The Leantime side (signing in, **Allow access**, **Connected apps**) has been tested.

1. In Claude on the web, open **Customize → Connectors**, click **+** and choose **Add custom connector**.
2. Name it "Leantime" and enter `https://your-leantime-url/mcp`.
3. If Claude asks how to sign in, choose **Register automatically**. Leantime registers Claude by itself, and doesn't use a client ID or secret.
4. Click **Connect**, sign in to Leantime, and click **Allow access**. Leantime warns that it hasn't verified the app; that's expected when you've just clicked Connect (see [Why does Leantime say it hasn't verified the app?](installation/leantime-mcp.md#why-does-leantime-say-it-hasnt-verified-the-app)).

On Claude Team and Enterprise, an owner adds the connector for the organization first; then each person connects their own Leantime account. On the Free plan you can add one custom connector.

A connector you add in Claude works in Claude on the web, in Claude Desktop and in the phone apps, and in scheduled tasks. If you sign in to Claude Code with the same Claude account, it works there too.

### Or connect Leantime in Claude Code

Run once in a terminal, with your Leantime address:

```bash
claude mcp add --transport http --scope user leantime https://your-leantime-url/mcp
```

Then type `/mcp` in Claude Code, choose **leantime**, then **Authenticate**, and sign in to Leantime in your browser. The [MCP server page](installation/leantime-mcp.md#claude-code) has the details, and how to use a token instead.

A Leantime connection you add this way stays on that computer. A scheduled task that runs in the cloud can't use it.

### Which apps are connected?

Apps you connected by signing in are listed under **My Profile → Personal Access Tokens → Connected apps**. Click **Disconnect** to remove one: it loses access right away.

## What are the limits?

- **The assistant works as you.** It sees and changes only what your Leantime account can, with your role, and everything it does shows your name. To have an assistant work under its own name, see [Running an AI agent as a team member](installation/leantime-mcp.md#running-an-ai-agent-as-a-team-member).
- **Self-hosted Leantime needs the MCP Server plugin,** and has to be reachable from the internet for Claude on the web and for scheduled tasks.
- **What you share goes to your AI provider.** The notes, emails and to-dos the assistant reads are part of your conversation with it. Check that this is allowed for your team.
- **It can't delete to-dos.** If it created to-dos you don't want, delete them in Leantime.
- **Check its work at first.** Ask it to show you what it will change before it changes many to-dos at once, until you trust the recipe.

## Related

- [Use Leantime from your AI assistant](ai/use-leantime-from-your-ai-assistant.md): shorter examples and routines
- [MCP server: connect your own assistant](installation/leantime-mcp.md): setup for every assistant, and the full list of what it can do
- [AI in Leantime Cloud (L.E.O.)](ai/leantime-cloud-ai.md): the assistant built into Leantime Cloud
