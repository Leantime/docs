---
title: \Stripe\Service\Checkout\CheckoutServiceFactory
footer: false
---

# CheckoutServiceFactory

Service factory class for API resources in the Checkout namespace.



* Full name: `\Stripe\Service\Checkout\CheckoutServiceFactory`
* Parent class: [\Stripe\Service\AbstractServiceFactory](../AbstractServiceFactory.md)



## Methods

### getServiceClass



```php
protected CheckoutServiceFactory::getServiceClass(mixed $name): null|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |


**Return Value:**





---


## Inherited methods

### __construct



```php
public AbstractServiceFactory::__construct(\Stripe\StripeClientInterface $client): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `client` | **\Stripe\StripeClientInterface** |  |


**Return Value:**





---
### getServiceClass



```php
protected AbstractServiceFactory::getServiceClass(string $name): null|string
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **string** |  |


**Return Value:**





---
### __get



```php
public AbstractServiceFactory::__get(string $name): null|\Stripe\Service\AbstractService|\Stripe\Service\AbstractServiceFactory
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **string** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
