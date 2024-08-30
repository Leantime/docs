---
title: \Leantime\Domain\Plugins\Services\Plugins
footer: false
---

# Plugins




`leantime.rpc.Plugins.Plugins.`


## Available Methods
### `leantime.rpc.Plugins.Plugins.getAllPlugins`



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
| `enabledOnly` | **bool** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": array|false
}
```



---
### `leantime.rpc.Plugins.Plugins.isPluginEnabled`



```json
{
    "method": "leantime.rpc.Plugins.Plugins.isPluginEnabled",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "pluginFolder": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pluginFolder` | **** |  |


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



```json
{
    "method": "leantime.rpc.Plugins.Plugins.getEnabledPlugins",
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
        "pluginFolder": ,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pluginFolder` | **** |  |


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
### `leantime.rpc.Plugins.Plugins.getMarketplacePlugins`



```json
{
    "method": "leantime.rpc.Plugins.Plugins.getMarketplacePlugins",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "page": int,
        "query": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | **int** |  |
| `query` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \Leantime\Domain\Plugins\Models\MarketplacePlugin[]
}
```



---
### `leantime.rpc.Plugins.Plugins.getMarketplacePlugin`



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
| `identifier` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": \Leantime\Domain\Plugins\Models\MarketplacePlugin[]
}
```



---
### `leantime.rpc.Plugins.Plugins.installMarketplacePlugin`



```json
{
    "method": "leantime.rpc.Plugins.Plugins.installMarketplacePlugin",
    "jsonrpc": "2.0",
    "id": 1,
    "params": {
        "plugin": \Leantime\Domain\Plugins\Models\MarketplacePlugin,
        "version": string,
    }
}
```









**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `plugin` | **\Leantime\Domain\Plugins\Models\MarketplacePlugin** |  |
| `version` | **string** |  |


**Returns:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": void
}
```



---

