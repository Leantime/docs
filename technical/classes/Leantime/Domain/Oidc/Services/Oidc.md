---
title: \Leantime\Domain\Oidc\Services\Oidc
footer: false
---

# Oidc




`\Leantime\Domain\Oidc\Services\Oidc`




## Methods

### __construct



```php
public Oidc::__construct(\Leantime\Core\Configuration\Environment $config, \Leantime\Core\Language $language, \Leantime\Domain\Auth\Services\Auth $authService, \Leantime\Domain\Users\Repositories\Users $userRepo): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `config` | **\Leantime\Core\Configuration\Environment** |  |
| `language` | **\Leantime\Core\Language** |  |
| `authService` | **\Leantime\Domain\Auth\Services\Auth** |  |
| `userRepo` | **\Leantime\Domain\Users\Repositories\Users** |  |


**Return Value:**





---
### trimTrailingSlash



```php
private Oidc::trimTrailingSlash(string $str): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | **string** |  |


**Return Value:**





---
### buildLoginUrl



```php
public Oidc::buildLoginUrl(): string
```









**Return Value:**





---
### getAuthUrl



```php
private Oidc::getAuthUrl(): string
```









**Return Value:**





---
### callback



```php
public Oidc::callback(string $code, string $state): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `code` | **string** |  |
| `state` | **string** |  |


**Return Value:**





---
### pollUserInfo



```php
private Oidc::pollUserInfo(string $token): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `token` | **string** |  |


**Return Value:**





---
### login



```php
private Oidc::login(array $userInfo): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userInfo` | **array** |  |


**Return Value:**





---
### getUserRole



```php
private Oidc::getUserRole(array $userInfo, array $user = []): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userInfo` | **array** |  |
| `user` | **array** |  |


**Return Value:**





---
### requestTokens



```php
private Oidc::requestTokens(string $code): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `code` | **string** |  |


**Return Value:**





---
### readMultilayerKey



```php
private Oidc::readMultilayerKey(array $topic, string $key): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `topic` | **array** |  |
| `key` | **string** |  |


**Return Value:**





---
### decodeJWT



```php
private Oidc::decodeJWT(string $jwt): array|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `jwt` | **string** |  |


**Return Value:**





---
### getAlgorythm



```php
private Oidc::getAlgorythm(string $header): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `header` | **string** |  |


**Return Value:**





---
### getPublicKey



```php
private Oidc::getPublicKey(string $kid): \OpenSSLAsymmetricKey|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `kid` | **string** |  |


**Return Value:**





---
### getJwksUrl



```php
private Oidc::getJwksUrl(): string
```









**Return Value:**





---
### getTokenUrl



```php
private Oidc::getTokenUrl(): string
```









**Return Value:**





---
### loadEndpoints



```php
private Oidc::loadEndpoints(): bool
```









**Return Value:**





---
### getMultiUrl



```php
private Oidc::getMultiUrl(string $urls, string $token = &#039;&#039;): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `urls` | **string** |  |
| `token` | **string** |  |


**Return Value:**





---
### buildRedirectUrl



```php
private Oidc::buildRedirectUrl(): string
```









**Return Value:**





---
### generateState



```php
private Oidc::generateState(): string
```









**Return Value:**





---
### verifyState



```php
private Oidc::verifyState(string $state): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `state` | **string** |  |


**Return Value:**





---
### encodeBase64Url



```php
private Oidc::encodeBase64Url(string $value): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | **string** |  |


**Return Value:**





---
### decodeBase64Url



```php
private Oidc::decodeBase64Url(string $value): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | **string** |  |


**Return Value:**





---
### displayError



```php
private Oidc::displayError(string $translationKey, string $values): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `translationKey` | **string** |  |
| `values` | **string** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
