# Set up a project for someone else

You can have your AI assistant set up the work for a teammate: create the project, add them to its team, and hand them the tasks. They're told about the project and each task, and can start right away.

You need an AI assistant connected to Leantime (see [Connect your assistant](ai/recipes.md#connect-your-assistant)), and the **Manager** role or higher to create projects and change a project's team.

## What to ask

```
Create a project called "Customer Service". Add Sam to its team.
Then add tasks for these three requests, assign them to Sam with
due dates, and add me as a collaborator on each so I can follow along.
Show me everything before you create it.

[paste the requests, or say which emails to use]
```

The assistant creates the project and the tasks, and Sam is told: once for being added to the project, and once for each task assigned to them.

**Add people to the team first.** The assistant can assign a task to someone who isn't on the project's team, but that person may not be able to open it. And a project only shows in someone's [Project Hub](using-leantime/managing-projects.md#whats-on-the-project-hub) once they're on its team, even for Owners and Administrators, who can open every project.

## Add or remove people from a project's team

On Leantime Cloud, and on self-hosted Leantime 3.16.0 or later with MCP Server plugin 2.1.0 or later, the assistant can change a project's team:

- "Add Sam and Priya to the Customer Service project."
- "Who's on the Website team? Remove Alex, who moved to another team."

Changing a team needs the **Manager** role or higher, the same as on the project's **Team** tab. People you add are told in their Leantime inbox, in their email digest if they get emails, and on their phone if they use the [mobile app](using-leantime/mobile-app.md). Nobody is told when you add yourself.

On older versions, add people on the project's **Team** tab (see [Projects](using-leantime/managing-projects.md)), then ask the assistant to assign the tasks.

## Related

- [Things your AI assistant can do in Leantime](ai/recipes.md): more recipes
- [Use Leantime from your AI assistant: start a new project in one message](ai/use-leantime-from-your-ai-assistant.md#start-a-new-project-in-one-message)
- [Projects](using-leantime/managing-projects.md)
- [Notifications](using-leantime/notifications.md)
