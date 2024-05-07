---
title: \Stripe\Util\RandomGenerator
footer: false
---

# RandomGenerator

A basic random generator. This is in a separate class so we the generator
can be injected as a dependency and replaced with a mock in tests.



* Full name: `\Stripe\Util\RandomGenerator`



## Methods

### randFloat

Returns a random value between 0 and $max.

```php
public RandomGenerator::randFloat(float $max = 1.0): float
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `max` | **float** | (optional) |


**Return Value:**





---
### uuid

Returns a v4 UUID.

```php
public RandomGenerator::uuid(): string
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
