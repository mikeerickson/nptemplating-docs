---
sidebar_position: 5
---

# System Module

## Overview
The System Module provides a suite of methods which provide access to system level commands such as clipboard or current selection

## Methods
> namespace: `system`

The following are the methods available in the System Module, and they can be used in any `np.Templating` template, no additional configuration.

*****

### clipboard
> #### clipboard() : void
Insert contents of system clipboard

**Example:**

The following example will insert the contents of the clipboard within template

```markdown
<%= system.clipboard() %>
```

*****

### selection
> #### selection() : void
Insert contents of selected text before invoking any of the `np.Templating` render commands

**Example:**

The following example will insert the contents of selected text when render command was invoked.

```markdown
<%= system.selection() %>
```
