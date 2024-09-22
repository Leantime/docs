---
title: \Leantime\Domain\Widgets\Models\Widget
footer: false
---

# Widget




`\Leantime\Domain\Widgets\Models\Widget`




## Methods

### __construct

Constructor for creating a new instance of the class.

```php
public Widget::__construct(string $id, string $name, string $widgetUrl, string $description = &quot;&quot;, string $widgetTrigger = &quot;load&quot;, int $gridMinWidth = 1, int $gridMinHeight = 1, int $gridX, int $gridY, int $gridHeight = 1, int $gridWidth = 1, bool $noTitle = false, string $widgetLoadingIndicator = &quot;text&quot;, string $widgetBackground = &quot;default&quot;, bool $alwaysVisible = false): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **string** | The unique identifier for the widget. |
| `name` | **string** | The name of the widget. |
| `widgetUrl` | **string** | The URL of the widget. |
| `description` | **string** |  |
| `widgetTrigger` | **string** | The trigger for loading the widget (default: &quot;load&quot;). |
| `gridMinWidth` | **int** | The minimum width of the widget in the grid (default: 1). |
| `gridMinHeight` | **int** | The minimum height of the widget in the grid (default: 1). |
| `gridX` | **int** | The X position of the widget in the grid (default: 0). |
| `gridY` | **int** | The Y position of the widget in the grid (default: 0). |
| `gridHeight` | **int** | The height of the widget in the grid (default: 1). |
| `gridWidth` | **int** | The width of the widget in the grid (default: 1). |
| `noTitle` | **bool** |  |
| `widgetLoadingIndicator` | **string** | The loading indicator type for the widget (default: &quot;text&quot;). |
| `widgetBackground` | **string** | The background type for the widget (default: &quot;default&quot;). |
| `alwaysVisible` | **bool** | Indicates if the widget is always visible (default: false). |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
