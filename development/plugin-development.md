
# Leantime Plugin Development Guide

## Introduction to the Hello World Plugin

Leantime plugins provide a way to extend the core functionality of Leantime without modifying the core codebase. Plugins can add new features, modify existing functionality, and integrate with external services. This guide will walk you through creating your first plugin using a Hello World example.
This guide demonstrates plugin development in Leantime using our Hello World plugin as a practical example. The Hello World plugin shows the basic concepts of:
- Plugin structure and organization
- Menu integration
- Language/translation support
- MVC pattern implementation
- Event handling

## Plugin Structure

The Hello World plugin uses this directory structure:
```
/app/Plugins/HelloWorld/
├── bootstrap.php           # Plugin initialization
├── composer.json          # Plugin metadata
├── register.php          # Event/feature registration
├── Controllers/         # Plugin controllers
│   └── HelloWorld.php  # Main controller
├── Views/              # Blade templates
│   └── show.blade.php # Main view
├── Language/          # Translation files
│   └── en-US.ini     # English translations
└── Docs/             # Documentation
    └── plugin-development.md
```

## Key Components

### 1. composer.json
The composer file is a key component for plugin management. The core plugin manager will use this file to determine namespace and description.
```json
{
    "name": "leantime/helloworld",
    "description": "A simple Hello World plugin for Leantime",
    "version": "1.0.0",
    "type": "leantime-plugin",
    "license": "MIT",
    "autoload": {
        "psr-4": {
            "Leantime\\Plugins\\HelloWorld\\": "/"
        }
    }
     }
```

### 2. register.php
The register file allows you to hook into events. Register.php files are read and included early in the stack.
Our Registration helper class comes with various methods to hoook into often used events such as middleware, language files and menus.

```php
$registration = app()->makeWith(Registration::class, ['pluginId' => 'HelloWorld']);

// Register languages
$registration->registerLanguageFiles(['en-US']);

// Add menu item
$registration->addMenuItem([
    'title' => 'helloworld.menu.title',
    'icon' => 'fa fa-smile',
    'tooltip' => 'helloworld.menu.tooltip',
    'href' => '/hello-world/show',
     ], 'personal', [10]);
```

### 3. Language File (en-US.ini)
```ini
helloworld.menu.title = "Hello World"
helloworld.menu.tooltip = "A simple Hello World example"
helloworld.headline = "Hello World Plugin"
helloworld.text = "Hello from your first Leantime plugin!"
```

### 4. Controller (HelloWorld.php)
Leantimne uses frontcontroller pattern and directs routes automatically based on url structure. 
As such make sure to call your controllers and controller methods in the way you'd like them to be accessible via url.
In the example below the controller will be available via `domain/helloworld/HelloWorldController/show`
```php
namespace Leantime\Plugins\HelloWorld\Controllers;

class HelloWorldController extends Controller
{
    public function show()
    {
        return $this->tpl->display('plugins.helloworld.show');
    }
     }
```

### 5. View (show.blade.php)
```php
@extends($layout)

@section('content')
    <div class="pageheader">
        <div class="pageicon"><i class="fa fa-smile"></i></div>
        <div class="pagetitle">
            <h1>{{ __('helloworld.headline') }}</h1>
        </div>
    </div>

    <div class="maincontent">
        <div class="maincontentinner">
            <h3>{{ __('helloworld.text') }}</h3>
        </div>
    </div>
@endsection
```

## Integration Points

### Menu Integration
The plugin adds a menu item using `addMenuItem()`:
- Title and tooltip from language file
- Font Awesome icon
- Route to controller action
- Position in personal menu section

### Language Support
- Uses INI format for translations
- Registered in register.php
- Accessed via `__()` helper
- Supports multiple languages

### Controller
- Extends base Controller class
- Simple show() action
- Returns Blade template view

### View
- Uses Blade templating
- Extends main layout
- Translatable strings
- Consistent styling

## Best Practices

1. **Structure**
    - Follow PSR-4 autoloading
    - Use namespaces properly
    - Organize files logically

2. **Code Style**
    - Follow PSR-12 coding standards
    - Use meaningful names
    - Document your code

3. **Integration**
    - Use event system
    - Follow MVC pattern
    - Leverage existing components

4. **Translations**
    - All strings in language files
    - Use clear translation keys
    - Support multiple languages

## Testing

1. **Manual Testing**
    - Menu item appears
    - Page loads correctly
    - Translations work
    - Styling is consistent

2. **Automated Testing**
    - Unit test controllers
    - Test translations
    - Verify routing

## Common Issues

1. **Menu Not Showing**
    - Check registration code
    - Verify menu section
    - Check permissions

2. **Translations Missing**
    - Verify language file registered
    - Check INI file syntax
    - Confirm translation keys

3. **View Not Loading**
    - Check view path
    - Verify template syntax
    - Confirm controller return

## Next Steps

After mastering the Hello World plugin:

1. **Add Features**
    - Database integration
    - User interactions
    - API endpoints

2. **Enhance UI**
    - Custom styling
    - JavaScript functionality
    - AJAX interactions

3. **Extend Integration**
    - Hook into more events
    - Add middleware
    - Create services

## Resources

1. **Documentation**
    - Leantime API docs
    - Plugin development guide
    - Blade template docs

2. **Community**
    - GitHub discussions
    - Discord channel
    - Stack Overflow

## Conclusion

The Hello World plugin demonstrates:
- Basic plugin structure
- Essential integration points
- Best practices
- Common patterns

Use this example as a foundation for building more complex plugins.