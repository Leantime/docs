# Use Leantime from your AI assistant

If you already work with an AI assistant like Claude or ChatGPT, Leantime can be part of that conversation. Connect it once, and you can tell the assistant what happened in your own words: it creates the to-dos, assigns them, moves them along or sets up a new project, right there in the chat. You don't have to switch over to Leantime just to keep it up to date.

You still use Leantime to see where things stand and to decide what's next.

## Which assistants can I connect?

Assistants connect through Leantime's [MCP server](installation/leantime-mcp.md). On Leantime Cloud it's already on. If you host Leantime yourself, you install the MCP Server plugin first.

| Assistant | Can it connect? |
| --- | --- |
| Claude (claude.ai, Claude Desktop and the phone apps), ChatGPT | Yes: add your Leantime address and sign in |
| Claude Code | Yes: sign in, or use a token |
| Cursor, VS Code with GitHub Copilot, Windsurf, OpenAI Codex | Yes, with a token |
| [CoChat](https://cochat.ai/), a shared AI workspace for teams | Yes |

With Claude and ChatGPT, there's nothing to copy: you paste your Leantime address, sign in to Leantime and click **Allow access**. A Claude connector you add once also works in the Claude phone apps. For the other assistants, you create a token in Leantime and add it to the assistant's settings. The [MCP server page](installation/leantime-mcp.md#step-3-connect-your-ai-assistant) has the steps for each.

If you host Leantime yourself, signing in from Claude and ChatGPT needs Leantime 3.16 or later, reachable from the internet.

In Leantime Cloud, you can also ask [L.E.O.](ai/leantime-cloud-ai.md), the assistant built into Leantime, for many of the same things.

## Stop updating to-dos by hand

Tell the assistant what you did, the way you'd tell a colleague. It finds the to-dos, changes them, and tells you what it changed.

- "I finished the homepage copy. Send it to Ben for review, due Thursday."
- "Everything I worked on in the Website project today is done, except the press list."
- "The supplier call is blocked until we hear back from the landlord. Add that as a comment."
- "Push all my to-dos in the Eastside pantry project back one week."

You don't need to know to-do numbers or the exact status names. If the assistant isn't sure which to-do you mean, it asks.

### What a conversation looks like

> **You:** I finished the homepage copy. Send it to Ben for review, due Thursday.
>
> **Assistant:** I found "Write homepage copy" in the Website project. I'll:
> - set it to **Waiting for Approval**
> - assign it to Ben
> - set the due date to Thursday
> - add a comment: "Copy is done and ready for your review."
>
> Shall I go ahead?
>
> **You:** Yes, but say "first draft" in the comment.
>
> **Assistant:** Done. "Write homepage copy" is waiting for approval with Ben, due Thursday, with the comment "First draft is done and ready for your review."

Most assistants ask before they change anything. Keep that on: it's your chance to catch a wrong to-do or a wrong person before it happens.

## Turn notes into to-dos and assignments

Paste meeting notes, an email or a list from your notebook, and say who does what:

```
Create to-dos in the Eastside pantry project from these notes.
Chloe takes the volunteer schedule, Ben the supplier calls, due Friday.
Everything else is mine. Put them all in the Volunteers trained milestone.
```

The assistant creates the to-dos, assigns them and sets the dates in one go, then lists what it made.

With a mail connector, the assistant can read the emails itself, or check your inbox every morning. See [Turn emails into tasks](ai/everyday-workflows.md#turn-emails-into-tasks).

Add people to the project's team before you assign them to-dos, or they may not be able to open them. On Leantime Cloud, and on self-hosted Leantime 3.16.0 or later with an MCP Server plugin newer than 2.0.1, the assistant can do that too (see [Add or remove people from a project's team](ai/everyday-workflows.md#add-or-remove-people-from-a-projects-team)). On older versions, do it on the project's **Team** tab (see [Projects](using-leantime/managing-projects.md)), then ask again.

## Start a new project in one message

Describe the project as you'd explain it to someone joining it:

```
Start a project called "Eastside pantry" for Riverside Food Network,
from March 1 to June 30. Add three milestones: Site agreed (March),
Volunteers trained (April to May) and Pantry open (June).
Suggest the first to-dos for each milestone, and wait for my OK
before you create them.
```

The assistant creates the project and the [milestones](using-leantime/roadmap-planning.md), shows you the to-dos it suggests, and creates them once you agree. Then ask it to add your team (or add them on the **Team** tab) and to hand out the to-dos. For a complete example, see [Set up a project for someone else](ai/everyday-workflows.md#set-up-a-project-for-someone-else).

Creating projects needs the Manager role or higher, the same as in Leantime.

## Know where things stand without clicking around

- "What's due for me this week, and what's overdue? Group it by project."
- "Which milestones in the Eastside pantry project are due this month, and how many to-dos are still open in each?"
- "What did people comment on in the Website project since Monday?"
- "Which goals in the Eastside pantry project are behind?"

## Routines worth keeping

Once the assistant is connected, a few questions can replace a lot of clicking. Adjust the project names to yours.

**Morning briefing**

```
Give me my standup: what I finished yesterday, what's due today,
and anything overdue or blocked.
```

**Plan your week**

```
Look at my open to-dos across all projects. Schedule them across this week
by due date and effort: longer ones in the mornings, small ones in the
afternoons. Keep Friday afternoon free.
```

**Catch up on your timesheet**

```
Compare my calendar and the to-dos I finished this week with the time I logged.
Which to-dos have no time? Then log what I tell you, as Development.
```

**Write a client or team update**

```
Write a status update for the Website project: overall health (green,
yellow or red), what was finished this week, what's in progress,
upcoming milestones and risks. Show it to me, then post it as a project update.
```

## How do I get good results?

- **Name the project.** "Create a to-do in the Website project" works better than "create a to-do", because the assistant doesn't have to guess.
- **Say what you want back.** "Group it by project", "just the overdue ones", "as a short list".
- **Ask for a plan before big changes.** For anything that changes many to-dos at once, say "show me what you'd change first".
- **Correct it in plain words.** "Not that one, the one in the Website project" or "make it Chloe, not Ben" is enough.
- **Statuses differ per project.** If "move it to Review" doesn't work, ask "what statuses does this project have?"

## What if it gets something wrong?

- **It changed the wrong to-do.** Tell it, in the same conversation: "That was the wrong one, set it back the way it was." It can change the status, person and dates back.
- **It created to-dos you don't want.** The assistant can't delete to-dos. Delete them in Leantime, or ask it to move them to a status like **Archived**.
- **It can't find something.** It only sees the projects you can see. Check that you're on the project's team.

The assistant works with your account and your permissions, so everything it does shows your name, the same as if you'd done it yourself. To have an assistant work under its own name, see [Running an AI agent as a team member](installation/leantime-mcp.md#running-an-ai-agent-as-a-team-member).

## Related

- [MCP server: connect your own assistant](installation/leantime-mcp.md): setup, and the full list of what the assistant can do
- [Everyday workflows with your AI assistant](ai/everyday-workflows.md): complete workflows, like turning emails into tasks
- [AI in Leantime Cloud (L.E.O.)](ai/leantime-cloud-ai.md)
- [AI with Leantime](ai/README.md)
