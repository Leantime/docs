---
title: \Leantime\Domain\Connector\Services\Connector
footer: false
---

# Connector




`\Leantime\Domain\Connector\Services\Connector`




## Methods

### __construct



```php
public Connector::__construct(\Leantime\Domain\Users\Services\Users $userService, \Leantime\Domain\Canvas\Repositories\Canvas $canvasRepository, \Leantime\Domain\Projects\Services\Projects $projectService, \Leantime\Domain\Tickets\Services\Tickets $ticketService, \Leantime\Domain\Tickets\Repositories\Tickets $ticketRepository, \Leantime\Domain\Goalcanvas\Repositories\Goalcanvas $goalCanvasRepo, \Leantime\Domain\Ideas\Repositories\Ideas $ideaRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userService` | **\Leantime\Domain\Users\Services\Users** |  |
| `canvasRepository` | **\Leantime\Domain\Canvas\Repositories\Canvas** |  |
| `projectService` | **\Leantime\Domain\Projects\Services\Projects** |  |
| `ticketService` | **\Leantime\Domain\Tickets\Services\Tickets** |  |
| `ticketRepository` | **\Leantime\Domain\Tickets\Repositories\Tickets** |  |
| `goalCanvasRepo` | **\Leantime\Domain\Goalcanvas\Repositories\Goalcanvas** |  |
| `ideaRepo` | **\Leantime\Domain\Ideas\Repositories\Ideas** |  |


**Return Value:**





---
### getEntityFlags



```php
public Connector::getEntityFlags(mixed $entity): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `entity` | **mixed** |  |


**Return Value:**





---
### getFieldMappings



```php
public Connector::getFieldMappings(mixed $postParams): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `postParams` | **mixed** |  |


**Return Value:**





---
### parseValues



```php
public Connector::parseValues(mixed $fields, mixed $values, mixed $entity): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fields` | **mixed** |  |
| `values` | **mixed** |  |
| `entity` | **mixed** |  |


**Return Value:**





---
### parseTickets



```php
private Connector::parseTickets(mixed $fields, mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fields` | **mixed** |  |
| `values` | **mixed** |  |


**Return Value:**





---
### parseProjects



```php
private Connector::parseProjects(mixed $fields, mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fields` | **mixed** |  |
| `values` | **mixed** |  |


**Return Value:**





---
### parseUsers



```php
private Connector::parseUsers(mixed $fields, mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fields` | **mixed** |  |
| `values` | **mixed** |  |


**Return Value:**





---
### parseIdeas



```php
private Connector::parseIdeas(mixed $fields, mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fields` | **mixed** |  |
| `values` | **mixed** |  |


**Return Value:**





---
### parseGoals



```php
private Connector::parseGoals(mixed $fields, mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fields` | **mixed** |  |
| `values` | **mixed** |  |


**Return Value:**





---
### parseMilestones



```php
private Connector::parseMilestones(mixed $fields, mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fields` | **mixed** |  |
| `values` | **mixed** |  |


**Return Value:**





---
### importValues



```php
public Connector::importValues(mixed $fields, mixed $values, mixed $entity): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fields` | **mixed** |  |
| `values` | **mixed** |  |
| `entity` | **mixed** |  |


**Return Value:**





---
### importTickets



```php
private Connector::importTickets(mixed $finalMappings, mixed $finalValues): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `finalMappings` | **mixed** |  |
| `finalValues` | **mixed** |  |


**Return Value:**





---
### importProjects



```php
private Connector::importProjects(mixed $finalMappings, mixed $finalValues): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `finalMappings` | **mixed** |  |
| `finalValues` | **mixed** |  |


**Return Value:**





---
### importUsers



```php
private Connector::importUsers(mixed $finalMappings, mixed $finalValues): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `finalMappings` | **mixed** |  |
| `finalValues` | **mixed** |  |


**Return Value:**





---
### importIdeas



```php
private Connector::importIdeas(mixed $finalMappings, mixed $finalValues): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `finalMappings` | **mixed** |  |
| `finalValues` | **mixed** |  |


**Return Value:**





---
### importGoals



```php
private Connector::importGoals(mixed $finalMappings, mixed $finalValues): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `finalMappings` | **mixed** |  |
| `finalValues` | **mixed** |  |


**Return Value:**





---
### importMilestones



```php
private Connector::importMilestones(mixed $finalMappings, mixed $finalValues): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `finalMappings` | **mixed** |  |
| `finalValues` | **mixed** |  |


**Return Value:**





---
### cacheSerializedFieldValues



```php
private Connector::cacheSerializedFieldValues(mixed $fields, mixed $values): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fields` | **mixed** |  |
| `values` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
