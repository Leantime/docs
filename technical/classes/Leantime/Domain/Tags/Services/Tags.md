---
title: \Leantime\Domain\Tags\Services\Tags
footer: false
---

# Tags





* Full name: `\Leantime\Domain\Tags\Services\Tags`



## Methods

### __construct



```php
public Tags::__construct(\Leantime\Domain\Projects\Repositories\Projects $projectRepository, \Leantime\Domain\Canvas\Repositories\Canvas $canvasRepository, \Leantime\Domain\Tickets\Repositories\Tickets $ticketRepository): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectRepository` | **\Leantime\Domain\Projects\Repositories\Projects** |  |
| `canvasRepository` | **\Leantime\Domain\Canvas\Repositories\Canvas** |  |
| `ticketRepository` | **\Leantime\Domain\Tickets\Repositories\Tickets** |  |


**Return Value:**





---
### getTags



```php
public Tags::getTags(int $projectId, string $term): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `projectId` | **int** |  |
| `term` | **string** |  |


**Return Value:**





---
### explodeAndMergeTags



```php
private Tags::explodeAndMergeTags( $dbTagValues, array $mergeInto): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dbTagValues` | **** |  |
| `mergeInto` | **array** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
