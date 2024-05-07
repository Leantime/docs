---
title: \Leantime\Core\ExceptionHandler
footer: false
---

# ExceptionHandler

currently super basic exception handler that just pushes it off to symfony



* Full name: `\Leantime\Core\ExceptionHandler`
* This class implements: \Illuminate\Contracts\Debug\ExceptionHandler



## Methods

### report

Report or log an exception.

```php
public ExceptionHandler::report(\Throwable $e): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### shouldReport

Determine if the exception should be reported.

```php
public ExceptionHandler::shouldReport(\Throwable $e): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### render

Render an exception into an HTTP response.

```php
public ExceptionHandler::render(\Illuminate\Http\Request $request, \Throwable $e): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Illuminate\Http\Request** |  |
| `e` | **\Throwable** |  |


**Return Value:**





---
### renderForConsole

Render an exception to the console.

```php
public ExceptionHandler::renderForConsole(\Symfony\Component\Console\Output\OutputInterface $output, \Throwable $e): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `output` | **\Symfony\Component\Console\Output\OutputInterface** |  |
| `e` | **\Throwable** |  |


**Return Value:**

This method is not meant to be used or overwritten outside the framework.



---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
