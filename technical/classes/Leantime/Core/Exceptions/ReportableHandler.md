---
title: \Leantime\Core\Exceptions\ReportableHandler
footer: false
---

# ReportableHandler





* Full name: `\Leantime\Core\Exceptions\ReportableHandler`



## Methods

### __construct

Create a new reportable handler instance.

```php
public ReportableHandler::__construct(callable $callback): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `callback` | **callable** |  |


**Return Value:**





---
### __invoke

Invoke the handler.

```php
public ReportableHandler::__invoke(\Throwable $e): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### handles

Determine if the callback handles the given exception.

```php
public ReportableHandler::handles(\Throwable $e): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### stop

Indicate that report handling should stop after invoking this callback.

```php
public ReportableHandler::stop(): $this
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
