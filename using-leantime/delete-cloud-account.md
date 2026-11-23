# Delete your Leantime Cloud account

On Leantime Cloud, your account is your workspace: the address you sign in at, like `yourteam.leantime.io`. Its Owner can delete it in a minute, from inside the workspace. That deletes all of its data too. There's no separate step for your data.

If you tried Leantime Cloud before setting up Leantime on your own server, this is also how you remove the trial workspace.

## How do I delete my Leantime Cloud account?

1. **Sign in to your workspace** at its own address, like `yourteam.leantime.io`, as its Owner. If you started the trial, you're the Owner.
2. **Click Company** at the top.
3. **Click Billing** in the left menu.
4. **Scroll to Danger Zone** at the bottom of the page and click **Delete Account**.
5. **Choose why you're leaving,** and tick **I understand that this action cannot be undone and all my data will be permanently deleted.**
6. **Click Delete My Account.**

Leantime cancels your subscription, so you're not charged again, and deletes the workspace right away: all projects, to-dos, users, files and settings. You land on leantime.io.

> **Warning:** Deleting can't be undone, and Leantime support can't bring a deleted workspace back. Leantime doesn't send out copies of workspace data, so save anything you want to keep before you delete.

**Shortcut:** sign in, then open `yourteam.leantime.io/billing/deleteAccount` with your workspace's address. On the Leantime phone app, **Settings → Delete Account** opens the same page in your browser.

## Why can't I find Billing or Delete Account?

- **You're on accounts.leantime.io.** That site is only for signing up and finding your workspace. Open your workspace's own address, like `yourteam.leantime.io`, and sign in there.
- **You aren't the workspace's Owner.** Only the Owner sees **Billing** in the menu, and only the Owner can delete the account. Administrators and other team members can't. Ask the person who started the workspace, or an administrator, who the Owner is.
- **You're looking under your profile.** Deleting is under **Company → Billing**, not under **My Profile**. **My Profile** only changes your own name, password and settings.

## How do I delete my data?

Delete the account as described above: that deletes all of the workspace's data.

To remove only some of it and keep using Leantime, delete what you don't need, like a project (see [Should I close or delete a finished project?](using-leantime/managing-projects.md#should-i-close-or-delete-a-finished-project)), or a person (see [How do I deactivate or delete someone?](using-leantime/user-management.md#how-do-i-deactivate-or-delete-someone)).

## I'm on someone else's team. How do I leave?

You can't delete a workspace that someone else owns, and you don't need to. Ask its Owner or an administrator to remove you. They delete you in **User Management**, which removes your account from that workspace (see [How do I deactivate or delete someone?](using-leantime/user-management.md#how-do-i-deactivate-or-delete-someone)).

## Can I stop paying without deleting?

Yes. On the same **Billing** page, click **Cancel Subscription**. You keep access until the end of the billing period you've paid for. Then Leantime moves the workspace to an archive, and deletes it permanently after another 180 days without a plan (see the [privacy policy](https://leantime.io/privacy/)). To remove it right away, delete the account as described above.

## What if I can't sign in anymore?

First try **Forgot password?** on your workspace's sign-in page. If that doesn't work, email [support@leantime.io](mailto:support@leantime.io) from the Owner's email address, with your workspace's address, like `yourteam.leantime.io`.

## How do I delete Leantime on my own server?

Leantime on your own server isn't connected to a Cloud account, so there's nothing to delete with Leantime. Remove its database and files yourself, for example with `docker compose down -v` for the official Docker setup, which deletes the containers and all their data.

## Related

- [Get started with Leantime](getting-started/get-started.md)
- [User Management](using-leantime/user-management.md)
- [Leantime on your phone](using-leantime/mobile-app.md)
