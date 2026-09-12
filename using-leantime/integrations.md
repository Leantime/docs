# Project Integrations (User Manual)

Leantime allows you to connect your projects directly with your team's favorite messaging and collaboration platforms. Once configured, Leantime will automatically broadcast real-time updates and activity notifications to your designated channels, groups, or topics.

---

## Overview

Project integrations are configured on a **per-project** basis. This allows different teams or departments to route project notifications to their own dedicated communication channels (e.g., `#dev-alerts`, `#marketing-sprints`, or specific Telegram forum topics).

### Notification Triggers

Whenever an action occurs within a connected project, Leantime automatically formats and dispatches an update to your active integrations. Notifications are sent for:

- **To-Do / Task Updates**: Creation, status transitions (e.g., *In Progress*, *Done*), milestone assignments, and priority changes.
- **Milestone Updates**: Milestone creation, date adjustments, and progress completion.
- **Idea Management**: New ideas proposed and status changes across idea boards.
- **Research & Strategy Updates**: Updates to business research and canvas boards.
- **Comments**: New comments and discussions on tasks.
- **File Attachments**: New documents or assets uploaded to project items.

### Accessing Project Integrations

To configure integrations for a project:

1. In the top navigation bar, select **Projects** and open the project you want to configure.
2. Open the project settings by clicking the **Settings** / **Edit Project** option.
3. Switch to the **Integrations** tab.
4. Locate your messaging platform below and follow the platform-specific instructions.

---

## 1. Telegram

Leantime includes a native Telegram integration supporting direct chats, private/public groups, and **Telegram Forum Supergroups** with topic thread targeting.

![Telegram](https://raw.githubusercontent.com/Leantime/leantime/master/public/dist/images/telegram-logo.png)

### Key Features
- **Auto-Detection**: Leantime can automatically detect your `Chat ID` (and `Topic ID`) simply by sending a message to your bot.
- **Forum Topics Support**: Send updates to a specific topic thread in Telegram supergroups.
- **Rich Message Format**: Notifications display project name, task title, current status, priority level, assignee, due date, and a direct link to the Leantime item.

### Setup Instructions

#### Step 1: Create a Telegram Bot
1. Open Telegram and search for [@BotFather](https://t.me/BotFather).
2. Start a chat and send `/newbot`.
3. Follow the prompts to name your bot and choose a unique username ending in `bot` (e.g., `MyCompanyLeantimeBot`).
4. Copy the **HTTP API Bot Token** provided by BotFather (looks like `123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ`).

#### Step 2: Add the Bot to Your Chat or Group
- **For a Group or Channel**: Add your newly created bot to the group as a member. Ensure the bot has permission to post messages.
- **For Direct Messages**: Start a private chat with your bot and send `/start` or any greeting message.
- **For Forum Supergroups (with Topics)**: Add the bot to the supergroup and post a message in the specific topic where you want updates to appear.

#### Step 3: Connect in Leantime (Automatic Detection)
1. Go to your project's **Integrations** tab in Leantime.
2. Under **Telegram**, paste your **Bot Token** into the token field.
3. Leave the **Chat ID** and **Topic ID** fields empty.
4. Send a message to your bot in Telegram (e.g., "hello").
5. In Leantime, click **Save**.
6. Leantime will query the Telegram API, automatically detect the recent chat (and topic thread ID if applicable), and populate the fields for you!

#### Step 4: Manual Configuration (Optional)
If you prefer to enter details manually:
- **Chat ID**: Enter your numeric Telegram Chat ID (group IDs typically start with a minus sign, e.g., `-1001234567890`).
- **Topic ID**: If your group has Topics enabled and you want notifications posted to a specific thread, enter the numeric thread ID (can be retrieved from the topic's message link).

---

## 2. Discord

Broadcast project progress and status changes directly into Discord text channels using native Discord webhooks.

### Key Features
- **Multiple Webhook Channels**: Leantime supports up to **3 separate Discord webhook URLs** per project (`Webhook URL 1`, `Webhook URL 2`, and `Webhook URL 3`). This allows broadcasting updates to multiple channels simultaneously (e.g., `#general-feed`, `#management`, and `#dev-team`).
- **Rich Embed Cards**: Notifications are delivered as formatted Discord embeds with color bars, project titles, status tags, timestamps, and clickable links.

### Setup Instructions

1. Open Discord and go to your server's settings (**Server Settings** $\rightarrow$ **Integrations** $\rightarrow$ **Webhooks**).
2. Click **New Webhook**.
3. Choose a name for the webhook (e.g., "Leantime Updates") and select the target channel.
4. Click **Copy Webhook URL** (e.g., `https://discord.com/api/webhooks/1234567890/abcdef...`).
5. In Leantime, navigate to **Projects** $\rightarrow$ [Your Project] $\rightarrow$ **Integrations** $\rightarrow$ **Discord**.
6. Paste your webhook URL into **Webhook URL 1**. (You can optionally paste up to two additional webhook URLs into fields 2 and 3).
7. Click **Save**.

---

## 3. Slack

Post real-time project updates to any public or private channel in your Slack workspace.

### Key Features
- Clean Slack attachment format displaying project name, task headline, and updated status.
- Direct link back to the task in your Leantime workspace.

### Setup Instructions

1. Go to the [Slack App Directory](https://api.slack.com/apps) or search for **Incoming WebHooks** in your Slack workspace integrations.
2. Click **Add to Slack** or **Create an App** with an *Incoming Webhook*.
3. Choose the channel where project notifications should be posted.
4. Copy the generated **Webhook URL** (e.g., `https://hooks.slack.com/services/T000/B000/XXXX`).
5. In Leantime, navigate to **Projects** $\rightarrow$ [Your Project] $\rightarrow$ **Integrations** $\rightarrow$ **Slack**.
6. Paste the URL into the **Webhook URL** field.
7. Click **Save**.

---

## 4. Mattermost

Connect Leantime with your self-hosted or cloud Mattermost instance.

### Key Features
- Formatted attachments with project identification and task statuses.
- Supports self-hosted on-premises installations and private subnets.

### Setup Instructions

1. Log in to Mattermost and click your team name/menu in the top left.
2. Navigate to **Integrations** $\rightarrow$ **Incoming Webhooks**.
3. Click **Add Incoming Webhook**.
4. Fill in the display title and select the target channel.
5. Copy the generated **Webhook URL**.
6. In Leantime, navigate to **Projects** $\rightarrow$ [Your Project] $\rightarrow$ **Integrations** $\rightarrow$ **Mattermost**.
7. Paste the URL into the **Webhook URL** field.
8. Click **Save**.

---

## 5. Zulip

Route notifications into Zulip streams and dedicated conversation topics.

### Key Features
- Target specific Zulip streams (channels) and topic threads to keep project conversations organized.
- Uses Zulip bot authentication (Bot Email + Bot API Key).

### Setup Instructions

1. In your Zulip organization, open **Settings** (gear icon) $\rightarrow$ **Organization settings**.
2. Navigate to **Bots** $\rightarrow$ **Add a new bot**.
3. Choose **Generic bot**, give it a name (e.g., "Leantime Bot"), and submit.
4. Download or copy the bot's credentials:
   - **Bot Email**
   - **Bot API Key**
5. In Leantime, go to **Projects** $\rightarrow$ [Your Project] $\rightarrow$ **Integrations** $\rightarrow$ **Zulip**.
6. Fill in the integration fields:
   - **Base URL**: Your Zulip server URL (e.g., `https://yourteam.zulipchat.com` or `https://zulip.internal.domain`).
   - **Bot Email**: The email address generated for the bot.
   - **Bot Key**: The API key of the bot.
   - **Stream**: The exact name of the Zulip stream where messages should go.
   - **Topic**: The thread topic name (e.g., `Project Updates`).
7. Click **Save**.

---

## Project Mute & Notification Control

If you or your team members prefer not to receive notifications for a specific project:

- **Mute Project Notifications**: Individual users can mute notifications from specific projects through their user notification settings.
- **Mute Indicators**: When users have muted a project, a notice (`Muted by X team members`) appears at the top of the project's Integrations tab to inform project administrators.

---

## Troubleshooting & Best Practices

### 1. Outbound Request / SSRF Security Guard
Leantime includes an internal URL security guard (`OutboundUrlGuard`) to prevent Server-Side Request Forgery (SSRF). 
- Public services (Telegram, Discord, Slack, Zulip Cloud) are supported out of the box.
- If you are running self-hosted Mattermost or Zulip on a private local network (e.g., `192.168.x.x` or `10.x.x.x`), ensure your server network configuration and Leantime security environment allow outbound requests to the internal IP or hostname.

### 2. Telegram: "Chat Not Found" Error
- Make sure you have started the bot or added it to the group **before** clicking Save.
- Send at least one message (e.g., `/start` or `hello`) in the chat or topic thread so Telegram has an active update for Leantime to detect.

### 3. Telegram Forum Topics
- When using a supergroup with Topics enabled, ensure you provide the numeric `Topic ID`. If notifications are posting to the *General* topic instead of your desired thread, check that the Topic ID was properly detected or entered.

### 4. Discord: Webhook Fails to Deliver
- Verify the webhook URL was copied in full.
- Ensure the Discord channel hasn't been deleted or had its webhook permissions revoked.
- Discord rate limits excessive webhook calls; standard Leantime notifications comply with Discord rate limits, but avoid rapid bulk imports while webhooks are active.

### 5. Webhook Links Point to Localhost
- Make sure your `LEAN_APP_URL` environment variable is configured with your public domain (e.g., `https://leantime.yourdomain.com`). If `LEAN_APP_URL` is set to `localhost`, links inside webhook messages will direct users to `localhost`.
