---
sidebar_position: 2
---

# Template Anatomy
`np.Templating` template use format called [Frontmatter](https://jekyllrb.com/docs/front-matter/) which is commonly found in blogging platforms which utilizes templates to render dynamic content and is a great fit for the way NotePlan integrates normal note taking features, but infuses a robust calendaring system.

### Template Configuration
There are two parts to a NotePlan template, template attributes, and template body.

![NotePlan Event](/img/noteplan-default-template.png)

`attributes` - The attribute section is between open `---` and closing `---` tags. The attributes will have at least two properties `title` and `type`. NotePlan will display the frontmatter attributes in an alternate tint color

`body` - The remainder of template, after the second delimiter line`---` is the template content and will be use when template is rendered.

**Example**

```markdown
---
title: Template title
type: empty-note
---
Everything below the second `---` will be template content

--
created: <%= date.now('dddd MMMM Do, YYYY HH:mm A') %>
--

< -- [[<%= date.yesterday('YYYY-MM-DD') %>]] | [[<%= date.tomorrow('YYYY-MM-DD') %>]] -- >

And the remainder of the template will be display here ...
```

### Using Dynamic Keys
If you wish to have dynamic templates which use frontmatter tags, you can use the following syntax

- Use `{%` and `%}` template tags in desired frontmatter attribute (see `modified`)
- Use `<%= frontmatter.attributeName %>` syntax to access frontmatter attributes within template content (see `modified` reference in template)

```markdown
---
title: Dynamic Template
modified: "{%= date.now('YYYY-MM-DD h:mm A') %}"
---

This is read from frontmatter
modified: *<%= frontmatter.modified %>*
```
