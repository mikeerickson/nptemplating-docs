---
sidebar_position: 1
---

# Overview
`np.Templating` is a brand new templating plugin for NotePlan, which has been designed to be an upgrade to the current `nmn.Templates` templating plugin.

The following guide provides steps necessary for migrating from `Templates` (aka `nmn.Templates`) to `np.Templating`

## Validating Templates
The first step will be to validate your templates have migrated successfully when `np.Templating` was installed.

:::info
During the `np.Templating` process, all your templates which were located in you 📋 Templates folder were migrated and converted to the `np.Templating` syntax
:::

If you have templates which were not migrated correctly (we have attempted to cover all the possible templates, but there may be ones that `np.Templating` was not able to convert).

The following steps should be followed to convert your templates to `np.Templating` format.

#### Step 1: Change Template Tags
`np.Templating` uses `<%=` and `%>` as opening and closing template tags

For example, if you are using something like the following:

```js
{{formattedDateTime({format: '%A, %B %d, %Y'})}}
```

Replace with

```js
<%= formattedDateTime({format: '%A, %B %d, %Y'}) %>
```

## Disable Templates
The final step will be disabling Templates

**Step 1:** Open NotePlan Preferences (`NotePlan -> Preferences...`)

**Step 2:** Select Plugins

**Step 3:** Uncheck `Templates` checkbox to uninstall legacy Templates

![Templating Prompt](/img/templates-uninstall.png)

**Step 4:** Quit & Relaunch NotePlan

**Step 5:** Enjoy `np.Templating`
