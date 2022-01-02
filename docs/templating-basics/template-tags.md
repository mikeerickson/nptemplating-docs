---
sidebar_position: 3
---

# Template Tags
`np.Templating` uses a tagging system to indicate where dynamic content will be generated within template notes.

## Tags
- `<%` 'Template' tag, for control-flow, no output
- `<%_` ‘Whitespace Slurping’ Template tag, strips all whitespace before it
- `<%=` Outputs the value into the template (HTML escaped)
- `<%-` Outputs the unescaped value into the template
- `<%#` Comment tag, no execution, no output
- `<%%` Outputs a literal '<%'
- `%>` Plain ending tag

## Output Tags
As defined above, there are two different output tags available

- `<%=` Normal escaped output, will display results of the defined action, either variable or method
- `<%-` Unescaped output, will display results of defined action, either variable or method.  This will commonly be used when result contains characters such as quote marks.

## Examples
The following are various examples of `np.Templating` tags in action

### Standard Flow Control Tag
The standard flow tag `<%` is used when you want to perform a standard JavaScript action such as [looping](/docs/templating-examples/looping) or [conditionals](/docs/templating-examples/conditional).  In this example, a `getData` method would be called, but the actual output would be displayed in another section of template.

```markdown
<% const data = await getData() %>
...
<%= data %>
```

### Standard output tag (variable)
Display `fname` variable contained in templates section from _configuration note

```markdown
<%= fname %>
```

### Standard output tag (module method)
Displays current date from DateModule

```markdown
<%= date.now() %>
```

### Unescaped Output Tag
Displays result from `templates.services.developerQuote` defined in `_configuration` note

:::info
`np.Templating` doesn't escape characters by default. When doing web requests, it may be useful to escape dangerous characters. You can escape a command's response characters using the `<%-` tag.
:::

```markdown
<%- web.service('developerQuote') %>
```
