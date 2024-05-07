---
title: \Leantime\Core\Application
footer: false
---

# Application

Application Class - IoC Container for the application



* Full name: `\Leantime\Core\Application`
* Parent class: [Container](../../../classes.md)



## Methods

### hasBeenBootstrapped

Check if application has been bootstrapped

```php
public static Application::hasBeenBootstrapped(): bool
```



* This method is **static**.





**Return Value:**





---
### setHasBeenBootstrapped

Set the application as having been bootstrapped

```php
public static Application::setHasBeenBootstrapped(): \Leantime\Core\Application
```



* This method is **static**.





**Return Value:**





---
### getNamespace

Get the application namespace

```php
public Application::getNamespace(bool $includeSuffix = true): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `includeSuffix` | **bool** |  |


**Return Value:**




**See Also:**

* \Illuminate\Contracts\Foundation\Application::getNamespace() - 

---
### isDownForMaintenance

Checks whether the application is down for maintenance

```php
public Application::isDownForMaintenance(): bool
```









**Return Value:**





---
### environment

Gets the current environment

```php
public Application::environment(): string
```









**Return Value:**





---
### basePath

Gets the base path of the application

```php
public Application::basePath(): string
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
