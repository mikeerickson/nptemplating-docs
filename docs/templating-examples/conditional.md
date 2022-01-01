---
sidebar_position: 5
---

# Conditionals

#### if logic

```markdown
<%if (1 > 0) { %>
// Do something with more than 1 recipe
<% } %>
```

#### if/else logic

```markdown
<%if (1 > 0) { %>
 true
<% } else { %>
 else
<% } %>
```

#### if logic (single line)
*note: the next line will only appear if the current day is Saturday*

```markdown
<%if (date.dayNumber(`${np.pivotDate}`) === 6) { %>do stuff on Saturday<% } %>
```

#### if/else logic (single line)

```markdown
<%if (1 > 0) { %>true<% } else { %>else<% } %>
```

#### ternary logic

```markdown
true: <%= true ? 'pass' : 'fail' %>
false: <%= false ? 'pass' : 'fail' %>

<%- date.dayNumber(`${np.pivotDate}`) === 0 ? '> 📖 [Refuge CCHB](https://refugehb.online.church/)' : '' %>
```
