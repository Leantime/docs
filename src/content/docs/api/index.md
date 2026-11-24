---
title: "JSON-RPC API reference"
description: "Every Leantime JSON-RPC 2.0 namespace and service, with links to the method reference for tasks, projects, timesheets, users, calendars and more."
---

To create a key and make your first call, see [Use the Leantime API](/api/usage/).

RPC Methods are the primary endpoint definition and follow the structure
`leantime.rpc`.`Module`.`Service`.`Method`

If `Module` and `Service` have the same name they can be summarized to `leantime.rpc`.`service`.`method`


## `leantime.rpc.Blueprints`


| Available Services | Description |
|---    |---          |
| [Blueprints](/api/classes/leantime/domain/blueprints/services/blueprints/) | Blueprints service - business logic for unified canvas boards.|
| [BlueprintsExport](/api/classes/leantime/domain/blueprints/services/blueprintsexport/) | BlueprintsExport service - builds the XML export for a blueprint canvas board.|

## `leantime.rpc.Calendar`


| Available Services | Description |
|---    |---          |
| [Calendar](/api/classes/leantime/domain/calendar/services/calendar/) | Calendar service: personal events, external-calendar subscriptions, and the public iCal feed.|

## `leantime.rpc.Canvas`


| Available Services | Description |
|---    |---          |
| [Canvas](/api/classes/leantime/domain/canvas/services/canvas/) | Thin backwards-compatibility shim over the Blueprints service.|

## `leantime.rpc.Clients`


| Available Services | Description |
|---    |---          |
| [Clients](/api/classes/leantime/domain/clients/services/clients/) | Client service - Business logic for client management.|

## `leantime.rpc.Comments`


| Available Services | Description |
|---    |---          |
| [Comments](/api/classes/leantime/domain/comments/services/comments/) | |



## `leantime.rpc.Dashboard`


| Available Services | Description |
|---    |---          |
| [Dashboard](/api/classes/leantime/domain/dashboard/services/dashboard/) | Dashboard service - business logic backing the project dashboard view.|

## `leantime.rpc.Files`


| Available Services | Description |
|---    |---          |
| [Files](/api/classes/leantime/domain/files/services/files/) | |

## `leantime.rpc.Goalcanvas`


| Available Services | Description |
|---    |---          |
| [Goalcanvas](/api/classes/leantime/domain/goalcanvas/services/goalcanvas/) | Goalcanvas (Goals / OKRs) service.|

## `leantime.rpc.Ideas`


| Available Services | Description |
|---    |---          |
| [Ideas](/api/classes/leantime/domain/ideas/services/ideas/) | Ideas service - business logic for idea boards and idea items.|

## `leantime.rpc.Notifications`


| Available Services | Description |
|---    |---          |
| [Messengers](/api/classes/leantime/domain/notifications/services/messengers/) | Posts project notifications to the messenger webhooks a project has configured (Slack,<br />Mattermost, Zulip, Discord, Telegram).|
| [News](/api/classes/leantime/domain/notifications/services/news/) | |
| [Notifications](/api/classes/leantime/domain/notifications/services/notifications/) | |


## `leantime.rpc.Plugins`


| Available Services | Description |
|---    |---          |
| [Plugins](/api/classes/leantime/domain/plugins/services/plugins/) | |

## `leantime.rpc.Projects`


| Available Services | Description |
|---    |---          |
| [Projects](/api/classes/leantime/domain/projects/services/projects/) | Projects service (the company project god-service) + the engine&#039;s project-access provider.|


## `leantime.rpc.Reactions`


| Available Services | Description |
|---    |---          |
| [Reactions](/api/classes/leantime/domain/reactions/services/reactions/) | Reactions service.|

## `leantime.rpc.Reports`


| Available Services | Description |
|---    |---          |
| [ReportEngine](/api/classes/leantime/domain/reports/services/reportengine/) | Shared, period-aware reporting engine feeding the project, plan and strategy report screens.|
| [Reports](/api/classes/leantime/domain/reports/services/reports/) | Reports service: per-project report aggregation (burndown, ticket-status history) plus the<br />system-level daily-ingestion and telemetry tasks.|

## `leantime.rpc.Search`


| Available Services | Description |
|---    |---          |
| [Search](/api/classes/leantime/domain/search/services/search/) | Global search across entity types. Owns the provider registry, the access scope and the<br />shared filter vocabulary; providers own their queries.|

## `leantime.rpc.Setting`


| Available Services | Description |
|---    |---          |
| [Setting](/api/classes/leantime/domain/setting/services/setting/) | |

## `leantime.rpc.Sprints`


| Available Services | Description |
|---    |---          |
| [Sprints](/api/classes/leantime/domain/sprints/services/sprints/) | |

## `leantime.rpc.Tags`


| Available Services | Description |
|---    |---          |
| [Tags](/api/classes/leantime/domain/tags/services/tags/) | |

## `leantime.rpc.Tickets`


| Available Services | Description |
|---    |---          |
| [TicketHistory](/api/classes/leantime/domain/tickets/services/tickethistory/) | Change history of a ticket (the field changes recorded in zp_tickethistory), prepared for display.|
| [Tickets](/api/classes/leantime/domain/tickets/services/tickets/) | |

## `leantime.rpc.Timesheets`


| Available Services | Description |
|---    |---          |
| [Timesheets](/api/classes/leantime/domain/timesheets/services/timesheets/) | Timesheets service.|


## `leantime.rpc.Users`


| Available Services | Description |
|---    |---          |
| [Users](/api/classes/leantime/domain/users/services/users/) | |

## `leantime.rpc.Widgets`


| Available Services | Description |
|---    |---          |
| [Dashboard](/api/classes/leantime/domain/widgets/services/dashboard/) | Class Dashboard|
| [Widgets](/api/classes/leantime/domain/widgets/services/widgets/) | |

## `leantime.rpc.Wiki`


| Available Services | Description |
|---    |---          |
| [Wiki](/api/classes/leantime/domain/wiki/services/wiki/) | |

---
> Automatically generated from source code comments on 2026-11-22 using [phpDocumentor](http://www.phpdoc.org/)

