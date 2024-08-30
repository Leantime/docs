---
title: \Leantime\Domain\Audit\Repositories\Audit
footer: false
---

# Audit




`\Leantime\Domain\Audit\Repositories\Audit`




## Methods

### __construct



```php
public Audit::__construct(\Leantime\Core\Db\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db\Db** |  |


**Return Value:**





---
### storeEvent



```php
public Audit::storeEvent(string $action = &quot;ping&quot;, string $values = &quot;&quot;, string $entity = &quot;&quot;, int $entityId, int $userId, int $projectId, string $thedate = &#039;&#039;): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `action` | **string** |  |
| `values` | **string** |  |
| `entity` | **string** |  |
| `entityId` | **int** |  |
| `userId` | **int** |  |
| `projectId` | **int** |  |
| `thedate` | **string** |  |


**Return Value:**





---
### getLastEvent



```php
public Audit::getLastEvent(string $action = &#039;&#039;): mixed|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `action` | **string** |  |


**Return Value:**





---
### pruneEvents



```php
public Audit::pruneEvents(int $ageDays = 30): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ageDays` | **int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
