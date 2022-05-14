---
sidebar_position: 6
---

# Prompts
`np.Templating` provides the ability to present user prompts when rendering templates.

:::info TEMPLATING PROMPT EXAMPLES
For more `np.Templating` prompt examples, refer to the [examples](/docs/templating-examples/prompt) section.
:::

:::danger PROMPT PLACEHOLDER
When using `prompt` command, you must supply a valid placeholder name (e.g. `name`) and the variable must contain valid characters
- must start with an alpha character (a..z, A..Z)
- may only contain alphanumeric characters (a..z, A..Z, 0..9)
- may **not** contain spaces
:::

## Prompt Options
`np.Templating` supports prompts four types of prompts, with no configuration required

### Example 1: Standard Prompt Interface
The most common prompting interface is to use the following

```markdown
<%- prompt('name','Enter Name:') %>
```

### Example 2: Using Prompt Tag
You can use the `<%@` tag to display prompt

:::note
When using the `<%@` prompt tag, the entered value will always be displayed at that point.  If you want to display a prompt, but do not want it value immediately displayed, use example 2 below
:::

```markdown
<%@ ('name','Enter Name:')%>
```

### Example 3: Prompting without displaying entered value
If you wish to display a prompt, but do not want to immediately render the entered value, you can use the `<%` (without the output option)

```markdown
<% prompt('name','Enter your name'%>

You can then display the value somewhere further down in your template

<%- name %>
```

### Example 4 : Prompt with input or choices
You can also use the `prompt` method in your template, which will display either an input request, or if choice list items are supplied, it will display a choice prompt

```markdown
<%- prompt('firstName','Enter First Name')%>

<%- prompt('ageGroup','Select Age Group',['0-9','10-19','20-29','30-39','40+']%>
```

Would render the following (assuming `firstName` = `Mike`, `ageGroup` = `20-29`)

```markdown
Mike
20-29
```
