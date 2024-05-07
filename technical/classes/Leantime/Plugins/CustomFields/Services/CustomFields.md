---
title: \Leantime\Plugins\CustomFields\Services\CustomFields
footer: false
---

# CustomFields





* Full name: `\Leantime\Plugins\CustomFields\Services\CustomFields`



## Methods

### __construct



```php
public CustomFields::__construct(\Leantime\Plugins\CustomFields\Repositories\CustomFields $customFieldsRepo, \Leantime\Core\Environment $config): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `customFieldsRepo` | **\Leantime\Plugins\CustomFields\Repositories\CustomFields** |  |
| `config` | **\Leantime\Core\Environment** |  |


**Return Value:**





---
### install

Install the custom fields plugin DB if necessary.

```php
public CustomFields::install(): bool|array
```









**Return Value:**





---
### uninstall

Remove the custom fields plugin DB.

```php
public CustomFields::uninstall(): bool
```









**Return Value:**





---
### getAll

Get all custom fields.

```php
public CustomFields::getAll(): \Leantime\Plugins\CustomFields\Models\CustomField[]
```









**Return Value:**





---
### save

Save fields

```php
public CustomFields::save(\Leantime\Plugins\CustomFields\Models\CustomField[] $fields): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fields` | **\Leantime\Plugins\CustomFields\Models\CustomField[]** |  |


**Return Value:**





---
### populateCustomField



```php
public CustomFields::populateCustomField(\Leantime\Plugins\CustomFields\Contracts\ConditionLocationsEnum $entityType, int $entityId, int $fieldId, mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `entityType` | **\Leantime\Plugins\CustomFields\Contracts\ConditionLocationsEnum** |  |
| `entityId` | **int** |  |
| `fieldId` | **int** |  |
| `value` | **mixed** |  |


**Return Value:**





---
### getAllForTicket

Get all custom fields for a given ticket.

```php
public CustomFields::getAllForTicket(\Leantime\Domain\Tickets\Models\Tickets $ticket): \Leantime\Plugins\CustomFields\Models\CustomField[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `ticket` | **\Leantime\Domain\Tickets\Models\Tickets** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
