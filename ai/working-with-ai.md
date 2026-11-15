# Working with AI assistants

AI assistants like Claude, ChatGPT, Copilot and Cursor can help you install, configure and fix Leantime, even if you've never run a server before. They work best when you give them the right facts and check what they suggest. This page shows how.

## What can an AI assistant help me with?

- **Explaining** a guide step or an error message in plain words.
- **Writing** configuration for your situation: an `.env` file, a `docker-compose.yml`, an Nginx site.
- **Doing the steps** for you, if it's a coding agent that can run commands (Claude Code, Cursor, Codex). See the [Keycloak single sign-on walkthrough](ai/keycloak-sso.md), which an AI assistant carried out.
- **Working inside Leantime:** finding to-dos, logging time and updating projects for you, with the [MCP server](installation/leantime-mcp.md).

## How do I give the assistant the right information?

Assistants know a little about Leantime from their training, but not the current setting names, and they guess. Give them the real documentation:

- **One page:** give the assistant the page's Markdown version by adding `.md` to its address, for example `https://docs.leantime.io/installation/docker.md`, or open that address and paste the text into the chat. Pages with a **Copy page for AI** button do this in one click.
- **Your error:** paste the exact message or log lines, not a description of them.
- **Your setup:** your Leantime version (the release or Docker image tag you installed), how you installed it (Docker, package, NAS), your web server and database.

A good first message:

```text
I'm setting up self-hosted Leantime and I'm new to servers. Here's the official
guide [paste the page]. My setup: Leantime 3.14 in Docker Compose on Ubuntu 24.04,
behind Nginx with HTTPS at https://projects.example.com.

[What you want to do, or the exact error.]

Explain each step before you suggest it, use only setting names from the guide,
and tell me how to check that each step worked.
```

## What should I never paste into an AI chat?

- Passwords, client secrets, API keys and tokens
- Your full `.env` file, unless you replace every secret with a placeholder like `<db password>`
- Database dumps or exports with your team's data

The assistant doesn't need real secrets to help; placeholders work just as well. A coding agent that runs commands on your server can read files there, so only use one on machines where that's acceptable.

## How do I know the answer is right?

- **Check setting names against the docs.** Leantime settings start with `LEAN_` and are listed in the [configuration reference](installation/configuration.md). If the assistant suggests a name you can't find there, ask where it comes from.
- **Ask how to test each step,** and test before you move on.
- **Change one thing at a time,** so you know which change fixed or broke something.
- **Back up before upgrades or database commands.** See [Backup and restore](installation/backup-restore.md).

## Which words help the assistant understand me?

Precise words get precise answers. "It doesn't work" leads to guesses; "the container is unhealthy and the log says `nginx entered FATAL state`" leads to the fix. The [glossary](ai/glossary.md) explains the words that come up when you run Leantime, so you can recognise them and use them.

## Can the assistant work in Leantime for me?

Yes. With the [MCP Server](https://marketplace.leantime.io/product/mcp-server/) plugin, Claude, Cursor, VS Code and other MCP clients can read and update your projects, to-dos, timesheets and calendar. They act as you, with your permissions. See [MCP server: connect AI assistants](installation/leantime-mcp.md).
