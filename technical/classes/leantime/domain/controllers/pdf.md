---
title: \leantime\domain\controllers\pdf
footer: false
---

# pdf





* Full name: `\leantime\domain\controllers\pdf`
* Parent class: [pdf](../../../../classes.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\leantime\domain\controllers\pdf::CANVAS_NAME`||&#039;value&#039;|

## Methods

### htmlCanvas

htmlCanvas -  Layout canvas (must be implemented)

```php
protected pdf::htmlCanvas(array $recordsAry): string
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
public pdf::reportGenerate(int $id, array $filter = [], array $options = []): string
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
> Automatically generated from source code comments on 2023-02-28 using [phpDocumentor](http://www.phpdoc.org/)
