---
sidebar_position: 1
---

# FAQ Overview
The following are some of the most commonly asked questions when using `np.Templating`

#### "Template"
This will typically occur when you have referenced a variable in string interpolation without surround in parenthesis and interpolation quotes

#### "Unexpected token '{'. Expected ')' to end an argument list."
This will typically occur when you have referenced a variable in string interpolation without surround in parenthesis and interpolation quotes

Before:

```html
<%- ${fname} ${lname} %>
```

After:

```html
<%- `${fname} ${lname}` %>
```
