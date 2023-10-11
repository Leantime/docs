---
title: \Leantime\Domain\Dbmcanvas\Controllers\Export
footer: false
---

# Export

Template class For exporting class as XML file



* Full name: `\Leantime\Domain\Dbmcanvas\Controllers\Export`
* Parent class: [\Leantime\Domain\Canvas\Controllers\Export](../../Canvas/Controllers/Export.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Domain\Dbmcanvas\Controllers\Export::CANVAS_NAME`||&#039;dbm&#039;|



## Inherited methods

### init



```php
public Export::init(\Leantime\Core\Environment $config, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Environment** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### run

run - Generate XML file

```php
public Export::run(): mixed
```









**Return Value:**





---
### export



```php
protected Export::export(int $id): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |


**Return Value:**





---
### xmlExport

xmlExport - Generate XML for specific data

```php
protected Export::xmlExport(string $canvasKey, string $canvasTitle, array $recordsAry, int $indent): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `canvasKey` | **string** | Encoded canvas name |
| `canvasTitle` | **string** |  |
| `recordsAry` | **array** | Array of canvas entry records |
| `indent` | **int** | Indent level to use; |


**Return Value:**

XML data



---
### __construct

constructor - initialize private variables

```php
public Controller::__construct(\Leantime\Core\IncomingRequest $incomingRequest, \Leantime\Core\template $tpl, \Leantime\Core\language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `incomingRequest` | **\Leantime\Core\IncomingRequest** | The request to be initialized. |
| `tpl` | **\Leantime\Core\template** | The template to be initialized. |
| `language` | **\Leantime\Core\language** | The language to be initialized. |


**Return Value:**





---
### executeActions

Allows hooking into all controllers with events

```php
private Controller::executeActions(string $method, object|array $params): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `method` | **string** |  |
| `params` | **object|array** |  |


**Return Value:**





---
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
