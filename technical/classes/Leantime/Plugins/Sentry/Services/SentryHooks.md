---
title: \Leantime\Plugins\Sentry\Services\SentryHooks
footer: false
---

# SentryHooks





* Full name: `\Leantime\Plugins\Sentry\Services\SentryHooks`



## Methods

### __construct



```php
public SentryHooks::__construct(\Leantime\Core\AppSettings $settings): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `settings` | **\Leantime\Core\AppSettings** |  |


**Return Value:**





---
### init



```php
public SentryHooks::init(): mixed
```









**Return Value:**





---
### startSpan



```php
public SentryHooks::startSpan(string $spanName): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `spanName` | **string** |  |


**Return Value:**





---
### stopSpan



```php
public SentryHooks::stopSpan(string $spanName): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `spanName` | **string** |  |


**Return Value:**





---
### stopApplication



```php
public SentryHooks::stopApplication(mixed $payload): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `payload` | **mixed** |  |


**Return Value:**





---
### setScope



```php
public SentryHooks::setScope(): mixed
```









**Return Value:**





---
### jsHandler



```php
public SentryHooks::jsHandler(mixed $payload): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `payload` | **mixed** |  |


**Return Value:**





---
### addTraceMetaTag



```php
public SentryHooks::addTraceMetaTag(): mixed
```









**Return Value:**





---
### removeUserScope



```php
public SentryHooks::removeUserScope(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
