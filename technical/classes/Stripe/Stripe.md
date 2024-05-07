---
title: \Stripe\Stripe
footer: false
---

# Stripe

Class Stripe.



* Full name: `\Stripe\Stripe`



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Stripe\Stripe::VERSION`||&#039;7.128.0&#039;|

## Methods

### getApiKey



```php
public static Stripe::getApiKey(): string
```



* This method is **static**.





**Return Value:**

the API key used for requests



---
### getClientId



```php
public static Stripe::getClientId(): string
```



* This method is **static**.





**Return Value:**

the client_id used for Connect requests



---
### getLogger



```php
public static Stripe::getLogger(): \Stripe\Util\LoggerInterface
```



* This method is **static**.





**Return Value:**

the logger to which the library will
produce messages



---
### setLogger



```php
public static Stripe::setLogger(\Stripe\Util\LoggerInterface $logger): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `logger` | **\Stripe\Util\LoggerInterface** | the logger to which the library<br />will produce messages |


**Return Value:**





---
### setApiKey

Sets the API key to be used for requests.

```php
public static Stripe::setApiKey(string $apiKey): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `apiKey` | **string** |  |


**Return Value:**





---
### setClientId

Sets the client_id to be used for Connect requests.

```php
public static Stripe::setClientId(string $clientId): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `clientId` | **string** |  |


**Return Value:**





---
### getApiVersion



```php
public static Stripe::getApiVersion(): string
```



* This method is **static**.





**Return Value:**

The API version used for requests. null if we're using the
latest version.



---
### setApiVersion



```php
public static Stripe::setApiVersion(string $apiVersion): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `apiVersion` | **string** | the API version to use for requests |


**Return Value:**





---
### getDefaultCABundlePath



```php
private static Stripe::getDefaultCABundlePath(): string
```



* This method is **static**.





**Return Value:**





---
### getCABundlePath



```php
public static Stripe::getCABundlePath(): string
```



* This method is **static**.





**Return Value:**





---
### setCABundlePath



```php
public static Stripe::setCABundlePath(string $caBundlePath): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `caBundlePath` | **string** |  |


**Return Value:**





---
### getVerifySslCerts



```php
public static Stripe::getVerifySslCerts(): bool
```



* This method is **static**.





**Return Value:**





---
### setVerifySslCerts



```php
public static Stripe::setVerifySslCerts(bool $verify): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `verify` | **bool** |  |


**Return Value:**





---
### getAccountId



```php
public static Stripe::getAccountId(): null|string
```



* This method is **static**.





**Return Value:**

The Stripe account ID for connected account
requests



---
### setAccountId



```php
public static Stripe::setAccountId(string $accountId): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `accountId` | **string** | the Stripe account ID to set for connected<br />account requests |


**Return Value:**





---
### getAppInfo



```php
public static Stripe::getAppInfo(): null|array
```



* This method is **static**.





**Return Value:**

The application's information



---
### setAppInfo



```php
public static Stripe::setAppInfo(string $appName, null|string $appVersion = null, null|string $appUrl = null, null|string $appPartnerId = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `appName` | **string** | The application&#039;s name |
| `appVersion` | **null|string** | The application&#039;s version |
| `appUrl` | **null|string** | The application&#039;s URL |
| `appPartnerId` | **null|string** | The application&#039;s partner ID |


**Return Value:**





---
### getMaxNetworkRetries



```php
public static Stripe::getMaxNetworkRetries(): int
```



* This method is **static**.





**Return Value:**

Maximum number of request retries



---
### setMaxNetworkRetries



```php
public static Stripe::setMaxNetworkRetries(int $maxNetworkRetries): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `maxNetworkRetries` | **int** | Maximum number of request retries |


**Return Value:**





---
### getMaxNetworkRetryDelay



```php
public static Stripe::getMaxNetworkRetryDelay(): float
```



* This method is **static**.





**Return Value:**

Maximum delay between retries, in seconds



---
### getMaxRetryAfter



```php
public static Stripe::getMaxRetryAfter(): float
```



* This method is **static**.





**Return Value:**

Maximum delay between retries, in seconds, that will be respected from the Stripe API



---
### getInitialNetworkRetryDelay



```php
public static Stripe::getInitialNetworkRetryDelay(): float
```



* This method is **static**.





**Return Value:**

Initial delay between retries, in seconds



---
### getEnableTelemetry



```php
public static Stripe::getEnableTelemetry(): bool
```



* This method is **static**.





**Return Value:**

Whether client telemetry is enabled



---
### setEnableTelemetry



```php
public static Stripe::setEnableTelemetry(bool $enableTelemetry): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `enableTelemetry` | **bool** | Enables client telemetry.<br /><br />Client telemetry enables timing and request metrics to be sent back to Stripe as an HTTP Header<br />with the current request. This enables Stripe to do latency and metrics analysis without adding extra<br />overhead (such as extra network calls) on the client. |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
