---
sidebar_position: 3
---

# Template Tags
`np.Templating` uses a tagging system to indicate where dynamic content will be generated within template notes.

## Tags
- `<%` Script tag to be used when executing any JavaScript command without producing any output
- `<%~` Output control-flow variables ([example](/docs/templating-examples/looping))
- `<%_` ‘Whitespace Slurping’ Template tag, strips all whitespace before it ([example](#strip-whitespace))
- `<%=` Outputs the value into the template (HTML escaped)
- `<%-` Outputs the unescaped value into the template
- `<%@` Display Prompt (same as using `<%- prompt(...) %>`)
- `<%#` Comment tag, no execution, no output
- `<%%` Outputs a literal '<%'
- `-%>` ‘Whitespace Slurping’ Template tag, strips all whitespace after it ([example](#strip-whitespace))
- `%>` Plain ending tag

:::danger IMPORTANT CONTROL-FLOW VARIABLE OUTPUT
When outputting control variables in [loops](/docs/templating-examples/looping), you must use `<%~` otherwise the templating processor will see it as a missing variable and prompt for value
:::

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
Display `first` name variable contained in `np.Templating` [Plugin Settings](/docs/settings)

```markdown
<%= user.first %>
```

### Standard output tag (module method)
Displays current date from [Date Module](/docs/templating-modules/date-module)

```markdown
<%= date.now() %>
```

### Unescaped Output Tag
Displays result from `templates.services.developerQuote` defined in `np.Templating` [Plugin Settings](/docs/settings)

:::info
`np.Templating` doesn't escape characters by default. When doing web requests, it may be useful to escape dangerous characters. You can escape a command's response characters using the `<%-` tag.
:::

```markdown
<%- web.service('developerQuote') %>
```

### Strip Whitespace
When you have have process tags (this which do no produce output), it is recommended that you use the `Whitespace Slurping` tags.

```markdown
<%_ const testName = 'Mike' -%>
name: <%= user.testName %>
```

will produce the following output (notice it only contains the line which produces output `<%=`)

```markdown
name: Mike
```
