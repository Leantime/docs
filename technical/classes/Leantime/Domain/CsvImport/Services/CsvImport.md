---
title: \Leantime\Domain\CsvImport\Services\CsvImport
footer: false
---

# CsvImport





* Full name: `\Leantime\Domain\CsvImport\Services\CsvImport`
* Parent class: [\Leantime\Domain\Connector\Models\Provider](../../Connector/Models/Provider.md)
* This class implements: \Leantime\Domain\Connector\Services\ProviderIntegration



## Methods

### __construct



```php
public CsvImport::__construct(): mixed
```









**Return Value:**





---
### connect



```php
public CsvImport::connect(): \Symfony\Component\HttpFoundation\Response
```









**Return Value:**





---
### sync



```php
public CsvImport::sync(\Leantime\Domain\Connector\Models\Entity $Entity): true
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `Entity` | **\Leantime\Domain\Connector\Models\Entity** |  |


**Return Value:**





---
### getFields



```php
public CsvImport::getFields(): array|mixed
```









**Return Value:**





---
### setFields



```php
public CsvImport::setFields(array $fields): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `fields` | **array** |  |


**Return Value:**





---
### getEntities



```php
public CsvImport::getEntities(): array
```









**Return Value:**





---
### getValues



```php
public CsvImport::getValues(\Leantime\Domain\Connector\Models\Entity $Entity): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `Entity` | **\Leantime\Domain\Connector\Models\Entity** |  |


**Return Value:**





---
### geValues



```php
public CsvImport::geValues(): mixed
```









**Return Value:**





---


## Inherited methods

### __construct



```php
public Provider::__construct(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
