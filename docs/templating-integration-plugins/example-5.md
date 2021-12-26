---
sidebar_position: 5
---

# Example 5: Custom Tags
In this example, we will demonstrate how you can use custom delimeters along side np.Templating default delimiters
_TODO:CreateTagExample_

*****
In this example, I have a custom plugin `codedungeon.NotePlan` which contains a number of commands, one of which is called `cdWeekday` which I invoke each day in my NotePlan Daily Note.  There is quite a bit to this command, I will try to unpack every that is happening.

```js
import NPTemplating from 'NPTemplating'

export async function templatingFrontmatter(): Promise<void> {
  try {
    const result = await NPTemplating.renderTemplate(templateFilenamePath('Test (Frontmatter)'), {})

    Editor.insertTextAtCursor(result)
  } catch (error) {
    showError(error)
  }
}
```
