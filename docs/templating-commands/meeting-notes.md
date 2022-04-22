---
sidebar_position: 3
---

# Meeting Notes
Like Quick Notes, you have templates that you apply often, and you would like to specify in advance, for example, the folder you want a new note to be placed in, the title of the note, and the template to use for the content.`np.Templating` **Meeting Notes** are more specific templates for creating new notes.

However, unlike a meeting note which is attached to a specific NotePlan event, `np.Templating` meeting notes will allow you to create detached meeting notes

## Meeting Notes Templates
By default, Meeting Notes templates are located in the "🗓 Meeting Notes" folder. However, you can place them where you wish within the "@Templates" folder.

![Template Chooser](/img/templates-meeting-notes.png)

:::caution
Due to utilization of advanced templating features, Meeting Note templates must use the frontmatter style; legacy templates are **not** supported.
:::

*****

### Using Meeting Notes
When you create a Meeting Note template, it becomes available via the `np:mtn` command. When invoking the `np:mtn`, you will see the **Meeting Note Template Picker**, where you can select the desired template to create a new Meeting Note.

![Template Chooser](/img/meeting-note-chooser.png)

**Step 1:** Invoke the NotePlan Command Bar (`Command-J`)

**Step 2:** Type `np:mtn` (or any of the `mtn` [aliases](/docs/templating-commands/overview/#npmtn))

**Step 3:** Select the desired template

After selecting the desired Meeting Note, a new note will be created in the folder defined in the Meeting Note template header.

:::important
If you only have a single Meeting Note in the "🗓 Meeting Notes" folder, it will be selected automatically and the Template Chooser dialog will not be displayed.
:::

### Meeting Note Template Required Attributes
Each Meeting Note must contain all of the following items:

- `title` - contains the template title (this is what will appear in `np:qtn` template chooser)
- `type` - specifies that this is a Meeting Note template (should be set to `meeting-note`)
- `folder` - path to folder where new note will be created
  - if `folder` has a value of `<select>` a new note will be created in the selected folder
  - if `folder` has a value of `<current>` a new note will be created in the folder of the currently displayed note
  - if `folder` has a value of `<current>` but you are not displaying a note, then a new note will be created in the selected folder

In addition, you can use an optional field for `newNoteTitle` which will be used when creating new note. If not supplied, you will be prompted to enter `newNoteTitle`

- `newNoteTitle` - will be name of new note. You can use any `np.Templating` module method, such as `<%- date.now() %>`, or a prompt command such as `<%- prompt('meetingSummary','What would you like to discuss') %>`


:::danger ATTRIBUTE NAMING REQUIREMENTS
All template attributes values must start with an alpha character (a..z, A..Z) and may not include illegal characters such as `#` unless the attribute value is surrounded with double quotes. To be safe with any frontmatter attribute, it is always a good idea to wrap it in quotes to prevent issues down the road.
:::

**Bad:**

The following attribute value will cause any FrontMatter module method to return an empty attribute block:
```
title: - invalid character
```

**Good:**

The following attribute value be properly parsed since it is surrounded in quotes:

```
title: "- invalid character"
```

:::

**Example:**

The following example outlines the three mandatory fields in a Meeting Note template:

```markdown
---
title:  Meeting Note
type: meeting-note
folder: "- 📅 Daily Notes/Meeting Notes/<%- date.now('YYYY-MM') %>"
---
#### 👥 Attendees
*The following were in attendance, or joined as a special guest(s) during the meeting*

*****
## 🗣 Discussion Topics
*List of key discussion topics*
<%- discuss %>
*****
## 🧭 Minutes
*Record of important events during meeting*

*****
## ✅ Action Items
*Any actions that have been assigned during discussion (make sure to note who was assigned follow-up task and due date if applicable)*

* Example (@assignee) : Task (>2022-01-04)
```
