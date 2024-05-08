---
title: \Acceptance\TimesheetCest
footer: false
---

# TimesheetCest





* Full name: `\Acceptance\TimesheetCest`



## Methods

### _before



```php
public TimesheetCest::_before(\Tests\Support\AcceptanceTester $I, \Tests\Support\Page\Acceptance\Login $loginPage): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** |  |
| `loginPage` | **\Tests\Support\Page\Acceptance\Login** |  |


**Return Value:**





---
### createMyTimesheet

Create timesheet on my page.

```php
public TimesheetCest::createMyTimesheet(\Tests\Support\AcceptanceTester $I): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** |  |


**Return Value:**





---
### checkForEmptyTimesheet



```php
public TimesheetCest::checkForEmptyTimesheet(\Tests\Support\AcceptanceTester $I): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** |  |


**Return Value:**





---
### notShiftingTimesheet



```php
public TimesheetCest::notShiftingTimesheet(\Tests\Support\AcceptanceTester $I): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** |  |


**Return Value:**





---
### sameTicketTimesheet



```php
public TimesheetCest::sameTicketTimesheet(\Tests\Support\AcceptanceTester $I): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** |  |


**Return Value:**





---
### saveOnceMoreTimezone

Save the timesheet once more to ensure number do not change.

```php
public TimesheetCest::saveOnceMoreTimezone(\Tests\Support\AcceptanceTester $I): void
```

If the cell IDs are not correct, this will break the registrations.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** |  |


**Return Value:**





---
### changeTimezone



```php
public TimesheetCest::changeTimezone(\Tests\Support\AcceptanceTester $I): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** |  |


**Return Value:**





---
### editTimesheet



```php
public TimesheetCest::editTimesheet(\Tests\Support\AcceptanceTester $I): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** |  |


**Return Value:**





---
### logTimeOnTicketTimesheet



```php
public TimesheetCest::logTimeOnTicketTimesheet(\Tests\Support\AcceptanceTester $I): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** |  |


**Return Value:**





---
### showAllTimesheet



```php
public TimesheetCest::showAllTimesheet(\Tests\Support\AcceptanceTester $I): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** |  |


**Return Value:**





---
### showAllEditsTimesheet



```php
public TimesheetCest::showAllEditsTimesheet(\Tests\Support\AcceptanceTester $I): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** |  |


**Return Value:**





---
### deleteTimesheet



```php
public TimesheetCest::deleteTimesheet(\Tests\Support\AcceptanceTester $I): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** |  |


**Return Value:**





---
### changeUsersTimeZone

Change the timezone for the logged-in user.

```php
private TimesheetCest::changeUsersTimeZone(\Tests\Support\AcceptanceTester $I, string $timezone = &#039;America/Los_Angeles&#039;): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `I` | **\Tests\Support\AcceptanceTester** | The AcceptanceTester object representing the test runner. |
| `timezone` | **string** | The timezone to be set. Defaults to &#039;America/Los_Angeles&#039;. |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-08 using [phpDocumentor](http://www.phpdoc.org/)
