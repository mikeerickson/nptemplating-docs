---
sidebar_position: 1
---

# Introduction

`np.Templating` is a template language plugin for NotePlan that lets you insert variables and method results into your notes.  It will also let you execute custom JavaScript constructed in the templates providing a rich note taking system.

### Installation

Install `np.Templating` using the `np.Templating Plugin Installer`

Double Click `npTemplating Plugin Installer` to install `np.Templating` Plugin

![np.TemplatingInstaller](/img/installer32.png)

:::note
The installer is only used during the beta period, once released it will be available for installing using NotePlan Plugin Installer `NotePlan -> Preferences -> Plugins`
:::

### Configuration

`np.Templating` has a number of [settings](/docs/settings) which you can use to control how data is supplied and formatted when rendering templates.

### Using Templating Commands
`np.Templating` provides a variety of built-in commands which can be invoked using NotePlan Plugin Command Bar (`Command-J`)

### Appending or Inserting Template

1. Invoke NotePlan Command Bar (`Command-J`)
2. Select `np:append` or `np:insert`
3. That's It!

### Integrating into your plugins

```javascript
import NPTemplating from 'NPTemplating'

export async function templatingHelloWorld(): Promise<void> {
  try {
    const result = await NPTemplating.renderTemplate('Template - Hello World', {})

    Editor.insertTextAtCursor(result)
  } catch (error) {
    console.log('templatingHelloWorld', error)
  }
}
```
