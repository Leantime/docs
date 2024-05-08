---
title: \Unit\app\Core\EventsTest
footer: false
---

# EventsTest





* Full name: `\Unit\app\Core\EventsTest`
* Parent class: [Unit](../../../../classes.md)



## Methods

### testDispatchEvent

This test will check the dispatch_event method of the Events class.

```php
public EventsTest::testDispatchEvent(): mixed
```

It will dispatch an event and assert if it is added to the available_hooks array.







**Return Value:**





---
### testFindEventListeners

This test will check the findEventListeners method of the Events class.

```php
public EventsTest::testFindEventListeners(): mixed
```









**Return Value:**





---
### testGetRegistries

This test will check the get_registries method of the Events class.

```php
public EventsTest::testGetRegistries(): mixed
```

It will add new event listener and a new filter listener and check both listeners
are in the registry arrays.







**Return Value:**





---


---
> Automatically generated from source code comments on 2024-05-08 using [phpDocumentor](http://www.phpdoc.org/)
