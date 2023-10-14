# Hooks

- [Events](#events)
- [Filters](#filters)

## Events

### `Domain.Tickets.Repositories.Tickets.patchTicket.ticketStatusUpdate`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("ticketId" => $id, "status" => $value, "action" => "ticketStatusUpdate")` |  | 

Source: [app/Domain/Tickets/Repositories/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Repositories/Tickets.php), [line 1668](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Repositories/Tickets.php#L1668-L1668)

### `Domain.Tickets.Repositories.Tickets.updateTicketStatus.ticketStatusUpdate`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("ticketId" => $ticketId, "status" => $status, "action" => "ticketStatusUpdate", "handler" => $handler)` |  | 

Source: [app/Domain/Tickets/Repositories/Tickets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Repositories/Tickets.php), [line 1812](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Repositories/Tickets.php#L1812-L1812)

### `Domain.Tickets.Templates.showAll.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 44](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L44-L44)

### `Domain.Tickets.Templates.showAll.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 49](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L49-L49)

### `Domain.Tickets.Templates.showAll.tpl.filters.afterRighthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 59](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L59-L59)

### `Domain.Tickets.Templates.showAll.tpl.filters.beforeRighthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 63](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L63-L63)

### `Domain.Tickets.Templates.showAll.tpl.allTicketsTable.before`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTicketGroups]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 91](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L91-L91)

### `Domain.Tickets.Templates.showAll.tpl.allTicketsTable.beforeHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 109](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L109-L109)

### `Domain.Tickets.Templates.showAll.tpl.allTicketsTable.beforeHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 111](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L111-L111)

### `Domain.Tickets.Templates.showAll.tpl.allTicketsTable.afterHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 128](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L128-L128)

### `Domain.Tickets.Templates.showAll.tpl.allTicketsTable.afterHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 130](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L130-L130)

### `Domain.Tickets.Templates.showAll.tpl.allTicketsTable.beforeFirstRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 132](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L132-L132)

### `Domain.Tickets.Templates.showAll.tpl.allTicketsTable.afterRowStart`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['rowNum' => $rowNum, 'tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 135](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L135-L135)

### `Domain.Tickets.Templates.showAll.tpl.allTicketsTable.beforeRowEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets, 'rowNum' => $rowNum]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 369](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L369-L369)

### `Domain.Tickets.Templates.showAll.tpl.allTicketsTable.afterLastRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 372](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L372-L372)

### `Domain.Tickets.Templates.showAll.tpl.allTicketsTable.afterBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 374](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L374-L374)

### `Domain.Tickets.Templates.showAll.tpl.allTicketsTable.afterClose`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 380](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L380-L380)

### `Domain.Tickets.Templates.showAll.tpl.scripts.afterOpen`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 396](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L396-L396)

### `Domain.Tickets.Templates.showAll.tpl.scripts.beforeClose`


Source: [app/Domain/Tickets/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php), [line 415](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAll.tpl.php#L415-L415)

### `Domain.Tickets.Templates.showAllMilestones.tpl.filters.afterFormOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 38](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L38-L38)

### `Domain.Tickets.Templates.showAllMilestones.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 44](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L44-L44)

### `Domain.Tickets.Templates.showAllMilestones.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 50](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L50-L50)

### `Domain.Tickets.Templates.showAllMilestones.tpl.filters.afterCenterSectionOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 56](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L56-L56)

### `Domain.Tickets.Templates.showAllMilestones.tpl.filters.beforeCenterSectionClose`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 57](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L57-L57)

### `Domain.Tickets.Templates.showAllMilestones.tpl.filters.afterRighthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 63](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L63-L63)

### `Domain.Tickets.Templates.showAllMilestones.tpl.filters.beforeRighthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 76](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L76-L76)

### `Domain.Tickets.Templates.showAllMilestones.tpl.filters.beforeFormClose`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 83](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L83-L83)

### `Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.before`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 89](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L89-L89)

### `Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.beforeHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 106](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L106-L106)

### `Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.beforeHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 108](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L108-L108)

### `Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.afterHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 126](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L126-L126)

### `Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.afterHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 128](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L128-L128)

### `Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.beforeFirstRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 130](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L130-L130)

### `Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.afterRowStart`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['rowNum' => $rowNum, 'tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 133](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L133-L133)

### `Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.beforeRowEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets, 'rowNum' => $rowNum]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 266](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L266-L266)

### `Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.afterLastRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 269](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L269-L269)

### `Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.afterBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 271](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L271-L271)

### `Domain.Tickets.Templates.showAllMilestones.tpl.allTicketsTable.afterClose`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 273](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L273-L273)

### `Domain.Tickets.Templates.showAllMilestones.tpl.scripts.afterOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 280](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L280-L280)

### `Domain.Tickets.Templates.showAllMilestones.tpl.scripts.beforeClose`


Source: [app/Domain/Tickets/Templates/showAllMilestones.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php), [line 300](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestones.tpl.php#L300-L300)

### `Domain.Tickets.Templates.submodules.ticketFilter.sub.filters.beforeFirstBarField`


Source: [app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php), [line 58](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php#L58-L58)

### `Domain.Tickets.Templates.submodules.ticketFilter.sub.filters.beforeBar`


Source: [app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php), [line 172](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php#L172-L172)

### `Domain.Tickets.Templates.submodules.ticketFilter.sub.filters.beforeFormClose`


Source: [app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php), [line 176](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketFilter.sub.php#L176-L176)

### `Domain.Tickets.Templates.submodules.ticketHeader.sub.beforePageHeaderOpen`


Source: [app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php), [line 39](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php#L39-L39)

### `Domain.Tickets.Templates.submodules.ticketHeader.sub.afterPageHeaderOpen`


Source: [app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php), [line 41](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php#L41-L41)

### `Domain.Tickets.Templates.submodules.ticketHeader.sub.beforePageHeaderClose`


Source: [app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php), [line 101](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php#L101-L101)

### `Domain.Tickets.Templates.submodules.ticketHeader.sub.afterPageHeaderClose`


Source: [app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php), [line 103](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/ticketHeader.sub.php#L103-L103)

### `Domain.Tickets.Templates.submodules.portfolioHeader.sub.beforePageHeaderOpen`


Source: [app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php#L13-L13)

### `Domain.Tickets.Templates.submodules.portfolioHeader.sub.afterPageHeaderOpen`


Source: [app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php), [line 15](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php#L15-L15)

### `Domain.Tickets.Templates.submodules.portfolioHeader.sub.beforePageHeaderClose`


Source: [app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php), [line 50](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php#L50-L50)

### `Domain.Tickets.Templates.submodules.portfolioHeader.sub.afterPageHeaderClose`


Source: [app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php), [line 52](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/submodules/portfolioHeader.sub.php#L52-L52)

### `Domain.Tickets.Templates.showList.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 38](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L38-L38)

### `Domain.Tickets.Templates.showList.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 43](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L43-L43)

### `Domain.Tickets.Templates.showList.tpl.allTicketsTable.before`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 57](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L57-L57)

### `Domain.Tickets.Templates.showList.tpl.allTicketsTable.beforeHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 85](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L85-L85)

### `Domain.Tickets.Templates.showList.tpl.allTicketsTable.beforeHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 87](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L87-L87)

### `Domain.Tickets.Templates.showList.tpl.allTicketsTable.afterHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 94](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L94-L94)

### `Domain.Tickets.Templates.showList.tpl.allTicketsTable.afterHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 97](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L97-L97)

### `Domain.Tickets.Templates.showList.tpl.allTicketsTable.beforeFirstRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 99](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L99-L99)

### `Domain.Tickets.Templates.showList.tpl.allTicketsTable.afterRowStart`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['rowNum' => $rowNum, 'tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 102](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L102-L102)

### `Domain.Tickets.Templates.showList.tpl.allTicketsTable.beforeRowEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets, 'rowNum' => $rowNum]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 121](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L121-L121)

### `Domain.Tickets.Templates.showList.tpl.allTicketsTable.afterLastRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 124](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L124-L124)

### `Domain.Tickets.Templates.showList.tpl.allTicketsTable.afterBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 126](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L126-L126)

### `Domain.Tickets.Templates.showList.tpl.allTicketsTable.afterClose`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 150](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L150-L150)

### `Domain.Tickets.Templates.showList.tpl.scripts.afterOpen`


Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 157](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L157-L157)

### `Domain.Tickets.Templates.showList.tpl.scripts.beforeClose`


Source: [app/Domain/Tickets/Templates/showList.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php), [line 170](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showList.tpl.php#L170-L170)

### `Domain.Tickets.Templates.roadmap.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/roadmap.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/roadmap.tpl.php), [line 24](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/roadmap.tpl.php#L24-L24)

### `Domain.Tickets.Templates.roadmap.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/roadmap.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/roadmap.tpl.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/roadmap.tpl.php#L29-L29)

### `Domain.Tickets.Templates.showKanban.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showKanban.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showKanban.tpl.php), [line 45](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showKanban.tpl.php#L45-L45)

### `Domain.Tickets.Templates.showKanban.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/showKanban.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showKanban.tpl.php), [line 50](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showKanban.tpl.php#L50-L50)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.afterFormOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L34-L34)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L40-L40)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 41](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L41-L41)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.afterCenterSectionOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 47](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L47-L47)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.beforeCenterSectionClose`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 48](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L48-L48)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.afterRighthandSectionOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 54](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L54-L54)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.beforeRighthandSectionClose`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 58](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L58-L58)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.filters.beforeFormClose`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 65](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L65-L65)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.before`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 71](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L71-L71)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.beforeHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 90](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L90-L90)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.beforeHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 92](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L92-L92)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.afterHeadRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 111](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L111-L111)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.afterHead`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 113](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L113-L113)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.beforeFirstRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 115](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L115-L115)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.afterRowStart`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['rowNum' => $rowNum, 'tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 119](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L119-L119)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.beforeRowEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets, 'rowNum' => $rowNum]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 251](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L251-L251)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.afterLastRow`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 254](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L254-L254)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.afterBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 256](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L256-L256)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.allTicketsTable.afterClose`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['tickets' => $allTickets]` |  | 

Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 258](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L258-L258)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.scripts.afterOpen`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 265](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L265-L265)

### `Domain.Tickets.Templates.showAllMilestonesOverview.tpl.scripts.beforeClose`


Source: [app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php), [line 286](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/showAllMilestonesOverview.tpl.php#L286-L286)

### `Domain.Tickets.Templates.calendar.tpl.filters.afterLefthandSectionOpen`


Source: [app/Domain/Tickets/Templates/calendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/calendar.tpl.php), [line 25](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/calendar.tpl.php#L25-L25)

### `Domain.Tickets.Templates.calendar.tpl.filters.beforeLefthandSectionClose`


Source: [app/Domain/Tickets/Templates/calendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/calendar.tpl.php), [line 30](https://github.com/Leantime/leantime/blob/master/app/Domain/Tickets/Templates/calendar.tpl.php#L30-L30)

### `Domain.Clients.Templates.delClient.tpl.beforePageHeaderOpen`


Source: [app/Domain/Clients/Templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php), [line 9](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php#L9-L9)

### `Domain.Clients.Templates.delClient.tpl.afterPageHeaderOpen`


Source: [app/Domain/Clients/Templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php#L11-L11)

### `Domain.Clients.Templates.delClient.tpl.beforePageHeaderClose`


Source: [app/Domain/Clients/Templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php#L17-L17)

### `Domain.Clients.Templates.delClient.tpl.afterPageHeaderClose`


Source: [app/Domain/Clients/Templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php#L19-L19)

### `Domain.Clients.Templates.delClient.tpl.afterFormOpen`


Source: [app/Domain/Clients/Templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php), [line 31](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php#L31-L31)

### `Domain.Clients.Templates.delClient.tpl.beforeFormClose`


Source: [app/Domain/Clients/Templates/delClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php), [line 37](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/delClient.tpl.php#L37-L37)

### `Domain.Clients.Templates.showAll.tpl.beforePageHeaderOpen`


Source: [app/Domain/Clients/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php#L8-L8)

### `Domain.Clients.Templates.showAll.tpl.afterPageHeaderOpen`


Source: [app/Domain/Clients/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php), [line 10](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php#L10-L10)

### `Domain.Clients.Templates.showAll.tpl.beforePageHeaderClose`


Source: [app/Domain/Clients/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php#L16-L16)

### `Domain.Clients.Templates.showAll.tpl.afterPageHeaderClose`


Source: [app/Domain/Clients/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php#L18-L18)

### `Domain.Clients.Templates.showAll.tpl.scripts.afterOpen`


Source: [app/Domain/Clients/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php), [line 65](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php#L65-L65)

### `Domain.Clients.Templates.showAll.tpl.scripts.beforeClose`


Source: [app/Domain/Clients/Templates/showAll.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php), [line 74](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showAll.tpl.php#L74-L74)

### `Domain.Clients.Templates.newClient.tpl.beforePageHeaderOpen`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 9](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L9-L9)

### `Domain.Clients.Templates.newClient.tpl.afterPageHeaderOpen`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L11-L11)

### `Domain.Clients.Templates.newClient.tpl.beforePageHeaderClose`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L17-L17)

### `Domain.Clients.Templates.newClient.tpl.afterPageHeaderClose`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L19-L19)

### `Domain.Clients.Templates.newClient.tpl.afterFormOpen`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 32](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L32-L32)

### `Domain.Clients.Templates.newClient.tpl.beforeSubmitButton`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 111](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L111-L111)

### `Domain.Clients.Templates.newClient.tpl.beforeFormClose`


Source: [app/Domain/Clients/Templates/newClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php), [line 125](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/newClient.tpl.php#L125-L125)

### `Domain.Clients.Templates.editClient.tpl.beforePageHeaderOpen`


Source: [app/Domain/Clients/Templates/editClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php), [line 9](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php#L9-L9)

### `Domain.Clients.Templates.editClient.tpl.afterPageHeaderOpen`


Source: [app/Domain/Clients/Templates/editClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php#L11-L11)

### `Domain.Clients.Templates.editClient.tpl.beforePageHeaderClose`


Source: [app/Domain/Clients/Templates/editClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php#L17-L17)

### `Domain.Clients.Templates.editClient.tpl.afterPageHeaderClose`


Source: [app/Domain/Clients/Templates/editClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/editClient.tpl.php#L19-L19)

### `Domain.Clients.Templates.showClient.tpl.beforePageHeaderOpen`


Source: [app/Domain/Clients/Templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php#L11-L11)

### `Domain.Clients.Templates.showClient.tpl.afterPageHeaderOpen`


Source: [app/Domain/Clients/Templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php#L13-L13)

### `Domain.Clients.Templates.showClient.tpl.beforePageHeaderClose`


Source: [app/Domain/Clients/Templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php#L19-L19)

### `Domain.Clients.Templates.showClient.tpl.afterPageHeaderClose`


Source: [app/Domain/Clients/Templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php#L21-L21)

### `Domain.Clients.Templates.showClient.tpl.scripts.afterOpen`


Source: [app/Domain/Clients/Templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php), [line 296](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php#L296-L296)

### `Domain.Clients.Templates.showClient.tpl.scripts.beforeClose`


Source: [app/Domain/Clients/Templates/showClient.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php), [line 304](https://github.com/Leantime/leantime/blob/master/app/Domain/Clients/Templates/showClient.tpl.php#L304-L304)

### `Domain.Projects.Repositories.Projects.editProject.editProject`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("values" => $values, "oldProject" => $oldProject)` |  | 

Source: [app/Domain/Projects/Repositories/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Repositories/Projects.php), [line 808](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Repositories/Projects.php#L808-L808)

### `Domain.Projects.Repositories.Projects.addProjectRelation.userAddedToProject`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("userId" => $userId, "projectId" => $projectId, "projectRole" => $projectRole, "oldProject" => $oldProject)` |  | 

Source: [app/Domain/Projects/Repositories/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Repositories/Projects.php), [line 1247](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Repositories/Projects.php#L1247-L1247)

### `Domain.Projects.Templates.showProject.tpl.projectTabsList`


Source: [app/Domain/Projects/Templates/showProject.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/showProject.tpl.php), [line 47](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/showProject.tpl.php#L47-L47)

### `Domain.Projects.Templates.showProject.tpl.projectTabsContent`


Source: [app/Domain/Projects/Templates/showProject.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/showProject.tpl.php), [line 464](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/showProject.tpl.php#L464-L464)

### `Domain.Projects.Templates.newProject.tpl.beforeClientPicker`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$project` |  | 

Source: [app/Domain/Projects/Templates/newProject.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/newProject.tpl.php), [line 91](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/newProject.tpl.php#L91-L91)

### `Domain.Projects.Templates.submodules.projectDetails.sub.afterProjectAvatar`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$project` |  | 

Source: [app/Domain/Projects/Templates/submodules/projectDetails.sub.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/submodules/projectDetails.sub.php), [line 112](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Templates/submodules/projectDetails.sub.php#L112-L112)

### `Domain.Projects.Services.Projects.notifyProjectUsers.notifyProjectUsers`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("type" => "projectUpdate", "module" => $notification->module, "moduleId" => $entityId, "message" => $notification->message, "subject" => $notification->subject, "users" => $this->getAllUserInfoToNotify($notification->projectId), "url" => $notification->url['url'])` |  | 
`"domain.services.projects"` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 344](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L344-L344)

### `Domain.Projects.Services.Projects.changeCurrentSessionProject.projects.setCurrentProject`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$project` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 746](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L746-L746)

### `Domain.Pageparts.Templates.footer.tpl.beforeFooterOpen`


Source: [app/Domain/Pageparts/Templates/footer.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/footer.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/footer.tpl.php#L8-L8)

### `Domain.Pageparts.Templates.footer.tpl.afterFooterOpen`


Source: [app/Domain/Pageparts/Templates/footer.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/footer.tpl.php), [line 10](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/footer.tpl.php#L10-L10)

### `Domain.Pageparts.Templates.footer.tpl.beforeFooterClose`


Source: [app/Domain/Pageparts/Templates/footer.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/footer.tpl.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/footer.tpl.php#L13-L13)

### `Domain.Pageparts.Templates.footer.tpl.afterFooter`


Source: [app/Domain/Pageparts/Templates/footer.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/footer.tpl.php), [line 15](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/footer.tpl.php#L15-L15)

### `Domain.Pageparts.Templates.header.tpl.afterMetaTags`


Source: [app/Domain/Pageparts/Templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php), [line 27](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php#L27-L27)

### `Domain.Pageparts.Templates.header.tpl.afterLinkTags`


Source: [app/Domain/Pageparts/Templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php), [line 33](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php#L33-L33)

### `Domain.Pageparts.Templates.header.tpl.afterScriptLibTags`


Source: [app/Domain/Pageparts/Templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php), [line 48](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php#L48-L48)

### `Domain.Pageparts.Templates.header.tpl.afterMainScriptTag`


Source: [app/Domain/Pageparts/Templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php), [line 52](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php#L52-L52)

### `Domain.Pageparts.Templates.header.tpl.afterThemeScripts`


Source: [app/Domain/Pageparts/Templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php), [line 63](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php#L63-L63)

### `Domain.Pageparts.Templates.header.tpl.afterThemeColors`


Source: [app/Domain/Pageparts/Templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php), [line 78](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php#L78-L78)

### `Domain.Pageparts.Templates.header.tpl.afterCustomizeTags`


Source: [app/Domain/Pageparts/Templates/header.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php), [line 90](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/header.tpl.php#L90-L90)

### `Domain.Pageparts.Templates.pageBottom.tpl.beforeBodyClose`


Source: [app/Domain/Pageparts/Templates/pageBottom.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/pageBottom.tpl.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/Domain/Pageparts/Templates/pageBottom.tpl.php#L34-L34)

### `Domain.Calendar.Templates.export.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/export.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php#L19-L19)

### `Domain.Calendar.Templates.export.tpl.beforeSubmitButton`


Source: [app/Domain/Calendar/Templates/export.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php), [line 38](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php#L38-L38)

### `Domain.Calendar.Templates.export.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/export.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php), [line 50](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/export.tpl.php#L50-L50)

### `Domain.Calendar.Templates.showAllGCals.tpl.scripts.afterOpen`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 10](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L10-L10)

### `Domain.Calendar.Templates.showAllGCals.tpl.scripts.beforeClose`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 35](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L35-L35)

### `Domain.Calendar.Templates.showAllGCals.tpl.beforePageHeaderOpen`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L40-L40)

### `Domain.Calendar.Templates.showAllGCals.tpl.afterPageHeaderOpen`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 42](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L42-L42)

### `Domain.Calendar.Templates.showAllGCals.tpl.beforePageHeaderClose`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 52](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L52-L52)

### `Domain.Calendar.Templates.showAllGCals.tpl.afterPageHeaderClose`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 54](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L54-L54)

### `Domain.Calendar.Templates.showAllGCals.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 60](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L60-L60)

### `Domain.Calendar.Templates.showAllGCals.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/showAllGCals.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php), [line 89](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showAllGCals.tpl.php#L89-L89)

### `Domain.Calendar.Templates.importGCal.tpl.beforePageHeaderOpen`


Source: [app/Domain/Calendar/Templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php), [line 9](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php#L9-L9)

### `Domain.Calendar.Templates.importGCal.tpl.afterPageHeaderOpen`


Source: [app/Domain/Calendar/Templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php#L11-L11)

### `Domain.Calendar.Templates.importGCal.tpl.beforePageHeaderClose`


Source: [app/Domain/Calendar/Templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php#L21-L21)

### `Domain.Calendar.Templates.importGCal.tpl.afterPageHeaderClose`


Source: [app/Domain/Calendar/Templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php), [line 23](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php#L23-L23)

### `Domain.Calendar.Templates.importGCal.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php), [line 32](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php#L32-L32)

### `Domain.Calendar.Templates.importGCal.tpl.beforeSubmitButton`


Source: [app/Domain/Calendar/Templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php), [line 99](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php#L99-L99)

### `Domain.Calendar.Templates.importGCal.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/importGCal.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php), [line 110](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/importGCal.tpl.php#L110-L110)

### `Domain.Calendar.Templates.editEvent.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/editEvent.tpl.php), [line 15](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/editEvent.tpl.php#L15-L15)

### `Domain.Calendar.Templates.editEvent.tpl.beforeSubmitButton`


Source: [app/Domain/Calendar/Templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/editEvent.tpl.php), [line 47](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/editEvent.tpl.php#L47-L47)

### `Domain.Calendar.Templates.editEvent.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/editEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/editEvent.tpl.php), [line 57](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/editEvent.tpl.php#L57-L57)

### `Domain.Calendar.Templates.delEvent.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delEvent.tpl.php), [line 12](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delEvent.tpl.php#L12-L12)

### `Domain.Calendar.Templates.delEvent.tpl.beforeSubmitButton`


Source: [app/Domain/Calendar/Templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delEvent.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delEvent.tpl.php#L14-L14)

### `Domain.Calendar.Templates.delEvent.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/delEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delEvent.tpl.php), [line 17](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/delEvent.tpl.php#L17-L17)

### `Domain.Calendar.Templates.addEvent.tpl.afterFormOpen`


Source: [app/Domain/Calendar/Templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php#L16-L16)

### `Domain.Calendar.Templates.addEvent.tpl.beforeSubmitButton`


Source: [app/Domain/Calendar/Templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php), [line 49](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php#L49-L49)

### `Domain.Calendar.Templates.addEvent.tpl.beforeFormClose`


Source: [app/Domain/Calendar/Templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php), [line 56](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php#L56-L56)

### `Domain.Calendar.Templates.addEvent.tpl.scripts.afterOpen`


Source: [app/Domain/Calendar/Templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php), [line 62](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php#L62-L62)

### `Domain.Calendar.Templates.addEvent.tpl.scripts.beforeClose`


Source: [app/Domain/Calendar/Templates/addEvent.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php), [line 68](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/addEvent.tpl.php#L68-L68)

### `Domain.Calendar.Templates.ical.tpl.beforeOutput`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$calendars` |  | 
`['eol' => $eol]` |  | 

Source: [app/Domain/Calendar/Templates/ical.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/ical.tpl.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/ical.tpl.php#L13-L13)

### `Domain.Calendar.Templates.ical.tpl.calendarOutputBeginning`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$calendar` |  | 
`['url' => $url, 'eol' => $eol]` |  | 

Source: [app/Domain/Calendar/Templates/ical.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/ical.tpl.php), [line 97](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/ical.tpl.php#L97-L100)

### `Domain.Calendar.Templates.ical.tpl.calendarOutputEnd`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$calendar` |  | 
`['url' => $url, 'eol' => $eol]` |  | 

Source: [app/Domain/Calendar/Templates/ical.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/ical.tpl.php), [line 112](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/ical.tpl.php#L112-L115)

### `Domain.Calendar.Templates.ical.tpl.afterOutput`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$calendars` |  | 
`['eol' => $eol]` |  | 

Source: [app/Domain/Calendar/Templates/ical.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/ical.tpl.php), [line 120](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/ical.tpl.php#L120-L120)

### `Domain.Calendar.Templates.showMyCalendar.tpl.beforePageHeaderOpen`


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 11](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L11-L11)

### `Domain.Calendar.Templates.showMyCalendar.tpl.afterPageHeaderOpen`


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 13](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L13-L13)

### `Domain.Calendar.Templates.showMyCalendar.tpl.beforePageHeaderClose`


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L19-L19)

### `Domain.Calendar.Templates.showMyCalendar.tpl.afterPageHeaderClose`


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L21-L21)

### `Domain.Calendar.Templates.showMyCalendar.tpl.scripts.afterOpen`


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 63](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L63-L63)

### `Domain.Calendar.Templates.showMyCalendar.tpl.scripts.beforeClose`


Source: [app/Domain/Calendar/Templates/showMyCalendar.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php), [line 221](https://github.com/Leantime/leantime/blob/master/app/Domain/Calendar/Templates/showMyCalendar.tpl.php#L221-L221)

### `Domain.Auth.Controllers.UserInvite.post.userSignUpSuccess`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['user' => $user]` |  | 

Source: [app/Domain/Auth/Controllers/UserInvite.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php), [line 101](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/UserInvite.php#L101-L101)

### `Domain.Auth.Controllers.Login.get.beforeAuth`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$params` |  | 

Source: [app/Domain/Auth/Controllers/Login.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php#L40-L40)

### `Domain.Auth.Controllers.Login.post.beforeAuthServiceCall`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['post' => $_POST]` |  | 

Source: [app/Domain/Auth/Controllers/Login.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php), [line 78](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php#L78-L78)

### `Domain.Auth.Controllers.Login.post.afterAuthServiceCall`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['post' => $_POST]` |  | 

Source: [app/Domain/Auth/Controllers/Login.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php), [line 86](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Controllers/Login.php#L86-L86)

### `Domain.Auth.Templates.userInvite.tpl.beforePageHeaderOpen`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L8-L8)

### `Domain.Auth.Templates.userInvite.tpl.afterPageHeaderOpen`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 10](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L10-L10)

### `Domain.Auth.Templates.userInvite.tpl.beforePageHeaderClose`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L14-L14)

### `Domain.Auth.Templates.userInvite.tpl.afterPageHeaderClose`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L16-L16)

### `Domain.Auth.Templates.userInvite.tpl.afterRegcontentOpen`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L18-L18)

### `Domain.Auth.Templates.userInvite.tpl.afterFormOpen`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 20](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L20-L20)

### `Domain.Auth.Templates.userInvite.tpl.beforeSubmitButton`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 44](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L44-L44)

### `Domain.Auth.Templates.userInvite.tpl.beforeFormClose`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 48](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L48-L48)

### `Domain.Auth.Templates.userInvite.tpl.beforeRegcontentClose`


Source: [app/Domain/Auth/Templates/userInvite.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php), [line 50](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/userInvite.tpl.php#L50-L50)

### `Domain.Auth.Templates.requestPwLink.tpl.beforePageHeaderOpen`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 5](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L5-L5)

### `Domain.Auth.Templates.requestPwLink.tpl.afterPageHeaderClose`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 12](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L12-L12)

### `Domain.Auth.Templates.requestPwLink.tpl.afterRegcontentOpen`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L14-L14)

### `Domain.Auth.Templates.requestPwLink.tpl.afterFormOpen`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L16-L16)

### `Domain.Auth.Templates.requestPwLink.tpl.beforeSubmitButton`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 26](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L26-L26)

### `Domain.Auth.Templates.requestPwLink.tpl.beforeFormClose`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L29-L29)

### `Domain.Auth.Templates.requestPwLink.tpl.beforeRegcontentClose`


Source: [app/Domain/Auth/Templates/requestPwLink.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php), [line 31](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/requestPwLink.tpl.php#L31-L31)

### `Domain.Auth.Templates.login.tpl.beforePageHeaderOpen`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L8-L8)

### `Domain.Auth.Templates.login.tpl.afterPageHeaderOpen`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 10](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L10-L10)

### `Domain.Auth.Templates.login.tpl.beforePageHeaderClose`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L14-L14)

### `Domain.Auth.Templates.login.tpl.afterPageHeaderClose`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L16-L16)

### `Domain.Auth.Templates.login.tpl.afterRegcontentOpen`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L19-L19)

### `Domain.Auth.Templates.login.tpl.afterFormOpen`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L21-L21)

### `Domain.Auth.Templates.login.tpl.beforeSubmitButton`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 35](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L35-L35)

### `Domain.Auth.Templates.login.tpl.beforeFormClose`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 41](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L41-L41)

### `Domain.Auth.Templates.login.tpl.beforeOidcButton`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 44](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L44-L44)

### `Domain.Auth.Templates.login.tpl.beforeRegcontentClose`


Source: [app/Domain/Auth/Templates/login.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php), [line 51](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/login.tpl.php#L51-L51)

### `Domain.Auth.Templates.resetPw.tpl.beforePageHeaderOpen`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 5](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L5-L5)

### `Domain.Auth.Templates.resetPw.tpl.afterPageHeaderOpen`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 8](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L8-L8)

### `Domain.Auth.Templates.resetPw.tpl.beforePageHeaderClose`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 12](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L12-L12)

### `Domain.Auth.Templates.resetPw.tpl.afterPageHeaderClose`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 14](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L14-L14)

### `Domain.Auth.Templates.resetPw.tpl.afterRegcontentOpen`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 16](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L16-L16)

### `Domain.Auth.Templates.resetPw.tpl.afterFormOpen`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 18](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L18-L18)

### `Domain.Auth.Templates.resetPw.tpl.beforeSubmitButton`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L34-L34)

### `Domain.Auth.Templates.resetPw.tpl.beforeFormClose`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 40](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L40-L40)

### `Domain.Auth.Templates.resetPw.tpl.beforeRegcontentClose`


Source: [app/Domain/Auth/Templates/resetPw.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php), [line 42](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Templates/resetPw.tpl.php#L42-L42)

### `Domain.Auth.Services.Auth.login.beforeLoginCheck`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password]` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 215](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L215-L215)

### `Domain.Auth.Services.Auth.login.afterLoginCheck`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password, 'authService' => app()->make(self::class)]` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 301](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L301-L301)

### `Domain.Auth.Services.Auth.login.afterLoginCheck`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password, 'authService' => app()->make(self::class)]` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 304](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L304-L304)

### `Domain.Auth.Services.Auth.logout.afterSessionDestroy`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['authService' => app()->make(self::class)]` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 417](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L417-L417)

### `Domain.Dashboard.Templates.home.tpl.beforePageHeaderOpen`


Source: [app/Domain/Dashboard/Templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php), [line 19](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php#L19-L19)

### `Domain.Dashboard.Templates.home.tpl.afterPageHeaderOpen`


Source: [app/Domain/Dashboard/Templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php), [line 21](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php#L21-L21)

### `Domain.Dashboard.Templates.home.tpl.beforePageHeaderClose`


Source: [app/Domain/Dashboard/Templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php), [line 26](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php#L26-L26)

### `Domain.Dashboard.Templates.home.tpl.afterPageHeaderClose`


Source: [app/Domain/Dashboard/Templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php), [line 28](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php#L28-L28)

### `Domain.Dashboard.Templates.home.tpl.afterWelcomeMessage`


Source: [app/Domain/Dashboard/Templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php), [line 55](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php#L55-L55)

### `Domain.Dashboard.Templates.home.tpl.afterWelcomeMessageBox`


Source: [app/Domain/Dashboard/Templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php), [line 59](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php#L59-L59)

### `Domain.Dashboard.Templates.home.tpl.afterGroupByDropdown`


Source: [app/Domain/Dashboard/Templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php), [line 95](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php#L95-L95)

### `Domain.Dashboard.Templates.home.tpl.beforeCalendar`


Source: [app/Domain/Dashboard/Templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php), [line 312](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php#L312-L312)

### `Domain.Dashboard.Templates.home.tpl.scripts.afterOpen`


Source: [app/Domain/Dashboard/Templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php), [line 412](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php#L412-L412)

### `Domain.Dashboard.Templates.home.tpl.scripts.beforeClose`


Source: [app/Domain/Dashboard/Templates/home.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php), [line 651](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Templates/home.tpl.php#L651-L651)

### `Domain.Goalcanvas.Templates.canvasDialog.tpl.beforeMeasureGoalContainer`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$canvasItem` |  | 

Source: [app/Domain/Goalcanvas/Templates/canvasDialog.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Goalcanvas/Templates/canvasDialog.tpl.php), [line 89](https://github.com/Leantime/leantime/blob/master/app/Domain/Goalcanvas/Templates/canvasDialog.tpl.php#L89-L89)

### `Domain.Setting.Templates.editCompanySettings.tpl.beforeTelemetrySettings`


Source: [app/Domain/Setting/Templates/editCompanySettings.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Setting/Templates/editCompanySettings.tpl.php), [line 75](https://github.com/Leantime/leantime/blob/master/app/Domain/Setting/Templates/editCompanySettings.tpl.php#L75-L75)

### `Domain.Reports.Services.Reports.getAnonymousTelemetry.beforeTelemetrySend`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$companyId` |  | 

Source: [app/Domain/Reports/Services/Reports.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Reports/Services/Reports.php), [line 194](https://github.com/Leantime/leantime/blob/master/app/Domain/Reports/Services/Reports.php#L194-L194)

### `Domain.Users.Services.Users.editUser.editUser`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`["id" => $id, "values" => $values]` |  | 

Source: [app/Domain/Users/Services/Users.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php), [line 72](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php#L72-L72)

### `Domain.Users.Services.Users.editOwn.editUser`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`["id" => $id, "values" => $values]` |  | 

Source: [app/Domain/Users/Services/Users.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php), [line 331](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php#L331-L331)

### `Domain.Api.Controllers.NewApiKey.init.api_key_init`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/Domain/Api/Controllers/NewApiKey.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Api/Controllers/NewApiKey.php), [line 35](https://github.com/Leantime/leantime/blob/master/app/Domain/Api/Controllers/NewApiKey.php#L35-L35)

### `Domain.Api.Controllers.ApiKey.init.api_key_init`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/Domain/Api/Controllers/ApiKey.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Api/Controllers/ApiKey.php), [line 32](https://github.com/Leantime/leantime/blob/master/app/Domain/Api/Controllers/ApiKey.php#L32-L32)

### `Core.Bootloader.boot.after_install`


Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 159](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L159-L159)

### `Core.Bootloader.boot.beginning`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['bootloader' => $this]` |  | 

Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 164](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L164-L164)

### `Core.Bootloader.boot.end`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['bootloader' => $this]` |  | 

Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 172](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L172-L172)

### `Core.Bootloader.getApplication.config_initialized`


Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 204](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L204-L204)

### `Core.Bootloader.getApplication.session_initialized`


Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 211](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L211-L211)

### `Core.Bootloader.checkIfUpdated.system_update`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['dbVersion' => $dbVersion, 'settingsDbVersion' => $settingsDbVersion]` |  | 

Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 344](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L344-L344)

### `Core.Bootloader.handleRequest.before_api_request`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['application' => $this]` |  | 

Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 379](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L379-L379)

### `Core.Bootloader.handleRequest.logged_in`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['application' => $this]` |  | 

Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 420](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L420-L420)

### `Core.Repository.__call.beforeExecute`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php), [line 172](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php#L172-L172)

### `Core.Repository.__call.afterExecute`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php), [line 185](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php#L185-L185)

### `Core.Mailer.dispatchMailerHook.{$hook}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 256](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L256-L256)

### `Core.Mailer.sendMail.sendMailTo`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$to` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 279](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L279-L279)

### `Core.Mailer.sendMail.sendMailFrom`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$from` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 280](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L280-L280)

### `Core.Mailer.sendMail.bodyTemplate`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$bodyTemplate` |  | 
`[['companyColor' => $this->companyColor, 'logoUrl' => $inlineLogoContent, 'languageHiText' => $this->language->__('email_notifications.hi'), 'emailContentsHtml' => nl2br($this->html), 'unsubLink' => sprintf($this->language->__('email_notifications.unsubscribe'), BASE_URL . '/users/editOwn/')]]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 339](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L339-L351)

### `Core.Mailer.sendMail.altBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->text` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 355](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L355-L359)

### `Core.Template.displayNotification.notification_displayed`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$note` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 641](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L641-L641)

### `Core.Template.displayInlineNotification.notification_displayed`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$note` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 690](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L690-L690)

### `Core.Template.dispatchTplHook.{$hookName}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$this->hookContext` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 1092](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L1092-L1092)

### `Core.Eventhelpers.dispatch_event.{$hook}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` |  | 
`static::get_event_context($function)` |  | 

Source: [app/Core/Eventhelpers.php](https://github.com/Leantime/leantime/blob/master/app/Core/Eventhelpers.php), [line 29](https://github.com/Leantime/leantime/blob/master/app/Core/Eventhelpers.php#L29-L29)

### `Core.HtmxController.__construct.begin`


Source: [app/Core/HtmxController.php](https://github.com/Leantime/leantime/blob/master/app/Core/HtmxController.php), [line 39](https://github.com/Leantime/leantime/blob/master/app/Core/HtmxController.php#L39-L39)

### `Core.HtmxController.__construct.end`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/Core/HtmxController.php](https://github.com/Leantime/leantime/blob/master/app/Core/HtmxController.php), [line 47](https://github.com/Leantime/leantime/blob/master/app/Core/HtmxController.php#L47-L47)

### `Core.HtmxController.executeActions.before_init`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['controller' => $this]` |  | 

Source: [app/Core/HtmxController.php](https://github.com/Leantime/leantime/blob/master/app/Core/HtmxController.php), [line 60](https://github.com/Leantime/leantime/blob/master/app/Core/HtmxController.php#L60-L60)

### `Core.HtmxController.executeActions.before_action`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['controller' => $this]` |  | 

Source: [app/Core/HtmxController.php](https://github.com/Leantime/leantime/blob/master/app/Core/HtmxController.php), [line 65](https://github.com/Leantime/leantime/blob/master/app/Core/HtmxController.php#L65-L65)

### `Core.Controller.__construct.begin`


Source: [app/Core/Controller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller.php), [line 50](https://github.com/Leantime/leantime/blob/master/app/Core/Controller.php#L50-L50)

### `Core.Controller.__construct.end`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/Core/Controller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller.php), [line 62](https://github.com/Leantime/leantime/blob/master/app/Core/Controller.php#L62-L62)

### `Core.Controller.executeActions.before_init`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` |  | 

Source: [app/Core/Controller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller.php), [line 84](https://github.com/Leantime/leantime/blob/master/app/Core/Controller.php#L84-L84)

### `Core.Controller.executeActions.before_action`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` |  | 

Source: [app/Core/Controller.php](https://github.com/Leantime/leantime/blob/master/app/Core/Controller.php), [line 89](https://github.com/Leantime/leantime/blob/master/app/Core/Controller.php#L89-L89)

## Filters

### `Domain.Projects.Controllers.ChangeCurrentProject.get.defaultProjectUrl`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$defaultURL` |  | 
`$project` |  | 

Source: [app/Domain/Projects/Controllers/ChangeCurrentProject.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Controllers/ChangeCurrentProject.php), [line 46](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Controllers/ChangeCurrentProject.php#L46-L46)

### `Domain.Projects.Services.Projects.getProjectTypes.filterProjectType`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$types` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 86](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L86-L86)

### `Domain.Projects.Services.Projects.getProjectHierarchyAssignedToUser.afterLoadingProjects`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projects` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 490](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L490-L490)

### `Domain.Projects.Services.Projects.getProjectHierarchyAssignedToUser.afterPopulatingProjectHierarchy`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projectHierarchy` |  | 
`array("projects" => $projects)` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 496](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L496-L496)

### `Domain.Projects.Services.Projects.getProjectHierarchyAssignedToUser.afterPopulatingProjectFavorites`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$favorites` |  | 
`array("projects" => $projects)` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 505](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L505-L505)

### `Domain.Projects.Services.Projects.getProjectHierarchyAvailableToUser.afterLoadingProjects`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projects` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 536](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L536-L536)

### `Domain.Projects.Services.Projects.getProjectHierarchyAvailableToUser.afterPopulatingProjectHierarchy`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projectHierarchy` |  | 
`array("projects" => $projects)` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 542](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L542-L542)

### `Domain.Projects.Services.Projects.getProjectAvatar.afterGettingAvatar`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$avatar` |  | 
`array("projectId" => $id)` |  | 

Source: [app/Domain/Projects/Services/Projects.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php), [line 1215](https://github.com/Leantime/leantime/blob/master/app/Domain/Projects/Services/Projects.php#L1215-L1215)

### `Domain.Install.Controllers.Update.get.customUpdatePage`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`'install.update'` |  | 

Source: [app/Domain/Install/Controllers/Update.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Install/Controllers/Update.php), [line 49](https://github.com/Leantime/leantime/blob/master/app/Domain/Install/Controllers/Update.php#L49-L49)

### `Domain.Connector.Services.Providers.loadProviders.providerList`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`[]` |  | 

Source: [app/Domain/Connector/Services/Providers.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Connector/Services/Providers.php), [line 31](https://github.com/Leantime/leantime/blob/master/app/Domain/Connector/Services/Providers.php#L31-L31)

### `Domain.Timesheets.Repositories.Timesheets.addTime.sql`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$query` |  | 

Source: [app/Domain/Timesheets/Repositories/Timesheets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php), [line 387](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php#L387-L387)

### `Domain.Timesheets.Repositories.Timesheets.UpdateHours.sql`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$query` |  | 

Source: [app/Domain/Timesheets/Repositories/Timesheets.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php), [line 556](https://github.com/Leantime/leantime/blob/master/app/Domain/Timesheets/Repositories/Timesheets.php#L556-L556)

### `Domain.Plugins.Controllers.CssLoader.get.pluginCss`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$cssFiles` |  | 

Source: [app/Domain/Plugins/Controllers/CssLoader.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Controllers/CssLoader.php), [line 34](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Controllers/CssLoader.php#L34-L34)

### `Domain.Plugins.Services.Plugins.getAllPlugins.beforeReturnAllPlugins`

*Filters array of plugins from database and config before returning*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$avatar` |  | 
`array("allPlugins" => $installedPluginsById)` |  | 

Source: [app/Domain/Plugins/Services/Plugins.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php), [line 127](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php#L127-L131)

### `Domain.Plugins.Services.Plugins.getEnabledPlugins.beforeReturnCachedPlugins`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$avatar` |  | 
`array("enabledPlugins" => $_SESSION['enabledPlugins'])` |  | 

Source: [app/Domain/Plugins/Services/Plugins.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php), [line 164](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php#L164-L164)

### `Domain.Plugins.Services.Plugins.getEnabledPlugins.beforeReturnCachedPlugins`

*Filters session array of enabled plugins before returning*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$avatar` |  | 
`array("enabledPlugins" => $_SESSION['enabledPlugins'])` |  | 

Source: [app/Domain/Plugins/Services/Plugins.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php), [line 170](https://github.com/Leantime/leantime/blob/master/app/Domain/Plugins/Services/Plugins.php#L170-L174)

### `Domain.Wiki.Templates.templates.tpl.documentTemplates`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$templates` |  | 

Source: [app/Domain/Wiki/Templates/templates.tpl.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Wiki/Templates/templates.tpl.php), [line 470](https://github.com/Leantime/leantime/blob/master/app/Domain/Wiki/Templates/templates.tpl.php#L470-L470)

### `Domain.Auth.Services.Auth.setUserSession.user_session_vars`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['role' => $this->role, 'id' => $this->userId, 'name' => $this->name, 'profileId' => $this->profileId, 'mail' => $this->mail, 'clientId' => $this->clientId, 'settings' => $this->settings, 'twoFAEnabled' => $this->twoFAEnabled, 'twoFAVerified' => false, 'twoFASecret' => $this->twoFASecret, 'isLdap' => $isLdap, 'createdOn' => $user['createdOn'] ?? '', 'modified' => $user['modified'] ?? date("Y-m-d H:i:s")]` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 331](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L331-L345)

### `Domain.Auth.Services.Auth.logout.sessions_vars_to_destroy`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['userdata', 'template', 'subdomainData', 'currentProject', 'currentSprint', 'projectsettings', 'currentSubscriptions', 'lastTicketView', 'lastFilterdTicketTableView']` |  | 

Source: [app/Domain/Auth/Services/Auth.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php), [line 401](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Services/Auth.php#L401-L411)

### `Domain.Auth.Models.Roles.getFilteredRoles.available_roles`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`self::$roleKeys` |  | 

Source: [app/Domain/Auth/Models/Roles.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Models/Roles.php), [line 35](https://github.com/Leantime/leantime/blob/master/app/Domain/Auth/Models/Roles.php#L35-L35)

### `Domain.Dashboard.Controllers.Home.get.ticketGroups`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$tickets` |  | 

Source: [app/Domain/Dashboard/Controllers/Home.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Controllers/Home.php), [line 117](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Controllers/Home.php#L117-L117)

### `Domain.Dashboard.Controllers.Show.get.dashboardRedirect`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"/dashboard/show"` |  | 
`array("type" => $project["type"])` |  | 

Source: [app/Domain/Dashboard/Controllers/Show.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Controllers/Show.php), [line 83](https://github.com/Leantime/leantime/blob/master/app/Domain/Dashboard/Controllers/Show.php#L83-L83)

### `Domain.Menu.Repositories.Menu.getMenuStructure.menuStructures`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->menuStructures` |  | 
`array("menuType" => $menuType)` |  | 

Source: [app/Domain/Menu/Repositories/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php), [line 211](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Repositories/Menu.php#L211-L211)

### `Domain.Menu.Services.Menu.getProjectTypeAvatars.projectTypeAvatars`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projectTypeAvatars` |  | 

Source: [app/Domain/Menu/Services/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Services/Menu.php), [line 179](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Services/Menu.php#L179-L179)

### `Domain.Menu.Services.Menu.getProjectSelectorGroupingOptions.projectSelectorGrouping`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$projectSelectGrouping` |  | 

Source: [app/Domain/Menu/Services/Menu.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Services/Menu.php), [line 195](https://github.com/Leantime/leantime/blob/master/app/Domain/Menu/Services/Menu.php#L195-L195)

### `Domain.Reactions.Models.Reactions.getReactions.available_reactions`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`self::$reactionTypes` |  | 

Source: [app/Domain/Reactions/Models/Reactions.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Reactions/Models/Reactions.php), [line 62](https://github.com/Leantime/leantime/blob/master/app/Domain/Reactions/Models/Reactions.php#L62-L62)

### `Domain.Reactions.Models.Reactions.getReactionsByType.available_reactions`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`self::$reactionTypes` |  | 

Source: [app/Domain/Reactions/Models/Reactions.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Reactions/Models/Reactions.php), [line 75](https://github.com/Leantime/leantime/blob/master/app/Domain/Reactions/Models/Reactions.php#L75-L75)

### `Domain.Users.Services.Users.getAll.getAll`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$users` |  | 

Source: [app/Domain/Users/Services/Users.php](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php), [line 93](https://github.com/Leantime/leantime/blob/master/app/Domain/Users/Services/Users.php#L93-L93)

### `Core.Fileupload.getPublicFilesPath.relative_path`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"/../../public/userfiles"` |  | 

Source: [app/Core/Fileupload.php](https://github.com/Leantime/leantime/blob/master/app/Core/Fileupload.php), [line 179](https://github.com/Leantime/leantime/blob/master/app/Core/Fileupload.php#L179-L179)

### `Core.Bootloader.getApplication.initialized`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->app` |  | 
`['bootloader' => $this]` |  | 

Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 218](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L218-L218)

### `Core.Bootloader.loadHeaders.headers`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['X-Frame-Options' => 'SAMEORIGIN', 'X-XSS-Protection' => '1; mode=block', 'X-Content-Type-Options' => 'nosniff', 'Access-Control-Allow-Origin' => BASE_URL]` |  | 

Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 233](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L233-L238)

### `Core.Bootloader.handleRequest.publicActions`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->publicActions` |  | 
`['bootloader' => $this]` |  | 

Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 369](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L369-L369)

### `Core.Bootloader.cronExec.increment`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`300` |  | 

Source: [app/Core/Bootloader.php](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php), [line 466](https://github.com/Leantime/leantime/blob/master/app/Core/Bootloader.php#L466-L466)

### `Core.Repository.prepare.sql`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$sql` |  | 
`$this->getArgs(['prepareArgs' => $args])` |  | 
`4` |  | 

Source: [app/Core/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php), [line 85](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php#L85-L90)

### `Core.Repository.bindValue.binding.str_replace()`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$replace` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php), [line 104](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php#L104-L109)

### `Core.Repository.getArgs.args`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$args` |  | 
`[]` |  | 
`5` |  | 

Source: [app/Core/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php), [line 150](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php#L150-L150)

### `Core.Repository.__call.stmn`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->stmn` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php), [line 174](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php#L174-L174)

### `Core.Repository.__call.method`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$method` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php), [line 175](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php#L175-L175)

### `Core.Repository.__call.return`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$values` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/Core/Repository.php](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php), [line 187](https://github.com/Leantime/leantime/blob/master/app/Core/Repository.php#L187-L187)

### `Core.Mailer.dispatchMailerHook.{$hook}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$additional_params` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 254](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L254-L254)

### `Core.Mailer.sendMail.sendMailTo`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$to` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 279](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L279-L279)

### `Core.Mailer.sendMail.sendMailFrom`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$from` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 280](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L280-L280)

### `Core.Mailer.sendMail.bodyTemplate`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$bodyTemplate` |  | 
`[['companyColor' => $this->companyColor, 'logoUrl' => $inlineLogoContent, 'languageHiText' => $this->language->__('email_notifications.hi'), 'emailContentsHtml' => nl2br($this->html), 'unsubLink' => sprintf($this->language->__('email_notifications.unsubscribe'), BASE_URL . '/users/editOwn/')]]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 339](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L339-L351)

### `Core.Mailer.sendMail.altBody`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->text` |  | 
`[]` |  | 

Source: [app/Core/Mailer.php](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php), [line 355](https://github.com/Leantime/leantime/blob/master/app/Core/Mailer.php#L355-L359)

### `Core.Template.assign.var.{$name}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$value` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 389](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L389-L389)

### `Core.Template.getTemplatePath.template_path__{$namespace}_{$path}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"{$namespace}::{$path}"` |  | 
`['namespace' => $namespace, 'path' => $path]` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 425](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L425-L432)

### `Core.Template.display.template`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$template` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 468](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L468-L468)

### `Core.Template.display.template.{$template}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$template` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 469](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L469-L469)

### `Core.Template.display.content`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$content` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 500](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L500-L500)

### `Core.Template.display.content.{$template}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$content` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 501](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L501-L501)

### `Core.Template.confirmLayoutName.layout`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$layout` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 515](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L515-L515)

### `Core.Template.confirmLayoutName.layout.{$template}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$layout` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 516](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L516-L516)

### `Core.Template.displayNotification.message`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$language->__($message_id)` |  | 
`$note` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 620](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L620-L624)

### `Core.Template.displayNotification.message_{$message_id}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$message` |  | 
`$note` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 625](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L625-L629)

### `Core.Template.displayInlineNotification.message`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$language->__($message_id)` |  | 
`$note` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 665](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L665-L669)

### `Core.Template.displayInlineNotification.message_{$message_id}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$message` |  | 
`$note` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 670](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L670-L674)

### `Core.Template.dispatchTplHook.{$hookName}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$available_params` |  | 
`$this->hookContext` |  | 

Source: [app/Core/Template.php](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php), [line 1089](https://github.com/Leantime/leantime/blob/master/app/Core/Template.php#L1089-L1089)

### `Core.Eventhelpers.dispatch_filter.{$hook}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$available_params` |  | 
`static::get_event_context($function)` |  | 

Source: [app/Core/Eventhelpers.php](https://github.com/Leantime/leantime/blob/master/app/Core/Eventhelpers.php), [line 46](https://github.com/Leantime/leantime/blob/master/app/Core/Eventhelpers.php#L46-L46)

### `Core.Theme.getLayoutFilename.filepath`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$filename` |  | 

Source: [app/Core/Theme.php](https://github.com/Leantime/leantime/blob/master/app/Core/Theme.php), [line 287](https://github.com/Leantime/leantime/blob/master/app/Core/Theme.php#L287-L287)

### `Core.Language.__construct.languages`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$parsedLangList` |  | 

Source: [app/Core/Language.php](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php), [line 115](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php#L115-L115)

### `Core.Language.readIni.language_resources`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$_SESSION['cache.language_resources_' . $this->language . '_' . $this->theme]` |  | 
`['language' => $this->language, 'theme' => $this->theme]` |  | 

Source: [app/Core/Language.php](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php), [line 249](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php#L249-L256)

### `Core.Language.readIni.language_resources`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->ini_array` |  | 
`['language' => $this->language, 'theme' => $this->theme]` |  | 

Source: [app/Core/Language.php](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php), [line 284](https://github.com/Leantime/leantime/blob/master/app/Core/Language.php#L284-L291)



