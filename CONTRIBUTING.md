# Writing Leantime docs

Leantime is built for people who aren't project managers, and many people who install it have never run a server before. The docs have one job: make Leantime the easiest open source tool to set up, read and find. These rules keep every page feeling the same, so readers learn the patterns once and then stop noticing them.

AI assistants that edit these docs follow the same rules (see [AGENTS.md](AGENTS.md)).

## Who we write for

Assume the reader can copy a command into a terminal and edit a text file, and not much more. Experts skim, so a clear page costs them nothing. A beginner who gets stuck gives up.

- **Say where each command runs**, in the code block title: `title="Terminal"`, `title="Terminal, in the docker-leantime folder"`, `title=".env"`.
- **One action per step.** Number the steps and start each with what to do in bold.
- **Say what success looks like** after anything that can fail: "You should see…", or a `:::tip[It worked if…]` aside.
- **Explain a term the first time** you use it on a page, in a few words, or link to where it's explained.
- **Keep the main path short.** Background, alternatives and edge cases go in a `<details>` block ("More detail") or a separate section further down.
- Short sentences (aim for under 20 words) and short paragraphs (three or four sentences).

## Page structure

Every how-to page has the same shape:

1. **Front matter** with `title`, `description` and, for any task, `glance` (see below).
2. **One or two sentences** that answer the page's main question directly. Search engines and AI assistants quote this part.
3. **Sections as H2 (`##`)**, sub-sections as H3. The title is the page's only H1, so never use `#` in the body, and never skip a level. `npm run build` fails if you do.
4. **What if something goes wrong?** at the end, linking to the matching troubleshooting page.

### Headings

- Use **questions** for things people search for: "How do I update Leantime in Docker?", "Where is my data stored?", "Can Leantime import from Jira?". A page with three or more question headings automatically gets FAQ data for search engines.
- Use **short task names** for steps you follow in order: "Install Leantime", "Create the client in Keycloak".
- Write headings in sentence case: "Set up email", not "Set Up Email".

### The labels under the title

Every page shows a row of labels under its title, so readers know straight away whether it applies to them:

- **Core feature** or **Plugin: name** (linked to the plugin's marketplace page), on pages about using Leantime;
- **Cloud and self-hosted**, **Self-hosted only** or **Leantime Cloud only**;
- **Checked with Leantime x.y**: the version the page was last followed step by step against.

Most pages get these from their folder (`src/lib/availability.ts`): `installation/` pages are self-hosted only, `using-leantime/` pages are core features for Cloud and self-hosted, and so on. Set them on a page when it differs:

```yaml
edition: cloud            # both, self-hosted or cloud
plugin:
  name: Leantime Strategies
  url: https://marketplace.leantime.io/product/leantime-strategies/
checked: "3.14"
```

Leantime Cloud includes the marketplace plugins, except Advanced Authentication (self-hosted only: set `edition: self-hosted` on its page). OpenID Connect and LDAP sign-in are self-hosted only too. The AI features inside Leantime are Cloud only. Update `checked` whenever you follow a page again on a new version.

### The "At a glance" box

```yaml
glance:
  minutes: 10                      # honest estimate for a first-timer
  level: Beginner                  # Beginner | Some experience | Advanced
  needs:                           # what to have ready before you start
    - A server with Docker installed
    - An admin account in Leantime
  where:                           # where you do the work, in the order you go there
    - A terminal on the server
    - Leantime, under **Company Settings**
  result: Leantime running at `http://localhost:8080` with its own database.
```

Put places in `where`, not in `needs`: "a terminal" is where you work, Docker is something you need. Name the place as precisely as you can (which machine, which screen), and use the same names as the code block titles further down.

For a time range, add `maxMinutes` (`minutes: 10` and `maxMinutes: 30` show "10–30 min").

Pages converted from the old docs get their box from `scripts/page-metadata.json` (`glance`, the same fields), so a re-run of the migration keeps it. Override pages and new pages set `glance` in their own front matter.

`needs`, `where` and `result` accept `code`, **bold** and [links](/path/). The box is also published as structured data and included in the page's Markdown copy.

## Components

Use these the same way everywhere. A page that needs Steps, Tabs or Cards is an `.mdx` file.

| Use | For | Don't use it for |
|---|---|---|
| `:::tip` | A shortcut, or how to check that something worked | Required steps |
| `:::note` | Background that helps but isn't required | Warnings |
| `:::caution` | Something that breaks or confuses if missed (wrong cookie setting, required restart) | Data loss |
| `:::danger` | Data loss or a security risk, and nothing else | Anything recoverable |
| `<Steps>` | A procedure of three or more steps | Lists without an order |
| `<Tabs syncKey="…">` | The same task done two ways (Docker Compose or docker run) | Unrelated content |
| `<details>` | Optional depth: "More detail", "Why?" | Anything a beginner needs |

- **No more than three asides on a page.** If everything is highlighted, nothing is.
- Give an aside a title only when it adds something: `:::caution[Using HTTPS?]`.
- In plain `.md` pages you can also write `> **Note:** …`, `> **Tip:** …`, `> **Important:** …` or `> **Danger:** …`; the migration script turns these into asides.

Tab `syncKey`s in use, so that a reader's choice carries across pages:

| syncKey | Tabs |
|---|---|
| `docker-method` | Docker Compose (recommended) · docker run |
| `edition` | Leantime Cloud · Self-hosted |

### Cloud and self-hosted

Most pages apply to both Leantime Cloud and self-hosted Leantime. Write them once. Where only some steps differ (a URL, who installs a plugin, where a setting lives), put just those steps in tabs, so a reader who picks "Leantime Cloud" once sees Cloud steps on every page:

```mdx
<Tabs syncKey="edition">
  <TabItem label="Leantime Cloud">…</TabItem>
  <TabItem label="Self-hosted">…</TabItem>
</Tabs>
```

Don't make a separate page for each edition unless the whole task only exists in one (installing, upgrading and backups are self-hosted only; billing and your Cloud account are Cloud only).

## Words we use

Use the names the Leantime interface uses, with the same capitals:

| Write | Not |
|---|---|
| To-Dos (in the interface), to-dos (in a sentence) | tasks, tickets (except in API names) |
| Milestones, Goals, Ideas, Timesheets, Reports, Blueprints | roadmap items, OKRs, canvases |
| Docs (the wiki feature) | wiki |
| My Work, My Calendar, My Apps | dashboard (unless it's the Project Dashboard), plugin manager |
| Company Settings | admin settings |
| Leantime Cloud | hosted version, SaaS |
| open source edition, self-hosted | community edition, free version |
| plugin | add-on, extension, module |
| administrator (role), admin (in a sentence) | superuser |

Roles, in order: Read Only, Commenter, Editor, Manager, Administrator, Owner.

## Plugins

Plugins are how Leantime is funded, and they solve real problems. Write about them the way you would about a core feature:

- Lead with **what it helps you do**, in one sentence, before any setup.
- Say **who needs it** and who doesn't. "If your team signs in with Google Workspace…" is helpful. "Supercharge your workflow" is not.
- Link to the plugin's marketplace page once, near the top: `[Get the plugin](https://marketplace.leantime.io/product/<plugin>/)`.
- Say plainly that it's a paid plugin when you self-host, and whether it's included in Leantime Cloud (all are, except Advanced Authentication). Set `plugin:` in the front matter so the label row says so.
- No superlatives, urgency or pricing claims; the marketplace page owns pricing.

## AI-friendly pages

Every page except the home page and drafts is also published as plain Markdown (`/path.md`) and listed in `/llms.txt`. AI assistants read these pages, so:

- Use exact names for settings, commands and screens (`LEAN_APP_URL`, **Company Settings → Integrations**), never "the setting above".
- Put placeholders in angle brackets (`<your domain>`) and say what goes there.
- Never put real secrets in examples. Use `<client secret>` or obviously fake values.

## Before you open a pull request

```bash
npm run build    # checks headings and links, then builds the site
npm run dev      # preview at http://localhost:4321
```

Read the page once as a beginner would: does every step say where it happens and what you should see?
