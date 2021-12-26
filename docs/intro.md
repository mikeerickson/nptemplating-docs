---
sidebar_position: 1
---

# Introduction

np.Templating is a template language plugin for NotePlan that lets you insert variables and method results into your notes.  It will also let you execute custom JavaScript constructed in teh tempaltes providing a rich note taking system.

## Getting Started

Install np.Templating using the npTemplating Plugin Installer

_Note: The installer is only used during the beta period, once released it will be available as part of general NotePlan release_

- Double Click `npTemplating Plugin Installer` to install Templating Plugin

![np.TemplatingInstaller](/img/npTemplatingInstaller.png)

### Appending or Inserting Template

1. Invoke NotePlan Command Bar (`Command-J`)
2. Select `np:append` or `np:insert`
3. That's It!

### Integrating into your plugins

```javascript
import NPTemplating from 'NPTemplating'

export async function templatingHelloWorld(): Promise<void> {
  try {
    const result = await NPTemplating.renderTemplate('Template (Hello World)', {})

    Editor.insertTextAtCursor(result)
  } catch (error) {
    showError('templateInstantiation', error)
  }
}
```
