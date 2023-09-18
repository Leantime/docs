---
title: \Leantime\Domain\Audit\Repositories\Audit
footer: false
---

# Audit





* Full name: `\Leantime\Domain\Audit\Repositories\Audit`



## Methods

### __construct



```php
public Audit::__construct(\Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### storeEvent



```php
public Audit::storeEvent(mixed $action = &quot;ping&quot;, mixed $values = &quot;&quot;, mixed $entity = &quot;&quot;, mixed $entityId, mixed $userId, mixed $projectId, mixed $thedate = &#039;&#039;): mixed
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
public Audit::getLastEvent(mixed $action = &#039;&#039;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `action` | **mixed** |  |


**Return Value:**





---
### pruneEvents



```php
public Audit::pruneEvents(mixed $ageDays = 30): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ageDays` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
