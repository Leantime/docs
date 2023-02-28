# Hooks

- [Events](#events)
- [Filters](#filters)

## Events

### `domain.{$module}.controllers.{$controller}.__construct.begin`


Source: [app/core/class.controller.php](https://github.com/Leantime/leantime/blob/master/app/core/class.controller.php), [line 27](https://github.com/Leantime/leantime/blob/master/app/core/class.controller.php#L27-L27)

### `domain.{$module}.controllers.{$controller}.__construct.end`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/core/class.controller.php](https://github.com/Leantime/leantime/blob/master/app/core/class.controller.php), [line 35](https://github.com/Leantime/leantime/blob/master/app/core/class.controller.php#L35-L35)

### `domain.{$module}.controllers.{$controller}.executeActions.before_init`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` |  | 

Source: [app/core/class.controller.php](https://github.com/Leantime/leantime/blob/master/app/core/class.controller.php), [line 56](https://github.com/Leantime/leantime/blob/master/app/core/class.controller.php#L56-L56)

### `domain.{$module}.controllers.{$controller}.executeActions.before_action`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` |  | 

Source: [app/core/class.controller.php](https://github.com/Leantime/leantime/blob/master/app/core/class.controller.php), [line 59](https://github.com/Leantime/leantime/blob/master/app/core/class.controller.php#L59-L59)

### `core.application.start.beginning`

*The beginning of the application*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['application' => $this]` |  | 

Source: [app/core/class.application.php](https://github.com/Leantime/leantime/blob/master/app/core/class.application.php), [line 69](https://github.com/Leantime/leantime/blob/master/app/core/class.application.php#L69-L74)

### `core.application.start.logged_in`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['application' => $this]` |  | 

Source: [app/core/class.application.php](https://github.com/Leantime/leantime/blob/master/app/core/class.application.php), [line 120](https://github.com/Leantime/leantime/blob/master/app/core/class.application.php#L120-L120)

### `core.application.start.end`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['application' => $this]` |  | 

Source: [app/core/class.application.php](https://github.com/Leantime/leantime/blob/master/app/core/class.application.php), [line 138](https://github.com/Leantime/leantime/blob/master/app/core/class.application.php#L138-L138)

### `core.mailer.sendMail.sendMailTo`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$to` |  | 

Source: [app/core/class.mailer.php](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php), [line 230](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php#L230-L230)

### `core.mailer.sendMail.sendMailFrom`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$from` |  | 

Source: [app/core/class.mailer.php](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php), [line 231](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php#L231-L231)

### `core.mailer.sendMail.bodyTemplate`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$bodyTemplate` |  | 
`[['companyColor' => $this->companyColor, 'logoUrl' => $inlineLogoContent, 'languageHiText' => $this->language->__('email_notifications.hi'), 'emailContentsHtml' => nl2br($this->html), 'unsubLink' => sprintf($this->language->__('email_notifications.unsubscribe'), BASE_URL . '/users/editOwn/')]]` |  | 

Source: [app/core/class.mailer.php](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php), [line 283](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php#L283-L295)

### `core.mailer.sendMail.altBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->text` |  | 

Source: [app/core/class.mailer.php](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php), [line 299](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php#L299-L302)

### `domain.{$module}.repositories.{$repo}.{$method}.beforeExecute`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/core/class.repository.php](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php), [line 119](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php#L119-L119)

### `domain.{$module}.repositories.{$repo}.{$method}.afterExecute`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/core/class.repository.php](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php), [line 132](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php#L132-L132)

### `domain.clients.templates.showClient.tpl.beforePageHeaderOpen`


Source: [app/domain/clients/templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showClient.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showClient.tpl.php#L8-L8)

### `domain.clients.templates.showClient.tpl.afterPageHeaderOpen`


Source: [app/domain/clients/templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showClient.tpl.php), [line 10](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showClient.tpl.php#L10-L10)

### `domain.clients.templates.showClient.tpl.beforePageHeaderClose`


Source: [app/domain/clients/templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showClient.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showClient.tpl.php#L16-L16)

### `domain.clients.templates.showClient.tpl.afterPageHeaderClose`


Source: [app/domain/clients/templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showClient.tpl.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showClient.tpl.php#L18-L18)

### `domain.clients.templates.showClient.tpl.scripts.afterOpen`


Source: [app/domain/clients/templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showClient.tpl.php), [line 293](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showClient.tpl.php#L293-L293)

### `domain.clients.templates.showClient.tpl.scripts.beforeClose`


Source: [app/domain/clients/templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showClient.tpl.php), [line 301](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showClient.tpl.php#L301-L301)

### `domain.clients.templates.newClient.tpl.beforePageHeaderOpen`


Source: [app/domain/clients/templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php), [line 6](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php#L6-L6)

### `domain.clients.templates.newClient.tpl.afterPageHeaderOpen`


Source: [app/domain/clients/templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php#L8-L8)

### `domain.clients.templates.newClient.tpl.beforePageHeaderClose`


Source: [app/domain/clients/templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php#L14-L14)

### `domain.clients.templates.newClient.tpl.afterPageHeaderClose`


Source: [app/domain/clients/templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php#L16-L16)

### `domain.clients.templates.newClient.tpl.afterFormOpen`


Source: [app/domain/clients/templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php#L29-L29)

### `domain.clients.templates.newClient.tpl.beforeSubmitButton`


Source: [app/domain/clients/templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php), [line 108](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php#L108-L108)

### `domain.clients.templates.newClient.tpl.beforeFormClose`


Source: [app/domain/clients/templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php), [line 122](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/newClient.tpl.php#L122-L122)

### `domain.clients.templates.editClient.tpl.beforePageHeaderOpen`


Source: [app/domain/clients/templates/editClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/editClient.tpl.php), [line 6](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/editClient.tpl.php#L6-L6)

### `domain.clients.templates.editClient.tpl.afterPageHeaderOpen`


Source: [app/domain/clients/templates/editClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/editClient.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/editClient.tpl.php#L8-L8)

### `domain.clients.templates.editClient.tpl.beforePageHeaderClose`


Source: [app/domain/clients/templates/editClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/editClient.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/editClient.tpl.php#L14-L14)

### `domain.clients.templates.editClient.tpl.afterPageHeaderClose`


Source: [app/domain/clients/templates/editClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/editClient.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/editClient.tpl.php#L16-L16)

### `domain.clients.templates.delClient.tpl.beforePageHeaderOpen`


Source: [app/domain/clients/templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/delClient.tpl.php), [line 6](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/delClient.tpl.php#L6-L6)

### `domain.clients.templates.delClient.tpl.afterPageHeaderOpen`


Source: [app/domain/clients/templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/delClient.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/delClient.tpl.php#L8-L8)

### `domain.clients.templates.delClient.tpl.beforePageHeaderClose`


Source: [app/domain/clients/templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/delClient.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/delClient.tpl.php#L14-L14)

### `domain.clients.templates.delClient.tpl.afterPageHeaderClose`


Source: [app/domain/clients/templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/delClient.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/delClient.tpl.php#L16-L16)

### `domain.clients.templates.delClient.tpl.afterFormOpen`


Source: [app/domain/clients/templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/delClient.tpl.php), [line 28](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/delClient.tpl.php#L28-L28)

### `domain.clients.templates.delClient.tpl.beforeFormClose`


Source: [app/domain/clients/templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/delClient.tpl.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/delClient.tpl.php#L34-L34)

### `domain.clients.templates.showAll.tpl.beforePageHeaderOpen`


Source: [app/domain/clients/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showAll.tpl.php), [line 5](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showAll.tpl.php#L5-L5)

### `domain.clients.templates.showAll.tpl.afterPageHeaderOpen`


Source: [app/domain/clients/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showAll.tpl.php), [line 7](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showAll.tpl.php#L7-L7)

### `domain.clients.templates.showAll.tpl.beforePageHeaderClose`


Source: [app/domain/clients/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showAll.tpl.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showAll.tpl.php#L13-L13)

### `domain.clients.templates.showAll.tpl.afterPageHeaderClose`


Source: [app/domain/clients/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showAll.tpl.php), [line 15](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showAll.tpl.php#L15-L15)

### `domain.clients.templates.showAll.tpl.scripts.afterOpen`


Source: [app/domain/clients/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showAll.tpl.php), [line 62](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showAll.tpl.php#L62-L62)

### `domain.clients.templates.showAll.tpl.scripts.beforeClose`


Source: [app/domain/clients/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showAll.tpl.php), [line 71](https://github.com/Leantime/leantime/blob/master/app/domain/clients/templates/showAll.tpl.php#L71-L71)

### `domain.tickets.templates.showAllMilestones.tpl.filters.afterFormOpen`


Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 36](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L36-L36)

### `domain.tickets.templates.showAllMilestones.tpl.filters.afterLefthandSectionOpen`


Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 42](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L42-L42)

### `domain.tickets.templates.showAllMilestones.tpl.filters.beforeLefthandSectionClose`


Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 48](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L48-L48)

### `domain.tickets.templates.showAllMilestones.tpl.filters.afterCenterSectionOpen`


Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 54](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L54-L54)

### `domain.tickets.templates.showAllMilestones.tpl.filters.beforeCenterSectionClose`


Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 55](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L55-L55)

### `domain.tickets.templates.showAllMilestones.tpl.filters.afterRighthandSectionOpen`


Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 61](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L61-L61)

### `domain.tickets.templates.showAllMilestones.tpl.filters.beforeRighthandSectionClose`


Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 73](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L73-L73)

### `domain.tickets.templates.showAllMilestones.tpl.filters.beforeFormClose`


Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 80](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L80-L80)

### `domain.tickets.templates.showAllMilestones.tpl.allTicketsTable.before`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 86](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L86-L86)

### `domain.tickets.templates.showAllMilestones.tpl.allTicketsTable.beforeHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 103](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L103-L103)

### `domain.tickets.templates.showAllMilestones.tpl.allTicketsTable.beforeHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 105](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L105-L105)

### `domain.tickets.templates.showAllMilestones.tpl.allTicketsTable.afterHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 123](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L123-L123)

### `domain.tickets.templates.showAllMilestones.tpl.allTicketsTable.afterHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 125](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L125-L125)

### `domain.tickets.templates.showAllMilestones.tpl.allTicketsTable.beforeFirstRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 127](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L127-L127)

### `domain.tickets.templates.showAllMilestones.tpl.allTicketsTable.afterRowStart`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['rowNum' => $rowNum, 'tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 130](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L130-L130)

### `domain.tickets.templates.showAllMilestones.tpl.allTicketsTable.beforeRowEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets, 'rowNum' => $rowNum]` |  | 

Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 254](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L254-L254)

### `domain.tickets.templates.showAllMilestones.tpl.allTicketsTable.afterLastRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 257](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L257-L257)

### `domain.tickets.templates.showAllMilestones.tpl.allTicketsTable.afterBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 259](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L259-L259)

### `domain.tickets.templates.showAllMilestones.tpl.allTicketsTable.afterClose`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 261](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L261-L261)

### `domain.tickets.templates.showAllMilestones.tpl.scripts.afterOpen`


Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 268](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L268-L268)

### `domain.tickets.templates.showAllMilestones.tpl.scripts.beforeClose`


Source: [app/domain/tickets/templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php), [line 293](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAllMilestones.tpl.php#L293-L293)

### `domain.tickets.templates.showList.tpl.beforePageHeaderOpen`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 24](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L24-L24)

### `domain.tickets.templates.showList.tpl.afterPageHeaderOpen`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 26](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L26-L26)

### `domain.tickets.templates.showList.tpl.beforePageHeaderClose`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 32](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L32-L32)

### `domain.tickets.templates.showList.tpl.afterPageHeaderClose`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L34-L34)

### `domain.tickets.templates.showList.tpl.filters.afterFormOpen`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 43](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L43-L43)

### `domain.tickets.templates.showList.tpl.filters.afterLefthandSectionOpen`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 51](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L51-L51)

### `domain.tickets.templates.showList.tpl.filters.beforeLefthandSectionClose`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 69](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L69-L69)

### `domain.tickets.templates.showList.tpl.filters.afterRighthandSectionOpen`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 74](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L74-L74)

### `domain.tickets.templates.showList.tpl.filters.beforeRighthandSectionClose`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 124](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L124-L124)

### `domain.tickets.templates.showList.tpl.filters.beforeBar`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 133](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L133-L133)

### `domain.tickets.templates.showList.tpl.filters.beforeFirstBarField`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 139](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L139-L139)

### `domain.tickets.templates.showList.tpl.filters.beforeFormClose`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 249](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L249-L249)

### `domain.tickets.templates.showList.tpl.allTicketsTable.before`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 253](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L253-L253)

### `domain.tickets.templates.showList.tpl.allTicketsTable.beforeHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 266](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L266-L266)

### `domain.tickets.templates.showList.tpl.allTicketsTable.beforeHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 268](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L268-L268)

### `domain.tickets.templates.showList.tpl.allTicketsTable.afterHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 281](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L281-L281)

### `domain.tickets.templates.showList.tpl.allTicketsTable.afterHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 284](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L284-L284)

### `domain.tickets.templates.showList.tpl.allTicketsTable.beforeFirstRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 286](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L286-L286)

### `domain.tickets.templates.showList.tpl.allTicketsTable.afterRowStart`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['rowNum' => $rowNum, 'tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 289](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L289-L289)

### `domain.tickets.templates.showList.tpl.allTicketsTable.beforeRowEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets, 'rowNum' => $rowNum]` |  | 

Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 327](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L327-L327)

### `domain.tickets.templates.showList.tpl.allTicketsTable.afterLastRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 330](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L330-L330)

### `domain.tickets.templates.showList.tpl.allTicketsTable.afterBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 332](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L332-L332)

### `domain.tickets.templates.showList.tpl.allTicketsTable.afterClose`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 350](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L350-L350)

### `domain.tickets.templates.showList.tpl.scripts.afterOpen`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 357](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L357-L357)

### `domain.tickets.templates.showList.tpl.scripts.beforeClose`


Source: [app/domain/tickets/templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php), [line 379](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showList.tpl.php#L379-L379)

### `domain.tickets.templates.showAll.tpl.beforePageHeaderOpen`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 24](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L24-L24)

### `domain.tickets.templates.showAll.tpl.afterPageHeaderOpen`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 26](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L26-L26)

### `domain.tickets.templates.showAll.tpl.beforePageHeaderClose`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 32](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L32-L32)

### `domain.tickets.templates.showAll.tpl.afterPageHeaderClose`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L34-L34)

### `domain.tickets.templates.showAll.tpl.filters.afterFormOpen`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 43](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L43-L43)

### `domain.tickets.templates.showAll.tpl.filters.afterLefthandSectionOpen`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 49](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L49-L49)

### `domain.tickets.templates.showAll.tpl.filters.beforeLefthandSectionClose`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 67](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L67-L67)

### `domain.tickets.templates.showAll.tpl.filters.afterCenterSectionOpen`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 73](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L73-L73)

### `domain.tickets.templates.showAll.tpl.filters.beforeCenterSectionClose`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 112](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L112-L112)

### `domain.tickets.templates.showAll.tpl.filters.afterRighthandSectionOpen`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 117](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L117-L117)

### `domain.tickets.templates.showAll.tpl.filters.beforeRighthandSectionClose`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 166](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L166-L166)

### `domain.tickets.templates.showAll.tpl.filters.beforeBar`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 175](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L175-L175)

### `domain.tickets.templates.showAll.tpl.filters.beforeFirstBarField`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 181](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L181-L181)

### `domain.tickets.templates.showAll.tpl.filters.beforeFormClose`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 291](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L291-L291)

### `domain.tickets.templates.showAll.tpl.allTicketsTable.before`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 295](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L295-L295)

### `domain.tickets.templates.showAll.tpl.allTicketsTable.beforeHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 313](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L313-L313)

### `domain.tickets.templates.showAll.tpl.allTicketsTable.beforeHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 315](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L315-L315)

### `domain.tickets.templates.showAll.tpl.allTicketsTable.afterHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 331](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L331-L331)

### `domain.tickets.templates.showAll.tpl.allTicketsTable.afterHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 333](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L333-L333)

### `domain.tickets.templates.showAll.tpl.allTicketsTable.beforeFirstRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 335](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L335-L335)

### `domain.tickets.templates.showAll.tpl.allTicketsTable.afterRowStart`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['rowNum' => $rowNum, 'tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 338](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L338-L338)

### `domain.tickets.templates.showAll.tpl.allTicketsTable.beforeRowEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets, 'rowNum' => $rowNum]` |  | 

Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 569](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L569-L569)

### `domain.tickets.templates.showAll.tpl.allTicketsTable.afterLastRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 572](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L572-L572)

### `domain.tickets.templates.showAll.tpl.allTicketsTable.afterBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 574](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L574-L574)

### `domain.tickets.templates.showAll.tpl.allTicketsTable.afterClose`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 576](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L576-L576)

### `domain.tickets.templates.showAll.tpl.scripts.afterOpen`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 583](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L583-L583)

### `domain.tickets.templates.showAll.tpl.scripts.beforeClose`


Source: [app/domain/tickets/templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php), [line 610](https://github.com/Leantime/leantime/blob/master/app/domain/tickets/templates/showAll.tpl.php#L610-L610)

### `domain.calendar.templates.delEvent.tpl.beforePageHeaderOpen`


Source: [app/domain/calendar/templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php), [line 5](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php#L5-L5)

### `domain.calendar.templates.delEvent.tpl.afterPageHeaderOpen`


Source: [app/domain/calendar/templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php), [line 7](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php#L7-L7)

### `domain.calendar.templates.delEvent.tpl.beforePageHeaderClose`


Source: [app/domain/calendar/templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php#L13-L13)

### `domain.calendar.templates.delEvent.tpl.afterPageHeaderClose`


Source: [app/domain/calendar/templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php), [line 15](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php#L15-L15)

### `domain.calendar.templates.delEvent.tpl.afterFormOpen`


Source: [app/domain/calendar/templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php), [line 23](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php#L23-L23)

### `domain.calendar.templates.delEvent.tpl.beforeSubmitButton`


Source: [app/domain/calendar/templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php), [line 25](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php#L25-L25)

### `domain.calendar.templates.delEvent.tpl.beforeFormClose`


Source: [app/domain/calendar/templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php), [line 28](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/delEvent.tpl.php#L28-L28)

### `domain.calendar.templates.addEvent.tpl.beforePageHeaderOpen`


Source: [app/domain/calendar/templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php), [line 6](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php#L6-L6)

### `domain.calendar.templates.addEvent.tpl.afterPageHeaderOpen`


Source: [app/domain/calendar/templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php#L8-L8)

### `domain.calendar.templates.addEvent.tpl.beforePageHeaderClose`


Source: [app/domain/calendar/templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php#L14-L14)

### `domain.calendar.templates.addEvent.tpl.afterPageHeaderClose`


Source: [app/domain/calendar/templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php#L16-L16)

### `domain.calendar.templates.addEvent.tpl.afterFormOpen`


Source: [app/domain/calendar/templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php), [line 28](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php#L28-L28)

### `domain.calendar.templates.addEvent.tpl.beforeSubmitButton`


Source: [app/domain/calendar/templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php), [line 61](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php#L61-L61)

### `domain.calendar.templates.addEvent.tpl.beforeFormClose`


Source: [app/domain/calendar/templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php), [line 67](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php#L67-L67)

### `domain.calendar.templates.addEvent.tpl.scripts.afterOpen`


Source: [app/domain/calendar/templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php), [line 79](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php#L79-L79)

### `domain.calendar.templates.addEvent.tpl.scripts.beforeClose`


Source: [app/domain/calendar/templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php), [line 85](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/addEvent.tpl.php#L85-L85)

### `domain.calendar.templates.editEvent.tpl.beforePageHeaderOpen`


Source: [app/domain/calendar/templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php), [line 6](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php#L6-L6)

### `domain.calendar.templates.editEvent.tpl.afterPageHeaderOpen`


Source: [app/domain/calendar/templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php#L8-L8)

### `domain.calendar.templates.editEvent.tpl.beforePageHeaderClose`


Source: [app/domain/calendar/templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php#L14-L14)

### `domain.calendar.templates.editEvent.tpl.afterPageHeaderClose`


Source: [app/domain/calendar/templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php#L16-L16)

### `domain.calendar.templates.editEvent.tpl.afterFormOpen`


Source: [app/domain/calendar/templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php), [line 28](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php#L28-L28)

### `domain.calendar.templates.editEvent.tpl.beforeSubmitButton`


Source: [app/domain/calendar/templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php), [line 60](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php#L60-L60)

### `domain.calendar.templates.editEvent.tpl.beforeFormClose`


Source: [app/domain/calendar/templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php), [line 69](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/editEvent.tpl.php#L69-L69)

### `domain.calendar.templates.export.tpl.afterFormOpen`


Source: [app/domain/calendar/templates/export.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/export.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/export.tpl.php#L16-L16)

### `domain.calendar.templates.export.tpl.beforeSubmitButton`


Source: [app/domain/calendar/templates/export.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/export.tpl.php), [line 35](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/export.tpl.php#L35-L35)

### `domain.calendar.templates.export.tpl.beforeFormClose`


Source: [app/domain/calendar/templates/export.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/export.tpl.php), [line 47](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/export.tpl.php#L47-L47)

### `domain.calendar.templates.showMyCalendar.tpl.beforePageHeaderOpen`


Source: [app/domain/calendar/templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showMyCalendar.tpl.php), [line 5](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showMyCalendar.tpl.php#L5-L5)

### `domain.calendar.templates.showMyCalendar.tpl.afterPageHeaderOpen`


Source: [app/domain/calendar/templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showMyCalendar.tpl.php), [line 7](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showMyCalendar.tpl.php#L7-L7)

### `domain.calendar.templates.showMyCalendar.tpl.beforePageHeaderClose`


Source: [app/domain/calendar/templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showMyCalendar.tpl.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showMyCalendar.tpl.php#L13-L13)

### `domain.calendar.templates.showMyCalendar.tpl.afterPageHeaderClose`


Source: [app/domain/calendar/templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showMyCalendar.tpl.php), [line 15](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showMyCalendar.tpl.php#L15-L15)

### `domain.calendar.templates.showMyCalendar.tpl.scripts.afterOpen`


Source: [app/domain/calendar/templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showMyCalendar.tpl.php), [line 37](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showMyCalendar.tpl.php#L37-L37)

### `domain.calendar.templates.showMyCalendar.tpl.scripts.beforeClose`


Source: [app/domain/calendar/templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showMyCalendar.tpl.php), [line 78](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showMyCalendar.tpl.php#L78-L78)

### `domain.calendar.templates.ical.tpl.beforeOutput`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$calendars` |  | 
`['eol' => $eol]` |  | 

Source: [app/domain/calendar/templates/ical.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/ical.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/ical.tpl.php#L8-L8)

### `domain.calendar.templates.ical.tpl.calendarOutputBeginning`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$calendar` |  | 
`['url' => $url, 'eol' => $eol]` |  | 

Source: [app/domain/calendar/templates/ical.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/ical.tpl.php), [line 24](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/ical.tpl.php#L24-L27)

### `domain.calendar.templates.ical.tpl.calendarOutputEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$calendar` |  | 
`['url' => $url, 'eol' => $eol]` |  | 

Source: [app/domain/calendar/templates/ical.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/ical.tpl.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/ical.tpl.php#L40-L43)

### `domain.calendar.templates.ical.tpl.afterOutput`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$calendars` |  | 
`['eol' => $eol]` |  | 

Source: [app/domain/calendar/templates/ical.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/ical.tpl.php), [line 49](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/ical.tpl.php#L49-L49)

### `domain.calendar.templates.importGCal.tpl.beforePageHeaderOpen`


Source: [app/domain/calendar/templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php), [line 6](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php#L6-L6)

### `domain.calendar.templates.importGCal.tpl.afterPageHeaderOpen`


Source: [app/domain/calendar/templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php#L8-L8)

### `domain.calendar.templates.importGCal.tpl.beforePageHeaderClose`


Source: [app/domain/calendar/templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php#L18-L18)

### `domain.calendar.templates.importGCal.tpl.afterPageHeaderClose`


Source: [app/domain/calendar/templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php), [line 20](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php#L20-L20)

### `domain.calendar.templates.importGCal.tpl.afterFormOpen`


Source: [app/domain/calendar/templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php#L29-L29)

### `domain.calendar.templates.importGCal.tpl.beforeSubmitButton`


Source: [app/domain/calendar/templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php), [line 96](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php#L96-L96)

### `domain.calendar.templates.importGCal.tpl.beforeFormClose`


Source: [app/domain/calendar/templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php), [line 107](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/importGCal.tpl.php#L107-L107)

### `domain.calendar.templates.showAllGCals.tpl.scripts.afterOpen`


Source: [app/domain/calendar/templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php#L8-L8)

### `domain.calendar.templates.showAllGCals.tpl.scripts.beforeClose`


Source: [app/domain/calendar/templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php), [line 33](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php#L33-L33)

### `domain.calendar.templates.showAllGCals.tpl.beforePageHeaderOpen`


Source: [app/domain/calendar/templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php), [line 38](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php#L38-L38)

### `domain.calendar.templates.showAllGCals.tpl.afterPageHeaderOpen`


Source: [app/domain/calendar/templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php#L40-L40)

### `domain.calendar.templates.showAllGCals.tpl.beforePageHeaderClose`


Source: [app/domain/calendar/templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php), [line 50](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php#L50-L50)

### `domain.calendar.templates.showAllGCals.tpl.afterPageHeaderClose`


Source: [app/domain/calendar/templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php), [line 52](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php#L52-L52)

### `domain.calendar.templates.showAllGCals.tpl.afterFormOpen`


Source: [app/domain/calendar/templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php), [line 58](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php#L58-L58)

### `domain.calendar.templates.showAllGCals.tpl.beforeFormClose`


Source: [app/domain/calendar/templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php), [line 87](https://github.com/Leantime/leantime/blob/master/app/domain/calendar/templates/showAllGCals.tpl.php#L87-L87)

### `domain.auth.templates.userInvite.tpl.beforePageHeaderOpen`


Source: [app/domain/auth/templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php), [line 5](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php#L5-L5)

### `domain.auth.templates.userInvite.tpl.afterPageHeaderOpen`


Source: [app/domain/auth/templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php), [line 7](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php#L7-L7)

### `domain.auth.templates.userInvite.tpl.beforePageHeaderClose`


Source: [app/domain/auth/templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php#L11-L11)

### `domain.auth.templates.userInvite.tpl.afterPageHeaderClose`


Source: [app/domain/auth/templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php#L13-L13)

### `domain.auth.templates.userInvite.tpl.afterRegcontentOpen`


Source: [app/domain/auth/templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php), [line 15](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php#L15-L15)

### `domain.auth.templates.userInvite.tpl.afterFormOpen`


Source: [app/domain/auth/templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php#L17-L17)

### `domain.auth.templates.userInvite.tpl.beforeSubmitButton`


Source: [app/domain/auth/templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php), [line 41](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php#L41-L41)

### `domain.auth.templates.userInvite.tpl.beforeFormClose`


Source: [app/domain/auth/templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php), [line 45](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php#L45-L45)

### `domain.auth.templates.userInvite.tpl.beforeRegcontentClose`


Source: [app/domain/auth/templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php), [line 47](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/userInvite.tpl.php#L47-L47)

### `domain.auth.templates.requestPwLink.tpl.beforePageHeaderOpen`


Source: [app/domain/auth/templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php), [line 1](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php#L1-L1)

### `domain.auth.templates.requestPwLink.tpl.afterPageHeaderClose`


Source: [app/domain/auth/templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php), [line 7](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php#L7-L7)

### `domain.auth.templates.requestPwLink.tpl.afterRegcontentOpen`


Source: [app/domain/auth/templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php), [line 9](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php#L9-L9)

### `domain.auth.templates.requestPwLink.tpl.afterFormOpen`


Source: [app/domain/auth/templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php#L11-L11)

### `domain.auth.templates.requestPwLink.tpl.beforeSubmitButton`


Source: [app/domain/auth/templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php#L21-L21)

### `domain.auth.templates.requestPwLink.tpl.beforeFormClose`


Source: [app/domain/auth/templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php), [line 24](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php#L24-L24)

### `domain.auth.templates.requestPwLink.tpl.beforeRegcontentClose`


Source: [app/domain/auth/templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php), [line 26](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/requestPwLink.tpl.php#L26-L26)

### `domain.auth.templates.resetPw.tpl.beforePageHeaderOpen`


Source: [app/domain/auth/templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php), [line 1](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php#L1-L1)

### `domain.auth.templates.resetPw.tpl.afterPageHeaderOpen`


Source: [app/domain/auth/templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php), [line 3](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php#L3-L3)

### `domain.auth.templates.resetPw.tpl.beforePageHeaderClose`


Source: [app/domain/auth/templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php), [line 7](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php#L7-L7)

### `domain.auth.templates.resetPw.tpl.afterPageHeaderClose`


Source: [app/domain/auth/templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php), [line 9](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php#L9-L9)

### `domain.auth.templates.resetPw.tpl.afterRegcontentOpen`


Source: [app/domain/auth/templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php#L11-L11)

### `domain.auth.templates.resetPw.tpl.afterFormOpen`


Source: [app/domain/auth/templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php#L13-L13)

### `domain.auth.templates.resetPw.tpl.beforeSubmitButton`


Source: [app/domain/auth/templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php#L29-L29)

### `domain.auth.templates.resetPw.tpl.beforeFormClose`


Source: [app/domain/auth/templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php), [line 35](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php#L35-L35)

### `domain.auth.templates.resetPw.tpl.beforeRegcontentClose`


Source: [app/domain/auth/templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php), [line 37](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/resetPw.tpl.php#L37-L37)

### `domain.auth.templates.loginInfo.tpl.beforeUserinfoMenuOpen`


Source: [app/domain/auth/templates/loginInfo.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/loginInfo.tpl.php), [line 3](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/loginInfo.tpl.php#L3-L3)

### `domain.auth.templates.loginInfo.tpl.afterUserinfoMenuOpen`


Source: [app/domain/auth/templates/loginInfo.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/loginInfo.tpl.php), [line 5](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/loginInfo.tpl.php#L5-L5)

### `domain.auth.templates.loginInfo.tpl.afterUserinfoDropdownMenuOpen`


Source: [app/domain/auth/templates/loginInfo.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/loginInfo.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/loginInfo.tpl.php#L11-L11)

### `domain.auth.templates.loginInfo.tpl.beforeUserinfoDropdownMenuClose`


Source: [app/domain/auth/templates/loginInfo.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/loginInfo.tpl.php), [line 45](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/loginInfo.tpl.php#L45-L45)

### `domain.auth.templates.loginInfo.tpl.beforeUserinfoMenuClose`


Source: [app/domain/auth/templates/loginInfo.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/loginInfo.tpl.php), [line 47](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/loginInfo.tpl.php#L47-L47)

### `domain.auth.templates.loginInfo.tpl.afterUserinfoMenuClose`


Source: [app/domain/auth/templates/loginInfo.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/loginInfo.tpl.php), [line 49](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/loginInfo.tpl.php#L49-L49)

### `domain.auth.templates.login.tpl.beforePageHeaderOpen`


Source: [app/domain/auth/templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php), [line 5](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php#L5-L5)

### `domain.auth.templates.login.tpl.afterPageHeaderOpen`


Source: [app/domain/auth/templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php), [line 7](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php#L7-L7)

### `domain.auth.templates.login.tpl.beforePageHeaderClose`


Source: [app/domain/auth/templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php#L11-L11)

### `domain.auth.templates.login.tpl.afterPageHeaderClose`


Source: [app/domain/auth/templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php#L13-L13)

### `domain.auth.templates.login.tpl.afterRegcontentOpen`


Source: [app/domain/auth/templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php#L16-L16)

### `domain.auth.templates.login.tpl.afterFormOpen`


Source: [app/domain/auth/templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php#L18-L18)

### `domain.auth.templates.login.tpl.beforeSubmitButton`


Source: [app/domain/auth/templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php), [line 32](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php#L32-L32)

### `domain.auth.templates.login.tpl.beforeFormClose`


Source: [app/domain/auth/templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php), [line 38](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php#L38-L38)

### `domain.auth.templates.login.tpl.beforeRegcontentClose`


Source: [app/domain/auth/templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/domain/auth/templates/login.tpl.php#L40-L40)

### `domain.auth.controllers.userInvite.post.userSignupSuccess`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['user' => $user]` |  | 

Source: [app/domain/auth/controllers/class.userInvite.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/controllers/class.userInvite.php), [line 93](https://github.com/Leantime/leantime/blob/master/app/domain/auth/controllers/class.userInvite.php#L93-L93)

### `domain.auth.controllers.login.get.beforeAuth`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$params` |  | 

Source: [app/domain/auth/controllers/class.login.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/controllers/class.login.php), [line 46](https://github.com/Leantime/leantime/blob/master/app/domain/auth/controllers/class.login.php#L46-L46)

### `domain.auth.controllers.login.post.beforeAuthServiceCall`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['post' => $_POST]` |  | 

Source: [app/domain/auth/controllers/class.login.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/controllers/class.login.php), [line 78](https://github.com/Leantime/leantime/blob/master/app/domain/auth/controllers/class.login.php#L78-L78)

### `domain.auth.services.auth.login.beforeLoginCheck`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password]` |  | 

Source: [app/domain/auth/services/class.auth.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/services/class.auth.php), [line 197](https://github.com/Leantime/leantime/blob/master/app/domain/auth/services/class.auth.php#L197-L197)

### `domain.auth.services.auth.login.afterLoginCheck`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password, 'authService' => self::getInstance()]` |  | 

Source: [app/domain/auth/services/class.auth.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/services/class.auth.php), [line 277](https://github.com/Leantime/leantime/blob/master/app/domain/auth/services/class.auth.php#L277-L277)

### `domain.auth.services.auth.login.afterLoginCheck`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password, 'authService' => self::getInstance()]` |  | 

Source: [app/domain/auth/services/class.auth.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/services/class.auth.php), [line 282](https://github.com/Leantime/leantime/blob/master/app/domain/auth/services/class.auth.php#L282-L282)

### `domain.projects.services.projects.notifyProjectUsers.notifyProjectUsers`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("type" => "projectUpdate", "module" => $notification->module, "moduleId" => $entityId, "message" => $notification->message, "subject" => $notification->subject, "users" => $this->getAllUserInfoToNotify($notification->projectId), "url" => $notification->url['url'])` |  | 
`"domain.services.projects"` |  | 

Source: [app/domain/projects/services/class.projects.php](https://github.com/Leantime/leantime/blob/master/app/domain/projects/services/class.projects.php), [line 246](https://github.com/Leantime/leantime/blob/master/app/domain/projects/services/class.projects.php#L246-L246)

### `domain.projects.services.projects.changeCurrentSessionProject.projects.setCurrentProject`


Source: [app/domain/projects/services/class.projects.php](https://github.com/Leantime/leantime/blob/master/app/domain/projects/services/class.projects.php), [line 403](https://github.com/Leantime/leantime/blob/master/app/domain/projects/services/class.projects.php#L403-L403)

### `domain.dashboard.templates.home.tpl.beforePageHeaderOpen`


Source: [app/domain/dashboard/templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php#L16-L16)

### `domain.dashboard.templates.home.tpl.afterPageHeaderOpen`


Source: [app/domain/dashboard/templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php#L18-L18)

### `domain.dashboard.templates.home.tpl.beforePageHeaderClose`


Source: [app/domain/dashboard/templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php), [line 23](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php#L23-L23)

### `domain.dashboard.templates.home.tpl.afterPageHeaderClose`


Source: [app/domain/dashboard/templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php), [line 25](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php#L25-L25)

### `domain.dashboard.templates.home.tpl.afterWelcomeMessage`


Source: [app/domain/dashboard/templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php), [line 38](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php#L38-L38)

### `domain.dashboard.templates.home.tpl.scripts.afterOpen`


Source: [app/domain/dashboard/templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php), [line 371](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php#L371-L371)

### `domain.dashboard.templates.home.tpl.scripts.beforeClose`


Source: [app/domain/dashboard/templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php), [line 450](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/home.tpl.php#L450-L450)

### `domain.dashboard.templates.show.tpl.beforePageHeaderOpen`


Source: [app/domain/dashboard/templates/show.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/show.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/show.tpl.php#L14-L14)

### `domain.dashboard.templates.show.tpl.afterPageHeaderOpen`


Source: [app/domain/dashboard/templates/show.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/show.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/show.tpl.php#L16-L16)

### `domain.dashboard.templates.show.tpl.beforePageHeaderClose`


Source: [app/domain/dashboard/templates/show.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/show.tpl.php), [line 30](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/show.tpl.php#L30-L30)

### `domain.dashboard.templates.show.tpl.afterPageHeaderClose`


Source: [app/domain/dashboard/templates/show.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/show.tpl.php), [line 32](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/show.tpl.php#L32-L32)

### `domain.dashboard.templates.show.tpl.scripts.afterOpen`


Source: [app/domain/dashboard/templates/show.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/show.tpl.php), [line 550](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/show.tpl.php#L550-L550)

### `domain.dashboard.templates.show.tpl.scripts.beforeClose`


Source: [app/domain/dashboard/templates/show.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/show.tpl.php), [line 633](https://github.com/Leantime/leantime/blob/master/app/domain/dashboard/templates/show.tpl.php#L633-L633)

### `domain.pageparts.templates.footer.tpl.beforeFooterOpen`


Source: [app/domain/pageparts/templates/footer.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/footer.tpl.php), [line 3](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/footer.tpl.php#L3-L3)

### `domain.pageparts.templates.footer.tpl.afterFooterOpen`


Source: [app/domain/pageparts/templates/footer.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/footer.tpl.php), [line 5](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/footer.tpl.php#L5-L5)

### `domain.pageparts.templates.footer.tpl.beforeFooterClose`


Source: [app/domain/pageparts/templates/footer.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/footer.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/footer.tpl.php#L8-L8)

### `domain.pageparts.templates.footer.tpl.afterFooterOpen`


Source: [app/domain/pageparts/templates/footer.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/footer.tpl.php), [line 10](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/footer.tpl.php#L10-L10)

### `domain.pageparts.templates.pageBottom.tpl.beforeBodyClose`


Source: [app/domain/pageparts/templates/pageBottom.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/pageBottom.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/pageBottom.tpl.php#L11-L11)

### `domain.pageparts.templates.header.tpl.afterMetaTags`


Source: [app/domain/pageparts/templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php), [line 20](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php#L20-L20)

### `domain.pageparts.templates.header.tpl.afterLinkTags`


Source: [app/domain/pageparts/templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php), [line 26](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php#L26-L26)

### `domain.pageparts.templates.header.tpl.afterScriptLibTags`


Source: [app/domain/pageparts/templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php), [line 33](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php#L33-L33)

### `domain.pageparts.templates.header.tpl.afterMainScriptTag`


Source: [app/domain/pageparts/templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php), [line 37](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php#L37-L37)

### `domain.pageparts.templates.header.tpl.afterThemeScripts`


Source: [app/domain/pageparts/templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php), [line 47](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php#L47-L47)

### `domain.pageparts.templates.header.tpl.afterThemeColors`


Source: [app/domain/pageparts/templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php), [line 60](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php#L60-L60)

### `domain.pageparts.templates.header.tpl.afterCustomizeTags`


Source: [app/domain/pageparts/templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php), [line 72](https://github.com/Leantime/leantime/blob/master/app/domain/pageparts/templates/header.tpl.php#L72-L72)

### `domain.menu.templates.menu.tpl.beforeMenu`


Source: [app/domain/menu/templates/menu.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/menu.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/menu.tpl.php#L17-L17)

### `domain.menu.templates.menu.tpl.afterMenuOpen`


Source: [app/domain/menu/templates/menu.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/menu.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/menu.tpl.php#L19-L19)

### `domain.menu.templates.menu.tpl.beforeMenuClose`


Source: [app/domain/menu/templates/menu.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/menu.tpl.php), [line 124](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/menu.tpl.php#L124-L124)

### `domain.menu.templates.menu.tpl.afterMenuClose`


Source: [app/domain/menu/templates/menu.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/menu.tpl.php), [line 126](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/menu.tpl.php#L126-L126)

### `domain.menu.templates.headMenu.tpl.beforeHeadMenu`


Source: [app/domain/menu/templates/headMenu.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/headMenu.tpl.php), [line 15](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/headMenu.tpl.php#L15-L15)

### `domain.menu.templates.headMenu.tpl.afterHeadMenuOpen`


Source: [app/domain/menu/templates/headMenu.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/headMenu.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/headMenu.tpl.php#L17-L17)

### `domain.menu.templates.headMenu.tpl.beforeHeadMenuClose`


Source: [app/domain/menu/templates/headMenu.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/headMenu.tpl.php), [line 237](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/headMenu.tpl.php#L237-L237)

### `domain.menu.templates.headMenu.tpl.afterHeadMenu`


Source: [app/domain/menu/templates/headMenu.tpl.php](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/headMenu.tpl.php), [line 239](https://github.com/Leantime/leantime/blob/master/app/domain/menu/templates/headMenu.tpl.php#L239-L239)

## Filters

### `core.theme.getLayoutFilename.filepath`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$filename` |  | 

Source: [app/core/class.theme.php](https://github.com/Leantime/leantime/blob/master/app/core/class.theme.php), [line 179](https://github.com/Leantime/leantime/blob/master/app/core/class.theme.php#L179-L179)

### `core.language.__construct.languages`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$parsedLangList` |  | 

Source: [app/core/class.language.php](https://github.com/Leantime/leantime/blob/master/app/core/class.language.php), [line 88](https://github.com/Leantime/leantime/blob/master/app/core/class.language.php#L88-L88)

### `core.language.readIni.language_resources`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$_SESSION['cache.language_resources_' . $this->language . '_' . $this->theme]` |  | 
`['language' => $this->language, 'theme' => $this->theme]` |  | 

Source: [app/core/class.language.php](https://github.com/Leantime/leantime/blob/master/app/core/class.language.php), [line 235](https://github.com/Leantime/leantime/blob/master/app/core/class.language.php#L235-L242)

### `core.language.readIni.language_resources`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->ini_array` |  | 
`['language' => $this->language, 'theme' => $this->theme]` |  | 

Source: [app/core/class.language.php](https://github.com/Leantime/leantime/blob/master/app/core/class.language.php), [line 326](https://github.com/Leantime/leantime/blob/master/app/core/class.language.php#L326-L333)

### `core.application.start.publicActions`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->publicActions` |  | 

Source: [app/core/class.application.php](https://github.com/Leantime/leantime/blob/master/app/core/class.application.php), [line 77](https://github.com/Leantime/leantime/blob/master/app/core/class.application.php#L77-L77)

### `core.application.loadHeaders.headers`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['X-Frame-Options' => 'SAMEORIGIN', 'X-XSS-Protection' => '1; mode=block', 'X-Content-Type-Options' => 'nosniff', 'Access-Control-Allow-Origin' => BASE_URL]` |  | 

Source: [app/core/class.application.php](https://github.com/Leantime/leantime/blob/master/app/core/class.application.php), [line 161](https://github.com/Leantime/leantime/blob/master/app/core/class.application.php#L161-L166)

### `core.application.cronExec.increment`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`300` |  | 

Source: [app/core/class.application.php](https://github.com/Leantime/leantime/blob/master/app/core/class.application.php), [line 202](https://github.com/Leantime/leantime/blob/master/app/core/class.application.php#L202-L202)

### `core.mailer.sendMail.sendMailTo`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$to` |  | 

Source: [app/core/class.mailer.php](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php), [line 230](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php#L230-L230)

### `core.mailer.sendMail.sendMailFrom`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$from` |  | 

Source: [app/core/class.mailer.php](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php), [line 231](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php#L231-L231)

### `core.mailer.sendMail.bodyTemplate`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$bodyTemplate` |  | 
`[['companyColor' => $this->companyColor, 'logoUrl' => $inlineLogoContent, 'languageHiText' => $this->language->__('email_notifications.hi'), 'emailContentsHtml' => nl2br($this->html), 'unsubLink' => sprintf($this->language->__('email_notifications.unsubscribe'), BASE_URL . '/users/editOwn/')]]` |  | 

Source: [app/core/class.mailer.php](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php), [line 283](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php#L283-L295)

### `core.mailer.sendMail.altBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->text` |  | 

Source: [app/core/class.mailer.php](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php), [line 299](https://github.com/Leantime/leantime/blob/master/app/core/class.mailer.php#L299-L302)

### `core.template.assign.var.{$name}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$value` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 107](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L107-L107)

### `core.template.getTemplatePath.relative_plugin_template_path`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`''` |  | 
`['module' => $module, 'name' => $name]` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 142](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L142-L145)

### `core.template.display.template`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$template` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 207](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L207-L207)

### `core.template.display.template.{$template}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$template` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 208](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L208-L208)

### `core.template.display.layout`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$layout` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 215](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L215-L215)

### `core.template.display.layout.{$template}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$layout` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 216](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L216-L216)

### `core.template.display.layoutContent`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$layoutContent` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 234](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L234-L234)

### `core.template.display.layoutContent.{$template}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$layoutContent` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 235](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L235-L235)

### `core.template.display.content`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$content` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 257](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L257-L257)

### `core.template.display.content.{$template}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$content` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 258](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L258-L258)

### `core.template.display.render`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$render` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 263](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L263-L263)

### `core.template.display.render.{$template}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$render` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 264](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L264-L264)

### `core.template.displaySubmodule.submodule_relative_path`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"{$submodule['module']}/templates/submodules/{$submodule['submodule']}.sub.php"` |  | 
`['module' => $submodule['module'], 'submodule' => $submodule['submodule']]` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 358](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L358-L365)

### `core.template.displayNotification.message`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$language->__($message_id, false)` |  | 
`$note` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 386](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L386-L390)

### `core.template.displayNotification.message_{$message_id}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$message` |  | 
`$note` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 391](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L391-L395)

### `core.template.displayInlineNotification.message`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$language->__($message_id, false)` |  | 
`$note` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 417](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L417-L421)

### `core.template.displayInlineNotification.message_{$message_id}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$message` |  | 
`$note` |  | 

Source: [app/core/class.template.php](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php), [line 422](https://github.com/Leantime/leantime/blob/master/app/core/class.template.php#L422-L426)

### `core.fileupload.getPublicFilesPath.relative_path`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"/../../public/userfiles"` |  | 

Source: [app/core/class.fileupload.php](https://github.com/Leantime/leantime/blob/master/app/core/class.fileupload.php), [line 179](https://github.com/Leantime/leantime/blob/master/app/core/class.fileupload.php#L179-L179)

### `domain.{$module}.repositories.{$repo}.{$method}.sql`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$sql` |  | 
`$this->getArgs(['prepareArgs' => $args])` |  | 
`4` |  | 

Source: [app/core/class.repository.php](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php), [line 53](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php#L53-L58)

### `domain.{$module}.repositories.{$repo}.{$method}.binding`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$replace` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/core/class.repository.php](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php), [line 72](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php#L72-L77)

### `domain.{$module}.repositories.{$repo}.{$method}.args`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$args` |  | 
`[]` |  | 
`5` |  | 

Source: [app/core/class.repository.php](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php), [line 97](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php#L97-L97)

### `domain.{$module}.repositories.{$repo}.{$method}.stmn`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->stmn` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/core/class.repository.php](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php), [line 121](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php#L121-L121)

### `domain.{$module}.repositories.{$repo}.{$method}.method`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$method` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/core/class.repository.php](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php), [line 122](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php#L122-L122)

### `domain.{$module}.repositories.{$repo}.{$method}.return`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$values` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/core/class.repository.php](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php), [line 134](https://github.com/Leantime/leantime/blob/master/app/core/class.repository.php#L134-L134)

### `domain.timesheets.repositories.timesheets.addTime.sql`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$query` |  | 

Source: [app/domain/timesheets/repositories/class.timesheets.php](https://github.com/Leantime/leantime/blob/master/app/domain/timesheets/repositories/class.timesheets.php), [line 342](https://github.com/Leantime/leantime/blob/master/app/domain/timesheets/repositories/class.timesheets.php#L342-L342)

### `domain.timesheets.repositories.timesheets.UpdateHours.sql`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$query` |  | 

Source: [app/domain/timesheets/repositories/class.timesheets.php](https://github.com/Leantime/leantime/blob/master/app/domain/timesheets/repositories/class.timesheets.php), [line 503](https://github.com/Leantime/leantime/blob/master/app/domain/timesheets/repositories/class.timesheets.php#L503-L503)

### `domain.auth.models.roles.getFilteredRoles.available_roles`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`self::$roleKeys` |  | 

Source: [app/domain/auth/models/class.roles.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/models/class.roles.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/domain/auth/models/class.roles.php#L29-L29)

### `domain.auth.services.auth.setUserSession.user_session_vars`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['role' => $this->role, 'id' => $this->userId, 'name' => $this->name, 'profileId' => $this->profileId, 'mail' => $this->mail, 'clientId' => $this->clientId, 'settings' => $this->settings, 'twoFAEnabled' => $this->twoFAEnabled, 'twoFAVerified' => false, 'twoFASecret' => $this->twoFASecret, 'isLdap' => $isLdap]` |  | 

Source: [app/domain/auth/services/class.auth.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/services/class.auth.php), [line 305](https://github.com/Leantime/leantime/blob/master/app/domain/auth/services/class.auth.php#L305-L317)

### `domain.auth.services.auth.logout.sessions_vars_to_destroy`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['userdata', 'template', 'subdomainData', 'currentProject', 'currentSprint', 'projectsettings', 'currentSubscriptions', 'lastTicketView', 'lastFilterdTicketTableView']` |  | 

Source: [app/domain/auth/services/class.auth.php](https://github.com/Leantime/leantime/blob/master/app/domain/auth/services/class.auth.php), [line 354](https://github.com/Leantime/leantime/blob/master/app/domain/auth/services/class.auth.php#L354-L364)



