---
title: Leantime Api
footer: false
---

# Leantime Api JsonRPC 2.0 namespaces

To create a key and make your first call, see [Use the Leantime API](api/usage.md).

RPC Methods are the primary endpoint definition and follow the structure
`leantime.rpc`.`Module`.`Service`.`Method`

If `Module` and `Service` have the same name they can be summarized to `leantime.rpc`.`service`.`method`


## `leantime.rpc.Blueprints`


| Available Services | Description |
|---    |---          |
| [Blueprints](api/classes/Leantime/Domain/Blueprints/Services/Blueprints.md) | Blueprints service - business logic for unified canvas boards.|
| [BlueprintsExport](api/classes/Leantime/Domain/Blueprints/Services/BlueprintsExport.md) | BlueprintsExport service - builds the XML export for a blueprint canvas board.|

## `leantime.rpc.Calendar`


| Available Services | Description |
|---    |---          |
| [Calendar](api/classes/Leantime/Domain/Calendar/Services/Calendar.md) | Calendar service: personal events, external-calendar subscriptions, and the public iCal feed.|

## `leantime.rpc.Canvas`


| Available Services | Description |
|---    |---          |
| [Canvas](api/classes/Leantime/Domain/Canvas/Services/Canvas.md) | Thin backwards-compatibility shim over the Blueprints service.|

## `leantime.rpc.Clients`


| Available Services | Description |
|---    |---          |
| [Clients](api/classes/Leantime/Domain/Clients/Services/Clients.md) | Client service - Business logic for client management.|

## `leantime.rpc.Comments`


| Available Services | Description |
|---    |---          |
| [Comments](api/classes/Leantime/Domain/Comments/Services/Comments.md) | |



## `leantime.rpc.Dashboard`


| Available Services | Description |
|---    |---          |
| [Dashboard](api/classes/Leantime/Domain/Dashboard/Services/Dashboard.md) | Dashboard service - business logic backing the project dashboard view.|

## `leantime.rpc.Files`


| Available Services | Description |
|---    |---          |
| [Files](api/classes/Leantime/Domain/Files/Services/Files.md) | |

## `leantime.rpc.Goalcanvas`


| Available Services | Description |
|---    |---          |
| [Goalcanvas](api/classes/Leantime/Domain/Goalcanvas/Services/Goalcanvas.md) | Goalcanvas (Goals / OKRs) service.|

## `leantime.rpc.Ideas`


| Available Services | Description |
|---    |---          |
| [Ideas](api/classes/Leantime/Domain/Ideas/Services/Ideas.md) | Ideas service - business logic for idea boards and idea items.|

## `leantime.rpc.Notifications`


| Available Services | Description |
|---    |---          |
| [Messengers](api/classes/Leantime/Domain/Notifications/Services/Messengers.md) | Posts project notifications to the messenger webhooks a project has configured (Slack,<br />Mattermost, Zulip, Discord, Telegram).|
| [News](api/classes/Leantime/Domain/Notifications/Services/News.md) | |
| [Notifications](api/classes/Leantime/Domain/Notifications/Services/Notifications.md) | |

## `leantime.rpc.Oauth`


| Available Services | Description |
|---    |---          |
| [ConnectedApps](api/classes/Leantime/Domain/Oauth/Services/ConnectedApps.md) | The apps (Claude, ChatGPT, …) a user connected to their Leantime account through OAuth.|


## `leantime.rpc.Plugins`


| Available Services | Description |
|---    |---          |
| [Plugins](api/classes/Leantime/Domain/Plugins/Services/Plugins.md) | |

## `leantime.rpc.Projects`


| Available Services | Description |
|---    |---          |
| [Projects](api/classes/Leantime/Domain/Projects/Services/Projects.md) | Projects service (the company project god-service) + the engine&#039;s project-access provider.|


## `leantime.rpc.Reactions`


| Available Services | Description |
|---    |---          |
| [Reactions](api/classes/Leantime/Domain/Reactions/Services/Reactions.md) | Reactions service.|

## `leantime.rpc.Reports`


| Available Services | Description |
|---    |---          |
| [ReportEngine](api/classes/Leantime/Domain/Reports/Services/ReportEngine.md) | Shared, period-aware reporting engine feeding the project, plan and strategy report screens.|
| [Reports](api/classes/Leantime/Domain/Reports/Services/Reports.md) | Reports service: per-project report aggregation (burndown, ticket-status history) plus the<br />system-level daily-ingestion and telemetry tasks.|

## `leantime.rpc.Search`


| Available Services | Description |
|---    |---          |
| [Search](api/classes/Leantime/Domain/Search/Services/Search.md) | Global search across entity types. Owns the provider registry, the access scope and the<br />shared filter vocabulary; providers own their queries.|

## `leantime.rpc.Setting`


| Available Services | Description |
|---    |---          |
| [Setting](api/classes/Leantime/Domain/Setting/Services/Setting.md) | |

## `leantime.rpc.Sprints`


| Available Services | Description |
|---    |---          |
| [Sprints](api/classes/Leantime/Domain/Sprints/Services/Sprints.md) | |

## `leantime.rpc.Tags`


| Available Services | Description |
|---    |---          |
| [Tags](api/classes/Leantime/Domain/Tags/Services/Tags.md) | |

## `leantime.rpc.Tickets`


| Available Services | Description |
|---    |---          |
| [TicketHistory](api/classes/Leantime/Domain/Tickets/Services/TicketHistory.md) | Change history of a ticket (the field changes recorded in zp_tickethistory), prepared for display.|
| [Tickets](api/classes/Leantime/Domain/Tickets/Services/Tickets.md) | |

## `leantime.rpc.Timesheets`


| Available Services | Description |
|---    |---          |
| [Timesheets](api/classes/Leantime/Domain/Timesheets/Services/Timesheets.md) | Timesheets service.|


## `leantime.rpc.Users`


| Available Services | Description |
|---    |---          |
| [Users](api/classes/Leantime/Domain/Users/Services/Users.md) | |

## `leantime.rpc.Widgets`


| Available Services | Description |
|---    |---          |
| [Dashboard](api/classes/Leantime/Domain/Widgets/Services/Dashboard.md) | Class Dashboard|
| [Widgets](api/classes/Leantime/Domain/Widgets/Services/Widgets.md) | |

## `leantime.rpc.Wiki`


| Available Services | Description |
|---    |---          |
| [Wiki](api/classes/Leantime/Domain/Wiki/Services/Wiki.md) | |

---
> Automatically generated from source code comments on 2026-11-23 using [phpDocumentor](http://www.phpdoc.org/)

