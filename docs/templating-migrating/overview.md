---
sidebar_position: 1
---

# Overview
`np.Templating` is a brand new templating plugin for NotePlan, which has been designed to be an upgrade to the current `nmn.Templates` templating plugin.

The following guide provides steps necessary for migrating from `Templates` (aka `nmn.Templates`) to `np.Templating`

## Updating Templates
The first step will be to modify those templates which you wish to use with `np.Templating` plugin.

#### Step 1: Change Template Tags
`np.Templating` uses `<%=` and `%>` as opening and closing template tags

For example, if you are using something like the following:

```js
{{formattedDateTime({format: '%A, %B %d, %Y'})}}
```

Replace with

```js
<%= formattedDateTime({format: '%A, %B %d, %Y'}) $>
```

## Disable Templates
The final step will be disabling Templates
