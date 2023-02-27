---
title: \leantime\domain\repositories\audit
footer: false
---

# audit





* Full name: `\leantime\domain\repositories\audit`



## Methods

### __construct



```php
public audit::__construct(): mixed
```









**Return Value:**





---
### storeEvent



```php
public audit::storeEvent(mixed $action = &quot;ping&quot;, mixed $values = &quot;&quot;, mixed $entity = &quot;&quot;, mixed $entityId, mixed $userId, mixed $projectId, mixed $thedate = &#039;&#039;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `action` | **mixed** |  |
| `values` | **mixed** |  |
| `entity` | **mixed** |  |
| `entityId` | **mixed** |  |
| `userId` | **mixed** |  |
| `projectId` | **mixed** |  |
| `thedate` | **mixed** |  |


**Return Value:**





---
### getLastEvent



```php
public audit::getLastEvent(mixed $action = &#039;&#039;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `action` | **mixed** |  |


**Return Value:**





---
### pruneEvents



```php
public audit::pruneEvents(mixed $ageDays = 30): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ageDays` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-02-27 using [phpDocumentor](http://www.phpdoc.org/)
