---
title: \Tests\Support\_generated\UnitTesterActions
footer: false
---

# UnitTesterActions





* Full name: `\Tests\Support\_generated\UnitTesterActions`




## Methods

### getScenario



```php
protected UnitTesterActions::getScenario(): \Codeception\Scenario
```




* This method is **abstract**.




**Return Value:**





---
### expectThrowable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::expectThrowable(\Throwable|string $throwable, callable $callback): void
```

Handles and checks throwables (Exceptions/Errors) called inside the callback function.
Either throwable class name or throwable instance should be provided.

```php
<?php
$I->expectThrowable(MyThrowable::class, function() {
    $this->doSomethingBad();
});

$I->expectThrowable(new MyException(), function() {
    $this->doSomethingBad();
});
```
If you want to check message or throwable code, you can pass them with throwable instance:
```php
<?php
// will check that throwable MyError is thrown with "Don't do bad things" message
$I->expectThrowable(new MyError("Don't do bad things"), function() {
    $this->doSomethingBad();
});
```






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `throwable` | **\Throwable|string** |  |
| `callback` | **callable** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\Asserts::expectThrowable() - 

---
### assertFileNotExists

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileNotExists(string $filename, string $message = &quot;&quot;): mixed
```

Asserts that a file does not exist.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filename` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileNotExists() - 

---
### assertGreaterOrEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertGreaterOrEquals(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a value is greater than or equal to another value.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertGreaterOrEquals() - 

---
### assertIsEmpty

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsEmpty(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is empty.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsEmpty() - 

---
### assertLessOrEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertLessOrEquals(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a value is smaller than or equal to another value.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertLessOrEquals() - 

---
### assertNotRegExp

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotRegExp(string $pattern, string $string, string $message = &quot;&quot;): mixed
```

Asserts that a string does not match a given regular expression.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pattern` | **string** |  |
| `string` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotRegExp() - 

---
### assertRegExp

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertRegExp(string $pattern, string $string, string $message = &quot;&quot;): mixed
```

Asserts that a string matches a given regular expression.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pattern` | **string** |  |
| `string` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertRegExp() - 

---
### assertThatItsNot

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertThatItsNot(mixed $value, \PHPUnit\Framework\Constraint\Constraint $constraint, string $message = &quot;&quot;): mixed
```

Evaluates a PHPUnit\Framework\Constraint matcher object.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | **mixed** |  |
| `constraint` | **\PHPUnit\Framework\Constraint\Constraint** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertThatItsNot() - 

---
### assertArrayHasKey

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertArrayHasKey(int|string $key, array|\ArrayAccess $array, string $message = &quot;&quot;): mixed
```

Asserts that an array has a specified key.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **int|string** |  |
| `array` | **array|\ArrayAccess** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertArrayHasKey() - 

---
### assertArrayNotHasKey

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertArrayNotHasKey(int|string $key, array|\ArrayAccess $array, string $message = &quot;&quot;): mixed
```

Asserts that an array does not have a specified key.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | **int|string** |  |
| `array` | **array|\ArrayAccess** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertArrayNotHasKey() - 

---
### assertClassHasAttribute

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertClassHasAttribute(string $attributeName, string $className, string $message = &quot;&quot;): mixed
```

Asserts that a class has a specified attribute.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `attributeName` | **string** |  |
| `className` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertClassHasAttribute() - 

---
### assertClassHasStaticAttribute

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertClassHasStaticAttribute(string $attributeName, string $className, string $message = &quot;&quot;): mixed
```

Asserts that a class has a specified static attribute.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `attributeName` | **string** |  |
| `className` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertClassHasStaticAttribute() - 

---
### assertClassNotHasAttribute

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertClassNotHasAttribute(string $attributeName, string $className, string $message = &quot;&quot;): mixed
```

Asserts that a class does not have a specified attribute.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `attributeName` | **string** |  |
| `className` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertClassNotHasAttribute() - 

---
### assertClassNotHasStaticAttribute

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertClassNotHasStaticAttribute(string $attributeName, string $className, string $message = &quot;&quot;): mixed
```

Asserts that a class does not have a specified static attribute.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `attributeName` | **string** |  |
| `className` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertClassNotHasStaticAttribute() - 

---
### assertContains

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertContains(mixed $needle, iterable $haystack, string $message = &quot;&quot;): mixed
```

Asserts that a haystack contains a needle.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `needle` | **mixed** |  |
| `haystack` | **iterable** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertContains() - 

---
### assertContainsEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertContainsEquals(mixed $needle, iterable $haystack, string $message = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `needle` | **mixed** |  |
| `haystack` | **iterable** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertContainsEquals() - 

---
### assertContainsOnly

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertContainsOnly(string $type, iterable $haystack, ?bool $isNativeType = NULL, string $message = &quot;&quot;): mixed
```

Asserts that a haystack contains only values of a given type.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **string** |  |
| `haystack` | **iterable** |  |
| `isNativeType` | **?bool** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertContainsOnly() - 

---
### assertContainsOnlyInstancesOf

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertContainsOnlyInstancesOf(string $className, iterable $haystack, string $message = &quot;&quot;): mixed
```

Asserts that a haystack contains only instances of a given class name.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `className` | **string** |  |
| `haystack` | **iterable** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertContainsOnlyInstancesOf() - 

---
### assertCount

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertCount(int $expectedCount, \Countable|iterable $haystack, string $message = &quot;&quot;): mixed
```

Asserts the number of elements of an array, Countable or Traversable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedCount` | **int** |  |
| `haystack` | **\Countable|iterable** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertCount() - 

---
### assertDirectoryDoesNotExist

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertDirectoryDoesNotExist(string $directory, string $message = &quot;&quot;): mixed
```

Asserts that a directory does not exist.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `directory` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertDirectoryDoesNotExist() - 

---
### assertDirectoryExists

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertDirectoryExists(string $directory, string $message = &quot;&quot;): mixed
```

Asserts that a directory exists.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `directory` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertDirectoryExists() - 

---
### assertDirectoryIsNotReadable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertDirectoryIsNotReadable(string $directory, string $message = &quot;&quot;): mixed
```

Asserts that a directory exists and is not readable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `directory` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertDirectoryIsNotReadable() - 

---
### assertDirectoryIsNotWritable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertDirectoryIsNotWritable(string $directory, string $message = &quot;&quot;): mixed
```

Asserts that a directory exists and is not writable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `directory` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertDirectoryIsNotWritable() - 

---
### assertDirectoryIsReadable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertDirectoryIsReadable(string $directory, string $message = &quot;&quot;): mixed
```

Asserts that a directory exists and is readable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `directory` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertDirectoryIsReadable() - 

---
### assertDirectoryIsWritable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertDirectoryIsWritable(string $directory, string $message = &quot;&quot;): mixed
```

Asserts that a directory exists and is writable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `directory` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertDirectoryIsWritable() - 

---
### assertDoesNotMatchRegularExpression

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertDoesNotMatchRegularExpression(string $pattern, string $string, string $message = &quot;&quot;): mixed
```

Asserts that a string does not match a given regular expression.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pattern` | **string** |  |
| `string` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertDoesNotMatchRegularExpression() - 

---
### assertEmpty

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertEmpty(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is empty.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertEmpty() - 

---
### assertEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertEquals(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that two variables are equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertEquals() - 

---
### assertEqualsCanonicalizing

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertEqualsCanonicalizing(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that two variables are equal (canonicalizing).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertEqualsCanonicalizing() - 

---
### assertEqualsIgnoringCase

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertEqualsIgnoringCase(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that two variables are equal (ignoring case).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertEqualsIgnoringCase() - 

---
### assertEqualsWithDelta

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertEqualsWithDelta(mixed $expected, mixed $actual, float $delta, string $message = &quot;&quot;): mixed
```

Asserts that two variables are equal (with delta).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `delta` | **float** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertEqualsWithDelta() - 

---
### assertFalse

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFalse(mixed $condition, string $message = &quot;&quot;): mixed
```

Asserts that a condition is false.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `condition` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFalse() - 

---
### assertFileDoesNotExist

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileDoesNotExist(string $filename, string $message = &quot;&quot;): mixed
```

Asserts that a file does not exist.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filename` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileDoesNotExist() - 

---
### assertFileEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileEquals(string $expected, string $actual, string $message = &quot;&quot;): mixed
```

Asserts that the contents of one file is equal to the contents of another file.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **string** |  |
| `actual` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileEquals() - 

---
### assertFileEqualsCanonicalizing

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileEqualsCanonicalizing(string $expected, string $actual, string $message = &quot;&quot;): mixed
```

Asserts that the contents of one file is equal to the contents of another file (canonicalizing).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **string** |  |
| `actual` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileEqualsCanonicalizing() - 

---
### assertFileEqualsIgnoringCase

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileEqualsIgnoringCase(string $expected, string $actual, string $message = &quot;&quot;): mixed
```

Asserts that the contents of one file is equal to the contents of another file (ignoring case).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **string** |  |
| `actual` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileEqualsIgnoringCase() - 

---
### assertFileExists

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileExists(string $filename, string $message = &quot;&quot;): mixed
```

Asserts that a file exists.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filename` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileExists() - 

---
### assertFileIsNotReadable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileIsNotReadable(string $file, string $message = &quot;&quot;): mixed
```

Asserts that a file exists and is not readable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileIsNotReadable() - 

---
### assertFileIsNotWritable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileIsNotWritable(string $file, string $message = &quot;&quot;): mixed
```

Asserts that a file exists and is not writable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileIsNotWritable() - 

---
### assertFileIsReadable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileIsReadable(string $file, string $message = &quot;&quot;): mixed
```

Asserts that a file exists and is readable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileIsReadable() - 

---
### assertFileIsWritable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileIsWritable(string $file, string $message = &quot;&quot;): mixed
```

Asserts that a file exists and is writable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `file` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileIsWritable() - 

---
### assertFileNotEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileNotEquals(string $expected, string $actual, string $message = &quot;&quot;): mixed
```

Asserts that the contents of one file is not equal to the contents of another file.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **string** |  |
| `actual` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileNotEquals() - 

---
### assertFileNotEqualsCanonicalizing

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileNotEqualsCanonicalizing(string $expected, string $actual, string $message = &quot;&quot;): mixed
```

Asserts that the contents of one file is not equal to the contents of another file (canonicalizing).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **string** |  |
| `actual` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileNotEqualsCanonicalizing() - 

---
### assertFileNotEqualsIgnoringCase

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFileNotEqualsIgnoringCase(string $expected, string $actual, string $message = &quot;&quot;): mixed
```

Asserts that the contents of one file is not equal to the contents of another file (ignoring case).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **string** |  |
| `actual` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFileNotEqualsIgnoringCase() - 

---
### assertFinite

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertFinite(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is finite.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertFinite() - 

---
### assertGreaterThan

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertGreaterThan(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a value is greater than another value.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertGreaterThan() - 

---
### assertGreaterThanOrEqual

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertGreaterThanOrEqual(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a value is greater than or equal to another value.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertGreaterThanOrEqual() - 

---
### assertInfinite

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertInfinite(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is infinite.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertInfinite() - 

---
### assertInstanceOf

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertInstanceOf(string $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of a given type.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **string** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertInstanceOf() - 

---
### assertIsArray

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsArray(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of type array.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsArray() - 

---
### assertIsBool

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsBool(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of type bool.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsBool() - 

---
### assertIsCallable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsCallable(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of type callable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsCallable() - 

---
### assertIsClosedResource

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsClosedResource(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of type resource and is closed.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsClosedResource() - 

---
### assertIsFloat

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsFloat(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of type float.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsFloat() - 

---
### assertIsInt

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsInt(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of type int.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsInt() - 

---
### assertIsIterable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsIterable(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of type iterable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsIterable() - 

---
### assertIsNotArray

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotArray(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of type array.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotArray() - 

---
### assertIsNotBool

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotBool(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of type bool.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotBool() - 

---
### assertIsNotCallable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotCallable(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of type callable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotCallable() - 

---
### assertIsNotClosedResource

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotClosedResource(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of type resource.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotClosedResource() - 

---
### assertIsNotFloat

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotFloat(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of type float.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotFloat() - 

---
### assertIsNotInt

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotInt(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of type int.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotInt() - 

---
### assertIsNotIterable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotIterable(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of type iterable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotIterable() - 

---
### assertIsNotNumeric

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotNumeric(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of type numeric.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotNumeric() - 

---
### assertIsNotObject

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotObject(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of type object.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotObject() - 

---
### assertIsNotReadable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotReadable(string $filename, string $message = &quot;&quot;): mixed
```

Asserts that a file/dir exists and is not readable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filename` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotReadable() - 

---
### assertIsNotResource

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotResource(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of type resource.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotResource() - 

---
### assertIsNotScalar

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotScalar(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of type scalar.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotScalar() - 

---
### assertIsNotString

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotString(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of type string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotString() - 

---
### assertIsNotWritable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNotWritable(string $filename, string $message = &quot;&quot;): mixed
```

Asserts that a file/dir exists and is not writable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filename` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNotWritable() - 

---
### assertIsNumeric

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsNumeric(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of type numeric.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsNumeric() - 

---
### assertIsObject

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsObject(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of type object.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsObject() - 

---
### assertIsReadable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsReadable(string $filename, string $message = &quot;&quot;): mixed
```

Asserts that a file/dir is readable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filename` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsReadable() - 

---
### assertIsResource

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsResource(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of type resource.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsResource() - 

---
### assertIsScalar

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsScalar(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of type scalar.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsScalar() - 

---
### assertIsString

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsString(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is of type string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsString() - 

---
### assertIsWritable

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertIsWritable(string $filename, string $message = &quot;&quot;): mixed
```

Asserts that a file/dir exists and is writable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `filename` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertIsWritable() - 

---
### assertJson

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertJson(string $actualJson, string $message = &quot;&quot;): mixed
```

Asserts that a string is a valid JSON string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actualJson` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertJson() - 

---
### assertJsonFileEqualsJsonFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertJsonFileEqualsJsonFile(string $expectedFile, string $actualFile, string $message = &quot;&quot;): mixed
```

Asserts that two JSON files are equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualFile` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertJsonFileEqualsJsonFile() - 

---
### assertJsonFileNotEqualsJsonFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertJsonFileNotEqualsJsonFile(string $expectedFile, string $actualFile, string $message = &quot;&quot;): mixed
```

Asserts that two JSON files are not equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualFile` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertJsonFileNotEqualsJsonFile() - 

---
### assertJsonStringEqualsJsonFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertJsonStringEqualsJsonFile(string $expectedFile, string $actualJson, string $message = &quot;&quot;): mixed
```

Asserts that the generated JSON encoded object and the content of the given file are equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualJson` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertJsonStringEqualsJsonFile() - 

---
### assertJsonStringEqualsJsonString

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertJsonStringEqualsJsonString(string $expectedJson, string $actualJson, string $message = &quot;&quot;): mixed
```

Asserts that two given JSON encoded objects or arrays are equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedJson` | **string** |  |
| `actualJson` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertJsonStringEqualsJsonString() - 

---
### assertJsonStringNotEqualsJsonFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertJsonStringNotEqualsJsonFile(string $expectedFile, string $actualJson, string $message = &quot;&quot;): mixed
```

Asserts that the generated JSON encoded object and the content of the given file are not equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualJson` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertJsonStringNotEqualsJsonFile() - 

---
### assertJsonStringNotEqualsJsonString

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertJsonStringNotEqualsJsonString(string $expectedJson, string $actualJson, string $message = &quot;&quot;): mixed
```

Asserts that two given JSON encoded objects or arrays are not equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedJson` | **string** |  |
| `actualJson` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertJsonStringNotEqualsJsonString() - 

---
### assertLessThan

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertLessThan(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a value is smaller than another value.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertLessThan() - 

---
### assertLessThanOrEqual

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertLessThanOrEqual(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a value is smaller than or equal to another value.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertLessThanOrEqual() - 

---
### assertMatchesRegularExpression

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertMatchesRegularExpression(string $pattern, string $string, string $message = &quot;&quot;): mixed
```

Asserts that a string matches a given regular expression.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `pattern` | **string** |  |
| `string` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertMatchesRegularExpression() - 

---
### assertNan

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNan(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is nan.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNan() - 

---
### assertNotContains

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotContains(mixed $needle, iterable $haystack, string $message = &quot;&quot;): mixed
```

Asserts that a haystack does not contain a needle.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `needle` | **mixed** |  |
| `haystack` | **iterable** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotContains() - 

---
### assertNotContainsEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotContainsEquals(mixed $needle, iterable $haystack, string $message = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `needle` | **mixed** |  |
| `haystack` | **iterable** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotContainsEquals() - 

---
### assertNotContainsOnly

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotContainsOnly(string $type, iterable $haystack, ?bool $isNativeType = NULL, string $message = &quot;&quot;): mixed
```

Asserts that a haystack does not contain only values of a given type.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | **string** |  |
| `haystack` | **iterable** |  |
| `isNativeType` | **?bool** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotContainsOnly() - 

---
### assertNotCount

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotCount(int $expectedCount, \Countable|iterable $haystack, string $message = &quot;&quot;): mixed
```

Asserts the number of elements of an array, Countable or Traversable.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedCount` | **int** |  |
| `haystack` | **\Countable|iterable** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotCount() - 

---
### assertNotEmpty

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotEmpty(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not empty.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotEmpty() - 

---
### assertNotEquals

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotEquals(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that two variables are not equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotEquals() - 

---
### assertNotEqualsCanonicalizing

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotEqualsCanonicalizing(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that two variables are not equal (canonicalizing).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotEqualsCanonicalizing() - 

---
### assertNotEqualsIgnoringCase

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotEqualsIgnoringCase(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that two variables are not equal (ignoring case).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotEqualsIgnoringCase() - 

---
### assertNotEqualsWithDelta

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotEqualsWithDelta(mixed $expected, mixed $actual, float $delta, string $message = &quot;&quot;): mixed
```

Asserts that two variables are not equal (with delta).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `delta` | **float** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotEqualsWithDelta() - 

---
### assertNotFalse

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotFalse(mixed $condition, string $message = &quot;&quot;): mixed
```

Asserts that a condition is not false.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `condition` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotFalse() - 

---
### assertNotInstanceOf

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotInstanceOf(string $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not of a given type.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **string** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotInstanceOf() - 

---
### assertNotNull

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotNull(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is not null.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotNull() - 

---
### assertNotSame

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotSame(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that two variables do not have the same type and value.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotSame() - 

---
### assertNotSameSize

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotSameSize(\Countable|iterable $expected, \Countable|iterable $actual, string $message = &quot;&quot;): mixed
```

Assert that the size of two arrays (or `Countable` or `Traversable` objects) is not the same.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **\Countable|iterable** |  |
| `actual` | **\Countable|iterable** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotSameSize() - 

---
### assertNotTrue

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNotTrue(mixed $condition, string $message = &quot;&quot;): mixed
```

Asserts that a condition is not true.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `condition` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNotTrue() - 

---
### assertNull

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertNull(mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that a variable is null.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertNull() - 

---
### assertObjectHasAttribute

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertObjectHasAttribute(string $attributeName, object $object, string $message = &quot;&quot;): mixed
```

Asserts that an object has a specified attribute.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `attributeName` | **string** |  |
| `object` | **object** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertObjectHasAttribute() - 

---
### assertObjectNotHasAttribute

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertObjectNotHasAttribute(string $attributeName, object $object, string $message = &quot;&quot;): mixed
```

Asserts that an object does not have a specified attribute.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `attributeName` | **string** |  |
| `object` | **object** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertObjectNotHasAttribute() - 

---
### assertSame

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertSame(mixed $expected, mixed $actual, string $message = &quot;&quot;): mixed
```

Asserts that two variables have the same type and value.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **mixed** |  |
| `actual` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertSame() - 

---
### assertSameSize

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertSameSize(\Countable|iterable $expected, \Countable|iterable $actual, string $message = &quot;&quot;): mixed
```

Assert that the size of two arrays (or `Countable` or `Traversable` objects) is the same.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expected` | **\Countable|iterable** |  |
| `actual` | **\Countable|iterable** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertSameSize() - 

---
### assertStringContainsString

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringContainsString(string $needle, string $haystack, string $message = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `needle` | **string** |  |
| `haystack` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringContainsString() - 

---
### assertStringContainsStringIgnoringCase

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringContainsStringIgnoringCase(string $needle, string $haystack, string $message = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `needle` | **string** |  |
| `haystack` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringContainsStringIgnoringCase() - 

---
### assertStringEndsNotWith

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringEndsNotWith(string $suffix, string $string, string $message = &quot;&quot;): mixed
```

Asserts that a string ends not with a given suffix.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `suffix` | **string** |  |
| `string` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringEndsNotWith() - 

---
### assertStringEndsWith

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringEndsWith(string $suffix, string $string, string $message = &quot;&quot;): mixed
```

Asserts that a string ends with a given suffix.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `suffix` | **string** |  |
| `string` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringEndsWith() - 

---
### assertStringEqualsFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringEqualsFile(string $expectedFile, string $actualString, string $message = &quot;&quot;): mixed
```

Asserts that the contents of a string is equal to the contents of a file.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualString` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringEqualsFile() - 

---
### assertStringEqualsFileCanonicalizing

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringEqualsFileCanonicalizing(string $expectedFile, string $actualString, string $message = &quot;&quot;): mixed
```

Asserts that the contents of a string is equal to the contents of a file (canonicalizing).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualString` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringEqualsFileCanonicalizing() - 

---
### assertStringEqualsFileIgnoringCase

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringEqualsFileIgnoringCase(string $expectedFile, string $actualString, string $message = &quot;&quot;): mixed
```

Asserts that the contents of a string is equal to the contents of a file (ignoring case).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualString` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringEqualsFileIgnoringCase() - 

---
### assertStringMatchesFormat

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringMatchesFormat(string $format, string $string, string $message = &quot;&quot;): mixed
```

Asserts that a string matches a given format string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `format` | **string** |  |
| `string` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringMatchesFormat() - 

---
### assertStringMatchesFormatFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringMatchesFormatFile(string $formatFile, string $string, string $message = &quot;&quot;): mixed
```

Asserts that a string matches a given format file.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formatFile` | **string** |  |
| `string` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringMatchesFormatFile() - 

---
### assertStringNotContainsString

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringNotContainsString(string $needle, string $haystack, string $message = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `needle` | **string** |  |
| `haystack` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringNotContainsString() - 

---
### assertStringNotContainsStringIgnoringCase

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringNotContainsStringIgnoringCase(string $needle, string $haystack, string $message = &quot;&quot;): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `needle` | **string** |  |
| `haystack` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringNotContainsStringIgnoringCase() - 

---
### assertStringNotEqualsFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringNotEqualsFile(string $expectedFile, string $actualString, string $message = &quot;&quot;): mixed
```

Asserts that the contents of a string is not equal to the contents of a file.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualString` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringNotEqualsFile() - 

---
### assertStringNotEqualsFileCanonicalizing

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringNotEqualsFileCanonicalizing(string $expectedFile, string $actualString, string $message = &quot;&quot;): mixed
```

Asserts that the contents of a string is not equal to the contents of a file (canonicalizing).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualString` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringNotEqualsFileCanonicalizing() - 

---
### assertStringNotEqualsFileIgnoringCase

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringNotEqualsFileIgnoringCase(string $expectedFile, string $actualString, string $message = &quot;&quot;): mixed
```

Asserts that the contents of a string is not equal to the contents of a file (ignoring case).






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualString` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringNotEqualsFileIgnoringCase() - 

---
### assertStringNotMatchesFormat

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringNotMatchesFormat(string $format, string $string, string $message = &quot;&quot;): mixed
```

Asserts that a string does not match a given format string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `format` | **string** |  |
| `string` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringNotMatchesFormat() - 

---
### assertStringNotMatchesFormatFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringNotMatchesFormatFile(string $formatFile, string $string, string $message = &quot;&quot;): mixed
```

Asserts that a string does not match a given format string.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `formatFile` | **string** |  |
| `string` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringNotMatchesFormatFile() - 

---
### assertStringStartsNotWith

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringStartsNotWith(string $prefix, string $string, string $message = &quot;&quot;): mixed
```

Asserts that a string starts not with a given prefix.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `prefix` | **string** |  |
| `string` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringStartsNotWith() - 

---
### assertStringStartsWith

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertStringStartsWith(string $prefix, string $string, string $message = &quot;&quot;): mixed
```

Asserts that a string starts with a given prefix.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `prefix` | **string** |  |
| `string` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertStringStartsWith() - 

---
### assertThat

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertThat(mixed $value, \PHPUnit\Framework\Constraint\Constraint $constraint, string $message = &quot;&quot;): mixed
```

Evaluates a PHPUnit\Framework\Constraint matcher object.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | **mixed** |  |
| `constraint` | **\PHPUnit\Framework\Constraint\Constraint** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertThat() - 

---
### assertTrue

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertTrue(mixed $condition, string $message = &quot;&quot;): mixed
```

Asserts that a condition is true.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `condition` | **mixed** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertTrue() - 

---
### assertXmlFileEqualsXmlFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertXmlFileEqualsXmlFile(string $expectedFile, string $actualFile, string $message = &quot;&quot;): mixed
```

Asserts that two XML files are equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualFile` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertXmlFileEqualsXmlFile() - 

---
### assertXmlFileNotEqualsXmlFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertXmlFileNotEqualsXmlFile(string $expectedFile, string $actualFile, string $message = &quot;&quot;): mixed
```

Asserts that two XML files are not equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualFile` | **string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertXmlFileNotEqualsXmlFile() - 

---
### assertXmlStringEqualsXmlFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertXmlStringEqualsXmlFile(string $expectedFile, \DOMDocument|string $actualXml, string $message = &quot;&quot;): mixed
```

Asserts that two XML documents are equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualXml` | **\DOMDocument|string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertXmlStringEqualsXmlFile() - 

---
### assertXmlStringEqualsXmlString

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertXmlStringEqualsXmlString(\DOMDocument|string $expectedXml, \DOMDocument|string $actualXml, string $message = &quot;&quot;): mixed
```

Asserts that two XML documents are equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedXml` | **\DOMDocument|string** |  |
| `actualXml` | **\DOMDocument|string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertXmlStringEqualsXmlString() - 

---
### assertXmlStringNotEqualsXmlFile

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertXmlStringNotEqualsXmlFile(string $expectedFile, \DOMDocument|string $actualXml, string $message = &quot;&quot;): mixed
```

Asserts that two XML documents are not equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedFile` | **string** |  |
| `actualXml` | **\DOMDocument|string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertXmlStringNotEqualsXmlFile() - 

---
### assertXmlStringNotEqualsXmlString

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::assertXmlStringNotEqualsXmlString(\DOMDocument|string $expectedXml, \DOMDocument|string $actualXml, string $message = &quot;&quot;): mixed
```

Asserts that two XML documents are not equal.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `expectedXml` | **\DOMDocument|string** |  |
| `actualXml` | **\DOMDocument|string** |  |
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::assertXmlStringNotEqualsXmlString() - 

---
### fail

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::fail(string $message = &quot;&quot;): mixed
```

Fails a test with the given message.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::fail() - 

---
### markTestIncomplete

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::markTestIncomplete(string $message = &quot;&quot;): mixed
```

Mark the test as incomplete.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::markTestIncomplete() - 

---
### markTestSkipped

[!] Method is generated. Documentation taken from corresponding module.

```php
public UnitTesterActions::markTestSkipped(string $message = &quot;&quot;): mixed
```

Mark the test as skipped.






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `message` | **string** |  |


**Return Value:**




**See Also:**

* \Codeception\Module\AbstractAsserts::markTestSkipped() - 

---

---
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)

