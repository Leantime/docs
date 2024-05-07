---
title: \Leantime\Plugins\Billing\Services\Billing
footer: false
---

# Billing





* Full name: `\Leantime\Plugins\Billing\Services\Billing`



## Methods

### __construct



```php
public Billing::__construct(\Leantime\Plugins\Billing\Repositories\Billing $billingRepository, \Leantime\Plugins\ClientConfigLoader\Services\ClientConfigLoader $clientConfig, \Leantime\Core\Environment $config): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `billingRepository` | **\Leantime\Plugins\Billing\Repositories\Billing** |  |
| `clientConfig` | **\Leantime\Plugins\ClientConfigLoader\Services\ClientConfigLoader** |  |
| `config` | **\Leantime\Core\Environment** |  |


**Return Value:**





---
### getFeatureList



```php
public Billing::getFeatureList(): mixed
```









**Return Value:**





---
### getCustomerAccount



```php
public Billing::getCustomerAccount(): mixed
```









**Return Value:**





---
### getSubscription



```php
public Billing::getSubscription(): mixed
```









**Return Value:**





---
### isFeatureAvailable



```php
public Billing::isFeatureAvailable(string $module): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** |  |


**Return Value:**





---
### showPaywallPicture



```php
public Billing::showPaywallPicture(): mixed
```









**Return Value:**





---
### hasActiveSubscription



```php
public Billing::hasActiveSubscription(): mixed
```









**Return Value:**





---
### exceededSubscriptionLimits



```php
public Billing::exceededSubscriptionLimits(): mixed
```









**Return Value:**





---
### getUsersBalance



```php
public Billing::getUsersBalance(): mixed
```









**Return Value:**





---
### canCreateUsers



```php
public Billing::canCreateUsers(): mixed
```









**Return Value:**





---
### getTicketsBalance



```php
public Billing::getTicketsBalance(): mixed
```









**Return Value:**





---
### getAllProducts



```php
public Billing::getAllProducts(): mixed
```









**Return Value:**





---
### getAllPricingPlans



```php
public Billing::getAllPricingPlans(): mixed
```









**Return Value:**





---
### updateSubscription



```php
public Billing::updateSubscription(mixed $params): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---
### isIncludedInSubscription



```php
public Billing::isIncludedInSubscription(): mixed
```









**Return Value:**





---
### getPaymentInfo



```php
public Billing::getPaymentInfo(): mixed
```









**Return Value:**





---
### updatePaymentMethod



```php
public Billing::updatePaymentMethod(mixed $source): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `source` | **mixed** |  |


**Return Value:**





---
### updateCustomerInfo



```php
public Billing::updateCustomerInfo(mixed $stripeCustomerId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `stripeCustomerId` | **mixed** |  |


**Return Value:**





---
### getFormattedUsedStorage



```php
public Billing::getFormattedUsedStorage(): mixed
```









**Return Value:**





---
### getRawUsedStorage



```php
public Billing::getRawUsedStorage(): mixed
```









**Return Value:**





---
### formatSizeUnits



```php
public Billing::formatSizeUnits(mixed $bytes): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `bytes` | **mixed** |  |


**Return Value:**





---
### cancelSubscription



```php
public Billing::cancelSubscription(): mixed
```









**Return Value:**





---
### createStripeCustomer



```php
public Billing::createStripeCustomer(mixed $token): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `token` | **mixed** |  |


**Return Value:**





---
### customerExists



```php
public Billing::customerExists(mixed $customerId): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `customerId` | **mixed** |  |


**Return Value:**





---
### clearSubscriptionCache



```php
public Billing::clearSubscriptionCache(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
