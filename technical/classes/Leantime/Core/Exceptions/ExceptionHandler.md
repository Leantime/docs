---
title: \Leantime\Core\Exceptions\ExceptionHandler
footer: false
---

# ExceptionHandler




`\Leantime\Core\Exceptions\ExceptionHandler`

* This class implements: \Illuminate\Contracts\Debug\ExceptionHandler



## Methods

### __construct

Create a new exception handler instance.

```php
public ExceptionHandler::__construct(\Illuminate\Contracts\Container\Container $container): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `container` | **\Illuminate\Contracts\Container\Container** |  |


**Return Value:**





---
### register

Register the exception handling callbacks for the application.

```php
public ExceptionHandler::register(): void
```









**Return Value:**





---
### reportable

Register a reportable callback.

```php
public ExceptionHandler::reportable(callable $reportUsing): \Illuminate\Foundation\Exceptions\ReportableHandler
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `reportUsing` | **callable** |  |


**Return Value:**





---
### renderable

Register a renderable callback.

```php
public ExceptionHandler::renderable(callable $renderUsing): $this
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `renderUsing` | **callable** |  |


**Return Value:**





---
### map

Register a new exception mapping.

```php
public ExceptionHandler::map(\Closure|string $from, \Closure|string|null $to = null): $this
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | **\Closure|string** |  |
| `to` | **\Closure|string|null** |  |


**Return Value:**





---
### ignore

Indicate that the given exception type should not be reported.

```php
protected ExceptionHandler::ignore(string $class): $this
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `class` | **string** |  |


**Return Value:**





---
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
### shouldntReport

Determine if the exception is in the "do not report" list.

```php
protected ExceptionHandler::shouldntReport(\Throwable $e): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### exceptionContext

Get the default exception context variables for logging.

```php
protected ExceptionHandler::exceptionContext(\Throwable $e): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### context

Get the default context variables for logging.

```php
protected ExceptionHandler::context(): array
```









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
### mapException

Map the exception using a registered mapper if possible.

```php
protected ExceptionHandler::mapException(\Throwable $e): \Throwable
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### prepareException

Prepare exception for rendering.

```php
protected ExceptionHandler::prepareException(\Throwable $e): \Throwable
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### shouldReturnJson

Determine if the exception handler response should be JSON.

```php
protected ExceptionHandler::shouldReturnJson(\Illuminate\Http\Request $request, \Throwable $e): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Illuminate\Http\Request** |  |
| `e` | **\Throwable** |  |


**Return Value:**





---
### prepareResponse

Prepare a response for the given exception.

```php
protected ExceptionHandler::prepareResponse(\Illuminate\Http\Request $request, \Throwable $e): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Illuminate\Http\Request** |  |
| `e` | **\Throwable** |  |


**Return Value:**





---
### convertExceptionToResponse

Create a Symfony response for the given exception.

```php
protected ExceptionHandler::convertExceptionToResponse(\Throwable $e): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### renderExceptionContent

Get the response content for the given exception.

```php
protected ExceptionHandler::renderExceptionContent(\Throwable $e): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### renderExceptionWithWhoops

Render an exception to a string using "Whoops".

```php
protected ExceptionHandler::renderExceptionWithWhoops(\Throwable $e): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### whoopsHandler

Get the Whoops handler for the application.

```php
protected ExceptionHandler::whoopsHandler(): \Whoops\Handler\Handler
```









**Return Value:**





---
### renderExceptionWithSymfony

Render an exception to a string using Symfony.

```php
protected ExceptionHandler::renderExceptionWithSymfony(\Throwable $e, bool $debug): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |
| `debug` | **bool** |  |


**Return Value:**





---
### renderHttpException

Render the given HttpException.

```php
protected ExceptionHandler::renderHttpException(\Symfony\Component\HttpKernel\Exception\HttpExceptionInterface $e): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Symfony\Component\HttpKernel\Exception\HttpExceptionInterface** |  |


**Return Value:**





---
### registerErrorViewPaths

Register the error template hint paths.

```php
protected ExceptionHandler::registerErrorViewPaths(): void
```









**Return Value:**





---
### getHttpExceptionView

Get the view used to render HTTP exceptions.

```php
protected ExceptionHandler::getHttpExceptionView(\Symfony\Component\HttpKernel\Exception\HttpExceptionInterface $e): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Symfony\Component\HttpKernel\Exception\HttpExceptionInterface** |  |


**Return Value:**





---
### toIlluminateResponse

Map the given exception into an Illuminate response.

```php
protected ExceptionHandler::toIlluminateResponse(\Symfony\Component\HttpFoundation\Response $response, \Throwable $e): \Illuminate\Http\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `response` | **\Symfony\Component\HttpFoundation\Response** |  |
| `e` | **\Throwable** |  |


**Return Value:**





---
### prepareJsonResponse

Prepare a JSON response for the given exception.

```php
protected ExceptionHandler::prepareJsonResponse(\Illuminate\Http\Request $request, \Throwable $e): \Illuminate\Http\JsonResponse
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `request` | **\Illuminate\Http\Request** |  |
| `e` | **\Throwable** |  |


**Return Value:**





---
### convertExceptionToArray

Convert the given exception to an array.

```php
protected ExceptionHandler::convertExceptionToArray(\Throwable $e): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
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





---
### isHttpException

Determine if the given exception is an HTTP exception.

```php
protected ExceptionHandler::isHttpException(\Throwable $e): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
