---
sidebar_position: 4
---

# FrontMatter Module

## Overview
The FrontMatter Module can be used to work with templates which are in frontmatter format

:::info
#### FrontMatter Helpers
The FrontMatter Module exposes commonly used [helper](/docs/templating-modules/frontmatter-module#helpers) methods
:::

## Methods

The following are the methods available in the FrontMatter Module, and they can be used to process frontmatter formatted templates

:::note
When implementing `NPTemplating.renderTemplate` if template is a valid frontmatter template, they will be rendered automatically without performing any additional frontmatter processing
:::

:::danger
All frontmatter attributes values must start with an alpha character (a..z, A..Z) otherwise must be surrounded with double quotes

**Bad:**

The following attribute value will cause any FrontMatter module method to return an empty attribute block
```
attribute: - invalid character
```

**Good:**

The following attribute value be properly parsed as it is surrounded in quotes

```
attribute: "- invalid character"
```

:::

*****
### isFrontmatterTemplate
> #### isFrontmatterTemplate(templateData : string = '')  : boolean
Returns `true | false` if supplied template data is valid frontmatter content

- `templateData` - Template data

- `-> result` - Returns `true | false` if template is frontmatter format

**Examples**

The following example returns `true` or `false` if supplied template data is a fronmatter template.

```javascript
import NPTemplating from 'NPTemplating'
import FrontMatterTemplate from '@TemplatingModules/FrontMatterModule'

export async function testFrontmatter(): Promise<void> {
  try {
    const result = await NPTemplating.getTemplate('FrontMatter Template Example')

    const isFrontMatterTemplate = new FrontMatterModule().isFrontMatterTemplate(templateData)
  } catch (error) {
    console.log('testFrontmatter', error)
  }
}
```

*****
### getFrontmatterBlock
> #### getFrontmatterBlock(templateData : string = '')  : string
Returns frontmatter block from `templateData`

The frontmatter block of a template is content between start `---` and end `---` tags.

- `templateData` - Template data

- `-> result` - Returns frontmatter block

**Examples**

The following example returns the frontmatter block for supplied template data

```javascript
import NPTemplating from 'NPTemplating'
import FrontMatterTemplate from '@TemplatingModules/FrontMatterModule'

export async function testFrontmatter(): Promise<void> {
  try {
    const result = await NPTemplating.getTemplate('FrontMatter Template Example')

    const frontmatterBlock = new FrontMatterModule().getFrontmatterBlock(templateData)
  } catch (error) {
    console.log('testFrontmatter', error)
  }
}
```

*****
### parse
> #### parse(templateData : string = '')  : any
Parses frontmatter template, returning frontmatter attributes and body

- `templateData` - Template data

- `-> result` - Frontmatter template object, returns {attributes and body}

**Examples**

The following parses frontmatter template, return an object which contains two keys

- attributes -> contains object of frontmatter header
- body -> contains information after closing frontmatter tag `---`

```javascript
import NPTemplating from 'NPTemplating'
import FrontMatterTemplate from '@TemplatingModules/FrontMatterModule'

export async function testFrontmatter(): Promise<void> {
  try {
    const result = await NPTemplating.getTemplate('FrontMatter Template Example')

    const frontmatterObj = new FrontMatterModule().parse(templateData) // returns frontmatter properties (attributes and body)

		const attrs = frontmatterObj?.attributes || {}
		const body = frontmatterObj?.body || ''

  } catch (error) {
    console.log('testFrontmatter', error)
  }
}
```

*****
### attributes
> #### attributes(templateData : string = '')  : any
Retrieves frontmatter attributes (tags between template tags `---`)

_Note: Also available as [helper](/docs/templating-modules/frontmatter-module#helpers) method_

- `templateData` - Template data

- `-> result` - Frontmatter template attributes

:::danger
Make sure all attribute values starts with alpha characters (a..z, A..Z) or surrounded with double quotes
:::

**Examples**

The following example returns the current date, using default values

```javascript
import NPTemplating from 'NPTemplating'
import FrontMatterTemplate from '@TemplatingModules/FrontMatterModule'

export async function testFrontmatter(): Promise<void> {
  try {
    const result = await NPTemplating.getTemplate('FrontMatter Template Example')

    const templateAttributes = new FrontMatterModule().attributes(templateData) // returns frontmatter attributes

  } catch (error) {
    console.log('testFrontmatter', error)
  }
}
```

*****

### body
> #### body(templateData : string = '')  : any
Retrieves frontmatter body (below closing frontmatter template block `---`)

_Note: Also available as [helper](/docs/templating-modules/frontmatter-module#helpers) method_

- `templateData` - Template data

- `-> result` - Frontmatter template body

**Examples**

The following example returns the current date, using default values

```javascript
import NPTemplating from 'NPTemplating'
import FrontMatterTemplate from '@TemplatingModules/FrontMatterModule'

export async function testFrontmatter(): Promise<void> {
  try {
    const result = await NPTemplating.getTemplate('FrontMatter Template Example')

    const frontmatterBody = new FrontMatterModule().body(templateData) // returns frontmatter body

  } catch (error) {
    console.log('testFrontmatter', error)
  }
}
```

*****

## Using Prompts
If you wish to display prompts in your frontmatter attributes section, you can just use the standard `np.Templating` prompt command

### Example
Using something like the following, when the template is rendered `np.Templating` will display prompt requesting `newNoteTitle`

```markdown
---
title: Sample Frontmatter Prompt
newNoteTitle: <%- prompt('newNoteTitle','Enter New Note Title:' %>
---
```

When template is rendered, the user will be prompted for `newNoteTitle` with entered value being used for new note

:::tip
When using any of the following `np.Templating` commands (`np:new`, `np:qtn`), the created note will use the `newNoteTitle` internally
:::

*****

## Helpers
FrontMatterModule exposes commonly used methods as importable helpers

### getAttributes
> #### getAttributes()

### getBody
> #### getBody()

*****

**Example:**

The following example will get `attributes` and `body` from frontmatter template

```javascript
// import np.Templating Library
import NPTemplating from 'NPTemplating'
import { getAttributes, getBody } from '@templatingModules/FrontMatterModule'

const templateData = {
	const templateData = NPTemplating.getTemplate('My Template')

	const attrs = getAttributes(templateData)
	const body = getBody(templateData)
}
```
