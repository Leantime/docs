---
title: \Leantime\Domain\Setting\Services\Setting
footer: false
---

# Setting



`leantime.rpc.Setting.Setting.`


## Available Methods
### `leantime.rpc.Setting.Setting.getCompanyId`

The instance's anonymous company id (setting companysettings.telemetry.anonymousId),
created on first read. A random UUID, not sensitive: analytics clients (the mobile app)
scope their PostHog distinct ids with it as `{companyId}:{userId}`, matching the web.

```json
{
    "method": "leantime.rpc.Setting.Setting.getCompanyId",
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
    "result": string
}
```



---
### `leantime.rpc.Setting.Setting.getProjectLabel`

Resolve the current label value for a given module/label key.

```json
{
    "method": "leantime.rpc.Setting.Setting.getProjectLabel",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "module": string,
        "labelKey": int,
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** | The label module (ticketlabels&amp;#124;idealabels). |
| `labelKey` | **int** | The label key within the module&#039;s label set. |
| `projectId` | **int** | The project the labels belong to. |


**Returns:**
The current label name, or an empty string when not found.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---
### `leantime.rpc.Setting.Setting.saveProjectLabel`

Persist a renamed project label for a given module/label key.

```json
{
    "method": "leantime.rpc.Setting.Setting.saveProjectLabel",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "module": string,
        "labelKey": int,
        "newLabel": string,
        "projectId": int,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** | The label module (ticketlabels&amp;#124;idealabels). |
| `labelKey` | **int** | The label key within the module&#039;s label set. |
| `newLabel` | **string** | The new (already sanitized) label value. |
| `projectId` | **int** | The project the labels belong to. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Setting.Setting.getCompanySettings`

Build the company settings view model.

```json
{
    "method": "leantime.rpc.Setting.Setting.getCompanySettings",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "logoUrl": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `logoUrl` | **string** | The resolved logo URL from the theme. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{companySettings: array<string,mixed>, defaultNotificationTypes: array<int,string>, defaultRelevance: string, pushRelayEnabled: bool, pushRelayContent: string}
}
```



---
### `leantime.rpc.Setting.Setting.saveCompanySettings`

Persist company settings from a submitted form.

```json
{
    "method": "leantime.rpc.Setting.Setting.saveCompanySettings",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "params": array<string,mixed>,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **array<string,mixed>** | The submitted form parameters. |


**Returns:**
True when a settings block was persisted, false when nothing changed.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---

