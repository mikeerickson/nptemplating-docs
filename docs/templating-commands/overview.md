---
sidebar_position: 1
---

# Commands Overview
`np.Templating` provides a suite of default commands which can be executed within any note.

### Templating Initialization
There is a single command for initializing template configuration (will create new `np.Templating` [Plugin Settings](/docs/settings) if it does not exist) with new `np.Templating` configuration information).

It will also migrate existing templates in "📋 Templates" to NotePlan "Templates" folder (located in `Smart Folder` section at bottom of list) and migrate `quickNotes` defined in `_configuration` note

## Templating Creation Commands
The following default commands are included in `np.Templating` plugin and do not require any configuration

:::info
See [migration commands](/docs/templating-commands/overview#npmigrate-templates) below for more information about template migration
:::

#### Ignoring Templates
Any template which has a `type` of `ignore` will not be displayed in any of the `np.Templating` template chooser dialog

```markdown
---
title: Ignored Template
type: ignore
---
This template will not be displayed in any of the np.Templating template chooser dialog
```

*****

### np:append
`np:append` will show a list of all templates located in the `Templates` folder, and will render at the cursor location of the current note.

_aliases: npa, append, at_

### np:insert
`np:insert` will show a list of all templates located in the `Templates` folder, and will render at the beginning of the current note.

_aliases: npi, insert, it_

### np:invoke
`np:invoke` will show a list of all templates in the `Templates` folder, and will render template in current note based on the `location` attribute value in template.

#### The `location` attribute may be one of the following

> `append` appends to the end of current note (same as `np:append`)

> `cursor` inserts at the cursor position of the current note

> `insert` inserts at the beginning of current note (same as `np:insert`)

_aliases: npv, invoke_

:::note EXAMPLE
```
---
title: Location Example
type: empty-note
location: cursor
---
This content will be placed in current note using the `location` attribute
```
:::

### np:new
`np:new` will show a list of all templates in the `Templates` folder, then create a new project note using supplied note name.

_aliases: npn, new, nn_

### np:qtn
`np:qtn` will show a list of available Quick Note templates, and will create new note using selected Quick Note template.

_aliases: npq, qnt, qtn, quick, qqq_

:::important
You must assign a `type` of `quick-note` for it to be available when using `np:qtn` command. Refer to [Quick Notes](/docs/templating-commands/quick-notes) for more detailed information.
:::

## Reserved Template Attributes
When using the `np:new` or `np:qtn` commands, there are two reserved attributes which may be defined in template attributes, that when template rendered, will tell `np.Templating` the name of new note, and folder where new note will be created

### newNoteTitle
The `newNoteTitle` attribute will be used to define name of new note

:::note
If the `newNoteTitle` is not supplied, you will be prompted to enter new note title
:::

#### Example 1:
This example will use the `newNoteTitle` value of "My New Note" to create the new note.

```markdown
---
title: Sample
newNoteTitle: "My New Note"
---
```

#### Example 2:
A more useful example (static notes will just create duplicate notes in the `folder`) we can build up the note using the `np.Templating` [Date Module](/docs/templating-modules/date-module)

```markdown
---
title: Sample
newNoteTitle: "<%- prompt('meetingSummary','What would you like to discuss') %> <%- date.now() %>"
---
```

When the template is rendered, a prompt will be displayed requesting `meetingSummary` and then appended with the current date (e.g. "Talk about Templating 2022-04-25")

### folder
The `folder` attribute will be used to define where new note is created

:::note
If folder not supplied, the new note will be created at the root level of your project notes)
:::

#### Example 1:
The following example will use the "current note folder location" as location where new note will be created

```markdown
---
title: Current Folder
folder: <current>
---
```

#### Example 2:
The following example will display list of all folders to choose location of new note

```markdown
---
title: Current Folder
folder: <select>
---
```

![np.TemplatingInstaller](/img/folder-chooser.png)


#### Example 3:
The following construct the `folder` location using using fixed values first part of folder location, with last folder using [Date Module](/docs/templating-modules/date-module) `date.now('YYYY-MM')`

```markdown
---
title: Custom Folder
folder:  "- 🛠 Projects/00 - 👨🏽‍💻codedungeon/📆 Meetings/<%- date.now('YYYY-MM') %>"
---
```

When rendered, `folder` value will appear something like

"- 🛠 Projects/00 - 👨🏽‍💻codedungeon/📆 Meetings/2022-04 (the last part will change dynamically based on current date using the 'YYYY-MM' format supplied to `date.now()`)"

## Templating Utility Commands

### np:init
`np:init` will create or update the `np.Templating` [Plugin Settings](/docs/settings)

### np:about
`np:about` will display current version information

![Template Chooser](/img/templating-about.png)

### np:migrate-templates
`np:migrate-templates` will migrate existing legacy templates in "📋 Templates" to NotePlan "Templates" folder. In addition, if you have any `quickNotes` in your `_configuration` notes, they will also be migrated to "Templates" folder within "🗒 Quick Notes" folder

:::note
If you are install `np.Templating` for the first time, this migration will happen automatically when `np.Templating` plugin is installed.
:::

### np:migrate-quick-notes
`np:migrate-quick-notes` will migrate any templates defined in `quickNotes` in your `_configuration` notes.

:::note
If you are install `np.Templating` for the first time, this migration will happen automatically when `np.Templating` plugin is installed.
:::
