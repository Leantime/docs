---
title: \Stripe\Service\AbstractServiceFactory
footer: false
---

# AbstractServiceFactory

Abstract base class for all service factories used to expose service
instances through {@link \Stripe\StripeClient}.

Service factories serve two purposes:

1. Expose properties for all services through the `__get()` magic method.
2. Lazily initialize each service instance the first time the property for
   a given service is used.

* Full name: `\Stripe\Service\AbstractServiceFactory`



## Methods

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
