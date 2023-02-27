# Hooks

- [Events](#events)
- [Filters](#filters)

## Events

### `begin`


Source: [app/core/class.controller.php](core/class.controller.php), [line 27](core/class.controller.php#L27-L27)

### `end`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this` |  | 

Source: [app/core/class.controller.php](core/class.controller.php), [line 35](core/class.controller.php#L35-L35)

### `before_init`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` |  | 

Source: [app/core/class.controller.php](core/class.controller.php), [line 56](core/class.controller.php#L56-L56)

### `before_action`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` |  | 

Source: [app/core/class.controller.php](core/class.controller.php), [line 59](core/class.controller.php#L59-L59)

### `beginning`

*The beginning of the application*

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['application' => $this]` |  | 

Source: [app/core/class.application.php](core/class.application.php), [line 69](core/class.application.php#L69-L74)

### `logged_in`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['application' => $this]` |  | 

Source: [app/core/class.application.php](core/class.application.php), [line 120](core/class.application.php#L120-L120)

### `end`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['application' => $this]` |  | 

Source: [app/core/class.application.php](core/class.application.php), [line 138](core/class.application.php#L138-L138)

### `{$hook}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 

Source: [app/core/class.mailer.php](core/class.mailer.php), [line 197](core/class.mailer.php#L197-L197)

### `{$hookName}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$this->hookContext` |  | 

Source: [app/core/class.template.php](core/class.template.php), [line 791](core/class.template.php#L791-L791)

### `{$hook}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$available_params` |  | 
`self::get_event_context($function)` |  | 

Source: [app/core/trait.eventhelpers.php](core/trait.eventhelpers.php), [line 24](core/trait.eventhelpers.php#L24-L24)

### `beforeExecute`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/core/class.repository.php](core/class.repository.php), [line 119](core/class.repository.php#L119-L119)

### `afterExecute`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/core/class.repository.php](core/class.repository.php), [line 132](core/class.repository.php#L132-L132)

### `userSignupSuccess`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['user' => $user]` |  | 

Source: [app/domain/auth/controllers/class.userInvite.php](domain/auth/controllers/class.userInvite.php), [line 93](domain/auth/controllers/class.userInvite.php#L93-L93)

### `beforeAuth`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$params` |  | 

Source: [app/domain/auth/controllers/class.login.php](domain/auth/controllers/class.login.php), [line 46](domain/auth/controllers/class.login.php#L46-L46)

### `beforeAuthServiceCall`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['post' => $_POST]` |  | 

Source: [app/domain/auth/controllers/class.login.php](domain/auth/controllers/class.login.php), [line 78](domain/auth/controllers/class.login.php#L78-L78)

### `beforeLoginCheck`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password]` |  | 

Source: [app/domain/auth/services/class.auth.php](domain/auth/services/class.auth.php), [line 197](domain/auth/services/class.auth.php#L197-L197)

### `afterLoginCheck`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password, 'authService' => self::getInstance()]` |  | 

Source: [app/domain/auth/services/class.auth.php](domain/auth/services/class.auth.php), [line 277](domain/auth/services/class.auth.php#L277-L277)

### `afterLoginCheck`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['username' => $username, 'password' => $password, 'authService' => self::getInstance()]` |  | 

Source: [app/domain/auth/services/class.auth.php](domain/auth/services/class.auth.php), [line 282](domain/auth/services/class.auth.php#L282-L282)

### `notifyProjectUsers`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`array("type" => "projectUpdate", "module" => $notification->module, "moduleId" => $entityId, "message" => $notification->message, "subject" => $notification->subject, "users" => $this->getAllUserInfoToNotify($notification->projectId), "url" => $notification->url['url'])` |  | 
`"domain.services.projects"` |  | 

Source: [app/domain/projects/services/class.projects.php](domain/projects/services/class.projects.php), [line 246](domain/projects/services/class.projects.php#L246-L246)

### `projects.setCurrentProject`


Source: [app/domain/projects/services/class.projects.php](domain/projects/services/class.projects.php), [line 403](domain/projects/services/class.projects.php#L403-L403)

## Filters

### `filepath`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$filename` |  | 

Source: [app/core/class.theme.php](core/class.theme.php), [line 179](core/class.theme.php#L179-L179)

### `languages`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$parsedLangList` |  | 

Source: [app/core/class.language.php](core/class.language.php), [line 88](core/class.language.php#L88-L88)

### `language_resources`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$_SESSION['cache.language_resources_' . $this->language . '_' . $this->theme]` |  | 
`['language' => $this->language, 'theme' => $this->theme]` |  | 

Source: [app/core/class.language.php](core/class.language.php), [line 235](core/class.language.php#L235-L242)

### `language_resources`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->ini_array` |  | 
`['language' => $this->language, 'theme' => $this->theme]` |  | 

Source: [app/core/class.language.php](core/class.language.php), [line 326](core/class.language.php#L326-L333)

### `publicActions`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->publicActions` |  | 

Source: [app/core/class.application.php](core/class.application.php), [line 77](core/class.application.php#L77-L77)

### `headers`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['X-Frame-Options' => 'SAMEORIGIN', 'X-XSS-Protection' => '1; mode=block', 'X-Content-Type-Options' => 'nosniff', 'Access-Control-Allow-Origin' => BASE_URL]` |  | 

Source: [app/core/class.application.php](core/class.application.php), [line 161](core/class.application.php#L161-L166)

### `increment`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`300` |  | 

Source: [app/core/class.application.php](core/class.application.php), [line 202](core/class.application.php#L202-L202)

### `{$hook}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$additional_params` |  | 

Source: [app/core/class.mailer.php](core/class.mailer.php), [line 195](core/class.mailer.php#L195-L195)

### `var.{$name}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$value` |  | 

Source: [app/core/class.template.php](core/class.template.php), [line 107](core/class.template.php#L107-L107)

### `relative_plugin_template_path`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`''` |  | 
`['module' => $module, 'name' => $name]` |  | 

Source: [app/core/class.template.php](core/class.template.php), [line 142](core/class.template.php#L142-L145)

### `{$tplfilter}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$template` |  | 

Source: [app/core/class.template.php](core/class.template.php), [line 213](core/class.template.php#L213-L213)

### `{$tplfilter}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$layout` |  | 

Source: [app/core/class.template.php](core/class.template.php), [line 227](core/class.template.php#L227-L227)

### `{$tplfilter}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$layoutContent` |  | 

Source: [app/core/class.template.php](core/class.template.php), [line 252](core/class.template.php#L252-L252)

### `{$tplfilter}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$content` |  | 

Source: [app/core/class.template.php](core/class.template.php), [line 281](core/class.template.php#L281-L281)

### `{$filter}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$render` |  | 

Source: [app/core/class.template.php](core/class.template.php), [line 293](core/class.template.php#L293-L293)

### `submodule_relative_path`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"{$submodule['module']}/templates/submodules/{$submodule['submodule']}.sub.php"` |  | 
`['module' => $submodule['module'], 'submodule' => $submodule['submodule']]` |  | 

Source: [app/core/class.template.php](core/class.template.php), [line 388](core/class.template.php#L388-L395)

### `{$filter}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$language->__($note['msg'], false)` |  | 
`$note` |  | 

Source: [app/core/class.template.php](core/class.template.php), [line 421](core/class.template.php#L421-L425)

### `{$filter}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$language->__($note['msg'], false)` |  | 
`$note` |  | 

Source: [app/core/class.template.php](core/class.template.php), [line 453](core/class.template.php#L453-L457)

### `{$hookName}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$available_params` |  | 
`$this->hookContext` |  | 

Source: [app/core/class.template.php](core/class.template.php), [line 788](core/class.template.php#L788-L788)

### `relative_path`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`"/../../public/userfiles"` |  | 

Source: [app/core/class.fileupload.php](core/class.fileupload.php), [line 179](core/class.fileupload.php#L179-L179)

### `{$hook}`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$payload` |  | 
`$available_params` |  | 
`self::get_event_context($function)` |  | 

Source: [app/core/trait.eventhelpers.php](core/trait.eventhelpers.php), [line 40](core/trait.eventhelpers.php#L40-L40)

### `sql`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$sql` |  | 
`$this->getArgs(['prepareArgs' => $args])` |  | 
`4` |  | 

Source: [app/core/class.repository.php](core/class.repository.php), [line 53](core/class.repository.php#L53-L58)

### `binding.str_replace()`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$replace` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/core/class.repository.php](core/class.repository.php), [line 72](core/class.repository.php#L72-L77)

### `args`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$args` |  | 
`[]` |  | 
`5` |  | 

Source: [app/core/class.repository.php](core/class.repository.php), [line 97](core/class.repository.php#L97-L97)

### `stmn`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$this->stmn` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/core/class.repository.php](core/class.repository.php), [line 121](core/class.repository.php#L121-L121)

### `method`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$method` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/core/class.repository.php](core/class.repository.php), [line 122](core/class.repository.php#L122-L122)

### `return`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$values` |  | 
`$this->getArgs()` |  | 
`4` |  | 

Source: [app/core/class.repository.php](core/class.repository.php), [line 134](core/class.repository.php#L134-L134)

### `available_providers`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`new JIRAIntegration()` |  | 

Source: [app/plugins/JIRACloudSync/register.php](plugins/JIRACloudSync/register.php), [line 7](plugins/JIRACloudSync/register.php#L7-L10)

### `sql`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$query` |  | 

Source: [app/domain/timesheets/repositories/class.timesheets.php](domain/timesheets/repositories/class.timesheets.php), [line 342](domain/timesheets/repositories/class.timesheets.php#L342-L342)

### `sql`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`$query` |  | 

Source: [app/domain/timesheets/repositories/class.timesheets.php](domain/timesheets/repositories/class.timesheets.php), [line 503](domain/timesheets/repositories/class.timesheets.php#L503-L503)

### `available_roles`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`self::$roleKeys` |  | 

Source: [app/domain/auth/models/class.roles.php](domain/auth/models/class.roles.php), [line 29](domain/auth/models/class.roles.php#L29-L29)

### `user_session_vars`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['role' => $this->role, 'id' => $this->userId, 'name' => $this->name, 'profileId' => $this->profileId, 'mail' => $this->mail, 'clientId' => $this->clientId, 'settings' => $this->settings, 'twoFAEnabled' => $this->twoFAEnabled, 'twoFAVerified' => false, 'twoFASecret' => $this->twoFASecret, 'isLdap' => $isLdap]` |  | 

Source: [app/domain/auth/services/class.auth.php](domain/auth/services/class.auth.php), [line 305](domain/auth/services/class.auth.php#L305-L317)

### `sessions_vars_to_destroy`

**Arguments**

Argument | Type | Description
-------- | ---- | -----------
`['userdata', 'template', 'subdomainData', 'currentProject', 'currentSprint', 'projectsettings', 'currentSubscriptions', 'lastTicketView', 'lastFilterdTicketTableView']` |  | 

Source: [app/domain/auth/services/class.auth.php](domain/auth/services/class.auth.php), [line 354](domain/auth/services/class.auth.php#L354-L364)



