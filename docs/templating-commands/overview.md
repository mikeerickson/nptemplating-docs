---
sidebar_position: 1
---

# Commands Overview
`np.Templating` provides a suite of default commands which can be executed within any note.

### Templating Initialization
There is a single command for initializing template configuration (will create new `_configuration` note if it does not exist, otherwise it will update exsting `_configuration` note) with new `np.Templating` configuration information)
:::info
This command will also be automatically whenever an `np.Templating` command is executed, thus it is not required
:::

#### np:init
`np:init` will create or update the `np.Templating` `_configuration` note. If the `_configuration` note has already been initialized, this command will have no affect.

### Templating Creation Commands
The following default commands are included in `np.Templating` plugin and do not require any configuration

#### np:append
`np:append` will show a list of all templates located in `📋 Templates` folder, and will render at the cursor location of the current note.

#### np:insert
`np:insert` will show a list of all templates located in `📋 Templates` folder, and will render at the beginning of the current note.

#### np:new
`np:new` will show a list of all templates in `📋 Templates` folder, then create a new project note using supplied note name.

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
`np:weather` will insert weather of current location at the cursor location of the current note.
