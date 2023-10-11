---
title: \Leantime\Core\Mailer
footer: false
---

# Mailer

Mail class - mails with php mail()



* Full name: `\Leantime\Core\Mailer`



## Methods

### __construct

__construct - get configurations

```php
public Mailer::__construct(\Leantime\Core\Environment $config, \Leantime\Core\Language $language): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Environment** |  |
| `language` | **\Leantime\Core\Language** |  |


**Return Value:**





---
### setContext

setContext - sets the context for the mailing
(used for filters & events)

```php
public Mailer::setContext( $context): void
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
public Mailer::setText( $text): void
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
public Mailer::setHtml( $html, false $hideWrapper = false): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `html` | **** |  |
| `hideWrapper` | **false** |  |


**Return Value:**





---
### setSubject

setSubject - set mail subject

```php
public Mailer::setSubject( $subject): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `subject` | **** |  |


**Return Value:**





---
### dispatchMailerEvent

dispatchMailerEvent - dispatches a mailer event

```php
private Mailer::dispatchMailerEvent( $hookname,  $payload, array $additional_params = []): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hookname` | **** |  |
| `payload` | **** |  |
| `additional_params` | **array** |  |


**Return Value:**





---
### dispatchMailerFilter

dispatchMailerFilter - dispatches a mailer filter

```php
private Mailer::dispatchMailerFilter( $hookname,  $payload, array $additional_params = []): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hookname` | **** |  |
| `payload` | **** |  |
| `additional_params` | **array** |  |


**Return Value:**





---
### dispatchMailerHook

dispatchMailerHook - dispatches a mailer hook

```php
private Mailer::dispatchMailerHook( $type,  $hookname,  $payload, array $additional_params = []): void|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **** |  |
| `hookname` | **** |  |
| `payload` | **** |  |
| `additional_params` | **array** |  |


**Return Value:**





---
### sendMail

sendMail - send the mail with mail()

```php
public Mailer::sendMail(array $to,  $from): void
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
