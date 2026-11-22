---
title: \Leantime\Domain\Plugins\Services\Plugins
footer: false
---

# Plugins



`leantime.rpc.Plugins.Plugins.`


## Available Methods
### `leantime.rpc.Plugins.Plugins.getAllPlugins`

Retrieves all plugins, optionally filtering only the enabled ones.

```json
{
    "method": "leantime.rpc.Plugins.Plugins.getAllPlugins",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "enabledOnly": bool,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `enabledOnly` | **bool** | If set to true, only enabled plugins will be returned. |


**Returns:**
Returns an array of all plugins or false if an error occurs.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|\Leantime\Domain\Plugins\Models\InstalledPlugin[]
}
```



---
### `leantime.rpc.Plugins.Plugins.isEnabled`



```json
{
    "method": "leantime.rpc.Plugins.Plugins.isEnabled",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "pluginFolder": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pluginFolder` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Plugins.Plugins.getEnabledPlugins`

Returns the enabled plugins (database plus system plugins from config), cached.

```json
{
    "method": "leantime.rpc.Plugins.Plugins.getEnabledPlugins",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "failOnDatabaseError": bool,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `failOnDatabaseError` | **bool** | Rethrow a failing plugin-table query instead of falling back. |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false|mixed
}
```



---
### `leantime.rpc.Plugins.Plugins.discoverNewPlugins`



```json
{
    "method": "leantime.rpc.Plugins.Plugins.discoverNewPlugins",
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
    "result": \Leantime\Domain\Plugins\Models\InstalledPlugin[]
}
```



---
### `leantime.rpc.Plugins.Plugins.installPlugin`



```json
{
    "method": "leantime.rpc.Plugins.Plugins.installPlugin",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "pluginFolder": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pluginFolder` | **mixed** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": false|string
}
```



---
### `leantime.rpc.Plugins.Plugins.enablePlugin`



```json
{
    "method": "leantime.rpc.Plugins.Plugins.enablePlugin",
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
| `id` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Plugins.Plugins.disablePlugin`



```json
{
    "method": "leantime.rpc.Plugins.Plugins.disablePlugin",
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
| `id` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Plugins.Plugins.removePlugin`



```json
{
    "method": "leantime.rpc.Plugins.Plugins.removePlugin",
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
| `id` | **int** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Plugins.Plugins.getPluginClassName`



```json
{
    "method": "leantime.rpc.Plugins.Plugins.getPluginClassName",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "plugin": \Leantime\Domain\Plugins\Models\InstalledPlugin,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `plugin` | **\Leantime\Domain\Plugins\Models\InstalledPlugin** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---
### `leantime.rpc.Plugins.Plugins.buildMarketplacePluginFromRequest`

Builds a MarketplacePlugin from raw request properties.

```json
{
    "method": "leantime.rpc.Plugins.Plugins.buildMarketplacePluginFromRequest",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "pluginProps": array<string,mixed>,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pluginProps` | **array<string,mixed>** | Raw plugin properties from the request (without &#039;version&#039;). |


**Returns:**
The hydrated plugin model.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \Leantime\Domain\Plugins\Models\MarketplacePlugin
}
```



---
### `leantime.rpc.Plugins.Plugins.isBundle`

Determines whether a marketplace plugin belongs to the "bundles" category.

```json
{
    "method": "leantime.rpc.Plugins.Plugins.isBundle",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "plugin": \Leantime\Domain\Plugins\Models\MarketplacePlugin,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `plugin` | **\Leantime\Domain\Plugins\Models\MarketplacePlugin** | The plugin to inspect. |


**Returns:**
True if the plugin is part of the bundles category.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Plugins.Plugins.parseMarketplaceError`

Parses a marketplace download/install RequestException into a clean,
user-facing error message.

```json
{
    "method": "leantime.rpc.Plugins.Plugins.parseMarketplaceError",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "exception": \Illuminate\Http\Client\RequestException,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `exception` | **\Illuminate\Http\Client\RequestException** | The exception thrown while installing. |


**Returns:**
A clean error message safe to show to the user.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---
### `leantime.rpc.Plugins.Plugins.getMarketplacePlugin`

Retrieves a marketplace plugin's details by its identifier.

```json
{
    "method": "leantime.rpc.Plugins.Plugins.getMarketplacePlugin",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "identifier": string,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `identifier` | **string** | The unique identifier of the marketplace plugin. |


**Returns:**
Returns a MarketplacePlugin instance if found, or false if the plugin could not be retrieved.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \Leantime\Domain\Plugins\Models\MarketplacePlugin|false
}
```



---
### `leantime.rpc.Plugins.Plugins.updatePlugin`

Updates an installed marketplace plugin to its newest version that supports this Leantime
version, with the license key it was installed with. A version that doesn't load is rolled
back (the error says so).

```json
{
    "method": "leantime.rpc.Plugins.Plugins.updatePlugin",
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
| `id` | **int** | The plugin id. |


**Returns:**
False when there is nothing to update to.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": bool
}
```



---
### `leantime.rpc.Plugins.Plugins.checkForUpdates`

Asks the marketplace for a newer version of every installed marketplace plugin, keeps the
result for My Apps, and tells the administrators about each new version once.

```json
{
    "method": "leantime.rpc.Plugins.Plugins.checkForUpdates",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**

updates: plugin folder => version; failed: plugin folders that could not be checked.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{updates: array<string,string>, failed: array<int,string>}
}
```



---
### `leantime.rpc.Plugins.Plugins.setAutoUpdate`

Turns automatic plugin updates on or off (off by default). When on, the daily update check
installs new minor and patch releases of marketplace plugins; major releases wait for an
administrator.

```json
{
    "method": "leantime.rpc.Plugins.Plugins.setAutoUpdate",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "enabled": bool,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `enabled` | **bool** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---
### `leantime.rpc.Plugins.Plugins.isAutoUpdateEnabled`

Whether automatic plugin updates are on (off unless an administrator turned them on).

```json
{
    "method": "leantime.rpc.Plugins.Plugins.isAutoUpdateEnabled",
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
    "result": bool
}
```



---
### `leantime.rpc.Plugins.Plugins.performPluginAction`

Runs a single plugin lifecycle action (install, enable, disable, remove) and
returns the notification descriptor describing the outcome.

```json
{
    "method": "leantime.rpc.Plugins.Plugins.performPluginAction",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "action": string,
        "id": mixed,
    }
}
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `action` | **string** | One of: install, enable, disable, remove, update. |
| `id` | **mixed** | The plugin identifier (folder name for install, numeric id otherwise). |


**Returns:**
A [messageKey, type] notification descriptor.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array{0: string, 1: string}
}
```



---
### `leantime.rpc.Plugins.Plugins.getAggregatedPluginCss`

Aggregates the CSS contributed by enabled plugins into a single payload.

```json
{
    "method": "leantime.rpc.Plugins.Plugins.getAggregatedPluginCss",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
    }
}
```









**Returns:**
The combined CSS contents of all registered, existing plugin files.
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": string
}
```



---

