---
title: \Leantime\Domain\Notifications\Services\Notifications
footer: false
---

# Notifications



`leantime.rpc.Notifications.Notifications.`


## Available Methods
### `leantime.rpc.Notifications.Notifications.__construct`

__construct - get database connection

```json
{
    "method": "leantime.rpc.Notifications.Notifications.__construct",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "notificationsRepo": \Leantime\Domain\Notifications\Repositories\Notifications,
        "userRepository": \Leantime\Domain\Users\Repositories\Users,
        "language": \Leantime\Core\Language,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `notificationsRepo` | **\Leantime\Domain\Notifications\Repositories\Notifications** |  |
| `userRepository` | **\Leantime\Domain\Users\Repositories\Users** |  |
| `language` | **\Leantime\Core\Language** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": mixed
}
```



---
### `leantime.rpc.Notifications.Notifications.consumeFlashNotification`

consumeFlashNotification - reads the pending growl/flash notification from the
session, clears the relevant session keys (read-once semantics) and returns the
assembled payload.

```json
{
    "method": "leantime.rpc.Notifications.Notifications.consumeFlashNotification",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{notification: string, type: string, eventId: string}|null
}
```



---
### `leantime.rpc.Notifications.Notifications.markRead`

Marks a notification (or 'all') read for the CURRENT (session) user.

```json
{
    "method": "leantime.rpc.Notifications.Notifications.markRead",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "id": int|string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int\|string** | A notification id, or &#039;all&#039; |


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
### `leantime.rpc.Notifications.Notifications.markNotificationUnread`

Flip a previously-read notification back to unread for the authenticated
(session) user. Powers the swipe-to-mark-unread inbox gesture on mobile —
symmetric to markRead() so users can re-surface something they tapped open
by accident.

```json
{
    "method": "leantime.rpc.Notifications.Notifications.markNotificationUnread",
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
| `id` | **int** | The notification id to mark unread |


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
### `leantime.rpc.Notifications.Notifications.getUnreadCount`

Unread notification count for the authenticated user. Mobile uses
this for the app-icon badge and the inbox tab unread dot. Cheap
because the (userId, read) composite index on zp_notifications
makes it a fast count.

```json
{
    "method": "leantime.rpc.Notifications.Notifications.getUnreadCount",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": int
}
```



---
### `leantime.rpc.Notifications.Notifications.getInbox`

Inbox listing for the authenticated (session) user. Mobile's inbox tab
calls this with {} and gets only its own notifications (newest first).

```json
{
    "method": "leantime.rpc.Notifications.Notifications.getInbox",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "showNewOnly": int,
        "limitStart": int,
        "limitEnd": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `showNewOnly` | **int** | 1 = only unread notifications, 0 = all |
| `limitStart` | **int** | Offset for paging (clamped to &gt;= 0) |
| `limitEnd` | **int** | Page size (clamped to 1..100) |


**Returns:**
The session user's notifications, or [] when unauthenticated
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array<int,array<string,mixed>>
}
```



---
### `leantime.rpc.Notifications.Notifications.registerPushToken`

Register a mobile device's push token for the authenticated user.

```json
{
    "method": "leantime.rpc.Notifications.Notifications.registerPushToken",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "token": string,
        "platform": string,
        "deviceName": string|null,
        "provider": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `token` | **string** | FCM registration token |
| `platform` | **string** | &#039;ios&#039; or &#039;android&#039; |
| `deviceName` | **string\|null** | Ignored — kept for backwards-<br />compat with mobile clients that<br />still send it; the device name<br />lives on zp_access_tokens.name<br />already (set at login time) |
| `provider` | **string** | Must be &#039;fcm&#039; (default &#039;fcm&#039;) |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Notifications.Notifications.unregisterPushToken`

Unregister this device's push token (called on mobile logout
BEFORE the bearer is cleared, so the access token row is still
resolvable). Soft-delete via push_invalidated_at — preserves the
access-token row itself for the rest of the logout sequence.

```json
{
    "method": "leantime.rpc.Notifications.Notifications.unregisterPushToken",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "token": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `token` | **string** | The push token being unregistered. Kept<br />for backwards-compat with mobile clients<br />that pass it; we only need the bearer to<br />identify the row, but a mismatch between<br />passed-in token and stored token signals<br />a race we should ignore (return true<br />either way so logout doesn&#039;t fail). |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---

