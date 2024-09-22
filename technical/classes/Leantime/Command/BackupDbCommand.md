---
title: \Leantime\Command\BackupDbCommand
footer: false
---

# BackupDbCommand

Class BackupDbCommand

Command to back up the database.

Usage:
  php bin/console db:backup
`\Leantime\Command\BackupDbCommand`

* Parent class: [Command](../../../classes.md)



## Methods

### configure



```php
protected BackupDbCommand::configure(): void
```









**Return Value:**





---
### execute

Execute the command

```php
protected BackupDbCommand::execute(\Symfony\Component\Console\Input\InputInterface $input, \Symfony\Component\Console\Output\OutputInterface $output): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `input` | **\Symfony\Component\Console\Input\InputInterface** |  |
| `output` | **\Symfony\Component\Console\Output\OutputInterface** |  |


**Return Value:**

0 if everything went fine, or an exit code.



---


---
> Automatically generated from source code comments on 2024-09-22 using [phpDocumentor](http://www.phpdoc.org/)
