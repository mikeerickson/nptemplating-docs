---
sidebar_position: 1
---

# Commands Overview
`np.Templating` provides a suite of default commands which can be executed within any note.

### Templating Initialization
There is a single command for initializing template configuration (will create new `np.Templating` [Plugin Settings](/docs/settings) if it does not exist) with new `np.Templating` configuration information)
:::info
This command will also be automatically whenever an `np.Templating` command is executed, thus it is not required
:::

#### np:init
`np:init` will create or update the `np.Templating` [Plugin Settings](/docs/settings)

#### np:migrate-templates
`np:migrate-templates` will migrate existing legacy templates in "📋 Templates" to NotePlan built-in "@Templates" folder. In addition, if you have any `quickNotes` in your `_configuration` notes, they will also be migrated to "@Templates" folder within "🗒 Quick Notes" folder

:::note
If you are install `np.Templating` for the first time, this migration will happen automatically when `np.Templating` plugin is installed.
:::

#### np:migrate-quick-notes
`np:migrate-quick-notes` will migrate any templates defined in `quickNotes` in your `_configuration` notes.

:::note
If you are install `np.Templating` for the first time, this migration will happen automatically when `np.Templating` plugin is installed.
:::

### Templating Creation Commands
The following default commands are included in `np.Templating` plugin and do not require any configuration

#### np:append
`np:append` will show a list of all templates located in the `Templates` folder, and will render at the cursor location of the current note.

#### np:insert
`np:insert` will show a list of all templates located in the `Templates` folder, and will render at the beginning of the current note.

#### np:new
`np:new` will show a list of all templates in the `Templates` folder, then create a new project note using supplied note name.

#### np:qtn
`np:qtn` will show a list of Quick Note templates located in the `Quick Notes` folder, and will create new note using selected Quick Note.

### Templating Service Commands
The following commands can be used to insert various web service commands

#### np:advice
`np:advice` will insert random advice at the cursor location of the current note.

#### np:affirmation
`np:affirmation` will insert random affirmation at the cursor location of the current note.

#### np:quote
`np:quote` will insert random quote at the cursor location of the current note.

#### np:verse
`np:verse` will insert random bible verse at the cursor location of the current note.

#### np:weather
`np:weather` will insert weather of current location at the cursor location of the current note using format defined in `np.Templating` [settings](/docs/settings).

:::info
Refer to [Web Module](/docs/templating-modules/web-module) for adding more detailed weather information in your templates
:::
