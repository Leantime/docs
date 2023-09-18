---
title: \Leantime\Domain\Comments\Repositories\Comments
footer: false
---

# Comments





* Full name: `\Leantime\Domain\Comments\Repositories\Comments`



## Methods

### __construct



```php
public Comments::__construct(\Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### getComments



```php
public Comments::getComments(mixed $module, mixed $moduleId, mixed $parent, mixed $orderByState = &quot;0&quot;): mixed
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
public Comments::countComments(mixed $module = null, mixed $moduleId = null): mixed
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
public Comments::getReplies(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### getComment



```php
public Comments::getComment(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### addComment



```php
public Comments::addComment(mixed $values, mixed $module): mixed
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
public Comments::deleteComment(mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **mixed** |  |


**Return Value:**





---
### editComment



```php
public Comments::editComment(mixed $text, mixed $id): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **mixed** |  |
| `id` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
