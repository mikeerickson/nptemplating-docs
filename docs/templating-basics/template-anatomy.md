---
sidebar_position: 2
---

# Template Anatomy
`np.Templating` supports a variety of template formats:

- Template Configuration - Default
- Template Configuration - Extended
- Template Configuration - Frontmatter

## Template Configuration - Legacy
The first step to using `np.Templating` is to create a template in your NotePlan **Templates** folder

![Templating Prompt](/img/template-folder-border.png)

:::info
If your template does not have a horizontal rule (`---`) the first line will be template title, the remainder of template will be content
:::

### Section 1: Template Title
All templates must have a unique name, with the first line being template name

```markdown
# Template Name
```

### Section 2: Template Meta Data
The next section in a template note can be any meta data you wish, such as description of template usage, etc.

```markdown
# Template Name
Template meta data goes here
```

### Section 3: Template Separator
The next section will be a `Line Separator` (`NotePlan Menu -> Format -> Line Separator`) or by using `---` or `*****`

```markdown
# Template Name
Template meta data goes here
---
```

### Section 4: Template Content
The remainder of the template note is your desired template content.  When the template is rendered, it will use everything below the separator line

```markdown
# Template Name
Template meta data goes here
---
Hello World!
```

## Template Configuration - Frontmatter
In addition to the standard template configuration, `np.Templating` also supports templates using frontmatter format

### Basic Format
The standard Frontmatter format defines template attribute definition, with everything after starting `---` and ending with `---`.  The remainder of template is the template content and will be use when template is rendered.

```markdown
---
title: Template title
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
