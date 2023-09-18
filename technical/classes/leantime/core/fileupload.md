---
title: \Leantime\Core\Fileupload
footer: false
---

# Fileupload

Fileupload class - Data filuploads



* Full name: `\Leantime\Core\Fileupload`



## Methods

### __construct

fileupload constructor.

```php
public Fileupload::__construct(\Leantime\Core\Environment $config): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Environment** |  |


**Return Value:**





---
### getMaximumFileUploadSize

This function returns the maximum files size that can be uploaded in PHP

```php
public static Fileupload::getMaximumFileUploadSize(): int
```



* This method is **static**.





**Return Value:**

File size in bytes



---
### convertPHPSizeToBytes

This function transforms the php.ini notation for numbers (like '2M') to an integer (2*1024*1024 in this case)

```php
private static Fileupload::convertPHPSizeToBytes(string $sSize): int
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
public Fileupload::getAbsolutePath(): string
```









**Return Value:**





---
### getPublicFilesPath



```php
public Fileupload::getPublicFilesPath(): string
```









**Return Value:**





---
### initFile

initFile - init variables of file

```php
public Fileupload::initFile( $file): mixed
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
public Fileupload::checkFileSize(): bool
```









**Return Value:**





---
### renameFile

renameFile

```php
public Fileupload::renameFile( $name): bool
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
public Fileupload::upload(): bool
```









**Return Value:**





---
### uploadPublic

uploadPublic - move file from tmp-folder to public folder

```php
public Fileupload::uploadPublic(): string|false
```









**Return Value:**





---
### uploadToS3

uploadToS3 - move file from tmp-folder to S3

```php
private Fileupload::uploadToS3(): bool
```









**Return Value:**





---
### uploadLocal



```php
private Fileupload::uploadLocal(): mixed
```









**Return Value:**





---
### displayImageFile

displayImageFile - display image file

```php
public Fileupload::displayImageFile(string $imageName, string $fullPath = &#039;&#039;): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `imageName` | **string** |  |
| `fullPath` | **string** |  |


**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int $function = null): void
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
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int $function = null): mixed
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
private static Eventhelpers::get_event_context(mixed $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **mixed** |  |


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
private static Eventhelpers::get_function_context(mixed $functionInt = null): string
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
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
