---
title: \Leantime\Domain\Valuecanvas\Controllers\Pdf
footer: false
---

# Pdf





* Full name: `\Leantime\Domain\Valuecanvas\Controllers\Pdf`
* Parent class: [Pdf](../../../../../classes.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Domain\Valuecanvas\Controllers\Pdf::CANVAS_NAME`||&#039;value&#039;|

## Methods

### htmlCanvas

htmlCanvas -  Layout canvas (must be implemented)

```php
protected Pdf::htmlCanvas(array $recordsAry): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `recordsAry` | **array** | Array of canvas data records |


**Return Value:**

HTML code



---
### reportGenerate



```php
public Pdf::reportGenerate(int $id, array $filter = [], array $options = []): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **int** |  |
| `filter` | **array** |  |
| `options` | **array** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2023-09-18 using [phpDocumentor](http://www.phpdoc.org/)
