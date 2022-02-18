---
sidebar_position: 11
---

# Displaying Tasks

## Overview
The following example demonstrates how tasks can be displayed in a custom template

:::caution
This example assumes the `tasks` array has been supplied to the before rendering template.  This example will not work without being used in a custom NotePlan plugin
:::

### Custom NotePlan Plugin using Tasks Template

```javascript
export async function templatingTasks(): Promise<void> {
  try {
    const custom = {
      tasks: [
        { name: 'Item 1', completed: true },
        { name: 'Item 2', completed: false },
        { name: 'Item 3', completed: true },
        { name: 'Item 4', completed: false },
        { name: 'Item 5', completed: true },
      ],
    }

    const result = await NPTemplating.renderTemplate('Test (Tasks)', custom)

    Editor.insertTextAtCursor(result)
  } catch (error) {
    console.log('templatingTasks', error)
  }
}
```

### Tasks Template
**Template Name:** Test (Tasks)

```markdown
All Tasks [<%= tasks.length %>]:
<% tasks.forEach((task) => {
%><%= task.completed ? `- [x] ${task.name}\n`  : `- [ ] ${task.name}\n` %><%});%>

Closed Items [<%= tasks.filter(task => {return task.completed}).length %>]:
<% tasks.forEach((task) => {
%><%= task.completed ? `- [x] ${task.name}\n`  : '' %><%});%>

Open Items [<%= tasks.filter(task => {return !task.completed}).length %>]:
<% tasks.forEach((task) => {
%><%= task.completed ? ''  : `- [ ] ${task.name}\n` %><%});%>
```

### Rendered Output
When rendered, the template will produce the following

```markdown
All Tasks [5]:
- [x] Item 1
- [ ] Item 2
- [x] Item 3
- [ ] Item 4
- [x] Item 5


Closed Items [3]:
- [x] Item 1
- [x] Item 3
- [x] Item 5


Open Items [2]:
- [ ] Item 2
- [ ] Item 4
```
