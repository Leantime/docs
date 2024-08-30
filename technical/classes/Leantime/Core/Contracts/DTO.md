---
title: \Leantime\Core\Contracts\DTO
footer: false
---

# DTO





* Full name: `\Leantime\Core\Contracts\DTO`



## Methods

### __construct



```php
public DTO::__construct(\Illuminate\Http\Client\Response|array $data): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `data` | **\Illuminate\Http\Client\Response|array** | The data to map to the DTO |


**Return Value:**





---
### validate

Validates values.

```php
private DTO::validate(string[] $params, mixed $value): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **string[]** | validations rules to apply to the value |
| `value` | **mixed** |  |


**Return Value:**




**See Also:**

* https://github.com/mattstauffer/Torch/tree/master/components/validation - 

---
### toArray

Gets the DTO data as multidimensional an array

```php
public DTO::toArray(): array
```









**Return Value:**





---
### all

Gets the DTO data as multidimensional an array

```php
public DTO::all(): array
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
