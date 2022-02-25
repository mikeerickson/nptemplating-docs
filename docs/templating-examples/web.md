---
sidebar_position: 14
---

# Web Services

## Overview
`np.Templating` provides a variety of methods which are designed to work with web servers (aka APIs) and will require an active internet connection to complete operation, something that is common place for applications these days.

## Examples
The following are some examples using the `np.Templating` WebModule

### Get Random Advice
In addition to the `np:advice` command, you can also get a random quote within any template

```markdown
<%= web.advice() %>
```

### Get Random Quote

```markdown
<%= web.quote() %>
```

### Accessing Web Service
Using the `web.service()` method, you an access can item in the _TODO_ `Web Services` in np.Templating Settings (NotePlan -> Preferences -> Plugins -> Settings). For complete details, please refer to [Templating Modules | Web Module](/docs/templating-modules/web-module)

```markdown
<%= web.service('developerQuote') %>
```
