---
sidebar_position: 10
---

# Prompts
`np.Templating` provides the ability to present user prompts when rendering templates.

## Prompt Options
`np.Templating` supports prompts two types of prompts, with no configuration required.

By default, `np.Templating` will present a prompt consecutively as it processes the template for any missing variable contained in your template.

### Example 1
For example, if you have a display tag `<%=` in your template which is not in your template data, a prompt will be displayed

```markdown
<%= firstName &>
```

![Templating Prompt](/img/prompt1.png)

### Example 2
Alternatively, you can use the `prompt` command, which can accept optional prompt message and well as choices (for use with choice list prompt)

:::danger
When using `prompt` command, you must supply a valid variable name (e.g. `name`) and the variable must contain valid characters
- must start with an alpha character (a..z, A..Z)
- may only contain alphanumeric characters (a..z, A..Z, 0..9)
:::

:::caution
When using `prompt` method, you must supply a unique `variable` (e.g. `priority`).

If you wish to use the same `variable` anywhere below the `prompt` command, you simply supply variable in output tags `<%= priority %>`
:::
Using the following template

```markdown
Task Priority: <%= prompt('priority','What is task priority?',['high','medium','low']) %>

Use the same variable anywhere else in template `<%= priority %>`
```

When template is rendered, it will display a choice list prompt

![Templating Choice Prompt](/img/prompt2.png)

## Example 3
The following example demonstrates how you can place prompts at the top of templates, and then use somewhere else in the template

```markdown
<% prompt('lastName','What is your last name?') -%>

The rest of this could be your template code
And then finally use the `lastName` variable
<%= lastName %>
```

The template would render as follows, with the `lastName` value result from prompt on first line (assuming entered `lastName` Erickson)

```markdown
The rest of this could be your template code
And then finally use the `lastName` variable
Erickson
```
