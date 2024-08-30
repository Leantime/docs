---
title: \Leantime\Core\Support\CarbonMacros
footer: false
---

# CarbonMacros

Class CarbonMacros

This class provides macros for formatting date and time using the Carbon library.
Class is being loaded via mixins and then available to the Carbon object
`\Leantime\Core\Support\CarbonMacros`




## Methods

### __construct

Constructor method for creating a new instance of the class.

```php
public CarbonMacros::__construct(string $userTimezone = &quot;&quot;, string $userLanguage = &quot;&quot;, string $userDateFormat = &quot;&quot;, string $userTimeFormat = &quot;&quot;, string $dbFormat = &quot;Y-m-d H:i:s&quot;, string $dbTimezone = &quot;UTC&quot;): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userTimezone` | **string** | The user&#039;s preferred timezone. |
| `userLanguage` | **string** | The user&#039;s preferred language. |
| `userDateFormat` | **string** | The user&#039;s preferred date format. |
| `userTimeFormat` | **string** | The user&#039;s preferred time format. |
| `dbFormat` | **string** | The format to be used for database storage. |
| `dbTimezone` | **string** | The timezone to be used for database storage. |


**Return Value:**





---
### formatDateForUser

Formats the current date for the user based on the user's timezone,
language, and date format.

```php
public CarbonMacros::formatDateForUser(): \Closure
```









**Return Value:**

Returns a closure that accepts no arguments and returns
the formatted date as per the user's settings.



---
### formatTimeForUser

Formats the current time for the user based on the user's timezone,
language, and time format.

```php
public CarbonMacros::formatTimeForUser(): \Closure
```









**Return Value:**

Returns a closure that accepts no arguments and returns
the formatted time as per the user's settings.



---
### format24HTimeForUser

Formats the current time for the user based on the user's timezone,
language, and time format.

```php
public CarbonMacros::format24HTimeForUser(): \Closure
```









**Return Value:**

Returns a closure that accepts no arguments and returns
the formatted time as per the user's settings.



---
### formatDateTimeForDb

Formats the current date and time for storing in the database based on
the database timezone, user language, and database format.

```php
public CarbonMacros::formatDateTimeForDb(): \Closure
```









**Return Value:**

Returns a closure that accepts no arguments and returns
the formatted date and time as per the database settings.



---
### setToUserTimezone

Sets the current timezone and locale to the user's timezone and language.

```php
public CarbonMacros::setToUserTimezone(): \Closure
```









**Return Value:**

Returns a closure that accepts no arguments and sets the
timezone and locale to the user's settings.



---
### setToDbTimezone

Sets the timezone of the current datetime object to the database timezone
and sets the locale to the user's language.

```php
public CarbonMacros::setToDbTimezone(): \Closure
```









**Return Value:**

Returns a closure that accepts no arguments and returns the
current datetime object with the timezone and locale set.



---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
