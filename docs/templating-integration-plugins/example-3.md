---
sidebar_position: 3
---

# Example 3: Custom Method
In this example, we will expand second example, adding a custom method which is exposed through the `templateData` argument on the `renderTemplate` method

*****
For example, if you have an arbitrary plugin method called `sayHello` it could look something like the following

```js
import NPTemplating from 'NPTemplating'

export async function templatingHelloWorld(): Promise<void> {
  try {
    const templateData = {
      methods: {
        sayHello: (name: string = '') => {
          return `Hello ${name}`
        }
      }
    }
    const result = await NPTemplating.renderTemplate('Template (Say Hello)', templateData)

    Editor.insertTextAtCursor(result)
  } catch (error) {
    showError('templateInstantiation', error)
  }
}
```

Then, you will have a templated name `Template (Hello World)` located in your NotPlan template folder with the following

```markdown
# Test (Say Hello)
*****
<%= sayHello('Mike') %>
```

Would produce the following output when the custom command is invoked

```markdown
Hello Mike
```

#### Template Breakdown
The breakdown of this template is as follows

```markdown
1: <%= sayHello('Mike') %>
```

- The first line is just some static text

- The second line will invoke the `sayHello` method which returns `Hello Mike`
