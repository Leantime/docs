---
title: \Leantime\Domain\Reports\Services\Reports
footer: false
---

# Reports





* Full name: `\Leantime\Domain\Reports\Services\Reports`



## Methods

### __construct



```php
public Reports::__construct(\Leantime\Core\Template $tpl, \Leantime\Core\AppSettings $appSettings, \Leantime\Core\Environment $config, \Leantime\Domain\Projects\Repositories\Projects $projectRepository, \Leantime\Domain\Sprints\Repositories\Sprints $sprintRepository, \Leantime\Domain\Reports\Repositories\Reports $reportRepository, \Leantime\Domain\Setting\Repositories\Setting $settings, \Leantime\Domain\Tickets\Repositories\Tickets $ticketRepository): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `tpl` | **\Leantime\Core\Template** |  |
| `appSettings` | **\Leantime\Core\AppSettings** |  |
| `config` | **\Leantime\Core\Environment** |  |
| `projectRepository` | **\Leantime\Domain\Projects\Repositories\Projects** |  |
| `sprintRepository` | **\Leantime\Domain\Sprints\Repositories\Sprints** |  |
| `reportRepository` | **\Leantime\Domain\Reports\Repositories\Reports** |  |
| `settings` | **\Leantime\Domain\Setting\Repositories\Setting** |  |
| `ticketRepository` | **\Leantime\Domain\Tickets\Repositories\Tickets** |  |


**Return Value:**





---
### dailyIngestion



```php
public Reports::dailyIngestion(): void
```









**Return Value:**





---
### getFullReport



```php
public Reports::getFullReport( $projectId): array|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |


**Return Value:**





---
### getRealtimeReport



```php
public Reports::getRealtimeReport( $projectId,  $sprintId): array|bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **** |  |
| `sprintId` | **** |  |


**Return Value:**





---
### getAnonymousTelemetry



```php
public Reports::getAnonymousTelemetry(\Leantime\Domain\Ideas\Repositories\Ideas $ideaRepository, \Leantime\Domain\Users\Repositories\Users $userRepository, \Leantime\Domain\Clients\Repositories\Clients $clientRepository, \Leantime\Domain\Comments\Repositories\Comments $commentsRepository, \Leantime\Domain\Timesheets\Repositories\Timesheets $timesheetRepo, \Leantime\Domain\Eacanvas\Repositories\Eacanvas $eaCanvasRepo, \Leantime\Domain\Insightscanvas\Repositories\Insightscanvas $insightsCanvasRepo, \Leantime\Domain\Leancanvas\Repositories\Leancanvas $leanCanvasRepo, \Leantime\Domain\Obmcanvas\Repositories\Obmcanvas $obmCanvasRepo, \Leantime\Domain\Retroscanvas\Repositories\Retroscanvas $retrosCanvasRepo, \Leantime\Domain\Goalcanvas\Repositories\Goalcanvas $goalCanvasRepo, \Leantime\Domain\Valuecanvas\Repositories\Valuecanvas $valueCanvasRepo, \Leantime\Domain\Minempathycanvas\Repositories\Minempathycanvas $minEmpathyCanvasRepo, \Leantime\Domain\Riskscanvas\Repositories\Riskscanvas $risksCanvasRepo, \Leantime\Domain\Sbcanvas\Repositories\Sbcanvas $sbCanvasRepo, \Leantime\Domain\Swotcanvas\Repositories\Swotcanvas $swotCanvasRepo, \Leantime\Domain\Wiki\Repositories\Wiki $wikiRepo): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ideaRepository` | **\Leantime\Domain\Ideas\Repositories\Ideas** |  |
| `userRepository` | **\Leantime\Domain\Users\Repositories\Users** |  |
| `clientRepository` | **\Leantime\Domain\Clients\Repositories\Clients** |  |
| `commentsRepository` | **\Leantime\Domain\Comments\Repositories\Comments** |  |
| `timesheetRepo` | **\Leantime\Domain\Timesheets\Repositories\Timesheets** |  |
| `eaCanvasRepo` | **\Leantime\Domain\Eacanvas\Repositories\Eacanvas** |  |
| `insightsCanvasRepo` | **\Leantime\Domain\Insightscanvas\Repositories\Insightscanvas** |  |
| `leanCanvasRepo` | **\Leantime\Domain\Leancanvas\Repositories\Leancanvas** |  |
| `obmCanvasRepo` | **\Leantime\Domain\Obmcanvas\Repositories\Obmcanvas** |  |
| `retrosCanvasRepo` | **\Leantime\Domain\Retroscanvas\Repositories\Retroscanvas** |  |
| `goalCanvasRepo` | **\Leantime\Domain\Goalcanvas\Repositories\Goalcanvas** |  |
| `valueCanvasRepo` | **\Leantime\Domain\Valuecanvas\Repositories\Valuecanvas** |  |
| `minEmpathyCanvasRepo` | **\Leantime\Domain\Minempathycanvas\Repositories\Minempathycanvas** |  |
| `risksCanvasRepo` | **\Leantime\Domain\Riskscanvas\Repositories\Riskscanvas** |  |
| `sbCanvasRepo` | **\Leantime\Domain\Sbcanvas\Repositories\Sbcanvas** |  |
| `swotCanvasRepo` | **\Leantime\Domain\Swotcanvas\Repositories\Swotcanvas** |  |
| `wikiRepo` | **\Leantime\Domain\Wiki\Repositories\Wiki** |  |


**Return Value:**





---
### sendAnonymousTelemetry



```php
public Reports::sendAnonymousTelemetry(): bool|\GuzzleHttp\Promise\PromiseInterface
```









**Return Value:**





---
### optOutTelemetry



```php
public Reports::optOutTelemetry(): false|void
```









**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
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
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
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
private static Eventhelpers::get_event_context( $function): string
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
private static Eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static Eventhelpers::get_function_context(null $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **null** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
