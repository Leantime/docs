---
title: \Leantime\Command\ListPluginCommand
footer: false
---

# ListPluginCommand

Class ListPluginCommand

This class represents a command that lists all plugins.
`\Leantime\Command\ListPluginCommand`

* Parent class: [\Leantime\Command\AbstractPluginCommand](technical/AbstractPluginCommand.md)
* This class is marked as **final** and can't be subclassed



## Methods

### configure

{@inheritdoc}

```php
protected ListPluginCommand::configure(): void
```









**Return Value:**





---
### executeCommand

Execute the actual command.

```php
protected ListPluginCommand::executeCommand(): int
```









**Return Value:**





---


## Inherited methods

### __construct

Constructor.

```php
public AbstractPluginCommand::__construct(\Leantime\Domain\Plugins\Services\Plugins $plugins): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `plugins` | **\Leantime\Domain\Plugins\Services\Plugins** |  |


**Return Value:**





---
### execute

Execute the command

```php
protected AbstractPluginCommand::execute(\Symfony\Component\Console\Input\InputInterface $input, \Symfony\Component\Console\Output\OutputInterface $output): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | **\Symfony\Component\Console\Input\InputInterface** |  |
| `output` | **\Symfony\Component\Console\Output\OutputInterface** |  |


**Return Value:**

0 if everything went fine, or an exit code.



---
### executeCommand

Execute the actual command.

```php
protected AbstractPluginCommand::executeCommand(): int
```




* This method is **abstract**.




**Return Value:**





---
### confirm

Asks a confirmation question.

```php
protected AbstractPluginCommand::confirm(string $question): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `question` | **string** |  |


**Return Value:**





---
### getAllPlugins



```php
protected AbstractPluginCommand::getAllPlugins(): array|\Leantime\Domain\Plugins\Models\InstalledPlugin[]
```









**Return Value:**





---
### getPlugin



```php
protected AbstractPluginCommand::getPlugin(string $name): \Leantime\Domain\Plugins\Models\InstalledPlugin
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | **string** |  |


**Return Value:**





---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
