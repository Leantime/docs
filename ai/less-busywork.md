# Less busywork with AI

Keeping a project up to date is the part everyone skips: moving to-dos along, assigning work, typing up the notes from a meeting, setting up the next project. With your AI assistant connected to Leantime, you don't have to do that by hand. You say what happened in your own words, and the assistant updates Leantime for you.

You still use Leantime to see where things stand and to decide what's next. The typing and clicking go to the assistant.

**Before you start:** connect your assistant with the [MCP server](installation/leantime-mcp.md). On Leantime Cloud it's already on, and you can also ask [L.E.O.](ai/leantime-cloud-ai.md), the built-in assistant, for many of the same things.

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

People can only be assigned in projects they're on. The assistant can't add someone to a project's team yet: do that on the project's **Team** tab (see [Projects](using-leantime/managing-projects.md)), then ask again.

## Start a new project in one message

Describe the project as you'd explain it to someone joining it:

```
Start a project called "Eastside pantry" for Riverside Food Network,
from March 1 to June 30. Add three milestones: Site agreed (March),
Volunteers trained (April to May) and Pantry open (June).
Suggest the first to-dos for each milestone, and wait for my OK
before you create them.
```

The assistant creates the project and the milestones, shows you the to-dos it suggests, and creates them once you agree. Then add your team on the **Team** tab, and ask it to hand out the to-dos.

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
- [AI in Leantime Cloud (L.E.O.)](ai/leantime-cloud-ai.md)
- [AI with Leantime](ai/README.md)
