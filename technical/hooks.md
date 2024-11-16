# Hooks

- [Events](#events)
- [Filters](#filters)

## Events

### `Leantime.Domain.Tickets.Repositories.Tickets.patchTicket.ticketStatusUpdate`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['ticketId' => $id, 'status' => $value, 'action' => 'ticketStatusUpdate']` |  | 

Source: [app/Domain/Tickets/Repositories/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Repositories/Tickets.php), [line 1504](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Repositories/Tickets.php#L1504-L1504)

### `Leantime.Domain.Tickets.Repositories.Tickets.updateTicketStatus.ticketStatusUpdate`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['ticketId' => $ticketId, 'status' => $status, 'action' => 'ticketStatusUpdate', 'handler' => $handler]` |  | 

Source: [app/Domain/Tickets/Repositories/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Repositories/Tickets.php), [line 1613](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Repositories/Tickets.php#L1613-L1613)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 43](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L43-L43)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 48](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L48-L48)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.filters.afterRighthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 58](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L58-L58)

### `Leantime.Domain.Tickets.Templates.showAll.tpl.filters.beforeRighthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 62](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L62-L62)

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

Source: [app/Domain/Tickets/Templates/showTicketModal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showTicketModal.tpl.php), [line 85](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showTicketModal.tpl.php#L85-L85)

### `Leantime.Domain.Tickets.Templates.showTicketModal.tpl.ticketTabsContent`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['ticket' => $ticket]` |  | 

Source: [app/Domain/Tickets/Templates/showTicketModal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showTicketModal.tpl.php), [line 104](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showTicketModal.tpl.php#L104-L104)

### `Leantime.Domain.Tickets.Templates.submodules.ticketDetails.sub.beforeSubtasks`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['ticketId' => $ticket->id]` |  | 

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


Source: [app/Domain/Tickets/Templates/showKanban.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showKanban.tpl.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showKanban.tpl.php#L34-L34)

### `Leantime.Domain.Tickets.Templates.showKanban.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/showKanban.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showKanban.tpl.php), [line 39](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showKanban.tpl.php#L39-L39)

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

### `Leantime.Domain.Tickets.Services.Tickets.saveStatusLabels.statusLabels_updated`

*saveStatusLabels - Saves the description/label of a status*


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 121](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L121-L148)

### `Leantime.Domain.Tickets.Services.Tickets.quickAddTicket.ticket_created`


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1145](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1145-L1184)

### `Leantime.Domain.Tickets.Services.Tickets.quickAddMilestone.milestone_created`


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1212](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1212-L1249)

### `Leantime.Domain.Tickets.Services.Tickets.addTicket.ticket_created`

*Adds a ticket to the system.*


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1255](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1255-L1330)

### `Leantime.Domain.Tickets.Services.Tickets.updateTicket.ticket_updated`

*Updates a ticket with the given values.*


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1361](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1361-L1452)

### `Leantime.Domain.Tickets.Services.Tickets.patch.ticket_updated`


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1460](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1460-L1474)

### `Leantime.Domain.Tickets.Services.Tickets.moveTicket.ticket_updated`

*moveTicket - Moves a ticket from one project to another. Milestone children will be moved as well*


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1501](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1501-L1523)

### `Leantime.Domain.Tickets.Services.Tickets.quickUpdateMilestone.milestone_updated`


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1532](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1532-L1571)

### `Leantime.Domain.Tickets.Services.Tickets.upsertSubtask.ticket_created`


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1577](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1577-L1616)

### `Leantime.Domain.Tickets.Services.Tickets.upsertSubtask.ticket_updated`


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1577](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1577-L1625)

### `Leantime.Domain.Tickets.Services.Tickets.updateTicketSorting.ticket_updated`


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1631](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1631-L1646)

### `Leantime.Domain.Tickets.Services.Tickets.updateTicketStatusAndSorting.ticket_updated`


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1651](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1651-L1706)

### `Leantime.Domain.Tickets.Services.Tickets.delete.ticket_deleted`


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1712](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1712-L1730)

### `Leantime.Domain.Tickets.Services.Tickets.deleteMilestone.milestone_deleted`


Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 1757](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L1757-L1774)

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
`['values' => $values, 'oldProject' => $oldProject]` |  | 

Source: [app/Domain/Projects/Repositories/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Repositories/Projects.php), [line 658](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Repositories/Projects.php#L658-L715)

### `Leantime.Domain.Projects.Repositories.Projects.addProjectRelation.userAddedToProject`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['userId' => $userId, 'projectId' => $projectId, 'projectRole' => $projectRole, 'oldProject' => $oldProject]` |  | 

Source: [app/Domain/Projects/Repositories/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Repositories/Projects.php), [line 1043](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Repositories/Projects.php#L1043-L1043)

### `Leantime.Domain.Projects.Templates.showProject.tpl.projectTabsList`


Source: [app/Domain/Projects/Templates/showProject.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/showProject.tpl.php), [line 39](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/showProject.tpl.php#L39-L39)

### `Leantime.Domain.Projects.Templates.showProject.tpl.projectTabsContent`


Source: [app/Domain/Projects/Templates/showProject.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/showProject.tpl.php), [line 387](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/showProject.tpl.php#L387-L387)

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

*This event is fired to notify project users of important updates.*

An event "notifyProjectUsers" is dispatched with an array of variables required for the notification.
These variables include the type of update, module affected, entity ID, message and subject of notification,
users to be notified, and url if present. This event belongs to the "domain.services.projects" context.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['type' => 'projectUpdate', 'module' => $notification->module, 'moduleId' => $entityId, 'message' => $notification->message, 'subject' => $notification->subject, 'users' => $this->getAllUserInfoToNotify($notification->projectId), 'url' => $notification->url['url']]` |  | 
`'domain.services.projects'` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 305](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L305-L323)

### `Leantime.Domain.Projects.Services.Projects.changeCurrentSessionProject.projects.setCurrentProject`

*Change the current session project to the specified projectId.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$project` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 676](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L676-L773)

### `Leantime.Domain.Calendar.Templates.export.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/export.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php#L18-L18)

### `Leantime.Domain.Calendar.Templates.export.tpl.beforeSubmitButton`


Source: [app/Domain/Calendar/Templates/export.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php), [line 37](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php#L37-L37)

### `Leantime.Domain.Calendar.Templates.export.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/export.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php), [line 49](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php#L49-L49)

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


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 326](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L326-L326)

### `Leantime.Domain.Auth.Controllers.UserInvite.post.onboarding_themechoice_{$postTheme}`

*post - handle post requests*


Source: [app/Domain/Auth/Controllers/UserInvite.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php), [line 189](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php#L189-L252)

### `Leantime.Domain.Auth.Controllers.UserInvite.post.onboarding_themechoice_{$themeFont}`

*post - handle post requests*


Source: [app/Domain/Auth/Controllers/UserInvite.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php), [line 189](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php#L189-L253)

### `Leantime.Domain.Auth.Controllers.UserInvite.post.onboarding_colorchoice_{$postColorMode}`

*post - handle post requests*


Source: [app/Domain/Auth/Controllers/UserInvite.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php), [line 189](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php#L189-L266)

### `Leantime.Domain.Auth.Controllers.UserInvite.post.onboarding_colorchoice_{$postColorScheme}`

*post - handle post requests*


Source: [app/Domain/Auth/Controllers/UserInvite.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php), [line 189](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php#L189-L267)

### `Leantime.Domain.Auth.Controllers.UserInvite.post.onboarding_schedule_start_`

*post - handle post requests*


Source: [app/Domain/Auth/Controllers/UserInvite.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php), [line 189](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php#L189-L302)

### `Leantime.Domain.Auth.Controllers.UserInvite.post.onboarding_schedule_lunch_`

*post - handle post requests*


Source: [app/Domain/Auth/Controllers/UserInvite.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php), [line 189](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php#L189-L303)

### `Leantime.Domain.Auth.Controllers.UserInvite.post.onboarding_schedule_end_`

*post - handle post requests*


Source: [app/Domain/Auth/Controllers/UserInvite.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php), [line 189](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php#L189-L304)

### `Leantime.Domain.Auth.Controllers.UserInvite.post.onboarding_finished`

*post - handle post requests*


Source: [app/Domain/Auth/Controllers/UserInvite.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php), [line 189](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php#L189-L319)

### `Leantime.Domain.Auth.Controllers.UserInvite.post.userSignUpSuccess`

*post - handle post requests*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['user' => $userInvite]` |  | 

Source: [app/Domain/Auth/Controllers/UserInvite.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php), [line 189](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php#L189-L330)

### `Leantime.Domain.Auth.Controllers.Login.get.beforeAuth`

*get - handle get requests*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$params` |  | 

Source: [app/Domain/Auth/Controllers/Login.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php#L29-L39)

### `Leantime.Domain.Auth.Controllers.Login.post.beforeAuthServiceCall`

*post - handle post requests*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['post' => $_POST]` |  | 

Source: [app/Domain/Auth/Controllers/Login.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php), [line 68](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php#L68-L88)

### `Leantime.Domain.Auth.Controllers.Login.post.successfulLogin`

*post - handle post requests*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['post' => $_POST]` |  | 

Source: [app/Domain/Auth/Controllers/Login.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php), [line 68](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php#L68-L93)

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

### `Leantime.Domain.Auth.Templates.userInvite.blade.afterPageHeaderClose`


Source: [app/Domain/Auth/Templates/userInvite.blade.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.blade.php), [line 9](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.blade.php#L9-L9)

### `Leantime.Domain.Auth.Templates.userInvite.blade.afterRegcontentOpen`


Source: [app/Domain/Auth/Templates/userInvite.blade.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.blade.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.blade.php#L11-L11)

### `Leantime.Domain.Auth.Templates.userInvite.blade.afterFormOpen`


Source: [app/Domain/Auth/Templates/userInvite.blade.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.blade.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.blade.php#L14-L14)

### `Leantime.Domain.Auth.Templates.userInvite.blade.beforeSubmitButton`


Source: [app/Domain/Auth/Templates/userInvite.blade.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.blade.php), [line 37](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.blade.php#L37-L37)

### `Leantime.Domain.Auth.Templates.userInvite.blade.beforeFormClose`


Source: [app/Domain/Auth/Templates/userInvite.blade.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.blade.php), [line 43](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.blade.php#L43-L43)

### `Leantime.Domain.Auth.Templates.userInvite.blade.beforeRegcontentClose`


Source: [app/Domain/Auth/Templates/userInvite.blade.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.blade.php), [line 45](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.blade.php#L45-L45)

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

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 163](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L163-L172)

### `Leantime.Domain.Auth.Services.Auth.login.afterLoginCheck`

*login - Validate POST-data with DB*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password, 'authService' => app()->make(self::class)]` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 163](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L163-L263)

### `Leantime.Domain.Auth.Services.Auth.login.afterLoginCheck`

*login - Validate POST-data with DB*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password, 'authService' => app()->make(self::class)]` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 163](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L163-L268)

### `Leantime.Domain.Auth.Services.Auth.logout.afterSessionDestroy`

*logout - destroy sessions and cookies*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['authService' => app()->make(self::class)]` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 346](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L346-L373)

### `Leantime.Domain.Reports.Services.Reports.getAnonymousTelemetry.beforeTelemetrySend`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['companyId' => $companyId]` |  | 

Source: [app/Domain/Reports/Services/Reports.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Reports/Services/Reports.php), [line 152](https://github.com/Leantime/leantime/blob/master/app/Domain/Reports/Services/Reports.php#L152-L178)

### `Leantime.Domain.Users.Services.Users.editUser.editUser`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['id' => $id, 'values' => $values]` |  | 

Source: [app/Domain/Users/Services/Users.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php), [line 63](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php#L63-L70)

### `Leantime.Domain.Users.Services.Users.editOwn.editUser`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['id' => $id, 'values' => $values]` |  | 

Source: [app/Domain/Users/Services/Users.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php), [line 347](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php#L347-L358)

### `Leantime.Domain.Api.Controllers.NewApiKey.init.api_key_init`

*init - initialize private variables*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/Domain/Api/Controllers/NewApiKey.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Api/Controllers/NewApiKey.php), [line 25](https://github.com/Leantime/leantime/blob/master/app/Domain/Api/Controllers/NewApiKey.php#L25-L40)

### `Leantime.Domain.Api.Controllers.ApiKey.init.api_key_init`

*init - initialize private variables*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/Domain/Api/Controllers/ApiKey.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Api/Controllers/ApiKey.php), [line 25](https://github.com/Leantime/leantime/blob/master/app/Domain/Api/Controllers/ApiKey.php#L25-L35)

### `Leantime.Core.Events.DispatchesEvents.dispatch_event.{$hook}`

*dispatches an event with context*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` |  | 
`static::get_event_context($function)` |  | 

Source: [app/Core/Events/DispatchesEvents.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/DispatchesEvents.php), [line 12](https://github.com/Leantime/leantime/blob/master/app/Core/Events/DispatchesEvents.php#L12-L20)

### `Leantime.Core.Events.DispatchesEvents.dispatchEvent.{$hook}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` |  | 
`static::get_event_context($function)` |  | 

Source: [app/Core/Events/DispatchesEvents.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/DispatchesEvents.php), [line 27](https://github.com/Leantime/leantime/blob/master/app/Core/Events/DispatchesEvents.php#L27-L27)

### `Leantime.Core.Events.EventDispatcher.dispatch.{$eventName->message}`

*EventDispatcher class - Handles all events and filters*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$context` |  | 

Source: [app/Core/Events/EventDispatcher.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php#L18-L84)

### `Leantime.Core.Events.EventDispatcher.dispatch.get_class()`

*EventDispatcher class - Handles all events and filters*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$eventName` |  | 
`$context` |  | 

Source: [app/Core/Events/EventDispatcher.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php#L18-L90)

### `Leantime.Core.Events.EventDispatcher.dispatch.{$eventName}`

*EventDispatcher class - Handles all events and filters*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$context` |  | 

Source: [app/Core/Events/EventDispatcher.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php#L18-L96)

### `Leantime.Core.Events.EventDispatcher.dispatch.{$eventName}`

*EventDispatcher class - Handles all events and filters*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`[$eventName]` |  | 
`$context` |  | 

Source: [app/Core/Events/EventDispatcher.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php#L18-L104)

### `Leantime.Core.Events.EventDispatcher.dispatch.{$eventName}`

*EventDispatcher class - Handles all events and filters*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$context` |  | 

Source: [app/Core/Events/EventDispatcher.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/Core/Events/EventDispatcher.php#L18-L109)

### `Leantime.Core.Middleware.StartSession.handle.session_initialized`

*Handle an incoming request.*


Source: [app/Core/Middleware/StartSession.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/StartSession.php), [line 47](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/StartSession.php#L47-L61)

### `Leantime.Core.Middleware.LoadPlugins.handle.pluginsStart`

*Set up the initial headers*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['request' => $request]` |  | 

Source: [app/Core/Middleware/LoadPlugins.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/LoadPlugins.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/LoadPlugins.php#L17-L27)

### `Leantime.Core.Middleware.LoadPlugins.handle.pluginsEvents`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['request' => $request]` |  | 
`'leantime.core.middleware.loadplugins.handle'` |  | 

Source: [app/Core/Middleware/LoadPlugins.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/LoadPlugins.php), [line 37](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/LoadPlugins.php#L37-L37)

### `Leantime.Core.Middleware.LoadPlugins.handle.pluginsTermintate`

*Set up the initial headers*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['request' => $request, 'response' => $response]` |  | 

Source: [app/Core/Middleware/LoadPlugins.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/LoadPlugins.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/LoadPlugins.php#L17-L42)

### `Leantime.Core.Middleware.Auth.handle.logged_in`

*Handle the request*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['application' => $this]` |  | 

Source: [app/Core/Middleware/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Auth.php), [line 68](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Auth.php#L68-L89)

### `Leantime.Core.Middleware.Installed.handle.after_install`

*Check if Leantime is installed*


Source: [app/Core/Middleware/Installed.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Installed.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Installed.php#L16-L52)

### `Leantime.Core.Middleware.ApiAuth.handle.before_api_request`

*Handle an incoming request*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['application' => app()]` |  | 

Source: [app/Core/Middleware/ApiAuth.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/ApiAuth.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/ApiAuth.php#L19-L30)

### `Leantime.Core.Bootloader.boot.end`

*Execute the Application lifecycle.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['bootloader' => $this]` |  | 

Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 47](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L47-L70)

### `Leantime.Core.Mailer.dispatchMailerHook.{$hook}`

*dispatchMailerHook - dispatches a mailer hook*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 171](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L171-L193)

### `Leantime.Core.Mailer.sendMail.sendMailTo`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$to` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 204](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L204-L213)

### `Leantime.Core.Mailer.sendMail.sendMailFrom`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$from` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 204](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L204-L214)

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

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 243](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L243-L268)

### `Leantime.Core.Mailer.sendMail.mailBodyParams`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['inlineLogoContent' => $inlineLogoContent, 'headline' => $this->language->__('email_notifications.hi'), 'content' => $this->nl2br ? nl2br($this->html) : $this->html, 'unsub_link' => sprintf($this->language->__('email_notifications.unsubscribe'), BASE_URL . '/users/editOwn/')]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 269](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L269-L277)

### `Leantime.Core.Mailer.sendMail.bodyContent`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$mailBody` |  | 
`[['companyColor' => $this->companyColor, 'logoUrl' => $inlineLogoContent, 'languageHiText' => $this->language->__('email_notifications.hi'), 'emailContentsHtml' => nl2br($this->html), 'unsubLink' => sprintf($this->language->__('email_notifications.unsubscribe'), BASE_URL . '/users/editOwn/')]]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 204](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L204-L292)

### `Leantime.Core.Mailer.sendMail.altBody`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->text` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 204](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L204-L300)

### `Leantime.Core.Http.HttpKernel.sendRequestThroughRouter.request_started`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['request' => $request]` |  | 

Source: [app/Core/Http/HttpKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php), [line 104](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php#L104-L104)

### `Leantime.Core.Http.HttpKernel.handle.`


Source: [app/Core/Http/HttpKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php), [line 143](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php#L143-L143)

### `Leantime.Core.Http.HttpKernel.terminate.request_terminated`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`[$request, $response]` |  | 

Source: [app/Core/Http/HttpKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php), [line 153](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php#L153-L153)

### `Leantime.Core.UI.Template.displayNotification.notification_displayed`

*displayNotification - display notification*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$note` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 497](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L497-L529)

### `Leantime.Core.UI.Template.displayInlineNotification.notification_displayed`

*displayInlineNotification - display notification*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$note` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 552](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L552-L591)

### `Leantime.Core.UI.Template.dispatchTplHook.{$hookName}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$this->hookContext` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 884](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L884-L897)

### `Leantime.Core.Providers.Environment.boot.config_initialized`


Source: [app/Core/Providers/Environment.php](https://github.com/Leantime/leantime/blob/master/app/Core/Providers/Environment.php), [line 26](https://github.com/Leantime/leantime/blob/master/app/Core/Providers/Environment.php#L26-L26)

### `Leantime.Core.Db.Repository.__call.beforeExecute`

*executes the sql call - uses \PDO*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 128](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L128-L141)

### `Leantime.Core.Db.Repository.__call.afterExecute`

*executes the sql call - uses \PDO*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 128](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L128-L154)

### `Leantime.Core.Controller.Frontcontroller.dispatch.execute_action_start`

*run - executes the action depending on Request or firstAction*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['action' => $controllerName, 'module' => $moduleName]` |  | 

Source: [app/Core/Controller/Frontcontroller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Frontcontroller.php), [line 57](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Frontcontroller.php#L57-L71)

### `Leantime.Core.Controller.Frontcontroller.dispatch.execute_action_end`

*run - executes the action depending on Request or firstAction*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['action' => $controllerName, 'module' => $moduleName]` |  | 

Source: [app/Core/Controller/Frontcontroller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Frontcontroller.php), [line 57](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Frontcontroller.php#L57-L80)

### `Leantime.Core.Controller.Frontcontroller.dispatch_request.{$request}`

*Frontcontroller class*


Source: [app/Core/Controller/Frontcontroller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Frontcontroller.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Frontcontroller.php#L17-L91)

### `Leantime.Core.Controller.HtmxController.__construct.begin`

*constructor - initialize private variables*


Source: [app/Core/Controller/HtmxController.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/HtmxController.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/HtmxController.php#L29-L48)

### `Leantime.Core.Controller.HtmxController.__construct.end`

*constructor - initialize private variables*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/Core/Controller/HtmxController.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/HtmxController.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/HtmxController.php#L29-L63)

### `Leantime.Core.Controller.Controller.__construct.begin`

*constructor - initialize private variables*


Source: [app/Core/Controller/Controller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Controller.php), [line 22](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Controller.php#L22-L43)

### `Leantime.Core.Controller.Controller.__construct.end`

*constructor - initialize private variables*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/Core/Controller/Controller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Controller.php), [line 22](https://github.com/Leantime/leantime/blob/master/app/Core/Controller/Controller.php#L22-L50)

### `Leantime.Core.Bootstrap.LoadConfig.bootstrap.config_initialized`

*Bootstrap the application.*

This method initializes the application by loading the configuration files and
setting up the environment.


Source: [app/Core/Bootstrap/LoadConfig.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootstrap/LoadConfig.php), [line 24](https://github.com/Leantime/leantime/blob/master/app/Core/Bootstrap/LoadConfig.php#L24-L83)

### `Leantime.Core.Console.ConsoleKernel.schedule.cron`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['schedule' => $schedule]` |  | 
`'schedule'` |  | 

Source: [app/Core/Console/ConsoleKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Console/ConsoleKernel.php), [line 152](https://github.com/Leantime/leantime/blob/master/app/Core/Console/ConsoleKernel.php#L152-L152)

### `Leantime.Core.Console.Application.__construct.`


Source: [app/Core/Console/Application.php](https://github.com/Leantime/leantime/blob/master/app/Core/Console/Application.php), [line 23](https://github.com/Leantime/leantime/blob/master/app/Core/Console/Application.php#L23-L23)

### `Leantime.Core.Application.boot.beforeBootingServiceProviders`

*Boot the application.*


Source: [app/Core/Application.php](https://github.com/Leantime/leantime/blob/master/app/Core/Application.php), [line 131](https://github.com/Leantime/leantime/blob/master/app/Core/Application.php#L131-L144)

### `Leantime.Core.Application.boot.afterBootingServiceProviders`

*Boot the application.*


Source: [app/Core/Application.php](https://github.com/Leantime/leantime/blob/master/app/Core/Application.php), [line 131](https://github.com/Leantime/leantime/blob/master/app/Core/Application.php#L131-L148)

### `Leantime.Plugins.Implementationintentions.Services.Implementationintentions.create.created_implementationintention`


Source: [app/Plugins/Implementationintentions/Services/Implementationintentions.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Implementationintentions/Services/Implementationintentions.php), [line 109](https://github.com/Leantime/leantime/blob/master/app/Plugins/Implementationintentions/Services/Implementationintentions.php#L109-L109)

### `Leantime.Plugins.Implementationintentions.Services.Implementationintentions.update.updated_implementationintention`


Source: [app/Plugins/Implementationintentions/Services/Implementationintentions.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Implementationintentions/Services/Implementationintentions.php), [line 117](https://github.com/Leantime/leantime/blob/master/app/Plugins/Implementationintentions/Services/Implementationintentions.php#L117-L117)

### `Leantime.Plugins.Implementationintentions.Services.Implementationintentions.patch.updated_implementationintention`


Source: [app/Plugins/Implementationintentions/Services/Implementationintentions.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Implementationintentions/Services/Implementationintentions.php), [line 124](https://github.com/Leantime/leantime/blob/master/app/Plugins/Implementationintentions/Services/Implementationintentions.php#L124-L124)

### `Leantime.Plugins.Llamadorian.Controllers.CurrentStatusUpdate.addStatusUpdate.aistatusreport_created`


Source: [app/Plugins/Llamadorian/Controllers/CurrentStatusUpdate.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Controllers/CurrentStatusUpdate.php), [line 163](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Controllers/CurrentStatusUpdate.php#L163-L163)

### `Leantime.Plugins.Llamadorian.Controllers.CurrentStatusUpdate.patchStatusUpdate.aistatusreport_updated`


Source: [app/Plugins/Llamadorian/Controllers/CurrentStatusUpdate.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Controllers/CurrentStatusUpdate.php), [line 184](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Controllers/CurrentStatusUpdate.php#L184-L184)

### `Leantime.Plugins.Llamadorian.Controllers.ShowStatusUpdate.get.aistatusupdate_viewed`


Source: [app/Plugins/Llamadorian/Controllers/ShowStatusUpdate.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Controllers/ShowStatusUpdate.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Controllers/ShowStatusUpdate.php#L21-L35)

### `Leantime.Plugins.Llamadorian.Controllers.EditorTools.post.aieditorTools_used_{$prompt}`


Source: [app/Plugins/Llamadorian/Controllers/EditorTools.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Controllers/EditorTools.php), [line 30](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Controllers/EditorTools.php#L30-L52)

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

### `Leantime.Plugins.Llamadorian.Services.UserSentiment.updateTaskReaction.sentiment_updated`


Source: [app/Plugins/Llamadorian/Services/UserSentiment.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/UserSentiment.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/UserSentiment.php#L40-L40)

### `Leantime.Plugins.Llamadorian.Services.StoryTime.getStory.ai_story_viewed`


Source: [app/Plugins/Llamadorian/Services/StoryTime.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/StoryTime.php), [line 86](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/StoryTime.php#L86-L86)

### `Leantime.Plugins.Llamadorian.Services.StoryTime.generateNewProjectIntroduction.ai_story_generated`


Source: [app/Plugins/Llamadorian/Services/StoryTime.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/StoryTime.php), [line 110](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/StoryTime.php#L110-L110)

### `Leantime.Plugins.Llamadorian.Services.ProjectGenerator.createProjectStructure.ai_projectstructure_generated`


Source: [app/Plugins/Llamadorian/Services/ProjectGenerator.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/ProjectGenerator.php), [line 82](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/ProjectGenerator.php#L82-L82)

### `Leantime.Plugins.Llamadorian.Services.ProjectGenerator.createGoals.ai_goals_generated`


Source: [app/Plugins/Llamadorian/Services/ProjectGenerator.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/ProjectGenerator.php), [line 100](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/ProjectGenerator.php#L100-L100)

### `Leantime.Plugins.Llamadorian.Services.TaskManager.generatePrioritizedList.ai_taskspriority_generated`

*Generates a prioritized list of tasks for the current user.*


Source: [app/Plugins/Llamadorian/Services/TaskManager.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/TaskManager.php), [line 49](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/TaskManager.php#L49-L64)

### `Leantime.Plugins.Llamadorian.Services.TaskManager.getTaskBreakdown.ai_taskbreakdown_generated`

*Generates a prioritized list of tasks for the current user.*


Source: [app/Plugins/Llamadorian/Services/TaskManager.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/TaskManager.php), [line 175](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/TaskManager.php#L175-L206)

### `Leantime.Plugins.Llamadorian.Services.TaskManager.identifyTop3Priorities.ai_top3tasks_generated`

*Identifies the top 3 priorities for the user from the given tasks.*


Source: [app/Plugins/Llamadorian/Services/TaskManager.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/TaskManager.php), [line 223](https://github.com/Leantime/leantime/blob/master/app/Plugins/Llamadorian/Services/TaskManager.php#L223-L247)

### `Leantime.Plugins.Sentry.vendor.sentry.sentry-laravel.src.Sentry.Laravel.Tracing.Routing.TracingControllerDispatcherTracing.dispatch.{$route}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$controller` |  | 
`$method` |  | 

Source: [app/Plugins/Sentry/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Tracing/Routing/TracingControllerDispatcherTracing.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Tracing/Routing/TracingControllerDispatcherTracing.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Tracing/Routing/TracingControllerDispatcherTracing.php#L21-L21)

### `Leantime.Plugins.Sentry.vendor.sentry.sentry-laravel.src.Sentry.Laravel.Tracing.Routing.TracingCallableDispatcherTracing.dispatch.{$route}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$callable` |  | 

Source: [app/Plugins/Sentry/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Tracing/Routing/TracingCallableDispatcherTracing.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Tracing/Routing/TracingCallableDispatcherTracing.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/sentry/sentry-laravel/src/Sentry/Laravel/Tracing/Routing/TracingCallableDispatcherTracing.php#L21-L21)

### `Leantime.Plugins.Sentry.vendor.illuminate.support.Testing.Fakes.PendingChainFake.dispatch.{$firstJob}`

*Dispatch the job with the given arguments.*


Source: [app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/PendingChainFake.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/PendingChainFake.php), [line 33](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/PendingChainFake.php#L33-L54)

### `Leantime.Plugins.Sentry.vendor.illuminate.support.Testing.Fakes.BusFake.dispatch.{$command}`

*Dispatch a command to its appropriate handler.*


Source: [app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/BusFake.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/BusFake.php), [line 602](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/BusFake.php#L602-L613)

### `Leantime.Plugins.Sentry.vendor.illuminate.support.Testing.Fakes.BusFake.dispatchAfterResponse.{$command}`

*Dispatch a command to its appropriate handler.*


Source: [app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/BusFake.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/BusFake.php), [line 666](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/BusFake.php#L666-L677)

### `Leantime.Plugins.Sentry.vendor.illuminate.support.Testing.Fakes.EventFake.dispatch.{$event}`

*Fire an event and call the listeners.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` | `mixed` | 
`$halt` | `bool` | 

Source: [app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/EventFake.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/EventFake.php), [line 289](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/EventFake.php#L289-L304)

### `Leantime.Plugins.Sentry.vendor.illuminate.support.Testing.Fakes.EventFake.until.{$event}`

*Dispatch an event and call the listeners.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` | `mixed` | 
`true` |  | 

Source: [app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/EventFake.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/EventFake.php), [line 395](https://github.com/Leantime/leantime/blob/master/app/Plugins/Sentry/vendor/illuminate/support/Testing/Fakes/EventFake.php#L395-L404)

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

### `Leantime.Plugins.ProjectWizard.Hxcontrollers.TaskList.add.projectwizard_task_added`


Source: [app/Plugins/ProjectWizard/Hxcontrollers/TaskList.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/TaskList.php), [line 50](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/TaskList.php#L50-L75)

### `Leantime.Plugins.ProjectWizard.Hxcontrollers.TaskList.update.projectwizard_task_removed`

*Class MyToDos*

This class extends the HtmxController class and represents a controller for managing to-do items.


Source: [app/Plugins/ProjectWizard/Hxcontrollers/TaskList.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/TaskList.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/TaskList.php#L8-L96)

### `Leantime.Plugins.ProjectWizard.Hxcontrollers.TaskList.update.projectwizard_task_updated`

*Class MyToDos*

This class extends the HtmxController class and represents a controller for managing to-do items.


Source: [app/Plugins/ProjectWizard/Hxcontrollers/TaskList.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/TaskList.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/TaskList.php#L8-L100)

### `Leantime.Plugins.ProjectWizard.Hxcontrollers.Generator.project.projectwizard_project_generated`

*Class MyToDos*

This class extends the HtmxController class and represents a controller for managing to-do items.


Source: [app/Plugins/ProjectWizard/Hxcontrollers/Generator.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/Generator.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/Generator.php#L13-L61)

### `Leantime.Plugins.ProjectWizard.Hxcontrollers.Generator.update.projectwizard_project_updated`

*Class MyToDos*

This class extends the HtmxController class and represents a controller for managing to-do items.


Source: [app/Plugins/ProjectWizard/Hxcontrollers/Generator.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/Generator.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/Generator.php#L13-L87)

### `Leantime.Plugins.ProjectWizard.Hxcontrollers.Generator.create.projectwizard_project_created`

*Class MyToDos*

This class extends the HtmxController class and represents a controller for managing to-do items.


Source: [app/Plugins/ProjectWizard/Hxcontrollers/Generator.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/Generator.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/Generator.php#L13-L179)

### `Leantime.Plugins.ProjectWizard.Hxcontrollers.Goals.getList.projectwizard_aigoals_created`

*Retrieves the todo widget assignments.*


Source: [app/Plugins/ProjectWizard/Hxcontrollers/Goals.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/Goals.php), [line 42](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/Goals.php#L42-L64)

### `Leantime.Plugins.ProjectWizard.Hxcontrollers.Goals.add.projectwizard_goal_added`


Source: [app/Plugins/ProjectWizard/Hxcontrollers/Goals.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/Goals.php), [line 84](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/Goals.php#L84-L99)

### `Leantime.Plugins.ProjectWizard.Hxcontrollers.Goals.update.projectwizard_goal_updated`

*Class MyToDos*

This class extends the HtmxController class and represents a controller for managing to-do items.


Source: [app/Plugins/ProjectWizard/Hxcontrollers/Goals.php](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/Goals.php), [line 9](https://github.com/Leantime/leantime/blob/master/app/Plugins/ProjectWizard/Hxcontrollers/Goals.php#L9-L137)

## Filters

### `Leantime.Domain.Tickets.Services.Tickets.getToDoWidgetAssignments.myTodoWidgetTasks`

*Retrieves the assignments for the ToDoWidget.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$tickets` |  | 

Source: [app/Domain/Tickets/Services/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php), [line 2065](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Services/Tickets.php#L2065-L2139)

### `Leantime.Domain.Projects.Controllers.ChangeCurrentProject.get.defaultProjectUrl`

*get - handle get requests*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$defaultURL` |  | 
`$project` |  | 

Source: [app/Domain/Projects/Controllers/ChangeCurrentProject.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Controllers/ChangeCurrentProject.php), [line 22](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Controllers/ChangeCurrentProject.php#L22-L40)

### `Leantime.Domain.Projects.Services.Projects.getProjectTypes.filterProjectType`

*Gets the project types.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$types` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 43](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L43-L54)

### `Leantime.Domain.Projects.Services.Projects.notifyProjectUsers.notificationFilter`

*Notifies the users associated with a project about a notification.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$notification` | `\Notification` | The notification object to send.

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 221](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L221-L232)

### `Leantime.Domain.Projects.Services.Projects.getProjectHierarchyAssignedToUser.afterLoadingProjects`

*Gets the hierarchy of projects assigned to a user.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projects` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 442](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L442-L462)

### `Leantime.Domain.Projects.Services.Projects.getProjectHierarchyAssignedToUser.afterPopulatingProjectHierarchy`

*Gets the hierarchy of projects assigned to a user.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projectHierarchy` |  | 
`['projects' => $projects]` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 442](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L442-L467)

### `Leantime.Domain.Projects.Services.Projects.getProjectHierarchyAssignedToUser.afterPopulatingProjectFavorites`

*Gets the hierarchy of projects assigned to a user.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$favorites` |  | 
`['projects' => $projects]` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 442](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L442-L476)

### `Leantime.Domain.Projects.Services.Projects.getProjectHierarchyAvailableToUser.afterLoadingProjects`

*Gets the project hierarchy available to a user.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projects` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 485](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L485-L508)

### `Leantime.Domain.Projects.Services.Projects.getProjectHierarchyAvailableToUser.afterPopulatingProjectHierarchy`

*Gets the project hierarchy available to a user.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projectHierarchy` |  | 
`['projects' => $projects]` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 485](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L485-L513)

### `Leantime.Domain.Projects.Services.Projects.getAllClientsAvailableToUser.afterLoadingProjects`

*Gets all the clients available to a user.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projects` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 524](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L524-L543)

### `Leantime.Domain.Projects.Services.Projects.getProjectAvatar.afterGettingAvatar`

*Retrieves the avatar for a project.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$avatar` |  | 
`['projectId' => $id]` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 1250](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L1250-L1261)

### `Leantime.Domain.Install.Controllers.Update.get.customUpdatePage`

*get - handle get requests*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`'install.update'` |  | 

Source: [app/Domain/Install/Controllers/Update.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Install/Controllers/Update.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/Domain/Install/Controllers/Update.php#L34-L46)

### `Leantime.Domain.Connector.Services.Providers.loadProviders.providerList`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->providers` |  | 

Source: [app/Domain/Connector/Services/Providers.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Connector/Services/Providers.php), [line 27](https://github.com/Leantime/leantime/blob/master/app/Domain/Connector/Services/Providers.php#L27-L27)

### `Leantime.Domain.Timesheets.Repositories.Timesheets.addTime.sql`

*addTime - add user-specific time entry*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$query` |  | 

Source: [app/Domain/Timesheets/Repositories/Timesheets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php), [line 569](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php#L569-L612)

### `Leantime.Domain.Timesheets.Repositories.Timesheets.upsertTimesheetEntry.sql`

*addTime - add user-specific time entry*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$query` |  | 

Source: [app/Domain/Timesheets/Repositories/Timesheets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php), [line 728](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php#L728-L768)

### `Leantime.Domain.Timesheets.Repositories.Timesheets.updateHours.sql`

*updatTime - update specific time entry*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$query` |  | 

Source: [app/Domain/Timesheets/Repositories/Timesheets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php), [line 838](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php#L838-L859)

### `Leantime.Domain.Plugins.Controllers.CssLoader.get.pluginCss`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`[]` |  | 

Source: [app/Domain/Plugins/Controllers/CssLoader.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Controllers/CssLoader.php), [line 23](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Controllers/CssLoader.php#L23-L23)

### `Leantime.Domain.Plugins.Services.Plugins.getAllPlugins.beforeReturnAllPlugins`

*Filters array of plugins from database and config before returning*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$installedPluginsById` |  | 
`['enabledOnly' => $enabledOnly]` |  | 

Source: [app/Domain/Plugins/Services/Plugins.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php), [line 118](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php#L118-L123)

### `Leantime.Domain.Plugins.Services.Plugins.getEnabledPlugins.beforeReturnCachedPlugins`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`\Illuminate\Support\Facades\Cache::store('installation')->get('plugins.enabledPlugins')` |  | 
`['enabledOnly' => true]` |  | 

Source: [app/Domain/Plugins/Services/Plugins.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php), [line 146](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php#L146-L157)

### `Leantime.Domain.Plugins.Services.Plugins.getEnabledPlugins.beforeReturnCachedPlugins`

*Filters session array of enabled plugins before returning*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`payload: \Illuminate\Support\Facades\Cache::store('installation')->get('plugins.enabledPlugins')` |  | 
`available_params: ['enabledOnly' => true]` |  | 

Source: [app/Domain/Plugins/Services/Plugins.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php), [line 164](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php#L164-L172)

### `Leantime.Domain.Wiki.Templates.templates.tpl.documentTemplates`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$templates` |  | 

Source: [app/Domain/Wiki/Templates/templates.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Wiki/Templates/templates.tpl.php), [line 463](https://github.com/Leantime/leantime/blob/master/app/Domain/Wiki/Templates/templates.tpl.php#L463-L463)

### `Leantime.Domain.Auth.Services.Auth.setUsersession.user_session_vars`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$currentUser` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 274](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L274-L301)

### `Leantime.Domain.Auth.Services.Auth.logout.sessions_vars_to_destroy`

*logout - destroy sessions and cookies*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['userdata', 'template', 'subdomainData', 'currentProject', 'currentSprint', 'projectsettings', 'currentSubscriptions', 'lastTicketView', 'lastFilterdTicketTableView']` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 346](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L346-L367)

### `Leantime.Domain.Auth.Models.Roles.getFilteredRoles.available_roles`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`self::$roleKeys` |  | 

Source: [app/Domain/Auth/Models/Roles.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Models/Roles.php), [line 36](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Models/Roles.php#L36-L41)

### `Leantime.Domain.Dashboard.Controllers.Show.get.dashboardRedirect`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`'/dashboard/show'` |  | 
`['type' => $project['type']]` |  | 

Source: [app/Domain/Dashboard/Controllers/Show.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Controllers/Show.php), [line 63](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Controllers/Show.php#L63-L78)

### `Leantime.Domain.Menu.Repositories.Menu.buildMenuStructure.{$filter}`

*Builds the menu structure recursively.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`payload: $menuItem['submenu']` |  | 
`function: 'getMenuStructure'` |  | 

Source: [app/Domain/Menu/Repositories/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php), [line 210](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php#L210-L234)

### `Leantime.Domain.Menu.Repositories.Menu.getMenuStructure.menuStructures`

*getMenu - Return a specific menu structure*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->menuStructures` |  | 
`['menuType' => $menuType]` |  | 

Source: [app/Domain/Menu/Repositories/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php), [line 241](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php#L241-L258)

### `Leantime.Domain.Menu.Repositories.Menu.getMenuStructure.{$filter}`

*getMenu - Return a specific menu structure*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->menuStructures[$menuType]` |  | 
`['menuType' => $menuType]` |  | 

Source: [app/Domain/Menu/Repositories/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php), [line 241](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php#L241-L272)

### `Leantime.Domain.Menu.Repositories.Menu.getSectionMenuType.menuSections`

*menu class - Menu definitions*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$sections` |  | 
`['currentRoute' => $currentRoute, 'default' => $default]` |  | 

Source: [app/Domain/Menu/Repositories/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php), [line 3](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php#L3-L435)

### `Leantime.Domain.Menu.Hxcontrollers.ProjectSelector.updateMenu.startSomething`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`'#/projects/createnew'` |  | 

Source: [app/Domain/Menu/Hxcontrollers/ProjectSelector.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Hxcontrollers/ProjectSelector.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Hxcontrollers/ProjectSelector.php#L34-L105)

### `Leantime.Domain.Menu.Services.Menu.getProjectTypeAvatars.projectTypeAvatars`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projectTypeAvatars` |  | 

Source: [app/Domain/Menu/Services/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Services/Menu.php), [line 133](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Services/Menu.php#L133-L133)

### `Leantime.Domain.Menu.Services.Menu.getProjectSelectorGroupingOptions.projectSelectorGrouping`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projectSelectGrouping` |  | 

Source: [app/Domain/Menu/Services/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Services/Menu.php), [line 146](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Services/Menu.php#L146-L146)

### `Leantime.Domain.Menu.Composers.ProjectSelector.with.startSomething`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`'#/projects/createnew'` |  | 

Source: [app/Domain/Menu/Composers/ProjectSelector.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Composers/ProjectSelector.php), [line 36](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Composers/ProjectSelector.php#L36-L83)

### `Leantime.Domain.Menu.Composers.Menu.with.settingsLink`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$settingsLink` |  | 
`['type' => $menuType]` |  | 

Source: [app/Domain/Menu/Composers/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Composers/Menu.php), [line 36](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Composers/Menu.php#L36-L112)

### `Leantime.Domain.Menu.Composers.Menu.with.startSomething`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`'#/projects/createnew'` |  | 

Source: [app/Domain/Menu/Composers/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Composers/Menu.php), [line 36](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Composers/Menu.php#L36-L114)

### `Leantime.Domain.Reactions.Models.Reactions.getReactions.available_reactions`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`self::$reactionTypes` |  | 

Source: [app/Domain/Reactions/Models/Reactions.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Reactions/Models/Reactions.php), [line 62](https://github.com/Leantime/leantime/blob/master/app/Domain/Reactions/Models/Reactions.php#L62-L62)

### `Leantime.Domain.Reactions.Models.Reactions.getReactionsByType.available_reactions`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`self::$reactionTypes` |  | 

Source: [app/Domain/Reactions/Models/Reactions.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Reactions/Models/Reactions.php), [line 68](https://github.com/Leantime/leantime/blob/master/app/Domain/Reactions/Models/Reactions.php#L68-L73)

### `Leantime.Domain.Help.Services.Helper.__construct.addHelperModal`

*Constructor for the class.*

Initializes the availableModals property by dispatching the "addHelperModal" event.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->availableModals` |  | 

Source: [app/Domain/Help/Services/Helper.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Help/Services/Helper.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/Domain/Help/Services/Helper.php#L29-L38)

### `Leantime.Domain.Help.Services.Helper.getFirstLoginSteps.filterSteps`

*Retrieves the first login steps.*

This method returns an array of steps that a user needs to follow during the first login.

Each step consists of a template and a button label.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$steps` |  | 

Source: [app/Domain/Help/Services/Helper.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Help/Services/Helper.php), [line 66](https://github.com/Leantime/leantime/blob/master/app/Domain/Help/Services/Helper.php#L66-L85)

### `Leantime.Domain.Setting.Services.Setting.onboardingHandler.completeOnboardingHandler`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$completedOnboarding` |  | 

Source: [app/Domain/Setting/Services/Setting.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Setting/Services/Setting.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Setting/Services/Setting.php#L11-L129)

### `Leantime.Domain.Reports.Services.Reports.getAnonymousTelemetry.beforeReturnTelemetry`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$telemetry` |  | 

Source: [app/Domain/Reports/Services/Reports.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Reports/Services/Reports.php), [line 152](https://github.com/Leantime/leantime/blob/master/app/Domain/Reports/Services/Reports.php#L152-L270)

### `Leantime.Domain.Widgets.Services.Widgets.__construct.availableWidgets`

*__construct method.*

Initializes the object and sets the available widgets and default widgets.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->availableWidgets` |  | 

Source: [app/Domain/Widgets/Services/Widgets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Widgets/Services/Widgets.php), [line 35](https://github.com/Leantime/leantime/blob/master/app/Domain/Widgets/Services/Widgets.php#L35-L118)

### `Leantime.Domain.Widgets.Services.Widgets.__construct.defaultWidgets`

*__construct method.*

Initializes the object and sets the available widgets and default widgets.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->defaultWidgets` |  | 
`['availableWidgets' => $this->availableWidgets]` |  | 

Source: [app/Domain/Widgets/Services/Widgets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Widgets/Services/Widgets.php), [line 35](https://github.com/Leantime/leantime/blob/master/app/Domain/Widgets/Services/Widgets.php#L35-L119)

### `Leantime.Domain.Widgets.Services.Widgets.getAll.availableWidgets`

*Retrieves all available widgets.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->availableWidgets` |  | 

Source: [app/Domain/Widgets/Services/Widgets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Widgets/Services/Widgets.php), [line 146](https://github.com/Leantime/leantime/blob/master/app/Domain/Widgets/Services/Widgets.php#L146-L155)

### `Leantime.Domain.Users.Services.Users.getAll.getAll`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$users` |  | 

Source: [app/Domain/Users/Services/Users.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php), [line 93](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php#L93-L102)

### `Leantime.Domain.Modulemanager.Controllers.Notavailable.run.notAvailableRedirect`

*Controller / Delete Canvas*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$redirect` |  | 
`$params` |  | 

Source: [app/Domain/Modulemanager/Controllers/Notavailable.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Modulemanager/Controllers/Notavailable.php), [line 3](https://github.com/Leantime/leantime/blob/master/app/Domain/Modulemanager/Controllers/Notavailable.php#L3-L18)

### `Leantime.Domain.Modulemanager.Services.Modulemanager.isModuleAvailable.moduleAvailability`

*Checks if a module is available and enabled.*

This also checks plugins and whether they are installed and enabled

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available` |  | 
`['module' => $module]` |  | 

Source: [app/Domain/Modulemanager/Services/Modulemanager.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Modulemanager/Services/Modulemanager.php), [line 50](https://github.com/Leantime/leantime/blob/master/app/Domain/Modulemanager/Services/Modulemanager.php#L50-L71)

### `Leantime.Core.Fileupload.getPublicFilesPath.relative_path`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`'/../../public/userfiles'` |  | 

Source: [app/Core/Fileupload.php](https://github.com/Leantime/leantime/blob/master/app/Core/Fileupload.php), [line 166](https://github.com/Leantime/leantime/blob/master/app/Core/Fileupload.php#L166-L171)

### `Leantime.Core.Events.DispatchesEvents.dispatch_filter.{$hook}`

*dispatches a filter with context*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$available_params` |  | 
`static::get_event_context($function)` |  | 

Source: [app/Core/Events/DispatchesEvents.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/DispatchesEvents.php), [line 30](https://github.com/Leantime/leantime/blob/master/app/Core/Events/DispatchesEvents.php#L30-L38)

### `Leantime.Core.Events.DispatchesEvents.dispatchFilter.{$hook}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$available_params` |  | 
`static::get_event_context($function)` |  | 

Source: [app/Core/Events/DispatchesEvents.php](https://github.com/Leantime/leantime/blob/master/app/Core/Events/DispatchesEvents.php), [line 45](https://github.com/Leantime/leantime/blob/master/app/Core/Events/DispatchesEvents.php#L45-L45)

### `Leantime.Core.Middleware.Updated.redirectToUpdate.allowedRoutes`

*Redirect to update*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$allowedRoutes` |  | 

Source: [app/Core/Middleware/Updated.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Updated.php), [line 51](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Updated.php#L51-L61)

### `Leantime.Core.Middleware.Updated.redirectToUpdate.redirectroute`

*Redirect to update*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$route` |  | 

Source: [app/Core/Middleware/Updated.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Updated.php), [line 51](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Updated.php#L51-L67)

### `Leantime.Core.Middleware.RequestRateLimiter.handle.rateLimitKey`

*Handle the incoming request.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$key` |  | 
`['bootloader' => $this]` |  | 

Source: [app/Core/Middleware/RequestRateLimiter.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/RequestRateLimiter.php), [line 42](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/RequestRateLimiter.php#L42-L100)

### `Leantime.Core.Middleware.RequestRateLimiter.handle.rateLimit`

*Handle the incoming request.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$limit` |  | 
`['bootloader' => $this, 'key' => $key]` |  | 

Source: [app/Core/Middleware/RequestRateLimiter.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/RequestRateLimiter.php), [line 42](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/RequestRateLimiter.php#L42-L109)

### `Leantime.Core.Middleware.TrustProxies.__construct.trustedProxies`

*Constructor for the class.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`explode(',', $config->trustedProxies)` |  | 
`['bootloader' => $this]` |  | 

Source: [app/Core/Middleware/TrustProxies.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/TrustProxies.php), [line 38](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/TrustProxies.php#L38-L54)

### `Leantime.Core.Middleware.InitialHeaders.handle.cspParts`

*Set up the initial headers*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$cspParts` |  | 

Source: [app/Core/Middleware/InitialHeaders.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/InitialHeaders.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/InitialHeaders.php#L14-L36)

### `Leantime.Core.Middleware.InitialHeaders.handle.headers`

*Set up the initial headers*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['X-Frame-Options' => 'SAMEORIGIN', 'X-XSS-Protection' => '1; mode=block', 'X-Content-Type-Options' => 'nosniff', 'Referrer-Policy', 'same-origin', 'Access-Control-Allow-Origin' => BASE_URL, 'Cache-Control' => 'no-cache, no-store, must-revalidate', 'Pragma' => 'no-cache', 'Content-Security-Policy' => $csp]` |  | 

Source: [app/Core/Middleware/InitialHeaders.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/InitialHeaders.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/InitialHeaders.php#L14-L49)

### `Leantime.Core.Middleware.LoadPlugins.handle.pluginMiddlware`

*Set up the initial headers*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->pluginMiddleware` |  | 
`['request' => $request]` |  | 

Source: [app/Core/Middleware/LoadPlugins.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/LoadPlugins.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/LoadPlugins.php#L17-L29)

### `Leantime.Core.Middleware.Auth.__construct.publicActions`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->publicActions` |  | 
`['bootloader' => $this]` |  | 

Source: [app/Core/Middleware/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Auth.php), [line 43](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Auth.php#L43-L43)

### `Leantime.Core.Middleware.Auth.handle.loginRoute`

*Handle the request*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`'auth.login'` |  | 
`['request' => $request]` |  | 

Source: [app/Core/Middleware/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Auth.php), [line 68](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Auth.php#L68-L79)

### `Leantime.Core.Middleware.Installed.redirectToInstall.allowedRoutes`

*Redirect to install*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$allowedRoutes` |  | 

Source: [app/Core/Middleware/Installed.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Installed.php), [line 83](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Installed.php#L83-L93)

### `Leantime.Core.Middleware.Installed.redirectToInstall.redirectroute`

*Redirect to install*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$route` |  | 

Source: [app/Core/Middleware/Installed.php](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Installed.php), [line 83](https://github.com/Leantime/leantime/blob/master/app/Core/Middleware/Installed.php#L83-L100)

### `Leantime.Core.Mailer.__construct.fromEmail`

*__construct - get configurations*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->emailDomain` |  | 
`$this` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 52](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L52-L66)

### `Leantime.Core.Mailer.dispatchMailerHook.{$hook}`

*dispatchMailerHook - dispatches a mailer hook*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$additional_params` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 171](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L171-L191)

### `Leantime.Core.Mailer.sendMail.sendMailTo`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$to` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 204](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L204-L213)

### `Leantime.Core.Mailer.sendMail.sendMailFrom`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$from` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 204](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L204-L214)

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

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 243](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L243-L268)

### `Leantime.Core.Mailer.sendMail.mailBodyParams`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['inlineLogoContent' => $inlineLogoContent, 'headline' => $this->language->__('email_notifications.hi'), 'content' => $this->nl2br ? nl2br($this->html) : $this->html, 'unsub_link' => sprintf($this->language->__('email_notifications.unsubscribe'), BASE_URL . '/users/editOwn/')]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 269](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L269-L277)

### `Leantime.Core.Mailer.sendMail.bodyContent`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$mailBody` |  | 
`[['companyColor' => $this->companyColor, 'logoUrl' => $inlineLogoContent, 'languageHiText' => $this->language->__('email_notifications.hi'), 'emailContentsHtml' => nl2br($this->html), 'unsubLink' => sprintf($this->language->__('email_notifications.unsubscribe'), BASE_URL . '/users/editOwn/')]]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 204](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L204-L292)

### `Leantime.Core.Mailer.sendMail.altBody`

*sendMail - send the mail with mail()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->text` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 204](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L204-L300)

### `Leantime.Core.Support.Mix.__construct.mix_manifest_directories`

*WARNING: All files in the manifest directories will be exposed to public queries!*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`[]` |  | 

Source: [app/Core/Support/Mix.php](https://github.com/Leantime/leantime/blob/master/app/Core/Support/Mix.php), [line 23](https://github.com/Leantime/leantime/blob/master/app/Core/Support/Mix.php#L23-L28)

### `Leantime.Core.Http.HttpKernel.sendRequestThroughRouter.middleware`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->middleware` |  | 
`['request' => $request]` |  | 

Source: [app/Core/Http/HttpKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php), [line 108](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php#L108-L108)

### `Leantime.Core.Http.HttpKernel.sendRequestThroughRouter.plugins_middleware`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`payload: []` |  | 
`function: 'handle'` |  | 

Source: [app/Core/Http/HttpKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php), [line 118](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php#L118-L122)

### `Leantime.Core.Http.HttpKernel.handle.beforeSendResponse`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$response` |  | 

Source: [app/Core/Http/HttpKernel.php](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php), [line 145](https://github.com/Leantime/leantime/blob/master/app/Core/Http/HttpKernel.php#L145-L145)

### `Leantime.Core.UI.Template.assign.var.{$name}`

*Filter to access template variable names after they have been assigned*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$value` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 174](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L174-L179)

### `Leantime.Core.UI.Template.display.template`

*display - display template from folder template including main layout wrapper*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$template` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 257](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L257-L265)

### `Leantime.Core.UI.Template.display.template.{$template}`

*display - display template from folder template including main layout wrapper*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$template` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 257](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L257-L266)

### `Leantime.Core.UI.Template.confirmLayoutName.layout`

*Confirm the layout name based on the provided parameters.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$layout` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 394](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L394-L404)

### `Leantime.Core.UI.Template.confirmLayoutName.layout.{$template}`

*Confirm the layout name based on the provided parameters.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$layout` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 394](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L394-L405)

### `Leantime.Core.UI.Template.getTemplatePath.template_path__{$namespace}_{$path}`

*getTemplatePath - Find template in custom and src directories*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"{$namespace}::{$path}"` |  | 
`['namespace' => $namespace, 'path' => $path]` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 451](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L451-L474)

### `Leantime.Core.UI.Template.displayNotification.message`

*displayNotification - display notification*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$language->__($message_id)` |  | 
`$note` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 497](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L497-L513)

### `Leantime.Core.UI.Template.displayNotification.message_{$message_id}`

*displayNotification - display notification*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$message` |  | 
`$note` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 497](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L497-L518)

### `Leantime.Core.UI.Template.displayInlineNotification.message`

*displayInlineNotification - display notification*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$language->__($message_id)` |  | 
`$note` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 552](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L552-L570)

### `Leantime.Core.UI.Template.displayInlineNotification.message_{$message_id}`

*displayInlineNotification - display notification*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$message` |  | 
`$note` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 552](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L552-L575)

### `Leantime.Core.UI.Template.dispatchTplHook.{$hookName}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$available_params` |  | 
`$this->hookContext` |  | 

Source: [app/Core/UI/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php), [line 884](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Template.php#L884-L894)

### `Leantime.Core.UI.Theme.getAvailableColorSchemes.colorschemes`

*Retrieves the available color schemes.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$parsedColorSchemes` |  | 

Source: [app/Core/UI/Theme.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Theme.php), [line 158](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Theme.php#L158-L190)

### `Leantime.Core.UI.Theme.getAvailableFonts.fonts`

*theme - Engine for handling themes*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->fonts` |  | 

Source: [app/Core/UI/Theme.php](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Theme.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/Core/UI/Theme.php#L18-L197)

### `Leantime.Core.Db.Repository.prepare.sql`

*prepares sql for entry; wrapper for PDO\prepare()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$sql` |  | 
`$this->getArgs(['prepareArgs' => $args])` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 58](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L58-L70)

### `Leantime.Core.Db.Repository.bindValue.binding.str_replace()`

*binds values for search/replace of sql; wrapper for PDO\bindValue()*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$replace` | `string` | - value to replace with
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 75](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L75-L89)

### `Leantime.Core.Db.Repository.getArgs.args`

*Gets the arguments to pass along to events/filter*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$args` |  | 
`[]` |  | 
`5` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 110](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L110-L123)

### `Leantime.Core.Db.Repository.__call.stmn`

*executes the sql call - uses \PDO*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->stmn` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 128](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L128-L143)

### `Leantime.Core.Db.Repository.__call.method`

*executes the sql call - uses \PDO*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$method` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 128](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L128-L144)

### `Leantime.Core.Db.Repository.__call.return`

*executes the sql call - uses \PDO*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$values` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Db/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php), [line 128](https://github.com/Leantime/leantime/blob/master/app/Core/Db/Repository.php#L128-L156)

### `Leantime.Core.Language.readIni.language_resources`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`\Illuminate\Support\Facades\Cache::store('installation')->get('languages.lang_' . $this->language)` |  | 
`['language' => $this->language]` |  | 

Source: [app/Core/Language.php](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php), [line 204](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php#L204-L210)

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

Source: [app/Core/Language.php](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php), [line 193](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php#L193-L233)

### `Leantime.Core.Language.readIni.language_resources`

*Read and load the language resources from the ini files.*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$mainLanguageArray` |  | 
`['language' => $this->language]` |  | 

Source: [app/Core/Language.php](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php), [line 193](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php#L193-L243)

### `Leantime.Core.Language.getLanguageList.languages`

*Get the list of languages.*

Retrieves the list of languages from a cache or from INI files if the cache is not available.
The list of languages is stored in an associative array where the keys represent the language codes
and the values represent the language names.

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$langlist` |  | 

Source: [app/Core/Language.php](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php), [line 283](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php#L283-L315)

### `Leantime.Views.Composers.App.with.appAnnouncement`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$announcement` |  | 

Source: [app/Views/Composers/App.php](https://github.com/Leantime/leantime/blob/master/app/Views/Composers/App.php), [line 27](https://github.com/Leantime/leantime/blob/master/app/Views/Composers/App.php#L27-L40)



