---
title: \Leantime\Core\Exceptions\WhoopsHandler
footer: false
---

# WhoopsHandler




`\Leantime\Core\Exceptions\WhoopsHandler`




## Methods

### forDebug

Create a new Whoops handler for debug mode.

```php
public WhoopsHandler::forDebug(): \Whoops\Handler\PrettyPageHandler
```









**Return Value:**





---
### registerApplicationPaths

Register the application paths with the handler.

```php
protected WhoopsHandler::registerApplicationPaths(\Whoops\Handler\PrettyPageHandler $handler): $this
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `handler` | **\Whoops\Handler\PrettyPageHandler** |  |


**Return Value:**





---
### directoriesExceptVendor

Get the application paths except for the "vendor" directory.

```php
protected WhoopsHandler::directoriesExceptVendor(): array
```









**Return Value:**





---
### registerBlacklist

Register the blacklist with the handler.

```php
protected WhoopsHandler::registerBlacklist(\Whoops\Handler\PrettyPageHandler $handler): $this
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `handler` | **\Whoops\Handler\PrettyPageHandler** |  |


**Return Value:**





---
### registerEditor

Register the editor with the handler.

```php
protected WhoopsHandler::registerEditor(\Whoops\Handler\PrettyPageHandler $handler): $this
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `handler` | **\Whoops\Handler\PrettyPageHandler** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
