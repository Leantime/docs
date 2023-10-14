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


---
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
