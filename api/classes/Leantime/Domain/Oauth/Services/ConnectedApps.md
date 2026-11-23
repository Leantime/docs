---
title: \Leantime\Domain\Oauth\Services\ConnectedApps
footer: false
---

# ConnectedApps

The apps (Claude, ChatGPT, …) a user connected to their Leantime account through OAuth.

`leantime.rpc.Oauth.ConnectedApps.`


## Available Methods
### `leantime.rpc.Oauth.ConnectedApps.getConnectedApps`

The signed-in user's connected apps: one entry per app that can still act for them.

```json
{
    "method": "leantime.rpc.Oauth.ConnectedApps.getConnectedApps",
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
    "result": array<int,array{clientId: string, name: string, redirectHost: string, lastActiveAt: string}>
}
```



---
### `leantime.rpc.Oauth.ConnectedApps.disconnectApp`

Disconnect one of the signed-in user's apps: every token it holds for the user is revoked
at once, so it has to sign in again to reconnect.

```json
{
    "method": "leantime.rpc.Oauth.ConnectedApps.disconnectApp",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "clientId": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **string** | The app&#039;s client id (from getConnectedApps). |


**Returns:**
True when the app held tokens for the user and they were revoked.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---

