---
sidebar_position: 3
---

# Meeting Notes
Like Quick Notes, you have templates that you apply often, and you would like to specify in advance, for example, the folder you want a new note to be placed in, the title of the note, and the template to use for the content.`np.Templating` **Meeting Notes** are more specific templates for creating new notes.

## Meeting Notes Templates
By default, Meeting Notes templates are located in "🗓 Meeting Notes" folder, however you can place them where you wish within the "@Templates" folder.

![Template Chooser](/img/templates-meeting-notes.png)

:::caution
Due to utilization of advanced templating features, Meeting Note templates must be frontmatter style, legacy templates are **not** supported.
:::

*****

### Using Meeting Notes
When you create a Meeting Note template, it becomes available via the `np:mtn` command. When invoking the `np:mtn`, you will see the **Meeting Note Template Picker**, where you can select the desired Meeting Note template for which you want to create a new note.

![Template Chooser](/img/meeting-note-chooser.png)

**Step 1:** Invoke NotePlan Command Bar (`Command-J`)

**Step 2:** Type `np:mtn` (or any of the `mtn` [aliases](/docs/templating-commands/overview/#npmtn))

**Step 3:** Select desired template

After selecting the desired Meeting Note, a new note will be created in the defined folder location as defined in the Meeting Note template header.

:::note
If you only have a single Meeting Note in the "🗓 Meeting Notes" folder, it will be selected automatically and the Template Chooser dialog will not be displayed.
:::

### Meeting Note Template Required Attributes
Each Meeting Note must contain each of the following items:

- `title` - contains the template title (this is what will appear in `np:qtn` template chooser)
- `type` - specifies that this is a Meeting Note template (should be set to `meeting-note`)
- `folder` - path to folder where new note will be created

In addition, you can use an optional field for `newNoteTitle` which will be used when creating new note. If not supplied, you will be prompted to enter `newNoteTitle`

- `newNoteTitle` - will be name of new note. You can use any `np.Templating` module method, such as `<%- date.now() %>`, or a prompt command such as `<%- prompt('meetingSummary','What would you like to discuss') %>`


:::danger
All template attributes values must start with an alpha character (a..z, A..Z) and may not include illegal characters such as `#` otherwise must be surrounded with double quotes. To be safe with any frontmatter attribute, it is always a good idea to wrap in quotes as to not lead to issues down the road.
:::

**Bad:**

The following attribute value will cause any FrontMatter module method to return an empty attribute block
```
title: - invalid character
```

**Good:**

The following attribute value be properly parsed as it is surrounded in quotes

```
title: "- invalid character"
```

:::

**Example:**

The following example outlines the 3 mandatory field in a Meeting Note template

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
