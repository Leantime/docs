---
title: Leantime Code Reference
footer: false
---

# Leantime Code Reference

This is an automatically generated documentation for **Leantime Code Reference**.



## \Leantime\Command

### Classes

| Class | Description |
|---    |---          |
| [AbstractPluginCommand](technical/classes/Leantime/Command/AbstractPluginCommand.md) | Class AbstractPluginCommand|
| [AddUserCommand](technical/classes/Leantime/Command/AddUserCommand.md) | Class AddUserCommand|
| [BackupDbCommand](technical/classes/Leantime/Command/BackupDbCommand.md) | Class BackupDbCommand|
| [DisablePluginCommand](technical/classes/Leantime/Command/DisablePluginCommand.md) | Class DisablePluginCommand|
| [EnablePluginCommand](technical/classes/Leantime/Command/EnablePluginCommand.md) | Class EnablePluginCommand|
| [InstallPluginCommand](technical/classes/Leantime/Command/InstallPluginCommand.md) | Class InstallPluginCommand|
| [ListPluginCommand](technical/classes/Leantime/Command/ListPluginCommand.md) | Class ListPluginCommand|
| [MigrateCommand](technical/classes/Leantime/Command/MigrateCommand.md) | Represents the MigrateCommand class.|
| [RemovePluginCommand](technical/classes/Leantime/Command/RemovePluginCommand.md) | Class RemovePluginCommand|
| [SaveSettingCommand](technical/classes/Leantime/Command/SaveSettingCommand.md) | Class SaveSettingCommand|
| [TestEmailCommand](technical/classes/Leantime/Command/TestEmailCommand.md) | Class TestEmailCommand|
| [UpdateLeantime](technical/classes/Leantime/Command/UpdateLeantime.md) | Class UpdateLeantime|




## \Leantime\Config

### Classes

| Class | Description |
|---    |---          |
| [Config](technical/classes/Leantime/Config/Config.md) | |




## \Leantime\Core

### Classes

| Class | Description |
|---    |---          |
| [Fileupload](technical/classes/Leantime/Core/Fileupload.md) | Fileupload class - Data filuploads|
| [Language](technical/classes/Leantime/Core/Language.md) | Either takes the translation from ini_array or the default|
| [Mailer](technical/classes/Leantime/Core/Mailer.md) | Mail class - mails with php mail()|
| [Plugins](technical/classes/Leantime/Core/Plugins.md) | Plugins class|
| [Template](technical/classes/Leantime/Core/Template.md) | Template class - Template routing|
| [Theme](technical/classes/Leantime/Core/Theme.md) | theme - Engine for handling themes|




## \Leantime\Core\Bootstrap

### Classes

| Class | Description |
|---    |---          |
| [Application](technical/classes/Leantime/Core/Bootstrap/Application.md) | Application Class - IoC Container for the application|
| [Bootloader](technical/classes/Leantime/Core/Bootstrap/Bootloader.md) | Bootloader|




## \Leantime\Core\Configuration

### Classes

| Class | Description |
|---    |---          |
| [AppSettings](technical/classes/Leantime/Core/Configuration/AppSettings.md) | appSettings class - System appSettings|
| [DefaultConfig](technical/classes/Leantime/Core/Configuration/DefaultConfig.md) | Default Configuration Class|
| [Environment](technical/classes/Leantime/Core/Configuration/Environment.md) | environment - class To handle environment variables|




## \Leantime\Core\Console

### Classes

| Class | Description |
|---    |---          |
| [CliRequest](technical/classes/Leantime/Core/Console/CliRequest.md) | Incoming Request information|
| [ConsoleKernel](technical/classes/Leantime/Core/Console/ConsoleKernel.md) | |




## \Leantime\Core\Contracts

### Classes

| Class | Description |
|---    |---          |
| [DTO](technical/classes/Leantime/Core/Contracts/DTO.md) | |



#### Interfaces

| Interface | Description |
|---    |---          |
| [Service](technical/classes/Leantime/Core/Contracts/Service.md) | Service Interface - Base interface for all services|



## \Leantime\Core\Controller

### Classes

| Class | Description |
|---    |---          |
| [Composer](technical/classes/Leantime/Core/Controller/Composer.md) | |
| [Controller](technical/classes/Leantime/Core/Controller/Controller.md) | Controller Class - Base class For all controllers|
| [Frontcontroller](technical/classes/Leantime/Core/Controller/Frontcontroller.md) | Frontcontroller class|
| [HtmxController](technical/classes/Leantime/Core/Controller/HtmxController.md) | HtmxController Class - Base class For all htmx controllers|




## \Leantime\Core\Db

### Classes

| Class | Description |
|---    |---          |
| [Db](technical/classes/Leantime/Core/Db/Db.md) | Database Class - Very simple abstraction layer for pdo connection|
| [Repository](technical/classes/Leantime/Core/Db/Repository.md) | Repository|




## \Leantime\Core\Events

### Classes

| Class | Description |
|---    |---          |
| [EventDispatcher](technical/classes/Leantime/Core/Events/EventDispatcher.md) | EventDispatcher class - Handles all events and filters|


#### Traits

| Trait | Description |
|---    |---          |
| [DispatchesEvents](technical/classes/Leantime/Core/Events/DispatchesEvents.md) | |




## \Leantime\Core\Exceptions

### Classes

| Class | Description |
|---    |---          |
| [ExceptionHandler](technical/classes/Leantime/Core/Exceptions/ExceptionHandler.md) | |
| [HandleExceptions](technical/classes/Leantime/Core/Exceptions/HandleExceptions.md) | |
| [InvalidArgumentException](technical/classes/Leantime/Core/Exceptions/InvalidArgumentException.md) | |
| [MissingParameterException](technical/classes/Leantime/Core/Exceptions/MissingParameterException.md) | |
| [ReportableHandler](technical/classes/Leantime/Core/Exceptions/ReportableHandler.md) | |
| [WhoopsHandler](technical/classes/Leantime/Core/Exceptions/WhoopsHandler.md) | |




## \Leantime\Core\Http

### Classes

| Class | Description |
|---    |---          |
| [ApiRequest](technical/classes/Leantime/Core/Http/ApiRequest.md) | Class ApiRequest|
| [HtmxRequest](technical/classes/Leantime/Core/Http/HtmxRequest.md) | Incoming Request information|
| [HttpKernel](technical/classes/Leantime/Core/Http/HttpKernel.md) | |
| [IncomingRequest](technical/classes/Leantime/Core/Http/IncomingRequest.md) | Incoming Request information|




## \Leantime\Core\Http\Client

### Classes

| Class | Description |
|---    |---          |
| [ApiClient](technical/classes/Leantime/Core/Http/Client/ApiClient.md) | ApiSession - Creates a Guzzle Client with a connection|




## \Leantime\Core\Middleware

### Classes

| Class | Description |
|---    |---          |
| [ApiAuth](technical/classes/Leantime/Core/Middleware/ApiAuth.md) | |
| [Auth](technical/classes/Leantime/Core/Middleware/Auth.md) | |
| [CurrentProject](technical/classes/Leantime/Core/Middleware/CurrentProject.md) | |
| [InitialHeaders](technical/classes/Leantime/Core/Middleware/InitialHeaders.md) | |
| [Installed](technical/classes/Leantime/Core/Middleware/Installed.md) | |
| [Localization](technical/classes/Leantime/Core/Middleware/Localization.md) | |
| [RequestRateLimiter](technical/classes/Leantime/Core/Middleware/RequestRateLimiter.md) | Class ApiRateLimiter|
| [StartSession](technical/classes/Leantime/Core/Middleware/StartSession.md) | |
| [TrustProxies](technical/classes/Leantime/Core/Middleware/TrustProxies.md) | Class TrustProxies|
| [Updated](technical/classes/Leantime/Core/Middleware/Updated.md) | |




## \Leantime\Core\Providers

### Classes

| Class | Description |
|---    |---          |
| [Auth](technical/classes/Leantime/Core/Providers/Auth.md) | |
| [Cache](technical/classes/Leantime/Core/Providers/Cache.md) | |
| [Db](technical/classes/Leantime/Core/Providers/Db.md) | |
| [Environment](technical/classes/Leantime/Core/Providers/Environment.md) | |
| [Events](technical/classes/Leantime/Core/Providers/Events.md) | |
| [Language](technical/classes/Leantime/Core/Providers/Language.md) | |
| [Logging](technical/classes/Leantime/Core/Providers/Logging.md) | |
| [RateLimiter](technical/classes/Leantime/Core/Providers/RateLimiter.md) | |
| [Redis](technical/classes/Leantime/Core/Providers/Redis.md) | |
| [Session](technical/classes/Leantime/Core/Providers/Session.md) | |




## \Leantime\Core\Support

### Classes

| Class | Description |
|---    |---          |
| [Build](technical/classes/Leantime/Core/Support/Build.md) | |
| [CarbonMacros](technical/classes/Leantime/Core/Support/CarbonMacros.md) | Class CarbonMacros|
| [Cast](technical/classes/Leantime/Core/Support/Cast.md) | |
| [DateTimeHelper](technical/classes/Leantime/Core/Support/DateTimeHelper.md) | Class DateTimeHelper|
| [Format](technical/classes/Leantime/Core/Support/Format.md) | Class Format|
| [Mix](technical/classes/Leantime/Core/Support/Mix.md) | |




## \Leantime\Domain\Api\Controllers

### Classes

| Class | Description |
|---    |---          |
| [ApiKey](technical/classes/Leantime/Domain/Api/Controllers/ApiKey.md) | API-key controller.|
| [Calendar](technical/classes/Leantime/Domain/Api/Controllers/Calendar.md) | Calendar controller|
| [Canvas](technical/classes/Leantime/Domain/Api/Controllers/Canvas.md) | Controller Class - Base class For all controllers|
| [Cpcanvas](technical/classes/Leantime/Domain/Api/Controllers/Cpcanvas.md) | Controller Class - Base class For all controllers|
| [Dbmcanvas](technical/classes/Leantime/Domain/Api/Controllers/Dbmcanvas.md) | Controller Class - Base class For all controllers|
| [DelAPIKey](technical/classes/Leantime/Domain/Api/Controllers/DelAPIKey.md) | Class DelAPIKey|
| [Eacanvas](technical/classes/Leantime/Domain/Api/Controllers/Eacanvas.md) | Controller Class - Base class For all controllers|
| [Emcanvas](technical/classes/Leantime/Domain/Api/Controllers/Emcanvas.md) | Controller Class - Base class For all controllers|
| [Files](technical/classes/Leantime/Domain/Api/Controllers/Files.md) | Controller Class - Base class For all controllers|
| [Goalcanvas](technical/classes/Leantime/Domain/Api/Controllers/Goalcanvas.md) | Controller Class - Base class For all controllers|
| [I18n](technical/classes/Leantime/Domain/Api/Controllers/I18n.md) | Class I18n|
| [Ideas](technical/classes/Leantime/Domain/Api/Controllers/Ideas.md) | Class Ideas|
| [Ideation](technical/classes/Leantime/Domain/Api/Controllers/Ideation.md) | Class Ideation|
| [Insightscanvas](technical/classes/Leantime/Domain/Api/Controllers/Insightscanvas.md) | Controller Class - Base class For all controllers|
| [Jsonrpc](technical/classes/Leantime/Domain/Api/Controllers/Jsonrpc.md) | Controller Class - Base class For all controllers|
| [Lbmcanvas](technical/classes/Leantime/Domain/Api/Controllers/Lbmcanvas.md) | Controller Class - Base class For all controllers|
| [Leancanvas](technical/classes/Leantime/Domain/Api/Controllers/Leancanvas.md) | Controller Class - Base class For all controllers|
| [NEWcanvas](technical/classes/Leantime/Domain/Api/Controllers/NEWcanvas.md) | Controller Class - Base class For all controllers|
| [NewApiKey](technical/classes/Leantime/Domain/Api/Controllers/NewApiKey.md) | Controller Class - Base class For all controllers|
| [Notifications](technical/classes/Leantime/Domain/Api/Controllers/Notifications.md) | Controller Class - Base class For all controllers|
| [Obmcanvas](technical/classes/Leantime/Domain/Api/Controllers/Obmcanvas.md) | Controller Class - Base class For all controllers|
| [Projects](technical/classes/Leantime/Domain/Api/Controllers/Projects.md) | Controller Class - Base class For all controllers|
| [Reactions](technical/classes/Leantime/Domain/Api/Controllers/Reactions.md) | Controller Class - Base class For all controllers|
| [Retroscanvas](technical/classes/Leantime/Domain/Api/Controllers/Retroscanvas.md) | Controller Class - Base class For all controllers|
| [Riskscanvas](technical/classes/Leantime/Domain/Api/Controllers/Riskscanvas.md) | Controller Class - Base class For all controllers|
| [Sbcanvas](technical/classes/Leantime/Domain/Api/Controllers/Sbcanvas.md) | Controller Class - Base class For all controllers|
| [Sessions](technical/classes/Leantime/Domain/Api/Controllers/Sessions.md) | Controller Class - Base class For all controllers|
| [Setting](technical/classes/Leantime/Domain/Api/Controllers/Setting.md) | Controller Class - Base class For all controllers|
| [Smcanvas](technical/classes/Leantime/Domain/Api/Controllers/Smcanvas.md) | Controller Class - Base class For all controllers|
| [Sqcanvas](technical/classes/Leantime/Domain/Api/Controllers/Sqcanvas.md) | Controller Class - Base class For all controllers|
| [StaticAsset](technical/classes/Leantime/Domain/Api/Controllers/StaticAsset.md) | Controller Class - Base class For all controllers|
| [Submenu](technical/classes/Leantime/Domain/Api/Controllers/Submenu.md) | Controller Class - Base class For all controllers|
| [Swotcanvas](technical/classes/Leantime/Domain/Api/Controllers/Swotcanvas.md) | Controller Class - Base class For all controllers|
| [Tags](technical/classes/Leantime/Domain/Api/Controllers/Tags.md) | Controller Class - Base class For all controllers|
| [Tickets](technical/classes/Leantime/Domain/Api/Controllers/Tickets.md) | Controller Class - Base class For all controllers|
| [Timer](technical/classes/Leantime/Domain/Api/Controllers/Timer.md) | Controller Class - Base class For all controllers|
| [Users](technical/classes/Leantime/Domain/Api/Controllers/Users.md) | Controller Class - Base class For all controllers|
| [Valuecanvas](technical/classes/Leantime/Domain/Api/Controllers/Valuecanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Api\Models

### Classes

| Class | Description |
|---    |---          |
| [StaticAsset](technical/classes/Leantime/Domain/Api/Models/StaticAsset.md) | Represents a static asset file.|




## \Leantime\Domain\Api\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Api](technical/classes/Leantime/Domain/Api/Repositories/Api.md) | |




## \Leantime\Domain\Api\Services

### Classes

| Class | Description |
|---    |---          |
| [Api](technical/classes/Leantime/Domain/Api/Services/Api.md) | |




## \Leantime\Domain\Audit\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Audit](technical/classes/Leantime/Domain/Audit/Repositories/Audit.md) | |




## \Leantime\Domain\Auth\Controllers

### Classes

| Class | Description |
|---    |---          |
| [KeepAlive](technical/classes/Leantime/Domain/Auth/Controllers/KeepAlive.md) | Controller Class - Base class For all controllers|
| [Login](technical/classes/Leantime/Domain/Auth/Controllers/Login.md) | Controller Class - Base class For all controllers|
| [Logout](technical/classes/Leantime/Domain/Auth/Controllers/Logout.md) | Controller Class - Base class For all controllers|
| [ResetPw](technical/classes/Leantime/Domain/Auth/Controllers/ResetPw.md) | Controller Class - Base class For all controllers|
| [UserInvite](technical/classes/Leantime/Domain/Auth/Controllers/UserInvite.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Auth\Models

### Classes

| Class | Description |
|---    |---          |
| [CurrentUser](technical/classes/Leantime/Domain/Auth/Models/CurrentUser.md) | |
| [Roles](technical/classes/Leantime/Domain/Auth/Models/Roles.md) | |




## \Leantime\Domain\Auth\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Auth](technical/classes/Leantime/Domain/Auth/Repositories/Auth.md) | |




## \Leantime\Domain\Auth\Services

### Classes

| Class | Description |
|---    |---          |
| [Auth](technical/classes/Leantime/Domain/Auth/Services/Auth.md) | |




## \Leantime\Domain\Calendar\Controllers

### Classes

| Class | Description |
|---    |---          |
| [AddEvent](technical/classes/Leantime/Domain/Calendar/Controllers/AddEvent.md) | Controller Class - Base class For all controllers|
| [DelEvent](technical/classes/Leantime/Domain/Calendar/Controllers/DelEvent.md) | Controller Class - Base class For all controllers|
| [DelExternalCalendar](technical/classes/Leantime/Domain/Calendar/Controllers/DelExternalCalendar.md) | Controller Class - Base class For all controllers|
| [EditEvent](technical/classes/Leantime/Domain/Calendar/Controllers/EditEvent.md) | Controller Class - Base class For all controllers|
| [EditExternal](technical/classes/Leantime/Domain/Calendar/Controllers/EditExternal.md) | Controller Class - Base class For all controllers|
| [Export](technical/classes/Leantime/Domain/Calendar/Controllers/Export.md) | Controller Class - Base class For all controllers|
| [ExternalCal](technical/classes/Leantime/Domain/Calendar/Controllers/ExternalCal.md) | Controller Class - Base class For all controllers|
| [Ical](technical/classes/Leantime/Domain/Calendar/Controllers/Ical.md) | Controller Class - Base class For all controllers|
| [ImportGCal](technical/classes/Leantime/Domain/Calendar/Controllers/ImportGCal.md) | importGCal Class - Add a new client|
| [ShowAllGCals](technical/classes/Leantime/Domain/Calendar/Controllers/ShowAllGCals.md) | Controller Class - Base class For all controllers|
| [ShowMyCalendar](technical/classes/Leantime/Domain/Calendar/Controllers/ShowMyCalendar.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Calendar\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Calendar](technical/classes/Leantime/Domain/Calendar/Repositories/Calendar.md) | Repository|




## \Leantime\Domain\Calendar\Services

### Classes

| Class | Description |
|---    |---          |
| [Calendar](technical/classes/Leantime/Domain/Calendar/Services/Calendar.md) | |




## \Leantime\Domain\Canvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Canvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Canvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Canvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Canvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Canvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Canvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Canvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Canvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Canvas](technical/classes/Leantime/Domain/Canvas/Repositories/Canvas.md) | |




## \Leantime\Domain\Canvas\Services

### Classes

| Class | Description |
|---    |---          |
| [Canvas](technical/classes/Leantime/Domain/Canvas/Services/Canvas.md) | |




## \Leantime\Domain\Clients\Controllers

### Classes

| Class | Description |
|---    |---          |
| [DelClient](technical/classes/Leantime/Domain/Clients/Controllers/DelClient.md) | Controller Class - Base class For all controllers|
| [EditClient](technical/classes/Leantime/Domain/Clients/Controllers/EditClient.md) | Controller Class - Base class For all controllers|
| [NewClient](technical/classes/Leantime/Domain/Clients/Controllers/NewClient.md) | Controller Class - Base class For all controllers|
| [ShowAll](technical/classes/Leantime/Domain/Clients/Controllers/ShowAll.md) | Controller Class - Base class For all controllers|
| [ShowClient](technical/classes/Leantime/Domain/Clients/Controllers/ShowClient.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Clients\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Clients](technical/classes/Leantime/Domain/Clients/Repositories/Clients.md) | Repository|




## \Leantime\Domain\Clients\Services

### Classes

| Class | Description |
|---    |---          |
| [Clients](technical/classes/Leantime/Domain/Clients/Services/Clients.md) | Class Clients|




## \Leantime\Domain\Comments\Controllers

### Classes

| Class | Description |
|---    |---          |
| [ShowAll](technical/classes/Leantime/Domain/Comments/Controllers/ShowAll.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Comments\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Comments](technical/classes/Leantime/Domain/Comments/Repositories/Comments.md) | |




## \Leantime\Domain\Comments\Services

### Classes

| Class | Description |
|---    |---          |
| [Comments](technical/classes/Leantime/Domain/Comments/Services/Comments.md) | |




## \Leantime\Domain\Connector\Controllers

### Classes

| Class | Description |
|---    |---          |
| [Integration](technical/classes/Leantime/Domain/Connector/Controllers/Integration.md) | Controller Class - Base class For all controllers|
| [Providers](technical/classes/Leantime/Domain/Connector/Controllers/Providers.md) | Controller Class - Base class For all controllers|
| [Show](technical/classes/Leantime/Domain/Connector/Controllers/Show.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Connector\Models

### Classes

| Class | Description |
|---    |---          |
| [Entity](technical/classes/Leantime/Domain/Connector/Models/Entity.md) | |
| [Field](technical/classes/Leantime/Domain/Connector/Models/Field.md) | |
| [FieldTypes](technical/classes/Leantime/Domain/Connector/Models/FieldTypes.md) | |
| [Integration](technical/classes/Leantime/Domain/Connector/Models/Integration.md) | |
| [Provider](technical/classes/Leantime/Domain/Connector/Models/Provider.md) | |




## \Leantime\Domain\Connector\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Integrations](technical/classes/Leantime/Domain/Connector/Repositories/Integrations.md) | Repository|
| [LeantimeEntities](technical/classes/Leantime/Domain/Connector/Repositories/LeantimeEntities.md) | |




## \Leantime\Domain\Connector\Services

### Classes

| Class | Description |
|---    |---          |
| [Connector](technical/classes/Leantime/Domain/Connector/Services/Connector.md) | |
| [Integrations](technical/classes/Leantime/Domain/Connector/Services/Integrations.md) | |
| [Providers](technical/classes/Leantime/Domain/Connector/Services/Providers.md) | |



#### Interfaces

| Interface | Description |
|---    |---          |
| [ProviderIntegration](technical/classes/Leantime/Domain/Connector/Services/ProviderIntegration.md) | |



## \Leantime\Domain\Cpcanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Cpcanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Cpcanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Cpcanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Cpcanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Cpcanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Cpcanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Cpcanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Cpcanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Cpcanvas](technical/classes/Leantime/Domain/Cpcanvas/Repositories/Cpcanvas.md) | |




## \Leantime\Domain\Cron\Controllers

### Classes

| Class | Description |
|---    |---          |
| [Run](technical/classes/Leantime/Domain/Cron/Controllers/Run.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Cron\Services

### Classes

| Class | Description |
|---    |---          |
| [Cron](technical/classes/Leantime/Domain/Cron/Services/Cron.md) | |




## \Leantime\Domain\CsvImport\Controllers

### Classes

| Class | Description |
|---    |---          |
| [Upload](technical/classes/Leantime/Domain/CsvImport/Controllers/Upload.md) | upload controller for csvImport plugin|




## \Leantime\Domain\CsvImport\Listeners

### Classes

| Class | Description |
|---    |---          |
| [AddCSVImportProvider](technical/classes/Leantime/Domain/CsvImport/Listeners/AddCSVImportProvider.md) | Class AddCSVImportProvider|




## \Leantime\Domain\CsvImport\Services

### Classes

| Class | Description |
|---    |---          |
| [CsvImport](technical/classes/Leantime/Domain/CsvImport/Services/CsvImport.md) | |




## \Leantime\Domain\Dashboard\Controllers

### Classes

| Class | Description |
|---    |---          |
| [Home](technical/classes/Leantime/Domain/Dashboard/Controllers/Home.md) | Controller Class - Base class For all controllers|
| [Show](technical/classes/Leantime/Domain/Dashboard/Controllers/Show.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Dashboard\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Dashboard](technical/classes/Leantime/Domain/Dashboard/Repositories/Dashboard.md) | |




## \Leantime\Domain\Dbmcanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Dbmcanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Dbmcanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Dbmcanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Dbmcanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Dbmcanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Dbmcanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Dbmcanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Dbmcanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Dbmcanvas](technical/classes/Leantime/Domain/Dbmcanvas/Repositories/Dbmcanvas.md) | |




## \Leantime\Domain\Eacanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Eacanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Eacanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Eacanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Eacanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Eacanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Eacanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Eacanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Eacanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Eacanvas](technical/classes/Leantime/Domain/Eacanvas/Repositories/Eacanvas.md) | |




## \Leantime\Domain\Emcanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Emcanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Emcanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Emcanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Emcanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Emcanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Emcanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Emcanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Emcanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Emcanvas](technical/classes/Leantime/Domain/Emcanvas/Repositories/Emcanvas.md) | |




## \Leantime\Domain\Entityrelations\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Entityrelations](technical/classes/Leantime/Domain/Entityrelations/Repositories/Entityrelations.md) | |




## \Leantime\Domain\Entityrelations\Services

### Classes

| Class | Description |
|---    |---          |
| [Entityrelations](technical/classes/Leantime/Domain/Entityrelations/Services/Entityrelations.md) | |




## \Leantime\Domain\Errors\Controllers

### Classes

| Class | Description |
|---    |---          |
| [Error403](technical/classes/Leantime/Domain/Errors/Controllers/Error403.md) | Controller Class - Base class For all controllers|
| [Error404](technical/classes/Leantime/Domain/Errors/Controllers/Error404.md) | Controller Class - Base class For all controllers|
| [Error500](technical/classes/Leantime/Domain/Errors/Controllers/Error500.md) | Controller Class - Base class For all controllers|
| [Error501](technical/classes/Leantime/Domain/Errors/Controllers/Error501.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Files\Controllers

### Classes

| Class | Description |
|---    |---          |
| [Browse](technical/classes/Leantime/Domain/Files/Controllers/Browse.md) | Controller Class - Base class For all controllers|
| [Get](technical/classes/Leantime/Domain/Files/Controllers/Get.md) | Controller Class - Base class For all controllers|
| [ShowAll](technical/classes/Leantime/Domain/Files/Controllers/ShowAll.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Files\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Files](technical/classes/Leantime/Domain/Files/Repositories/Files.md) | |




## \Leantime\Domain\Files\Services

### Classes

| Class | Description |
|---    |---          |
| [Files](technical/classes/Leantime/Domain/Files/Services/Files.md) | |




## \Leantime\Domain\Gamecenter\Controllers

### Classes

| Class | Description |
|---    |---          |
| [Launch](technical/classes/Leantime/Domain/Gamecenter/Controllers/Launch.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Goalcanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BigRock](technical/classes/Leantime/Domain/Goalcanvas/Controllers/BigRock.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Dashboard](technical/classes/Leantime/Domain/Goalcanvas/Controllers/Dashboard.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Goalcanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Goalcanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Goalcanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Goalcanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Goalcanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Goalcanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Goalcanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Goalcanvas](technical/classes/Leantime/Domain/Goalcanvas/Repositories/Goalcanvas.md) | |




## \Leantime\Domain\Goalcanvas\Services

### Classes

| Class | Description |
|---    |---          |
| [Goalcanvas](technical/classes/Leantime/Domain/Goalcanvas/Services/Goalcanvas.md) | |




## \Leantime\Domain\Help\Composers

### Classes

| Class | Description |
|---    |---          |
| [Helpermodal](technical/classes/Leantime/Domain/Help/Composers/Helpermodal.md) | |




## \Leantime\Domain\Help\Contracts




#### Interfaces

| Interface | Description |
|---    |---          |
| [OnboardingSteps](technical/classes/Leantime/Domain/Help/Contracts/OnboardingSteps.md) | |



## \Leantime\Domain\Help\Controllers

### Classes

| Class | Description |
|---    |---          |
| [FirstLogin](technical/classes/Leantime/Domain/Help/Controllers/FirstLogin.md) | Controller Class - Base class For all controllers|
| [ShowOnboardingDialog](technical/classes/Leantime/Domain/Help/Controllers/ShowOnboardingDialog.md) | Controller Class - Base class For all controllers|
| [Updates](technical/classes/Leantime/Domain/Help/Controllers/Updates.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Help\Services

### Classes

| Class | Description |
|---    |---          |
| [Helper](technical/classes/Leantime/Domain/Help/Services/Helper.md) | |
| [InviteTeamStep](technical/classes/Leantime/Domain/Help/Services/InviteTeamStep.md) | |
| [ProjectDefinitionStep](technical/classes/Leantime/Domain/Help/Services/ProjectDefinitionStep.md) | |
| [ProjectIntroStep](technical/classes/Leantime/Domain/Help/Services/ProjectIntroStep.md) | |




## \Leantime\Domain\Ideas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [AdvancedBoards](technical/classes/Leantime/Domain/Ideas/Controllers/AdvancedBoards.md) | Controller Class - Base class For all controllers|
| [BoardDialog](technical/classes/Leantime/Domain/Ideas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Ideas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Ideas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [IdeaDialog](technical/classes/Leantime/Domain/Ideas/Controllers/IdeaDialog.md) | Controller Class - Base class For all controllers|
| [ShowBoards](technical/classes/Leantime/Domain/Ideas/Controllers/ShowBoards.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Ideas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Ideas](technical/classes/Leantime/Domain/Ideas/Repositories/Ideas.md) | |




## \Leantime\Domain\Ideas\Services

### Classes

| Class | Description |
|---    |---          |
| [Ideas](technical/classes/Leantime/Domain/Ideas/Services/Ideas.md) | |




## \Leantime\Domain\Insightscanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Insightscanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Insightscanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Insightscanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Insightscanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Insightscanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Insightscanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Insightscanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Insightscanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Insightscanvas](technical/classes/Leantime/Domain/Insightscanvas/Repositories/Insightscanvas.md) | |




## \Leantime\Domain\Install\Controllers

### Classes

| Class | Description |
|---    |---          |
| [Index](technical/classes/Leantime/Domain/Install/Controllers/Index.md) | Controller Class - Base class For all controllers|
| [Update](technical/classes/Leantime/Domain/Install/Controllers/Update.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Install\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Install](technical/classes/Leantime/Domain/Install/Repositories/Install.md) | |




## \Leantime\Domain\Install\Services

### Classes

| Class | Description |
|---    |---          |
| [Install](technical/classes/Leantime/Domain/Install/Services/Install.md) | |




## \Leantime\Domain\Lbmcanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Lbmcanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Lbmcanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Lbmcanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Lbmcanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Lbmcanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Lbmcanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Lbmcanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Lbmcanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Lbmcanvas](technical/classes/Leantime/Domain/Lbmcanvas/Repositories/Lbmcanvas.md) | |




## \Leantime\Domain\Ldap\Services

### Classes

| Class | Description |
|---    |---          |
| [Ldap](technical/classes/Leantime/Domain/Ldap/Services/Ldap.md) | |




## \Leantime\Domain\Leancanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Leancanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Leancanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Leancanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Leancanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Leancanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Leancanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Leancanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Leancanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Leancanvas](technical/classes/Leantime/Domain/Leancanvas/Repositories/Leancanvas.md) | |




## \Leantime\Domain\Menu\Composers

### Classes

| Class | Description |
|---    |---          |
| [HeadMenu](technical/classes/Leantime/Domain/Menu/Composers/HeadMenu.md) | |
| [Menu](technical/classes/Leantime/Domain/Menu/Composers/Menu.md) | |
| [ProjectSelector](technical/classes/Leantime/Domain/Menu/Composers/ProjectSelector.md) | |




## \Leantime\Domain\Menu\Hxcontrollers

### Classes

| Class | Description |
|---    |---          |
| [ProjectSelector](technical/classes/Leantime/Domain/Menu/Hxcontrollers/ProjectSelector.md) | HtmxController Class - Base class For all htmx controllers|




## \Leantime\Domain\Menu\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Menu](technical/classes/Leantime/Domain/Menu/Repositories/Menu.md) | |




## \Leantime\Domain\Menu\Services

### Classes

| Class | Description |
|---    |---          |
| [Menu](technical/classes/Leantime/Domain/Menu/Services/Menu.md) | |




## \Leantime\Domain\Minempathycanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Minempathycanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Minempathycanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Minempathycanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Minempathycanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Minempathycanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Minempathycanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Minempathycanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Minempathycanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Minempathycanvas](technical/classes/Leantime/Domain/Minempathycanvas/Repositories/Minempathycanvas.md) | |




## \Leantime\Domain\ModuleManager\Controllers

### Classes

| Class | Description |
|---    |---          |
| [Notavailable](technical/classes/Leantime/Domain/ModuleManager/Controllers/Notavailable.md) | |




## \Leantime\Domain\Modulemanager\Services

### Classes

| Class | Description |
|---    |---          |
| [Modulemanager](technical/classes/Leantime/Domain/Modulemanager/Services/Modulemanager.md) | |




## \Leantime\Domain\Notifications\Controllers

### Classes

| Class | Description |
|---    |---          |
| [GetLatestGrowl](technical/classes/Leantime/Domain/Notifications/Controllers/GetLatestGrowl.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Notifications\Hxcontrollers

### Classes

| Class | Description |
|---    |---          |
| [News](technical/classes/Leantime/Domain/Notifications/Hxcontrollers/News.md) | HtmxController Class - Base class For all htmx controllers|
| [NewsBadge](technical/classes/Leantime/Domain/Notifications/Hxcontrollers/NewsBadge.md) | HtmxController Class - Base class For all htmx controllers|




## \Leantime\Domain\Notifications\Listeners

### Classes

| Class | Description |
|---    |---          |
| [NotifyProjectUsers](technical/classes/Leantime/Domain/Notifications/Listeners/NotifyProjectUsers.md) | |




## \Leantime\Domain\Notifications\Models

### Classes

| Class | Description |
|---    |---          |
| [Notification](technical/classes/Leantime/Domain/Notifications/Models/Notification.md) | |




## \Leantime\Domain\Notifications\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Notifications](technical/classes/Leantime/Domain/Notifications/Repositories/Notifications.md) | |




## \Leantime\Domain\Notifications\Services

### Classes

| Class | Description |
|---    |---          |
| [Messengers](technical/classes/Leantime/Domain/Notifications/Services/Messengers.md) | |
| [News](technical/classes/Leantime/Domain/Notifications/Services/News.md) | |
| [Notifications](technical/classes/Leantime/Domain/Notifications/Services/Notifications.md) | |




## \Leantime\Domain\Obmcanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Obmcanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Obmcanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Obmcanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Obmcanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Obmcanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Obmcanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Obmcanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Obmcanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Obmcanvas](technical/classes/Leantime/Domain/Obmcanvas/Repositories/Obmcanvas.md) | |




## \Leantime\Domain\Oidc\Controllers

### Classes

| Class | Description |
|---    |---          |
| [Callback](technical/classes/Leantime/Domain/Oidc/Controllers/Callback.md) | Controller Class - Base class For all controllers|
| [Login](technical/classes/Leantime/Domain/Oidc/Controllers/Login.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Oidc\Services

### Classes

| Class | Description |
|---    |---          |
| [Oidc](technical/classes/Leantime/Domain/Oidc/Services/Oidc.md) | |




## \Leantime\Domain\Plugins\Contracts




#### Interfaces

| Interface | Description |
|---    |---          |
| [PluginDisplayStrategy](technical/classes/Leantime/Domain/Plugins/Contracts/PluginDisplayStrategy.md) | |
| [PluginInterface](technical/classes/Leantime/Domain/Plugins/Contracts/PluginInterface.md) | Interface PluginInterface|



## \Leantime\Domain\Plugins\Controllers

### Classes

| Class | Description |
|---    |---          |
| [CssLoader](technical/classes/Leantime/Domain/Plugins/Controllers/CssLoader.md) | Controller Class - Base class For all controllers|
| [Details](technical/classes/Leantime/Domain/Plugins/Controllers/Details.md) | Controller Class - Base class For all controllers|
| [Marketplace](technical/classes/Leantime/Domain/Plugins/Controllers/Marketplace.md) | Controller Class - Base class For all controllers|
| [Myapps](technical/classes/Leantime/Domain/Plugins/Controllers/Myapps.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Plugins\Hxcontrollers

### Classes

| Class | Description |
|---    |---          |
| [Details](technical/classes/Leantime/Domain/Plugins/Hxcontrollers/Details.md) | HtmxController Class - Base class For all htmx controllers|
| [Marketplaceplugins](technical/classes/Leantime/Domain/Plugins/Hxcontrollers/Marketplaceplugins.md) | HtmxController Class - Base class For all htmx controllers|




## \Leantime\Domain\Plugins\Models

### Classes

| Class | Description |
|---    |---          |
| [InstalledPlugin](technical/classes/Leantime/Domain/Plugins/Models/InstalledPlugin.md) | |
| [MarketplacePlugin](technical/classes/Leantime/Domain/Plugins/Models/MarketplacePlugin.md) | |




## \Leantime\Domain\Plugins\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Plugins](technical/classes/Leantime/Domain/Plugins/Repositories/Plugins.md) | |




## \Leantime\Domain\Plugins\Services

### Classes

| Class | Description |
|---    |---          |
| [Plugins](technical/classes/Leantime/Domain/Plugins/Services/Plugins.md) | |
| [Premium](technical/classes/Leantime/Domain/Plugins/Services/Premium.md) | |




## \Leantime\Domain\Projects\Controllers

### Classes

| Class | Description |
|---    |---          |
| [ChangeCurrentProject](technical/classes/Leantime/Domain/Projects/Controllers/ChangeCurrentProject.md) | Controller Class - Base class For all controllers|
| [Createnew](technical/classes/Leantime/Domain/Projects/Controllers/Createnew.md) | Controller Class - Base class For all controllers|
| [DelProject](technical/classes/Leantime/Domain/Projects/Controllers/DelProject.md) | Controller Class - Base class For all controllers|
| [DuplicateProject](technical/classes/Leantime/Domain/Projects/Controllers/DuplicateProject.md) | Controller Class - Base class For all controllers|
| [NewProject](technical/classes/Leantime/Domain/Projects/Controllers/NewProject.md) | Controller Class - Base class For all controllers|
| [ShowAll](technical/classes/Leantime/Domain/Projects/Controllers/ShowAll.md) | Controller Class - Base class For all controllers|
| [ShowMy](technical/classes/Leantime/Domain/Projects/Controllers/ShowMy.md) | Controller Class - Base class For all controllers|
| [ShowProject](technical/classes/Leantime/Domain/Projects/Controllers/ShowProject.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Projects\Hxcontrollers

### Classes

| Class | Description |
|---    |---          |
| [Checklist](technical/classes/Leantime/Domain/Projects/Hxcontrollers/Checklist.md) | HtmxController Class - Base class For all htmx controllers|
| [ProjectCard](technical/classes/Leantime/Domain/Projects/Hxcontrollers/ProjectCard.md) | HtmxController Class - Base class For all htmx controllers|
| [ProjectCardProgress](technical/classes/Leantime/Domain/Projects/Hxcontrollers/ProjectCardProgress.md) | HtmxController Class - Base class For all htmx controllers|
| [ProjectHubProjects](technical/classes/Leantime/Domain/Projects/Hxcontrollers/ProjectHubProjects.md) | HtmxController Class - Base class For all htmx controllers|




## \Leantime\Domain\Projects\Models

### Classes

| Class | Description |
|---    |---          |
| [Project](technical/classes/Leantime/Domain/Projects/Models/Project.md) | |




## \Leantime\Domain\Projects\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Projects](technical/classes/Leantime/Domain/Projects/Repositories/Projects.md) | |




## \Leantime\Domain\Projects\Services

### Classes

| Class | Description |
|---    |---          |
| [Projects](technical/classes/Leantime/Domain/Projects/Services/Projects.md) | Class Projects|




## \Leantime\Domain\Queue\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Queue](technical/classes/Leantime/Domain/Queue/Repositories/Queue.md) | |




## \Leantime\Domain\Queue\Services

### Classes

| Class | Description |
|---    |---          |
| [Queue](technical/classes/Leantime/Domain/Queue/Services/Queue.md) | |




## \Leantime\Domain\Queue\Workers

### Classes

| Class | Description |
|---    |---          |
| [DefaultWorker](technical/classes/Leantime/Domain/Queue/Workers/DefaultWorker.md) | |
| [EmailWorker](technical/classes/Leantime/Domain/Queue/Workers/EmailWorker.md) | |
| [HttpRequestWorker](technical/classes/Leantime/Domain/Queue/Workers/HttpRequestWorker.md) | |




## \Leantime\Domain\Reactions\Models

### Classes

| Class | Description |
|---    |---          |
| [Reactions](technical/classes/Leantime/Domain/Reactions/Models/Reactions.md) | |




## \Leantime\Domain\Reactions\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Reactions](technical/classes/Leantime/Domain/Reactions/Repositories/Reactions.md) | |




## \Leantime\Domain\Reactions\Services

### Classes

| Class | Description |
|---    |---          |
| [Reactions](technical/classes/Leantime/Domain/Reactions/Services/Reactions.md) | |




## \Leantime\Domain\Read\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Read](technical/classes/Leantime/Domain/Read/Repositories/Read.md) | |




## \Leantime\Domain\Reports\Controllers

### Classes

| Class | Description |
|---    |---          |
| [Show](technical/classes/Leantime/Domain/Reports/Controllers/Show.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Reports\Models

### Classes

| Class | Description |
|---    |---          |
| [Reports](technical/classes/Leantime/Domain/Reports/Models/Reports.md) | |




## \Leantime\Domain\Reports\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Reports](technical/classes/Leantime/Domain/Reports/Repositories/Reports.md) | |




## \Leantime\Domain\Reports\Services

### Classes

| Class | Description |
|---    |---          |
| [Reports](technical/classes/Leantime/Domain/Reports/Services/Reports.md) | |




## \Leantime\Domain\Retroscanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Retroscanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Retroscanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Retroscanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Retroscanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Retroscanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Retroscanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Retroscanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Retroscanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Retroscanvas](technical/classes/Leantime/Domain/Retroscanvas/Repositories/Retroscanvas.md) | |




## \Leantime\Domain\Riskscanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Riskscanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Riskscanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Riskscanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Riskscanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Riskscanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Riskscanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Riskscanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Riskscanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Riskscanvas](technical/classes/Leantime/Domain/Riskscanvas/Repositories/Riskscanvas.md) | |




## \Leantime\Domain\Sbcanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Sbcanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Sbcanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Sbcanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Sbcanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Sbcanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Sbcanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Sbcanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Sbcanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Sbcanvas](technical/classes/Leantime/Domain/Sbcanvas/Repositories/Sbcanvas.md) | |




## \Leantime\Domain\Setting\Controllers

### Classes

| Class | Description |
|---    |---          |
| [EditBoxLabel](technical/classes/Leantime/Domain/Setting/Controllers/EditBoxLabel.md) | Controller Class - Base class For all controllers|
| [EditCompanySettings](technical/classes/Leantime/Domain/Setting/Controllers/EditCompanySettings.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Setting\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Setting](technical/classes/Leantime/Domain/Setting/Repositories/Setting.md) | |




## \Leantime\Domain\Setting\Services

### Classes

| Class | Description |
|---    |---          |
| [Setting](technical/classes/Leantime/Domain/Setting/Services/Setting.md) | |




## \Leantime\Domain\Smcanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Smcanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Smcanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Smcanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Smcanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Smcanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Smcanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Smcanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Smcanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Smcanvas](technical/classes/Leantime/Domain/Smcanvas/Repositories/Smcanvas.md) | |




## \Leantime\Domain\Sprints\Controllers

### Classes

| Class | Description |
|---    |---          |
| [DelSprint](technical/classes/Leantime/Domain/Sprints/Controllers/DelSprint.md) | Controller Class - Base class For all controllers|
| [EditSprint](technical/classes/Leantime/Domain/Sprints/Controllers/EditSprint.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Sprints\Models

### Classes

| Class | Description |
|---    |---          |
| [Sprints](technical/classes/Leantime/Domain/Sprints/Models/Sprints.md) | |




## \Leantime\Domain\Sprints\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Sprints](technical/classes/Leantime/Domain/Sprints/Repositories/Sprints.md) | |




## \Leantime\Domain\Sprints\Services

### Classes

| Class | Description |
|---    |---          |
| [Sprints](technical/classes/Leantime/Domain/Sprints/Services/Sprints.md) | |




## \Leantime\Domain\Sqcanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Sqcanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Sqcanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Sqcanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Sqcanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Sqcanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Sqcanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Sqcanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Sqcanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Sqcanvas](technical/classes/Leantime/Domain/Sqcanvas/Repositories/Sqcanvas.md) | |




## \Leantime\Domain\Strategy\Controllers

### Classes

| Class | Description |
|---    |---          |
| [ShowBoards](technical/classes/Leantime/Domain/Strategy/Controllers/ShowBoards.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Swotcanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Swotcanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Swotcanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Swotcanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Swotcanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Swotcanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Swotcanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Swotcanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Swotcanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Swotcanvas](technical/classes/Leantime/Domain/Swotcanvas/Repositories/Swotcanvas.md) | |




## \Leantime\Domain\Tags\Services

### Classes

| Class | Description |
|---    |---          |
| [Tags](technical/classes/Leantime/Domain/Tags/Services/Tags.md) | |




## \Leantime\Domain\Tickets\Controllers

### Classes

| Class | Description |
|---    |---          |
| [DelMilestone](technical/classes/Leantime/Domain/Tickets/Controllers/DelMilestone.md) | Controller Class - Base class For all controllers|
| [DelTicket](technical/classes/Leantime/Domain/Tickets/Controllers/DelTicket.md) | Controller Class - Base class For all controllers|
| [EditMilestone](technical/classes/Leantime/Domain/Tickets/Controllers/EditMilestone.md) | Controller Class - Base class For all controllers|
| [MoveTicket](technical/classes/Leantime/Domain/Tickets/Controllers/MoveTicket.md) | Controller Class - Base class For all controllers|
| [NewTicket](technical/classes/Leantime/Domain/Tickets/Controllers/NewTicket.md) | Controller Class - Base class For all controllers|
| [Roadmap](technical/classes/Leantime/Domain/Tickets/Controllers/Roadmap.md) | Controller Class - Base class For all controllers|
| [RoadmapAll](technical/classes/Leantime/Domain/Tickets/Controllers/RoadmapAll.md) | Controller Class - Base class For all controllers|
| [ShowAll](technical/classes/Leantime/Domain/Tickets/Controllers/ShowAll.md) | Controller Class - Base class For all controllers|
| [ShowAllMilestones](technical/classes/Leantime/Domain/Tickets/Controllers/ShowAllMilestones.md) | Controller Class - Base class For all controllers|
| [ShowAllMilestonesOverview](technical/classes/Leantime/Domain/Tickets/Controllers/ShowAllMilestonesOverview.md) | Controller Class - Base class For all controllers|
| [ShowKanban](technical/classes/Leantime/Domain/Tickets/Controllers/ShowKanban.md) | Controller Class - Base class For all controllers|
| [ShowList](technical/classes/Leantime/Domain/Tickets/Controllers/ShowList.md) | Controller Class - Base class For all controllers|
| [ShowProjectCalendar](technical/classes/Leantime/Domain/Tickets/Controllers/ShowProjectCalendar.md) | Controller Class - Base class For all controllers|
| [ShowTicket](technical/classes/Leantime/Domain/Tickets/Controllers/ShowTicket.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Tickets\Hxcontrollers

### Classes

| Class | Description |
|---    |---          |
| [Milestones](technical/classes/Leantime/Domain/Tickets/Hxcontrollers/Milestones.md) | HtmxController Class - Base class For all htmx controllers|
| [Subtasks](technical/classes/Leantime/Domain/Tickets/Hxcontrollers/Subtasks.md) | HtmxController Class - Base class For all htmx controllers|
| [TicketCard](technical/classes/Leantime/Domain/Tickets/Hxcontrollers/TicketCard.md) | HtmxController Class - Base class For all htmx controllers|
| [TimerButton](technical/classes/Leantime/Domain/Tickets/Hxcontrollers/TimerButton.md) | HtmxController Class - Base class For all htmx controllers|




## \Leantime\Domain\Tickets\Models

### Classes

| Class | Description |
|---    |---          |
| [Tickets](technical/classes/Leantime/Domain/Tickets/Models/Tickets.md) | |




## \Leantime\Domain\Tickets\Repositories

### Classes

| Class | Description |
|---    |---          |
| [TicketHistory](technical/classes/Leantime/Domain/Tickets/Repositories/TicketHistory.md) | |
| [Tickets](technical/classes/Leantime/Domain/Tickets/Repositories/Tickets.md) | |




## \Leantime\Domain\Tickets\Services

### Classes

| Class | Description |
|---    |---          |
| [Tickets](technical/classes/Leantime/Domain/Tickets/Services/Tickets.md) | |




## \Leantime\Domain\Timesheets\Controllers

### Classes

| Class | Description |
|---    |---          |
| [AddTime](technical/classes/Leantime/Domain/Timesheets/Controllers/AddTime.md) | Controller Class - Base class For all controllers|
| [DelTime](technical/classes/Leantime/Domain/Timesheets/Controllers/DelTime.md) | Controller Class - Base class For all controllers|
| [EditTime](technical/classes/Leantime/Domain/Timesheets/Controllers/EditTime.md) | Controller Class - Base class For all controllers|
| [ShowAll](technical/classes/Leantime/Domain/Timesheets/Controllers/ShowAll.md) | Controller Class - Base class For all controllers|
| [ShowMy](technical/classes/Leantime/Domain/Timesheets/Controllers/ShowMy.md) | Controller Class - Base class For all controllers|
| [ShowMyList](technical/classes/Leantime/Domain/Timesheets/Controllers/ShowMyList.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Timesheets\Hxcontrollers

### Classes

| Class | Description |
|---    |---          |
| [Stopwatch](technical/classes/Leantime/Domain/Timesheets/Hxcontrollers/Stopwatch.md) | HtmxController Class - Base class For all htmx controllers|




## \Leantime\Domain\Timesheets\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Timesheets](technical/classes/Leantime/Domain/Timesheets/Repositories/Timesheets.md) | Repository|




## \Leantime\Domain\Timesheets\Services

### Classes

| Class | Description |
|---    |---          |
| [Timesheets](technical/classes/Leantime/Domain/Timesheets/Services/Timesheets.md) | |




## \Leantime\Domain\TwoFA\Controllers

### Classes

| Class | Description |
|---    |---          |
| [Edit](technical/classes/Leantime/Domain/TwoFA/Controllers/Edit.md) | Controller Class - Base class For all controllers|
| [Verify](technical/classes/Leantime/Domain/TwoFA/Controllers/Verify.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Users\Controllers

### Classes

| Class | Description |
|---    |---          |
| [DelUser](technical/classes/Leantime/Domain/Users/Controllers/DelUser.md) | Controller Class - Base class For all controllers|
| [EditOwn](technical/classes/Leantime/Domain/Users/Controllers/EditOwn.md) | Controller Class - Base class For all controllers|
| [EditUser](technical/classes/Leantime/Domain/Users/Controllers/EditUser.md) | Controller Class - Base class For all controllers|
| [Import](technical/classes/Leantime/Domain/Users/Controllers/Import.md) | Controller Class - Base class For all controllers|
| [NewUser](technical/classes/Leantime/Domain/Users/Controllers/NewUser.md) | Controller Class - Base class For all controllers|
| [ShowAll](technical/classes/Leantime/Domain/Users/Controllers/ShowAll.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Users\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Users](technical/classes/Leantime/Domain/Users/Repositories/Users.md) | |




## \Leantime\Domain\Users\Services

### Classes

| Class | Description |
|---    |---          |
| [Users](technical/classes/Leantime/Domain/Users/Services/Users.md) | |




## \Leantime\Domain\Valuecanvas\Controllers

### Classes

| Class | Description |
|---    |---          |
| [BoardDialog](technical/classes/Leantime/Domain/Valuecanvas/Controllers/BoardDialog.md) | Controller Class - Base class For all controllers|
| [DelCanvas](technical/classes/Leantime/Domain/Valuecanvas/Controllers/DelCanvas.md) | Controller Class - Base class For all controllers|
| [DelCanvasItem](technical/classes/Leantime/Domain/Valuecanvas/Controllers/DelCanvasItem.md) | Controller Class - Base class For all controllers|
| [EditCanvasComment](technical/classes/Leantime/Domain/Valuecanvas/Controllers/EditCanvasComment.md) | Controller Class - Base class For all controllers|
| [EditCanvasItem](technical/classes/Leantime/Domain/Valuecanvas/Controllers/EditCanvasItem.md) | editCanvasItem class - Generic canvas controller / Edit Canvas Item|
| [Export](technical/classes/Leantime/Domain/Valuecanvas/Controllers/Export.md) | Template class For exporting class as XML file|
| [ShowCanvas](technical/classes/Leantime/Domain/Valuecanvas/Controllers/ShowCanvas.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Valuecanvas\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Valuecanvas](technical/classes/Leantime/Domain/Valuecanvas/Repositories/Valuecanvas.md) | |




## \Leantime\Domain\Widgets\Controllers

### Classes

| Class | Description |
|---    |---          |
| [WidgetManager](technical/classes/Leantime/Domain/Widgets/Controllers/WidgetManager.md) | Class WidgetManager|




## \Leantime\Domain\Widgets\Hxcontrollers

### Classes

| Class | Description |
|---    |---          |
| [Calendar](technical/classes/Leantime/Domain/Widgets/Hxcontrollers/Calendar.md) | HtmxController Class - Base class For all htmx controllers|
| [MyProjects](technical/classes/Leantime/Domain/Widgets/Hxcontrollers/MyProjects.md) | HtmxController Class - Base class For all htmx controllers|
| [MyToDos](technical/classes/Leantime/Domain/Widgets/Hxcontrollers/MyToDos.md) | Class MyToDos|
| [Welcome](technical/classes/Leantime/Domain/Widgets/Hxcontrollers/Welcome.md) | HtmxController Class - Base class For all htmx controllers|




## \Leantime\Domain\Widgets\Models

### Classes

| Class | Description |
|---    |---          |
| [Widget](technical/classes/Leantime/Domain/Widgets/Models/Widget.md) | |




## \Leantime\Domain\Widgets\Services

### Classes

| Class | Description |
|---    |---          |
| [Widgets](technical/classes/Leantime/Domain/Widgets/Services/Widgets.md) | |




## \Leantime\Domain\Wiki\Controllers

### Classes

| Class | Description |
|---    |---          |
| [ArticleDialog](technical/classes/Leantime/Domain/Wiki/Controllers/ArticleDialog.md) | Controller Class - Base class For all controllers|
| [DelArticle](technical/classes/Leantime/Domain/Wiki/Controllers/DelArticle.md) | Controller Class - Base class For all controllers|
| [DelWiki](technical/classes/Leantime/Domain/Wiki/Controllers/DelWiki.md) | Controller Class - Base class For all controllers|
| [Show](technical/classes/Leantime/Domain/Wiki/Controllers/Show.md) | Controller Class - Base class For all controllers|
| [Templates](technical/classes/Leantime/Domain/Wiki/Controllers/Templates.md) | Controller Class - Base class For all controllers|
| [WikiModal](technical/classes/Leantime/Domain/Wiki/Controllers/WikiModal.md) | Controller Class - Base class For all controllers|




## \Leantime\Domain\Wiki\Models

### Classes

| Class | Description |
|---    |---          |
| [Article](technical/classes/Leantime/Domain/Wiki/Models/Article.md) | |
| [Template](technical/classes/Leantime/Domain/Wiki/Models/Template.md) | |
| [Wiki](technical/classes/Leantime/Domain/Wiki/Models/Wiki.md) | |




## \Leantime\Domain\Wiki\Repositories

### Classes

| Class | Description |
|---    |---          |
| [Wiki](technical/classes/Leantime/Domain/Wiki/Repositories/Wiki.md) | |




## \Leantime\Domain\Wiki\Services

### Classes

| Class | Description |
|---    |---          |
| [Wiki](technical/classes/Leantime/Domain/Wiki/Services/Wiki.md) | |




## \Leantime\Views\Composers

### Classes

| Class | Description |
|---    |---          |
| [App](technical/classes/Leantime/Views/Composers/App.md) | |
| [Entry](technical/classes/Leantime/Views/Composers/Entry.md) | |
| [Footer](technical/classes/Leantime/Views/Composers/Footer.md) | |
| [Header](technical/classes/Leantime/Views/Composers/Header.md) | |
| [PageBottom](technical/classes/Leantime/Views/Composers/PageBottom.md) | |




---
> Automatically generated from source code comments on 2024-08-30 using [phpDocumentor](http://www.phpdoc.org/)

#### Hooks

[Reference Here](hooks.md)
