---
title: \Leantime\Plugins\Billing\Models\Customer
footer: false
---

# Customer





* Full name: `\Leantime\Plugins\Billing\Models\Customer`



## Methods

### __construct



```php
public Customer::__construct(\Leantime\Core\Environment $config): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Environment** |  |


**Return Value:**





---
### mapStripeCustomer



```php
public Customer::mapStripeCustomer(\Stripe\Customer $customer): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `customer` | **\Stripe\Customer** |  |


**Return Value:**





---
### mapStripeCustomerPaymentDetails



```php
public Customer::mapStripeCustomerPaymentDetails(?\Stripe\PaymentMethod $paymentMethod): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `paymentMethod` | **?\Stripe\PaymentMethod** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
