---
title: \Leantime\Core\Support\Format
footer: false
---

# Format

Class Format

This class provides various formatting methods for simple data types (strings, ints, floats)

* Full name: `\Leantime\Core\Support\Format`



## Methods

### __construct

Creates a new instance of the class.

```php
public Format::__construct(string|int|float $value, null|string|int|float $value2, \Leantime\Core\Support\FromFormat|null $fromFormat = FromFormat::DbDate): void
```

PSA: This class will NOT throw exceptions or error messages since it is a user facing string formatting class.
If you need to evaluate correct parsing of datetimes use the datetime helper and not this format class.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | **string|int|float** | The value to be assigned. If empty, the constructor will return early. |
| `value2` | **null|string|int|float** | The second value to be assigned. It can be null. Used for certain cases<br />as specified by $fromFormat. |
| `fromFormat` | **\Leantime\Core\Support\FromFormat|null** | The format of the values. Can be one of the constants defined in the<br />FromFormat class. |


**Return Value:**





---
### date

Returns the user formatted date string based on the 'value' property.

```php
public Format::date(string $emptyOutput = &quot;&quot;): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `emptyOutput` | **string** | The output to be returned when the &#039;value&#039; property is empty.<br />Defaults to an empty string. |


**Return Value:**

The formatted date string or the $emptyOutput if the 'value' property is empty or
the formatted date string is empty.



---
### time

Retrieve the formatted time string from the ISO value.

```php
public Format::time(): string
```

Returns an empty string if 'value' is null.







**Return Value:**

The formatted time string.



---
### isoDateTime

Generates an ISO 8601 formatted date and time string.

```php
public Format::isoDateTime(): string
```









**Return Value:**

The ISO 8601 formatted date and time string. Returns an empty string if the value is null.



---
### isoDate



```php
public Format::isoDate(): string
```






* **Warning:** this method is **deprecated**. This means that this method will likely be removed in a future version.




**Return Value:**

The ISO 8601 formatted date string. Returns an empty string if the value is null.



---
### timestamp

Generate unix timestamp from date.

```php
public Format::timestamp(): int|bool
```









**Return Value:**





---
### jsTimestamp

Generate unix timestamp from date in miliseconds for javascript usage

```php
public Format::jsTimestamp(): int|bool
```









**Return Value:**





---
### time24

Retrieves the 24-hour time string from the ISO formatted value property.

```php
public Format::time24(): string
```









**Return Value:**

The 24-hour time string. If the value property is null, an empty string is returned.



---
### userTime24toUserTime

Converts a 24-hour formatted time string to a user-friendly time string.

```php
public Format::userTime24toUserTime(): string
```









**Return Value:**

The user-friendly time string in the format "H:i A". Returns an empty string if the value is null.



---
### currency

Generates a string representation of currency.

```php
public Format::currency(): string
```









**Return Value:**

The string representation of currency.



---
### percent

Generates a string representation of a percentage.

```php
public Format::percent(): string
```









**Return Value:**

The percentage string. Returns an empty string if the value is null.
If the second value is empty, the first value is returned with a "%" sign appended.
If both values are set, the percentage is calculated and formatted to two decimal places, followed by a "%" sign.



---
### decimal

Formats a decimal number with two decimal places.

```php
public Format::decimal(): string
```









**Return Value:**

The decimal number formatted with two decimal places.



---


---
> Automatically generated from source code comments on 2024-05-07 using [phpDocumentor](http://www.phpdoc.org/)
