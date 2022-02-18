---
sidebar_position: 4
---

# Note Module

## Overview

The Note Module provides methods and variables which work with NotePlan notes (either current note, or new note created by `np.Templating.newNote`).

## Methods
> namespace: `note`

The following are the methods available in the Note Module, and they can be used in any `np.Templating` template, no additional configuration is required.

*****
> #### setCursor([line?: number = null, position?: number = null])
Regardless of placement in template, the cursor position will change, thus you need to be mindful of where this method is called within your template.

:::tip
If you call `setCursor` without any parameters `<% note.setCursor() %>` the cursor will be placed wherever this reference exists on the rendered note.
:::

:::important
`line` and `position` are zero based, if you want cursor at line 1, beginning of line, it would be `note.setCursor(0,0)`
:::

- `line?` - Line number to where you wish to position cursor

- `position?` - Horizontal position where you wish to position cursor

Example:

The following example would place cursor at the beginning of rendered note

```markdown
<% note.setCursor(0,0) %>
```

The following example will place the cursor at the position where it exists in rendered note.

```markdown
<% note.setCursor() %>
```

*****
