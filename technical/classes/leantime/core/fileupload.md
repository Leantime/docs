---
title: \leantime\core\fileupload
footer: false
---

# fileupload

Fileupload class - Data filuploads



* Full name: `\leantime\core\fileupload`



## Methods

### __construct

fileupload constructor.

```php
public fileupload::__construct(): mixed
```









**Return Value:**





---
### getMaximumFileUploadSize

This function returns the maximum files size that can be uploaded
in PHP

```php
public static fileupload::getMaximumFileUploadSize(): mixed
```



* This method is **static**.





**Return Value:**





---
### convertPHPSizeToBytes

This function transforms the php.ini notation for numbers (like '2M') to an integer (2*1024*1024 in this case)

```php
private static fileupload::convertPHPSizeToBytes(string $sSize): int
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `sSize` | **string** |  |


**Return Value:**

The value in bytes



---
### getAbsolutePath



```php
public fileupload::getAbsolutePath(): string
```









**Return Value:**





---
### getPublicFilesPath



```php
public fileupload::getPublicFilesPath(): string
```









**Return Value:**





---
### initFile

initFile - init variables of file

```php
public fileupload::initFile( $file): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **** | $file from Post |


**Return Value:**





---
### checkFileSize

checkFileSize - Checks if filesize is ok

```php
public fileupload::checkFileSize(): bool
```









**Return Value:**





---
### renameFile

renameFile

```php
public fileupload::renameFile( $name): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **** |  |


**Return Value:**





---
### upload

upload - move file from tmp-folder to S3

```php
public fileupload::upload(): bool
```









**Return Value:**





---
### uploadPublic



```php
public fileupload::uploadPublic(): mixed
```









**Return Value:**





---
### uplodToS3



```php
private fileupload::uplodToS3(): mixed
```









**Return Value:**





---
### uploadLocal



```php
private fileupload::uploadLocal(): mixed
```









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
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
