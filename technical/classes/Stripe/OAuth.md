---
title: \Stripe\OAuth
footer: false
---

# OAuth





* Full name: `\Stripe\OAuth`



## Methods

### authorizeUrl

Generates a URL to Stripe's OAuth form.

```php
public static OAuth::authorizeUrl(null|array $params = null, null|array $opts = null): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array** |  |


**Return Value:**

the URL to Stripe's OAuth form



---
### token

Use an authoriztion code to connect an account to your platform and
fetch the user's credentials.

```php
public static OAuth::token(null|array $params = null, null|array $opts = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array** |  |


**Return Value:**

object containing the response from the API



---
### deauthorize

Disconnects an account from your platform.

```php
public static OAuth::deauthorize(null|array $params = null, null|array $opts = null): \Stripe\StripeObject
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **null|array** |  |
| `opts` | **null|array** |  |


**Return Value:**

object containing the response from the API



---
### _getClientId



```php
private static OAuth::_getClientId(mixed $params = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `params` | **mixed** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
