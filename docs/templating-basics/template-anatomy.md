---
sidebar_position: 3
---

# Template Anatomy

## Template Configuration
The first step to using np.Templating is to create a template in your NotePlan templates folder.

All NotePlan templates will exist in the `📋 Templates` folder in your project notes.

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
