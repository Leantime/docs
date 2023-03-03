---
title: \leantime\domain\repositories\comments
footer: false
---

# comments





* Full name: `\leantime\domain\repositories\comments`



## Methods

### __construct



```php
public comments::__construct(): mixed
```









**Return Value:**





---
### getComments



```php
public comments::getComments(mixed $module, mixed $moduleId, mixed $parent, mixed $orderByState = &quot;0&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **mixed** |  |
| `moduleId` | **mixed** |  |
| `parent` | **mixed** |  |
| `orderByState` | **mixed** |  |


**Return Value:**





---
### countComments



```php
public comments::countComments(mixed $module = null, mixed $moduleId = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **mixed** |  |
| `moduleId` | **mixed** |  |


**Return Value:**





---
### getReplies



```php
public comments::getReplies(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getComment



```php
public comments::getComment(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addComment



```php
public comments::addComment(mixed $values, mixed $module): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `values` | **mixed** |  |
| `module` | **mixed** |  |


**Return Value:**





---
### deleteComment



```php
public comments::deleteComment(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### editComment



```php
public comments::editComment(mixed $text, mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **mixed** |  |
| `id` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
