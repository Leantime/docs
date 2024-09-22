---
title: \Leantime\Core\Template
footer: false
---

# Template

Template class - Template routing


`\Leantime\Core\Template`




## Methods

### __construct

__construct - get instance of frontcontroller

```php
public Template::__construct(\Leantime\Core\Theme $theme, \Leantime\Core\Language $language, \Leantime\Core\Controller\Frontcontroller $frontcontroller, \Leantime\Core\Http\IncomingRequest $incomingRequest, \Leantime\Core\Configuration\Environment $config, \Leantime\Core\Configuration\AppSettings $settings, \Leantime\Domain\Auth\Services\Auth $login, \Leantime\Domain\Auth\Models\Roles $roles, \Illuminate\Contracts\View\Factory|null $viewFactory = null, \Illuminate\View\Compilers\Compiler|null $bladeCompiler = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `theme` | **\Leantime\Core\Theme** |  |
| `language` | **\Leantime\Core\Language** |  |
| `frontcontroller` | **\Leantime\Core\Controller\Frontcontroller** |  |
| `incomingRequest` | **\Leantime\Core\Http\IncomingRequest** |  |
| `config` | **\Leantime\Core\Configuration\Environment** |  |
| `settings` | **\Leantime\Core\Configuration\AppSettings** |  |
| `login` | **\Leantime\Domain\Auth\Services\Auth** |  |
| `roles` | **\Leantime\Domain\Auth\Models\Roles** |  |
| `viewFactory` | **\Illuminate\Contracts\View\Factory|null** |  |
| `bladeCompiler` | **\Illuminate\View\Compilers\Compiler|null** |  |


**Return Value:**





---
### setupBlade

Create View Factory capable of rendering PHP and Blade templates

```php
public Template::setupBlade(\Leantime\Core\Bootstrap\Application $app, \Illuminate\Events\Dispatcher $eventDispatcher): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `app` | **\Leantime\Core\Bootstrap\Application** |  |
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
### sendConfetti

Set a flag to indicate that confetti should be displayed.

```php
public Template::sendConfetti(): void
```

Will be displayed next time a notification is displayed







**Return Value:**

confetti, duh



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
public Template::displayFragment(string $viewPath, string $fragment = &#039;&#039;): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `viewPath` | **string** | The blade view path. |
| `fragment` | **string** | The fragment key. |


**Return Value:**





---
### display

display - display template from folder template including main layout wrapper

```php
public Template::display(string $template, string $layout = &quot;app&quot;, int $responseCode = 200): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `template` | **string** |  |
| `layout` | **string** |  |
| `responseCode` | **int** |  |


**Return Value:**





---
### confirmLayoutName

Confirm the layout name based on the provided parameters.

```php
protected Template::confirmLayoutName(string $layoutName, string $template): bool|string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `layoutName` | **string** | The layout name to be confirmed. |
| `template` | **string** | The template name associated with the layout. |


**Return Value:**

The confirmed layout name, or false if not found.



---
### displayJson

Display JSON content with an optional response code.

```php
public Template::displayJson(array|object|string $jsonContent, int $statusCode = 200): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `jsonContent` | **array|object|string** | The JSON content to be displayed. |
| `statusCode` | **int** | The HTTP response code to be returned (default: 200). |


**Return Value:**

The response object after displaying the JSON content.



---
### displayPartial

Display a partial template with an optional response code.

```php
public Template::displayPartial(string $template, int $responseCode = 200): \Symfony\Component\HttpFoundation\Response
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `template` | **string** | The path to the partial template file. |
| `responseCode` | **int** | The HTTP response code to be returned (default: 200). |


**Return Value:**

The response object after displaying the partial template.



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
### getAll

getAll - get all assigned values

```php
public Template::getAll(): array
```









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
### getToggleState

getToggleState - retrieves the toggle state of a submenu by name from the session

```php
public Template::getToggleState(string $name): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **string** | - the name of the submenu toggle |


**Return Value:**

- the toggle state of the submenu (either "true" or "false")



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
public Template::redirect(string $url): \Symfony\Component\HttpFoundation\RedirectResponse
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | **string** |  |


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
### patchDownloadUrlToFilenameOrAwsUrl

patchDownloadUrlToFilenameOrAwsUrl - Replace all local files/get references in <img src=""> tags
by either local filenames or AWS URLs that can be accesse without being authenticated

```php
public Template::patchDownloadUrlToFilenameOrAwsUrl(string $textHtml): string
```

Note: This patch is required by the PDF generating engine as it retrieves URL data without being
authenticated






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `textHtml` | **string** | HTML text, potentially containing &lt;img srv=&quot;https://local.domain/files/get?xxxx&quot;&gt; tags |


**Return Value:**

HTML text with the https://local.domain/files/get?xxxx replaced by either full qualified
local filenames or AWS URLs



---
### dispatchTplEvent

Dispatch a template event with an optional payload.

```php
public Template::dispatchTplEvent(string $hookName, mixed $payload = null): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `hookName` | **string** | The name of the event hook. |
| `payload` | **mixed** | The payload to be passed to the event hook (default: null). |


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
private Template::dispatchTplHook(string $type, string $hookName, mixed $payload, array $available_params = []): null|mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **string** |  |
| `hookName` | **string** |  |
| `payload` | **mixed** |  |
| `available_params` | **array** |  |


**Return Value:**





---


## Inherited methods

### dispatch_event

dispatches an event with context

```php
public static DispatchesEvents::dispatch_event(string $hook, mixed $available_params = [], string|int|null $function = null): void
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
public static DispatchesEvents::dispatch_filter(string $hook, mixed $payload, mixed $available_params = [], string|int|null $function = null): mixed
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
protected static DispatchesEvents::get_event_context( $function): string
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
private static DispatchesEvents::set_class_context(): string
```



* This method is **static**.





**Return Value:**





---
### get_function_context

Gets the caller function name

```php
private static DispatchesEvents::get_function_context(?int $functionInt = null): string
```

This way we don't have to use much memory by using debug_backtrace

* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `functionInt` | **?int** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
