---
title: \Tests\Support\AcceptanceTester
footer: false
---

# AcceptanceTester

Inherited Methods



* Full name: `\Tests\Support\AcceptanceTester`
* Parent class: [Actor](../../../classes.md)





## Inherited methods

### getScenario



```php
protected AcceptanceTesterActions::getScenario(): \Codeception\Scenario
```




* This method is **abstract**.




**Return Value:**





---
### debugWebDriverLogs

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::debugWebDriverLogs(?\Codeception\TestInterface $test = NULL): void
```

Print out latest Selenium Logs in debug mode






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `test` | **?\Codeception\TestInterface** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::debugWebDriverLogs() - 

---
### tryToDebugWebDriverLogs

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDebugWebDriverLogs(?\Codeception\TestInterface $test = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Print out latest Selenium Logs in debug mode






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `test` | **?\Codeception\TestInterface** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::debugWebDriverLogs() - 

---
### retryDebugWebDriverLogs

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDebugWebDriverLogs(?\Codeception\TestInterface $test = NULL): mixed
```

* Executes debugWebDriverLogs and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `test` | **?\Codeception\TestInterface** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::debugWebDriverLogs() - 

---
### amOnSubdomain

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::amOnSubdomain(string $subdomain): void
```

Changes the subdomain for the 'url' configuration parameter.
Does not open a page; use `amOnPage` for that.

``` php
<?php
// If config is: 'https://mysite.com'
// or config is: 'https://www.mysite.com'
// or config is: 'https://company.mysite.com'

$I->amOnSubdomain('user');
$I->amOnPage('/');
// moves to https://user.mysite.com/
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `subdomain` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::amOnSubdomain() - 

---
### makeScreenshot

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::makeScreenshot(?string $name = NULL): void
```

Takes a screenshot of the current window and saves it to `tests/_output/debug`.

``` php
<?php
$I->amOnPage('/user/edit');
$I->makeScreenshot('edit_page');
// saved to: tests/_output/debug/edit_page.png
$I->makeScreenshot();
// saved to: tests/_output/debug/2017-05-26_14-24-11_4b3403665fea6.png
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::makeScreenshot() - 

---
### tryToMakeScreenshot

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToMakeScreenshot(?string $name = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Takes a screenshot of the current window and saves it to `tests/_output/debug`.

``` php
<?php
$I->amOnPage('/user/edit');
$I->makeScreenshot('edit_page');
// saved to: tests/_output/debug/edit_page.png
$I->makeScreenshot();
// saved to: tests/_output/debug/2017-05-26_14-24-11_4b3403665fea6.png
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::makeScreenshot() - 

---
### retryMakeScreenshot

[!] Method is generated.

```php
public AcceptanceTesterActions::retryMakeScreenshot(?string $name = NULL): mixed
```

* Executes makeScreenshot and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::makeScreenshot() - 

---
### makeElementScreenshot

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::makeElementScreenshot(\Tests\Support\_generated\WebDriverBy|array $selector, ?string $name = NULL): void
```

Takes a screenshot of an element of the current window and saves it to `tests/_output/debug`.

``` php
<?php
$I->amOnPage('/user/edit');
$I->makeElementScreenshot('#dialog', 'edit_page');
// saved to: tests/_output/debug/edit_page.png
$I->makeElementScreenshot('#dialog');
// saved to: tests/_output/debug/2017-05-26_14-24-11_4b3403665fea6.png
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **\Tests\Support\_generated\WebDriverBy|array** |  |
| `name` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::makeElementScreenshot() - 

---
### tryToMakeElementScreenshot

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToMakeElementScreenshot(\Tests\Support\_generated\WebDriverBy|array $selector, ?string $name = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Takes a screenshot of an element of the current window and saves it to `tests/_output/debug`.

``` php
<?php
$I->amOnPage('/user/edit');
$I->makeElementScreenshot('#dialog', 'edit_page');
// saved to: tests/_output/debug/edit_page.png
$I->makeElementScreenshot('#dialog');
// saved to: tests/_output/debug/2017-05-26_14-24-11_4b3403665fea6.png
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **\Tests\Support\_generated\WebDriverBy|array** |  |
| `name` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::makeElementScreenshot() - 

---
### retryMakeElementScreenshot

[!] Method is generated.

```php
public AcceptanceTesterActions::retryMakeElementScreenshot(mixed $selector, ?string $name = NULL): mixed
```

* Executes makeElementScreenshot and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `name` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::makeElementScreenshot() - 

---
### makeHtmlSnapshot

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::makeHtmlSnapshot(?string $name = NULL): void
```

Use this method within an [interactive pause](https://codeception.com/docs/02-GettingStarted#Interactive-Pause) to save the HTML source code of the current page.

```php
<?php
$I->makeHtmlSnapshot('edit_page');
// saved to: tests/_output/debug/edit_page.html
$I->makeHtmlSnapshot();
// saved to: tests/_output/debug/2017-05-26_14-24-11_4b3403665fea6.html
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::makeHtmlSnapshot() - 

---
### tryToMakeHtmlSnapshot

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToMakeHtmlSnapshot(?string $name = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Use this method within an [interactive pause](https://codeception.com/docs/02-GettingStarted#Interactive-Pause) to save the HTML source code of the current page.

```php
<?php
$I->makeHtmlSnapshot('edit_page');
// saved to: tests/_output/debug/edit_page.html
$I->makeHtmlSnapshot();
// saved to: tests/_output/debug/2017-05-26_14-24-11_4b3403665fea6.html
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::makeHtmlSnapshot() - 

---
### retryMakeHtmlSnapshot

[!] Method is generated.

```php
public AcceptanceTesterActions::retryMakeHtmlSnapshot(?string $name = NULL): mixed
```

* Executes makeHtmlSnapshot and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::makeHtmlSnapshot() - 

---
### resizeWindow

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::resizeWindow(int $width, int $height): void
```

Resize the current window.

``` php
<?php
$I->resizeWindow(800, 600);

```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `width` | **int** |  |
| `height` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::resizeWindow() - 

---
### tryToResizeWindow

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToResizeWindow(int $width, int $height): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Resize the current window.

``` php
<?php
$I->resizeWindow(800, 600);

```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `width` | **int** |  |
| `height` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::resizeWindow() - 

---
### retryResizeWindow

[!] Method is generated.

```php
public AcceptanceTesterActions::retryResizeWindow(int $width, int $height): mixed
```

* Executes resizeWindow and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `width` | **int** |  |
| `height` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::resizeWindow() - 

---
### seeCookie

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeCookie(mixed $cookie, array $params = [], bool $showDebug = true): mixed|void
```

Checks that a cookie with the given name is set.
You can set additional cookie params like `domain`, `path` as array passed in last argument.

```php
<?php
$I->seeCookie('PHPSESSID');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCookie() - 

---
### canSeeCookie

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeCookie(mixed $cookie, array $params = [], bool $showDebug = true): mixed|void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that a cookie with the given name is set.
You can set additional cookie params like `domain`, `path` as array passed in last argument.

```php
<?php
$I->seeCookie('PHPSESSID');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCookie() - 

---
### tryToSeeCookie

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeCookie(mixed $cookie, array $params = [], bool $showDebug = true): mixed|void
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that a cookie with the given name is set.
You can set additional cookie params like `domain`, `path` as array passed in last argument.

```php
<?php
$I->seeCookie('PHPSESSID');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCookie() - 

---
### retrySeeCookie

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeCookie(mixed $cookie, array $params = [], bool $showDebug = true): mixed
```

* Executes seeCookie and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCookie() - 

---
### dontSeeCookie

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeCookie(mixed $cookie, array $params = [], bool $showDebug = true): mixed|void
```

Checks that there isn't a cookie with the given name.
You can set additional cookie params like `domain`, `path` as array passed in last argument.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCookie() - 

---
### cantSeeCookie

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeCookie(mixed $cookie, array $params = [], bool $showDebug = true): mixed|void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that there isn't a cookie with the given name.
You can set additional cookie params like `domain`, `path` as array passed in last argument.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCookie() - 

---
### tryToDontSeeCookie

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeCookie(mixed $cookie, array $params = [], bool $showDebug = true): mixed|void
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that there isn't a cookie with the given name.
You can set additional cookie params like `domain`, `path` as array passed in last argument.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCookie() - 

---
### retryDontSeeCookie

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeCookie(mixed $cookie, array $params = [], bool $showDebug = true): mixed
```

* Executes dontSeeCookie and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCookie() - 

---
### setCookie

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::setCookie(mixed $name, mixed $value, array $params = [], mixed $showDebug = true): mixed|void
```

Sets a cookie with the given name and value.
You can set additional cookie params like `domain`, `path`, `expires`, `secure` in array passed as last argument.

```php
<?php
$I->setCookie('PHPSESSID', 'el4ukv0kqbvoirg7nkp4dncpk3');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |
| `value` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::setCookie() - 

---
### tryToSetCookie

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSetCookie(mixed $name, mixed $value, array $params = [], mixed $showDebug = true): mixed|void
```

[!] Test won't be stopped on fail. Error won't be logged
Sets a cookie with the given name and value.
You can set additional cookie params like `domain`, `path`, `expires`, `secure` in array passed as last argument.

```php
<?php
$I->setCookie('PHPSESSID', 'el4ukv0kqbvoirg7nkp4dncpk3');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |
| `value` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::setCookie() - 

---
### retrySetCookie

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySetCookie(mixed $name, mixed $value, array $params = [], mixed $showDebug = true): mixed
```

* Executes setCookie and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |
| `value` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::setCookie() - 

---
### resetCookie

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::resetCookie(mixed $cookie, array $params = [], bool $showDebug = true): mixed|void
```

Unsets cookie with the given name.
You can set additional cookie params like `domain`, `path` in array passed as last argument.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::resetCookie() - 

---
### tryToResetCookie

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToResetCookie(mixed $cookie, array $params = [], bool $showDebug = true): mixed|void
```

[!] Test won't be stopped on fail. Error won't be logged
Unsets cookie with the given name.
You can set additional cookie params like `domain`, `path` in array passed as last argument.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::resetCookie() - 

---
### retryResetCookie

[!] Method is generated.

```php
public AcceptanceTesterActions::retryResetCookie(mixed $cookie, array $params = [], bool $showDebug = true): mixed
```

* Executes resetCookie and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::resetCookie() - 

---
### grabCookie

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::grabCookie(mixed $cookie, array $params = []): mixed
```

Grabs a cookie value.
You can set additional cookie params like `domain`, `path` in array passed as last argument.
If the cookie is set by an ajax request (XMLHttpRequest), there might be some delay caused by the browser, so try `$I->wait(0.1)`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabCookie() - 

---
### retryGrabCookie

[!] Method is generated.

```php
public AcceptanceTesterActions::retryGrabCookie(mixed $cookie, array $params = []): mixed
```

* Executes grabCookie and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cookie` | **mixed** |  |
| `params` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabCookie() - 

---
### grabPageSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::grabPageSource(): string
```

Grabs current page source code.







**Return Value:**

Current page source code.


**See Also:**

* \Codeception\Module\WebDriver::grabPageSource() - 

---
### retryGrabPageSource

[!] Method is generated.

```php
public AcceptanceTesterActions::retryGrabPageSource(): mixed
```

* Executes grabPageSource and retries on failure.

Retry number and interval set by $I->retry();







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabPageSource() - 

---
### amOnUrl

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::amOnUrl(mixed $url): void
```

Open web page at the given absolute URL and sets its hostname as the base host.

``` php
<?php
$I->amOnUrl('https://codeception.com');
$I->amOnPage('/quickstart'); // moves to https://codeception.com/quickstart
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::amOnUrl() - 

---
### amOnPage

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::amOnPage(mixed $page): void
```

Opens the page for the given relative URI.

```php
<?php
// opens front page
$I->amOnPage('/');
// opens /register page
$I->amOnPage('/register');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::amOnPage() - 

---
### see

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::see(mixed $text, array|string $selector = NULL): void
```

Checks that the current page contains the given string (case insensitive).

You can specify a specific HTML element (via CSS or XPath) as the second
parameter to only search within that element.

```php
<?php
$I->see('Logout');                        // I can suppose user is logged in
$I->see('Sign Up', 'h1');                 // I can suppose it's a signup page
$I->see('Sign Up', '//body/h1');          // with XPath
$I->see('Sign Up', ['css' => 'body h1']); // with strict CSS locator
```

Note that the search is done after stripping all HTML tags from the body,
so `$I->see('strong')` will return true for strings like:

  - `<p>I am Stronger than thou</p>`
  - `<script>document.createElement('strong');</script>`

But will *not* be true for strings like:

  - `<strong>Home</strong>`
  - `<div class="strong">Home</strong>`
  - `<!-- strong -->`

For checking the raw source code, use `seeInSource()`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **mixed** |  |
| `selector` | **array|string** | optional |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::see() - 

---
### canSee

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSee(mixed $text, array|string $selector = NULL): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the current page contains the given string (case insensitive).

You can specify a specific HTML element (via CSS or XPath) as the second
parameter to only search within that element.

```php
<?php
$I->see('Logout');                        // I can suppose user is logged in
$I->see('Sign Up', 'h1');                 // I can suppose it's a signup page
$I->see('Sign Up', '//body/h1');          // with XPath
$I->see('Sign Up', ['css' => 'body h1']); // with strict CSS locator
```

Note that the search is done after stripping all HTML tags from the body,
so `$I->see('strong')` will return true for strings like:

  - `<p>I am Stronger than thou</p>`
  - `<script>document.createElement('strong');</script>`

But will *not* be true for strings like:

  - `<strong>Home</strong>`
  - `<div class="strong">Home</strong>`
  - `<!-- strong -->`

For checking the raw source code, use `seeInSource()`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **mixed** |  |
| `selector` | **array|string** | optional |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::see() - 

---
### tryToSee

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSee(mixed $text, array|string $selector = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the current page contains the given string (case insensitive).

You can specify a specific HTML element (via CSS or XPath) as the second
parameter to only search within that element.

```php
<?php
$I->see('Logout');                        // I can suppose user is logged in
$I->see('Sign Up', 'h1');                 // I can suppose it's a signup page
$I->see('Sign Up', '//body/h1');          // with XPath
$I->see('Sign Up', ['css' => 'body h1']); // with strict CSS locator
```

Note that the search is done after stripping all HTML tags from the body,
so `$I->see('strong')` will return true for strings like:

  - `<p>I am Stronger than thou</p>`
  - `<script>document.createElement('strong');</script>`

But will *not* be true for strings like:

  - `<strong>Home</strong>`
  - `<div class="strong">Home</strong>`
  - `<!-- strong -->`

For checking the raw source code, use `seeInSource()`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **mixed** |  |
| `selector` | **array|string** | optional |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::see() - 

---
### retrySee

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySee(mixed $text, mixed $selector = NULL): mixed
```

* Executes see and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **mixed** |  |
| `selector` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::see() - 

---
### dontSee

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSee(mixed $text, array|string $selector = NULL): void
```

Checks that the current page doesn't contain the text specified (case insensitive).
Give a locator as the second parameter to match a specific region.

```php
<?php
$I->dontSee('Login');                         // I can suppose user is already logged in
$I->dontSee('Sign Up','h1');                  // I can suppose it's not a signup page
$I->dontSee('Sign Up','//body/h1');           // with XPath
$I->dontSee('Sign Up', ['css' => 'body h1']); // with strict CSS locator
```

Note that the search is done after stripping all HTML tags from the body,
so `$I->dontSee('strong')` will fail on strings like:

  - `<p>I am Stronger than thou</p>`
  - `<script>document.createElement('strong');</script>`

But will ignore strings like:

  - `<strong>Home</strong>`
  - `<div class="strong">Home</strong>`
  - `<!-- strong -->`

For checking the raw source code, use `seeInSource()`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **mixed** |  |
| `selector` | **array|string** | optional |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSee() - 

---
### cantSee

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSee(mixed $text, array|string $selector = NULL): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the current page doesn't contain the text specified (case insensitive).
Give a locator as the second parameter to match a specific region.

```php
<?php
$I->dontSee('Login');                         // I can suppose user is already logged in
$I->dontSee('Sign Up','h1');                  // I can suppose it's not a signup page
$I->dontSee('Sign Up','//body/h1');           // with XPath
$I->dontSee('Sign Up', ['css' => 'body h1']); // with strict CSS locator
```

Note that the search is done after stripping all HTML tags from the body,
so `$I->dontSee('strong')` will fail on strings like:

  - `<p>I am Stronger than thou</p>`
  - `<script>document.createElement('strong');</script>`

But will ignore strings like:

  - `<strong>Home</strong>`
  - `<div class="strong">Home</strong>`
  - `<!-- strong -->`

For checking the raw source code, use `seeInSource()`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **mixed** |  |
| `selector` | **array|string** | optional |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSee() - 

---
### tryToDontSee

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSee(mixed $text, array|string $selector = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the current page doesn't contain the text specified (case insensitive).
Give a locator as the second parameter to match a specific region.

```php
<?php
$I->dontSee('Login');                         // I can suppose user is already logged in
$I->dontSee('Sign Up','h1');                  // I can suppose it's not a signup page
$I->dontSee('Sign Up','//body/h1');           // with XPath
$I->dontSee('Sign Up', ['css' => 'body h1']); // with strict CSS locator
```

Note that the search is done after stripping all HTML tags from the body,
so `$I->dontSee('strong')` will fail on strings like:

  - `<p>I am Stronger than thou</p>`
  - `<script>document.createElement('strong');</script>`

But will ignore strings like:

  - `<strong>Home</strong>`
  - `<div class="strong">Home</strong>`
  - `<!-- strong -->`

For checking the raw source code, use `seeInSource()`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **mixed** |  |
| `selector` | **array|string** | optional |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSee() - 

---
### retryDontSee

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSee(mixed $text, mixed $selector = NULL): mixed
```

* Executes dontSee and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **mixed** |  |
| `selector` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSee() - 

---
### seeInSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeInSource(mixed $raw): void
```

Checks that the current page contains the given string in its
raw source code.

```php
<?php
$I->seeInSource('<h1>Green eggs &amp; ham</h1>');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `raw` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInSource() - 

---
### canSeeInSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeInSource(mixed $raw): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the current page contains the given string in its
raw source code.

```php
<?php
$I->seeInSource('<h1>Green eggs &amp; ham</h1>');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `raw` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInSource() - 

---
### tryToSeeInSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeInSource(mixed $raw): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the current page contains the given string in its
raw source code.

```php
<?php
$I->seeInSource('<h1>Green eggs &amp; ham</h1>');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `raw` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInSource() - 

---
### retrySeeInSource

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeInSource(mixed $raw): mixed
```

* Executes seeInSource and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `raw` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInSource() - 

---
### dontSeeInSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeInSource(mixed $raw): void
```

Checks that the current page contains the given string in its
raw source code.

```php
<?php
$I->dontSeeInSource('<h1>Green eggs &amp; ham</h1>');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `raw` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInSource() - 

---
### cantSeeInSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeInSource(mixed $raw): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the current page contains the given string in its
raw source code.

```php
<?php
$I->dontSeeInSource('<h1>Green eggs &amp; ham</h1>');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `raw` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInSource() - 

---
### tryToDontSeeInSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeInSource(mixed $raw): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the current page contains the given string in its
raw source code.

```php
<?php
$I->dontSeeInSource('<h1>Green eggs &amp; ham</h1>');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `raw` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInSource() - 

---
### retryDontSeeInSource

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeInSource(mixed $raw): mixed
```

* Executes dontSeeInSource and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `raw` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInSource() - 

---
### seeInPageSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeInPageSource(string $text): void
```

Checks that the page source contains the given string.

```php
<?php
$I->seeInPageSource('<link rel="apple-touch-icon"');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInPageSource() - 

---
### canSeeInPageSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeInPageSource(string $text): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the page source contains the given string.

```php
<?php
$I->seeInPageSource('<link rel="apple-touch-icon"');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInPageSource() - 

---
### tryToSeeInPageSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeInPageSource(string $text): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the page source contains the given string.

```php
<?php
$I->seeInPageSource('<link rel="apple-touch-icon"');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInPageSource() - 

---
### retrySeeInPageSource

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeInPageSource(string $text): mixed
```

* Executes seeInPageSource and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInPageSource() - 

---
### dontSeeInPageSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeInPageSource(string $text): void
```

Checks that the page source doesn't contain the given string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInPageSource() - 

---
### cantSeeInPageSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeInPageSource(string $text): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the page source doesn't contain the given string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInPageSource() - 

---
### tryToDontSeeInPageSource

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeInPageSource(string $text): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the page source doesn't contain the given string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInPageSource() - 

---
### retryDontSeeInPageSource

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeInPageSource(string $text): mixed
```

* Executes dontSeeInPageSource and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInPageSource() - 

---
### click

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::click(string|array $link, mixed $context = NULL): void
```

Perform a click on a link or a button, given by a locator.
If a fuzzy locator is given, the page will be searched for a button, link, or image matching the locator string.
For buttons, the "value" attribute, "name" attribute, and inner text are searched.
For links, the link text is searched.
For images, the "alt" attribute and inner text of any parent links are searched.

The second parameter is a context (CSS or XPath locator) to narrow the search.

Note that if the locator matches a button of type `submit`, the form will be submitted.

```php
<?php
// simple link
$I->click('Logout');
// button of form
$I->click('Submit');
// CSS button
$I->click('#form input[type=submit]');
// XPath
$I->click('//form/*[@type="submit"]');
// link in context
$I->click('Logout', '#nav');
// using strict locator
$I->click(['link' => 'Login']);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `link` | **string|array** |  |
| `context` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::click() - 

---
### tryToClick

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToClick(string|array $link, mixed $context = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Perform a click on a link or a button, given by a locator.
If a fuzzy locator is given, the page will be searched for a button, link, or image matching the locator string.
For buttons, the "value" attribute, "name" attribute, and inner text are searched.
For links, the link text is searched.
For images, the "alt" attribute and inner text of any parent links are searched.

The second parameter is a context (CSS or XPath locator) to narrow the search.

Note that if the locator matches a button of type `submit`, the form will be submitted.

```php
<?php
// simple link
$I->click('Logout');
// button of form
$I->click('Submit');
// CSS button
$I->click('#form input[type=submit]');
// XPath
$I->click('//form/*[@type="submit"]');
// link in context
$I->click('Logout', '#nav');
// using strict locator
$I->click(['link' => 'Login']);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `link` | **string|array** |  |
| `context` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::click() - 

---
### retryClick

[!] Method is generated.

```php
public AcceptanceTesterActions::retryClick(mixed $link, mixed $context = NULL): mixed
```

* Executes click and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `link` | **mixed** |  |
| `context` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::click() - 

---
### seeLink

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeLink(string $text, ?string $url = NULL): void
```

Checks that there's a link with the specified text.
Give a full URL as the second parameter to match links with that exact URL.

```php
<?php
$I->seeLink('Logout'); // matches <a href="#">Logout</a>
$I->seeLink('Logout','/logout'); // matches <a href="/logout">Logout</a>
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |
| `url` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeLink() - 

---
### canSeeLink

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeLink(string $text, ?string $url = NULL): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that there's a link with the specified text.
Give a full URL as the second parameter to match links with that exact URL.

```php
<?php
$I->seeLink('Logout'); // matches <a href="#">Logout</a>
$I->seeLink('Logout','/logout'); // matches <a href="/logout">Logout</a>
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |
| `url` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeLink() - 

---
### tryToSeeLink

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeLink(string $text, ?string $url = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that there's a link with the specified text.
Give a full URL as the second parameter to match links with that exact URL.

```php
<?php
$I->seeLink('Logout'); // matches <a href="#">Logout</a>
$I->seeLink('Logout','/logout'); // matches <a href="/logout">Logout</a>
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |
| `url` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeLink() - 

---
### retrySeeLink

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeLink(string $text, ?string $url = NULL): mixed
```

* Executes seeLink and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |
| `url` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeLink() - 

---
### dontSeeLink

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeLink(string $text, string $url = &quot;&quot;): void
```

Checks that the page doesn't contain a link with the given string.
If the second parameter is given, only links with a matching "href" attribute will be checked.

```php
<?php
$I->dontSeeLink('Logout'); // I suppose user is not logged in
$I->dontSeeLink('Checkout now', '/store/cart.php');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |
| `url` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeLink() - 

---
### cantSeeLink

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeLink(string $text, string $url = &quot;&quot;): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the page doesn't contain a link with the given string.
If the second parameter is given, only links with a matching "href" attribute will be checked.

```php
<?php
$I->dontSeeLink('Logout'); // I suppose user is not logged in
$I->dontSeeLink('Checkout now', '/store/cart.php');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |
| `url` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeLink() - 

---
### tryToDontSeeLink

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeLink(string $text, string $url = &quot;&quot;): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the page doesn't contain a link with the given string.
If the second parameter is given, only links with a matching "href" attribute will be checked.

```php
<?php
$I->dontSeeLink('Logout'); // I suppose user is not logged in
$I->dontSeeLink('Checkout now', '/store/cart.php');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |
| `url` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeLink() - 

---
### retryDontSeeLink

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeLink(string $text, string $url = &quot;&quot;): mixed
```

* Executes dontSeeLink and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |
| `url` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeLink() - 

---
### seeInCurrentUrl

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeInCurrentUrl(string $uri): void
```

Checks that current URI contains the given string.

```php
<?php
// to match: /home/dashboard
$I->seeInCurrentUrl('home');
// to match: /users/1
$I->seeInCurrentUrl('/users/');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInCurrentUrl() - 

---
### canSeeInCurrentUrl

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeInCurrentUrl(string $uri): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that current URI contains the given string.

```php
<?php
// to match: /home/dashboard
$I->seeInCurrentUrl('home');
// to match: /users/1
$I->seeInCurrentUrl('/users/');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInCurrentUrl() - 

---
### tryToSeeInCurrentUrl

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeInCurrentUrl(string $uri): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that current URI contains the given string.

```php
<?php
// to match: /home/dashboard
$I->seeInCurrentUrl('home');
// to match: /users/1
$I->seeInCurrentUrl('/users/');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInCurrentUrl() - 

---
### retrySeeInCurrentUrl

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeInCurrentUrl(string $uri): mixed
```

* Executes seeInCurrentUrl and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInCurrentUrl() - 

---
### seeCurrentUrlEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeCurrentUrlEquals(string $uri): void
```

Checks that the current URL is equal to the given string.
Unlike `seeInCurrentUrl`, this only matches the full URL.

```php
<?php
// to match root url
$I->seeCurrentUrlEquals('/');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCurrentUrlEquals() - 

---
### canSeeCurrentUrlEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeCurrentUrlEquals(string $uri): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the current URL is equal to the given string.
Unlike `seeInCurrentUrl`, this only matches the full URL.

```php
<?php
// to match root url
$I->seeCurrentUrlEquals('/');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCurrentUrlEquals() - 

---
### tryToSeeCurrentUrlEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeCurrentUrlEquals(string $uri): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the current URL is equal to the given string.
Unlike `seeInCurrentUrl`, this only matches the full URL.

```php
<?php
// to match root url
$I->seeCurrentUrlEquals('/');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCurrentUrlEquals() - 

---
### retrySeeCurrentUrlEquals

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeCurrentUrlEquals(string $uri): mixed
```

* Executes seeCurrentUrlEquals and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCurrentUrlEquals() - 

---
### seeCurrentUrlMatches

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeCurrentUrlMatches(string $uri): void
```

Checks that the current URL matches the given regular expression.

```php
<?php
// to match root url
$I->seeCurrentUrlMatches('~^/users/(\d+)~');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCurrentUrlMatches() - 

---
### canSeeCurrentUrlMatches

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeCurrentUrlMatches(string $uri): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the current URL matches the given regular expression.

```php
<?php
// to match root url
$I->seeCurrentUrlMatches('~^/users/(\d+)~');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCurrentUrlMatches() - 

---
### tryToSeeCurrentUrlMatches

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeCurrentUrlMatches(string $uri): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the current URL matches the given regular expression.

```php
<?php
// to match root url
$I->seeCurrentUrlMatches('~^/users/(\d+)~');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCurrentUrlMatches() - 

---
### retrySeeCurrentUrlMatches

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeCurrentUrlMatches(string $uri): mixed
```

* Executes seeCurrentUrlMatches and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCurrentUrlMatches() - 

---
### dontSeeInCurrentUrl

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeInCurrentUrl(string $uri): void
```

Checks that the current URI doesn't contain the given string.

```php
<?php
$I->dontSeeInCurrentUrl('/users/');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInCurrentUrl() - 

---
### cantSeeInCurrentUrl

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeInCurrentUrl(string $uri): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the current URI doesn't contain the given string.

```php
<?php
$I->dontSeeInCurrentUrl('/users/');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInCurrentUrl() - 

---
### tryToDontSeeInCurrentUrl

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeInCurrentUrl(string $uri): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the current URI doesn't contain the given string.

```php
<?php
$I->dontSeeInCurrentUrl('/users/');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInCurrentUrl() - 

---
### retryDontSeeInCurrentUrl

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeInCurrentUrl(string $uri): mixed
```

* Executes dontSeeInCurrentUrl and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInCurrentUrl() - 

---
### dontSeeCurrentUrlEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeCurrentUrlEquals(string $uri): void
```

Checks that the current URL doesn't equal the given string.
Unlike `dontSeeInCurrentUrl`, this only matches the full URL.

```php
<?php
// current url is not root
$I->dontSeeCurrentUrlEquals('/');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCurrentUrlEquals() - 

---
### cantSeeCurrentUrlEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeCurrentUrlEquals(string $uri): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the current URL doesn't equal the given string.
Unlike `dontSeeInCurrentUrl`, this only matches the full URL.

```php
<?php
// current url is not root
$I->dontSeeCurrentUrlEquals('/');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCurrentUrlEquals() - 

---
### tryToDontSeeCurrentUrlEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeCurrentUrlEquals(string $uri): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the current URL doesn't equal the given string.
Unlike `dontSeeInCurrentUrl`, this only matches the full URL.

```php
<?php
// current url is not root
$I->dontSeeCurrentUrlEquals('/');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCurrentUrlEquals() - 

---
### retryDontSeeCurrentUrlEquals

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeCurrentUrlEquals(string $uri): mixed
```

* Executes dontSeeCurrentUrlEquals and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCurrentUrlEquals() - 

---
### dontSeeCurrentUrlMatches

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeCurrentUrlMatches(string $uri): void
```

Checks that current url doesn't match the given regular expression.

```php
<?php
// to match root url
$I->dontSeeCurrentUrlMatches('~^/users/(\d+)~');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCurrentUrlMatches() - 

---
### cantSeeCurrentUrlMatches

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeCurrentUrlMatches(string $uri): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that current url doesn't match the given regular expression.

```php
<?php
// to match root url
$I->dontSeeCurrentUrlMatches('~^/users/(\d+)~');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCurrentUrlMatches() - 

---
### tryToDontSeeCurrentUrlMatches

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeCurrentUrlMatches(string $uri): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that current url doesn't match the given regular expression.

```php
<?php
// to match root url
$I->dontSeeCurrentUrlMatches('~^/users/(\d+)~');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCurrentUrlMatches() - 

---
### retryDontSeeCurrentUrlMatches

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeCurrentUrlMatches(string $uri): mixed
```

* Executes dontSeeCurrentUrlMatches and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCurrentUrlMatches() - 

---
### grabFromCurrentUrl

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::grabFromCurrentUrl(mixed $uri = NULL): mixed
```

Executes the given regular expression against the current URI and returns the first capturing group.
If no parameters are provided, the full URI is returned.

```php
<?php
$user_id = $I->grabFromCurrentUrl('~^/user/(\d+)/~');
$uri = $I->grabFromCurrentUrl();
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabFromCurrentUrl() - 

---
### retryGrabFromCurrentUrl

[!] Method is generated.

```php
public AcceptanceTesterActions::retryGrabFromCurrentUrl(mixed $uri = NULL): mixed
```

* Executes grabFromCurrentUrl and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `uri` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabFromCurrentUrl() - 

---
### seeCheckboxIsChecked

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeCheckboxIsChecked(mixed $checkbox): void
```

Checks that the specified checkbox is checked.

```php
<?php
$I->seeCheckboxIsChecked('#agree'); // I suppose user agreed to terms
$I->seeCheckboxIsChecked('#signup_form input[type=checkbox]'); // I suppose user agreed to terms, If there is only one checkbox in form.
$I->seeCheckboxIsChecked('//form/input[@type=checkbox and @name=agree]');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `checkbox` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCheckboxIsChecked() - 

---
### canSeeCheckboxIsChecked

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeCheckboxIsChecked(mixed $checkbox): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the specified checkbox is checked.

```php
<?php
$I->seeCheckboxIsChecked('#agree'); // I suppose user agreed to terms
$I->seeCheckboxIsChecked('#signup_form input[type=checkbox]'); // I suppose user agreed to terms, If there is only one checkbox in form.
$I->seeCheckboxIsChecked('//form/input[@type=checkbox and @name=agree]');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `checkbox` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCheckboxIsChecked() - 

---
### tryToSeeCheckboxIsChecked

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeCheckboxIsChecked(mixed $checkbox): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the specified checkbox is checked.

```php
<?php
$I->seeCheckboxIsChecked('#agree'); // I suppose user agreed to terms
$I->seeCheckboxIsChecked('#signup_form input[type=checkbox]'); // I suppose user agreed to terms, If there is only one checkbox in form.
$I->seeCheckboxIsChecked('//form/input[@type=checkbox and @name=agree]');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `checkbox` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCheckboxIsChecked() - 

---
### retrySeeCheckboxIsChecked

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeCheckboxIsChecked(mixed $checkbox): mixed
```

* Executes seeCheckboxIsChecked and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `checkbox` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeCheckboxIsChecked() - 

---
### dontSeeCheckboxIsChecked

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeCheckboxIsChecked(mixed $checkbox): void
```

Check that the specified checkbox is unchecked.

```php
<?php
$I->dontSeeCheckboxIsChecked('#agree'); // I suppose user didn't agree to terms
$I->seeCheckboxIsChecked('#signup_form input[type=checkbox]'); // I suppose user didn't check the first checkbox in form.
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `checkbox` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCheckboxIsChecked() - 

---
### cantSeeCheckboxIsChecked

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeCheckboxIsChecked(mixed $checkbox): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Check that the specified checkbox is unchecked.

```php
<?php
$I->dontSeeCheckboxIsChecked('#agree'); // I suppose user didn't agree to terms
$I->seeCheckboxIsChecked('#signup_form input[type=checkbox]'); // I suppose user didn't check the first checkbox in form.
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `checkbox` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCheckboxIsChecked() - 

---
### tryToDontSeeCheckboxIsChecked

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeCheckboxIsChecked(mixed $checkbox): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Check that the specified checkbox is unchecked.

```php
<?php
$I->dontSeeCheckboxIsChecked('#agree'); // I suppose user didn't agree to terms
$I->seeCheckboxIsChecked('#signup_form input[type=checkbox]'); // I suppose user didn't check the first checkbox in form.
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `checkbox` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCheckboxIsChecked() - 

---
### retryDontSeeCheckboxIsChecked

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeCheckboxIsChecked(mixed $checkbox): mixed
```

* Executes dontSeeCheckboxIsChecked and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `checkbox` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeCheckboxIsChecked() - 

---
### seeInField

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeInField(string|array $field, mixed $value): void
```

Checks that the given input field or textarea *equals* (i.e. not just contains) the given value.
Fields are matched by label text, the "name" attribute, CSS, or XPath.

```php
<?php
$I->seeInField('Body','Type your comment here');
$I->seeInField('form textarea[name=body]','Type your comment here');
$I->seeInField('form input[type=hidden]','hidden_value');
$I->seeInField('#searchform input','Search');
$I->seeInField('//form/*[@name=search]','Search');
$I->seeInField(['name' => 'search'], 'Search');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **string|array** |  |
| `value` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInField() - 

---
### canSeeInField

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeInField(string|array $field, mixed $value): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the given input field or textarea *equals* (i.e. not just contains) the given value.
Fields are matched by label text, the "name" attribute, CSS, or XPath.

```php
<?php
$I->seeInField('Body','Type your comment here');
$I->seeInField('form textarea[name=body]','Type your comment here');
$I->seeInField('form input[type=hidden]','hidden_value');
$I->seeInField('#searchform input','Search');
$I->seeInField('//form/*[@name=search]','Search');
$I->seeInField(['name' => 'search'], 'Search');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **string|array** |  |
| `value` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInField() - 

---
### tryToSeeInField

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeInField(string|array $field, mixed $value): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the given input field or textarea *equals* (i.e. not just contains) the given value.
Fields are matched by label text, the "name" attribute, CSS, or XPath.

```php
<?php
$I->seeInField('Body','Type your comment here');
$I->seeInField('form textarea[name=body]','Type your comment here');
$I->seeInField('form input[type=hidden]','hidden_value');
$I->seeInField('#searchform input','Search');
$I->seeInField('//form/*[@name=search]','Search');
$I->seeInField(['name' => 'search'], 'Search');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **string|array** |  |
| `value` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInField() - 

---
### retrySeeInField

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeInField(mixed $field, mixed $value): mixed
```

* Executes seeInField and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |
| `value` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInField() - 

---
### dontSeeInField

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeInField(string|array $field, mixed $value): void
```

Checks that an input field or textarea doesn't contain the given value.
For fuzzy locators, the field is matched by label text, CSS and XPath.

```php
<?php
$I->dontSeeInField('Body','Type your comment here');
$I->dontSeeInField('form textarea[name=body]','Type your comment here');
$I->dontSeeInField('form input[type=hidden]','hidden_value');
$I->dontSeeInField('#searchform input','Search');
$I->dontSeeInField('//form/*[@name=search]','Search');
$I->dontSeeInField(['name' => 'search'], 'Search');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **string|array** |  |
| `value` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInField() - 

---
### cantSeeInField

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeInField(string|array $field, mixed $value): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that an input field or textarea doesn't contain the given value.
For fuzzy locators, the field is matched by label text, CSS and XPath.

```php
<?php
$I->dontSeeInField('Body','Type your comment here');
$I->dontSeeInField('form textarea[name=body]','Type your comment here');
$I->dontSeeInField('form input[type=hidden]','hidden_value');
$I->dontSeeInField('#searchform input','Search');
$I->dontSeeInField('//form/*[@name=search]','Search');
$I->dontSeeInField(['name' => 'search'], 'Search');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **string|array** |  |
| `value` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInField() - 

---
### tryToDontSeeInField

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeInField(string|array $field, mixed $value): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that an input field or textarea doesn't contain the given value.
For fuzzy locators, the field is matched by label text, CSS and XPath.

```php
<?php
$I->dontSeeInField('Body','Type your comment here');
$I->dontSeeInField('form textarea[name=body]','Type your comment here');
$I->dontSeeInField('form input[type=hidden]','hidden_value');
$I->dontSeeInField('#searchform input','Search');
$I->dontSeeInField('//form/*[@name=search]','Search');
$I->dontSeeInField(['name' => 'search'], 'Search');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **string|array** |  |
| `value` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInField() - 

---
### retryDontSeeInField

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeInField(mixed $field, mixed $value): mixed
```

* Executes dontSeeInField and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |
| `value` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInField() - 

---
### seeInFormFields

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeInFormFields(mixed $formSelector, array $params): void
```

Checks if the array of form parameters (name => value) are set on the form matched with the
passed selector.

```php
<?php
$I->seeInFormFields('form[name=myform]', [
     'input1' => 'value',
     'input2' => 'other value',
]);
```

For multi-select elements, or to check values of multiple elements with the same name, an
array may be passed:

```php
<?php
$I->seeInFormFields('.form-class', [
     'multiselect' => [
         'value1',
         'value2',
     ],
     'checkbox[]' => [
         'a checked value',
         'another checked value',
     ],
]);
```

Additionally, checkbox values can be checked with a boolean.

```php
<?php
$I->seeInFormFields('#form-id', [
     'checkbox1' => true,        // passes if checked
     'checkbox2' => false,       // passes if unchecked
]);
```

Pair this with submitForm for quick testing magic.

```php
<?php
$form = [
     'field1' => 'value',
     'field2' => 'another value',
     'checkbox1' => true,
     // ...
];
$I->submitForm('//form[@id=my-form]', string $form, 'submitButton');
// $I->amOnPage('/path/to/form-page') may be needed
$I->seeInFormFields('//form[@id=my-form]', string $form);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formSelector` | **mixed** |  |
| `params` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInFormFields() - 

---
### canSeeInFormFields

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeInFormFields(mixed $formSelector, array $params): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks if the array of form parameters (name => value) are set on the form matched with the
passed selector.

```php
<?php
$I->seeInFormFields('form[name=myform]', [
     'input1' => 'value',
     'input2' => 'other value',
]);
```

For multi-select elements, or to check values of multiple elements with the same name, an
array may be passed:

```php
<?php
$I->seeInFormFields('.form-class', [
     'multiselect' => [
         'value1',
         'value2',
     ],
     'checkbox[]' => [
         'a checked value',
         'another checked value',
     ],
]);
```

Additionally, checkbox values can be checked with a boolean.

```php
<?php
$I->seeInFormFields('#form-id', [
     'checkbox1' => true,        // passes if checked
     'checkbox2' => false,       // passes if unchecked
]);
```

Pair this with submitForm for quick testing magic.

```php
<?php
$form = [
     'field1' => 'value',
     'field2' => 'another value',
     'checkbox1' => true,
     // ...
];
$I->submitForm('//form[@id=my-form]', string $form, 'submitButton');
// $I->amOnPage('/path/to/form-page') may be needed
$I->seeInFormFields('//form[@id=my-form]', string $form);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formSelector` | **mixed** |  |
| `params` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInFormFields() - 

---
### tryToSeeInFormFields

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeInFormFields(mixed $formSelector, array $params): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks if the array of form parameters (name => value) are set on the form matched with the
passed selector.

```php
<?php
$I->seeInFormFields('form[name=myform]', [
     'input1' => 'value',
     'input2' => 'other value',
]);
```

For multi-select elements, or to check values of multiple elements with the same name, an
array may be passed:

```php
<?php
$I->seeInFormFields('.form-class', [
     'multiselect' => [
         'value1',
         'value2',
     ],
     'checkbox[]' => [
         'a checked value',
         'another checked value',
     ],
]);
```

Additionally, checkbox values can be checked with a boolean.

```php
<?php
$I->seeInFormFields('#form-id', [
     'checkbox1' => true,        // passes if checked
     'checkbox2' => false,       // passes if unchecked
]);
```

Pair this with submitForm for quick testing magic.

```php
<?php
$form = [
     'field1' => 'value',
     'field2' => 'another value',
     'checkbox1' => true,
     // ...
];
$I->submitForm('//form[@id=my-form]', string $form, 'submitButton');
// $I->amOnPage('/path/to/form-page') may be needed
$I->seeInFormFields('//form[@id=my-form]', string $form);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formSelector` | **mixed** |  |
| `params` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInFormFields() - 

---
### retrySeeInFormFields

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeInFormFields(mixed $formSelector, array $params): mixed
```

* Executes seeInFormFields and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formSelector` | **mixed** |  |
| `params` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInFormFields() - 

---
### dontSeeInFormFields

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeInFormFields(mixed $formSelector, array $params): void
```

Checks if the array of form parameters (name => value) are not set on the form matched with
the passed selector.

```php
<?php
$I->dontSeeInFormFields('form[name=myform]', [
     'input1' => 'non-existent value',
     'input2' => 'other non-existent value',
]);
```

To check that an element hasn't been assigned any one of many values, an array can be passed
as the value:

```php
<?php
$I->dontSeeInFormFields('.form-class', [
     'fieldName' => [
         'This value shouldn\'t be set',
         'And this value shouldn\'t be set',
     ],
]);
```

Additionally, checkbox values can be checked with a boolean.

```php
<?php
$I->dontSeeInFormFields('#form-id', [
     'checkbox1' => true,        // fails if checked
     'checkbox2' => false,       // fails if unchecked
]);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formSelector` | **mixed** |  |
| `params` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInFormFields() - 

---
### cantSeeInFormFields

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeInFormFields(mixed $formSelector, array $params): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks if the array of form parameters (name => value) are not set on the form matched with
the passed selector.

```php
<?php
$I->dontSeeInFormFields('form[name=myform]', [
     'input1' => 'non-existent value',
     'input2' => 'other non-existent value',
]);
```

To check that an element hasn't been assigned any one of many values, an array can be passed
as the value:

```php
<?php
$I->dontSeeInFormFields('.form-class', [
     'fieldName' => [
         'This value shouldn\'t be set',
         'And this value shouldn\'t be set',
     ],
]);
```

Additionally, checkbox values can be checked with a boolean.

```php
<?php
$I->dontSeeInFormFields('#form-id', [
     'checkbox1' => true,        // fails if checked
     'checkbox2' => false,       // fails if unchecked
]);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formSelector` | **mixed** |  |
| `params` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInFormFields() - 

---
### tryToDontSeeInFormFields

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeInFormFields(mixed $formSelector, array $params): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks if the array of form parameters (name => value) are not set on the form matched with
the passed selector.

```php
<?php
$I->dontSeeInFormFields('form[name=myform]', [
     'input1' => 'non-existent value',
     'input2' => 'other non-existent value',
]);
```

To check that an element hasn't been assigned any one of many values, an array can be passed
as the value:

```php
<?php
$I->dontSeeInFormFields('.form-class', [
     'fieldName' => [
         'This value shouldn\'t be set',
         'And this value shouldn\'t be set',
     ],
]);
```

Additionally, checkbox values can be checked with a boolean.

```php
<?php
$I->dontSeeInFormFields('#form-id', [
     'checkbox1' => true,        // fails if checked
     'checkbox2' => false,       // fails if unchecked
]);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formSelector` | **mixed** |  |
| `params` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInFormFields() - 

---
### retryDontSeeInFormFields

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeInFormFields(mixed $formSelector, array $params): mixed
```

* Executes dontSeeInFormFields and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formSelector` | **mixed** |  |
| `params` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInFormFields() - 

---
### selectOption

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::selectOption(mixed $select, mixed $option): void
```

Selects an option in a select tag or in radio button group.

```php
<?php
$I->selectOption('form select[name=account]', 'Premium');
$I->selectOption('form input[name=payment]', 'Monthly');
$I->selectOption('//form/select[@name=account]', 'Monthly');
```

Provide an array for the second argument to select multiple options:

```php
<?php
$I->selectOption('Which OS do you use?', ['Windows', 'Linux']);
```

Or provide an associative array for the second argument to specifically define which selection method should be used:

```php
<?php
$I->selectOption('Which OS do you use?', ['text' => 'Windows']); // Only search by text 'Windows'
$I->selectOption('Which OS do you use?', ['value' => 'windows']); // Only search by value 'windows'
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `select` | **mixed** |  |
| `option` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::selectOption() - 

---
### tryToSelectOption

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSelectOption(mixed $select, mixed $option): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Selects an option in a select tag or in radio button group.

```php
<?php
$I->selectOption('form select[name=account]', 'Premium');
$I->selectOption('form input[name=payment]', 'Monthly');
$I->selectOption('//form/select[@name=account]', 'Monthly');
```

Provide an array for the second argument to select multiple options:

```php
<?php
$I->selectOption('Which OS do you use?', ['Windows', 'Linux']);
```

Or provide an associative array for the second argument to specifically define which selection method should be used:

```php
<?php
$I->selectOption('Which OS do you use?', ['text' => 'Windows']); // Only search by text 'Windows'
$I->selectOption('Which OS do you use?', ['value' => 'windows']); // Only search by value 'windows'
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `select` | **mixed** |  |
| `option` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::selectOption() - 

---
### retrySelectOption

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySelectOption(mixed $select, mixed $option): mixed
```

* Executes selectOption and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `select` | **mixed** |  |
| `option` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::selectOption() - 

---
### unselectOption

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::unselectOption(string|array|\Tests\Support\_generated\WebDriverBy $select, string|array|\Tests\Support\_generated\WebDriverBy $option): void
```

Unselect an option in the given select box.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `select` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `option` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::unselectOption() - 

---
### tryToUnselectOption

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToUnselectOption(string|array|\Tests\Support\_generated\WebDriverBy $select, string|array|\Tests\Support\_generated\WebDriverBy $option): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Unselect an option in the given select box.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `select` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `option` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::unselectOption() - 

---
### retryUnselectOption

[!] Method is generated.

```php
public AcceptanceTesterActions::retryUnselectOption(mixed $select, mixed $option): mixed
```

* Executes unselectOption and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `select` | **mixed** |  |
| `option` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::unselectOption() - 

---
### checkOption

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::checkOption(mixed $option): void
```

Ticks a checkbox. For radio buttons, use the `selectOption` method instead.

```php
<?php
$I->checkOption('#agree');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `option` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::checkOption() - 

---
### tryToCheckOption

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToCheckOption(mixed $option): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Ticks a checkbox. For radio buttons, use the `selectOption` method instead.

```php
<?php
$I->checkOption('#agree');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `option` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::checkOption() - 

---
### retryCheckOption

[!] Method is generated.

```php
public AcceptanceTesterActions::retryCheckOption(mixed $option): mixed
```

* Executes checkOption and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `option` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::checkOption() - 

---
### uncheckOption

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::uncheckOption(mixed $option): void
```

Unticks a checkbox.

```php
<?php
$I->uncheckOption('#notify');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `option` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::uncheckOption() - 

---
### tryToUncheckOption

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToUncheckOption(mixed $option): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Unticks a checkbox.

```php
<?php
$I->uncheckOption('#notify');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `option` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::uncheckOption() - 

---
### retryUncheckOption

[!] Method is generated.

```php
public AcceptanceTesterActions::retryUncheckOption(mixed $option): mixed
```

* Executes uncheckOption and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `option` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::uncheckOption() - 

---
### fillField

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::fillField(mixed $field, mixed $value): void
```

Fills a text field or textarea with the given string.

```php
<?php
$I->fillField("//input[@type='text']", "Hello World!");
$I->fillField(['name' => 'email'], 'jon@example.com');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |
| `value` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::fillField() - 

---
### tryToFillField

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToFillField(mixed $field, mixed $value): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Fills a text field or textarea with the given string.

```php
<?php
$I->fillField("//input[@type='text']", "Hello World!");
$I->fillField(['name' => 'email'], 'jon@example.com');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |
| `value` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::fillField() - 

---
### retryFillField

[!] Method is generated.

```php
public AcceptanceTesterActions::retryFillField(mixed $field, mixed $value): mixed
```

* Executes fillField and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |
| `value` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::fillField() - 

---
### clearField

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::clearField(string|array|\Tests\Support\_generated\WebDriverBy $field): void
```

Clears given field which isn't empty.

``` php
<?php
$I->clearField('#username');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::clearField() - 

---
### tryToClearField

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToClearField(string|array|\Tests\Support\_generated\WebDriverBy $field): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Clears given field which isn't empty.

``` php
<?php
$I->clearField('#username');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::clearField() - 

---
### retryClearField

[!] Method is generated.

```php
public AcceptanceTesterActions::retryClearField(mixed $field): mixed
```

* Executes clearField and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::clearField() - 

---
### type

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::type(string $text, int $delay): void
```

Type in characters on active element.
With a second parameter you can specify delay between key presses.

```php
<?php
// activate input element
$I->click('#input');

// type text in active element
$I->type('Hello world');

// type text with a 1sec delay between chars
$I->type('Hello World', 1);
```

This might be useful when you an input reacts to typing and you need to slow it down to emulate human behavior.
For instance, this is how Credit Card fields can be filled in.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |
| `delay` | **int** | [sec] |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::type() - 

---
### tryToType

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToType(string $text, int $delay): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Type in characters on active element.
With a second parameter you can specify delay between key presses.

```php
<?php
// activate input element
$I->click('#input');

// type text in active element
$I->type('Hello world');

// type text with a 1sec delay between chars
$I->type('Hello World', 1);
```

This might be useful when you an input reacts to typing and you need to slow it down to emulate human behavior.
For instance, this is how Credit Card fields can be filled in.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |
| `delay` | **int** | [sec] |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::type() - 

---
### retryType

[!] Method is generated.

```php
public AcceptanceTesterActions::retryType(string $text, int $delay): mixed
```

* Executes type and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |
| `delay` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::type() - 

---
### attachFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::attachFile(mixed $field, string $filename): void
```

Attaches a file relative to the Codeception `_data` directory to the given file upload field.

```php
<?php
// file is stored in 'tests/_data/prices.xls'
$I->attachFile('input[@type="file"]', 'prices.xls');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |
| `filename` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::attachFile() - 

---
### tryToAttachFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToAttachFile(mixed $field, string $filename): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Attaches a file relative to the Codeception `_data` directory to the given file upload field.

```php
<?php
// file is stored in 'tests/_data/prices.xls'
$I->attachFile('input[@type="file"]', 'prices.xls');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |
| `filename` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::attachFile() - 

---
### retryAttachFile

[!] Method is generated.

```php
public AcceptanceTesterActions::retryAttachFile(mixed $field, string $filename): mixed
```

* Executes attachFile and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |
| `filename` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::attachFile() - 

---
### grabTextFrom

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::grabTextFrom(mixed $cssOrXPathOrRegex): mixed
```

Finds and returns the text contents of the given element.
If a fuzzy locator is used, the element is found using CSS, XPath,
and by matching the full page source by regular expression.

```php
<?php
$heading = $I->grabTextFrom('h1');
$heading = $I->grabTextFrom('descendant-or-self::h1');
$value = $I->grabTextFrom('~<input value=(.*?)]~sgi'); // match with a regex
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPathOrRegex` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabTextFrom() - 

---
### retryGrabTextFrom

[!] Method is generated.

```php
public AcceptanceTesterActions::retryGrabTextFrom(mixed $cssOrXPathOrRegex): mixed
```

* Executes grabTextFrom and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPathOrRegex` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabTextFrom() - 

---
### grabAttributeFrom

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::grabAttributeFrom(mixed $cssOrXpath, mixed $attribute): ?string
```

Returns the value of the given attribute value from the given HTML element. For some attributes, the string `true` is returned instead of their literal value (e.g. `disabled="disabled"` or `required="required"`).
Fails if the element is not found. Returns `null` if the attribute is not present on the element.

```php
<?php
$I->grabAttributeFrom('#tooltip', 'title');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXpath` | **mixed** |  |
| `attribute` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabAttributeFrom() - 

---
### retryGrabAttributeFrom

[!] Method is generated.

```php
public AcceptanceTesterActions::retryGrabAttributeFrom(mixed $cssOrXpath, mixed $attribute): mixed
```

* Executes grabAttributeFrom and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXpath` | **mixed** |  |
| `attribute` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabAttributeFrom() - 

---
### grabValueFrom

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::grabValueFrom(mixed $field): ?string
```

Finds the value for the given form field.
If a fuzzy locator is used, the field is found by field name, CSS, and XPath.

```php
<?php
$name = $I->grabValueFrom('Name');
$name = $I->grabValueFrom('input[name=username]');
$name = $I->grabValueFrom('descendant-or-self::form/descendant::input[@name = 'username']');
$name = $I->grabValueFrom(['name' => 'username']);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabValueFrom() - 

---
### retryGrabValueFrom

[!] Method is generated.

```php
public AcceptanceTesterActions::retryGrabValueFrom(mixed $field): mixed
```

* Executes grabValueFrom and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabValueFrom() - 

---
### grabMultiple

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::grabMultiple(mixed $cssOrXpath, mixed $attribute = NULL): string[]
```

Grabs either the text content, or attribute values, of nodes
matched by $cssOrXpath and returns them as an array.

```html
<a href="#first">First</a>
<a href="#second">Second</a>
<a href="#third">Third</a>
```

```php
<?php
// would return ['First', 'Second', 'Third']
$aLinkText = $I->grabMultiple('a');

// would return ['#first', '#second', '#third']
$aLinks = $I->grabMultiple('a', 'href');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXpath` | **mixed** |  |
| `attribute` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabMultiple() - 

---
### retryGrabMultiple

[!] Method is generated.

```php
public AcceptanceTesterActions::retryGrabMultiple(mixed $cssOrXpath, mixed $attribute = NULL): mixed
```

* Executes grabMultiple and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXpath` | **mixed** |  |
| `attribute` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::grabMultiple() - 

---
### seeElement

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeElement(mixed $selector, array $attributes = []): void
```

Checks that the given element exists on the page and is visible.
You can also specify expected attributes of this element.
Only works if `<html>` tag is present.

```php
<?php
$I->seeElement('.error');
$I->seeElement('//form/input[1]');
$I->seeElement('input', ['name' => 'login']);
$I->seeElement('input', ['value' => '123456']);

// strict locator in first arg, attributes in second
$I->seeElement(['css' => 'form input'], ['name' => 'login']);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeElement() - 

---
### canSeeElement

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeElement(mixed $selector, array $attributes = []): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the given element exists on the page and is visible.
You can also specify expected attributes of this element.
Only works if `<html>` tag is present.

```php
<?php
$I->seeElement('.error');
$I->seeElement('//form/input[1]');
$I->seeElement('input', ['name' => 'login']);
$I->seeElement('input', ['value' => '123456']);

// strict locator in first arg, attributes in second
$I->seeElement(['css' => 'form input'], ['name' => 'login']);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeElement() - 

---
### tryToSeeElement

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeElement(mixed $selector, array $attributes = []): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the given element exists on the page and is visible.
You can also specify expected attributes of this element.
Only works if `<html>` tag is present.

```php
<?php
$I->seeElement('.error');
$I->seeElement('//form/input[1]');
$I->seeElement('input', ['name' => 'login']);
$I->seeElement('input', ['value' => '123456']);

// strict locator in first arg, attributes in second
$I->seeElement(['css' => 'form input'], ['name' => 'login']);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeElement() - 

---
### retrySeeElement

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeElement(mixed $selector, array $attributes = []): mixed
```

* Executes seeElement and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeElement() - 

---
### dontSeeElement

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeElement(mixed $selector, array $attributes = []): void
```

Checks that the given element is invisible or not present on the page.
You can also specify expected attributes of this element.

```php
<?php
$I->dontSeeElement('.error');
$I->dontSeeElement('//form/input[1]');
$I->dontSeeElement('input', ['name' => 'login']);
$I->dontSeeElement('input', ['value' => '123456']);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeElement() - 

---
### cantSeeElement

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeElement(mixed $selector, array $attributes = []): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the given element is invisible or not present on the page.
You can also specify expected attributes of this element.

```php
<?php
$I->dontSeeElement('.error');
$I->dontSeeElement('//form/input[1]');
$I->dontSeeElement('input', ['name' => 'login']);
$I->dontSeeElement('input', ['value' => '123456']);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeElement() - 

---
### tryToDontSeeElement

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeElement(mixed $selector, array $attributes = []): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the given element is invisible or not present on the page.
You can also specify expected attributes of this element.

```php
<?php
$I->dontSeeElement('.error');
$I->dontSeeElement('//form/input[1]');
$I->dontSeeElement('input', ['name' => 'login']);
$I->dontSeeElement('input', ['value' => '123456']);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeElement() - 

---
### retryDontSeeElement

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeElement(mixed $selector, array $attributes = []): mixed
```

* Executes dontSeeElement and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeElement() - 

---
### seeElementInDOM

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeElementInDOM(string|array|\Tests\Support\_generated\WebDriverBy $selector, array $attributes = []): void
```

Checks that the given element exists on the page, even it is invisible.

``` php
<?php
$I->seeElementInDOM('//form/input[type=hidden]');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeElementInDOM() - 

---
### canSeeElementInDOM

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeElementInDOM(string|array|\Tests\Support\_generated\WebDriverBy $selector, array $attributes = []): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the given element exists on the page, even it is invisible.

``` php
<?php
$I->seeElementInDOM('//form/input[type=hidden]');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeElementInDOM() - 

---
### tryToSeeElementInDOM

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeElementInDOM(string|array|\Tests\Support\_generated\WebDriverBy $selector, array $attributes = []): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the given element exists on the page, even it is invisible.

``` php
<?php
$I->seeElementInDOM('//form/input[type=hidden]');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeElementInDOM() - 

---
### retrySeeElementInDOM

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeElementInDOM(mixed $selector, array $attributes = []): mixed
```

* Executes seeElementInDOM and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeElementInDOM() - 

---
### dontSeeElementInDOM

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeElementInDOM(string|array|\Tests\Support\_generated\WebDriverBy $selector, array $attributes = []): void
```

Opposite of `seeElementInDOM`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeElementInDOM() - 

---
### cantSeeElementInDOM

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeElementInDOM(string|array|\Tests\Support\_generated\WebDriverBy $selector, array $attributes = []): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Opposite of `seeElementInDOM`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeElementInDOM() - 

---
### tryToDontSeeElementInDOM

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeElementInDOM(string|array|\Tests\Support\_generated\WebDriverBy $selector, array $attributes = []): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Opposite of `seeElementInDOM`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeElementInDOM() - 

---
### retryDontSeeElementInDOM

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeElementInDOM(mixed $selector, array $attributes = []): mixed
```

* Executes dontSeeElementInDOM and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `attributes` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeElementInDOM() - 

---
### seeNumberOfElements

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeNumberOfElements(mixed $selector, int|int[] $expected): void
```

Checks that there are a certain number of elements matched by the given locator on the page.

```php
<?php
$I->seeNumberOfElements('tr', 10);
$I->seeNumberOfElements('tr', [0,10]); // between 0 and 10 elements
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `expected` | **int|int[]** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeNumberOfElements() - 

---
### canSeeNumberOfElements

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeNumberOfElements(mixed $selector, int|int[] $expected): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that there are a certain number of elements matched by the given locator on the page.

```php
<?php
$I->seeNumberOfElements('tr', 10);
$I->seeNumberOfElements('tr', [0,10]); // between 0 and 10 elements
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `expected` | **int|int[]** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeNumberOfElements() - 

---
### tryToSeeNumberOfElements

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeNumberOfElements(mixed $selector, int|int[] $expected): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that there are a certain number of elements matched by the given locator on the page.

```php
<?php
$I->seeNumberOfElements('tr', 10);
$I->seeNumberOfElements('tr', [0,10]); // between 0 and 10 elements
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `expected` | **int|int[]** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeNumberOfElements() - 

---
### retrySeeNumberOfElements

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeNumberOfElements(mixed $selector, mixed $expected): mixed
```

* Executes seeNumberOfElements and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `expected` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeNumberOfElements() - 

---
### seeNumberOfElementsInDOM

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeNumberOfElementsInDOM(string|array|\Tests\Support\_generated\WebDriverBy $selector, int|array $expected): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `expected` | **int|array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeNumberOfElementsInDOM() - 

---
### canSeeNumberOfElementsInDOM

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeNumberOfElementsInDOM(string|array|\Tests\Support\_generated\WebDriverBy $selector, int|array $expected): mixed
```

[!] Conditional Assertion: Test won't be stopped on fail






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `expected` | **int|array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeNumberOfElementsInDOM() - 

---
### tryToSeeNumberOfElementsInDOM

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeNumberOfElementsInDOM(string|array|\Tests\Support\_generated\WebDriverBy $selector, int|array $expected): bool
```

[!] Test won't be stopped on fail. Error won't be logged






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `expected` | **int|array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeNumberOfElementsInDOM() - 

---
### retrySeeNumberOfElementsInDOM

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeNumberOfElementsInDOM(mixed $selector, mixed $expected): mixed
```

* Executes seeNumberOfElementsInDOM and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `expected` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeNumberOfElementsInDOM() - 

---
### seeOptionIsSelected

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeOptionIsSelected(mixed $selector, mixed $optionText): mixed|void
```

Checks that the given option is selected.

```php
<?php
$I->seeOptionIsSelected('#form input[name=payment]', 'Visa');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `optionText` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeOptionIsSelected() - 

---
### canSeeOptionIsSelected

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeOptionIsSelected(mixed $selector, mixed $optionText): mixed|void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the given option is selected.

```php
<?php
$I->seeOptionIsSelected('#form input[name=payment]', 'Visa');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `optionText` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeOptionIsSelected() - 

---
### tryToSeeOptionIsSelected

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeOptionIsSelected(mixed $selector, mixed $optionText): mixed|void
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the given option is selected.

```php
<?php
$I->seeOptionIsSelected('#form input[name=payment]', 'Visa');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `optionText` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeOptionIsSelected() - 

---
### retrySeeOptionIsSelected

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeOptionIsSelected(mixed $selector, mixed $optionText): mixed
```

* Executes seeOptionIsSelected and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `optionText` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeOptionIsSelected() - 

---
### dontSeeOptionIsSelected

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeOptionIsSelected(mixed $selector, mixed $optionText): mixed|void
```

Checks that the given option is not selected.

```php
<?php
$I->dontSeeOptionIsSelected('#form input[name=payment]', 'Visa');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `optionText` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeOptionIsSelected() - 

---
### cantSeeOptionIsSelected

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeOptionIsSelected(mixed $selector, mixed $optionText): mixed|void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the given option is not selected.

```php
<?php
$I->dontSeeOptionIsSelected('#form input[name=payment]', 'Visa');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `optionText` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeOptionIsSelected() - 

---
### tryToDontSeeOptionIsSelected

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeOptionIsSelected(mixed $selector, mixed $optionText): mixed|void
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the given option is not selected.

```php
<?php
$I->dontSeeOptionIsSelected('#form input[name=payment]', 'Visa');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `optionText` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeOptionIsSelected() - 

---
### retryDontSeeOptionIsSelected

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeOptionIsSelected(mixed $selector, mixed $optionText): mixed
```

* Executes dontSeeOptionIsSelected and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `optionText` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeOptionIsSelected() - 

---
### seeInTitle

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeInTitle(mixed $title): mixed|void
```

Checks that the page title contains the given string.

```php
<?php
$I->seeInTitle('Blog - Post #1');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInTitle() - 

---
### canSeeInTitle

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeInTitle(mixed $title): mixed|void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the page title contains the given string.

```php
<?php
$I->seeInTitle('Blog - Post #1');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInTitle() - 

---
### tryToSeeInTitle

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeInTitle(mixed $title): mixed|void
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the page title contains the given string.

```php
<?php
$I->seeInTitle('Blog - Post #1');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInTitle() - 

---
### retrySeeInTitle

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeInTitle(mixed $title): mixed
```

* Executes seeInTitle and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInTitle() - 

---
### dontSeeInTitle

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeInTitle(mixed $title): mixed|void
```

Checks that the page title does not contain the given string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInTitle() - 

---
### cantSeeInTitle

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeInTitle(mixed $title): mixed|void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the page title does not contain the given string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInTitle() - 

---
### tryToDontSeeInTitle

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeInTitle(mixed $title): mixed|void
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the page title does not contain the given string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInTitle() - 

---
### retryDontSeeInTitle

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeInTitle(mixed $title): mixed
```

* Executes dontSeeInTitle and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInTitle() - 

---
### acceptPopup

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::acceptPopup(): void
```

Accepts the active JavaScript native popup window, as created by `window.alert`|`window.confirm`|`window.prompt`.
Don't confuse popups with modal windows,
as created by [various libraries](https://jster.net/category/windows-modals-popups).







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::acceptPopup() - 

---
### tryToAcceptPopup

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToAcceptPopup(): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Accepts the active JavaScript native popup window, as created by `window.alert`|`window.confirm`|`window.prompt`.
Don't confuse popups with modal windows,
as created by [various libraries](https://jster.net/category/windows-modals-popups).







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::acceptPopup() - 

---
### retryAcceptPopup

[!] Method is generated.

```php
public AcceptanceTesterActions::retryAcceptPopup(): mixed
```

* Executes acceptPopup and retries on failure.

Retry number and interval set by $I->retry();







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::acceptPopup() - 

---
### cancelPopup

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cancelPopup(): void
```

Dismisses the active JavaScript popup, as created by `window.alert`, `window.confirm`, or `window.prompt`.







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::cancelPopup() - 

---
### tryToCancelPopup

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToCancelPopup(): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Dismisses the active JavaScript popup, as created by `window.alert`, `window.confirm`, or `window.prompt`.







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::cancelPopup() - 

---
### retryCancelPopup

[!] Method is generated.

```php
public AcceptanceTesterActions::retryCancelPopup(): mixed
```

* Executes cancelPopup and retries on failure.

Retry number and interval set by $I->retry();







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::cancelPopup() - 

---
### seeInPopup

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeInPopup(string $text): void
```

Checks that the active JavaScript popup,
as created by `window.alert`|`window.confirm`|`window.prompt`, contains the given string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInPopup() - 

---
### canSeeInPopup

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeInPopup(string $text): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the active JavaScript popup,
as created by `window.alert`|`window.confirm`|`window.prompt`, contains the given string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInPopup() - 

---
### tryToSeeInPopup

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeInPopup(string $text): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the active JavaScript popup,
as created by `window.alert`|`window.confirm`|`window.prompt`, contains the given string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInPopup() - 

---
### retrySeeInPopup

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeInPopup(string $text): mixed
```

* Executes seeInPopup and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeInPopup() - 

---
### dontSeeInPopup

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeInPopup(string $text): void
```

Checks that the active JavaScript popup,
as created by `window.alert`|`window.confirm`|`window.prompt`, does NOT contain the given string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInPopup() - 

---
### cantSeeInPopup

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeInPopup(string $text): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks that the active JavaScript popup,
as created by `window.alert`|`window.confirm`|`window.prompt`, does NOT contain the given string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInPopup() - 

---
### tryToDontSeeInPopup

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeInPopup(string $text): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks that the active JavaScript popup,
as created by `window.alert`|`window.confirm`|`window.prompt`, does NOT contain the given string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInPopup() - 

---
### retryDontSeeInPopup

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeInPopup(string $text): mixed
```

* Executes dontSeeInPopup and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dontSeeInPopup() - 

---
### typeInPopup

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::typeInPopup(string $keys): void
```

Enters text into a native JavaScript prompt popup, as created by `window.prompt`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `keys` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::typeInPopup() - 

---
### tryToTypeInPopup

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToTypeInPopup(string $keys): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Enters text into a native JavaScript prompt popup, as created by `window.prompt`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `keys` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::typeInPopup() - 

---
### retryTypeInPopup

[!] Method is generated.

```php
public AcceptanceTesterActions::retryTypeInPopup(string $keys): mixed
```

* Executes typeInPopup and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `keys` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::typeInPopup() - 

---
### reloadPage

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::reloadPage(): void
```

Reloads the current page.







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::reloadPage() - 

---
### tryToReloadPage

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToReloadPage(): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Reloads the current page.







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::reloadPage() - 

---
### retryReloadPage

[!] Method is generated.

```php
public AcceptanceTesterActions::retryReloadPage(): mixed
```

* Executes reloadPage and retries on failure.

Retry number and interval set by $I->retry();







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::reloadPage() - 

---
### moveBack

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::moveBack(): void
```

Moves back in history.







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::moveBack() - 

---
### tryToMoveBack

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToMoveBack(): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Moves back in history.







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::moveBack() - 

---
### retryMoveBack

[!] Method is generated.

```php
public AcceptanceTesterActions::retryMoveBack(): mixed
```

* Executes moveBack and retries on failure.

Retry number and interval set by $I->retry();







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::moveBack() - 

---
### moveForward

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::moveForward(): void
```

Moves forward in history.







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::moveForward() - 

---
### tryToMoveForward

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToMoveForward(): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Moves forward in history.







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::moveForward() - 

---
### retryMoveForward

[!] Method is generated.

```php
public AcceptanceTesterActions::retryMoveForward(): mixed
```

* Executes moveForward and retries on failure.

Retry number and interval set by $I->retry();







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::moveForward() - 

---
### submitForm

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::submitForm(string|array|\Tests\Support\_generated\WebDriverBy $selector, array $params, string|array|\Tests\Support\_generated\WebDriverBy|null $button = NULL): void
```

Submits the given form on the page, optionally with the given form
values.  Give the form fields values as an array. Note that hidden fields
can't be accessed.

Skipped fields will be filled by their values from the page.
You don't need to click the 'Submit' button afterwards.
This command itself triggers the request to form's action.

You can optionally specify what button's value to include
in the request with the last parameter as an alternative to
explicitly setting its value in the second parameter, as
button values are not otherwise included in the request.

Examples:

``` php
<?php
$I->submitForm('#login', [
    'login' => 'davert',
    'password' => '123456'
]);
// or
$I->submitForm('#login', [
    'login' => 'davert',
    'password' => '123456'
], 'submitButtonName');

```

For example, given this sample "Sign Up" form:

``` html
<form action="/sign_up">
    Login:
    <input type="text" name="user[login]" /><br/>
    Password:
    <input type="password" name="user[password]" /><br/>
    Do you agree to our terms?
    <input type="checkbox" name="user[agree]" /><br/>
    Select pricing plan:
    <select name="plan">
        <option value="1">Free</option>
        <option value="2" selected="selected">Paid</option>
    </select>
    <input type="submit" name="submitButton" value="Submit" />
</form>
```

You could write the following to submit it:

``` php
<?php
$I->submitForm(
    '#userForm',
    [
        'user[login]' => 'Davert',
        'user[password]' => '123456',
        'user[agree]' => true
    ],
    'submitButton'
);
```
Note that "2" will be the submitted value for the "plan" field, as it is
the selected option.

Also note that this differs from PhpBrowser, in that
```'user' => [ 'login' => 'Davert' ]``` is not supported at the moment.
Named array keys *must* be included in the name as above.

Pair this with seeInFormFields for quick testing magic.

``` php
<?php
$form = [
     'field1' => 'value',
     'field2' => 'another value',
     'checkbox1' => true,
     // ...
];
$I->submitForm('//form[@id=my-form]', $form, 'submitButton');
// $I->amOnPage('/path/to/form-page') may be needed
$I->seeInFormFields('//form[@id=my-form]', $form);
```

Parameter values must be set to arrays for multiple input fields
of the same name, or multi-select combo boxes.  For checkboxes,
either the string value can be used, or boolean values which will
be replaced by the checkbox's value in the DOM.

``` php
<?php
$I->submitForm('#my-form', [
     'field1' => 'value',
     'checkbox' => [
         'value of first checkbox',
         'value of second checkbox',
     ],
     'otherCheckboxes' => [
         true,
         false,
         false,
     ],
     'multiselect' => [
         'first option value',
         'second option value',
     ]
]);
```

Mixing string and boolean values for a checkbox's value is not supported
and may produce unexpected results.

Field names ending in "[]" must be passed without the trailing square
bracket characters, and must contain an array for its value.  This allows
submitting multiple values with the same name, consider:

```php
$I->submitForm('#my-form', [
    'field[]' => 'value',
    'field[]' => 'another value', // 'field[]' is already a defined key
]);
```

The solution is to pass an array value:

```php
// this way both values are submitted
$I->submitForm('#my-form', [
    'field' => [
        'value',
        'another value',
    ]
]);
```

The `$button` parameter can be either a string, an array or an instance
of Facebook\WebDriver\WebDriverBy. When it is a string, the
button will be found by its "name" attribute. If $button is an
array then it will be treated as a strict selector and a WebDriverBy
will be used verbatim.

For example, given the following HTML:

``` html
<input type="submit" name="submitButton" value="Submit" />
```

`$button` could be any one of the following:
  - 'submitButton'
  - ['name' => 'submitButton']
  - WebDriverBy::name('submitButton')






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `params` | **array** |  |
| `button` | **string|array|\Tests\Support\_generated\WebDriverBy|null** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::submitForm() - 

---
### tryToSubmitForm

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSubmitForm(string|array|\Tests\Support\_generated\WebDriverBy $selector, array $params, string|array|\Tests\Support\_generated\WebDriverBy|null $button = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Submits the given form on the page, optionally with the given form
values.  Give the form fields values as an array. Note that hidden fields
can't be accessed.

Skipped fields will be filled by their values from the page.
You don't need to click the 'Submit' button afterwards.
This command itself triggers the request to form's action.

You can optionally specify what button's value to include
in the request with the last parameter as an alternative to
explicitly setting its value in the second parameter, as
button values are not otherwise included in the request.

Examples:

``` php
<?php
$I->submitForm('#login', [
    'login' => 'davert',
    'password' => '123456'
]);
// or
$I->submitForm('#login', [
    'login' => 'davert',
    'password' => '123456'
], 'submitButtonName');

```

For example, given this sample "Sign Up" form:

``` html
<form action="/sign_up">
    Login:
    <input type="text" name="user[login]" /><br/>
    Password:
    <input type="password" name="user[password]" /><br/>
    Do you agree to our terms?
    <input type="checkbox" name="user[agree]" /><br/>
    Select pricing plan:
    <select name="plan">
        <option value="1">Free</option>
        <option value="2" selected="selected">Paid</option>
    </select>
    <input type="submit" name="submitButton" value="Submit" />
</form>
```

You could write the following to submit it:

``` php
<?php
$I->submitForm(
    '#userForm',
    [
        'user[login]' => 'Davert',
        'user[password]' => '123456',
        'user[agree]' => true
    ],
    'submitButton'
);
```
Note that "2" will be the submitted value for the "plan" field, as it is
the selected option.

Also note that this differs from PhpBrowser, in that
```'user' => [ 'login' => 'Davert' ]``` is not supported at the moment.
Named array keys *must* be included in the name as above.

Pair this with seeInFormFields for quick testing magic.

``` php
<?php
$form = [
     'field1' => 'value',
     'field2' => 'another value',
     'checkbox1' => true,
     // ...
];
$I->submitForm('//form[@id=my-form]', $form, 'submitButton');
// $I->amOnPage('/path/to/form-page') may be needed
$I->seeInFormFields('//form[@id=my-form]', $form);
```

Parameter values must be set to arrays for multiple input fields
of the same name, or multi-select combo boxes.  For checkboxes,
either the string value can be used, or boolean values which will
be replaced by the checkbox's value in the DOM.

``` php
<?php
$I->submitForm('#my-form', [
     'field1' => 'value',
     'checkbox' => [
         'value of first checkbox',
         'value of second checkbox',
     ],
     'otherCheckboxes' => [
         true,
         false,
         false,
     ],
     'multiselect' => [
         'first option value',
         'second option value',
     ]
]);
```

Mixing string and boolean values for a checkbox's value is not supported
and may produce unexpected results.

Field names ending in "[]" must be passed without the trailing square
bracket characters, and must contain an array for its value.  This allows
submitting multiple values with the same name, consider:

```php
$I->submitForm('#my-form', [
    'field[]' => 'value',
    'field[]' => 'another value', // 'field[]' is already a defined key
]);
```

The solution is to pass an array value:

```php
// this way both values are submitted
$I->submitForm('#my-form', [
    'field' => [
        'value',
        'another value',
    ]
]);
```

The `$button` parameter can be either a string, an array or an instance
of Facebook\WebDriver\WebDriverBy. When it is a string, the
button will be found by its "name" attribute. If $button is an
array then it will be treated as a strict selector and a WebDriverBy
will be used verbatim.

For example, given the following HTML:

``` html
<input type="submit" name="submitButton" value="Submit" />
```

`$button` could be any one of the following:
  - 'submitButton'
  - ['name' => 'submitButton']
  - WebDriverBy::name('submitButton')






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `params` | **array** |  |
| `button` | **string|array|\Tests\Support\_generated\WebDriverBy|null** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::submitForm() - 

---
### retrySubmitForm

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySubmitForm(mixed $selector, array $params, mixed $button = NULL): mixed
```

* Executes submitForm and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `params` | **array** |  |
| `button` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::submitForm() - 

---
### waitForElementChange

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::waitForElementChange(string|array|\Tests\Support\_generated\WebDriverBy $element, \Closure $callback, int $timeout = 30): void
```

Waits up to $timeout seconds for the given element to change.
Element "change" is determined by a callback function which is called repeatedly
until the return value evaluates to true.

``` php
<?php
use \Facebook\WebDriver\WebDriverElement
$I->waitForElementChange('#menu', function(WebDriverElement $el) {
    return $el->isDisplayed();
}, 100);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `callback` | **\Closure** |  |
| `timeout` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::waitForElementChange() - 

---
### waitForElement

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::waitForElement(string|array|\Tests\Support\_generated\WebDriverBy $element, int $timeout = 10): void
```

Waits up to $timeout seconds for an element to appear on the page.
If the element doesn't appear, a timeout exception is thrown.

``` php
<?php
$I->waitForElement('#agree_button', 30); // secs
$I->click('#agree_button');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `timeout` | **int** | seconds |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::waitForElement() - 

---
### waitForElementVisible

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::waitForElementVisible(string|array|\Tests\Support\_generated\WebDriverBy $element, int $timeout = 10): void
```

Waits up to $timeout seconds for the given element to be visible on the page.
If element doesn't appear, a timeout exception is thrown.

``` php
<?php
$I->waitForElementVisible('#agree_button', 30); // secs
$I->click('#agree_button');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `timeout` | **int** | seconds |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::waitForElementVisible() - 

---
### waitForElementNotVisible

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::waitForElementNotVisible(string|array|\Tests\Support\_generated\WebDriverBy $element, int $timeout = 10): void
```

Waits up to $timeout seconds for the given element to become invisible.
If element stays visible, a timeout exception is thrown.

``` php
<?php
$I->waitForElementNotVisible('#agree_button', 30); // secs
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `timeout` | **int** | seconds |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::waitForElementNotVisible() - 

---
### waitForElementClickable

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::waitForElementClickable(string|array|\Tests\Support\_generated\WebDriverBy $element, int $timeout = 10): void
```

Waits up to $timeout seconds for the given element to be clickable.
If element doesn't become clickable, a timeout exception is thrown.

``` php
<?php
$I->waitForElementClickable('#agree_button', 30); // secs
$I->click('#agree_button');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `timeout` | **int** | seconds |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::waitForElementClickable() - 

---
### waitForText

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::waitForText(string $text, int $timeout = 10, null|string|array|\Tests\Support\_generated\WebDriverBy $selector = NULL): void
```

Waits up to $timeout seconds for the given string to appear on the page.

Can also be passed a selector to search in, be as specific as possible when using selectors.
waitForText() will only watch the first instance of the matching selector / text provided.
If the given text doesn't appear, a timeout exception is thrown.

``` php
<?php
$I->waitForText('foo', 30); // secs
$I->waitForText('foo', 30, '.title'); // secs
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** |  |
| `timeout` | **int** | seconds |
| `selector` | **null|string|array|\Tests\Support\_generated\WebDriverBy** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::waitForText() - 

---
### wait

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::wait(int|float $timeout): void
```

Wait for $timeout seconds.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `timeout` | **int|float** | secs |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::wait() - 

---
### executeInSelenium

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::executeInSelenium(\Tests\Support\_generated\Closure $function): mixed
```

Low-level API method.
If Codeception commands are not enough, this allows you to use Selenium WebDriver methods directly:

``` php
$I->executeInSelenium(function(\Facebook\WebDriver\Remote\RemoteWebDriver $webdriver) {
  $webdriver->get('https://google.com');
});
```

This runs in the context of the
[RemoteWebDriver class](https://github.com/php-webdriver/php-webdriver/blob/master/lib/remote/RemoteWebDriver.php).
Try not to use this command on a regular basis.
If Codeception lacks a feature you need, please implement it and submit a patch.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **\Tests\Support\_generated\Closure** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::executeInSelenium() - 

---
### tryToExecuteInSelenium

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToExecuteInSelenium(\Tests\Support\_generated\Closure $function): mixed
```

[!] Test won't be stopped on fail. Error won't be logged
Low-level API method.
If Codeception commands are not enough, this allows you to use Selenium WebDriver methods directly:

``` php
$I->executeInSelenium(function(\Facebook\WebDriver\Remote\RemoteWebDriver $webdriver) {
  $webdriver->get('https://google.com');
});
```

This runs in the context of the
[RemoteWebDriver class](https://github.com/php-webdriver/php-webdriver/blob/master/lib/remote/RemoteWebDriver.php).
Try not to use this command on a regular basis.
If Codeception lacks a feature you need, please implement it and submit a patch.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **\Tests\Support\_generated\Closure** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::executeInSelenium() - 

---
### retryExecuteInSelenium

[!] Method is generated.

```php
public AcceptanceTesterActions::retryExecuteInSelenium(\Closure $function): mixed
```

* Executes executeInSelenium and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `function` | **\Closure** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::executeInSelenium() - 

---
### switchToWindow

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::switchToWindow(?string $name = NULL): void
```

Switch to another window identified by name.

The window can only be identified by name. If the $name parameter is blank, the parent window will be used.

Example:
``` html
<input type="button" value="Open window" onclick="window.open('https://example.com', 'another_window')">
```

``` php
<?php
$I->click("Open window");
# switch to another window
$I->switchToWindow("another_window");
# switch to parent window
$I->switchToWindow();
```

If the window has no name, match it by switching to next active tab using `switchToNextTab` method.

Or use native Selenium functions to get access to all opened windows:

``` php
<?php
$I->executeInSelenium(function (\Facebook\WebDriver\Remote\RemoteWebDriver $webdriver) {
     $handles=$webdriver->getWindowHandles();
     $last_window = end($handles);
     $webdriver->switchTo()->window($last_window);
});
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToWindow() - 

---
### tryToSwitchToWindow

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSwitchToWindow(?string $name = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Switch to another window identified by name.

The window can only be identified by name. If the $name parameter is blank, the parent window will be used.

Example:
``` html
<input type="button" value="Open window" onclick="window.open('https://example.com', 'another_window')">
```

``` php
<?php
$I->click("Open window");
# switch to another window
$I->switchToWindow("another_window");
# switch to parent window
$I->switchToWindow();
```

If the window has no name, match it by switching to next active tab using `switchToNextTab` method.

Or use native Selenium functions to get access to all opened windows:

``` php
<?php
$I->executeInSelenium(function (\Facebook\WebDriver\Remote\RemoteWebDriver $webdriver) {
     $handles=$webdriver->getWindowHandles();
     $last_window = end($handles);
     $webdriver->switchTo()->window($last_window);
});
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToWindow() - 

---
### retrySwitchToWindow

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySwitchToWindow(?string $name = NULL): mixed
```

* Executes switchToWindow and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToWindow() - 

---
### switchToIFrame

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::switchToIFrame(string|null $locator = NULL): void
```

Switch to another iframe on the page.

Example:
``` html
<iframe name="another_frame" id="fr1" src="https://example.com">

```

``` php
<?php
# switch to iframe by name
$I->switchToIFrame("another_frame");
# switch to iframe by CSS or XPath
$I->switchToIFrame("#fr1");
# switch to parent page
$I->switchToIFrame();

```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `locator` | **string|null** | (name, CSS or XPath) |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToIFrame() - 

---
### tryToSwitchToIFrame

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSwitchToIFrame(string|null $locator = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Switch to another iframe on the page.

Example:
``` html
<iframe name="another_frame" id="fr1" src="https://example.com">

```

``` php
<?php
# switch to iframe by name
$I->switchToIFrame("another_frame");
# switch to iframe by CSS or XPath
$I->switchToIFrame("#fr1");
# switch to parent page
$I->switchToIFrame();

```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `locator` | **string|null** | (name, CSS or XPath) |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToIFrame() - 

---
### retrySwitchToIFrame

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySwitchToIFrame(?string $locator = NULL): mixed
```

* Executes switchToIFrame and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `locator` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToIFrame() - 

---
### switchToFrame

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::switchToFrame(string|null $locator = NULL): void
```

Switch to another frame on the page.

Example:
``` html
<frame name="another_frame" id="fr1" src="https://example.com">

```

``` php
<?php
# switch to frame by name
$I->switchToFrame("another_frame");
# switch to frame by CSS or XPath
$I->switchToFrame("#fr1");
# switch to parent page
$I->switchToFrame();

```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `locator` | **string|null** | (name, CSS or XPath) |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToFrame() - 

---
### tryToSwitchToFrame

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSwitchToFrame(string|null $locator = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Switch to another frame on the page.

Example:
``` html
<frame name="another_frame" id="fr1" src="https://example.com">

```

``` php
<?php
# switch to frame by name
$I->switchToFrame("another_frame");
# switch to frame by CSS or XPath
$I->switchToFrame("#fr1");
# switch to parent page
$I->switchToFrame();

```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `locator` | **string|null** | (name, CSS or XPath) |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToFrame() - 

---
### retrySwitchToFrame

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySwitchToFrame(?string $locator = NULL): mixed
```

* Executes switchToFrame and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `locator` | **?string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToFrame() - 

---
### waitForJS

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::waitForJS(string $script, int $timeout = 5): void
```

Executes JavaScript and waits up to $timeout seconds for it to return true.

In this example we will wait up to 60 seconds for all jQuery AJAX requests to finish.

``` php
<?php
$I->waitForJS("return $.active == 0;", 60);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `script` | **string** |  |
| `timeout` | **int** | seconds |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::waitForJS() - 

---
### executeJS

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::executeJS(string $script, array $arguments = []): mixed
```

Executes custom JavaScript.

This example uses jQuery to get a value and assigns that value to a PHP variable:

```php
<?php
$myVar = $I->executeJS('return $("#myField").val()');

// additional arguments can be passed as array
// Example shows `Hello World` alert:
$I->executeJS("window.alert(arguments[0])", ['Hello world']);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `script` | **string** |  |
| `arguments` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::executeJS() - 

---
### tryToExecuteJS

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToExecuteJS(string $script, array $arguments = []): mixed
```

[!] Test won't be stopped on fail. Error won't be logged
Executes custom JavaScript.

This example uses jQuery to get a value and assigns that value to a PHP variable:

```php
<?php
$myVar = $I->executeJS('return $("#myField").val()');

// additional arguments can be passed as array
// Example shows `Hello World` alert:
$I->executeJS("window.alert(arguments[0])", ['Hello world']);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `script` | **string** |  |
| `arguments` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::executeJS() - 

---
### retryExecuteJS

[!] Method is generated.

```php
public AcceptanceTesterActions::retryExecuteJS(string $script, array $arguments = []): mixed
```

* Executes executeJS and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `script` | **string** |  |
| `arguments` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::executeJS() - 

---
### executeAsyncJS

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::executeAsyncJS(string $script, array $arguments = []): mixed
```

Executes asynchronous JavaScript.
A callback should be executed by JavaScript to exit from a script.
Callback is passed as a last element in `arguments` array.
Additional arguments can be passed as array in second parameter.

```js
// wait for 1200 milliseconds my running `setTimeout`
* $I->executeAsyncJS('setTimeout(arguments[0], 1200)');

$seconds = 1200; // or seconds are passed as argument
$I->executeAsyncJS('setTimeout(arguments[1], arguments[0])', [$seconds]);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `script` | **string** |  |
| `arguments` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::executeAsyncJS() - 

---
### tryToExecuteAsyncJS

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToExecuteAsyncJS(string $script, array $arguments = []): mixed
```

[!] Test won't be stopped on fail. Error won't be logged
Executes asynchronous JavaScript.
A callback should be executed by JavaScript to exit from a script.
Callback is passed as a last element in `arguments` array.
Additional arguments can be passed as array in second parameter.

```js
// wait for 1200 milliseconds my running `setTimeout`
* $I->executeAsyncJS('setTimeout(arguments[0], 1200)');

$seconds = 1200; // or seconds are passed as argument
$I->executeAsyncJS('setTimeout(arguments[1], arguments[0])', [$seconds]);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `script` | **string** |  |
| `arguments` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::executeAsyncJS() - 

---
### retryExecuteAsyncJS

[!] Method is generated.

```php
public AcceptanceTesterActions::retryExecuteAsyncJS(string $script, array $arguments = []): mixed
```

* Executes executeAsyncJS and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `script` | **string** |  |
| `arguments` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::executeAsyncJS() - 

---
### maximizeWindow

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::maximizeWindow(): void
```

Maximizes the current window.







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::maximizeWindow() - 

---
### tryToMaximizeWindow

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToMaximizeWindow(): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Maximizes the current window.







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::maximizeWindow() - 

---
### retryMaximizeWindow

[!] Method is generated.

```php
public AcceptanceTesterActions::retryMaximizeWindow(): mixed
```

* Executes maximizeWindow and retries on failure.

Retry number and interval set by $I->retry();







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::maximizeWindow() - 

---
### dragAndDrop

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dragAndDrop(string|array|\Tests\Support\_generated\WebDriverBy $source, string|array|\Tests\Support\_generated\WebDriverBy $target): void
```

Performs a simple mouse drag-and-drop operation.

``` php
<?php
$I->dragAndDrop('#drag', '#drop');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `source` | **string|array|\Tests\Support\_generated\WebDriverBy** | (CSS ID or XPath) |
| `target` | **string|array|\Tests\Support\_generated\WebDriverBy** | (CSS ID or XPath) |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dragAndDrop() - 

---
### tryToDragAndDrop

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDragAndDrop(string|array|\Tests\Support\_generated\WebDriverBy $source, string|array|\Tests\Support\_generated\WebDriverBy $target): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Performs a simple mouse drag-and-drop operation.

``` php
<?php
$I->dragAndDrop('#drag', '#drop');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `source` | **string|array|\Tests\Support\_generated\WebDriverBy** | (CSS ID or XPath) |
| `target` | **string|array|\Tests\Support\_generated\WebDriverBy** | (CSS ID or XPath) |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dragAndDrop() - 

---
### retryDragAndDrop

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDragAndDrop(mixed $source, mixed $target): mixed
```

* Executes dragAndDrop and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `source` | **mixed** |  |
| `target` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::dragAndDrop() - 

---
### moveMouseOver

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::moveMouseOver(null|string|array|\Tests\Support\_generated\WebDriverBy $cssOrXPath = NULL, ?int $offsetX = NULL, ?int $offsetY = NULL): void
```

Move mouse over the first element matched by the given locator.
If the first parameter null then the page is used.
If the second and third parameters are given,
then the mouse is moved to an offset of the element's top-left corner.
Otherwise, the mouse is moved to the center of the element.

``` php
<?php
$I->moveMouseOver(['css' => '.checkout']);
$I->moveMouseOver(null, 20, 50);
$I->moveMouseOver(['css' => '.checkout'], 20, 50);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPath` | **null|string|array|\Tests\Support\_generated\WebDriverBy** | css or xpath of the web element |
| `offsetX` | **?int** |  |
| `offsetY` | **?int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::moveMouseOver() - 

---
### tryToMoveMouseOver

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToMoveMouseOver(null|string|array|\Tests\Support\_generated\WebDriverBy $cssOrXPath = NULL, ?int $offsetX = NULL, ?int $offsetY = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Move mouse over the first element matched by the given locator.
If the first parameter null then the page is used.
If the second and third parameters are given,
then the mouse is moved to an offset of the element's top-left corner.
Otherwise, the mouse is moved to the center of the element.

``` php
<?php
$I->moveMouseOver(['css' => '.checkout']);
$I->moveMouseOver(null, 20, 50);
$I->moveMouseOver(['css' => '.checkout'], 20, 50);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPath` | **null|string|array|\Tests\Support\_generated\WebDriverBy** | css or xpath of the web element |
| `offsetX` | **?int** |  |
| `offsetY` | **?int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::moveMouseOver() - 

---
### retryMoveMouseOver

[!] Method is generated.

```php
public AcceptanceTesterActions::retryMoveMouseOver(mixed $cssOrXPath = NULL, ?int $offsetX = NULL, ?int $offsetY = NULL): mixed
```

* Executes moveMouseOver and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPath` | **mixed** |  |
| `offsetX` | **?int** |  |
| `offsetY` | **?int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::moveMouseOver() - 

---
### clickWithLeftButton

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::clickWithLeftButton(null|string|array|\Tests\Support\_generated\WebDriverBy $cssOrXPath = NULL, ?int $offsetX = NULL, ?int $offsetY = NULL): void
```

Performs click with the left mouse button on an element.
If the first parameter `null` then the offset is relative to the actual mouse position.
If the second and third parameters are given,
then the mouse is moved to an offset of the element's top-left corner.
Otherwise, the mouse is moved to the center of the element.

``` php
<?php
$I->clickWithLeftButton(['css' => '.checkout']);
$I->clickWithLeftButton(null, 20, 50);
$I->clickWithLeftButton(['css' => '.checkout'], 20, 50);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPath` | **null|string|array|\Tests\Support\_generated\WebDriverBy** | css or xpath of the web element (body by default). |
| `offsetX` | **?int** |  |
| `offsetY` | **?int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::clickWithLeftButton() - 

---
### tryToClickWithLeftButton

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToClickWithLeftButton(null|string|array|\Tests\Support\_generated\WebDriverBy $cssOrXPath = NULL, ?int $offsetX = NULL, ?int $offsetY = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Performs click with the left mouse button on an element.
If the first parameter `null` then the offset is relative to the actual mouse position.
If the second and third parameters are given,
then the mouse is moved to an offset of the element's top-left corner.
Otherwise, the mouse is moved to the center of the element.

``` php
<?php
$I->clickWithLeftButton(['css' => '.checkout']);
$I->clickWithLeftButton(null, 20, 50);
$I->clickWithLeftButton(['css' => '.checkout'], 20, 50);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPath` | **null|string|array|\Tests\Support\_generated\WebDriverBy** | css or xpath of the web element (body by default). |
| `offsetX` | **?int** |  |
| `offsetY` | **?int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::clickWithLeftButton() - 

---
### retryClickWithLeftButton

[!] Method is generated.

```php
public AcceptanceTesterActions::retryClickWithLeftButton(mixed $cssOrXPath = NULL, ?int $offsetX = NULL, ?int $offsetY = NULL): mixed
```

* Executes clickWithLeftButton and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPath` | **mixed** |  |
| `offsetX` | **?int** |  |
| `offsetY` | **?int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::clickWithLeftButton() - 

---
### clickWithRightButton

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::clickWithRightButton(null|string|array|\Tests\Support\_generated\WebDriverBy $cssOrXPath = NULL, ?int $offsetX = NULL, ?int $offsetY = NULL): void
```

Performs contextual click with the right mouse button on an element.
If the first parameter `null` then the offset is relative to the actual mouse position.
If the second and third parameters are given,
then the mouse is moved to an offset of the element's top-left corner.
Otherwise, the mouse is moved to the center of the element.

``` php
<?php
$I->clickWithRightButton(['css' => '.checkout']);
$I->clickWithRightButton(null, 20, 50);
$I->clickWithRightButton(['css' => '.checkout'], 20, 50);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPath` | **null|string|array|\Tests\Support\_generated\WebDriverBy** | css or xpath of the web element (body by default). |
| `offsetX` | **?int** |  |
| `offsetY` | **?int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::clickWithRightButton() - 

---
### tryToClickWithRightButton

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToClickWithRightButton(null|string|array|\Tests\Support\_generated\WebDriverBy $cssOrXPath = NULL, ?int $offsetX = NULL, ?int $offsetY = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Performs contextual click with the right mouse button on an element.
If the first parameter `null` then the offset is relative to the actual mouse position.
If the second and third parameters are given,
then the mouse is moved to an offset of the element's top-left corner.
Otherwise, the mouse is moved to the center of the element.

``` php
<?php
$I->clickWithRightButton(['css' => '.checkout']);
$I->clickWithRightButton(null, 20, 50);
$I->clickWithRightButton(['css' => '.checkout'], 20, 50);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPath` | **null|string|array|\Tests\Support\_generated\WebDriverBy** | css or xpath of the web element (body by default). |
| `offsetX` | **?int** |  |
| `offsetY` | **?int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::clickWithRightButton() - 

---
### retryClickWithRightButton

[!] Method is generated.

```php
public AcceptanceTesterActions::retryClickWithRightButton(mixed $cssOrXPath = NULL, ?int $offsetX = NULL, ?int $offsetY = NULL): mixed
```

* Executes clickWithRightButton and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPath` | **mixed** |  |
| `offsetX` | **?int** |  |
| `offsetY` | **?int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::clickWithRightButton() - 

---
### doubleClick

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::doubleClick(string|array|\Tests\Support\_generated\WebDriverBy $cssOrXPath): void
```

Performs a double click on an element matched by CSS or XPath.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPath` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::doubleClick() - 

---
### tryToDoubleClick

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDoubleClick(string|array|\Tests\Support\_generated\WebDriverBy $cssOrXPath): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Performs a double click on an element matched by CSS or XPath.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPath` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::doubleClick() - 

---
### retryDoubleClick

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDoubleClick(mixed $cssOrXPath): mixed
```

* Executes doubleClick and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `cssOrXPath` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::doubleClick() - 

---
### pressKey

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::pressKey(string|array|\Tests\Support\_generated\WebDriverBy $element, mixed $chars = null): void
```

Presses the given key on the given element.
To specify a character and modifier (e.g. <kbd>Ctrl</kbd>, Alt, Shift, Meta), pass an array for `$char` with
the modifier as the first element and the character as the second.
For special keys, use the constants from [`Facebook\WebDriver\WebDriverKeys`](https://github.com/php-webdriver/php-webdriver/blob/main/lib/WebDriverKeys.php).

``` php
<?php
// <input id="page" value="old" />
$I->pressKey('#page','a'); // => olda
$I->pressKey('#page',array('ctrl','a'),'new'); //=> new
$I->pressKey('#page',array('shift','111'),'1','x'); //=> old!!!1x
$I->pressKey('descendant-or-self::*[@id='page']','u'); //=> oldu
$I->pressKey('#name', array('ctrl', 'a'), \Facebook\WebDriver\WebDriverKeys::DELETE); //=>''
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `chars` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::pressKey() - 

---
### tryToPressKey

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToPressKey(string|array|\Tests\Support\_generated\WebDriverBy $element, mixed $chars = null): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Presses the given key on the given element.
To specify a character and modifier (e.g. <kbd>Ctrl</kbd>, Alt, Shift, Meta), pass an array for `$char` with
the modifier as the first element and the character as the second.
For special keys, use the constants from [`Facebook\WebDriver\WebDriverKeys`](https://github.com/php-webdriver/php-webdriver/blob/main/lib/WebDriverKeys.php).

``` php
<?php
// <input id="page" value="old" />
$I->pressKey('#page','a'); // => olda
$I->pressKey('#page',array('ctrl','a'),'new'); //=> new
$I->pressKey('#page',array('shift','111'),'1','x'); //=> old!!!1x
$I->pressKey('descendant-or-self::*[@id='page']','u'); //=> oldu
$I->pressKey('#name', array('ctrl', 'a'), \Facebook\WebDriver\WebDriverKeys::DELETE); //=>''
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `chars` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::pressKey() - 

---
### retryPressKey

[!] Method is generated.

```php
public AcceptanceTesterActions::retryPressKey(mixed $element, mixed $chars = null): mixed
```

* Executes pressKey and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **mixed** |  |
| `chars` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::pressKey() - 

---
### appendField

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::appendField(string|array|\Tests\Support\_generated\WebDriverBy $field, string $value): void
```

Append the given text to the given element.
Can also add a selection to a select box.

``` php
<?php
$I->appendField('#mySelectbox', 'SelectValue');
$I->appendField('#myTextField', 'appended');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `value` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::appendField() - 

---
### tryToAppendField

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToAppendField(string|array|\Tests\Support\_generated\WebDriverBy $field, string $value): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Append the given text to the given element.
Can also add a selection to a select box.

``` php
<?php
$I->appendField('#mySelectbox', 'SelectValue');
$I->appendField('#myTextField', 'appended');
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `value` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::appendField() - 

---
### retryAppendField

[!] Method is generated.

```php
public AcceptanceTesterActions::retryAppendField(mixed $field, string $value): mixed
```

* Executes appendField and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `field` | **mixed** |  |
| `value` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::appendField() - 

---
### saveSessionSnapshot

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::saveSessionSnapshot(mixed $name): mixed
```

Saves current cookies into named snapshot in order to restore them in other tests
This is useful to save session state between tests.
For example, if user needs log in to site for each test this scenario can be executed once
while other tests can just restore saved cookies.

``` php
<?php
// inside AcceptanceTester class:

public function login()
{
     // if snapshot exists - skipping login
     if ($I->loadSessionSnapshot('login')) return;

     // logging in
     $I->amOnPage('/login');
     $I->fillField('name', 'jon');
     $I->fillField('password', '123345');
     $I->click('Login');

     // saving snapshot
     $I->saveSessionSnapshot('login');
}
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::saveSessionSnapshot() - 

---
### tryToSaveSessionSnapshot

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSaveSessionSnapshot(mixed $name): mixed
```

[!] Test won't be stopped on fail. Error won't be logged
Saves current cookies into named snapshot in order to restore them in other tests
This is useful to save session state between tests.
For example, if user needs log in to site for each test this scenario can be executed once
while other tests can just restore saved cookies.

``` php
<?php
// inside AcceptanceTester class:

public function login()
{
     // if snapshot exists - skipping login
     if ($I->loadSessionSnapshot('login')) return;

     // logging in
     $I->amOnPage('/login');
     $I->fillField('name', 'jon');
     $I->fillField('password', '123345');
     $I->click('Login');

     // saving snapshot
     $I->saveSessionSnapshot('login');
}
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::saveSessionSnapshot() - 

---
### retrySaveSessionSnapshot

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySaveSessionSnapshot(mixed $name): mixed
```

* Executes saveSessionSnapshot and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::saveSessionSnapshot() - 

---
### loadSessionSnapshot

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::loadSessionSnapshot(mixed $name, bool $showDebug = true): mixed
```

Loads cookies from a saved snapshot.
Allows to reuse same session across tests without additional login.

See [saveSessionSnapshot](#saveSessionSnapshot)






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::loadSessionSnapshot() - 

---
### tryToLoadSessionSnapshot

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToLoadSessionSnapshot(mixed $name, bool $showDebug = true): mixed
```

[!] Test won't be stopped on fail. Error won't be logged
Loads cookies from a saved snapshot.
Allows to reuse same session across tests without additional login.

See [saveSessionSnapshot](#saveSessionSnapshot)






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::loadSessionSnapshot() - 

---
### retryLoadSessionSnapshot

[!] Method is generated.

```php
public AcceptanceTesterActions::retryLoadSessionSnapshot(mixed $name, bool $showDebug = true): mixed
```

* Executes loadSessionSnapshot and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |
| `showDebug` | **bool** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::loadSessionSnapshot() - 

---
### deleteSessionSnapshot

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::deleteSessionSnapshot(mixed $name): mixed
```

Deletes session snapshot.

See [saveSessionSnapshot](#saveSessionSnapshot)






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::deleteSessionSnapshot() - 

---
### tryToDeleteSessionSnapshot

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDeleteSessionSnapshot(mixed $name): mixed
```

[!] Test won't be stopped on fail. Error won't be logged
Deletes session snapshot.

See [saveSessionSnapshot](#saveSessionSnapshot)






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::deleteSessionSnapshot() - 

---
### retryDeleteSessionSnapshot

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDeleteSessionSnapshot(mixed $name): mixed
```

* Executes deleteSessionSnapshot and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::deleteSessionSnapshot() - 

---
### scrollTo

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::scrollTo(string|array|\Tests\Support\_generated\WebDriverBy $selector, ?int $offsetX = NULL, ?int $offsetY = NULL): void
```

Move to the middle of the given element matched by the given locator.
Extra shift, calculated from the top-left corner of the element,
can be set by passing $offsetX and $offsetY parameters.

``` php
<?php
$I->scrollTo(['css' => '.checkout'], 20, 50);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `offsetX` | **?int** |  |
| `offsetY` | **?int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::scrollTo() - 

---
### tryToScrollTo

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToScrollTo(string|array|\Tests\Support\_generated\WebDriverBy $selector, ?int $offsetX = NULL, ?int $offsetY = NULL): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Move to the middle of the given element matched by the given locator.
Extra shift, calculated from the top-left corner of the element,
can be set by passing $offsetX and $offsetY parameters.

``` php
<?php
$I->scrollTo(['css' => '.checkout'], 20, 50);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `offsetX` | **?int** |  |
| `offsetY` | **?int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::scrollTo() - 

---
### retryScrollTo

[!] Method is generated.

```php
public AcceptanceTesterActions::retryScrollTo(mixed $selector, ?int $offsetX = NULL, ?int $offsetY = NULL): mixed
```

* Executes scrollTo and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `selector` | **mixed** |  |
| `offsetX` | **?int** |  |
| `offsetY` | **?int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::scrollTo() - 

---
### openNewTab

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::openNewTab(): void
```

Opens a new browser tab and switches to it.

```php
<?php
$I->openNewTab();
```
The tab is opened with JavaScript's `window.open()`, which means:
* Some ad-blockers might restrict it.
* The sessionStorage is copied to the new tab (contrary to a tab that was manually opened by the user)







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::openNewTab() - 

---
### tryToOpenNewTab

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToOpenNewTab(): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Opens a new browser tab and switches to it.

```php
<?php
$I->openNewTab();
```
The tab is opened with JavaScript's `window.open()`, which means:
* Some ad-blockers might restrict it.
* The sessionStorage is copied to the new tab (contrary to a tab that was manually opened by the user)







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::openNewTab() - 

---
### retryOpenNewTab

[!] Method is generated.

```php
public AcceptanceTesterActions::retryOpenNewTab(): mixed
```

* Executes openNewTab and retries on failure.

Retry number and interval set by $I->retry();







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::openNewTab() - 

---
### seeNumberOfTabs

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeNumberOfTabs(int $number): void
```

Checks current number of opened tabs

```php
<?php
$I->seeNumberOfTabs(2);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `number` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeNumberOfTabs() - 

---
### canSeeNumberOfTabs

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeNumberOfTabs(int $number): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Checks current number of opened tabs

```php
<?php
$I->seeNumberOfTabs(2);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `number` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeNumberOfTabs() - 

---
### tryToSeeNumberOfTabs

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeNumberOfTabs(int $number): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Checks current number of opened tabs

```php
<?php
$I->seeNumberOfTabs(2);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `number` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeNumberOfTabs() - 

---
### retrySeeNumberOfTabs

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeNumberOfTabs(int $number): mixed
```

* Executes seeNumberOfTabs and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `number` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::seeNumberOfTabs() - 

---
### closeTab

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::closeTab(): void
```

Closes current browser tab and switches to previous active tab.

```php
<?php
$I->closeTab();
```







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::closeTab() - 

---
### tryToCloseTab

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToCloseTab(): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Closes current browser tab and switches to previous active tab.

```php
<?php
$I->closeTab();
```







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::closeTab() - 

---
### retryCloseTab

[!] Method is generated.

```php
public AcceptanceTesterActions::retryCloseTab(): mixed
```

* Executes closeTab and retries on failure.

Retry number and interval set by $I->retry();







**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::closeTab() - 

---
### switchToNextTab

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::switchToNextTab(int $offset = 1): void
```

Switches to next browser tab.
An offset can be specified.

```php
<?php
// switch to next tab
$I->switchToNextTab();
// switch to 2nd next tab
$I->switchToNextTab(2);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `offset` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToNextTab() - 

---
### tryToSwitchToNextTab

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSwitchToNextTab(int $offset = 1): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Switches to next browser tab.
An offset can be specified.

```php
<?php
// switch to next tab
$I->switchToNextTab();
// switch to 2nd next tab
$I->switchToNextTab(2);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `offset` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToNextTab() - 

---
### retrySwitchToNextTab

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySwitchToNextTab(int $offset = 1): mixed
```

* Executes switchToNextTab and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `offset` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToNextTab() - 

---
### switchToPreviousTab

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::switchToPreviousTab(int $offset = 1): void
```

Switches to previous browser tab.
An offset can be specified.

```php
<?php
// switch to previous tab
$I->switchToPreviousTab();
// switch to 2nd previous tab
$I->switchToPreviousTab(2);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `offset` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToPreviousTab() - 

---
### tryToSwitchToPreviousTab

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSwitchToPreviousTab(int $offset = 1): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Switches to previous browser tab.
An offset can be specified.

```php
<?php
// switch to previous tab
$I->switchToPreviousTab();
// switch to 2nd previous tab
$I->switchToPreviousTab(2);
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `offset` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToPreviousTab() - 

---
### retrySwitchToPreviousTab

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySwitchToPreviousTab(int $offset = 1): mixed
```

* Executes switchToPreviousTab and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `offset` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::switchToPreviousTab() - 

---
### performOn

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::performOn(string|array|\Tests\Support\_generated\WebDriverBy $element, callable|array|\Codeception\Util\ActionSequence $actions, int $timeout = 10): void
```

Waits for element and runs a sequence of actions inside its context.
Actions can be defined with array, callback, or `Codeception\Util\ActionSequence` instance.

Actions as array are recommended for simple to combine "waitForElement" with assertions;
`waitForElement($el)` and `see('text', $el)` can be simplified to:

```php
<?php
$I->performOn($el, ['see' => 'text']);
```

List of actions can be pragmatically build using `Codeception\Util\ActionSequence`:

```php
<?php
$I->performOn('.model', ActionSequence::build()
    ->see('Warning')
    ->see('Are you sure you want to delete this?')
    ->click('Yes')
);
```

Actions executed from array or ActionSequence will print debug output for actions, and adds an action name to
exception on failure.

Whenever you need to define more actions a callback can be used. A WebDriver module is passed for argument:

```php
<?php
$I->performOn('.rememberMe', function (WebDriver $I) {
     $I->see('Remember me next time');
     $I->seeElement('#LoginForm_rememberMe');
     $I->dontSee('Login');
});
```

In 3rd argument you can set number a seconds to wait for element to appear






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `actions` | **callable|array|\Codeception\Util\ActionSequence** |  |
| `timeout` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::performOn() - 

---
### tryToPerformOn

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToPerformOn(string|array|\Tests\Support\_generated\WebDriverBy $element, callable|array|\Codeception\Util\ActionSequence $actions, int $timeout = 10): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Waits for element and runs a sequence of actions inside its context.
Actions can be defined with array, callback, or `Codeception\Util\ActionSequence` instance.

Actions as array are recommended for simple to combine "waitForElement" with assertions;
`waitForElement($el)` and `see('text', $el)` can be simplified to:

```php
<?php
$I->performOn($el, ['see' => 'text']);
```

List of actions can be pragmatically build using `Codeception\Util\ActionSequence`:

```php
<?php
$I->performOn('.model', ActionSequence::build()
    ->see('Warning')
    ->see('Are you sure you want to delete this?')
    ->click('Yes')
);
```

Actions executed from array or ActionSequence will print debug output for actions, and adds an action name to
exception on failure.

Whenever you need to define more actions a callback can be used. A WebDriver module is passed for argument:

```php
<?php
$I->performOn('.rememberMe', function (WebDriver $I) {
     $I->see('Remember me next time');
     $I->seeElement('#LoginForm_rememberMe');
     $I->dontSee('Login');
});
```

In 3rd argument you can set number a seconds to wait for element to appear






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **string|array|\Tests\Support\_generated\WebDriverBy** |  |
| `actions` | **callable|array|\Codeception\Util\ActionSequence** |  |
| `timeout` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::performOn() - 

---
### retryPerformOn

[!] Method is generated.

```php
public AcceptanceTesterActions::retryPerformOn(mixed $element, mixed $actions, int $timeout = 10): mixed
```

* Executes performOn and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `element` | **mixed** |  |
| `actions` | **mixed** |  |
| `timeout` | **int** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\WebDriver::performOn() - 

---
### amConnectedToDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::amConnectedToDatabase(string $databaseKey): void
```

Make sure you are connected to the right database.

```php
<?php
$I->seeNumRecords(2, 'users');   //executed on default database
$I->amConnectedToDatabase('db_books');
$I->seeNumRecords(30, 'books');  //executed on db_books database
//All the next queries will be on db_books
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `databaseKey` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::amConnectedToDatabase() - 

---
### performInDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::performInDatabase( $databaseKey, \Tests\Support\_generated\ActionSequence|array|callable $actions): void
```

Can be used with a callback if you don't want to change the current database in your test.

```php
<?php
$I->seeNumRecords(2, 'users');   //executed on default database
$I->performInDatabase('db_books', function($I) {
    $I->seeNumRecords(30, 'books');  //executed on db_books database
});
$I->seeNumRecords(2, 'users');  //executed on default database
```
List of actions can be pragmatically built using `Codeception\Util\ActionSequence`:

```php
<?php
$I->performInDatabase('db_books', ActionSequence::build()
    ->seeNumRecords(30, 'books')
);
```
Alternatively an array can be used:

```php
$I->performInDatabase('db_books', ['seeNumRecords' => [30, 'books']]);
```

Choose the syntax you like the most and use it,

Actions executed from array or ActionSequence will print debug output for actions, and adds an action name to
exception on failure.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `databaseKey` | **** |  |
| `actions` | **\Tests\Support\_generated\ActionSequence|array|callable** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::performInDatabase() - 

---
### tryToPerformInDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToPerformInDatabase( $databaseKey, \Tests\Support\_generated\ActionSequence|array|callable $actions): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Can be used with a callback if you don't want to change the current database in your test.

```php
<?php
$I->seeNumRecords(2, 'users');   //executed on default database
$I->performInDatabase('db_books', function($I) {
    $I->seeNumRecords(30, 'books');  //executed on db_books database
});
$I->seeNumRecords(2, 'users');  //executed on default database
```
List of actions can be pragmatically built using `Codeception\Util\ActionSequence`:

```php
<?php
$I->performInDatabase('db_books', ActionSequence::build()
    ->seeNumRecords(30, 'books')
);
```
Alternatively an array can be used:

```php
$I->performInDatabase('db_books', ['seeNumRecords' => [30, 'books']]);
```

Choose the syntax you like the most and use it,

Actions executed from array or ActionSequence will print debug output for actions, and adds an action name to
exception on failure.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `databaseKey` | **** |  |
| `actions` | **\Tests\Support\_generated\ActionSequence|array|callable** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::performInDatabase() - 

---
### retryPerformInDatabase

[!] Method is generated.

```php
public AcceptanceTesterActions::retryPerformInDatabase(mixed $databaseKey, mixed $actions): mixed
```

* Executes performInDatabase and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `databaseKey` | **mixed** |  |
| `actions` | **mixed** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::performInDatabase() - 

---
### haveInDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::haveInDatabase(string $table, array $data): int
```

Inserts an SQL record into a database. This record will be erased after the test,
unless you've configured "skip_cleanup_if_failed", and the test fails.

```php
<?php
$I->haveInDatabase('users', array('name' => 'miles', 'email' => 'miles@davis.com'));
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `data` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::haveInDatabase() - 

---
### seeInDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeInDatabase(string $table, array $criteria = []): void
```

Asserts that a row with the given column values exists.
Provide table name and column values.

```php
<?php
$I->seeInDatabase('users', ['name' => 'Davert', 'email' => 'davert@mail.com']);
```
Fails if no such user found.

Comparison expressions can be used as well:

```php
<?php
$I->seeInDatabase('posts', ['num_comments >=' => '0']);
$I->seeInDatabase('users', ['email like' => 'miles@davis.com']);
```

Supported operators: `<`, `>`, `>=`, `<=`, `!=`, `like`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::seeInDatabase() - 

---
### canSeeInDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeInDatabase(string $table, array $criteria = []): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Asserts that a row with the given column values exists.
Provide table name and column values.

```php
<?php
$I->seeInDatabase('users', ['name' => 'Davert', 'email' => 'davert@mail.com']);
```
Fails if no such user found.

Comparison expressions can be used as well:

```php
<?php
$I->seeInDatabase('posts', ['num_comments >=' => '0']);
$I->seeInDatabase('users', ['email like' => 'miles@davis.com']);
```

Supported operators: `<`, `>`, `>=`, `<=`, `!=`, `like`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::seeInDatabase() - 

---
### tryToSeeInDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeInDatabase(string $table, array $criteria = []): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Asserts that a row with the given column values exists.
Provide table name and column values.

```php
<?php
$I->seeInDatabase('users', ['name' => 'Davert', 'email' => 'davert@mail.com']);
```
Fails if no such user found.

Comparison expressions can be used as well:

```php
<?php
$I->seeInDatabase('posts', ['num_comments >=' => '0']);
$I->seeInDatabase('users', ['email like' => 'miles@davis.com']);
```

Supported operators: `<`, `>`, `>=`, `<=`, `!=`, `like`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::seeInDatabase() - 

---
### retrySeeInDatabase

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeInDatabase(string $table, array $criteria = []): mixed
```

* Executes seeInDatabase and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::seeInDatabase() - 

---
### seeNumRecords

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::seeNumRecords(int $expectedNumber, string $table, array $criteria = []): void
```

Asserts that the given number of records were found in the database.

```php
<?php
$I->seeNumRecords(1, 'users', ['name' => 'davert'])
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedNumber` | **int** | Expected number |
| `table` | **string** | Table name |
| `criteria` | **array** | Search criteria [Optional] |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::seeNumRecords() - 

---
### canSeeNumRecords

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::canSeeNumRecords(int $expectedNumber, string $table, array $criteria = []): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Asserts that the given number of records were found in the database.

```php
<?php
$I->seeNumRecords(1, 'users', ['name' => 'davert'])
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedNumber` | **int** | Expected number |
| `table` | **string** | Table name |
| `criteria` | **array** | Search criteria [Optional] |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::seeNumRecords() - 

---
### tryToSeeNumRecords

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToSeeNumRecords(int $expectedNumber, string $table, array $criteria = []): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Asserts that the given number of records were found in the database.

```php
<?php
$I->seeNumRecords(1, 'users', ['name' => 'davert'])
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedNumber` | **int** | Expected number |
| `table` | **string** | Table name |
| `criteria` | **array** | Search criteria [Optional] |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::seeNumRecords() - 

---
### retrySeeNumRecords

[!] Method is generated.

```php
public AcceptanceTesterActions::retrySeeNumRecords(int $expectedNumber, string $table, array $criteria = []): mixed
```

* Executes seeNumRecords and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedNumber` | **int** |  |
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::seeNumRecords() - 

---
### dontSeeInDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::dontSeeInDatabase(string $table, array $criteria = []): void
```

Effect is opposite to ->seeInDatabase

Asserts that there is no record with the given column values in a database.
Provide table name and column values.

``` php
<?php
$I->dontSeeInDatabase('users', ['name' => 'Davert', 'email' => 'davert@mail.com']);
```
Fails if such user was found.

Comparison expressions can be used as well:

```php
<?php
$I->dontSeeInDatabase('posts', ['num_comments >=' => '0']);
$I->dontSeeInDatabase('users', ['email like' => 'miles%']);
```

Supported operators: `<`, `>`, `>=`, `<=`, `!=`, `like`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::dontSeeInDatabase() - 

---
### cantSeeInDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::cantSeeInDatabase(string $table, array $criteria = []): void
```

[!] Conditional Assertion: Test won't be stopped on fail
Effect is opposite to ->seeInDatabase

Asserts that there is no record with the given column values in a database.
Provide table name and column values.

``` php
<?php
$I->dontSeeInDatabase('users', ['name' => 'Davert', 'email' => 'davert@mail.com']);
```
Fails if such user was found.

Comparison expressions can be used as well:

```php
<?php
$I->dontSeeInDatabase('posts', ['num_comments >=' => '0']);
$I->dontSeeInDatabase('users', ['email like' => 'miles%']);
```

Supported operators: `<`, `>`, `>=`, `<=`, `!=`, `like`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::dontSeeInDatabase() - 

---
### tryToDontSeeInDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToDontSeeInDatabase(string $table, array $criteria = []): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Effect is opposite to ->seeInDatabase

Asserts that there is no record with the given column values in a database.
Provide table name and column values.

``` php
<?php
$I->dontSeeInDatabase('users', ['name' => 'Davert', 'email' => 'davert@mail.com']);
```
Fails if such user was found.

Comparison expressions can be used as well:

```php
<?php
$I->dontSeeInDatabase('posts', ['num_comments >=' => '0']);
$I->dontSeeInDatabase('users', ['email like' => 'miles%']);
```

Supported operators: `<`, `>`, `>=`, `<=`, `!=`, `like`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::dontSeeInDatabase() - 

---
### retryDontSeeInDatabase

[!] Method is generated.

```php
public AcceptanceTesterActions::retryDontSeeInDatabase(string $table, array $criteria = []): mixed
```

* Executes dontSeeInDatabase and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::dontSeeInDatabase() - 

---
### grabColumnFromDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::grabColumnFromDatabase(string $table, string $column, array $criteria = []): array
```

Fetches all values from the column in database.
Provide table name, desired column and criteria.

``` php
<?php
$mails = $I->grabColumnFromDatabase('users', 'email', array('name' => 'RebOOter'));
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `column` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::grabColumnFromDatabase() - 

---
### retryGrabColumnFromDatabase

[!] Method is generated.

```php
public AcceptanceTesterActions::retryGrabColumnFromDatabase(string $table, string $column, array $criteria = []): mixed
```

* Executes grabColumnFromDatabase and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `column` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::grabColumnFromDatabase() - 

---
### grabFromDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::grabFromDatabase(string $table, string $column, array $criteria = []): mixed
```

Fetches a single column value from a database.
Provide table name, desired column and criteria.

``` php
<?php
$mail = $I->grabFromDatabase('users', 'email', array('name' => 'Davert'));
```
Comparison expressions can be used as well:

```php
<?php
$postNum = $I->grabFromDatabase('posts', 'num_comments', ['num_comments >=' => 100]);
$mail = $I->grabFromDatabase('users', 'email', ['email like' => 'miles%']);
```

Supported operators: `<`, `>`, `>=`, `<=`, `!=`, `like`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `column` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**

Returns a single column value or false


**See Also:**

* \Codeception\Module\Db::grabFromDatabase() - 

---
### retryGrabFromDatabase

[!] Method is generated.

```php
public AcceptanceTesterActions::retryGrabFromDatabase(string $table, string $column, array $criteria = []): mixed
```

* Executes grabFromDatabase and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `column` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::grabFromDatabase() - 

---
### grabEntryFromDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::grabEntryFromDatabase(string $table, array $criteria = []): array
```

Fetches a whole entry from a database.
Make the test fail if the entry is not found.
Provide table name, desired column and criteria.

``` php
<?php
$mail = $I->grabEntryFromDatabase('users', array('name' => 'Davert'));
```
Comparison expressions can be used as well:

```php
<?php
$post = $I->grabEntryFromDatabase('posts', ['num_comments >=' => 100]);
$user = $I->grabEntryFromDatabase('users', ['email like' => 'miles%']);
```

Supported operators: `<`, `>`, `>=`, `<=`, `!=`, `like`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**

Returns a single entry value


**See Also:**

* \Codeception\Module\Db::grabEntryFromDatabase() - 

---
### retryGrabEntryFromDatabase

[!] Method is generated.

```php
public AcceptanceTesterActions::retryGrabEntryFromDatabase(string $table, array $criteria = []): mixed
```

* Executes grabEntryFromDatabase and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::grabEntryFromDatabase() - 

---
### grabEntriesFromDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::grabEntriesFromDatabase(string $table, array $criteria = []): array&lt;string,mixed&gt;[]
```

Fetches a set of entries from a database.
Provide table name and criteria.

``` php
<?php
$mail = $I->grabEntriesFromDatabase('users', array('name' => 'Davert'));
```
Comparison expressions can be used as well:

```php
<?php
$post = $I->grabEntriesFromDatabase('posts', ['num_comments >=' => 100]);
$user = $I->grabEntriesFromDatabase('users', ['email like' => 'miles%']);
```

Supported operators: `<`, `>`, `>=`, `<=`, `!=`, `like`.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**

Returns an array of all matched rows


**See Also:**

* \Codeception\Module\Db::grabEntriesFromDatabase() - 

---
### retryGrabEntriesFromDatabase

[!] Method is generated.

```php
public AcceptanceTesterActions::retryGrabEntriesFromDatabase(string $table, array $criteria = []): mixed
```

* Executes grabEntriesFromDatabase and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::grabEntriesFromDatabase() - 

---
### grabNumRecords

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::grabNumRecords(string $table, array $criteria = []): int
```

Returns the number of rows in a database






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** | Table name |
| `criteria` | **array** | Search criteria [Optional] |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::grabNumRecords() - 

---
### retryGrabNumRecords

[!] Method is generated.

```php
public AcceptanceTesterActions::retryGrabNumRecords(string $table, array $criteria = []): mixed
```

* Executes grabNumRecords and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::grabNumRecords() - 

---
### updateInDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::updateInDatabase(string $table, array $data, array $criteria = []): void
```

Update an SQL record into a database.

```php
<?php
$I->updateInDatabase('users', array('isAdmin' => true), array('email' => 'miles@davis.com'));
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `data` | **array** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::updateInDatabase() - 

---
### tryToUpdateInDatabase

[!] Method is generated. Documentation taken from corresponding module.

```php
public AcceptanceTesterActions::tryToUpdateInDatabase(string $table, array $data, array $criteria = []): bool
```

[!] Test won't be stopped on fail. Error won't be logged
Update an SQL record into a database.

```php
<?php
$I->updateInDatabase('users', array('isAdmin' => true), array('email' => 'miles@davis.com'));
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `data` | **array** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::updateInDatabase() - 

---
### retryUpdateInDatabase

[!] Method is generated.

```php
public AcceptanceTesterActions::retryUpdateInDatabase(string $table, array $data, array $criteria = []): mixed
```

* Executes updateInDatabase and retries on failure.

Retry number and interval set by $I->retry();






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `table` | **string** |  |
| `data` | **array** |  |
| `criteria` | **array** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Db::updateInDatabase() - 

---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
