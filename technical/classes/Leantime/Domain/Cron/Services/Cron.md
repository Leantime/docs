---
title: \Leantime\Domain\Cron\Services\Cron
footer: false
---

# Cron




`\Leantime\Domain\Cron\Services\Cron`




## Methods

### __construct



```php
public Cron::__construct(\Leantime\Domain\Audit\Repositories\Audit $auditRepo, \Leantime\Domain\Queue\Services\Queue $queueSvc, \Leantime\Core\Configuration\Environment $environment, \Leantime\Domain\Reports\Services\Reports $reportService): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `auditRepo` | **\Leantime\Domain\Audit\Repositories\Audit** |  |
| `queueSvc` | **\Leantime\Domain\Queue\Services\Queue** |  |
| `environment` | **\Leantime\Core\Configuration\Environment** |  |
| `reportService` | **\Leantime\Domain\Reports\Services\Reports** |  |


**Return Value:**





---
### runCron



```php
public Cron::runCron(): bool
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
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
