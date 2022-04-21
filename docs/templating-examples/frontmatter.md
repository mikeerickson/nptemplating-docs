---
sidebar_position: 7
---

# Frontmatter
`np.Tempalating` provides support for using frontmatter formatted templates. The frontmatter content is between `--` separators

```markdown
# Test (Frontmatter)
--
name: Mike Erickson
phone: 714.555.1212
--
The rest of the template content follows...
```

## Expanding tags in frontmatter header
When frontmatter templates are rendered, the content between frontmatter tags `--` use alternate start `{%` and end `%}` tags, which can then accessed outside the frontmatter tags.  You can then access the frontmatter tags within rest of template

```markdown
--
...
modified: {%= date.now('YYYY-MM-DD h:mm A') %}
...
--
```

You can then access these frontmatter variable within the template content

```
modified: *<%= frontmatter.modified %>*
```

When template is rendered, it will display as

```markdown
modified: *2021-12-31 10:36 AM*
```

### Example: Complete Frontmatter Template
The following example demonstates a complete frontmatter format template

```markdown
# Test (Frontmatter)
￼--
name: Mike Erickson
phone: 714.555.1212
modified: {%= date.now('YYYY-MM-DD h:mm A') %}
description: The following content will be ignored when rendering a frontmatter template and cannot contain any carriage returns (this note is auto wrapped)
--
#### Frontmatter Objects
The following is normal template content

name: *<%= frontmatter.name %>*
phone: *<%= frontmatter.phone %>*

#### Other Templating Variables

<%= user.first %> <%= user.last %>
<%= date.now() %>

*****
modified: *<%= frontmatter.modified %>*
```

When template is rendered, it will appear as

```markdown
#### Frontmatter Objects
The following is normal template content

name: *Mike Erickson*
phone: *714.555.1212*

#### Other Templating Variables

Mike Erickson
2021-12-24

*****
modified: *2021-12-24 10:36 AM*
```
