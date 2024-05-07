---
title: \Composer\Autoload\ClassLoader
footer: false
---

# ClassLoader

ClassLoader implements a PSR-0, PSR-4 and classmap class loader.

$loader = new \Composer\Autoload\ClassLoader();

    // register classes with namespaces
    $loader->add('Symfony\Component', __DIR__.'/component');
    $loader->add('Symfony',           __DIR__.'/framework');

    // activate the autoloader
    $loader->register();

    // to enable searching the include path (eg. for PEAR packages)
    $loader->setUseIncludePath(true);

In this example, if you try to use a class in the Symfony\Component
namespace or one of its children (Symfony\Component\Console for instance),
the autoloader will first look for the class under the component/
directory, and it will then fallback to the framework/ directory if not
found before giving up.

This class is loosely based on the Symfony UniversalClassLoader.

* Full name: `\Composer\Autoload\ClassLoader`

**See Also:**

* https://www.php-fig.org/psr/psr-0/ - 
* https://www.php-fig.org/psr/psr-4/ - 



## Methods

### __construct



```php
public ClassLoader::__construct(string|null $vendorDir = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `vendorDir` | **string|null** |  |


**Return Value:**





---
### getPrefixes



```php
public ClassLoader::getPrefixes(): array&lt;string,list&lt;string&gt;&gt;
```









**Return Value:**





---
### getPrefixesPsr4



```php
public ClassLoader::getPrefixesPsr4(): array&lt;string,list&lt;string&gt;&gt;
```









**Return Value:**





---
### getFallbackDirs



```php
public ClassLoader::getFallbackDirs(): list&lt;string&gt;
```









**Return Value:**





---
### getFallbackDirsPsr4



```php
public ClassLoader::getFallbackDirsPsr4(): list&lt;string&gt;
```









**Return Value:**





---
### getClassMap



```php
public ClassLoader::getClassMap(): array&lt;string,string&gt;
```









**Return Value:**

Array of classname => path



---
### addClassMap



```php
public ClassLoader::addClassMap(array&lt;string,string&gt; $classMap): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `classMap` | **array<string,string>** | Class to filename map |


**Return Value:**





---
### add

Registers a set of PSR-0 directories for a given prefix, either
appending or prepending to the ones previously set for this prefix.

```php
public ClassLoader::add(string $prefix, list&lt;string&gt;|string $paths, bool $prepend = false): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `prefix` | **string** | The prefix |
| `paths` | **list<string>|string** | The PSR-0 root directories |
| `prepend` | **bool** | Whether to prepend the directories |


**Return Value:**





---
### addPsr4

Registers a set of PSR-4 directories for a given namespace, either
appending or prepending to the ones previously set for this namespace.

```php
public ClassLoader::addPsr4(string $prefix, list&lt;string&gt;|string $paths, bool $prepend = false): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `prefix` | **string** | The prefix/namespace, with trailing &#039;\\&#039; |
| `paths` | **list<string>|string** | The PSR-4 base directories |
| `prepend` | **bool** | Whether to prepend the directories |


**Return Value:**





---
### set

Registers a set of PSR-0 directories for a given prefix,
replacing any others previously set for this prefix.

```php
public ClassLoader::set(string $prefix, list&lt;string&gt;|string $paths): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `prefix` | **string** | The prefix |
| `paths` | **list<string>|string** | The PSR-0 base directories |


**Return Value:**





---
### setPsr4

Registers a set of PSR-4 directories for a given namespace,
replacing any others previously set for this namespace.

```php
public ClassLoader::setPsr4(string $prefix, list&lt;string&gt;|string $paths): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `prefix` | **string** | The prefix/namespace, with trailing &#039;\\&#039; |
| `paths` | **list<string>|string** | The PSR-4 base directories |


**Return Value:**





---
### setUseIncludePath

Turns on searching the include path for class files.

```php
public ClassLoader::setUseIncludePath(bool $useIncludePath): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `useIncludePath` | **bool** |  |


**Return Value:**





---
### getUseIncludePath

Can be used to check if the autoloader uses the include path to check
for classes.

```php
public ClassLoader::getUseIncludePath(): bool
```









**Return Value:**





---
### setClassMapAuthoritative

Turns off searching the prefix and fallback directories for classes
that have not been registered with the class map.

```php
public ClassLoader::setClassMapAuthoritative(bool $classMapAuthoritative): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `classMapAuthoritative` | **bool** |  |


**Return Value:**





---
### isClassMapAuthoritative

Should class lookup fail if not found in the current class map?

```php
public ClassLoader::isClassMapAuthoritative(): bool
```









**Return Value:**





---
### setApcuPrefix

APCu prefix to use to cache found/not-found classes, if the extension is enabled.

```php
public ClassLoader::setApcuPrefix(string|null $apcuPrefix): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `apcuPrefix` | **string|null** |  |


**Return Value:**





---
### getApcuPrefix

The APCu prefix in use, or null if APCu caching is not enabled.

```php
public ClassLoader::getApcuPrefix(): string|null
```









**Return Value:**





---
### register

Registers this instance as an autoloader.

```php
public ClassLoader::register(bool $prepend = false): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `prepend` | **bool** | Whether to prepend the autoloader or not |


**Return Value:**





---
### unregister

Unregisters this instance as an autoloader.

```php
public ClassLoader::unregister(): void
```









**Return Value:**





---
### loadClass

Loads the given class or interface.

```php
public ClassLoader::loadClass(string $class): true|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `class` | **string** | The name of the class |


**Return Value:**

True if loaded, null otherwise



---
### findFile

Finds the path to the file where the class is defined.

```php
public ClassLoader::findFile(string $class): string|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `class` | **string** | The name of the class |


**Return Value:**

The path if found, false otherwise



---
### getRegisteredLoaders

Returns the currently registered loaders keyed by their corresponding vendor directories.

```php
public static ClassLoader::getRegisteredLoaders(): array&lt;string,self&gt;
```



* This method is **static**.





**Return Value:**





---
### findFileWithExtension



```php
private ClassLoader::findFileWithExtension(string $class, string $ext): string|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `class` | **string** |  |
| `ext` | **string** |  |


**Return Value:**





---
### initializeIncludeClosure



```php
private static ClassLoader::initializeIncludeClosure(): void
```



* This method is **static**.





**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
