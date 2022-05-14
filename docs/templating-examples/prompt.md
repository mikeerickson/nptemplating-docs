---
sidebar_position: 10
---

# Prompts
`np.Templating` provides the ability to ask the user questions through prompts when rendering templates.

## Asking for general text
`np.Templating` supports prompts four types of prompts, with no configuration required.

By default, `np.Templating` will present a prompt consecutively as it processes the template for any missing variable contained in your template.

### Example 1: from display tags
For example, if you have a display tag `<%@` in your template which is not in your template data, a prompt will be displayed

```markdown
<%@ firstName &>
```

![Templating Prompt](/img/prompt-default.png)

### Example 2: `prompt` command
Alternatively, you can use the **`prompt` command**, which can accept optional prompt message and well as choices (for use with choice list prompt)

:::danger PROMPT PLACEHOLDER
When using `prompt` command, you must supply a valid placeholder name (e.g. `name`) and the variable must contain valid characters
- must start with an alpha character (a..z, A..Z)
- may only contain alphanumeric characters (a..z, A..Z, 0..9)
- may **not** contain spaces
:::

Using the following template

```markdown
Task Priority: <%- prompt('priority','What is task priority?',['high','medium','low']) %>

Use the same variable anywhere else in template `<%- priority %>`
```

When template is rendered, it will display a choice list prompt

![Templating Choice Prompt](/img/prompt2.png)

### Example: Define early; use later
The following example demonstrates how you can place prompts at the top of templates, and then use somewhere else in the template

```markdown
<% prompt('lastName','What is your last name?') -%>

The rest of this could be your template code
And then finally use the `lastName` variable
<%- lastName %>
```

The template would render as follows, with the `lastName` value result from prompt on first line (assuming entered `lastName` Erickson)

```markdown
The rest of this could be your template code
And then finally use the `lastName` variable
Erickson
```

## Asking for dates or date intervals
There are two further commands available:
- **`promptDate('question','message')`**, which accepts dates of form `YYYY-MM-DD`
- **`promptDateInterval('question','message')`**, which accepts date intervals of form `nnn[bdwmqy]`, as used and documented further in the [**Repeat Extensions** plugin](https://github.com/NotePlan/plugins/tree/main/jgclark.RepeatExtensions).

Both require the first parameter to be 'question', but accept an optional prompt message. They must be placed where the text is to be used.  For example:

```markdown
Project start date: <%- promptDate('question','Enter start date:') %>
Review frequency: <%- promptDateInterval('question','Enter review interval:') %>
```
