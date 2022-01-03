---
sidebar_position: 6
---

# Prompts
`np.Templating` provides the ability to present user prompts when rendering templates.

:::note
For [more information](/docs/templating-examples/prompt) on `npTemplating` prompting interface
:::

## Prompt Options
`np.Templating` supports prompts two types of prompts, with no configuration required

### Example 1
When rendering template, when a tag references a variable that does not exist `<%= firstName %>` a prompt will be displayed

### Example 2
You can also use the `prompt` method in your template, which will display either an input request, or if choice list items are supplied, it will display a choice prompt

```markdown
<%= prompt('firstName','Enter First Name')%>

<%= prompt('ageGroup','Select Age Group',['0-9','10-19','20-29','30-39','40+']%>
```

Would render the following (assuming `firstName` = `Mike`, `ageGroup` = `20-29`)

```markdown
Mike
20-29
```
