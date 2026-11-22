# Everyday workflows with your AI assistant

When Leantime is connected to an AI assistant like Claude, the assistant can work in Leantime and in your other tools in the same conversation. This page has complete workflows you can copy and adjust, starting with the one most teams ask for first: turning emails into tasks.

Each workflow uses Leantime's [MCP server](installation/leantime-mcp.md). For shorter examples of what to ask, see [Use Leantime from your AI assistant](ai/use-leantime-from-your-ai-assistant.md).

**At a glance**

- **Time:** about 10 minutes to connect everything, then a minute each time you ask
- **Level:** Beginner. No terminal needed if you use Claude on the web or the Claude app.
- **You need:** a Leantime account, a Claude account, and Gmail for the email workflows
- **At the end:** emails turned into Leantime tasks with an assignee, a priority and a due date, on request or every morning

## What do I need?

- **Leantime connected to your assistant.** The MCP Server plugin makes Leantime available to assistants. On Leantime Cloud it's already on. If you host Leantime yourself, install it first, and check that your version supports signing in from Claude (see [Before you start](installation/leantime-mcp.md#before-you-start)). Then connect your assistant: in Claude on the web or the Claude app, or in Claude Code if you use a terminal.
- **For the email workflows, a mail connector too,** for example the Gmail connector in Claude. The assistant reads your emails through it, and creates the tasks through Leantime.

### Add Leantime as a connector in Claude

> **To verify:** these steps follow Claude's help pages and haven't been tested end to end with Leantime yet.

1. In Claude on the web, open **Customize → Connectors**, click **+** and choose **Add custom connector**.
2. Name it "Leantime" and enter `https://your-leantime-url/mcp`.
3. If Claude asks how to sign in, choose **Register automatically**. Leantime registers Claude by itself, and doesn't use a client ID or secret.
4. Click **Connect**, sign in to Leantime, and click **Allow access**.

On Claude Team and Enterprise, an owner adds the connector for the organization first; then each person connects their own Leantime account. On the Free plan you can add one custom connector.

A connector you add in Claude works in Claude on the web, in Claude Desktop and in the phone apps, and in scheduled workflows. If you sign in to Claude Code with the same Claude account, it works there too.

### Or connect Leantime in Claude Code

If you use Claude Code, you can connect Leantime there instead. Run once in a terminal, with your Leantime address:

```bash
claude mcp add --transport http --scope user leantime https://your-leantime-url/mcp
```

Then type `/mcp` in Claude Code, choose **leantime**, then **Authenticate**, and sign in to Leantime in your browser. The [MCP server page](installation/leantime-mcp.md#claude-code) has the details, and how to use a token instead.

A Leantime connection you add this way stays on that computer. A [scheduled workflow](?id=every-morning-on-a-schedule) that runs in the cloud can't use it.

### Connect your email

In Claude, open **Customize → Connectors** and connect **Gmail**, then sign in with Google. Claude can then search and read your emails, and add or remove labels. It can't send emails: replies stay with you.

Gmail can't be connected from Claude Code directly. Connect it in Claude on the web: Claude Code uses it from there when you're signed in with the same account.

## Turn emails into tasks

Emails that need work, like customer requests, are easy to lose in an inbox. With both connectors, the assistant reads the emails and creates one task per conversation in the right Leantime project, with the details your team needs to act on it.

### Ask when you need it

Ask in your own words, and name the project:

```
Add yesterday's support emails to the Customer Service project.
One task per conversation. Assign them to Sam, with a due date for the
first reply, and add me as a collaborator. Show me the list first.
```

The assistant searches your mail, groups the messages into conversations, and shows you the tasks it would create:

> **You:** Add yesterday's support emails to the Customer Service project. …
>
> **Assistant:** I found 4 conversations from yesterday. I'd create these tasks in Customer Service, assigned to Sam, with you as a collaborator:
>
> 1. **Harbor Café: replacement for a damaged order.** Order 10482 arrived with two broken mugs. High priority, first reply due today.
> 2. **J. Okafor: refund for a double charge.** Receipt R-3391 was charged twice. High priority, first reply due today.
> 3. **Linden School: invoice address change.** Medium priority, first reply due tomorrow.
> 4. **Northside Gym: question about bulk pricing.** Low priority, first reply due Friday.
>
> Shall I create them?
>
> **You:** Yes, but make the Northside one Medium.
>
> **Assistant:** Done. I created 4 tasks in Customer Service and assigned them to Sam.

The tasks in the Customer Service project's table, each assigned to Sam with a priority and a due date:

![The Customer Service project's To-Dos table: four customer tasks assigned to Sam, each with a High or Medium priority and a due date](../_images/ai/emails-to-tasks.webp)

Besides the title and description, the assistant can set the **assignee**, **priority** (Critical, High, Medium, Low or Lowest), **due date**, **milestone** and **collaborators**. Ask for what you need. If it isn't sure which project or person you mean, it asks.

**Label the emails you want as tasks.** Give them a Gmail label like `→ Leantime` as they come in, by hand or with a Gmail filter. Then name the label in your request, like "add the emails labelled → Leantime". The assistant only looks at those, so nothing else in your inbox ends up in Leantime. Once the tasks are created, ask the assistant to take the label off those emails. Then the label only ever holds emails that aren't in Leantime yet.

**No mail connector?** Take screenshots of the emails and paste them into the chat with the same request. The assistant reads the screenshots instead.

### Every morning, on a schedule

> **To verify:** this workflow hasn't been tested end to end yet.

Instead of asking each time, mark the emails that need a task, and let a scheduled Claude task turn them into tasks every morning.

1. **Label the emails in Gmail,** for example with a label called `→ Leantime`. Do it by hand, or with a Gmail filter for addresses like your support address.
2. **Connect Leantime and Gmail as connectors in Claude** (see [What do I need?](?id=what-do-i-need)). A scheduled task runs in the cloud. It uses the connectors of your Claude account, not a Leantime connection you added in Claude Code on your computer.
3. **Create a scheduled task** at [claude.ai/code/routines](https://claude.ai/code/routines), or with `/schedule` in Claude Code. Choose **Daily** and a time, and give it instructions like these:

```
Every morning, look in Gmail for conversations with the label "→ Leantime".

For each conversation, search the Leantime project "Customer Service" for its
Gmail thread ID. If a task has it, add the new messages as a comment on that
task. If not, create one task, following these rules:
- Title: "Customer: what they need", for example "Harbor Café: replacement
  for a damaged order".
- Description: what the customer asked for, and any order or receipt numbers.
  End it with a line "Gmail thread: " and the conversation's thread ID.
- In every description and comment, leave out email addresses, phone
  numbers and account numbers. Summarize new messages instead of copying them.
- If the same customer asks about the same thing in another conversation,
  add that thread ID and the message to their existing task instead.
- Priority: from the reason they wrote. Money (refunds, billing) and legal
  questions rank higher; how-to questions rank lower.
- Assign it to Sam, with the first reply due the next working day.
- Add me as a collaborator.

- When the task or comment is saved, remove the "→ Leantime" label from the
  conversation.

At the end, list the tasks you created and the comments you added.
```

Good to know:

- **The label holds only what's left to do.** The assistant takes the label off each conversation it handled, so the next run starts with only new ones.
- **No duplicates.** Each task records the Gmail thread it came from, and the assistant searches Leantime for that thread before it creates a task. So if a label stays on, or a customer's conversation is labelled again, it doesn't get a second task: a new reply becomes a comment on the existing task, and you can see how often a customer followed up.
- **It doesn't wait for your OK.** When you ask in a chat, the assistant shows you the list first. A scheduled task creates the tasks on its own and leaves you a summary, and you fix anything afterwards. It may still stop to ask before an action it isn't sure about. Check its results for the first few days.
- **Scheduled tasks** need a paid Claude plan, run at most once an hour, and are still a preview. See [Claude's documentation](https://code.claude.com/docs/en/routines).

### What makes the tasks useful?

The same rules work for both workflows. Put them in your request, or in the scheduled task's instructions:

- **One task per conversation,** not one per email. Replies belong to the same task.
- **The title says who and what:** "Customer: what they need". People can scan the list without opening anything.
- **The description has what the customer asked for,** and the order or receipt numbers someone needs to look it up.
- **The description ends with the Gmail thread,** as a line like `Gmail thread: 18c2f9a1b3e4d5f6`. That's the conversation's ID, not an email address. With it, the assistant finds the task again when the customer replies, and doesn't create a second one. When a customer writes about the same thing twice, for example once through a chat form and once by email, both threads go on the same task.
- **Leave out email addresses, phone numbers and account numbers,** in the description and in comments about later replies. Everyone on the project sees the task, and the reply goes out from your mailbox anyway.
- **Set a priority from the reason they wrote.** For example, money and legal questions rank higher, and how-to questions lower.
- **Set a due date for the first reply.** With the priority, it makes urgent requests stand out on the board and in My Work.
- **Add a collaborator** for whoever should follow along, for example the person who answers the customer while someone else fixes the problem.

## Set up a project for someone else

You can also have the assistant set up the work for a teammate: create the project, add them to its team, and hand them the tasks.

```
Create a project called "Customer Service". Add Sam to its team.
Then add tasks for these three requests, assign them to Sam with
due dates, and add me as a collaborator on each so I can follow along.
Show me everything before you create it.

[paste the requests, or say which emails to use]
```

The assistant creates the project and the tasks, and Sam is told: once for being added to the project, and once for each task assigned to them.

**Add people to the team first.** The assistant can assign a task to someone who isn't on the project's team, but that person may not be able to open it. And a project only shows in someone's [Project Hub](using-leantime/managing-projects.md#whats-on-the-project-hub) once they're on its team, even for Owners and Administrators, who can open every project.

### Add or remove people from a project's team

On Leantime 3.15.4 or later, with the newest MCP Server plugin, the assistant can change a project's team:

- "Add Sam and Priya to the Customer Service project."
- "Who's on the Website team? Remove Alex, who moved to another team."

Changing a team needs the **Manager** role or higher, the same as on the project's **Team** tab. People you add are told in their Leantime inbox, in their email digest if they get emails, and on their phone if they use the [mobile app](using-leantime/mobile-app.md). Nobody is told when you add yourself.

On older versions, add people on the project's **Team** tab (see [Projects](using-leantime/managing-projects.md)), then ask the assistant to assign the tasks.

## What are the limits?

- **The assistant works as you.** It sees and changes only what your Leantime account can, with your role, and everything it does shows your name.
- **Self-hosted Leantime needs the MCP Server plugin,** and has to be reachable from the internet for Claude on the web and for scheduled tasks. See [Before you start](installation/leantime-mcp.md#before-you-start).
- **Your emails go to your AI provider.** The emails the assistant reads, and the tasks it creates, are part of your conversation with Claude. Check that this is allowed for your team before you use it for customer mail.
- **It can't delete tasks.** If it created tasks you don't want, delete them in Leantime.
- **The assistant can't send emails** with the Gmail connector. Reply to the customer from your mailbox, as usual.
- **Labels are changes to your mailbox.** Until you trust the workflow, ask the assistant to show you what it will change before it adds or removes a label.

## Related

- [MCP server: connect your own assistant](installation/leantime-mcp.md): setup for every assistant, and the full list of what it can do
- [Use Leantime from your AI assistant](ai/use-leantime-from-your-ai-assistant.md): shorter examples and routines
- [Task management](using-leantime/task-management.md)
- [Notifications](using-leantime/notifications.md)
