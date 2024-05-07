---
title: \Stripe\WebhookSignature
footer: false
---

# WebhookSignature





* Full name: `\Stripe\WebhookSignature`



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Stripe\WebhookSignature::EXPECTED_SCHEME`||&#039;v1&#039;|

## Methods

### verifyHeader

Verifies the signature header sent by Stripe. Throws an
Exception\SignatureVerificationException exception if the verification fails for
any reason.

```php
public static WebhookSignature::verifyHeader(string $payload, string $header, string $secret, int $tolerance = null): bool
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `payload` | **string** | the payload sent by Stripe |
| `header` | **string** | the contents of the signature header sent by<br />Stripe |
| `secret` | **string** | secret used to generate the signature |
| `tolerance` | **int** | maximum difference allowed between the header&#039;s<br />timestamp and the current time |


**Return Value:**





---
### getTimestamp

Extracts the timestamp in a signature header.

```php
private static WebhookSignature::getTimestamp(string $header): int
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `header` | **string** | the signature header |


**Return Value:**

the timestamp contained in the header, or -1 if no valid
timestamp is found



---
### getSignatures

Extracts the signatures matching a given scheme in a signature header.

```php
private static WebhookSignature::getSignatures(string $header, string $scheme): array
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `header` | **string** | the signature header |
| `scheme` | **string** | the signature scheme to look for |


**Return Value:**

the list of signatures matching the provided scheme



---
### computeSignature

Computes the signature for a given payload and secret.

```php
private static WebhookSignature::computeSignature(string $payload, string $secret): string
```

The current scheme used by Stripe ("v1") is HMAC/SHA-256.

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `payload` | **string** | the payload to sign |
| `secret` | **string** | the secret used to generate the signature |


**Return Value:**

the signature as a string



---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
