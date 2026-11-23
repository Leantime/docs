# Security and privacy on Leantime Cloud

How Leantime Cloud protects your workspace's data, who can see it, and what happens to it when you leave. It ends with answers to the questions security reviews usually ask. For the full legal terms, see the [privacy policy](https://leantime.io/privacy/).

If you host Leantime yourself, your organization runs it and controls the data; see [Secure your Leantime server](installation/security-checklist.md).

## Who runs Leantime Cloud?

Leantime Cloud is run by Hyve5, Inc., doing business as Leantime, which is the data controller for your workspace's data. For security and privacy questions, email [support@leantime.io](mailto:support@leantime.io).

## How is my data protected?

- **Encryption:** your data is encrypted in transit and at rest.
- **Access by role and project:** each project decides who can open it: only its team (the default), everyone with the project's client, or everyone in the workspace. Administrators and Owners can open every project. A person's role decides what they can do there (see [Who can see a project?](using-leantime/user-management.md#who-can-see-a-project) and [roles](using-leantime/user-management.md#roles)).
- **Two-factor authentication:** each person can turn it on for their own account (see [How do I turn on two-factor authentication?](using-leantime/account-settings.md#how-do-i-turn-on-two-factor-authentication)).
- **Backups:** Leantime keeps rolling 7-day snapshots of its databases for disaster recovery.

## Do you sell my data?

No. Leantime hasn't sold personal data and doesn't intend to. Leantime shares your data only with the service providers that run Leantime Cloud, like hosting and payment processing, as listed in the [privacy policy](https://leantime.io/privacy/).

Your data also goes where your team sends it. A [project integration](using-leantime/integrations.md), like Slack or Discord, gets that project's updates, and an AI assistant someone connects to Leantime (see [Leantime MCP Server](installation/leantime-mcp.md)) gets what it reads, under that provider's terms. Your team decides what to connect.

## Can my data stay in the EU?

Leantime Cloud has EU data options. Email [support@leantime.io](mailto:support@leantime.io) to set one up for your workspace.

## How does Leantime Cloud use AI?

The AI features in Leantime Cloud, like L.E.O., are optional. They run on Anthropic's Claude models through Amazon Bedrock, and your data isn't used to train those models. If your organization doesn't want AI, support can remove it from your workspace. See [Which AI does L.E.O. use?](ai/leantime-cloud-ai.md#which-ai-does-leo-use)

The open source edition you host yourself has no AI features unless you install them.

## Can we sign in with our company accounts?

For organizations with specific sign-in needs, single sign-on through OpenID Connect (for example with Microsoft Entra ID) can be set up as an enterprise option. Email [support@leantime.io](mailto:support@leantime.io) to ask.

## What happens to our data when we leave?

When a trial ends without a plan, or a cancelled plan runs out, the workspace is archived and then deleted permanently after another 180 days (see [What happens to an inactive workspace?](using-leantime/cloud-billing.md#what-happens-to-an-inactive-workspace)). The workspace's Owner can also delete it, with all its data, at any time (see [Delete your Leantime Cloud account](using-leantime/delete-cloud-account.md)). Deleted data ages out of the backup snapshots within 7 days.

## For security reviews

Answers to the questions vendor and security reviews usually ask:

| Question | Answer |
| --- | --- |
| **Vendor** | Hyve5, Inc., doing business as Leantime |
| **Website** | [leantime.io](https://leantime.io) |
| **Address** | 8735 Dunwoody Place #6668, Atlanta, GA 30350, USA |
| **Security contact** | [support@leantime.io](mailto:support@leantime.io) |
| **AI, machine learning and LLMs** | Optional AI features in Leantime Cloud, on Anthropic Claude models through Amazon Bedrock. Customer data isn't used for training. AI can be removed from a workspace on request. The self-hosted open source edition has no AI unless installed. |
| **Student records (FERPA)** | Two ways: host Leantime yourself on your own infrastructure, for full control over where data lives; or use Leantime Cloud, where data is encrypted in transit and at rest and access is limited by role and by project. |
| **Microsoft 365** | Single sign-on with Microsoft Entra ID through OpenID Connect (self-hosted, or as an enterprise option on Cloud). Leantime calendars can be subscribed to in Outlook, and Outlook calendars can be shown in Leantime (see [Calendars](using-leantime/calendars.md)). |
| **Privacy policy** | [leantime.io/privacy](https://leantime.io/privacy/) |
| **Reporting a security issue** | See [Report a security issue](development/security.md) |

## Related

- [Billing on Leantime Cloud](using-leantime/cloud-billing.md)
- [Delete your Leantime Cloud account](using-leantime/delete-cloud-account.md)
- [AI in Leantime Cloud](ai/leantime-cloud-ai.md)
- [Report a security issue](development/security.md)
