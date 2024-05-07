---
title: \Stripe\Webhook
footer: false
---

# Webhook





* Full name: `\Stripe\Webhook`



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Stripe\Webhook::DEFAULT_TOLERANCE`||300|

## Methods

### constructEvent

Returns an Event instance using the provided JSON payload. Throws an
Exception\UnexpectedValueException if the payload is not valid JSON, and
an Exception\SignatureVerificationException if the signature
verification fails for any reason.

```php
public static Webhook::constructEvent(string $payload, string $sigHeader, string $secret, int $tolerance = self::DEFAULT_TOLERANCE): \Stripe\Event
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `payload` | **string** | the payload sent by Stripe |
| `sigHeader` | **string** | the contents of the signature header sent by<br />Stripe |
| `secret` | **string** | secret used to generate the signature |
| `tolerance` | **int** | maximum difference allowed between the header&#039;s<br />timestamp and the current time |


**Return Value:**

the Event instance



---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
