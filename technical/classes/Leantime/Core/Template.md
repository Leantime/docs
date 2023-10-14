---
title: \Leantime\Core\Template
footer: false
---

# Template

Template class - Template routing



* Full name: `\Leantime\Core\Template`



## Methods

### __construct

__construct - get instance of frontcontroller

```php
public Template::__construct(\Leantime\Core\Theme $theme, \Leantime\Core\Language $language, \Leantime\Core\Frontcontroller $frontcontroller, \Leantime\Core\IncomingRequest $incomingRequest, \Leantime\Core\Environment $config, \Leantime\Core\AppSettings $settings, \Leantime\Domain\Auth\Services\Auth $login, \Leantime\Domain\Auth\Models\Roles $roles, \Illuminate\Contracts\View\Factory|null $viewFactory = null, \Illuminate\View\Compilers\Compiler|null $bladeCompiler = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `theme` | **\Leantime\Core\Theme** |  |
| `language` | **\Leantime\Core\Language** |  |
| `frontcontroller` | **\Leantime\Core\Frontcontroller** |  |
| `incomingRequest` | **\Leantime\Core\IncomingRequest** |  |
| `config` | **\Leantime\Core\Environment** |  |
| `settings` | **\Leantime\Core\AppSettings** |  |
| `login` | **\Leantime\Domain\Auth\Services\Auth** |  |
| `roles` | **\Leantime\Domain\Auth\Models\Roles** |  |
| `viewFactory` | **\Illuminate\Contracts\View\Factory|null** |  |
| `bladeCompiler` | **\Illuminate\View\Compilers\Compiler|null** |  |


**Return Value:**





---
### setupBlade

Create View Factory capable of rendering PHP and Blade templates

```php
public Template::setupBlade(\Leantime\Core\Application $app, \Illuminate\Events\Dispatcher $eventDispatcher): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `app` | **\Leantime\Core\Application** |  |
| `eventDispatcher` | **\Illuminate\Events\Dispatcher** |  |


**Return Value:**





---
### attachComposers

attachComposers - attach view composers

```php
public Template::attachComposers(): void
```









**Return Value:**





---
### setupDirectives

setupDirectives - setup blade directives

```php
public Template::setupDirectives(): void
```









**Return Value:**





---
### setupGlobalVars

setupGlobalVars - setup global vars

```php
public Template::setupGlobalVars(): void
```









**Return Value:**





---
### assign

assign - assign variables in the action for template

```php
public Template::assign(string $name, mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **string** | Name of variable |
| `value` | **mixed** | Value of variable |


**Return Value:**





---
### setNotification

setNotification - assign errors to the template

```php
public Template::setNotification(string $msg, string $type, string $event_id = &#039;&#039;): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `msg` | **string** |  |
| `type` | **string** |  |
| `event_id` | **string** | as a string for further identification |


**Return Value:**





---
### getTemplatePath

getTemplatePath - Find template in custom and src directories

```php
public Template::getTemplatePath(string $namespace, string $path): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `namespace` | **string** | The namespace the template is for. |
| `path` | **string** | The path to the template. |


**Return Value:**

Full template path or false if file does not exist



---
### displayFragment

gives HTMX response

```php
public Template::displayFragment(string $view, string $fragment = &#039;&#039;): never
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `view` | **string** | The blade view path. |
| `fragment` | **string** | The fragment key. |


**Return Value:**





---
### display

display - display template from folder template including main layout wrapper

```php
public Template::display(string $template, string $layout = &quot;app&quot;): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `template` | **string** |  |
| `layout` | **string** |  |


**Return Value:**





---
### confirmLayoutName



```php
protected Template::confirmLayoutName( $layoutName,  $template): bool|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `layoutName` | **** |  |
| `template` | **** |  |


**Return Value:**





---
### displayJson

displayJson - returns json data

```php
public Template::displayJson( $jsonContent): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `jsonContent` | **** |  |


**Return Value:**





---
### displayPartial

display - display only the template from the template folder without a wrapper

```php
public Template::displayPartial( $template): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `template` | **** |  |


**Return Value:**





---
### get

get - get assigned values

```php
public Template::get(string $name): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **string** |  |


**Return Value:**





---
### getNotification

getNotification - pulls notification from the current session

```php
public Template::getNotification(): array
```









**Return Value:**





---
### displaySubmodule

displaySubmodule - display a submodule for a given module

```php
public Template::displaySubmodule(string $alias): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `alias` | **string** |  |


**Return Value:**





---
### displayNotification

displayNotification - display notification

```php
public Template::displayNotification(): string
```









**Return Value:**





---
### displayInlineNotification

displayInlineNotification - display notification

```php
public Template::displayInlineNotification(): string
```









**Return Value:**





---
### redirect

redirect - redirect to a given url

```php
public Template::redirect(string $url): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | **string** |  |


**Return Value:**





---
### getSubdomain

getSubdomain - get subdomain from url

```php
public Template::getSubdomain(): string
```









**Return Value:**





---
### __

__ - returns a language specific string. wraps language class method

```php
public Template::__(string $index): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `index` | **string** |  |


**Return Value:**





---
### e

e - echos and escapes content

```php
public Template::e(string|null $content): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | **string|null** |  |


**Return Value:**





---
### escape

escape - escapes content

```php
public Template::escape(string|null $content): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | **string|null** |  |


**Return Value:**





---
### escapeMinimal

escapeMinimal - escapes content

```php
public Template::escapeMinimal(string|null $content): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `content` | **string|null** |  |


**Return Value:**





---
### getFormattedDateString

getFormattedDateString - returns a language specific formatted date string. wraps language class method

```php
public Template::getFormattedDateString(mixed $date): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **mixed** |  |


**Return Value:**





---
### getFormattedTimeString

getFormattedTimeString - returns a language specific formatted time string. wraps language class method

```php
public Template::getFormattedTimeString(string $date): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **string** |  |


**Return Value:**





---
### get24HourTimestring

getFormattedDateTimeString - returns a language specific formatted date and time string. wraps language class method

```php
public Template::get24HourTimestring(string $dateTime): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateTime` | **string** |  |


**Return Value:**





---
### truncate

truncate - truncate text

```php
public Template::truncate(string $html, int $maxLength = 100, string $ending = &#039;(...)&#039;, bool $exact = true, bool $considerHtml = false): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `html` | **string** |  |
| `maxLength` | **int** |  |
| `ending` | **string** |  |
| `exact` | **bool** |  |
| `considerHtml` | **bool** |  |


**Return Value:**




**See Also:**

* https://stackoverflow.com/questions/1193500/truncate-text-containing-html-ignoring-tags - 

---
### convertRelativePaths

convertRelativePaths - convert relative paths to absolute paths

```php
public Template::convertRelativePaths(string|null $text): string|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string|null** |  |


**Return Value:**





---
### getModulePicture

getModulePicture - get module picture

```php
public Template::getModulePicture(): string
```









**Return Value:**





---
### displayLink

displayLink - display link

```php
public Template::displayLink(string $module, string $name, array|null $params = null, array|null $attribute = null): false|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `module` | **string** |  |
| `name` | **string** |  |
| `params` | **array|null** |  |
| `attribute` | **array|null** |  |


**Return Value:**





---
### patchDownloadUrlToFilenameOrAwsUrl

patchDownloadUrlToFilenameOrAwsUrl - Replace all local download.php references in <img src=""> tags
by either local filenames or AWS URLs that can be accesse without being authenticated

```php
public Template::patchDownloadUrlToFilenameOrAwsUrl(string $textHtml): string
```

Note: This patch is required by the PDF generating engine as it retrieves URL data without being
authenticated






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `textHtml` | **string** | HTML text, potentially containing &lt;img srv=&quot;https://local.domain/download.php?xxxx&quot;&gt; tags |


**Return Value:**

HTML text with the https://local.domain/download.php?xxxx replaced by either full qualified
local filenames or AWS URLs



---
### dispatchTplEvent



```php
public Template::dispatchTplEvent(string $hookName, mixed $payload = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hookName` | **string** |  |
| `payload` | **mixed** |  |


**Return Value:**





---
### dispatchTplFilter



```php
public Template::dispatchTplFilter(string $hookName, mixed $payload, array $available_params = []): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hookName` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **array** |  |


**Return Value:**





---
### dispatchTplHook



```php
private Template::dispatchTplHook(string $type, string $hookName, array $payload, array $available_params = []): null|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **string** |  |
| `hookName` | **string** |  |
| `payload` | **array** |  |
| `available_params` | **array** |  |


**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static Eventhelpers::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### dispatch_filter

dispatches a filter with context

```php
public static Eventhelpers::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hook` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **mixed** |  |
| `function` | **string|int|null** |  |


**Return Value:**





---
### get_event_context

Gets the context of the event

```php
private static Eventhelpers::get_event_context( $function): string
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **** |  |


**Return Value:**





---
### set_class_context

Gets the class Context based on path, this uses the same method as the autoloader
Helps create unique strings for events/filters

```php
private static Eventhelpers::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static Eventhelpers::get_function_context(null $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **null** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-10-14 using [phpDocumentor](http://www.phpdoc.org/)
