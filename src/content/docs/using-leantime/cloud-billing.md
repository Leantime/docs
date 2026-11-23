---
title: "Billing on Leantime Cloud"
description: "Manage your Leantime Cloud plan: the free trial, changing plans and users, AI credits, invoices, failed payments, plan limits and cancelling."
head:
  - tag: title
    content: "Leantime Cloud billing: plans, invoices, failed payments"
edition: cloud
checked: "3.15"
---

On Leantime Cloud, your workspace's Owner manages its plan, payment and invoices on one page: **Subscription & Billing**. This page explains what's on it, how the free trial works, and what to do when a payment fails or Leantime says you've reached your plan's limits. For plans and prices, see [Leantime pricing](https://leantime.io/pricing/).

## Where do I find billing?

Sign in to your workspace at its own address, like `yourteam.leantime.io`, as its Owner. Click **Company** at the top, then **Billing** in the left menu.

Only the Owner sees **Billing** in the menu. If you started the trial, you're the Owner. The sign-up site, accounts.leantime.io, doesn't have billing.

## What's on the Billing page?

| Section | What it shows |
| --- | --- |
| **Your Current Plan** | Your plan, its status (**Active**, **Past Due** or **Payment Failed**), how many users you pay for, and the price. **Change Plan** and **Cancel Subscription** are here. |
| **AI Credit Add-Ons** | Extra AI credits you buy every month, on top of your plan's |
| **Usage Metrics** | **Users** and **Tasks** (to-dos): how many you have, out of what your plan allows. **AI Credits**: how many are left this month. |
| **Billing Information** | Your card, **Update Payment Method**, your last payment and your invoices |
| **Danger Zone** | **Delete Account**, which deletes the whole workspace |

## How does the free trial work?

When your workspace can start a trial, the Billing page shows **You're eligible for a free trial!** Click **Start Free Trial**. It starts right away, and you don't need a card. The page then shows how many days are left and the date it ends.

During the trial you can use L.E.O. (Leantime's AI), the API, and the plugins Strategy Pro, Programs, Notes, Whiteboards, Pomodoro and Custom Fields, with no limit on to-dos.

To keep going after the trial, choose a plan (see [How do I choose or change my plan?](#how-do-i-choose-or-change-my-plan)). If the trial ends without one, see [What happens to an inactive workspace?](#what-happens-to-an-inactive-workspace)

## How do I choose or change my plan?

1. On the Billing page, click **Change Plan**.
2. **How big is your team?** Choose the number of users.
3. **Choose your plan,** and **Monthly** or **Yearly**. Yearly billing costs less.
4. Check the **Change Summary**, which shows your current plan next to the new one, and confirm. You enter or confirm your card on a secure Stripe page.

You pay for each user. To add more people than your plan has, raise the number of users with **Change Plan** first.

## What are AI credits?

L.E.O. and Leantime's other AI features use AI credits (see [AI in Leantime Cloud](/ai/leantime-cloud-ai/)). Your plan includes a monthly amount, and **Usage Metrics** shows how many are left this month.

To get more every month, click **Add AI Credit Subscription** (or **Add More Credits**) under **AI Credit Add-Ons**. To stop an add-on, remove it there; you're credited for the time you don't use.

## How do I update my card or find an invoice?

Both are under **Billing Information** on the Billing page:

- **Update Payment Method** opens a secure Stripe page where you change your card.
- **Recent Invoices** shows your last payment, a link to the latest invoice, and **View All Invoices** for the others.

## What happens when a payment fails?

Leantime shows a message to the Owner at the top of every page, with a **Pay now** button.

- **Past Due:** "Your last payment failed." Your plan keeps working while the payment is tried again. Pay the invoice or update your card to keep it that way.
- **Payment Failed:** "We could not collect your last payment and your plan is paused." The paid features switch off, and your team may not be able to work until it's fixed.

To fix it, open the Billing page and click **Pay Now**, or **Update Payment Method** to use another card. Your data stays while the plan is paused.

Leantime checks your plan's status about once an hour. If it still shows the old status after you've paid, sign out and sign in again.

## Why does Leantime say I've exceeded my plan's limits?

"You have exceeded the limits of your subscription. Please purchase more credits or remove users." means your workspace has more users, or more to-dos, than your plan allows. **Usage Metrics** on the Billing page shows which. Until it's fixed, Leantime sends people to the Billing page instead of their work.

The Owner can fix it in one of these ways:

- **Pay for more users:** **Change Plan**, and raise the number of users.
- **Remove people** who no longer need access, in **Company → User Management** (see [How do I deactivate or delete someone?](/using-leantime/user-management/#how-do-i-deactivate-or-delete-someone)).
- **Choose a plan,** if the trial ended and you're over the free to-do limit.

## I'm on the team, and Leantime only shows Billing or an error

Your workspace's plan needs attention: a payment failed, or the workspace has more users or to-dos than its plan allows. Only the Owner can fix that, so ask them; they can follow [What happens when a payment fails?](#what-happens-when-a-payment-fails) or [Why does Leantime say I've exceeded my plan's limits?](#why-does-leantime-say-ive-exceeded-my-plans-limits) If you can't reach the Owner, email [support@leantime.io](mailto:support@leantime.io) with your workspace's address, like `yourteam.leantime.io`.

## How do I cancel?

Click **Cancel Subscription** under **Your Current Plan**. You keep your plan until the end of the period you've paid for, and the Billing page shows **Cancels on** with the date. After that, the workspace becomes inactive (see [What happens to an inactive workspace?](#what-happens-to-an-inactive-workspace)).

To delete the workspace and all its data instead, use **Delete Account** under **Danger Zone** at the bottom of the Billing page. It can't be undone.

## What happens to an inactive workspace?

A workspace becomes inactive when its trial ends without a plan, or when a cancelled plan runs out. Leantime then moves it and its data to an archive. If it stays inactive for another 180 days, it's deleted permanently. The [privacy policy](https://leantime.io/privacy/) has the details.

To get an archived workspace back, or to have it deleted sooner, email [support@leantime.io](mailto:support@leantime.io) with its address, like `yourteam.leantime.io`.

## Related

- [Leantime pricing](https://leantime.io/pricing/)
- [AI in Leantime Cloud](/ai/leantime-cloud-ai/)
- [User Management](/using-leantime/user-management/)
- [Get started with Leantime](/getting-started/get-started/)
