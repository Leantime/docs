---
title: \Leantime\Core\Fileupload
footer: false
---

# Fileupload

Fileupload class - Data filuploads


`\Leantime\Core\Fileupload`




## Methods

### __construct

fileupload constructor.

```php
public Fileupload::__construct(\Leantime\Core\Configuration\Environment $config): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Configuration\Environment** |  |


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
public Fileupload::initFile( $file): void
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
private Fileupload::uploadLocal(): bool
```









**Return Value:**





---
### displayImageFile

displayImageFile - display image file

```php
public Fileupload::displayImageFile(string $imageName, string $fullPath = &#039;&#039;): \Symfony\Component\HttpFoundation\Response
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
