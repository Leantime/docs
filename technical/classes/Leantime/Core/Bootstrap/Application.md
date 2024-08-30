---
title: \Leantime\Core\Bootstrap\Application
footer: false
---

# Application

Application Class - IoC Container for the application



* Full name: `\Leantime\Core\Bootstrap\Application`
* Parent class: [Container](../../../../classes.md)



## Methods

### __construct

Constructor method for the class.

```php
public Application::__construct(): void
```

Initializes the object and sets up the required dependencies and bindings.
This method is automatically called when a new instance of the class is created.







**Return Value:**





---
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
public static Application::setHasBeenBootstrapped(): \Leantime\Core\Bootstrap\Application
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
### registerCoreBindings

Register the core bindings for the application.

```php
protected Application::registerCoreBindings(): void
```

This method sets the application instance, sets up singletons for some core classes,
and registers the ModulemanagerService as a singleton.







**Return Value:**





---
### registerCoreAliases

Register core aliases for the application.

```php
private Application::registerCoreAliases(): void
```









**Return Value:**





---
### registerBaseServiceProviders

Register all of the base service providers.

```php
protected Application::registerBaseServiceProviders(): void
```









**Return Value:**





---
### setUrlPathConstants

Set the URL path constants.

```php
protected Application::setUrlPathConstants(): void
```









**Return Value:**





---
### bindRequest

Bind the incoming request to the application.

```php
public Application::bindRequest(): void
```

This method parses the headers and creates an instance of the appropriate request class based on the headers.
The request class is then bound to the container as a singleton.







**Return Value:**





---
### register

Register a service provider with the application.

```php
public Application::register(\Illuminate\Support\ServiceProvider|string $provider, bool $force = false): \Illuminate\Support\ServiceProvider
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `provider` | **\Illuminate\Support\ServiceProvider|string** |  |
| `force` | **bool** |  |


**Return Value:**





---
### getProvider

Get the registered service provider instance if it exists.

```php
public Application::getProvider(\Illuminate\Support\ServiceProvider|string $provider): \Illuminate\Support\ServiceProvider|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `provider` | **\Illuminate\Support\ServiceProvider|string** |  |


**Return Value:**





---
### getProviders

Get the registered service provider instances if any exist.

```php
public Application::getProviders(\Illuminate\Support\ServiceProvider|string $provider): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `provider` | **\Illuminate\Support\ServiceProvider|string** |  |


**Return Value:**





---
### resolveProvider

Resolve a service provider instance from the class name.

```php
public Application::resolveProvider(string $provider): \Illuminate\Support\ServiceProvider
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `provider` | **string** |  |


**Return Value:**





---
### markAsRegistered

Mark the given provider as registered.

```php
protected Application::markAsRegistered(\Illuminate\Support\ServiceProvider $provider): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `provider` | **\Illuminate\Support\ServiceProvider** |  |


**Return Value:**





---
### loadDeferredProviders

Load and boot all of the remaining deferred providers.

```php
public Application::loadDeferredProviders(): void
```









**Return Value:**





---
### loadDeferredProvider

Load the provider for a deferred service.

```php
public Application::loadDeferredProvider(string $service): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `service` | **string** |  |


**Return Value:**





---
### registerDeferredProvider

Register a deferred provider and service.

```php
public Application::registerDeferredProvider(string $provider, string|null $service = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `provider` | **string** |  |
| `service` | **string|null** |  |


**Return Value:**





---
### make

Resolve the given type from the container.

```php
public Application::make(string $abstract, array $parameters = []): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `abstract` | **string** |  |
| `parameters` | **array** |  |


**Return Value:**





---
### resolve

Resolve the given type from the container.

```php
protected Application::resolve(string $abstract, array $parameters = [], bool $raiseEvents = true): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `abstract` | **string** |  |
| `parameters` | **array** |  |
| `raiseEvents` | **bool** |  |


**Return Value:**





---
### loadDeferredProviderIfNeeded

Load the deferred provider if the given type is a deferred service and the instance has not been loaded.

```php
protected Application::loadDeferredProviderIfNeeded(string $abstract): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `abstract` | **string** |  |


**Return Value:**





---
### bound

Determine if the given abstract type has been bound.

```php
public Application::bound(string $abstract): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `abstract` | **string** |  |


**Return Value:**





---
### isBooted

Determine if the application has booted.

```php
public Application::isBooted(): bool
```









**Return Value:**





---
### boot

Boot the application's service providers.

```php
public Application::boot(): void
```









**Return Value:**





---
### bootProvider

Boot the given service provider.

```php
protected Application::bootProvider(\Illuminate\Support\ServiceProvider $provider): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `provider` | **\Illuminate\Support\ServiceProvider** |  |


**Return Value:**





---
### booting

Register a new boot listener.

```php
public Application::booting(callable $callback): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `callback` | **callable** |  |


**Return Value:**





---
### booted

Register a new "booted" listener.

```php
public Application::booted(callable $callback): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `callback` | **callable** |  |


**Return Value:**





---
### getLoadedProviders

Get the service providers that have been loaded.

```php
public Application::getLoadedProviders(): array&lt;string,bool&gt;
```









**Return Value:**





---
### providerIsLoaded

Determine if the given service provider is loaded.

```php
public Application::providerIsLoaded(string $provider): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `provider` | **string** |  |


**Return Value:**





---
### getDeferredServices

Get the application's deferred services.

```php
public Application::getDeferredServices(): array
```









**Return Value:**





---
### setDeferredServices

Set the application's deferred services.

```php
public Application::setDeferredServices(array $services): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `services` | **array** |  |


**Return Value:**





---
### addDeferredServices

Add an array of services to the application's deferred services.

```php
public Application::addDeferredServices(array $services): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `services` | **array** |  |


**Return Value:**





---
### isDeferredService

Determine if the given service is a deferred service.

```php
public Application::isDeferredService(string $service): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `service` | **string** |  |


**Return Value:**





---
### fireAppCallbacks

Call the booting callbacks for the application.

```php
protected Application::fireAppCallbacks(callable[]& $callbacks): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `callbacks` | **callable[]** |  |


**Return Value:**





---
### runningUnitTests



```php
public Application::runningUnitTests(): mixed
```









**Return Value:**





---
### flush

Flush the container of all bindings and resolved instances.

```php
public Application::flush(): void
```









**Return Value:**





---
### storagePath



```php
public Application::storagePath(mixed $path): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `path` | **mixed** |  |


**Return Value:**





---
### runningInConsole



```php
public Application::runningInConsole(): mixed
```









**Return Value:**





---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
