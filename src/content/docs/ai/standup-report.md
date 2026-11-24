---
title: "Get a standup report every morning"
description: "Have an AI assistant write a project's standup from Leantime: done, in progress, waiting, blocked and time logged, on request or every morning."
head:
  - tag: title
    content: "Daily standup report from Leantime with Claude"
plugin:
  name: "MCP Server"
  url: "https://marketplace.leantime.io/product/mcp-server/"
checked: "3.17"
glance:
  minutes: 10
  level: "Beginner"
  needs:
    - "An AI assistant connected to Leantime"
    - "For the morning schedule: Claude, with Leantime added as a connector"
    - "For everyone's logged hours: the Company Manager role or higher"
  result: "A short standup per project, in your chat or posted as a project update every morning"
---

Your AI assistant can write the standup for a project from what's in Leantime: what got done since yesterday, what's in progress, what's waiting for approval, what's blocked, and the time people logged. Ask for it when you need it, or have Claude write it every morning and post it as a project update, so the team reads it before the meeting, or instead of one.

## Ask when you need it

```
Write the standup for the Website Redesign project:
- Done: to-dos that are Done and changed since yesterday 9:00.
- In progress: to-dos In Progress, with who has them and the hours logged on them.
- Waiting for approval: to-dos in Waiting for Approval.
- Blocked: Blocked to-dos, with the latest comment saying why.
- Time: the hours each person logged yesterday.
One line per to-do, with its number. Leave out empty sections.
```

The assistant reads the project's to-dos, comments and timesheets, and answers with something like this:

> **Website Redesign: standup, Tuesday 24 November**
>
> **Done**
> - #12 Write the new homepage copy (Ada)
>
> **In progress**
> - #40 Draft the launch announcement email (Ada), 1.5 hours logged
>
> **Waiting for approval**
> - #42 Add a Back to top link on long pages (Ben)
> - #43 Add alt text to the product images (Ben)
>
> **Blocked**
> - #39 Fix the checkout error in Safari (Chloe). There's no comment saying why: ask Chloe.
>
> **Time logged yesterday:** Ada 1.5 hours

For your own standup across all your projects, ask "Give me my standup: what I finished yesterday, what's due today, and anything overdue or blocked."

## Every morning, on a schedule

> **To verify:** the scheduled run hasn't been tested end to end yet. The request itself has.

1. **Add Leantime as a connector in Claude** (see [Add Leantime as a connector in Claude](/ai/recipes/#add-leantime-as-a-connector-in-claude)). A scheduled task runs in the cloud. It uses the connectors of your Claude account, not a Leantime connection you added in Claude Code on your computer.
2. **Create a scheduled task** at [claude.ai/code/routines](https://claude.ai/code/routines), or with `/schedule` in Claude Code. Choose the working days and a time before your standup, and give it instructions like these:

```
Every working day, write the standup for the Leantime project
"Website Redesign", using what changed since the previous working day
at 9:00:
- Done: to-dos that are Done and changed since then.
- In progress: to-dos In Progress, with who has them and the hours
  logged on them.
- Waiting for approval: to-dos in Waiting for Approval.
- Blocked: Blocked to-dos, with the latest comment saying why.
- Time: the hours each person logged on the previous working day.

One line per to-do, with its number. Leave out empty sections.
Post it as a project update on Website Redesign, formatted as
paragraphs and bulleted lists. Set the status to yellow if anything
is blocked or overdue, otherwise green.
```

The update appears on the project's overview under **Project Updates**, and the project's team is told about it, like any project update (see [Notifications](/using-leantime/notifications/)). If the project sends its updates to Slack, Discord, Mattermost, Telegram or Zulip, it goes there too (see [Project integrations](/using-leantime/integrations/)).

Good to know:

- **Scheduled tasks** need a paid Claude plan, run at most once an hour, and are still a preview. See [Claude's documentation](https://code.claude.com/docs/en/routines).
- **It doesn't wait for your OK.** It posts the update on its own. Read the first few, and adjust the instructions if something is missing or too long.
- **One task can cover several projects.** Name each one, and ask for one update per project.

## What does "done since yesterday" mean?

The assistant finds to-dos that are **Done** now and were **changed** since the time you give. It filters on when a to-do last changed, not on when it was moved to Done. So:

- A to-do finished last week and edited yesterday, for example to add a tag, shows up as done again.
- A to-do finished yesterday afternoon shows up, as long as nobody changed it back.

If a to-do appears that wasn't finished recently, ask the assistant to leave it out. The to-do's **History** tab in Leantime shows when its status changed.

## Tips

- **Keep blocked to-dos explained.** The report can only say why something is blocked if someone wrote it in a comment. A rule like "when you set a to-do to Blocked, add a comment" makes the report much more useful.
- **Time needs logging, and the right role.** The hours come from the project's timesheets (see [Time tracking](/using-leantime/timesheets/)). Time nobody logged doesn't show. Seeing everyone's time needs the Company Manager role or higher. As an Editor, leave out "with the hours logged on them" and the Time line, or ask only for your own hours.
- **Statuses differ per project.** If your project uses other names, like "Review" instead of "Waiting for Approval", use them in the request.
- **Formatting:** ask for "paragraphs and bulleted lists" in a project update. Line breaks in plain text can run together into one paragraph in Leantime.

## Related

- [Things your AI assistant can do in Leantime](/ai/recipes/): more recipes
- [Turn meeting notes into to-dos](/ai/meeting-notes-to-todos/)
- [Use Leantime from your AI assistant: routines worth keeping](/ai/use-leantime-from-your-ai-assistant/#routines-worth-keeping)
- [Projects: what's on the project overview](/using-leantime/managing-projects/#whats-on-the-project-overview)
