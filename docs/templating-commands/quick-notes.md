---
sidebar_position: 2
---

# Quick Notes
Sometimes, you have templates that you apply often, and you would like to specify in advance, for example, the folder you want a new note to be placed in, the title of the note, and the template to use for the content.`np.Templating` **Quick Notes** are more specific templates for creating new notes.

## Quick Notes Templates
By default, Quick Notes templates are located in "@Templates/🗒 Quick Notes". If you would like to store your Quick Notes in a different location inside the "@Templates" folder, you can change the name of Quick Notes folder by defining the [Quick Notes setting](/docs/settings) value.

![Template Chooser](/img/templates-quick-notes.png)

*****

### Using Quick Notes
When you create a Quick Note template, it becomes available via the `np:qtn` command. When invoking the `np:qtn`, you will see the **Quick Note Template Picker**, where you can select the desired Quick Note template for which you want to create a new note.

![Template Chooser](/img/quicknotes-chooser.png)

**Step 1:** Invoke NotePlan Command Bar (`Command-J`)

**Step 2:** Type `np:qtn` (or any of the `qtn` shortcuts)

**Step 3:** Select desired template

After selecting the desired Quick Note, a new note will be created in the defined folder location as defined in the Quick Note template header.

### Quick Note Template Required Fields
Each Quick Note must contain each of the following items:

- `title` - contains the template title (this is what will appear in `np:qtn` template chooser)
- `type` - specifies that this is a Quick Note template (should be set to )`quick-note`)
- `newNoteTitle` - will be name of new note. You can use any `np.Templating` module method, such as `<%- date.now() %>`, or a prompt command such as `<%- prompt('meetingSummary','What would you like to discuss') %>`
- `folder` - path to folder where new note will be created

**Example:**

The following example outlines the 4 mandatory field in a Quick Note template

```markdown
---
---
title:  Codedungeon Call
type: quick-note
newNoteTitle: <%- prompt('meetingSummary','What would you like to discuss') %> <%- date.now() %>
folder:  "Projects/Sample/FooProject"
---
### Attendees
*Who is on call?*
@erickson

### Topics
- item 1
- item 2

### Next Actions
* action 1
* action 2
```
