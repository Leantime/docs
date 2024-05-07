---
title: \Leantime\Plugins\CustomFields\Repositories\CustomFields
footer: false
---

# CustomFields





* Full name: `\Leantime\Plugins\CustomFields\Repositories\CustomFields`



## Methods

### __construct



```php
public CustomFields::__construct(\Leantime\Core\Db $db): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `db` | **\Leantime\Core\Db** |  |


**Return Value:**





---
### install



```php
public CustomFields::install(): bool|array
```









**Return Value:**





---
### uninstall

Uninstall the plugin.

```php
public CustomFields::uninstall(): void
```









**Return Value:**





---
### getAllCustomFields

Gets all the custom fields for a given scenario.

```php
public CustomFields::getAllCustomFields(array $conditions): \Leantime\Plugins\CustomFields\Models\CustomField[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `conditions` | **array** | The conditions to be used in the query. |


**Return Value:**





---
### getCustomFieldsForEntity

Get custom field values for a given entity.

```php
public CustomFields::getCustomFieldsForEntity(\Leantime\Plugins\CustomFields\Contracts\ConditionEntitiesEnum $entity, int $entityId): \Leantime\Plugins\CustomFields\Models\CustomField[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `entity` | **\Leantime\Plugins\CustomFields\Contracts\ConditionEntitiesEnum** | The entity to get the custom fields for. |
| `entityId` | **int** | The entity id to get the custom fields for. |


**Return Value:**





---
### createCustomField

Create custom field.

```php
public CustomFields::createCustomField(\Leantime\Plugins\CustomFields\Models\CustomField $customField): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `customField` | **\Leantime\Plugins\CustomFields\Models\CustomField** | The custom field to create. |


**Return Value:**





---
### updateCustomField

Update custom field.

```php
public CustomFields::updateCustomField(\Leantime\Plugins\CustomFields\Models\CustomField $customField): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `customField` | **\Leantime\Plugins\CustomFields\Models\CustomField** | The custom field to update. |


**Return Value:**





---
### populateCustomField

Set custom field meta value for a given entity.

```php
public CustomFields::populateCustomField(\Leantime\Plugins\CustomFields\Contracts\ConditionLocationsEnum $location, int $entityId, int $fieldId, mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `location` | **\Leantime\Plugins\CustomFields\Contracts\ConditionLocationsEnum** |  |
| `entityId` | **int** | The entity id to set the custom field for. |
| `fieldId` | **int** |  |
| `value` | **mixed** | The value of the custom field. |


**Return Value:**





---
### getAll

Get all custom fields.

```php
public CustomFields::getAll(): \Leantime\Plugins\CustomFields\Models\CustomField[]
```









**Return Value:**





---
### customFieldExists

Check to see if the custom field exists.

```php
public CustomFields::customFieldExists(\Leantime\Plugins\CustomFields\Models\CustomField $customField): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `customField` | **\Leantime\Plugins\CustomFields\Models\CustomField** |  |


**Return Value:**





---
### deleteCustomField

Delete a custom field by object or id

```php
public CustomFields::deleteCustomField(\Leantime\Plugins\CustomFields\Models\CustomField|int $customField): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `customField` | **\Leantime\Plugins\CustomFields\Models\CustomField|int** |  |


**Return Value:**





---
### castRowsToCustomFields

Cast SQL results to CustomField objects.

```php
protected CustomFields::castRowsToCustomFields(array $rows): \Leantime\Plugins\CustomFields\Models\CustomField[]
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `rows` | **array** |  |


**Return Value:**





---
### tryUnserialize



```php
public CustomFields::tryUnserialize(?string $str): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | **?string** |  |


**Return Value:**





---
### isSerialized



```php
public CustomFields::isSerialized(?string $str, bool $strict = true): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | **?string** |  |
| `strict` | **bool** |  |


**Return Value:**




**See Also:**

* https://developer.wordpress.org/reference/functions/is_serialized/#Source_File - 

---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
