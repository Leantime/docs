---
title: \Leantime\Domain\Users\Services\Users
footer: false
---

# Users




`leantime.rpc.Users.Users.`


## Available Methods
### `leantime.rpc.Users.Users.getProfilePicture`



```json
{
    "method": "leantime.rpc.Users.Users.getProfilePicture",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Returns:**
Returns either an SVG file, a file response or a path to a file
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \SVG\SVG|\Symfony\Component\HttpFoundation\Response|string
}
```



---
### `leantime.rpc.Users.Users.editUser`

Updates another user's account.

```json
{
    "method": "leantime.rpc.Users.Users.editUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
        "id": int|string,
    }
}
```


Role ceiling: the caller may not edit an account whose current role is above their own,
nor assign a role above their own.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | The user values to store. |
| `id` | **int|string** | The id of the user being edited. |


**Returns:**
True on success.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Users.Users.getNumberOfUsers`



```json
{
    "method": "leantime.rpc.Users.Users.getNumberOfUsers",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "activeOnly": bool,
        "includeApi": bool,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `activeOnly` | **bool** |  |
| `includeApi` | **bool** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Users.Users.getAll`



```json
{
    "method": "leantime.rpc.Users.Users.getAll",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "activeOnly": bool,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `activeOnly` | **bool** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Users.Users.getUser`



```json
{
    "method": "leantime.rpc.Users.Users.getUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|bool
}
```



---
### `leantime.rpc.Users.Users.getUserByEmail`



```json
{
    "method": "leantime.rpc.Users.Users.getUserByEmail",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "email": mixed,
        "status": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `email` | **mixed** |  |
| `status` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|array
}
```



---
### `leantime.rpc.Users.Users.getAllBySource`



```json
{
    "method": "leantime.rpc.Users.Users.getAllBySource",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "source": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `source` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|array
}
```



---
### `leantime.rpc.Users.Users.updateUserSettings`



```json
{
    "method": "leantime.rpc.Users.Users.updateUserSettings",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "category": mixed,
        "setting": mixed,
        "value": mixed,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `category` | **mixed** |  |
| `setting` | **mixed** |  |
| `value` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Users.Users.saveModalDismissal`

Records that the current user dismissed a modal.

```json
{
    "method": "leantime.rpc.Users.Users.saveModalDismissal",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "modalKey": string,
        "permanent": bool,
    }
}
```


The dismissal is always stored in the session. When $permanent is true it is
additionally persisted to the user's stored settings so the modal stays
dismissed across sessions.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `modalKey` | **string** | The modal identifier being dismissed |
| `permanent` | **bool** | Whether to persist the dismissal beyond the current session |


**Returns:**
True on success
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Users.Users.createUserInvite`

createUserInvite - generates a new invite token, creates the user in the db and sends the invitation email TODO: Should accept userModel

```json
{
    "method": "leantime.rpc.Users.Users.createUserInvite",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | basic user values |


**Returns:**
returns the new user id on success, false on failure or
when the invite rate limit is exhausted
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|string
}
```



---
### `leantime.rpc.Users.Users.addUser`

addUser - simple service wrapper to create a new user

```json
{
    "method": "leantime.rpc.Users.Users.addUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array,
    }
}
```


Role ceiling: the requested role may not exceed the caller's own role. Callers below admin
(e.g. managers, who hold users.create) cannot create active accounts with a password they
chose: their request is turned into an invitation, scoped to their own client. The reserved
'api' source is never accepted here (see allowedAccountSource()). A request without a
password is also turned into an invitation: the user sets their own password from the
invite link.

TODO: Should accept userModel






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array** | basic user values |


**Returns:**
returns new user id on success, false on failure
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool|int
}
```



---
### `leantime.rpc.Users.Users.usernameExist`

usernameExist - Checks if a given username (email) is already in the db

```json
{
    "method": "leantime.rpc.Users.Users.usernameExist",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "username": string,
        "notUserId": int|string,
    }
}
```


TODO: Should accept userModel






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `username` | **string** | username |
| `notUserId` | **int|string** | optional userId to skip. (used when changing email addresses to a new one, skips checking the old one) |


**Returns:**
returns true or false
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Users.Users.patchUser`

Patch specific fields on a user record.

```json
{
    "method": "leantime.rpc.Users.Users.patchUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "params": array,
    }
}
```


Only admins/owners can patch other users. Regular users may only patch
their own record and only non-privileged fields. Role ceiling: privileged patches may not
target an account with a higher role than the caller's, nor set a role above it.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The user ID |
| `params` | **array** | The fields to update |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Users.Users.searchProjectUsers`

Authorized JSON-RPC entry point: list users with access to a project,
optionally filtered by a search query (used by the @mention autocomplete).

```json
{
    "method": "leantime.rpc.Users.Users.searchProjectUsers",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "projectId": int|null,
        "query": string,
    }
}
```


Resolves to the current project when no id is given. Project access is
enforced by getUsersWithProjectAccess() (which returns [] when the session
user is not assigned to the project), so a caller cannot enumerate the
users of a project they aren't part of.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int|null** | Project id, or null for the current project |
| `query` | **string** | Optional case-insensitive substring filter |


**Returns:**
Matching users (empty when no access)
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---
### `leantime.rpc.Users.Users.deleteUser`

Delete the user with the specified id.

```json
{
    "method": "leantime.rpc.Users.Users.deleteUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The id of the user to delete. |


**Returns:**
True if the user was deleted successfully, false otherwise.

Role ceiling: an account whose role is above the caller's own (e.g. an owner, for an admin)
cannot be deleted.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Users.Users.getAllVisibleToUser`

Returns the list of users visible to the current session user.

```json
{
    "method": "leantime.rpc.Users.Users.getAllVisibleToUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```


Callers who work across clients (clients.view, admin+ by default) see every
user. Anyone else is scoped to the users that belong to their own client.







**Returns:**
Array of user rows.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---
### `leantime.rpc.Users.Users.getOwnProfileSettings`

Gathers the profile + appearance/locale settings for the "edit own
profile" screen, applying all of the company/default fallbacks that
previously lived inline in the controller.

```json
{
    "method": "leantime.rpc.Users.Users.getOwnProfileSettings",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The id of the user whose profile is being viewed. |


**Returns:**
Template-ready settings keyed by view variable.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<string,mixed>
}
```



---
### `leantime.rpc.Users.Users.getMyDaySchedule`

The authenticated user's work-day schedule (workStart / lunch / workEnd
hours) plus their timezone. A lean, self-scoped read for clients that
only need the schedule — e.g. the mobile app seeds reminder times and the
day-progress marker from it — rather than the heavy getOwnProfileSettings
payload. Values are null when the user hasn't set a schedule (caller
applies its own defaults).

```json
{
    "method": "leantime.rpc.Users.Users.getMyDaySchedule",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```


Self-scoped: always the session user, never a caller-supplied id.







**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{workStart: mixed, lunch: mixed, workEnd: mixed, timezone: string}
}
```



---
### `leantime.rpc.Users.Users.getNotificationPreferences`

Gathers the notification preferences for the "edit own profile" screen,
applying company defaults and the per-project notification levels
(including the lazy migration from the legacy muted-projects format),
plus the personal webhook endpoint (webhookUrl) and its opt-in
(webhookEnabled, only true while a URL is stored) and the mobile push
switch (pushEnabled, on until the user switches it off).

```json
{
    "method": "leantime.rpc.Users.Users.getNotificationPreferences",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The id of the user whose preferences are loaded. |


**Returns:**
Template-ready notification preference data.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<string,mixed>
}
```



---
### `leantime.rpc.Users.Users.saveOwnProfile`

Updates the current user's basic profile information (name, phone,
username/email). Validates the email and, when the email changed,
ensures it is not already taken.

```json
{
    "method": "leantime.rpc.Users.Users.saveOwnProfile",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "post": array<string,mixed>,
    }
}
```


Returns a status code the controller maps to a notification:
- 'success'        profile saved
- 'user_exists'    new email already belongs to another account
- 'no_valid_email' email is not a valid address
- 'enter_email'    email was empty






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The id of the user being edited. |
| `post` | **array<string,mixed>** | Raw request input (firstname, lastname, user, phone). |


**Returns:**
Status code described above.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---
### `leantime.rpc.Users.Users.changeOwnPassword`

Changes the current user's password after validating the current
password, the confirmation match, and the strength requirements.

```json
{
    "method": "leantime.rpc.Users.Users.changeOwnPassword",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "currentPassword": string,
        "newPassword": string,
        "confirmPassword": string,
    }
}
```


Returns a status code the controller maps to a notification:
- 'success'                    password changed
- 'password_not_strong_enough' new password failed strength check
- 'passwords_dont_match'       new and confirmation differed
- 'previous_password_incorrect' current password was wrong






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The id of the user being edited. |
| `currentPassword` | **string** | The user&#039;s current password. |
| `newPassword` | **string** | The desired new password. |
| `confirmPassword` | **string** | Confirmation of the new password. |


**Returns:**
Status code described above.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---
### `leantime.rpc.Users.Users.saveOwnAppearanceSettings`

Persists the current user's appearance (theme) settings and applies the
matching theme/cache side effects so the change takes effect immediately.

```json
{
    "method": "leantime.rpc.Users.Users.saveOwnAppearanceSettings",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "post": array<string,mixed>,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The id of the user being edited. |
| `post` | **array<string,mixed>** | Raw request input (theme, colormode, colorscheme, themeFont). |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Users.Users.saveOwnLocaleSettings`

Persists the current user's locale settings (language, date/time
formats, timezone) and applies the session + language side effects so
the change takes effect on the next request.

```json
{
    "method": "leantime.rpc.Users.Users.saveOwnLocaleSettings",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "post": array<string,mixed>,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The id of the user being edited. |
| `post` | **array<string,mixed>** | Raw request input (language, date_format, time_format, timezone). |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Users.Users.saveOwnNotificationPreferences`

Persists the current user's notification preferences: the email
notifications toggle, message frequency, the enabled event-type
categories (validated against the known category keys) and the
per-project notification levels (validated against the known relevance
levels). Cleans up the legacy muted-projects format when present.

```json
{
    "method": "leantime.rpc.Users.Users.saveOwnNotificationPreferences",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "post": array<string,mixed>,
    }
}
```


The mobile push switch (pushNotifications, any boolean-ish value) is saved
only when the key is present; a missing key leaves it as it was.

The personal webhook is saved separately, with saveOwnWebhookSettings().






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The id of the user being edited. |
| `post` | **array<string,mixed>** | Raw request input. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Users.Users.saveOwnWebhookSettings`

Stores the current user's personal webhook: webhookUrl (https only,
validated before anything is written) and the webhookEnabled checkbox.

```json
{
    "method": "leantime.rpc.Users.Users.saveOwnWebhookSettings",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
        "post": array<string,mixed>,
    }
}
```


An empty or missing URL disables the webhook; unchecking the box keeps the URL on
file. Both go into one setting (Webhooks::settingKey()), which is read
back when the write reports no change, so a failed save never leaves an
old URL or opt-in live behind a success message.

A missing webhookEnabled means unchecked, so API clients that change
only the opt-in must send the current URL as well.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The id of the user being edited. |
| `post` | **array<string,mixed>** | Raw request input. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Users.Users.updateUser`

Updates a user (admin edit screen) and reconciles their project
relations based on the posted project list.

```json
{
    "method": "leantime.rpc.Users.Users.updateUser",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "values": array<string,mixed>,
        "id": int,
        "projects": array<int,mixed>|null,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **array<string,mixed>** | Shaped values for the update. |
| `id` | **int** | The id of the user being edited. |
| `projects` | **array<int,mixed>|null** | Posted project ids, or null when none submitted. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Users.Users.getUserProjectIds`

Returns the flat list of project ids a user is assigned to.

```json
{
    "method": "leantime.rpc.Users.Users.getUserProjectIds",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "userId": int,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | **int** | The id of the user. |


**Returns:**
The project ids.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,mixed>
}
```



---
### `leantime.rpc.Users.Users.resendUserInvite`

Resends an invitation to a pending user.

```json
{
    "method": "leantime.rpc.Users.Users.resendUserInvite",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int,
        "row": array<string,mixed>,
    }
}
```


Enforces a 240 second rate-limit (per user, via the session), generates
a password-reset/invite code when the user does not yet have one, and
sends the invitation email.

Returns a status code the controller maps to a notification:
  - 'sent'             invitation sent
  - 'too_soon'         another invite was sent within the 240s resend cooldown
  - 'too_many_invites' the hourly/daily invite cap was reached
  - 'invite_email_failed' the invitation email could not be sent






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** | The id of the user to re-invite. |
| `row` | **array<string,mixed>** | The current stored user row. |


**Returns:**
Status code described above.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---
### `leantime.rpc.Users.Users.fetchLdapMembers`

Connects/binds to LDAP and returns the directory members for the import
dialog. Returns false when the bind fails.

```json
{
    "method": "leantime.rpc.Users.Users.fetchLdapMembers",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "bindUsername": string,
        "password": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `bindUsername` | **string** | The directory username to bind with. |
| `password` | **string** | The password to bind with. |


**Returns:**
Directory members, or false on failed bind.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>|false
}
```



---
### `leantime.rpc.Users.Users.importSelectedLdapUsers`

Imports/updates the LDAP users selected from the staged member list.

```json
{
    "method": "leantime.rpc.Users.Users.importSelectedLdapUsers",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "stagedUsers": array<int,array<string,mixed>>,
        "selectedUsernames": array<int,string>,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `stagedUsers` | **array<int,array<string,mixed>>** | The full staged member list. |
| `selectedUsernames` | **array<int,string>** | The `user` values (emails) the admin selected for import. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Users.Users.getAssignableRoles`

The roles the current user may assign (their own role and below), for role dropdowns.

```json
{
    "method": "leantime.rpc.Users.Users.getAssignableRoles",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```










**Returns:**
Role names keyed by role level.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,string>
}
```



---

