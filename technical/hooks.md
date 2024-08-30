# Hooks

- [Events](#events)
- [Filters](#filters)

## Events

### `Leantime.Domain.Tickets.Repositories.Tickets.patchTicket.ticketStatusUpdate`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("ticketId" => $id, "status" => $value, "action" => "ticketStatusUpdate")` |  | 

Source: [app/Domain/Tickets/Repositories/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Repositories/Tickets.php), [line 1744](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Repositories/Tickets.php#L1744-L1760)

### `Leantime.Domain.Tickets.Repositories.Tickets.updateTicketStatus.ticketStatusUpdate`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("ticketId" => $ticketId, "status" => $status, "action" => "ticketStatusUpdate", "handler" => $handler)` |  | 

Source: [app/Domain/Tickets/Repositories/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Repositories/Tickets.php), [line 1868](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Repositories/Tickets.php#L1868-L1906)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 44](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L44-L44)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 49](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L49-L49)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.filters.afterRighthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 59](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L59-L59)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.filters.beforeRighthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 63](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L63-L63)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.allTicketsTable.before`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTicketGroups]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 92](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L92-L92)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.allTicketsTable.beforeHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 110](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L110-L110)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.allTicketsTable.beforeHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 112](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L112-L112)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.allTicketsTable.afterHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 129](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L129-L129)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.allTicketsTable.afterHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 131](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L131-L131)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.allTicketsTable.beforeFirstRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 133](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L133-L133)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.allTicketsTable.afterRowStart`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['rowNum' => $rowNum, 'tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 136](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L136-L136)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.allTicketsTable.beforeRowEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets, 'rowNum' => $rowNum]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 370](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L370-L370)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.allTicketsTable.afterLastRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 373](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L373-L373)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.allTicketsTable.afterBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 375](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L375-L375)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.allTicketsTable.afterClose`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 381](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L381-L381)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.scripts.afterOpen`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 397](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L397-L397)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.scripts.beforeClose`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 417](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L417-L417)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L40-L40)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 46](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L46-L46)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.filters.afterRighthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 55](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L55-L55)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.filters.beforeRighthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 59](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L59-L59)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.before`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 85](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L85-L85)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.beforeHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 101](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L101-L101)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.beforeHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 103](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L103-L103)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.afterHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 122](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L122-L122)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.afterHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 124](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L124-L124)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.beforeFirstRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 126](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L126-L126)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.afterRowStart`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['rowNum' => $rowNum, 'tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 129](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L129-L129)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.beforeRowEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets, 'rowNum' => $rowNum]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 274](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L274-L274)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.afterLastRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 277](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L277-L277)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.afterBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 279](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L279-L279)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.afterClose`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 281](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L281-L281)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.scripts.afterOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 293](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L293-L293)

### `Leantime.Domain.Tickets.Templates.showAllMilestones.tpl.scripts.beforeClose`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 313](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L313-L313)

### `Leantime.Domain.Tickets.Templates.showTicketModal.tpl.ticketTabs`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['ticket' => $ticket]` |  | 

Source: [app/Domain/Tickets/Templates/showTicketModal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showTicketModal.tpl.php), [line 86](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showTicketModal.tpl.php#L86-L86)

### `Leantime.Domain.Tickets.Templates.showTicketModal.tpl.ticketTabsContent`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['ticket' => $ticket]` |  | 

Source: [app/Domain/Tickets/Templates/showTicketModal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showTicketModal.tpl.php), [line 105](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showTicketModal.tpl.php#L105-L105)

### `Leantime.Domain.Tickets.Templates.submodules.ticketDetails.sub.beforeSubtasks`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`["ticketId" => $ticket->id]` |  | 

Source: [app/Domain/Tickets/Templates/submodules/ticketDetails.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketDetails.sub.php), [line 54](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketDetails.sub.php#L54-L54)

### `Leantime.Domain.Tickets.Templates.submodules.ticketDetails.sub.beforeEndRightColumn`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['ticket' => $ticket]` |  | 

Source: [app/Domain/Tickets/Templates/submodules/ticketDetails.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketDetails.sub.php), [line 420](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketDetails.sub.php#L420-L420)

### `Leantime.Domain.Tickets.Templates.submodules.ticketFilter.sub.filters.beforeFirstBarField`


Source: [app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php), [line 59](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php#L59-L59)

### `Leantime.Domain.Tickets.Templates.submodules.ticketFilter.sub.filters.beforeBar`


Source: [app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php), [line 199](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php#L199-L199)

### `Leantime.Domain.Tickets.Templates.submodules.ticketFilter.sub.filters.beforeFormClose`


Source: [app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php), [line 203](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php#L203-L203)

### `Leantime.Domain.Tickets.Templates.submodules.ticketHeader.sub.beforePageHeaderOpen`


Source: [app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php), [line 39](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php#L39-L39)

### `Leantime.Domain.Tickets.Templates.submodules.ticketHeader.sub.afterPageHeaderOpen`


Source: [app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php), [line 41](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php#L41-L41)

### `Leantime.Domain.Tickets.Templates.submodules.ticketHeader.sub.beforePageHeaderClose`


Source: [app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php), [line 100](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php#L100-L100)

### `Leantime.Domain.Tickets.Templates.submodules.ticketHeader.sub.afterPageHeaderClose`


Source: [app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php), [line 102](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php#L102-L102)

### `Leantime.Domain.Tickets.Templates.submodules.portfolioHeader.sub.beforePageHeaderOpen`


Source: [app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php#L13-L13)

### `Leantime.Domain.Tickets.Templates.submodules.portfolioHeader.sub.afterPageHeaderOpen`


Source: [app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php), [line 15](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php#L15-L15)

### `Leantime.Domain.Tickets.Templates.submodules.portfolioHeader.sub.beforePageHeaderClose`


Source: [app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php), [line 28](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php#L28-L28)

### `Leantime.Domain.Tickets.Templates.submodules.portfolioHeader.sub.afterPageHeaderClose`


Source: [app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php), [line 30](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php#L30-L30)

### `Leantime.Domain.Tickets.Templates.submodules.timelineHeader.sub.beforePageHeaderOpen`


Source: [app/Domain/Tickets/Templates/submodules/timelineHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/timelineHeader.sub.php), [line 39](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/timelineHeader.sub.php#L39-L39)

### `Leantime.Domain.Tickets.Templates.submodules.timelineHeader.sub.afterPageHeaderOpen`


Source: [app/Domain/Tickets/Templates/submodules/timelineHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/timelineHeader.sub.php), [line 41](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/timelineHeader.sub.php#L41-L41)

### `Leantime.Domain.Tickets.Templates.submodules.timelineHeader.sub.beforePageHeaderClose`


Source: [app/Domain/Tickets/Templates/submodules/timelineHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/timelineHeader.sub.php), [line 101](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/timelineHeader.sub.php#L101-L101)

### `Leantime.Domain.Tickets.Templates.submodules.timelineHeader.sub.afterPageHeaderClose`


Source: [app/Domain/Tickets/Templates/submodules/timelineHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/timelineHeader.sub.php), [line 103](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/timelineHeader.sub.php#L103-L103)

### `Leantime.Domain.Tickets.Templates.showList.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 38](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L38-L38)

### `Leantime.Domain.Tickets.Templates.showList.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 43](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L43-L43)

### `Leantime.Domain.Tickets.Templates.showList.tpl.allTicketsTable.before`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 57](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L57-L57)

### `Leantime.Domain.Tickets.Templates.showList.tpl.allTicketsTable.beforeHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 85](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L85-L85)

### `Leantime.Domain.Tickets.Templates.showList.tpl.allTicketsTable.beforeHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 87](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L87-L87)

### `Leantime.Domain.Tickets.Templates.showList.tpl.allTicketsTable.afterHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 94](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L94-L94)

### `Leantime.Domain.Tickets.Templates.showList.tpl.allTicketsTable.afterHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 97](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L97-L97)

### `Leantime.Domain.Tickets.Templates.showList.tpl.allTicketsTable.beforeFirstRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 99](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L99-L99)

### `Leantime.Domain.Tickets.Templates.showList.tpl.allTicketsTable.afterRowStart`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['rowNum' => $rowNum, 'tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 102](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L102-L102)

### `Leantime.Domain.Tickets.Templates.showList.tpl.allTicketsTable.beforeRowEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets, 'rowNum' => $rowNum]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 121](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L121-L121)

### `Leantime.Domain.Tickets.Templates.showList.tpl.allTicketsTable.afterLastRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 124](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L124-L124)

### `Leantime.Domain.Tickets.Templates.showList.tpl.allTicketsTable.afterBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 126](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L126-L126)

### `Leantime.Domain.Tickets.Templates.showList.tpl.allTicketsTable.afterClose`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 150](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L150-L150)

### `Leantime.Domain.Tickets.Templates.showList.tpl.scripts.afterOpen`


Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 157](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L157-L157)

### `Leantime.Domain.Tickets.Templates.showList.tpl.scripts.beforeClose`


Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 170](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L170-L170)

### `Leantime.Domain.Tickets.Templates.roadmap.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/roadmap.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/roadmap.tpl.php), [line 24](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/roadmap.tpl.php#L24-L24)

### `Leantime.Domain.Tickets.Templates.roadmap.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/roadmap.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/roadmap.tpl.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/roadmap.tpl.php#L29-L29)

### `Leantime.Domain.Tickets.Templates.showKanban.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showKanban.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showKanban.tpl.php), [line 35](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showKanban.tpl.php#L35-L35)

### `Leantime.Domain.Tickets.Templates.showKanban.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/showKanban.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showKanban.tpl.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showKanban.tpl.php#L40-L40)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.afterFormOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L34-L34)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L40-L40)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 41](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L41-L41)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.afterCenterSectionOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 47](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L47-L47)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.beforeCenterSectionClose`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 48](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L48-L48)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.afterRighthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 54](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L54-L54)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.beforeRighthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 58](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L58-L58)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.beforeFormClose`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 65](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L65-L65)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.before`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 71](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L71-L71)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.beforeHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 90](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L90-L90)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.beforeHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 92](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L92-L92)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.afterHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 111](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L111-L111)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.afterHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 113](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L113-L113)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.beforeFirstRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 115](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L115-L115)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.afterRowStart`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['rowNum' => $rowNum, 'tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 119](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L119-L119)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.beforeRowEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets, 'rowNum' => $rowNum]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 251](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L251-L251)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.afterLastRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 254](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L254-L254)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.afterBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 256](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L256-L256)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.afterClose`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 258](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L258-L258)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.scripts.afterOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 265](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L265-L265)

### `Leantime.Domain.Tickets.Templates.showAllMilestonesOverview.tpl.scripts.beforeClose`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 286](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L286-L286)

### `Leantime.Domain.Tickets.Templates.calendar.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/calendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/calendar.tpl.php), [line 25](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/calendar.tpl.php#L25-L25)

### `Leantime.Domain.Tickets.Templates.calendar.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/calendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/calendar.tpl.php), [line 30](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/calendar.tpl.php#L30-L30)

### `Leantime.Domain.Clients.Templates.delClient.tpl.beforePageHeaderOpen`


Source: [app/Domain/Clients/Templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php), [line 9](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php#L9-L9)

### `Leantime.Domain.Clients.Templates.delClient.tpl.afterPageHeaderOpen`


Source: [app/Domain/Clients/Templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php#L11-L11)

### `Leantime.Domain.Clients.Templates.delClient.tpl.beforePageHeaderClose`


Source: [app/Domain/Clients/Templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php#L17-L17)

### `Leantime.Domain.Clients.Templates.delClient.tpl.afterPageHeaderClose`


Source: [app/Domain/Clients/Templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php#L19-L19)

### `Leantime.Domain.Clients.Templates.delClient.tpl.afterFormOpen`


Source: [app/Domain/Clients/Templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php), [line 31](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php#L31-L31)

### `Leantime.Domain.Clients.Templates.delClient.tpl.beforeFormClose`


Source: [app/Domain/Clients/Templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php), [line 37](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php#L37-L37)

### `Leantime.Domain.Clients.Templates.showAll.tpl.beforePageHeaderOpen`


Source: [app/Domain/Clients/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php#L8-L8)

### `Leantime.Domain.Clients.Templates.showAll.tpl.afterPageHeaderOpen`


Source: [app/Domain/Clients/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php), [line 10](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php#L10-L10)

### `Leantime.Domain.Clients.Templates.showAll.tpl.beforePageHeaderClose`


Source: [app/Domain/Clients/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php#L16-L16)

### `Leantime.Domain.Clients.Templates.showAll.tpl.afterPageHeaderClose`


Source: [app/Domain/Clients/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php#L18-L18)

### `Leantime.Domain.Clients.Templates.showAll.tpl.scripts.afterOpen`


Source: [app/Domain/Clients/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php), [line 65](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php#L65-L65)

### `Leantime.Domain.Clients.Templates.showAll.tpl.scripts.beforeClose`


Source: [app/Domain/Clients/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php), [line 74](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php#L74-L74)

### `Leantime.Domain.Clients.Templates.newClient.tpl.beforePageHeaderOpen`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 9](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L9-L9)

### `Leantime.Domain.Clients.Templates.newClient.tpl.afterPageHeaderOpen`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L11-L11)

### `Leantime.Domain.Clients.Templates.newClient.tpl.beforePageHeaderClose`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L17-L17)

### `Leantime.Domain.Clients.Templates.newClient.tpl.afterPageHeaderClose`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L19-L19)

### `Leantime.Domain.Clients.Templates.newClient.tpl.afterFormOpen`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 32](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L32-L32)

### `Leantime.Domain.Clients.Templates.newClient.tpl.beforeSubmitButton`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 111](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L111-L111)

### `Leantime.Domain.Clients.Templates.newClient.tpl.beforeFormClose`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 125](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L125-L125)

### `Leantime.Domain.Clients.Templates.editClient.tpl.beforePageHeaderOpen`


Source: [app/Domain/Clients/Templates/editClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php), [line 9](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php#L9-L9)

### `Leantime.Domain.Clients.Templates.editClient.tpl.afterPageHeaderOpen`


Source: [app/Domain/Clients/Templates/editClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php#L11-L11)

### `Leantime.Domain.Clients.Templates.editClient.tpl.beforePageHeaderClose`


Source: [app/Domain/Clients/Templates/editClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php#L17-L17)

### `Leantime.Domain.Clients.Templates.editClient.tpl.afterPageHeaderClose`


Source: [app/Domain/Clients/Templates/editClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php#L19-L19)

### `Leantime.Domain.Clients.Templates.showClient.tpl.beforePageHeaderOpen`


Source: [app/Domain/Clients/Templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php#L11-L11)

### `Leantime.Domain.Clients.Templates.showClient.tpl.afterPageHeaderOpen`


Source: [app/Domain/Clients/Templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php#L13-L13)

### `Leantime.Domain.Clients.Templates.showClient.tpl.beforePageHeaderClose`


Source: [app/Domain/Clients/Templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php#L19-L19)

### `Leantime.Domain.Clients.Templates.showClient.tpl.afterPageHeaderClose`


Source: [app/Domain/Clients/Templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php#L21-L21)

### `Leantime.Domain.Clients.Templates.showClient.tpl.scripts.afterOpen`


Source: [app/Domain/Clients/Templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php), [line 261](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php#L261-L261)

### `Leantime.Domain.Clients.Templates.showClient.tpl.scripts.beforeClose`


Source: [app/Domain/Clients/Templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php), [line 269](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php#L269-L269)

### `Leantime.Domain.Projects.Repositories.Projects.editProject.editProject`

*editProject - edit a project*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("values" => $values, "oldProject" => $oldProject)` |  | 

Source: [app/Domain/Projects/Repositories/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Repositories/Projects.php), [line 768](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Repositories/Projects.php#L768-L830)

### `Leantime.Domain.Projects.Repositories.Projects.addProjectRelation.userAddedToProject`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("userId" => $userId, "projectId" => $projectId, "projectRole" => $projectRole, "oldProject" => $oldProject)` |  | 

Source: [app/Domain/Projects/Repositories/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Repositories/Projects.php), [line 1243](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Repositories/Projects.php#L1243-L1273)

### `Leantime.Domain.Projects.Templates.showProject.tpl.projectTabsList`


Source: [app/Domain/Projects/Templates/showProject.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/showProject.tpl.php), [line 39](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/showProject.tpl.php#L39-L39)

### `Leantime.Domain.Projects.Templates.showProject.tpl.projectTabsContent`


Source: [app/Domain/Projects/Templates/showProject.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/showProject.tpl.php), [line 381](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/showProject.tpl.php#L381-L381)

### `Leantime.Domain.Projects.Templates.newProject.tpl.beforeClientPicker`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$project` |  | 

Source: [app/Domain/Projects/Templates/newProject.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/newProject.tpl.php), [line 88](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/newProject.tpl.php#L88-L88)

### `Leantime.Domain.Projects.Templates.submodules.projectDetails.sub.afterProjectAvatar`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$project` |  | 

Source: [app/Domain/Projects/Templates/submodules/projectDetails.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/submodules/projectDetails.sub.php), [line 113](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/submodules/projectDetails.sub.php#L113-L113)

### `Leantime.Domain.Projects.Services.Projects.notifyProjectUsers.notifyProjectUsers`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("type" => "projectUpdate", "module" => $notification->module, "moduleId" => $entityId, "message" => $notification->message, "subject" => $notification->subject, "users" => $this->getAllUserInfoToNotify($notification->projectId), "url" => $notification->url['url'])` |  | 
`"domain.services.projects"` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 248](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L248-L344)

### `Leantime.Domain.Projects.Services.Projects.changeCurrentSessionProject.projects.setCurrentProject`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$project` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 688](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L688-L785)

### `Leantime.Domain.Calendar.Templates.export.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/export.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php#L19-L19)

### `Leantime.Domain.Calendar.Templates.export.tpl.beforeSubmitButton`


Source: [app/Domain/Calendar/Templates/export.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php), [line 38](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php#L38-L38)

### `Leantime.Domain.Calendar.Templates.export.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/export.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php), [line 50](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php#L50-L50)

### `Leantime.Domain.Calendar.Templates.delExternalCal.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/delExternalCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delExternalCal.tpl.php), [line 12](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delExternalCal.tpl.php#L12-L12)

### `Leantime.Domain.Calendar.Templates.delExternalCal.tpl.beforeSubmitButton`


Source: [app/Domain/Calendar/Templates/delExternalCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delExternalCal.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delExternalCal.tpl.php#L14-L14)

### `Leantime.Domain.Calendar.Templates.delExternalCal.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/delExternalCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delExternalCal.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delExternalCal.tpl.php#L17-L17)

### `Leantime.Domain.Calendar.Templates.showAllGCals.tpl.scripts.afterOpen`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 10](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L10-L10)

### `Leantime.Domain.Calendar.Templates.showAllGCals.tpl.scripts.beforeClose`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 35](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L35-L35)

### `Leantime.Domain.Calendar.Templates.showAllGCals.tpl.beforePageHeaderOpen`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L40-L40)

### `Leantime.Domain.Calendar.Templates.showAllGCals.tpl.afterPageHeaderOpen`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 42](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L42-L42)

### `Leantime.Domain.Calendar.Templates.showAllGCals.tpl.beforePageHeaderClose`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 52](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L52-L52)

### `Leantime.Domain.Calendar.Templates.showAllGCals.tpl.afterPageHeaderClose`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 54](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L54-L54)

### `Leantime.Domain.Calendar.Templates.showAllGCals.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 60](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L60-L60)

### `Leantime.Domain.Calendar.Templates.showAllGCals.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 88](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L88-L88)

### `Leantime.Domain.Calendar.Templates.editEvent.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/editEvent.tpl.php), [line 15](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/editEvent.tpl.php#L15-L15)

### `Leantime.Domain.Calendar.Templates.editEvent.tpl.beforeSubmitButton`


Source: [app/Domain/Calendar/Templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/editEvent.tpl.php), [line 47](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/editEvent.tpl.php#L47-L47)

### `Leantime.Domain.Calendar.Templates.editEvent.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/editEvent.tpl.php), [line 57](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/editEvent.tpl.php#L57-L57)

### `Leantime.Domain.Calendar.Templates.delEvent.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delEvent.tpl.php), [line 12](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delEvent.tpl.php#L12-L12)

### `Leantime.Domain.Calendar.Templates.delEvent.tpl.beforeSubmitButton`


Source: [app/Domain/Calendar/Templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delEvent.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delEvent.tpl.php#L14-L14)

### `Leantime.Domain.Calendar.Templates.delEvent.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delEvent.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delEvent.tpl.php#L17-L17)

### `Leantime.Domain.Calendar.Templates.addEvent.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php#L16-L16)

### `Leantime.Domain.Calendar.Templates.addEvent.tpl.beforeSubmitButton`


Source: [app/Domain/Calendar/Templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php), [line 49](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php#L49-L49)

### `Leantime.Domain.Calendar.Templates.addEvent.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php), [line 56](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php#L56-L56)

### `Leantime.Domain.Calendar.Templates.addEvent.tpl.scripts.afterOpen`


Source: [app/Domain/Calendar/Templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php), [line 62](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php#L62-L62)

### `Leantime.Domain.Calendar.Templates.addEvent.tpl.scripts.beforeClose`


Source: [app/Domain/Calendar/Templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php), [line 68](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php#L68-L68)

### `Leantime.Domain.Calendar.Templates.showMyCalendar.tpl.beforePageHeaderOpen`


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L11-L11)

### `Leantime.Domain.Calendar.Templates.showMyCalendar.tpl.afterPageHeaderOpen`


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L13-L13)

### `Leantime.Domain.Calendar.Templates.showMyCalendar.tpl.beforePageHeaderClose`


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L19-L19)

### `Leantime.Domain.Calendar.Templates.showMyCalendar.tpl.afterPageHeaderClose`


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L21-L21)

### `Leantime.Domain.Calendar.Templates.showMyCalendar.tpl.scripts.afterOpen`


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 105](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L105-L105)

### `Leantime.Domain.Calendar.Templates.showMyCalendar.tpl.scripts.beforeClose`


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 294](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L294-L294)

### `Leantime.Domain.Auth.Controllers.UserInvite.post.userSignUpSuccess`

*post - handle post requests*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['user' => $userInvite]` |  | 

Source: [app/Domain/Auth/Controllers/UserInvite.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php), [line 77](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php#L77-L185)

### `Leantime.Domain.Auth.Controllers.Login.get.beforeAuth`

*get - handle get requests*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$params` | `array` | 

Source: [app/Domain/Auth/Controllers/Login.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php), [line 38](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php#L38-L51)

### `Leantime.Domain.Auth.Controllers.Login.post.beforeAuthServiceCall`

*post - handle post requests*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['post' => $_POST]` |  | 

Source: [app/Domain/Auth/Controllers/Login.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php), [line 80](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php#L80-L103)

### `Leantime.Domain.Auth.Controllers.Login.post.afterAuthServiceCall`

*post - handle post requests*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['post' => $_POST]` |  | 

Source: [app/Domain/Auth/Controllers/Login.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php), [line 80](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php#L80-L111)

### `Leantime.Domain.Auth.Templates.userInvite.tpl.afterPageHeaderClose`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 69](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L69-L69)

### `Leantime.Domain.Auth.Templates.userInvite.tpl.afterRegcontentOpen`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 71](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L71-L71)

### `Leantime.Domain.Auth.Templates.userInvite.tpl.afterFormOpen`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 74](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L74-L74)

### `Leantime.Domain.Auth.Templates.userInvite.tpl.beforeSubmitButton`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 100](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L100-L100)

### `Leantime.Domain.Auth.Templates.userInvite.tpl.beforeFormClose`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 104](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L104-L104)

### `Leantime.Domain.Auth.Templates.userInvite.tpl.beforeRegcontentClose`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 106](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L106-L106)

### `Leantime.Domain.Auth.Templates.requestPwLink.tpl.beforePageHeaderOpen`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 5](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L5-L5)

### `Leantime.Domain.Auth.Templates.requestPwLink.tpl.afterPageHeaderClose`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 12](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L12-L12)

### `Leantime.Domain.Auth.Templates.requestPwLink.tpl.afterRegcontentOpen`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L14-L14)

### `Leantime.Domain.Auth.Templates.requestPwLink.tpl.afterFormOpen`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L16-L16)

### `Leantime.Domain.Auth.Templates.requestPwLink.tpl.beforeSubmitButton`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 26](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L26-L26)

### `Leantime.Domain.Auth.Templates.requestPwLink.tpl.beforeFormClose`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L29-L29)

### `Leantime.Domain.Auth.Templates.requestPwLink.tpl.beforeRegcontentClose`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 31](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L31-L31)

### `Leantime.Domain.Auth.Templates.login.tpl.beforePageHeaderOpen`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L8-L8)

### `Leantime.Domain.Auth.Templates.login.tpl.afterPageHeaderOpen`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 10](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L10-L10)

### `Leantime.Domain.Auth.Templates.login.tpl.beforePageHeaderClose`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L14-L14)

### `Leantime.Domain.Auth.Templates.login.tpl.afterPageHeaderClose`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L16-L16)

### `Leantime.Domain.Auth.Templates.login.tpl.afterRegcontentOpen`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L19-L19)

### `Leantime.Domain.Auth.Templates.login.tpl.afterFormOpen`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 24](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L24-L24)

### `Leantime.Domain.Auth.Templates.login.tpl.beforeSubmitButton`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 38](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L38-L38)

### `Leantime.Domain.Auth.Templates.login.tpl.beforeFormClose`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 44](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L44-L44)

### `Leantime.Domain.Auth.Templates.login.tpl.beforeOidcButton`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 52](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L52-L52)

### `Leantime.Domain.Auth.Templates.login.tpl.beforeRegcontentClose`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 60](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L60-L60)

### `Leantime.Domain.Auth.Templates.resetPw.tpl.beforePageHeaderOpen`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 5](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L5-L5)

### `Leantime.Domain.Auth.Templates.resetPw.tpl.afterPageHeaderOpen`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L8-L8)

### `Leantime.Domain.Auth.Templates.resetPw.tpl.beforePageHeaderClose`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 12](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L12-L12)

### `Leantime.Domain.Auth.Templates.resetPw.tpl.afterPageHeaderClose`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L14-L14)

### `Leantime.Domain.Auth.Templates.resetPw.tpl.afterRegcontentOpen`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L16-L16)

### `Leantime.Domain.Auth.Templates.resetPw.tpl.afterFormOpen`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L18-L18)

### `Leantime.Domain.Auth.Templates.resetPw.tpl.beforeSubmitButton`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L34-L34)

### `Leantime.Domain.Auth.Templates.resetPw.tpl.beforeFormClose`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L40-L40)

### `Leantime.Domain.Auth.Templates.resetPw.tpl.beforeRegcontentClose`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 42](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L42-L42)

### `Leantime.Domain.Auth.Services.Auth.login.beforeLoginCheck`

*login - Validate POST-data with DB*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password]` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 187](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L187-L199)

### `Leantime.Domain.Auth.Services.Auth.login.afterLoginCheck`

*login - Validate POST-data with DB*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password, 'authService' => app()->make(self::class)]` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 187](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L187-L287)

### `Leantime.Domain.Auth.Services.Auth.login.afterLoginCheck`

*login - Validate POST-data with DB*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password, 'authService' => app()->make(self::class)]` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 187](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L187-L292)

### `Leantime.Domain.Auth.Services.Auth.logout.afterSessionDestroy`

*logout - destroy sessions and cookies*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['authService' => app()->make(self::class)]` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 384](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L384-L412)

### `Leantime.Domain.Cron.Services.Cron.runCron.addJobToBeginning`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$lastEvent` |  | 

Source: [app/Domain/Cron/Services/Cron.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Cron/Services/Cron.php), [line 44](https://github.com/Leantime/leantime/blob/master/app/Domain/Cron/Services/Cron.php#L44-L75)

### `Leantime.Domain.Cron.Services.Cron.runCron.addJobToEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$lastEvent` |  | 

Source: [app/Domain/Cron/Services/Cron.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Cron/Services/Cron.php), [line 44](https://github.com/Leantime/leantime/blob/master/app/Domain/Cron/Services/Cron.php#L44-L98)

### `Leantime.Domain.Setting.Templates.editCompanySettings.tpl.beforeTelemetrySettings`


Source: [app/Domain/Setting/Templates/editCompanySettings.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Setting/Templates/editCompanySettings.tpl.php), [line 76](https://github.com/Leantime/leantime/blob/master/app/Domain/Setting/Templates/editCompanySettings.tpl.php#L76-L76)

### `Leantime.Domain.Reports.Services.Reports.getAnonymousTelemetry.beforeTelemetrySend`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("companyId" => $companyId)` |  | 

Source: [app/Domain/Reports/Services/Reports.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Reports/Services/Reports.php), [line 163](https://github.com/Leantime/leantime/blob/master/app/Domain/Reports/Services/Reports.php#L163-L208)

### `Leantime.Domain.Users.Services.Users.editUser.editUser`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`["id" => $id, "values" => $values]` |  | 

Source: [app/Domain/Users/Services/Users.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php), [line 70](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php#L70-L81)

### `Leantime.Domain.Users.Services.Users.editOwn.editUser`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`["id" => $id, "values" => $values]` |  | 

Source: [app/Domain/Users/Services/Users.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php), [line 390](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php#L390-L405)

### `Leantime.Domain.Api.Controllers.NewApiKey.init.api_key_init`

*init - initialize private variables*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/Domain/Api/Controllers/NewApiKey.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Api/Controllers/NewApiKey.php), [line 25](https://github.com/Leantime/leantime/blob/master/app/Domain/Api/Controllers/NewApiKey.php#L25-L46)

### `Leantime.Domain.Api.Controllers.ApiKey.init.api_key_init`

*init - initialize private variables*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/Domain/Api/Controllers/ApiKey.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Api/Controllers/ApiKey.php), [line 23](https://github.com/Leantime/leantime/blob/master/app/Domain/Api/Controllers/ApiKey.php#L23-L38)

### `Leantime.Core.Events.DispatchesEvents.dispatch_event.{$hook}`

*dispatches an event with context*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` | `mixed` | 
`static::get_event_context($function)` |  | 

Source: [app/Core/Events/DispatchesEvents.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/DispatchesEvents.php), [line 15](https://github.com/Leantime/leantime/blob/master/app/Core/Events/DispatchesEvents.php#L15-L28)

### `Leantime.Core.Events.EventDispatcher.dispatch.{$eventName->message}`

*EventDispatcher class - Handles all events and filters*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$context` |  | 

Source: [app/Core/Events/EventDispatcher.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php), [line 12](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php#L12-L84)

### `Leantime.Core.Events.EventDispatcher.dispatch.{$eventName}`

*EventDispatcher class - Handles all events and filters*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$context` |  | 

Source: [app/Core/Events/EventDispatcher.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php), [line 12](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php#L12-L88)

### `Leantime.Core.Middleware.StartSession.handle.session_initialized`

*Handle an incoming request.*


Source: [app/Core/Middleware/StartSession.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/StartSession.php), [line 49](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/StartSession.php#L49-L64)

### `Leantime.Core.Middleware.Auth.handle.logged_in`

*Handle the request*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['application' => $this]` |  | 

Source: [app/Core/Middleware/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Auth.php), [line 67](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Auth.php#L67-L92)

### `Leantime.Core.Middleware.Installed.handle.after_install`

*Check if Leantime is installed*


Source: [app/Core/Middleware/Installed.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Installed.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Installed.php#L16-L51)

### `Leantime.Core.Middleware.ApiAuth.handle.before_api_request`

*Handle an incoming request*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['application' => app()]` |  | 

Source: [app/Core/Middleware/ApiAuth.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/ApiAuth.php), [line 20](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/ApiAuth.php#L20-L32)

### `Leantime.Core.Mailer.dispatchMailerHook.{$hook}`

*dispatchMailerHook - dispatches a mailer hook*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` | `mixed` | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 233](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L233-L260)

### `Leantime.Core.Mailer.sendMail.sendMailTo`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$to` | `array` | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 271](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L271-L284)

### `Leantime.Core.Mailer.sendMail.sendMailFrom`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$from` | `mixed` | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 271](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L271-L285)

### `Leantime.Core.Mailer.sendMail.bodyTemplate`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`'<table width="100%" style="background:#fefefe; padding:15px; ">
                <tr>
                    <td align="center" valign="top">
                        <table width="600"  style="width:600px; background-color:#ffffff; border:1px solid #ccc; border-radius:5px;">
                            <tr>
                                <td style="padding:20px 10px; text-align:center;">
                                   <img alt="Logo" src="{!! $inlineLogoContent !!}" width="150" style="width:150px;">
                                </td>
                            </tr>
                            <tr>
                                <td style=\'padding:10px; font-family:"Lato","Helvetica Neue",helvetica,sans-serif; color:#666; font-size:16px; line-height:1.7;\'>
                                    {!! $headline !!}
                                    <br/>
                                    {!! $content !!}
                                    <br/><br/>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" style=\'padding:10px; font-family:"Lato","Helvetica Neue",helvetica,sans-serif; color:#666; font-size:14px; line-height:1.7;\'>
                        {!! $unsub_link !!}
                    </td>
                </tr>
            </table>'` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 314](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L314-L339)

### `Leantime.Core.Mailer.sendMail.mailBodyParams`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['inlineLogoContent' => $inlineLogoContent, 'headline' => $this->language->__('email_notifications.hi'), 'content' => $this->nl2br ? nl2br($this->html) : $this->html, 'unsub_link' => sprintf($this->language->__('email_notifications.unsubscribe'), BASE_URL . '/users/editOwn/')]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 340](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L340-L348)

### `Leantime.Core.Mailer.sendMail.bodyContent`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$mailBody` |  | 
`[['companyColor' => $this->companyColor, 'logoUrl' => $inlineLogoContent, 'languageHiText' => $this->language->__('email_notifications.hi'), 'emailContentsHtml' => nl2br($this->html), 'unsubLink' => sprintf($this->language->__('email_notifications.unsubscribe'), BASE_URL . '/users/editOwn/')]]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 271](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L271-L363)

### `Leantime.Core.Mailer.sendMail.altBody`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->text` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 271](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L271-L371)

### `Leantime.Core.Template.displayNotification.notification_displayed`

*displayNotification - display notification*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$note` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 647](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L647-L681)

### `Leantime.Core.Template.displayInlineNotification.notification_displayed`

*displayInlineNotification - display notification*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$note` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 721](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L721-L760)

### `Leantime.Core.Template.dispatchTplHook.{$hookName}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` | `mixed` | 
`$this->hookContext` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 1068](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L1068-L1086)

### `Leantime.Core.Http.HttpKernel.terminate.request_terminated`

*Terminate the request.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['request' => $request, 'response' => $response]` |  | 

Source: [app/Core/Http/HttpKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php), [line 76](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php#L76-L109)

### `Leantime.Core.Providers.Environment.boot.config_initialized`


Source: [app/Core/Providers/Environment.php](https://github.com/Leantime/leantime/blob/master/app/Core/Providers/Environment.php), [line 72](https://github.com/Leantime/leantime/blob/master/app/Core/Providers/Environment.php#L72-L72)

### `Leantime.Core.Db.Repository.__call.beforeExecute`

*executes the sql call - uses \PDO*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 156](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L156-L173)

### `Leantime.Core.Db.Repository.__call.afterExecute`

*executes the sql call - uses \PDO*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 156](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L156-L186)

### `Leantime.Core.Controller.Frontcontroller.executeAction.execute_action_start`

*executeAction - includes the class in includes/modules by the Request*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`["action" => $actionName, "module" => $moduleName]` |  | 

Source: [app/Core/Controller/Frontcontroller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Frontcontroller.php), [line 87](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Frontcontroller.php#L87-L102)

### `Leantime.Core.Controller.Frontcontroller.executeAction.execute_action_end`

*executeAction - includes the class in includes/modules by the Request*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`["action" => $actionName, "module" => $moduleName]` |  | 

Source: [app/Core/Controller/Frontcontroller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Frontcontroller.php), [line 87](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Frontcontroller.php#L87-L131)

### `Leantime.Core.Controller.HtmxController.__construct.begin`

*constructor - initialize private variables*


Source: [app/Core/Controller/HtmxController.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/HtmxController.php), [line 32](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/HtmxController.php#L32-L46)

### `Leantime.Core.Controller.HtmxController.__construct.end`

*constructor - initialize private variables*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/Core/Controller/HtmxController.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/HtmxController.php), [line 32](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/HtmxController.php#L32-L54)

### `Leantime.Core.Controller.HtmxController.executeActions.before_init`

*Allows hooking into all controllers with events*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['controller' => $this]` |  | 

Source: [app/Core/Controller/HtmxController.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/HtmxController.php), [line 57](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/HtmxController.php#L57-L67)

### `Leantime.Core.Controller.HtmxController.executeActions.before_action`

*Allows hooking into all controllers with events*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['controller' => $this]` |  | 

Source: [app/Core/Controller/HtmxController.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/HtmxController.php), [line 57](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/HtmxController.php#L57-L72)

### `Leantime.Core.Controller.Controller.__construct.begin`

*constructor - initialize private variables*


Source: [app/Core/Controller/Controller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Controller.php), [line 30](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Controller.php#L30-L50)

### `Leantime.Core.Controller.Controller.__construct.end`

*constructor - initialize private variables*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/Core/Controller/Controller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Controller.php), [line 30](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Controller.php#L30-L58)

### `Leantime.Core.Controller.Controller.executeActions.before_init`

*Allows hooking into all controllers with events*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` |  | 

Source: [app/Core/Controller/Controller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Controller.php), [line 61](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Controller.php#L61-L86)

### `Leantime.Core.Controller.Controller.executeActions.before_action`

*Allows hooking into all controllers with events*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` |  | 

Source: [app/Core/Controller/Controller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Controller.php), [line 61](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Controller.php#L61-L91)

### `Leantime.Core.Bootstrap.Bootloader.boot.beginning`

*Execute the Application lifecycle.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['bootloader' => $this]` |  | 

Source: [app/Core/Bootstrap/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootstrap/Bootloader.php), [line 104](https://github.com/Leantime/leantime/blob/master/app/Core/Bootstrap/Bootloader.php#L104-L120)

### `Leantime.Core.Bootstrap.Bootloader.boot.end`

*Execute the Application lifecycle.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['bootloader' => $this]` |  | 

Source: [app/Core/Bootstrap/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootstrap/Bootloader.php), [line 104](https://github.com/Leantime/leantime/blob/master/app/Core/Bootstrap/Bootloader.php#L104-L133)

### `Leantime.Core.Console.ConsoleKernel.schedule.cron`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['schedule' => $schedule]` |  | 
`'schedule'` |  | 

Source: [app/Core/Console/ConsoleKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Console/ConsoleKernel.php), [line 214](https://github.com/Leantime/leantime/blob/master/app/Core/Console/ConsoleKernel.php#L214-L214)

### `Leantime.Core.Console.ConsoleKernel.terminate.command`

*Terminate the application.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['input' => $input, 'status' => $status]` |  | 

Source: [app/Core/Console/ConsoleKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Console/ConsoleKernel.php), [line 295](https://github.com/Leantime/leantime/blob/master/app/Core/Console/ConsoleKernel.php#L295-L312)

### `Leantime.Plugins.Llamadorian.Templates.statusUpdates.tpl.beforePageHeaderOpen`


Source: [app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php#L21-L21)

### `Leantime.Plugins.Llamadorian.Templates.statusUpdates.tpl.afterPageHeaderOpen`


Source: [app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php), [line 23](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php#L23-L23)

### `Leantime.Plugins.Llamadorian.Templates.statusUpdates.tpl.beforePageHeaderClose`


Source: [app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php), [line 28](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php#L28-L28)

### `Leantime.Plugins.Llamadorian.Templates.statusUpdates.tpl.afterPageHeaderClose`


Source: [app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php), [line 30](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php#L30-L30)

### `Leantime.Plugins.Llamadorian.Templates.statusUpdates.tpl.scripts.afterOpen`


Source: [app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php), [line 138](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php#L138-L138)

### `Leantime.Plugins.Llamadorian.Templates.statusUpdates.tpl.scripts.beforeClose`


Source: [app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php), [line 195](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusUpdates.tpl.php#L195-L195)

### `Leantime.Plugins.Llamadorian.Templates.statusCollector.tpl.beforePageHeaderOpen`


Source: [app/Plugins/Llamadorian/Templates/statusCollector.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusCollector.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusCollector.tpl.php#L14-L14)

### `Leantime.Plugins.Llamadorian.Templates.statusCollector.tpl.afterPageHeaderOpen`


Source: [app/Plugins/Llamadorian/Templates/statusCollector.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusCollector.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusCollector.tpl.php#L16-L16)

### `Leantime.Plugins.Llamadorian.Templates.statusCollector.tpl.beforePageHeaderClose`


Source: [app/Plugins/Llamadorian/Templates/statusCollector.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusCollector.tpl.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusCollector.tpl.php#L21-L21)

### `Leantime.Plugins.Llamadorian.Templates.statusCollector.tpl.afterPageHeaderClose`


Source: [app/Plugins/Llamadorian/Templates/statusCollector.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusCollector.tpl.php), [line 23](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusCollector.tpl.php#L23-L23)

### `Leantime.Plugins.Llamadorian.Templates.statusCollector.tpl.scripts.afterOpen`


Source: [app/Plugins/Llamadorian/Templates/statusCollector.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusCollector.tpl.php), [line 152](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusCollector.tpl.php#L152-L152)

### `Leantime.Plugins.Llamadorian.Templates.statusCollector.tpl.scripts.beforeClose`


Source: [app/Plugins/Llamadorian/Templates/statusCollector.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusCollector.tpl.php), [line 213](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/statusCollector.tpl.php#L213-L213)

### `Leantime.Plugins.Llamadorian.Templates.currentStatusUpdate.tpl.beforePageHeaderOpen`


Source: [app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php#L8-L8)

### `Leantime.Plugins.Llamadorian.Templates.currentStatusUpdate.tpl.afterPageHeaderOpen`


Source: [app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php), [line 10](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php#L10-L10)

### `Leantime.Plugins.Llamadorian.Templates.currentStatusUpdate.tpl.beforePageHeaderClose`


Source: [app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php), [line 15](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php#L15-L15)

### `Leantime.Plugins.Llamadorian.Templates.currentStatusUpdate.tpl.afterPageHeaderClose`


Source: [app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php#L17-L17)

### `Leantime.Plugins.Llamadorian.Templates.currentStatusUpdate.tpl.scripts.afterOpen`


Source: [app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php), [line 113](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php#L113-L113)

### `Leantime.Plugins.Llamadorian.Templates.currentStatusUpdate.tpl.scripts.beforeClose`


Source: [app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php), [line 304](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Templates/currentStatusUpdate.tpl.php#L304-L304)

### `Leantime.Plugins.PgmPro.Templates.newProgram.tpl.beforeClientPicker`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$program` |  | 

Source: [app/Plugins/PgmPro/Templates/newProgram.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/PgmPro/Templates/newProgram.tpl.php), [line 77](https://github.com/Leantime/leantime/blob/master/app/Plugins/PgmPro/Templates/newProgram.tpl.php#L77-L77)

### `Leantime.Plugins.PgmPro.Templates.showProgram.tpl.beforeClientPicker`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$program` |  | 

Source: [app/Plugins/PgmPro/Templates/showProgram.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/PgmPro/Templates/showProgram.tpl.php), [line 81](https://github.com/Leantime/leantime/blob/master/app/Plugins/PgmPro/Templates/showProgram.tpl.php#L81-L81)

## Filters

### `Leantime.Domain.Tickets.Services.Tickets.getToDoWidgetAssignments.myTodoWidgetTasks`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$tickets` |  | 

Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L29-L2130)

### `Leantime.Domain.Projects.Controllers.ChangeCurrentProject.get.defaultProjectUrl`

*get - handle get requests*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$defaultURL` |  | 
`$project` |  | 

Source: [app/Domain/Projects/Controllers/ChangeCurrentProject.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Controllers/ChangeCurrentProject.php), [line 30](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Controllers/ChangeCurrentProject.php#L30-L50)

### `Leantime.Domain.Projects.Services.Projects.getProjectTypes.filterProjectType`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$types` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 78](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L78-L88)

### `Leantime.Domain.Projects.Services.Projects.notifyProjectUsers.notificationFilter`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$notification` | `\Notification` | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 248](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L248-L259)

### `Leantime.Domain.Projects.Services.Projects.getProjectHierarchyAssignedToUser.afterLoadingProjects`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projects` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 454](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L454-L472)

### `Leantime.Domain.Projects.Services.Projects.getProjectHierarchyAssignedToUser.afterPopulatingProjectHierarchy`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projectHierarchy` |  | 
`array("projects" => $projects)` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 454](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L454-L478)

### `Leantime.Domain.Projects.Services.Projects.getProjectHierarchyAssignedToUser.afterPopulatingProjectFavorites`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$favorites` |  | 
`array("projects" => $projects)` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 454](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L454-L487)

### `Leantime.Domain.Projects.Services.Projects.getProjectHierarchyAvailableToUser.afterLoadingProjects`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projects` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 496](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L496-L514)

### `Leantime.Domain.Projects.Services.Projects.getProjectHierarchyAvailableToUser.afterPopulatingProjectHierarchy`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projectHierarchy` |  | 
`array("projects" => $projects)` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 496](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L496-L520)

### `Leantime.Domain.Projects.Services.Projects.getAllClientsAvailableToUser.afterLoadingProjects`

*Gets all the clients available to a user.*

Clients are determined by the projects
the user is assigned to.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projects` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 532](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L532-L553)

### `Leantime.Domain.Projects.Services.Projects.getProjectAvatar.afterGettingAvatar`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$avatar` |  | 
`array("projectId" => $id)` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 1274](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L1274-L1284)

### `Leantime.Domain.Install.Controllers.Update.get.customUpdatePage`

*get - handle get requests*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`'install.update'` |  | 

Source: [app/Domain/Install/Controllers/Update.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Install/Controllers/Update.php), [line 37](https://github.com/Leantime/leantime/blob/master/app/Domain/Install/Controllers/Update.php#L37-L50)

### `Leantime.Domain.Connector.Services.Providers.loadProviders.providerList`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->providers` |  | 

Source: [app/Domain/Connector/Services/Providers.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Connector/Services/Providers.php), [line 23](https://github.com/Leantime/leantime/blob/master/app/Domain/Connector/Services/Providers.php#L23-L34)

### `Leantime.Domain.Timesheets.Repositories.Timesheets.addTime.sql`

*addTime - add user-specific time entry*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$query` |  | 

Source: [app/Domain/Timesheets/Repositories/Timesheets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php), [line 580](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php#L580-L625)

### `Leantime.Domain.Timesheets.Repositories.Timesheets.upsertTimesheetEntry.sql`

*addTime - add user-specific time entry*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$query` |  | 

Source: [app/Domain/Timesheets/Repositories/Timesheets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php), [line 748](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php#L748-L790)

### `Leantime.Domain.Timesheets.Repositories.Timesheets.updateHours.sql`

*updatTime - update specific time entry*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$query` |  | 

Source: [app/Domain/Timesheets/Repositories/Timesheets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php), [line 864](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php#L864-L887)

### `Leantime.Domain.Plugins.Controllers.CssLoader.get.pluginCss`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`[]` |  | 

Source: [app/Domain/Plugins/Controllers/CssLoader.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Controllers/CssLoader.php), [line 28](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Controllers/CssLoader.php#L28-L33)

### `Leantime.Domain.Plugins.Services.Plugins.getAllPlugins.beforeReturnAllPlugins`

*Filters array of plugins from database and config before returning*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$installedPluginsById` |  | 
`array("enabledOnly" => $enabledOnly)` |  | 

Source: [app/Domain/Plugins/Services/Plugins.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php), [line 137](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php#L137-L143)

### `Leantime.Domain.Plugins.Services.Plugins.getEnabledPlugins.beforeReturnCachedPlugins`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`session("enabledPlugins")` |  | 
`array("enabledOnly" => true)` |  | 

Source: [app/Domain/Plugins/Services/Plugins.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php), [line 168](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php#L168-L178)

### `Leantime.Domain.Plugins.Services.Plugins.getEnabledPlugins.beforeReturnCachedPlugins`

*Filters session array of enabled plugins before returning*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`session("enabledPlugins")` |  | 
`array("enabledOnly" => true)` |  | 

Source: [app/Domain/Plugins/Services/Plugins.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php), [line 184](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php#L184-L190)

### `Leantime.Domain.Wiki.Templates.templates.tpl.documentTemplates`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$templates` |  | 

Source: [app/Domain/Wiki/Templates/templates.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Wiki/Templates/templates.tpl.php), [line 469](https://github.com/Leantime/leantime/blob/master/app/Domain/Wiki/Templates/templates.tpl.php#L469-L469)

### `Leantime.Domain.Auth.Services.Auth.setUsersession.user_session_vars`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$currentUser` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 298](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L298-L328)

### `Leantime.Domain.Auth.Services.Auth.logout.sessions_vars_to_destroy`

*logout - destroy sessions and cookies*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['userdata', 'template', 'subdomainData', 'currentProject', 'currentSprint', 'projectsettings', 'currentSubscriptions', 'lastTicketView', 'lastFilterdTicketTableView']` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 384](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L384-L406)

### `Leantime.Domain.Auth.Models.Roles.getFilteredRoles.available_roles`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`self::$roleKeys` |  | 

Source: [app/Domain/Auth/Models/Roles.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Models/Roles.php), [line 30](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Models/Roles.php#L30-L37)

### `Leantime.Domain.Dashboard.Controllers.Show.get.dashboardRedirect`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"/dashboard/show"` |  | 
`array("type" => $project["type"])` |  | 

Source: [app/Domain/Dashboard/Controllers/Show.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Controllers/Show.php), [line 66](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Controllers/Show.php#L66-L82)

### `Leantime.Domain.Menu.Repositories.Menu.buildMenuStructure.{$filter}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`payload: $this->buildMenuStructure($menuItem['submenu'], $filter)` |  | 
`function: 'getMenuStructure'` |  | 

Source: [app/Domain/Menu/Repositories/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php), [line 233](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php#L233-L237)

### `Leantime.Domain.Menu.Repositories.Menu.getMenuStructure.{$filter}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->buildMenuStructure($menu, $filter)` |  | 
`'getMenuStructure'` |  | 

Source: [app/Domain/Menu/Repositories/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php), [line 257](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php#L257-L261)

### `Leantime.Domain.Menu.Repositories.Menu.getMenuStructure.menuStructures`

*getMenu - Return a specific menu structure*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$menuCollection` |  | 
`['menuType' => $menuType]` |  | 

Source: [app/Domain/Menu/Repositories/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php), [line 243](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php#L243-L269)

### `Leantime.Domain.Menu.Repositories.Menu.getSectionMenuType.menuSections`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$sections` |  | 
`array("currentRoute" => $currentRoute, "default" => $default)` |  | 

Source: [app/Domain/Menu/Repositories/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php#L16-L444)

### `Leantime.Domain.Menu.Hxcontrollers.ProjectSelector.updateMenu.startSomething`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"#/projects/createnew"` |  | 

Source: [app/Domain/Menu/Hxcontrollers/ProjectSelector.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Hxcontrollers/ProjectSelector.php), [line 46](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Hxcontrollers/ProjectSelector.php#L46-L118)

### `Leantime.Domain.Menu.Services.Menu.getProjectTypeAvatars.projectTypeAvatars`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projectTypeAvatars` |  | 

Source: [app/Domain/Menu/Services/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Services/Menu.php), [line 163](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Services/Menu.php#L163-L175)

### `Leantime.Domain.Menu.Services.Menu.getProjectSelectorGroupingOptions.projectSelectorGrouping`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projectSelectGrouping` |  | 

Source: [app/Domain/Menu/Services/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Services/Menu.php), [line 178](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Services/Menu.php#L178-L191)

### `Leantime.Domain.Menu.Composers.ProjectSelector.with.startSomething`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"#/projects/createnew"` |  | 

Source: [app/Domain/Menu/Composers/ProjectSelector.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Composers/ProjectSelector.php), [line 44](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Composers/ProjectSelector.php#L44-L92)

### `Leantime.Domain.Menu.Composers.Menu.with.startSomething`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"#/projects/createnew"` |  | 

Source: [app/Domain/Menu/Composers/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Composers/Menu.php), [line 43](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Composers/Menu.php#L43-L112)

### `Leantime.Domain.Reactions.Models.Reactions.getReactions.available_reactions`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`self::$reactionTypes` |  | 

Source: [app/Domain/Reactions/Models/Reactions.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Reactions/Models/Reactions.php), [line 57](https://github.com/Leantime/leantime/blob/master/app/Domain/Reactions/Models/Reactions.php#L57-L62)

### `Leantime.Domain.Reactions.Models.Reactions.getReactionsByType.available_reactions`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`self::$reactionTypes` |  | 

Source: [app/Domain/Reactions/Models/Reactions.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Reactions/Models/Reactions.php), [line 69](https://github.com/Leantime/leantime/blob/master/app/Domain/Reactions/Models/Reactions.php#L69-L75)

### `Leantime.Domain.Help.Services.Helper.__construct.addHelperModal`

*Constructor for the class.*

Initializes the availableModals property by dispatching the "addHelperModal" event.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->availableModals` |  | 

Source: [app/Domain/Help/Services/Helper.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Help/Services/Helper.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/Domain/Help/Services/Helper.php#L34-L43)

### `Leantime.Domain.Help.Services.Helper.getFirstLoginSteps.filterSteps`

*Retrieves the first login steps.*

This method returns an array of steps that a user needs to follow during the first login.

Each step consists of a template and a button label.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$steps` |  | 

Source: [app/Domain/Help/Services/Helper.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Help/Services/Helper.php), [line 67](https://github.com/Leantime/leantime/blob/master/app/Domain/Help/Services/Helper.php#L67-L86)

### `Leantime.Domain.Reports.Services.Reports.getAnonymousTelemetry.beforeReturnTelemetry`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$telemetry` |  | 

Source: [app/Domain/Reports/Services/Reports.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Reports/Services/Reports.php), [line 163](https://github.com/Leantime/leantime/blob/master/app/Domain/Reports/Services/Reports.php#L163-L300)

### `Leantime.Domain.Widgets.Services.Widgets.__construct.availableWidgets`

*__construct method.*

Initializes the object and sets the available widgets and default widgets.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->availableWidgets` |  | 

Source: [app/Domain/Widgets/Services/Widgets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Widgets/Services/Widgets.php), [line 37](https://github.com/Leantime/leantime/blob/master/app/Domain/Widgets/Services/Widgets.php#L37-L122)

### `Leantime.Domain.Widgets.Services.Widgets.__construct.defaultWidgets`

*__construct method.*

Initializes the object and sets the available widgets and default widgets.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->defaultWidgets` |  | 
`array("availableWidgets" => $this->availableWidgets)` |  | 

Source: [app/Domain/Widgets/Services/Widgets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Widgets/Services/Widgets.php), [line 37](https://github.com/Leantime/leantime/blob/master/app/Domain/Widgets/Services/Widgets.php#L37-L123)

### `Leantime.Domain.Widgets.Services.Widgets.getAll.availableWidgets`

*Retrieves all available widgets.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->availableWidgets` |  | 

Source: [app/Domain/Widgets/Services/Widgets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Widgets/Services/Widgets.php), [line 126](https://github.com/Leantime/leantime/blob/master/app/Domain/Widgets/Services/Widgets.php#L126-L135)

### `Leantime.Domain.Users.Services.Users.getAll.getAll`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$users` |  | 

Source: [app/Domain/Users/Services/Users.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php), [line 108](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php#L108-L118)

### `Leantime.Domain.Modulemanager.Controllers.Notavailable.run.notAvailableRedirect`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$redirect` |  | 
`$params` |  | 

Source: [app/Domain/Modulemanager/Controllers/Notavailable.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Modulemanager/Controllers/Notavailable.php), [line 12](https://github.com/Leantime/leantime/blob/master/app/Domain/Modulemanager/Controllers/Notavailable.php#L12-L21)

### `Leantime.Domain.Modulemanager.Services.Modulemanager.isModuleAvailable.moduleAvailability`

*Checks if a module is available.*

In Progress: This method is a stub to hook into via filters.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available` |  | 
`["module" => $module]` |  | 

Source: [app/Domain/Modulemanager/Services/Modulemanager.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Modulemanager/Services/Modulemanager.php), [line 73](https://github.com/Leantime/leantime/blob/master/app/Domain/Modulemanager/Services/Modulemanager.php#L73-L96)

### `Leantime.Core.Fileupload.getPublicFilesPath.relative_path`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"/../../public/userfiles"` |  | 

Source: [app/Core/Fileupload.php](https://github.com/Leantime/leantime/blob/master/app/Core/Fileupload.php), [line 179](https://github.com/Leantime/leantime/blob/master/app/Core/Fileupload.php#L179-L185)

### `Leantime.Core.Events.DispatchesEvents.dispatch_filter.{$hook}`

*dispatches a filter with context*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` | `mixed` | 
`$available_params` | `mixed` | 
`static::get_event_context($function)` |  | 

Source: [app/Core/Events/DispatchesEvents.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/DispatchesEvents.php), [line 31](https://github.com/Leantime/leantime/blob/master/app/Core/Events/DispatchesEvents.php#L31-L45)

### `Leantime.Core.Middleware.Updated.redirectToUpdate.allowedRoutes`

*Redirect to update*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$allowedRoutes` |  | 

Source: [app/Core/Middleware/Updated.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Updated.php), [line 50](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Updated.php#L50-L61)

### `Leantime.Core.Middleware.Updated.redirectToUpdate.redirectroute`

*Redirect to update*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$route` |  | 

Source: [app/Core/Middleware/Updated.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Updated.php), [line 50](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Updated.php#L50-L67)

### `Leantime.Core.Middleware.RequestRateLimiter.handle.rateLimitKey`

*Handle the incoming request.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$key` |  | 
`["bootloader" => $this]` |  | 

Source: [app/Core/Middleware/RequestRateLimiter.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/RequestRateLimiter.php), [line 41](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/RequestRateLimiter.php#L41-L92)

### `Leantime.Core.Middleware.RequestRateLimiter.handle.rateLimit`

*Handle the incoming request.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$limit` |  | 
`["bootloader" => $this, "key" => $key]` |  | 

Source: [app/Core/Middleware/RequestRateLimiter.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/RequestRateLimiter.php), [line 41](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/RequestRateLimiter.php#L41-L101)

### `Leantime.Core.Middleware.TrustProxies.__construct.trustedProxies`

*Constructor for the class.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`explode(",", $config->trustedProxies)` |  | 
`['bootloader' => $this]` |  | 

Source: [app/Core/Middleware/TrustProxies.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/TrustProxies.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/TrustProxies.php#L40-L56)

### `Leantime.Core.Middleware.InitialHeaders.handle.cspParts`

*Set up the initial headers*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$cspParts` |  | 

Source: [app/Core/Middleware/InitialHeaders.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/InitialHeaders.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/InitialHeaders.php#L14-L35)

### `Leantime.Core.Middleware.InitialHeaders.handle.headers`

*Set up the initial headers*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['X-Frame-Options' => 'SAMEORIGIN', 'X-XSS-Protection' => '1; mode=block', 'X-Content-Type-Options' => 'nosniff', 'Referrer-Policy', 'same-origin', 'Access-Control-Allow-Origin' => BASE_URL, 'Cache-Control' => 'no-cache, no-store, must-revalidate', 'Pragma' => 'no-cache', 'Content-Security-Policy' => $csp]` |  | 

Source: [app/Core/Middleware/InitialHeaders.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/InitialHeaders.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/InitialHeaders.php#L14-L48)

### `Leantime.Core.Middleware.Auth.__construct.publicActions`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->publicActions` |  | 
`['bootloader' => $this]` |  | 

Source: [app/Core/Middleware/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Auth.php), [line 44](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Auth.php#L44-L44)

### `Leantime.Core.Middleware.Installed.redirectToInstall.allowedRoutes`

*Redirect to install*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$allowedRoutes` |  | 

Source: [app/Core/Middleware/Installed.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Installed.php), [line 86](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Installed.php#L86-L97)

### `Leantime.Core.Middleware.Installed.redirectToInstall.redirectroute`

*Redirect to install*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$route` |  | 

Source: [app/Core/Middleware/Installed.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Installed.php), [line 86](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Installed.php#L86-L103)

### `Leantime.Core.Mailer.__construct.fromEmail`

*__construct - get configurations*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->emailDomain` |  | 
`$this` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 88](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L88-L103)

### `Leantime.Core.Mailer.dispatchMailerHook.{$hook}`

*dispatchMailerHook - dispatches a mailer hook*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` | `mixed` | 
`$additional_params` | `array` | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 233](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L233-L258)

### `Leantime.Core.Mailer.sendMail.sendMailTo`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$to` | `array` | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 271](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L271-L284)

### `Leantime.Core.Mailer.sendMail.sendMailFrom`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$from` | `mixed` | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 271](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L271-L285)

### `Leantime.Core.Mailer.sendMail.bodyTemplate`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`'<table width="100%" style="background:#fefefe; padding:15px; ">
                <tr>
                    <td align="center" valign="top">
                        <table width="600"  style="width:600px; background-color:#ffffff; border:1px solid #ccc; border-radius:5px;">
                            <tr>
                                <td style="padding:20px 10px; text-align:center;">
                                   <img alt="Logo" src="{!! $inlineLogoContent !!}" width="150" style="width:150px;">
                                </td>
                            </tr>
                            <tr>
                                <td style=\'padding:10px; font-family:"Lato","Helvetica Neue",helvetica,sans-serif; color:#666; font-size:16px; line-height:1.7;\'>
                                    {!! $headline !!}
                                    <br/>
                                    {!! $content !!}
                                    <br/><br/>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" style=\'padding:10px; font-family:"Lato","Helvetica Neue",helvetica,sans-serif; color:#666; font-size:14px; line-height:1.7;\'>
                        {!! $unsub_link !!}
                    </td>
                </tr>
            </table>'` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 314](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L314-L339)

### `Leantime.Core.Mailer.sendMail.mailBodyParams`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['inlineLogoContent' => $inlineLogoContent, 'headline' => $this->language->__('email_notifications.hi'), 'content' => $this->nl2br ? nl2br($this->html) : $this->html, 'unsub_link' => sprintf($this->language->__('email_notifications.unsubscribe'), BASE_URL . '/users/editOwn/')]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 340](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L340-L348)

### `Leantime.Core.Mailer.sendMail.bodyContent`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$mailBody` |  | 
`[['companyColor' => $this->companyColor, 'logoUrl' => $inlineLogoContent, 'languageHiText' => $this->language->__('email_notifications.hi'), 'emailContentsHtml' => nl2br($this->html), 'unsubLink' => sprintf($this->language->__('email_notifications.unsubscribe'), BASE_URL . '/users/editOwn/')]]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 271](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L271-L363)

### `Leantime.Core.Mailer.sendMail.altBody`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->text` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 271](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L271-L371)

### `Leantime.Core.Support.Mix.__construct.mix_manifest_directories`

*WARNING: All files in the manifest directories will be exposed to public queries!*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`[]` |  | 

Source: [app/Core/Support/Mix.php](https://github.com/Leantime/leantime/blob/master/app/Core/Support/Mix.php), [line 23](https://github.com/Leantime/leantime/blob/master/app/Core/Support/Mix.php#L23-L28)

### `Leantime.Core.Template.assign.var.{$name}`

*Filter to access template variable names after they have been assigned*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$value` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 393](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L393-L397)

### `Leantime.Core.Template.getTemplatePath.template_path__{$namespace}_{$path}`

*getTemplatePath - Find template in custom and src directories*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"{$namespace}::{$path}"` |  | 
`['namespace' => $namespace, 'path' => $path]` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 428](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L428-L451)

### `Leantime.Core.Template.display.template`

*display - display template from folder template including main layout wrapper*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$template` | `string` | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 476](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L476-L488)

### `Leantime.Core.Template.display.template.{$template}`

*display - display template from folder template including main layout wrapper*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$template` | `string` | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 476](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L476-L489)

### `Leantime.Core.Template.display.content`

*display - display template from folder template including main layout wrapper*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$content` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 476](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L476-L520)

### `Leantime.Core.Template.display.content.{$template}`

*display - display template from folder template including main layout wrapper*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$content` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 476](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L476-L521)

### `Leantime.Core.Template.confirmLayoutName.layout`

*Confirm the layout name based on the provided parameters.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$layout` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 527](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L527-L537)

### `Leantime.Core.Template.confirmLayoutName.layout.{$template}`

*Confirm the layout name based on the provided parameters.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$layout` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 527](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L527-L538)

### `Leantime.Core.Template.displayNotification.message`

*displayNotification - display notification*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$language->__($message_id)` |  | 
`$note` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 647](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L647-L665)

### `Leantime.Core.Template.displayNotification.message_{$message_id}`

*displayNotification - display notification*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$message` |  | 
`$note` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 647](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L647-L670)

### `Leantime.Core.Template.displayInlineNotification.message`

*displayInlineNotification - display notification*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$language->__($message_id)` |  | 
`$note` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 721](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L721-L739)

### `Leantime.Core.Template.displayInlineNotification.message_{$message_id}`

*displayInlineNotification - display notification*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$message` |  | 
`$note` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 721](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L721-L744)

### `Leantime.Core.Template.dispatchTplHook.{$hookName}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` | `mixed` | 
`$available_params` | `array` | 
`$this->hookContext` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 1068](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L1068-L1083)

### `Leantime.Core.Http.HttpKernel.handle.plugins_middleware`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`payload: []` |  | 
`function: 'handle'` |  | 

Source: [app/Core/Http/HttpKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php), [line 64](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php#L64-L68)

### `Leantime.Core.Http.HttpKernel.handle.beforeSendResponse`

*Handle the incoming request.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$response` |  | 

Source: [app/Core/Http/HttpKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php), [line 43](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php#L43-L72)

### `Leantime.Core.Http.HttpKernel.getMiddleware.http_middleware`

*Get the application middleware*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`[\Leantime\Core\Middleware\TrustProxies::class, \Leantime\Core\Middleware\InitialHeaders::class, \Leantime\Core\Middleware\StartSession::class, \Leantime\Core\Middleware\Installed::class, \Leantime\Core\Middleware\Updated::class, \Leantime\Core\Middleware\RequestRateLimiter::class, $this->app->make(\Leantime\Core\Http\IncomingRequest::class) instanceof \Leantime\Core\Http\ApiRequest ? \Leantime\Core\Middleware\ApiAuth::class : \Leantime\Core\Middleware\Auth::class, \Leantime\Core\Middleware\Localization::class, \Leantime\Core\Middleware\CurrentProject::class]` |  | 

Source: [app/Core/Http/HttpKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php), [line 124](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php#L124-L142)

### `Leantime.Core.Theme.getAvailableColorSchemes.colorschemes`

*Retrieves the available color schemes.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$parsedColorSchemes` |  | 

Source: [app/Core/Theme.php](https://github.com/Leantime/leantime/blob/master/app/Core/Theme.php), [line 150](https://github.com/Leantime/leantime/blob/master/app/Core/Theme.php#L150-L177)

### `Leantime.Core.Theme.getAvailableFonts.fonts`

*theme - Engine for handling themes*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->fonts` |  | 

Source: [app/Core/Theme.php](https://github.com/Leantime/leantime/blob/master/app/Core/Theme.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Core/Theme.php#L17-L184)

### `Leantime.Core.Db.Repository.prepare.sql`

*prepares sql for entry; wrapper for PDO\prepare()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$sql` | `string` | 
`$this->getArgs(['prepareArgs' => $args])` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 78](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L78-L91)

### `Leantime.Core.Db.Repository.bindValue.binding.str_replace()`

*binds values for search/replace of sql; wrapper for PDO\bindValue()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$replace` | `string` | - value to replace with
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 96](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L96-L110)

### `Leantime.Core.Db.Repository.getArgs.args`

*Gets the arguments to pass along to events/filter*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$args` |  | 
`[]` |  | 
`5` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 136](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L136-L151)

### `Leantime.Core.Db.Repository.__call.stmn`

*executes the sql call - uses \PDO*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->stmn` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 156](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L156-L175)

### `Leantime.Core.Db.Repository.__call.method`

*executes the sql call - uses \PDO*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$method` | `string` | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 156](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L156-L176)

### `Leantime.Core.Db.Repository.__call.return`

*executes the sql call - uses \PDO*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$values` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 156](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L156-L188)

### `Leantime.Core.Bootstrap.Bootloader.boot.initialized`

*Execute the Application lifecycle.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->app` |  | 
`['bootloader' => $this]` |  | 

Source: [app/Core/Bootstrap/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootstrap/Bootloader.php), [line 104](https://github.com/Leantime/leantime/blob/master/app/Core/Bootstrap/Bootloader.php#L104-L118)

### `Leantime.Core.Language.readIni.language_resources`

*Read and load the language resources from the ini files.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`\Illuminate\Support\Facades\Cache::store('installation')->get('cache.language_resources_' . $this->language)` |  | 
`['language' => $this->language]` |  | 

Source: [app/Core/Language.php](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php), [line 183](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php#L183-L200)

### `Leantime.Core.Language.readIni.language_files`

*Read and load the language resources from the ini files.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`[
    // Complement english with english customization
    static::CUSTOM_LANG_FOLDER . 'en-US.ini' => false,
    // Overwrite english language by non-english language
    static::DEFAULT_LANG_FOLDER . $this->language . '.ini' => true,
    // Overwrite with non-engish customizations
    static::CUSTOM_LANG_FOLDER . $this->language . '.ini' => true,
]` |  | 
`['language' => $this->language]` |  | 

Source: [app/Core/Language.php](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php), [line 183](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php#L183-L222)

### `Leantime.Core.Language.readIni.language_resources`

*Read and load the language resources from the ini files.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$mainLanguageArray` |  | 
`['language' => $this->language]` |  | 

Source: [app/Core/Language.php](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php), [line 183](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php#L183-L232)

### `Leantime.Core.Language.getLanguageList.languages`

*Get the list of languages.*

Retrieves the list of languages from a cache or from INI files if the cache is not available.
The list of languages is stored in an associative array where the keys represent the language codes
and the values represent the language names.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$langlist` |  | 

Source: [app/Core/Language.php](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php), [line 271](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php#L271-L303)

### `Leantime.Core.Console.ConsoleKernel.commands.additional_commands`

*Load and register the commands for the application.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`[\Illuminate\Console\Scheduling\ScheduleRunCommand::class, \Illuminate\Console\Scheduling\ScheduleFinishCommand::class, \Illuminate\Console\Scheduling\ScheduleListCommand::class, \Illuminate\Console\Scheduling\ScheduleTestCommand::class, \Illuminate\Console\Scheduling\ScheduleWorkCommand::class, \Illuminate\Console\Scheduling\ScheduleClearCacheCommand::class]` |  | 

Source: [app/Core/Console/ConsoleKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Console/ConsoleKernel.php), [line 113](https://github.com/Leantime/leantime/blob/master/app/Core/Console/ConsoleKernel.php#L113-L176)

### `Leantime.Views.Composers.App.with.appAnnouncement`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$announcement` |  | 

Source: [app/Views/Composers/App.php](https://github.com/Leantime/leantime/blob/master/app/Views/Composers/App.php), [line 32](https://github.com/Leantime/leantime/blob/master/app/Views/Composers/App.php#L32-L47)



