---
title: \Leantime\Core\Console\ConsoleKernel
footer: false
---

# ConsoleKernel




`\Leantime\Core\Console\ConsoleKernel`

* This class implements: \Illuminate\Contracts\Console\Kernel



## Methods

### bootstrap

Bootstrap the application for artisan commands.

```php
public ConsoleKernel::bootstrap(): void
```









**Return Value:**





---
### getArtisan



```php
public ConsoleKernel::getArtisan(): \Illuminate\Contracts\Console\Application|\Symfony\Component\Console\Application
```









**Return Value:**





---
### commands

Load and register the commands for the application.

```php
protected ConsoleKernel::commands(): void
```









**Return Value:**





---
### schedule

Schedule tasks to be executed.

```php
private ConsoleKernel::schedule(): void
```









**Return Value:**





---
### handle

Handle an incoming console command.

```php
public ConsoleKernel::handle(\Symfony\Component\Console\Input\InputInterface $input, \Symfony\Component\Console\Output\OutputInterface|null $output = null): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | **\Symfony\Component\Console\Input\InputInterface** |  |
| `output` | **\Symfony\Component\Console\Output\OutputInterface|null** |  |


**Return Value:**





---
### call

Run an Artisan console command by name.

```php
public ConsoleKernel::call(string $command, array $parameters = [], \Symfony\Component\Console\Output\OutputInterface|null $outputBuffer = null): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `command` | **string** |  |
| `parameters` | **array** |  |
| `outputBuffer` | **\Symfony\Component\Console\Output\OutputInterface|null** |  |


**Return Value:**





---
### queue



```php
public ConsoleKernel::queue(mixed $command, array $parameters = []): \Illuminate\Foundation\Bus\PendingDispatch
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `command` | **mixed** |  |
| `parameters` | **array** |  |


**Return Value:**





---
### all

Get all of the commands registered with the console.

```php
public ConsoleKernel::all(): array
```









**Return Value:**





---
### output

Get the output for the last run command.

```php
public ConsoleKernel::output(): string
```









**Return Value:**





---
### terminate

Terminate the application.

```php
public ConsoleKernel::terminate(\Symfony\Component\Console\Input\InputInterface $input, int $status): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | **\Symfony\Component\Console\Input\InputInterface** |  |
| `status` | **int** |  |


**Return Value:**





---
### getApplication

Get the application instance.

```php
public ConsoleKernel::getApplication(): \Illuminate\Contracts\Foundation\Application
```









**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static DispatchesEvents::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static DispatchesEvents::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
protected static DispatchesEvents::get_event_context( $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **** |  |


**Return Value:**





---
### set_class_context

Gets the class Context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static DispatchesEvents::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static DispatchesEvents::get_function_context(?int $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **?int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
