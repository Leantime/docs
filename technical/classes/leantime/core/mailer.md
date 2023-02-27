---
title: \leantime\core\mailer
footer: false
---

# mailer





* Full name: `\leantime\core\mailer`



## Methods

### __construct

__construct - get configurations

```php
public mailer::__construct(): void
```









**Return Value:**





---
### setContext

setContext - sets the context for the mailing
(used for filters & events)

```php
public mailer::setContext( $context): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `context` | **** |  |


**Return Value:**





---
### setText

setText - sets the mailtext

```php
public mailer::setText( $text): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **** |  |


**Return Value:**





---
### setHtml

setHTML - set Mail html (no function yet)

```php
public mailer::setHtml( $html): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `html` | **** |  |


**Return Value:**





---
### setSubject

setSubject - set mail subject

```php
public mailer::setSubject( $subject): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `subject` | **** |  |


**Return Value:**





---
### dispatchMailerHook



```php
private mailer::dispatchMailerHook(mixed $type, mixed $hookname, mixed $payload, mixed $additional_params = []): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **mixed** |  |
| `hookname` | **mixed** |  |
| `payload` | **mixed** |  |
| `additional_params` | **mixed** |  |


**Return Value:**





---
### sendMail

sendMail - send the mail with mail()

```php
public mailer::sendMail(array $to,  $from): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `to` | **array** |  |
| `from` | **** |  |


**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
private static eventhelpers::get_event_context(mixed $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **mixed** |  |


**Return Value:**





---
### set_class_context

Gets the class context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static eventhelpers::get_function_context(mixed $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
