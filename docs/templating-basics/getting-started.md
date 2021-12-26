---
sidebar_position: 1
---

# Getting Started

With `np.Templating`, you will be able to create powerful templates to automate common manual tasks.

## Quick Example

The following template uses the templating syntax:

```markdown
# Templating Example
This template can be used as a quick daily note

* The first section surrounded by `--` will provide information when the note was created.
* The second line creates backlinks to previous and next day notes
* The last section will create a random quote using the Web Module
---

--
created: <%= date.now('dddd MMMM Do, YYYY HH:mm A') %>
--

← [[<%= date.now('YYYY-MM-DD', -1) %>]] | [[<%= date.now('YYYY-MM-DD',1) %>]] →

> <%= web.quote() %>
```

Will produce the following result when note when inserted

```text
--
created: Friday December 24th, 2021 04:23 AM
--

← [[2021-12-23]] | [[2021-12-25]] →

> “You can fail at what you don't want. So you might as well take a chance on doing what you love.”
```
