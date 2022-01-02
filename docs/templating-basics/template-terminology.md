---
sidebar_position: 4
---

# Terminology
To further understand how `np.Templating` works, let's define a few important items:

- A template is a note which contains text and commands
- A text snippet that starts with an opening tag `<%=`, ends with a closing tag `%>` and contains a **variable** or **method** (which is referred to as command or placeholder). You can refer to [Templating - Commands](/docs/templating-commands/overview) to find more advanced usage of commands
- A **variable** or **method** is an object that we can invoke using a [template command](/docs/templating-commands/overview) and that returns a value (the replacement string)

There are two types of **variables**/**methods** you can use in your templates:

- [Template Methods](/docs/templating-modules/overview). They are predefined **variables/methods** that are built within the plugin. For example, `date.now` is an internal variable that will return the current date.
- User defined functions. Other NotePlan plugins can extend `np.Templating` built-in **variables/methods** with their own custom variable or methods. For example `sweepTasks` or `listTodaysEvents` are custom plugin functions which operate on NotePlan tasks or events.

For example, the following template contains 1 variable (`firstName`) and 2 commands from `DateModule` (`yesterday`, and `tomorrow`)
- `np.Templating` variables do not have left and right parenthesis
- `np.Templating` methods contain an opening and closing parenthesis, followed by _optional_ parameter(s)

```markdown
First Name: <% firstName %>
Yesterday: <% date.yesterday() %>
Tomorrow: <% date.tomorrow("YYYY-MM-DD") %>
```
