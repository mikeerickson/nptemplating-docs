---
sidebar_position: 7
---

# Miscellaneous

## Escaping
By default, `np.Templating` will escape all data, which under certain circumstances, may produce unexpected results. In these cases, you can use the `<%-` tag, which instructs `np.Templating` to render data as it has been received.

:::info TEMPLATING TAGS
For more information on `np.Templating` tags. Visit [`Templating - Definitions -> Template Tags`](/docs/templating-basics/template-tags)
:::

### Example 1
You can create output tags which will not auto escape data, but return the raw value in output.

In the following example, data is retrieved from a quote service, and depending on the result, may sometimes include quote marks `'` in output.

```markdown
"<%- web.quote() %>"
```

Could produce something like

```markdown
“You&#39;re doing a great job”
```

### Example 2
Using the same example, if you would like to display raw (unescaped text) you can use `<%-` tag as follows

```markdown
"<%- web.quote() %>"
```

```markdown
“You're doing a great job”
```
