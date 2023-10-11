---
title: \Leantime\Domain\Emcanvas\Controllers\Pdf
footer: false
---

# Pdf





* Full name: `\Leantime\Domain\Emcanvas\Controllers\Pdf`
* Parent class: [Pdf](../../../../../classes.md)



## Constants

| Constant | Type | Value |
|:---      |:---  |:---   |
|`\Leantime\Domain\Emcanvas\Controllers\Pdf::CANVAS_NAME`||&#039;em&#039;|

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
### htmlListTitleTop

htmlListBoxTitleTop -  Typeset title of element box in list view

```php
protected Pdf::htmlListTitleTop(string $text, string $icon = &#039;&#039;): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | **string** | Canvas element title |
| `icon` | **string** | Optional: Icon associated with canvas element (FontAwesome code) |


**Return Value:**

HTML code



---
### htmlListDetailed

htmlList - Layout element list in a detailed form

```php
protected Pdf::htmlListDetailed(array $recordsAry): string
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
> Automatically generated from source code comments on 2023-10-11 using [phpDocumentor](http://www.phpdoc.org/)
