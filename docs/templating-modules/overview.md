---
sidebar_position: 1
---

# Overview
np.Templating includes a suite of modules which are available for inclusion in any template. Each module has a specific category (aka "namespace") which is used within your templates.

## Examples
The following are some examples of how you can use these modules within your templates.

```markdown
// inserts current date
<%= date.now() %>
```

```markdown
// inserts current time
<%= time.now() %>
```

```markdown
// insert contents of clipboard
<%= system.clipboard() %>
````

```markdown
// format string with titleCase
<%= utils.titleCase('mike') %>
```

```markdown
// return random advice
<%= web.advice('mike') %>
```
