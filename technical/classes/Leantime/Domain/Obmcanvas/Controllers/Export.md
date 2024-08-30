---
title: \Leantime\Domain\Obmcanvas\Controllers\Export
footer: false
---

# Export

Template class For exporting class as XML file



* Full name: `\Leantime\Domain\Obmcanvas\Controllers\Export`
* Parent class: [\Leantime\Domain\Canvas\Controllers\Export](../../Canvas/Controllers/Export.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Domain\Obmcanvas\Controllers\Export::CANVAS_NAME`||&#039;obm&#039;|



## Inherited methods

### init



```php
public Export::init(\Leantime\Core\Configuration\Environment $config, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Configuration\Environment** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### run

run - Generate XML file

```php
public Export::run(): \Symfony\Component\HttpFoundation\Response
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
public Controller::__construct(\Leantime\Core\Http\IncomingRequest $incomingRequest, \Leantime\Core\Template $tpl, \Leantime\Core\Language $language): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `incomingRequest` | **\Leantime\Core\Http\IncomingRequest** | The request to be initialized. |
| `tpl` | **\Leantime\Core\Template** | The template to be initialized. |
| `language` | **\Leantime\Core\Language** | The language to be initialized. |


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
### getResponse

getResponse - returns the response

```php
public Controller::getResponse(): \Symfony\Component\HttpFoundation\Response
```









**Return Value:**

The response object.



---
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
