---
title: \Leantime\Core\Support\DateTimeHelper
footer: false
---

# DateTimeHelper

Class DateTimeHelper

A helper class for working with dates and times.
This class should NOT contain any formatting methods. Any datetime formatting should be included into the
CarbonMacros class
`\Leantime\Core\Support\DateTimeHelper`

* Parent class: [CarbonImmutable](../../../../classes.md)



## Methods

### __construct

Constructs a new instance of the class.

```php
public DateTimeHelper::__construct(\DateTimeInterface|null|string $time = null, \DateTimeZone|null|string $tz = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `time` | **\DateTimeInterface|null|string** | Optional. The datetime object, ISO format string, or null. |
| `tz` | **\DateTimeZone|null|string** | Optional. The timezone object, timezone identifier, or null. |


**Return Value:**





---
### parseUserDateTime

Parses a user input date and time and returns a CarbonImmutable object.

```php
public DateTimeHelper::parseUserDateTime(string $userDate, string $userTime = &quot;&quot;): \Carbon\CarbonImmutable
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `userDate` | **string** | The user input date in the format specified by $this-&gt;userDateFormat. |
| `userTime` | **string** | The user input time in the format specified by $this-&gt;userTimeFormat.<br />Defaults to an empty string. Can also be one of start&amp;#124;end to denote start or end time of<br />day |


**Return Value:**

The parsed date and time in user timezone as a CarbonImmutable object.



---
### parseDbDateTime

Parses a database date string and returns a CarbonImmutable instance.

```php
public DateTimeHelper::parseDbDateTime(string $dbDate): \Carbon\CarbonImmutable
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dbDate` | **string** | The date string in the database format to parse. |


**Return Value:**

The parsed CarbonImmutable instance in db timezone (UTC)



---
### parseUser24hTime

Parses a user 24-hour time string and returns a CarbonImmutable instance.

```php
public DateTimeHelper::parseUser24hTime(string $local24Time): \Carbon\CarbonImmutable
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `local24Time` | **string** | The 24-hour time string to parse. |


**Return Value:**

The parsed CarbonImmutable instance in the user's timezone



---
### userNow

Returns the current date and time based on the user's timezone and language.

```php
public DateTimeHelper::userNow(): \Carbon\CarbonImmutable
```









**Return Value:**

The current date and time in the user's timezone and language.



---
### dbNow

Returns the current date and time in the database timezone as a CarbonImmutable instance.

```php
public DateTimeHelper::dbNow(): \Carbon\CarbonImmutable
```









**Return Value:**

The current date and time in the database timezone (UTC) as a CarbonImmutable instance.



---
### setCarbonDate

Sets the CarbonImmutable date for the current instance.

```php
public DateTimeHelper::setCarbonDate(\Carbon\CarbonImmutable|\Carbon\Carbon $date): string|\Carbon\CarbonImmutable|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `date` | **\Carbon\CarbonImmutable|\Carbon\Carbon** | The CarbonImmutable or Carbon instance to set the date. |


**Return Value:**





---
### isValidDateString

isValidDateString - checks if a given string is a valid date and time string

```php
public DateTimeHelper::isValidDateString(string|null $dateTimeString): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `dateTimeString` | **string|null** | The date and time string to be validated |


**Return Value:**

Returns true if the string is a valid date and time string, false otherwise



---


---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)
