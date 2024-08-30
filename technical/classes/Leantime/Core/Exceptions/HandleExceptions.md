---
title: \Leantime\Core\Exceptions\HandleExceptions
footer: false
---

# HandleExceptions





* Full name: `\Leantime\Core\Exceptions\HandleExceptions`



## Methods

### bootstrap

Bootstrap the given application.

```php
public HandleExceptions::bootstrap(\Leantime\Core\Bootstrap\Application $app): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `app` | **\Leantime\Core\Bootstrap\Application** |  |


**Return Value:**





---
### handleError

Report PHP deprecations, or convert PHP errors to ErrorException instances.

```php
public HandleExceptions::handleError(int $level, string $message, string $file = &#039;&#039;, int $line): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `level` | **int** |  |
| `message` | **string** |  |
| `file` | **string** |  |
| `line` | **int** |  |


**Return Value:**





---
### handleDeprecationError

Reports a deprecation to the "deprecations" logger.

```php
public HandleExceptions::handleDeprecationError(string $message, string $file, int $line, int $level = E_DEPRECATED): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `message` | **string** |  |
| `file` | **string** |  |
| `line` | **int** |  |
| `level` | **int** |  |


**Return Value:**





---
### shouldIgnoreDeprecationErrors

Determine if deprecation errors should be ignored.

```php
protected HandleExceptions::shouldIgnoreDeprecationErrors(): bool
```









**Return Value:**





---
### ensureDeprecationLoggerIsConfigured

Ensure the "deprecations" logger is configured.

```php
protected HandleExceptions::ensureDeprecationLoggerIsConfigured(): void
```









**Return Value:**





---
### ensureNullLogDriverIsConfigured

Ensure the "null" log driver is configured.

```php
protected HandleExceptions::ensureNullLogDriverIsConfigured(): void
```









**Return Value:**





---
### handleException

Handle an uncaught exception from the application.

```php
public HandleExceptions::handleException(\Throwable $e): void
```

Note: Most exceptions can be handled via the try / catch block in
the HTTP and Console kernels. But, fatal error exceptions must
be handled differently since they are not normal exceptions.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### renderForConsole

Render an exception to the console.

```php
protected HandleExceptions::renderForConsole(\Throwable $e): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### renderHttpResponse

Render an exception as an HTTP response and send it.

```php
protected HandleExceptions::renderHttpResponse(\Throwable $e): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `e` | **\Throwable** |  |


**Return Value:**





---
### handleShutdown

Handle the PHP shutdown event.

```php
public HandleExceptions::handleShutdown(): void
```









**Return Value:**





---
### fatalErrorFromPhpError

Create a new fatal error instance from an error array.

```php
protected HandleExceptions::fatalErrorFromPhpError(array $error, int|null $traceOffset = null): \Symfony\Component\ErrorHandler\Error\FatalError
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `error` | **array** |  |
| `traceOffset` | **int|null** |  |


**Return Value:**





---
### forwardsTo

Forward a method call to the given method if an application instance exists.

```php
protected HandleExceptions::forwardsTo(mixed $method): callable
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **mixed** |  |


**Return Value:**





---
### isDeprecation

Determine if the error level is a deprecation.

```php
protected HandleExceptions::isDeprecation(int $level): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `level` | **int** |  |


**Return Value:**





---
### isFatal

Determine if the error type is fatal.

```php
protected HandleExceptions::isFatal(int $type): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **int** |  |


**Return Value:**





---
### getExceptionHandler

Get an instance of the exception handler.

```php
protected HandleExceptions::getExceptionHandler(): \Illuminate\Contracts\Debug\ExceptionHandler
```









**Return Value:**





---
### forgetApp

Clear the local application instance from memory.

```php
public static HandleExceptions::forgetApp(): void
```



* This method is **static**.


* **Warning:** this method is **deprecated**. This means that this method will likely be removed in a future version.




**Return Value:**





---
### flushState

Flush the bootstrapper's global state.

```php
public static HandleExceptions::flushState(): void
```



* This method is **static**.





**Return Value:**





---
### flushHandlersState

Flush the bootstrapper's global handlers state.

```php
public static HandleExceptions::flushHandlersState(): void
```



* This method is **static**.





**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
