---
sidebar_position: 1
---

# Modules Overview
`np.Templating` includes a suite of modules which are available for inclusion in any template. Each module has a specific category (aka "namespace") which is used within your templates.

## Modules
The following modules are included in `np.Templating`

### Date Module
The [Date Module](/docs/templating-modules/date-module) provides methods and variables which work with dates.

### Time Module
The [Time Module](/docs/templating-modules/time-module) provides methods and variables which work with dates.

### System Module
The [System Module](/docs/templating-modules/system-module) provides a suite of methods which provide access to system level commands such as clipboard or current selection

### Utility Module
The [Utility Module](/docs/templating-modules/utility-module) provides a suite of utility methods which can be used in your templates

### Web Module
The [Web Module](/docs/templating-modules/web-module) provides a suite of methods which provide access to web APIs such as advice, affirmation or weather.

## Examples
The following are some examples of how you can use these modules within your templates.

```markdown
// inserts current date
<%- date.now() %>
```

```markdown
// inserts current time
<%- time.now() %>
```

```markdown
// insert contents of clipboard
<%- system.clipboard() %>
````

```markdown
// format string with titleCase
<%- utils.titleCase('mike') %>
```

```markdown
// return random advice
<%- web.advice('mike') %>
```
