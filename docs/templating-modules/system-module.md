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
<%- system.clipboard() %>
```

*****

### prompt
> #### prompt(placeholder: string = '', promptMessage?: string = '', options?: string|array = null) : void
Display prompt during template rendering, providing interface for supplying dynamic data for notes when invoking template.

- `placeholder` - A unique placeholder which will receive the contents of prompt request

- `promptMessage?` - An optional prompt message.
  - If not supplied, the prompt message will be created automatically using the `placeholder` (e.g, "Enter {placeholder}")

- `options?` - Prompt options
  - If string is supplied, it will be prompt title
  - If an array of strings is supplied, they will be used as prompt choices

- `-> result` - Returns value entered by displayed prompt

:::caution IMPORTANT
If you have multiple prompts which have the same `placeholder` only the first prompt will be displayed, all further prompts will use value from first prompt.
:::

**Examples**

The following example will display a prompt message

```markdown
<%- prompt('first_name','What is your first name?') %>
```

![Text Prompt](/img/prompt-default.png)

The following example will display a prompt message including prompt title

```markdown
<%- prompt('overview','What is meeting about?','Meeting Note') %>
```

![Text Prompt](/img/prompt-text.png)

The following example will display a choice list prompt

```markdown
<%- prompt('color','What is your favorite color?',['red','green','blue','purple']) %>
```

![Template Chooser](/img/prompt-choices.png)

*****

### promptDate
> #### promptDate(placeholder? : string, question?: string) : string
Display date prompt during template rendering, providing interface for supplying dynamic data for notes when invoking template.

:::note
The date must in `yyyy-mm-dd` format
:::

- `placeholder?` - A unique placeholder which will receive the contents of prompt request

- `promptMessage?` - An optional prompt message.
  - If not supplied, default message 'Enter Date:' will be used

- `-> result` - Entered date value, if `Cancel` is clicked, result will be empty


**Example:**

The following example will display default date prompt

```markdown
<%- system.datePrompt() %>
```

![Date Prompt](/img/date-prompt.png)

The following example will display date prompt using custom prompt message

```markdown
<%- system.datePrompt('Please enter start date:') %>
```

![Date Prompt](/img/date-prompt-e2.png)

*****

### promptDateInterval
> #### promptDateInterval(placeholder? : string, question?: string) : string
Display date interval prompt during template rendering, providing interface for supplying dynamic data for notes when invoking template.

:::note
The date must in `nn[bdwnqy]` format (e.g. 5d, 3w, 2y, etc)
:::

- `placeholder?` - A unique placeholder which will receive the contents of prompt request

- `promptMessage?` - An optional prompt message.
  - If not supplied, default message 'Enter Date Interval:' will be used

- `-> result` - Entered date value, if `Cancel` is clicked, result will be empty

**Example:**

The following example will display default date interval prompt

```markdown
<%- system.promptDateInterval() %>
```

![Date Prompt](/img/date-interval-prompt.png)

The following example will display date interval prompt using custom prompt message

```markdown
<%- system.promptDateInterval('Date interval to use:') %>
```

![Date Prompt](/img/date-interval-prompt-e2.png)

*****

### selection
> #### selection() : void
Insert contents of selected text before invoking any of the `np.Templating` render commands

**Example:**

The following example will insert the contents of selected text when render command was invoked.

```markdown
<%- system.selection() %>
```
