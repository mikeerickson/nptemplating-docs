---
sidebar_position: 1
---

# Legacy Template Migration
`np.Templating` is a brand new templating plugin for NotePlan, which has been designed to be an upgrade to the current `nmn.Templates` templating plugin.

The following guide provides steps necessary for migrating from `Templates` (aka `nmn.Templates`) to `np.Templating`

:::caution LEGACY TEMPLATING DISABLED AUTOMATICALLY
If you have installed `np.Templating` (see [installation](/docs/installation) for more information), the legacy version of Templates will be disabled automatically, no further action is required.

It is strongly recommended that you allow `np.Templating` to migrate all your existing templates and disable legacy templating plugin as it assures most cases have been covered.
:::

## Upgrading Manually
If you have chosen to perform migration manually and have not installed `np.Templating`, you can still prepare your templates to work with `np.Templating`

The first step will be to validate your templates have migrated successfully when `np.Templating` was installed.

:::info
During the `np.Templating` installation process, all your templates which were located in your "📋 Templates" folder were migrated and converted to the `np.Templating` syntax. If you wish to run templating migration process manually, use the `np:migrate-templates` command
:::

If you have templates which were not migrated correctly (we have attempted to cover all the possible templates, but there may be ones that `np.Templating` was not able to convert).

The following steps should be followed to convert your templates to `np.Templating` format.

### Step 1: Change Template Tags
`np.Templating` uses `<%-` and `%>` as opening and closing template tags (see [templating tags](/docs/templating-basics/template-tags) for more information).

For example, if you are using something like the following:

```js
{{formattedDateTime({format: '%A, %B %d, %Y'})}}
```

Replace with

```js
<%- formattedDateTime({format: '%A, %B %d, %Y'}) %>
```

## Disable Legacy Templates
The final step will be disabling Legacy Templates plugin

### Step 1: Open NotePlan Preferences
`NotePlan -> Preferences...`

### Step 2: Select Plugins Tab

### Step 3: Disable Templates
Uncheck `Templates` checkbox to uninstall legacy Templates

![Templating Prompt](/img/templates-uninstall.png)

### Step 4: Install `np.Templating`
For information on installing `np.Templating` see the [installation guide](/docs/installation)

### Step 5: Quit & Relaunch NotePlan
While it might not be necessary, it is safe to Quit & Relaunch NotePlan

### Step 6: Enjoy `np.Templating`
It is recommended that you read the remainder of the `np.Templating` documentation. Who reads docs, yes I too often skip this step, but there is a lot packed into `np.Templating` so it is good to get an overview of what's available!

At a minimum, have a look at all the [examples](/docs/templating-examples/simple). We have attempted all the various features of `np.Templating`. If you have any questions or issues, feel free to reach out to us!
