---
sidebar_position: 3
---

# Arrays
The following example demonstrates how to access `templateData` arrays.

## Setup Arrays in custom method

```js
// @flow

import NPTemplating from 'NPTemplating'

const templateData = {
      books: [
        { TITLE: 'The Sobbing School: Poems', AUTHOR: 'Joshua Bennett' },
        { TITLE: `Ain't No Mo'`, AUTHOR: 'Jordan E. Cooper' },
        { TITLE: 'A Particular Kind of Black Man', AUTHOR: 'Tope Folarin' },
        { TITLE: 'Where We Stand', AUTHOR: 'Donnetta Lavinia Grays' },
        { TITLE: 'Invasive species', AUTHOR: 'Marwa Helal' },
        { TITLE: 'The Sirens of Mars', AUTHOR: 'Sarah Stewart Johnson' },
        { TITLE: 'The NotePlan Templating Guide', AUTHOR: 'Mike Erickson' },
      ],
    }

const result = await NPTemplating.renderTemplate('Test (Books)', templateData)

Editor.insertTextAtCursor(result)
```

## Template

```markdown
# Test (Books)
---
Display array of books using JavaScript `.forEach`
<% books.forEach(function(book){ %>
**<%- book.TITLE %>**: <%- book.AUTHOR %><%
}) %>
```

## Output

```markdown
Display array of books using JavaScript `.forEach`

**The Sobbing School: Poems**: Joshua Bennett
**Ain't No Mo'**: Jordan E. Cooper
**A Particular Kind of Black Man**: Tope Folarin
**Where We Stand**: Donnetta Lavinia Grays
**Invasive species**: Marwa Helal
**The Sirens of Mars**: Sarah Stewart Johnson
**The NotePlan Templating Guide**: Mike Erickson
```
