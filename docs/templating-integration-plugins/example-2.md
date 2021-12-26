---
sidebar_position: 2
---

# Example 2: Custom Variable
In this example, we will expand first example, adding a custom variable which is exposed through the `templateData` argument on the `renderTemplate` method

*****
For example, if you have an arbitrary plugin method which would output a variable, it would be construted as follows:

```js
import NPTemplating from 'NPTemplating'

export async function templatingHelloWorld(): Promise<void> {
  try {
    const templateData = {
      data: {
        name: 'Mike'
      }
    }
    const result = await NPTemplating.renderTemplate('Template (Variable)', templateData)

    Editor.insertTextAtCursor(result)
  } catch (error) {
    showError('templateInstantiation', error)
  }
}
```

Then, you will have a templated name `Template (Hello World)` located in your NotPlan template folder with the following

```markdown
# Test (Variable)
*****
<%= name %>
```

Would produce the following output when the custom command is invoked

```markdown
Mike
```

#### Template Breakdown
The breakdown of this template is as follows

```markdown
1: <%= name %>
```

- The first line would display the value in `name` variable
