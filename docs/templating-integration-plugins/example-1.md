---
sidebar_position: 1
---

# Example 1: Hello World
In this example, we will expose the `NPTemplating` module and use the `renderTemplate` method

## Using `NPTemplating` module
The `NPTemplating` module contains suite of methods which can be used for various operations.

### renderTemplate(templateName: string, templateData?: object)
The `renderTemplate` method will render using the supplied `templateName` and `templateData` arguments

#### templateName: string
Desired template name, located in NotePlan templates folder

#### templateData?: object
Template data object, which will contain any custom template variables or methods

templateData has two objects which are used to supply `data` and `methods`
- data - Any data (variables) which are referenced in your template
- methods - Any method that is referenced in your template

```js
const templateData = {
  data: {},
  methods: {}
}
```

*****
For example, if you have an arbitrary plugin method called `showHelloWorld` it could look something like the follwoing

```js
import NPTemplating from 'NPTemplating'

export async function showHelloWorld(): Promise<void> {
  try {
    const result = await NPTemplating.renderTemplate('Template (Hello World)')

    Editor.insertTextAtCursor(result)
  } catch (error) {
    showError('templateInstantiation', error)
  }
}
```

Then, you will have a templated name `Template (Hello World)` located in your NotPlan template folder with the following

```markdown
# Test (HelloWorld)
*****
This portion will be used as the template!

Current Date: *<%= date.now() %>*
```

Would produce the following output when the custom command is invoked

```markdown
This portion will be used as the template!

Current Date: *2021-12-24*
```

#### Template Breakdown
The breakdown of this template is as follows

```markdown
1: This portion will be used as the template!
2:
3: Current Date: *<%= date.now() %>*
```

- The first line is just some static text

- The second line will a blank line

- The third line display current date, using the `DateModule.now` method
